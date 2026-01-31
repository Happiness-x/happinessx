import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Serverless function to send reflection-results email.
 * Validates email input, reads template, and sends via configured service.
 */
export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, html, subject } = req.body;

  // Validate email format
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Allow override html/subject from request body, otherwise read default template
    let htmlContent = html;
    let emailSubject = subject || "Your Reflection Has Been Received";
    if (!htmlContent) {
      const templatePath = path.join(
        __dirname,
        "..",
        "templates",
        "reflection-results-email.html"
      );
      htmlContent = fs.readFileSync(templatePath, "utf-8");
    }

    // Note: do NOT log reflection content or htmlContent. Only log recipient address and minimal status.
    console.info(`[send-reflection-email] Attempting to send to ${email} (reflection content not logged)`);
    // Send email via configured service
    // Currently supports:
    // 1. Sendgrid (SENDGRID_API_KEY env var)
    // 2. Resend (RESEND_API_KEY env var)
    // 3. SMTP via Nodemailer (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
    // 4. Fallback: log for manual processing (development mode)

    const emailSent = await sendEmail(email, htmlContent, emailSubject);
    if (!emailSent) {
      console.error(`[send-reflection-email] Failed to send to ${email}`);
      // Optionally forward failure to analytics endpoint
      if (process.env.ANALYTICS_ENDPOINT) {
        try {
          await fetch(process.env.ANALYTICS_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ event: "reflection_email_failed", email }),
          });
        } catch (e) {
          console.error("[analytics-forward] error", e.message);
        }
      }
      return res.status(500).json({ error: "Failed to send email" });
    }

    console.info(`[send-reflection-email] Sent to ${email} (reflection content not logged)`);
    return res.status(200).json({
      success: true,
      message: "Reflection acknowledgement email sent",
    });
  } catch (error) {
    console.error("[send-reflection-email] Error:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

/**
 * Send email via configured transactional service.
 * @param {string} recipientEmail - Recipient email address
 * @param {string} htmlContent - Email HTML content
 * @returns {Promise<boolean>} - True if sent successfully
 */
async function sendEmail(recipientEmail, htmlContent, emailSubject) {
  // SendGrid
  if (process.env.SENDGRID_API_KEY) {
    return await sendViasendgrid(recipientEmail, htmlContent, emailSubject);
  }

  // Resend
  if (process.env.RESEND_API_KEY) {
    return await sendViaResend(recipientEmail, htmlContent, emailSubject);
  }

  // SMTP / Nodemailer
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    return await sendViaSMTP(recipientEmail, htmlContent, emailSubject);
  }

  // Fallback: log email (development / testing)
  console.log(
    `[reflection-email] Would send to ${recipientEmail} (no email service configured)`
  );
  return true;
}

/**
 * Send via SendGrid API
 */
async function sendViaendgrid(recipientEmail, htmlContent) {
  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: recipientEmail }],
            subject: emailSubject || "Your Reflection Has Been Received",
          },
        ],
        from: {
          email: process.env.SENDGRID_FROM_EMAIL || "noreply@happinessx.in",
          name: "Happiness X",
        },
        content: [
          {
            type: "text/html",
            value: htmlContent,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`SendGrid API error: ${error}`);
    }

    return true;
  } catch (error) {
    console.error("[sendgrid] Error:", error.message);
    return false;
  }
}

/**
 * Send via Resend API
 */
async function sendViaResend(recipientEmail, htmlContent) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "noreply@happinessx.in",
        to: recipientEmail,
        subject: emailSubject || "Your Reflection Has Been Received",
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${error}`);
    }

    return true;
  } catch (error) {
    console.error("[resend] Error:", error.message);
    return false;
  }
}

/**
 * Send via SMTP (Nodemailer)
 */
async function sendViaSMTP(recipientEmail, htmlContent) {
  try {
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || "noreply@happinessx.in",
      to: recipientEmail,
      subject: emailSubject || "Your Reflection Has Been Received",
      html: htmlContent,
    });

    return !!result.messageId;
  } catch (error) {
    console.error("[smtp] Error:", error.message);
    return false;
  }
}

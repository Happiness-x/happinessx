
# Happinessx Website

### Run locally
1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in terminal:
   ```bash
   npm install
   npm run dev
   ```
3. Open the URL shown (usually http://localhost:5173)

### Deploy to Vercel

- Create a free account at https://vercel.com
- Import this folder from your GitHub repo (or drag & drop the project)
- Build command: `npm run build`
- Publish directory: `dist`
- Vercel will detect this is a static build (Vite) — `vercel.json` is included for SPA routing.

### Calendly integration & Learn page

- Add your Calendly scheduling URL to Vercel environment variables as `VITE_CALENDLY_URL` (or copy `.env.example` to `.env.local` for local development).
- Example value: `https://calendly.com/your-username/30min`
- The new Learn page (`/learn`) will display an inline Calendly widget when the env var is set. If no scheduler is configured, the page falls back to the booking form on the homepage.

### Clinical booking endpoint (serverless)

- This project includes a Vercel serverless endpoint at `/api/book` which accepts POST requests with booking data: `name`, `email`, `phone`, `preferred_date`, `message`.
- Optional integrations:
   - SendGrid: if `SENDGRID_API_KEY` is set in Vercel, the API will send an email notification to `SENDGRID_TO` from `SENDGRID_FROM` with the booking details.
   - Formspree: if `FORMSPREE_ACTION` is set in `.env` or Vercel env, the API will forward the submission to Formspree for storage and email notifications.

### Environment variables

Set these environment variables on Vercel (or in `.env.local` for local testing):

```
VITE_CALENDLY_URL="https://calendly.com/your-username/30min"
SENDGRID_API_KEY="<your-sendgrid-key>"
SENDGRID_FROM="no-reply@yourdomain.com"
SENDGRID_TO="your-email@domain.com"
FORMSPREE_ACTION="https://formspree.io/f/yourid"
```

### Deployment notes

- Deploy to Vercel as a standard Vite project. The `api/book.js` file will be deployed as a serverless function automatically.
- For email confirmations via SendGrid, create an API key and set `SENDGRID_API_KEY` in the Vercel dashboard. Make sure `SENDGRID_FROM` is a verified sender in SendGrid.

### Booking confirmations

- The current booking form on the homepage uses Formspree (`action="https://formspree.io/f/myznnojw"`) and redirects to `https://happinessx.in/thank-you` after submission. To receive booking confirmations:
   - Keep Formspree configured (you'll receive submissions to the linked Formspree inbox), or
   - Replace the form action with your own API endpoint to send confirmation emails and save bookings, or
   - Use Calendly as the canonical booking source; Calendly will send confirmation emails and calendar invites automatically when users book.

### Run locally

1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in terminal:
```powershell
npm install
npm run dev
```
3. Open the URL shown (usually http://localhost:5173)

### Build (production)

```powershell
npm run build
npm run preview
```

Updated: Added About page, Calendly integration, and Vercel config.

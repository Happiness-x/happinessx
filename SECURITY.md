Security notes

- Do NOT commit API keys or secrets to the repository. The repository previously contained a secret key in an attachment; remove any such secrets and rotate them immediately if they are real.
- Add SendGrid API keys and other secrets to Vercel's Environment Variables or to a local `.env.local` file that is in `.gitignore`.
- The serverless endpoint `api/book.js` accepts POST requests; consider adding CAPTCHA, rate-limiting, and validation for production.
- Use HTTPS and ensure CORS is configured if you serve the API from a different domain.

# Student Feedback Automation System

This project uses a React + Vite frontend to collect student feedback and send it to an n8n webhook workflow.

## Setup

1. Open the frontend folder:
   ```bash
   cd Frontend
   ```
2. Copy the example environment file and update the webhook URLs:
   ```bash
   cp .env-example .env
   ```
3. Install dependencies and start the app:
   ```bash
   npm install
   npm run dev
   ```

## Environment variables

Create the frontend environment file at [Frontend/.env](Frontend/.env) with the following values:

```env
VITE_N8N_WEBHOOK_URL=https://your-production-webhook-url
VITE_N8N_WEBHOOK_TEST_URL=https://your-test-webhook-url
```

The form uses the production URL in production mode and the test URL otherwise.

## Notes

- The frontend submits feedback to the configured n8n webhook endpoint.
- Vite only exposes variables that start with the VITE_ prefix to the frontend code.
- Restart the development server after changing the environment variables.

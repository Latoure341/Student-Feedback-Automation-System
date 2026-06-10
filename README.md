# Feedback App with n8n Automation

This project is a React + Vite frontend for collecting user feedback and forwarding it to an n8n workflow.

## What it does

- Displays a feedback form to the user
- Submits form data to an n8n webhook
- Uses n8n automation to process the feedback
- Sends an email to the user after feedback is successfully submitted

## n8n automation

The feedback flow is extended with n8n automation, which performs these steps:

1. Receives feedback via a webhook from the frontend
2. Optionally edits or enriches the incoming fields
3. Appends the feedback row to a spreadsheet
4. Sends a confirmation email to the user once the feedback is stored

## Frontend location

The React frontend is located in `Frontend/`.

## Run locally

From the `Frontend/` folder:

```bash
npm install
npm run dev
```

## Workflow screenshot

Below is the workflow diagram for the n8n automation:

![n8n workflow](./n8n-workflow.png)

> To display the workflow screenshot here, place the actual image file as `n8n-workflow.png` at the root of the project.

## Notes

- The frontend connects to your n8n webhook endpoint to trigger the automation.
- This README documents the feedback-to-email automation powered by n8n.

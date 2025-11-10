# Full Stack Feedback Collection App

## Overview

This project is a full-stack web application built as part of an advanced training course in React, Redux, Node, and MongoDB. The goal is to create a production-style feedback collection platform that allows authenticated users to send mass emails to lists of recipients and collect structured feedback.

## Tech Stack

* **Front-End:** React, Redux, React Router
* **Back-End:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** Google OAuth
* **Payments:** Stripe
* **Email Delivery:** Email provider integration (ex: SendGrid)

## Main Features

* Full OAuth based authentication flow
* Secure API key and environment configuration
* Manage user credits with Stripe payments
* Build & store mailing lists
* Send bulk campaign emails to users
* Track responses / feedback

---

## Setup

1. Clone the repository

```bash
git clone <repo-url>
cd <project-folder>
```

2. Install dependencies for both server and client

```bash
npm install
cd client && npm install
```

3. Add environment variables (keys for Google OAuth, Stripe) into `config/dev.js` or use `.env`
4. Run the development servers

```bash
npm run dev
```

This will start both the Express API and the React client.

## Deployment (Render)

The app is deployed on Render.

**Live Demo:** [https://emaily-npo8.onrender.com/](https://emaily-npo8.onrender.com/)

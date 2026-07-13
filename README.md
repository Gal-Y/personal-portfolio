# Galen Yuan — Personal Portfolio

My React portfolio for professional experience, projects, technical build notes, certifications, and contact.

Live site: [galen-yuan.com](https://www.galen-yuan.com/)

## What the site includes

- Responsive card-based interface with Framer Motion page transitions.
- Fourteen projects with verified deployment labels: live, not publicly deployed, deployment offline, or private.
- Separate live-demo, source-code, and build-note actions so unavailable deployments are never presented as working links.
- Project filters for live, non-live, and private work.
- Case-study blog pages for the healthcare referral demo, HL7/FHIR thesis tool, GCP modernization case study, 3D portfolio, data engineering lab, AppTracker, and Contacts App.
- Accessible contact form delivered through [FormSubmit](https://formsubmit.co/), with a direct email link as a fallback.
- Reduced-motion support, keyboard focus states, responsive navigation, scroll progress, and back-to-top controls.

## Tech stack

- React 19
- React Router
- Tailwind CSS
- Framer Motion
- React Icons
- Create React App

## Local development

```bash
npm install
npm start
```

The default local URL is `http://localhost:3000/`. A custom port can be supplied with `PORT=4174 npm start`.

## Validation

```bash
CI=true npm test -- --watchAll=false
npm run build
```

## Contact form

The contact form posts to FormSubmit's cross-origin AJAX endpoint for `galenyuan1@gmail.com`. FormSubmit requires a one-time activation from the email it sends to that inbox before production messages are delivered.

The form includes:

- required name, email, and message fields;
- optional subject;
- loading, success, and error states;
- a hidden honeypot field;
- a direct `mailto:` option if the form service is unavailable.

## Deployment

The repository's deployment branch is `master`. Pushing to `origin/master` updates the AWS-hosted portfolio through the existing repository integration.

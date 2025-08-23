// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
    dsn: "https://1af8858390161417c1f91c630a4bb8aa@o4509892973166592.ingest.us.sentry.io/4509892982538240",
    integrations: [Sentry.mongooseIntegration()],

    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});
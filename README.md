# Lariba Cloud Developer Documentation

Official public developer documentation for **Lariba Cloud**.

This repository contains guides, API references, SDK guidance, integration examples, and public product concepts intended for developers integrating with Lariba Cloud.

## Documentation scope

The public documentation covers:

- Quickstart and event ingestion
- Authentication and API keys
- Organizations, projects, and Event Sources
- Public API reference material
- SDK availability and compatibility guidance
- Billing, webhooks, Sentinel, and other documented product workflows
- Public changelog information

## Public boundary

This repository documents Lariba Cloud's **public developer surface**.

Lariba Cloud production applications, control-plane implementation, deployment infrastructure, internal engineering workflows, security-sensitive implementation, recovery tooling, and proprietary automation are maintained outside this public repository.

> **Public interfaces. Private implementation. Clear boundaries.**

## Local development

Install dependencies from the lockfile:

```bash
npm ci
```

Start the documentation site:

```bash
npm run dev
```

Run the repository validation suite:

```bash
npm run check
```

The site is built with **Next.js**, **Nextra**, **React**, and **TypeScript**.

## Public developer resources

- [Lariba Cloud API specification](https://github.com/node63labs/lariba-spec)
- [Lariba Cloud JavaScript/TypeScript SDK](https://github.com/node63labs/lariba-sdk-js)
- [NODE63 Labs on GitHub](https://github.com/node63labs)

## Security

Do not disclose credentials, API keys, secrets, private infrastructure details, or suspected vulnerabilities in public issues.

Use the security-reporting guidance published by NODE63 Labs or the relevant Lariba Cloud public repository when available.

## License

This repository is licensed under the [MIT License](./LICENSE).

Copyright © 2026 NODE63 Labs.

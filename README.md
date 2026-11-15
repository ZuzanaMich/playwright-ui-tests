# Playwright UI Tests

Automated end-to-end (E2E) UI tests written in **Playwright** (TypeScript).

## What the Tests Cover

- **`tests/kaktusy.spec.ts`** – verifies page load, main heading, and navigation across sections and plant detail pages on [cactus-collection.pages.dev](https://cactus-collection.pages.dev/).
- **`tests/login.spec.ts`** – tests user login (both positive and negative scenarios) and adding a product to the shopping cart on the [saucedemo.com](https://www.saucedemo.com/) demo e-shop.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS)

## Running the Tests Locally

1. Install dependencies and Playwright browsers:
   ```bash
   npm ci
   npx playwright install
   ```

2. Run all tests:
   ```bash
   npx playwright test
   ```

3. Open the HTML test report:
   ```bash
   npx playwright show-report
   ```

## Continuous Integration (GitHub Actions)

Tests are configured to run automatically via GitHub Actions (`.github/workflows/playwright.yml`) on every `push` and `pull_request` to the `main` or `master` branch.

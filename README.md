# Playwright UI testy

Automatizované end-to-end (E2E) testy napísané v **Playwright** (TypeScript).

## Čo testy pokrývajú

- **`tests/kaktusy.spec.ts`** – overenie načítania stránky [cactus-collection.pages.dev](https://cactus-collection.pages.dev/), hlavného nadpisu a navigácie na jednotlivé sekcie a rastliny.
- **`tests/login.spec.ts`** – testy prihlásenia (pozitívny aj negatívny scenár) a pridania produktu do košíka na demo e-shope [saucedemo.com](https://www.saucedemo.com/).

## Požiadavky

- [Node.js](https://nodejs.org/) (LTS)

## Spustenie testov lokálne

1. Nainštaluj závislosti a prehliadače:
   ```bash
   npm ci
   npx playwright install
   ```

2. Spusti všetky testy:
   ```bash
   npx playwright test
   ```

3. Zobrazenie HTML reportu po behu testov:
   ```bash
   npx playwright show-report
   ```

## CI (GitHub Actions)

Testy sú nastavené na automatické spúšťanie cez GitHub Actions (`.github/workflows/playwright.yml`) pri každom `push` a `pull_request` do vetvy `main` alebo `master`.

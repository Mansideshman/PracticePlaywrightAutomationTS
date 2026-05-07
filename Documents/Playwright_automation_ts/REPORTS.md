# 📊 Test Reports Quick Guide

After running `npm test`, view your test reports here:

## 🎭 CustomTTA Report (Real-time Analytics)
```bash
open utils/reports/tta/index.html
```
- Real-time updates during test execution
- Step-by-step logs and console output
- Screenshots, videos, and traces
- Test filtering by status and priority

## 🌐 Playwright HTML Report
```bash
open utils/reports/playwright/index.html
```
- Native Playwright reporting
- Visual execution timeline
- Test artifacts and attachments

## 📈 Allure Report (Professional Analytics)
```bash
open utils/reports/allure/index.html
```
- Test trends and history
- Detailed test categorization
- Executive summary and charts

## 📜 View Test Run History
```bash
open utils/reports/tta/history.html
```
- All previous test runs
- Timestamped reports
- Quick links to past results

---

## 🚀 Run Tests

```bash
# Run all tests
npm test

# Run specific test file
npx playwright test tests/06_multipleElements/multipleelements.spec.ts

# Run tests with tag filter
npx playwright test --grep "@smoke"
```

---

## 📁 Report Locations

```
utils/reports/
├── tta/          ← CustomTTA Reports (Real-time)
├── playwright/   ← Playwright HTML Reports
└── allure/       ← Allure Reports (Professional)
```

See `utils/reports/README.md` for detailed documentation.

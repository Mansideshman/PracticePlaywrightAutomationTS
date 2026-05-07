# 📊 Test Report Commands Reference

Quick commands to view and manage your Playwright test reports.

---

## 🚀 Quick Start

### View Latest CustomTTA Report (Recommended)
```bash
open utils/reports/tta/index.html
```

### Generate New Reports
```bash
npm test
```

---

## 📋 Report Viewing Commands

### 🎭 CustomTTA Report (Real-time Dashboard)
Real-time test execution monitoring with detailed step logs.

```bash
# Latest report (auto-redirects)
open utils/reports/tta/index.html

# Specific timestamped report
open utils/reports/tta/report_20260506_223721.html

# Test run history
open utils/reports/tta/history.html
```

### 🌐 Playwright Report (Native HTML)
Native Playwright's built-in HTML reporter.

```bash
# View report
open utils/reports/playwright/index.html
```

### 📈 Allure Report (Professional Analytics)
Professional test analytics with trends and charts.

```bash
# View report
open utils/reports/allure/index.html
```

---

## 🎯 Useful Commands

### List All Available Reports
```bash
# List TTA reports
ls -lah utils/reports/tta/report_*.html

# List all reports
ls -lah utils/reports/*/

# Tree view of reports folder
tree -L 3 utils/reports/
```

### Find Latest Report
```bash
# Get latest TTA report
ls -lh utils/reports/tta/report_*.html | tail -1

# Get latest Playwright report
ls -lh utils/reports/playwright/index.html
```

### View Directory Structure
```bash
# Show reports folder structure
tree -L 2 utils/reports/

# Or using find
find utils/reports -type f -name "*.html"
```

---

## 💾 File Paths

### Direct Paths
```
Latest CustomTTA:     utils/reports/tta/index.html
TTA History:          utils/reports/tta/history.html
Latest TTA Report:    utils/reports/tta/report_YYYYMMDD_HHMMSS.html
Playwright Report:    utils/reports/playwright/index.html
Allure Report:        utils/reports/allure/index.html
```

### Directory Paths
```
TTA Reports:          utils/reports/tta/
Playwright Reports:   utils/reports/playwright/
Allure Reports:       utils/reports/allure/
All Reports:          utils/reports/
Screenshots:          utils/reports/tta/screenshots/
Videos:               utils/reports/tta/videos/
Traces:               utils/reports/tta/traces/
```

---

## 🔧 Automation Scripts

### Using the Report Viewer Script

If you're on macOS/Linux with the script enabled:

```bash
# Make script executable (one time)
chmod +x view-reports.sh

# View CustomTTA Report
./view-reports.sh tta
./view-reports.sh 1

# View Playwright Report
./view-reports.sh playwright
./view-reports.sh 2

# View Allure Report
./view-reports.sh allure
./view-reports.sh 3

# View Test History
./view-reports.sh history
./view-reports.sh h

# Open all reports at once
./view-reports.sh all
./view-reports.sh a

# List available reports
./view-reports.sh list
./view-reports.sh ls
```

---

## 🌐 Browser Server (Local Testing)

### Using Python
```bash
cd utils/reports/tta
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Using Node.js
```bash
cd utils/reports/tta
npx http-server

# Then visit: http://localhost:8080
```

---

## 📊 Report Features at a Glance

| Feature | CustomTTA | Playwright | Allure |
|---------|-----------|-----------|--------|
| Real-time Updates | ✅ | ❌ | ❌ |
| Step-by-step Logs | ✅ | ✅ | ✅ |
| Screenshots | ✅ | ✅ | ✅ |
| Videos | ✅ | ✅ | ❌ |
| Test Filtering | ✅ | ✅ | ✅ |
| Trend Charts | ❌ | ❌ | ✅ |
| History Tracking | ✅ | ❌ | ✅ |
| Console Logs | ✅ | ✅ | ✅ |

---

## 🔄 Running Tests & Generating Reports

### Run All Tests
```bash
npm test
```

### Run Specific Test File
```bash
npx playwright test tests/07_WebTables/232_WebTable_Basic.spec.ts
```

### Run Tests in Directory
```bash
npx playwright test tests/01_Basics/
```

### Run Tests with Tag Filter
```bash
npx playwright test --grep "@smoke"
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests with Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📝 Report Details

### What Each Report Contains

**CustomTTA Report:**
- Test execution timeline
- Pass/Fail/Skip statistics
- Step-by-step execution logs
- Console output
- Screenshots and videos
- Error stack traces
- Test run history
- Filtering by status and priority

**Playwright Report:**
- Test execution steps
- Failure details
- Screenshots
- Videos
- Traces
- Timeline visualization
- Artifact attachments

**Allure Report:**
- Test results summary
- Historical trends
- Test categorization
- Failure analysis
- Test duration charts
- Execution timeline
- Executive summary
- Test dependencies

---

## 🎯 Common Workflows

### Workflow 1: Check Latest Test Results
```bash
npm test                              # Run tests
open utils/reports/tta/index.html    # View results
```

### Workflow 2: View All Report Types
```bash
npm test                                      # Run tests
open utils/reports/tta/index.html            # CustomTTA
open utils/reports/playwright/index.html     # Playwright
open utils/reports/allure/index.html         # Allure
```

### Workflow 3: Review Test History
```bash
open utils/reports/tta/history.html  # All previous runs
```

### Workflow 4: Debug Failed Test
```bash
npx playwright test tests/path/to/test.spec.ts  # Run test
open utils/reports/tta/index.html               # View failure
# Examine error logs and stack trace in report
```

---

## 💡 Tips & Tricks

### Shortcut: Create Alias (Bash/Zsh)
```bash
# Add to ~/.bashrc or ~/.zshrc
alias reports="open utils/reports/tta/index.html"
alias reports-all="open utils/reports/tta/index.html & open utils/reports/playwright/index.html & open utils/reports/allure/index.html"

# Then use:
reports
reports-all
```

### Share Reports with Team
```bash
# Share report folder via any method:
# - Git (reports are git-ignored for local use)
# - Email (zip the folder)
# - Cloud storage (Dropbox, Google Drive, etc.)
# - Internal server (copy to web folder)

# Zip reports for sharing
zip -r test-reports.zip utils/reports/
```

### Clean Old Reports
```bash
# Keep only last 5 reports
ls -t utils/reports/tta/report_*.html | tail -n +6 | xargs rm

# Clear all reports
rm -rf utils/reports/tta/report_*.html
```

---

## 🔍 Troubleshooting

### Reports Not Opening
- Check file paths are correct
- Verify reports directory exists: `ls utils/reports/`
- Clear browser cache
- Try opening in different browser

### Reports Look Outdated
- Refresh browser (Cmd+R or Ctrl+R)
- Clear cache
- Re-run tests: `npm test`

### Missing Screenshots/Videos
- Verify capture settings in `playwright.config.ts`
- Check test results in reports folder
- Ensure tests actually captured media

### Port Already in Use
```bash
# If port 8000 is in use, try different port
python -m http.server 8001  # Instead of 8000
```

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Allure Documentation](https://docs.qameta.io/allure/)
- [The Testing Academy](https://thetestingacademy.com)
- Local: `utils/reports/README.md` - Detailed report documentation

---

## 📞 Quick Reference

```bash
# View main report
open utils/reports/tta/index.html

# View history
open utils/reports/tta/history.html

# List reports
ls -lh utils/reports/tta/report_*.html

# Run tests
npm test

# Help
./view-reports.sh --help
```

---

**Last Updated:** May 6, 2026  
**Version:** 1.0

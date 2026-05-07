#!/bin/bash

# Report Viewing Script
# Usage: ./view-reports.sh [option]

echo ""
echo "╔═══════════════════════════════════════════════════════════════════╗"
echo "║              📊 PLAYWRIGHT TEST REPORTS VIEWER                   ║"
echo "╚═══════════════════════════════════════════════════════════════════╝"
echo ""

case "$1" in
  tta|customtta|1)
    echo "Opening CustomTTA Report (Real-time Dashboard)..."
    open utils/reports/tta/index.html
    ;;
  playwright|2)
    echo "Opening Playwright Report..."
    open utils/reports/playwright/index.html
    ;;
  allure|3)
    echo "Opening Allure Report (Professional Analytics)..."
    open utils/reports/allure/index.html
    ;;
  history|h|4)
    echo "Opening Test Run History..."
    open utils/reports/tta/history.html
    ;;
  all|a|5)
    echo "Opening all three reports..."
    open utils/reports/tta/index.html
    open utils/reports/playwright/index.html
    open utils/reports/allure/index.html
    ;;
  list|ls|l)
    echo "📁 Available Reports:"
    echo ""
    ls -lh utils/reports/tta/report_*.html 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
    echo ""
    ;;
  *)
    echo "Usage: ./view-reports.sh [option]"
    echo ""
    echo "Options:"
    echo "  tta, customtta, 1     - View CustomTTA Report (Real-time Dashboard)"
    echo "  playwright, 2         - View Playwright Report (Native)"
    echo "  allure, 3             - View Allure Report (Professional)"
    echo "  history, h, 4         - View Test Run History"
    echo "  all, a, 5             - Open all three reports"
    echo "  list, ls, l           - List all available reports"
    echo ""
    echo "Examples:"
    echo "  ./view-reports.sh tta"
    echo "  ./view-reports.sh allure"
    echo "  ./view-reports.sh all"
    echo ""
    ;;
esac

echo ""

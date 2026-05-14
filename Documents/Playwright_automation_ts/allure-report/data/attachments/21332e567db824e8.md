# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allurereporting/230_login.spec.ts >> verify that login works
- Location: tests/05_Allurereporting/230_login.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#login-btn')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "VWO" [ref=e12]
        - list [ref=e15]:
          - listitem [ref=e16]:
            - textbox "Email address" [ref=e18]:
              - /placeholder: Enter email ID
              - text: opg73@sungleuseemail.site
          - listitem [ref=e19]:
            - generic [ref=e20]:
              - textbox "Password" [active] [ref=e21]:
                - /placeholder: Enter password
                - text: Wingify@4321
              - button "Toggle password visibility" [ref=e22] [cursor=pointer]:
                - img [ref=e23]
          - listitem [ref=e25]:
            - button "Forgot Password?" [ref=e26] [cursor=pointer]
          - listitem [ref=e27]:
            - generic [ref=e29] [cursor=pointer]:
              - generic [ref=e30]: Remember me
              - img [ref=e32]
          - listitem [ref=e34]:
            - button "Sign in" [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: Sign in
          - listitem [ref=e37]:
            - heading "Or" [level=6] [ref=e39]
          - listitem [ref=e41]:
            - button "Sign in with Google" [ref=e43] [cursor=pointer]:
              - generic [ref=e44]:
                - img [ref=e45]
                - generic [ref=e47]: Sign in with Google
          - listitem [ref=e49]:
            - button "Sign in using SSO" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
              - generic [ref=e53]: Sign in using SSO
          - listitem [ref=e54]:
            - button "Sign in with Passkey" [ref=e55] [cursor=pointer]:
              - img [ref=e56]
              - generic [ref=e58]: Sign in with Passkey
          - listitem [ref=e59]:
            - generic [ref=e61]: New to VWO?
          - listitem [ref=e63]:
            - link "Start a FREE TRIAL" [ref=e64] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
              - generic [ref=e65]: Start a FREE TRIAL
          - listitem [ref=e66]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e67] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e68] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e72]:
        - img "Vwo abtasty logo" [ref=e73]
        - generic [ref=e74]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e75]
          - heading "Digital Experience Optimization" [level=4] [ref=e76]
        - img "Vwo Abtasty Shakehands" [ref=e77]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e78]
  - img [ref=e79]:
    - generic:
      - img
  - img [ref=e80]
  - img [ref=e81]
  - img [ref=e82]
  - img [ref=e83]
  - img [ref=e84]
  - img [ref=e85]
  - img [ref=e86]
  - img [ref=e87]
  - img [ref=e88]
  - img [ref=e89]
  - img [ref=e90]
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - img [ref=e95]
  - img [ref=e96]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | 
  5  | test('verify that login works',async({page}) =>
  6  | {
  7  |     await allure.epic("VWO login tests");
  8  |     await allure.description("verify that the login page works");
  9  |     await allure.feature("Essential features");
  10 |     await allure.story("Authentication");
  11 |     await page.goto("https://app.vwo.com/#login");
  12 |     await page.waitForTimeout(2000);
  13 | 
  14 |     console.log("Waiting for login form...");
  15 |     await page.waitForSelector("#login-username", {timeout: 5000});
  16 |         
  17 |     console.log("Filling credentials...");
  18 |     await page.fill("#login-username","opg73@sungleuseemail.site");
  19 |     await page.fill("#login-password","Wingify@4321");
  20 |         
  21 |     console.log("Clicking login button...");
> 22 |     await page.click("#login-btn");
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  23 | 
  24 |     // wait for login to actually complete before snapshotting storage -
  25 |     // otherwise the auth cookie isn't set yet and the saved state is empty
  26 | 
  27 |     await page.waitForURL(/#\/(dashboard|home)/,{timeout:15000});
  28 |     await page.waitForTimeout(5000);
  29 | 
  30 |     await expect(page).toHaveTitle("Dashboard");
  31 | });
```
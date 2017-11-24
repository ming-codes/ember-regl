/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "Chromium"
  ],
  "launch_in_dev": [
  ],
  "browser_args": {
    "Chromium": [
      "--headless",
      "--disable-gpu",
      "--remote-debugging-port=9222",
      "--remote-debugging-address=0.0.0.0",
      "--no-sandbox",
      "--user-data-dir=/tmp"
    ]
  }
};

# Interact Playwright Test

This project contains end-to-end tests using [Playwright]

## Requirements

- Node.js >= 16.0.0
- npm or yarn

## Installation

1. In terminal, run "npm i"
2. Wait for all needed files to install

## How to run playwright tests via terminal

1. Open terminal and enter “npm run testChrome” or “npm run testFirefox”
2. The test will begin to run, once the test is complete, test results will be displayed in the terminal 

## How to run playwright tests with ui
1. Open terminal and enter “npx playwright test –ui”
2. Click play button on left side or click into specific test
3.  The test will begin to run, once the test is complete, test results will be displayed 

## How I would extend this test further

1. Spend more time on, or discuss with dev how to resolve the validation issue which only seems to occur in playwright
2. Add scripts for negative scenarios (i.e field validation checks)
3. Add test into a pipeline to run daily
4. Add scripts for deleting a blog post and editing a blog post scenarios
5. Setup multiple env files for different environments (Dev/Test/UAT/Production)
6. Add after hook to delete blog post after each test run. This allows the test to run consistenly every time (Only reason this was not implemented was due to the validation error)


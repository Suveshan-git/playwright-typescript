/*
    1. Syntax for writing a test:

        test("title of test", async ({fixture}) => {
            //step 1
            //step 2
            //step 3

            //assertion
        })")

    2. fixture - global variable like page, browser
*/

import {test, expect} from "@playwright/test";

test("Verify practice website title", async ({page}) => {
    await page.goto("https://practice.expandtesting.com/");

    await expect(page).toHaveTitle("Automation Testing Practice Website for QA and Developers | UI and API");
})
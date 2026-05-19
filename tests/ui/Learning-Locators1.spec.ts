/*
    These are the recommended built-in locators:

        page.getByRole() to locate by explicit and implicit accessibility attributes. (Prefer for interactive elements like buttons, checkboxes, links, headingsm lists, tables, etc.) ARIA roles documentation: https://www.w3.org/TR/wai-aria-1.2/#states_and_properties
        page.getByText() to locate by text content. (you can match by substring or exact match, visibile text, use to find non interactive elements like div, span, p etc.)
        page.getByLabel() to locate a form control by associated label's text. (Mainly used for forms, works with input, select, textarea etc.)
        page.getByPlaceholder() to locate an input by placeholder. (used for input fields with placeholder text)
        page.getByAltText() to locate an element, usually image, by its text alternative. (mainly for images with alternative text)
        page.getByTitle() to locate an element by its title attribute. (used for elements with title attribute, often for tooltips or additional info))
        page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured). (used for elements with data-testid attribute, often for testing purposes)

        If you absolutely must use CSS or XPath locators, you can use page.locator() to create a locator that takes a selector describing how to find an element in the page. Playwright supports CSS and XPath selectors, and auto-detects them if you omit css= or xpath= prefix.

    Locator - Identifies the element on the page.
    DOM - Document Object Model - API interface provided by the browser to interact with the elements on the page. Represents the page structure as a tree of objects.

*/

import {test, expect, Locator} from "@playwright/test";

test("Verify Playwright Built in Locators", async ({page}) => {
    await page.goto("https://practice.expandtesting.com/locators");

    //getByAltText()
    await expect(page.getByAltText("User avatar")).toBeVisible();

    //getByText()
    await expect(page.getByText("🔥 Hot Deal: Buy 1 Get 1 Free")).toBeVisible();

    //getByRole()
    await page.getByRole("button", { name: "Add Item"}).click();
    await expect(page.getByRole("link", {name: "Contact"})).toBeVisible();

    //getByLabel()
    await expect(page.getByLabel("Choose a country")).toBeVisible();
    await page.getByLabel("Choose a country").selectOption("Japan");
    await page.getByLabel("Email for newsletter").fill("test@example.com");

    //getByPlaceHolder()
    await expect(page.getByPlaceholder("Search the site")).toBeVisible();
    await page.getByPlaceholder("Search the site").fill("Test 1");

    //getByTitle()
    await expect(page.getByTitle("Refresh content")).toBeVisible();
    await page.getByTitle("Refresh content").click();

    //getByTestId()
    await expect(page.getByTestId("status-message")).toBeVisible();

})
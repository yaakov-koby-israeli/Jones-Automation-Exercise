const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://test.netlify.app/");

  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("test.user@example.com");
  await page.getByLabel("Phone").fill("555-123-4567");
  await page.getByLabel("Company").fill("Example Co");
  // Website is type="url" — a bare domain fails native validation silently, so it needs a scheme.
  await page.getByLabel("Website").fill("https://example.com");

  await page.screenshot({ path: "before-submit.png" });

  await page.getByLabel("Number of Employees").selectOption("51-500");

  // test the Number of Employees change
  // await page.screenshot({ path: "validate-51-500-change.png" });

  await page.getByRole("button", { name: "Request a call back" }).click();

  await page.waitForURL(/thank-you\.html/);
  const h1 = await page.locator("h1").textContent();
  if (!h1?.includes("Thank You")) {
    throw new Error("Thank-you heading not found");
  }
  console.log("\n --------------------------:");
  console.log("\n ✅ Reached thank-you page:", page.url());
  console.log("\n --------------------------\n");

  // to test reachung thank you page
  // await page.waitForTimeout(2000);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

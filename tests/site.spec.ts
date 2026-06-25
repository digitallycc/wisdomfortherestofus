import { test, expect } from "@playwright/test";

const archiveUrl =
  "https://archive.org/details/emptiness-for-the-rest-of-us-pdf";

test.describe("Homepage", () => {
  test("loads successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Wisdom for the Rest of Us/);
  });

  test("primary CTA links to Internet Archive", async ({ page }) => {
    await page.goto("/");
    const cta = page.locator(`a[href="${archiveUrl}"]`).first();
    await expect(cta).toBeVisible();
    await expect(cta).toContainText("Read the Book Free");
  });

  test("navigation links are visible on desktop", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Book" })).toBeVisible();
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Essays" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });
});

test.describe("Mobile navigation", () => {
  test("hamburger menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Book" })).toBeVisible();
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Essays" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();

    const readCta = page.locator('a[href="' + archiveUrl + '"]').first();
    await expect(readCta).toBeVisible();
  });
});

test.describe("All primary routes", () => {
  const routes = [
    { path: "/", titlePattern: /Wisdom for the Rest of Us/ },
    { path: "/about", titlePattern: /About/ },
    { path: "/book/emptiness-for-the-rest-of-us", titlePattern: /Emptiness/ },
    { path: "/essays", titlePattern: /Essays/ },
    { path: "/contact", titlePattern: /Contact/ },
    { path: "/privacy", titlePattern: /Privacy/ },
  ];

  for (const route of routes) {
    test(`${route.path} returns 200 and has correct title`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(route.titlePattern);
    });
  }
});

test.describe("No horizontal overflow", () => {
  const widths = [360, 390, 768, 1024, 1440];

  for (const width of widths) {
    test(`no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(width);
    });
  }
});

test.describe("Keyboard navigation", () => {
  test("skip-to-content link is present", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeAttached();
  });

  test("skip-to-content link becomes visible on focus", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator(".skip-link");
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test("keyboard reaches primary CTA", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const focusedEl = page.locator(":focus");
    await expect(focusedEl).toBeVisible();
  });
});

test.describe("Content integrity", () => {
  test("homepage contains platform name", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Wisdom for the Rest of Us").first()).toBeVisible();
  });

  test("homepage contains book title", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Emptiness for the Rest of Us").first()).toBeVisible();
  });

  test("about page contains author name", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("Muhammad Ibrahim")).toBeVisible();
  });

  test("contact page has email link", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("link", { name: /ibrahim@wisdomfortherestofus\.com/ })).toBeVisible();
  });
});

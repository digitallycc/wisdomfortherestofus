import { expect, test } from "@playwright/test";

const archiveUrl =
  "https://archive.org/details/emptiness-for-the-rest-of-us-pdf";

test.describe("Homepage", () => {
  test("presents the book and both reading entrances", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Emptiness for the Rest of Us/);
    await expect(
      page.getByRole("heading", { name: /Emptiness for the Rest of Us/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Begin with the opening/i }).first(),
    ).toHaveAttribute("href", "/read/opening/");
    await expect(
      page.getByRole("link", { name: /Read Chapter One/i }),
    ).toHaveAttribute("href", "/read/chapter-one/");
  });

  test("keeps the complete edition available on Internet Archive", async ({
    page,
  }) => {
    await page.goto("/");
    const link = page.locator(`a[href="${archiveUrl}"]`).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
  });
});

test.describe("Reading paths", () => {
  test("opening is a responsive web reading page", async ({ page }) => {
    await page.goto("/read/opening/");
    await expect(
      page.getByRole("heading", { name: "The Phantom in the Room", exact: true }),
    ).toBeVisible();
    await expect(page.getByText(/You may have opened this book because/)).toBeVisible();
    await expect(page.getByRole("link", { name: /Continue reading/i })).toHaveAttribute(
      "href",
      "/read/chapter-one/",
    );
  });

  test("Chapter One includes the complete chapter structure", async ({ page }) => {
    await page.goto("/read/chapter-one/");
    await expect(
      page.getByRole("heading", { name: "The Illusion of the Obvious", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "The Chair Beneath Us", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "A First Glimpse", exact: true }),
    ).toBeVisible();
  });
});

test.describe("Book page", () => {
  test("offers the web reading paths and archive formats", async ({ page }) => {
    await page.goto("/book/");
    await expect(
      page.getByRole("heading", { name: "Emptiness for the Rest of Us", exact: true }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Read the opening/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Download PDF/i })).toBeVisible();
  });
});

test.describe("Navigation and responsiveness", () => {
  test("desktop navigation exposes the reading routes", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link", { name: "The Book" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Opening" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Chapter One" })).toBeVisible();
  });

  test("mobile navigation opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });
    await expect(mobileNav.getByRole("link", { name: "Opening" })).toBeVisible();
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(mobileNav).toBeHidden();
  });

  for (const width of [360, 390, 768, 1024, 1440]) {
    test(`has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      const widths = await page.evaluate(() => ({
        body: document.body.scrollWidth,
        viewport: document.documentElement.clientWidth,
      }));
      expect(widths.body).toBeLessThanOrEqual(widths.viewport);
    });
  }
});

test.describe("Accessibility basics", () => {
  test("skip link is present and becomes visible on focus", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeAttached();
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test("all key pages have one main heading", async ({ page }) => {
    for (const path of ["/", "/book/", "/read/opening/", "/read/chapter-one/"]) {
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
    }
  });
});

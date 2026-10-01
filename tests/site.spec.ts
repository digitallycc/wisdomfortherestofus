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

test.describe("Search discoverability", () => {
  test("publishes only canonical URLs in the sitemap", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    const sitemap = await response.text();

    expect(response.ok()).toBeTruthy();
    expect(sitemap).toContain("https://wisdomfortherestofus.com/book/");
    expect(sitemap).toContain("https://wisdomfortherestofus.com/read/opening/");
    expect(sitemap).toContain("https://wisdomfortherestofus.com/read/chapter-one/");
    expect(sitemap).toContain("https://wisdomfortherestofus.com/privacy/");
    expect(sitemap).not.toContain("<loc>https://wisdomfortherestofus.com/privacy</loc>");
  });

  for (const path of ["/read/opening/", "/read/chapter-one/"]) {
    test(`${path} identifies the excerpt and its book in structured data`, async ({
      page,
    }) => {
      await page.goto(path);
      const jsonLd = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents();
      const combined = jsonLd.join("\n");

      expect(combined).toContain('"@type":"Article"');
      expect(combined).toContain('"@type":"BreadcrumbList"');
      expect(combined).toContain('"@type":"Book"');
    });
  }
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

  test("mobile hero links remain tappable above decorative layers", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("link", { name: /begin with the opening/i }).click();
    await expect(page).toHaveURL(/\/read\/opening\/$/);

    await page.goto("/");
    await page.getByRole("link", { name: /explore the book/i }).click();
    await expect(page).toHaveURL(/\/book\/$/);
  });

  test("mobile meaning cards do not overlap", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const questionCard = page
      .getByText(
        "What if the self you spend your whole life defending is not what you think it is?",
        { exact: true },
      )
      .locator("..");
    const insightCard = page.getByText(/Every relationship, ambition/).locator("..");
    const questionBox = await questionCard.boundingBox();
    const insightBox = await insightCard.boundingBox();

    expect(questionBox).not.toBeNull();
    expect(insightBox).not.toBeNull();
    expect(insightBox!.y).toBeGreaterThanOrEqual(questionBox!.y + questionBox!.height);
  });

  for (const viewport of [
    { width: 1280, height: 720 },
    { width: 1366, height: 768 },
    { width: 1440, height: 900 },
    { width: 1870, height: 932 },
  ]) {
    test(`keeps the hero inquiry card above the fold at ${viewport.width}x${viewport.height}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto("/");

      const card = page.locator(".cinematic-hero .paper-card").locator("..");
      const prompt = page
        .getByText(/What if the self you spend your whole life defending is not as solid/i)
        .first();
      const box = await card.boundingBox();
      const promptBox = await prompt.boundingBox();

      expect(box).not.toBeNull();
      expect(promptBox).not.toBeNull();
      expect(box!.y + box!.height).toBeLessThanOrEqual(viewport.height - 48);
      expect(box!.x).toBeGreaterThanOrEqual(promptBox!.x + promptBox!.width + 24);
      expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width * 0.82);
    });
  }

  for (const width of [1024, 1440, 1870]) {
    test(`keeps the desktop meaning-card overlap shallow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");

      const insightCard = page.locator(".insight-card");
      const questionCard = insightCard.locator("xpath=preceding-sibling::div[1]");
      const insightText = insightCard.locator("p");
      const questionBox = await questionCard.boundingBox();
      const insightBox = await insightCard.boundingBox();
      const insightTextBox = await insightText.boundingBox();

      expect(questionBox).not.toBeNull();
      expect(insightBox).not.toBeNull();
      expect(insightTextBox).not.toBeNull();
      const overlap = questionBox!.y + questionBox!.height - insightBox!.y;
      expect(overlap).toBeGreaterThanOrEqual(16);
      expect(overlap).toBeLessThanOrEqual(24);
      expect(insightTextBox!.y).toBeGreaterThanOrEqual(questionBox!.y + questionBox!.height);
    });
  }

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

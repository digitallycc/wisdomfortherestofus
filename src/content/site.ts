export const site = {
  name: "Wisdom for the Rest of Us",
  tagline: "Serious ideas for ordinary human lives",
  url: "https://wisdomfortherestofus.com",
  author: {
    name: "Muhammad Ibrahim",
    email: "ibrahim@wisdomfortherestofus.com",
    location: "Islamabad, Pakistan",
  },
  newsletterEnabled: false,
  social: {
    twitter: "@wisdomrestofus",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "The Book", href: "/book/" },
  { label: "Opening", href: "/read/opening/" },
  { label: "Chapter One", href: "/read/chapter-one/" },
  { label: "About", href: "/#about" },
] as const;

export const internetArchiveUrl =
  "https://archive.org/details/emptiness-for-the-rest-of-us-pdf";

export const internetArchivePdfUrl =
  "https://archive.org/download/emptiness-for-the-rest-of-us-pdf/emptiness-for-the-rest-of-us-with_cover-internet_archive.pdf";

export const contactEmail = "ibrahim@wisdomfortherestofus.com";

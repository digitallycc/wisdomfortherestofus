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
  { label: "Book", href: "/#book" },
  { label: "About", href: "/#about" },
  { label: "Essays", href: "/#essays" },
  { label: "Contact", href: "/#contact" },
] as const;

export const internetArchiveUrl =
  "https://archive.org/details/emptiness-for-the-rest-of-us-pdf";

export const contactEmail = "ibrahim@wisdomfortherestofus.com";

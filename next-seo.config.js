/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "ACAIDRC",
  titleTemplate: "%s | ACAIDRC",
  defaultTitle: "ACAIDRC",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://acaidreadersclub.com/",
  openGraph: {
    url: "https://acaidreadersclub.com/",
    title: "ACAID Readers Club",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      // {
      //   url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
      //   alt: "nextarter-chakra.sznm.dev og-image",
      // },
    ],
    site_name: "acaid_readers_club",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

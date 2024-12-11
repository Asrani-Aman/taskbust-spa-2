const seoConfig = {
  default: {
    title: "TaskBust - Premier Digital Agency | Web Development, Design & Web3",
    titleTemplate: "%s | TaskBust",
    description:
      "TaskBust is a leading digital agency specializing in web development, graphic design, video editing, and Web3 solutions. Transform your digital presence with our expert team.",
    canonical: "https://taskbust.com",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://taskbust.com/",
      site_name: "TaskBust",
      images: [
        {
          url: "https://taskbust.com/images/og-image.jpg", // Add an OG image
          width: 1200,
          height: 630,
          alt: "TaskBust Digital Agency",
        },
      ],
    },
    twitter: {
      handle: "@taskbust",
      site: "@taskbust",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "web development, app development, web3, graphic design, video editing, digital agency, NextJS development",
      },
      {
        name: "author",
        content: "TaskBust",
      },
    ],
  },
  pages: {
    home: {
      title: "TaskBust - Transform Your Digital Presence",
      description:
        "Custom web development, graphic design, and Web3 solutions tailored for your business success.",
    },
    agency: {
      title: "About TaskBust - Our Story & Mission",
      description:
        "Learn how TaskBust transforms businesses through innovative digital solutions and creative services.",
    },
    services: {
      title: "Our Services - Web Development, Design & More",
      description:
        "Explore our comprehensive range of digital services including web development, design, and Web3 solutions.",
    },
    contact: {
      title: "Contact TaskBust - Let's Build Something Great",
      description:
        "Get in touch with TaskBust for your next digital project. We're here to help you succeed.",
    },
  },
};

export default seoConfig;

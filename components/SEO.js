import Head from "next/head";
import { useRouter } from "next/router";
import seoConfig from "./seo.config";

const SEO = ({
  title = seoConfig.default.title,
  description = seoConfig.default.description,
  keywords = "digital agency, web development, app development, Web3, design agency",
}) => {
  const router = useRouter();
  const canonicalUrl = `https://taskbust.com${router.asPath}`;

  // Get page-specific SEO config
  const pageConfig = seoConfig.pages[router.pathname.replace("/", "")] || {};

  return (
    <Head>
      <title>{pageConfig.title || title}</title>
      <meta
        name="description"
        content={pageConfig.description || description}
      />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={pageConfig.title || title} />
      <meta
        property="og:description"
        content={pageConfig.description || description}
      />
      <meta
        property="og:image"
        content={seoConfig.default.openGraph.images[0].url}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageConfig.title || title} />
      <meta
        name="twitter:description"
        content={pageConfig.description || description}
      />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SEO;

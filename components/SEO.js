import Head from "next/head";

const SEO = ({
  title = "TaskBust - Web Development,App Development, Web3, Design & Digital Solutions",
  description = "Premium digital agency specializing in web development,app development, Web3, design, and creative solutions.",
  keywords = "digital agency, web development,app development, Web3, design agency, video editing, graphic design",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href="https://taskbust.com" />
    </Head>
  );
};

export default SEO;

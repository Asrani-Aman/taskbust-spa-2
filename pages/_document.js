import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Meta tags */}
        <meta name="application-name" content="TaskBust" />
        <meta
          name="description"
          content="Efficient task management and earning platform"
        />
        <meta
          name="keywords"
          content="tasks, freelance, project management, remote work"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="TaskBust - Task Management Platform"
        />
        <meta
          property="og:description"
          content="Efficient task management and earning platform"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Script from "next/script";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script strategy="lazyOnload" id="ga-script">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
          </Script>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

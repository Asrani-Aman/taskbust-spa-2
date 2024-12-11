import Script from "next/script";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import seoConfig from "@/components/seo.config";
import TaskBustLoader from "@/components/TaskBustLoader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [routeChanging, setRouteChanging] = useState(false);
  const router = useRouter();

  // Track page views when route changes
  const handleRouteChange = (url) => {
    window.gtag("config", "G-3HGFT4X0KV", {
      page_path: url,
    });
  };

  useEffect(() => {
    // Handle initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Handle route changes
    const handleStart = () => setRouteChanging(true);
    const handleComplete = () => setRouteChanging(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(timer);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (loading || routeChanging) {
    return <TaskBustLoader />;
  }

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </SessionProvider>
    </>
  );
}

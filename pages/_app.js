import Script from "next/script";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TaskBustLoader from "@/components/TaskBustLoader";
import { SessionProvider, use } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [routeChanging, setRouteChanging] = useState(false);

  // Initial page load
  useEffect(() => {
    // Simulate minimum loader display time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Route change loader
  useEffect(() => {
    const handleStart = () => setRouteChanging(true);
    const handleComplete = () => setRouteChanging(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Show loader for initial load or route changes
  if (loading || routeChanging) {
    return <TaskBustLoader />;
  }

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

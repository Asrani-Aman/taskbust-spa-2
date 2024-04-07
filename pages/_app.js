import AuthProvider from "@/components/common/AuthProvider";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

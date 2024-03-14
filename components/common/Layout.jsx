"use Client"
import Footer from "./Footer";
import Header from "./Header";
// import { SessionProvider } from "next-auth/react";
// import AuthProvider from "./AuthProvider";

const Layout = (props) => {
  return (
    <>
      
        <Header />
        <main>{props.children}</main>
        <Footer />
 
    </>
  );
};

export default Layout;

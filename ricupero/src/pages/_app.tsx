import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import {GoogleAnalytics} from '@next/third-parties/google'
import Head from "next/head";

import { AuthProvider } from "@/components/authContext";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function App({ Component, pageProps:{session, ...pageProps}}: AppProps) {
  return (
    <>
        <Head>
          <link rel="icon" href="/riclogo.jpg" />
        </Head>


      <GoogleAnalytics gaId="G-6M007GQR8S" />
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MZLR9LCL');`
        }}
      ></Script>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>

    </>
  );
}

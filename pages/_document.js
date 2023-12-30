import { Html, Head, Main, NextScript, Title } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        
        <meta
          name="description"
          content="Dira Transport: Your Trusted Partner for Reliable Logistics Solutions. We specialize in efficient freight services across North America. Our experienced team, modern fleet, and commitment to excellence ensure seamless deliveries. Contact us for dependable transportation tailored to your unique needs.
          "
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dira Transport" />
        <meta
          property="og:description"
          content="Nextjs Project using framer montion"
        />
        <meta
          property="og:url"
          content="https://transportation-spa-project.vercel.app"
        />
        <meta property="og:site_name" content="Dira Transport" />
        <meta
          property="og:image"
          content="https://dira.vercel.app/screenshot.jpg"
        />
        <meta name="keywords" content="nextjs,framer motion,animation" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Framer Motion Project" />
        <meta
          name="twitter:description"
          content="Nextjs Project using framer montion"
        />
        <meta
          name="twitter:image"
          content="https://transportation-spa-project.vercel.app/screenshot.jpg"
        />

        <meta
          name="google-site-verification"
          content="eP82dEE--Mtf-ypVN9QO-B9kd-C5uLVNT_Ce_bdha24"
        />

        <link
          rel="canonical"
          href="https://transportation-spa-project.vercel.app"
        />
        <link
          rel="alternate"
          href="https://transportation-spa-project.vercel.app"
          hreflang="en-us"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

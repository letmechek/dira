import Head from "next/head";

import "../styles/globals.css";
import "../testimonialSlider.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dira Transport</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Head from "next/head";
import "../styles/globals.css";
import "../testimonialSlider.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

function MyApp({ Component, pageProps }) {
  const headerData = {
    logoImgV1: "/images/ng-logo.png",
    logoImgV2: "/images/ng-logo.png",
    btnText: "Contact us",
    btnHref: "/contact",
  };
  
  const navData = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faqs" },
  ];
  
  const footerData = {
    truckImg: "/images/hero/truckbanner.png",
    hillImg: "/images/footer/hill.svg",
    text: "We provide traffic management consultants so you get started quickly, contact us for a quote today!",
    logo: "/images/ng-logo.png",
    links: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Faqs", href: "/faqs" },
    ],
    form: {
      labelName: "Name",
      placeholderName: "Your name",
      labelEmail: "Email address",
      placeholderEmail: "Your email adddress",
      btnText: "Get Started",
    },
  };
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dira Transport</title>
      </Head>
      <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">

<Header headerData={headerData} navData={navData} />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer footerData={footerData}/>
    <Copyright />
      </div>
    </>
  );
}

export default MyApp;

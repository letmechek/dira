// import components
import Hero from "../components/Hero";
import About from "../components/About";
import How from "../components/How";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";


// import data
// import {
//   headerData,
//   heroData,
//   navData,
//   faqData,
//   aboutData,
//   howData,
//   testimonialData,
//   footerData,
// } from "../data.json";

const headerData = {
  logoImgV1: "/images/ng-logo.png",
  logoImgV2: "/images/ng-logo.png",
  btnText: "Contact us",
  btnHref: "/contact",
};

const navData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/faqs" },
];

const heroData = {
  title: "Empowering Logistics for Seamless Deliveries",
  sceneImg: "/images/hero/scene.svg",
  boyImg: "/images/hero/boy.svg",
  girlImg: "/images/hero/reverse.png",
  truckImg: "/images/hero/truckbanner.png",
  btnText: "Get A Quote",
};

const aboutData = {
  title: "About Dira Transport",
  subtitle:
    "Dira Transport is a leading Canadian transportation company dedicated to providing reliable and efficient freight services across North America. Our commitment to excellence and customer satisfaction sets us apart in the industry.",
  text: "With a focus on safety, punctuality, and advanced logistics, we ensure your goods reach their destination seamlessly. Our experienced team and modern fleet are ready to meet your transportation needs.",
  boyImg: "/images/about/about.png",
};

const howData = {
  title: "How to Partner with Dira Transport",
  subtitle:
    "Partnering with Dira Transport for your logistics needs is a simple and streamlined process. Our commitment to customer satisfaction ensures a hassle-free experience. Follow these steps to get started:",
  girlImg: "/images/how/apply.png",
};

const faqData = {
  pretitle: "FAQ",
  title: "Frequently Asked Questions",
  boyImg: "/images/faq/truck.png",
  accordions: [
    {
      question: "What services does Dira Transport offer?",
      answer:
        "Dira Transport provides comprehensive transportation services, including reliable freight delivery, logistics solutions, and specialized services tailored to meet your unique requirements.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "Tracking your shipment with Dira Transport is easy. Use our user-friendly online tracking system or reach out to our dedicated customer support team for real-time updates on your cargo.",
    },
    {
      question: "What areas does Dira Transport cover?",
      answer:
        "We operate across North America, ensuring extensive coverage for your transportation needs. From major cities to remote locations, Dira Transport is your trusted partner for seamless deliveries.",
    },
    {
      question: "How do I request a quote for transportation services?",
      answer:
        "Requesting a quote is easy. Simply visit our website and fill out the online quote request form. Our team will promptly review your information and provide you with a customized quote tailored to your specific transportation needs.",
    },
    {
      question: "What safety measures does Dira Transport have in place?",
      answer:
        "At Dira Transport, safety is our top priority. We adhere to strict safety protocols and regulations to ensure the well-being of our drivers, cargo, and the communities we serve. Our commitment to safety extends to regular vehicle maintenance, driver training, and compliance with industry standards.",
    },
    {
      question: "Do you offer expedited shipping services?",
      answer:
        "Yes, Dira Transport offers expedited shipping services for time-sensitive shipments. Our expedited services are designed to meet tight deadlines and ensure that your goods reach their destination quickly and efficiently.",
    },
    {
      question: "Are there volume discounts available for regular shipments?",
      answer:
        "Yes, Dira Transport offers volume discounts for clients with regular and high-volume shipments. Contact our sales team to discuss your shipping volume and explore personalized pricing options that suit your business requirements.",
    },
    {
      question: "Can I schedule recurring shipments with Dira Transport?",
      answer:
        "Certainly! We offer the flexibility to schedule recurring shipments based on your business needs. Our team can work with you to create a customized transportation plan that accommodates your regular shipping schedule.",
    },
    {
      question: "How do I report a problem or provide feedback?",
      answer:
        "We value your feedback. If you encounter any issues or have suggestions for improvement, please contact our customer support team. Your input is important to us, and we are committed to addressing any concerns promptly.",
    },
  ],
};

const testimonialData = {
  pretitle: "testimonials",
  title: "Our Awesome Clients",
  clients: [
    {
      message:
      "Dira Transport has been our trusted logistics partner for years. Their commitment to reliability, on-time deliveries, and top-notch customer service has been instrumental in optimizing our supply chain. Their experienced team and advanced technology make them stand out in the transportation industry.",
      image: "/images/testimonials/avatar1.png",
      name: "Sarah Thompson",
    },
    {
      message:
      "We rely on Dira Transport for the transportation of our industrial machinery, and they consistently exceed our expectations. Their attention to detail, professionalism, and ability to handle specialized cargo sets them apart. Dira Transport is a valuable partner for our business.",
      image: "/images/testimonials/avatar2.png",
      name: "John Rodriguez",
    },
    {
      message:
      "Dira Transport's dedication to sustainability and environmental responsibility aligns perfectly with our values at GreenGro Farms. Their eco-friendly initiatives, combined with efficient transportation services, make them an ideal partner for our agricultural products. We highly recommend their services.",
      image: "/images/testimonials/avatar3.png",
      name: "Emily Lewis",
    },
    // {
    //   message:
    //     "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
    //   image: "/images/testimonials/avatar1.png",
    //   name: "Isak Pettersson",
    // },
    {
      message:
      "In the fast-paced electronics industry, timely deliveries are crucial. Dira Transport consistently delivers on time, ensuring that our products reach our customers promptly. Their proactive communication and reliability make them a preferred logistics partner for Global Electronics Solutions.",
      image: "/images/testimonials/avatar2.png",
      name: "Michael Chang",
    },
    {
      message:
      "Working with Dira Transport has streamlined our supply chain and improved our overall logistics efficiency. Their responsive team, advanced tracking systems, and commitment to meeting deadlines have positively impacted our operations. We appreciate their dedication to excellence.",
      image: "/images/testimonials/avatar3.png",
      name: "Linda Carter",
    },
  ],
};

// const footerData = {
//   truckImg: "/images/hero/truckbanner.png",
//   hillImg: "/images/footer/hill.svg",
//   text: "We provide traffic management consultants so you get started quickly, contact us for a quote today!",
//   logo: "/images/ng-logo.png",
//   links: [
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Faqs", href: "/faqs" },
//   ],
//   form: {
//     labelName: "Name",
//     placeholderName: "Your name",
//     labelEmail: "Email address",
//     placeholderEmail: "Your email adddress",
//     btnText: "Get A Quote",
//   },
// };

const Home = ({
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  
}) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
     
    },
  };
};

export default Home;

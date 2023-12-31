import React from 'react'
import Faq from '../components/Faq'
import Hero from '../components/Hero'

function faqs() {
    // const headerData = {
    //     logoImgV1: "/images/ng-logo.png",
    //     logoImgV2: "/images/ng-logo.png",
    //     btnText: "Contact us",
    //     btnHref: "/contact",
    //   };
      
    //   const navData = [
    //     { name: "About", href: "/about" },
    //     { name: "Services", href: "/services" },
    //     { name: "FAQs", href: "/faqs" },
    //   ];
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
        question: "Is Dira Transport equipped for handling specialized cargo?",
        answer:
          "Yes, Dira Transport is well-equipped to handle a wide range of specialized cargo, including hazardous materials, oversized loads, and temperature-sensitive goods. Our experienced team ensures the safe and secure transportation of your unique cargo.",
      },
      {
        question: "What technology does Dira Transport use for shipment tracking?",
        answer:
          "We utilize state-of-the-art tracking technology to provide real-time updates on your shipments. Our advanced tracking system offers transparency and visibility throughout the transportation process, ensuring you stay informed about the status of your goods.",
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
        question: "What sets Dira Transport apart from other transportation companies?",
        answer:
          "Dira Transport stands out for its commitment to excellence, reliability, and customer satisfaction. Our modern fleet, experienced team, and dedication to meeting and exceeding industry standards make us a trusted partner for all your transportation needs.",
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
      {
        question: "Does Dira Transport provide insurance coverage for shipments?",
        answer:
          "Yes, Dira Transport offers insurance coverage options for shipments. Our team can provide details on available insurance plans to ensure that your cargo is protected during transit. Contact us to discuss insurance options tailored to your specific needs.",
      },
    ],
  };
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page pt-22">
    <Faq faqData={faqData} />
     </div>
  )
}

export default faqs
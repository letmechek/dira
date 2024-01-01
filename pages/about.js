import React from 'react'
import About from '../components/About'

function about() {
    const aboutData = {
        title: "About Dira Transport",
        subtitle:
          "Dira Transport is a leading Canadian transportation company dedicated to providing reliable and efficient freight services across North America. Our commitment to excellence and customer satisfaction sets us apart in the industry.",
        text: "With a focus on safety, punctuality, and advanced logistics, we ensure your goods reach their destination seamlessly. Our experienced team and modern fleet are ready to meet your transportation needs.",
        boyImg: "/images/about/about.png",
      };
  return (
    <div className=' pt-20'>
        <About aboutData={aboutData}/>
    </div>
  )
}

export default about
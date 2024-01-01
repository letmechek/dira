import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { CgArrowLongRight } from 'react-icons/cg';



export default function Email()  {
  const form = useRef();
  let isSent = false;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uq9fih', 'template_m2fs4vm', form.current, 'hcRTZV5UUvWveGoo4')
    .then((result) => {
      console.log(result.text);
      isSent = true;
      form.current.reset();
      forceUpdate(); // Trigger re-render to display the success message
    }, (error) => {
      console.log(error.text);
    });
};

// Function to force re-render
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);

return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Request a Quote</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-600">
            Your Name / Company Name
          </label>
          <input
            type="text"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            id="from_name"
            name="from_name"
            placeholder="John Doe Inc."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from_email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            id="from_email"
            name="from_email"
            placeholder="john.doe@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            className="h-32 w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            placeholder="How can we assist you?"
            id="message"
            name="message"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn self-start hover:bg-accent-hover transition">
          Request A Quote <CgArrowLongRight className="text-[30px]" />
        </button>
        {isSent && <div className="text-green-500 mt-2">Email sent successfully!</div>}
      </form>
    </div>

);
}
// h-[60px] rounded-[5px] max-w-[400px] outline-none px-[40px] ring-1 ring-accent/50 focus:ring-2 focus:ring-accent transition focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary;
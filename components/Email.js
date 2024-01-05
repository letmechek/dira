import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { CgArrowLongRight } from 'react-icons/cg';



export default function Email()  {
  const [selectedCity, setSelectedCity] = useState('');
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
        {/* city */}
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-600">
          city
          </label>
          <input
            type="text"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            // id="from_name"
            // name="from_name"
            placeholder="city"
            
          />
        </div>
        <div className="mb-4">
        <label >
        State:
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className='h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary'
        >
          <option value="">Select a state</option>
          <option value="alaska">AK</option>
          <option value="texas">TX</option>
          <option value="california">CA</option>
          <option value="montana">MT</option>
          <option value="new-mexico">NM</option>
          <option value="arizona">AZ</option>
          <option value="nevavda">NV</option>
          <option value="colarado">CO</option>
          <option value="oregon">OR</option>
          <option value="wyoming">WY</option>
          <option value="michigan">MI</option>
          <option value="minnesota">MN</option>
          <option value="utah">UT</option>
          <option value="idaho">ID</option>
          <option value="kansas">KS</option>
          <option value="nebraska">NE</option>
          <option value="south-dakota">SD</option>
          <option value="washington">WA</option>
          <option value="north-dakota">ND</option>
          <option value="florida">FL</option>
          <option value="oklahoma">OK</option>
          <option value="missouri">MD</option>
          <option value="georgia">GA</option>
          <option value="wisconsin">WI</option>  
          <option value="illinois">IL</option>
          <option value="iowa">IA</option>
          <option value="new-york">NY</option>
          <option value="north-carolina">NC</option>
          <option value="virginia">VA</option>
          <option value="arkansas">AR</option>
          <option value="alabama">AL</option>
          <option value="louisiana">LA</option>
          <option value="mississippi">MS</option>
          <option value="pennsylvania">PA</option>
          <option value="ohio">OH</option>
          <option value="tennessee">TN</option>
         
        </select>
      </label>
        </div>
        {/* origin */}
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-600">
          origin
          </label>
          <input
            type="text"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            // id="from_name"
            // name="from_name"
            placeholder="origin"
            
          />
        </div>
        {/* destination */}
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-600">
          destination
          </label>
          <input
            type="text"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            // id="from_name"
            // name="from_name"
            placeholder="destination"
            
          />
        </div>
        {/* number of pallets */}
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-600">
          number of pallets 
          </label>
          <input
            type="text"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            // id="from_name"
            // name="from_name"
            placeholder="number of pallets "
            
          />
        </div>
        {/* weight in lbs */}
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-600">
          weight in lbs
          </label>
          <input
            type="text"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            // id="from_name"
            // name="from_name"
            placeholder="weight in lbs"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from_email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="h-[60px] w-full px-4 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            id="user_email "
            name="user_email "
            placeholder="john.doe@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          Freight Description
          </label>
          <textarea
            className="h-32 w-full px-4 pt-2 outline-none ring-1 ring-accent/50 focus:ring-2 focus:ring-accent focus:drop-shadow-primary text-[18px] font-bold placeholder:text-[18px] placeholder:font-light placeholder:text-primary"
            placeholder="Freight Description"
            id="message"
            name="Freight Description"
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
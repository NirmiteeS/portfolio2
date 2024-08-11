import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import cont from '../assets/contact/contact3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ffxxke9",
      "template_2wxztpd",
      form.current,
      "uue8Eb2iK7RuKfYrH"
    );

    e.target.reset();
  };

  return (
    <div id="contact" className="pt-8 pb-16 bg-black">
      <h5 className="text-center text-lg text-gray-400  poppins-regular">Get In Touch</h5>
      <h2 className="text-center text-3xl font-bold mb-16 text-white merriweather-bold">Contact Me</h2>

      <div className="container mx-auto px-4 md:px-8 poppins-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <img src={cont} alt="" className=""/>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full p-4 border-2 border-gray-500 bg-transparent rounded-lg text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border-2 border-gray-500 bg-transparent rounded-lg text-white"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="w-full p-4 border-2 border-gray-500 bg-transparent rounded-lg text-white resize-none"
            ></textarea>
            <button
      type="submit"
      className="poppins-regular mt-5 px-6 py-3 bg-opacity-30 backdrop-blur-lg border border-gray-300 text-white font-semibold rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
    >
      Submit
    </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

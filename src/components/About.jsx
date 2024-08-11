import React, {useEffect} from 'react';
import me from '../assets/about/img-2.png'
import Resume from '../assets/about/Resume_updated.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openPDF = () => {
    window.open(Resume, '_blank'); 
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id='about' className='h-full flex flex-col gap-10 bg-black bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:45px_45px]  text-white'>
      
      <div className='mt-10 text-center'>
        <p className='text-lg text-gray-400 poppins-regular'>Get to know</p>
        <h1 className='text-3xl font-bold merriweather-bold'>About me</h1>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center p-8 md:p-16 text-white">
        <div className="md:w-1/2 p-4 flex justify-center items-center" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
          <img 
            src={me} 
            alt="About me" 
            className="xl:w-[50%] xl:h-[50%] sm:w-[50%] sm:h-[50%] md:w-[80%] md:h-[80%] rounded-full object-cover shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_30px_4px_rgba(255,255,255,0.7)]" 
          />
        </div>
        <div className="md:w-1/2 p-4 mr-20" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
          <p className="poppins-light text-lg text-white">
          As a Computer Engineering student at Sardar Patel Institute of Technology College, I am deeply passionate about technology and its transformative power. My journey through this field has ignited a strong interest in web development and machine learning. I am dedicated to solving complex problems and turning innovative ideas into real-world solutions. With a growing skill set and a commitment to making a meaningful impact.
          </p>
          <button
          onClick={openPDF}
          className="poppins-regular  mt-5 px-6 py-3 bg-opacity-30 backdrop-blur-lg border border-gray-300 text-white font-semibold rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          >
          View Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import Marquee from "react-fast-marquee";
import css from '../assets/skills/social.png'
import html from '../assets/skills/html.png'
import java from '../assets/skills/java.png'
import js from '../assets/skills/js.png'
import node from '../assets/skills/node-js.png'
import python from '../assets/skills/python.png'
import sql from '../assets/skills/sql-server.png'
import sql2 from '../assets/skills/database-management.png'
import css2 from '../assets/skills/css-3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroText = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id='skills' className='min-h-screen  bg-black flex flex-col place-content-between xl:px-28'>
        <div>
        <p className='text-gray-400 text-lg text-center mt-16 poppins-regular'>What skills do i have</p>
        <h1 className='text-white text-3xl text-center font-bold merriweather-bold'>My Skills</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-[#E8EEF2] p-8 md:p-16">
          <div className="text-xl bg-[#262730] p-8 rounded-lg md:p-12 md:w-1/2 lg:w-1/2 sm:px-28" data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine">
            <h1 className="text-xl md:text-2xl font-mono">
              <span className="">skill</span> = <span className="var-value">"Web Development"</span>
            </h1>
            <span className="font-mono">
              <span className="text-green-400">def learn</span>
              <span className="text-yellow-300 inline-flex">
                (
                <Typewriter
                  options={{
                    strings: ["HTML", "CSS", "Javascript", "Node js", "Express js", "MongoDB"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "inline",
                    cursorClassName: "typewriter-cursor",
                  }}
                />
                )
              </span>
            </span>
            <br />
            <span className="font-mono text-green-400">
              &nbsp;&nbsp;&nbsp; <span className="text-gray-400">if</span> name <span className="text-yellow-300">learn</span>(*args)
            </span>
            <br />
            <span className="font-mono text-green-400">
              &nbsp;&nbsp;&nbsp; <span className="text-gray-400">return</span> <span className="text-yellow-300">True</span>
            </span>
          </div>
          <div className="text-xl bg-[#262730] p-8 rounded-lg md:p-12 md:w-1/2 lg:w-1/2 sm:px-28" data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine">
            <h1 className="text-xl md:text-2xl font-mono">
              <span className="">skill</span> = <span className="var-value">"Machine learning"</span>
            </h1>
            <span className="font-mono">
              <span className="text-green-400">def learn</span>
              <span className="text-yellow-300 inline-flex">
                (
                <Typewriter
                  options={{
                    strings: ["Python", "TensorFlow", "Pandas", "Numpy"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "inline",
                    cursorClassName: "typewriter-cursor",
                  }}
                />
                )
              </span>
            </span>
            <br />
            <span className="font-mono text-green-400">
              &nbsp;&nbsp;&nbsp; <span className="text-gray-400">if</span> name <span className="text-yellow-300">learn</span>(*args)
            </span>
            <br />
            <span className="font-mono text-green-400">
              &nbsp;&nbsp;&nbsp; <span className="text-gray-400">return</span> <span className="text-yellow-300">True</span>
            </span>
          </div>
    </div>
    <div className='mb-16'><Marquee
        pauseOnHover={true}
        direction="left"
        speed={50}
        style={{ width: '100%', whiteSpace: 'nowrap' }}
      >
        <div className="flex space-x-20 p-4 text-lg font-semibold text-white">
          <img src={css} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={html} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={js} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={sql2} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={python} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={node} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={sql} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={css2} alt="css" className='transition-colors duration-300 h-16 w-16'/>
          <img src={java} alt="css" className='transition-colors duration-300 h-16 w-16'/>
        </div>
      </Marquee></div>

    </div>
  );
};

export default HeroText;

import React from 'react';
import './hero.css'; // Import custom styles for keyframes
import AnimatedCursor from 'react-animated-cursor';

const BackgroundAnimation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-4 md:px-8 lg:px-16 ">
      <AnimatedCursor
        color="255, 255, 255"
        innerSize={8}
        outerSize={32}
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          '.link',
          'p',
        ]}
      />
      <p className="poppins-regular text-lg md:text-xl lg:text-2xl font-medium text-gray-300 mb-4 md:mb-6 lg:mb-8">
        Hello! I'm
      </p>
      <h1 className="merriweather-black text-8xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-[url('https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-repeat animate-text">
        Nirmitee Sarode
      </h1>
      <p className="poppins-regular text-lg md:text-xl lg:text-2xl font-medium text-gray-300 mt-4 md:mt-6 lg:mt-8 xl:px-32 md:px-6 lg:px-8">
        Programmer, Front-End Designer, and ML Enthusiast, Merging Technical Precision with Creative Innovation to Build Cutting-Edge Solutions.
      </p>
    </div>
  );
};

export default BackgroundAnimation;

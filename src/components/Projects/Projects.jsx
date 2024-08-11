import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/projects/isl.png';
import img2 from '../../assets/projects/chatbot.png';
import img3 from '../../assets/projects/fashion.png';
import img4 from '../../assets/projects/todo.png';
import img5 from '../../assets/projects/sudoku.png';

const data = [
  {
    id: 1,
    image: img,
    title: "Sign Language Interpreter",
    para: "A convolutional neural network (CNN) model designed for interpreting Indian Sign Language (ISL). ",
    github: "https://github.com/shreyarathod/ISL-final-model",
  },
  {
    id: 2,
    image: img2,
    title: "AI Data Query Chatbot",
    para:"A chatbot designed to interact seamlessly with a CRM database.",
    github: "https://github.com/NirmiteeS/Woodpecker_hackathon",
  },
  {
    id: 3,
    image: img3,
    title: "FashionInnovate-Myntra",
    para: "FashionInnovate enhances fashion e-commerce sites by integrating AI-generated designs with current trends.",
    github: "https://github.com/shreyarathod/myntra-weforshe",
  },
  {
    id: 4,
    image: img5,
    title: "Sudoku Solver",
    para: "This is a Sudoku Solver web application created using HTML, CSS, and JavaScript.",
    github: "https://github.com/NirmiteeS/sudoku-solver",
  },
  {
    id: 5,
    image: img4,
    title: "Task Manager",
    para: "The To-Do List is a simple web application built using HTML, CSS, and JavaScript.",
    github: "https://github.com/NirmiteeS/Todo-List",
  }
];


const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects" className="py-16 px-28 bg-black">
      <h5 className="text-center text-gray-400 text-lg poppins-regular">My Recent Project</h5>
      <h2 className="text-center text-white text-3xl merriweather-bold font-bold mb-16 ">Portfolio</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4" >
        {data.map(({ id, image, title, para, github }, index) => (
          <div key={id} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl hover:shadow-black/30" data-aos='fade-up'data-aos-anchor-placement='top-bottom' data-aos-delay={`${index * 200}`}>
            <div className="h-64 w-full">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt={title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-transform duration-500 transform translate-y-1/2 group-hover:translate-y-0">
              <h1 className="text-2xl font-bold text-white mb-2  poppins-semibold">{title}</h1>
              <p className="text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 poppins-light">{para}</p>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 rounded-full bg-neutral-900 py-2 px-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-neutral-700">Github</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
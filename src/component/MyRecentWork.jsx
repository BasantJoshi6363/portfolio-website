import React from 'react';
import { Link } from 'react-router-dom';
import eccomerce from "../assets/ecommerce.png";
import blog from "../assets/blog.png"

const projects = [
  {
    title: 'MERN Blog Website',
    image: blog,
    github: 'https://github.com/BasantJoshi6363/mern-blog',
  },
  {
    title: 'Mern Eccomerce Website',
    image: eccomerce,
    github: 'https://github.com/BasantJoshi6363/college-mern-eccomerce',
  },
  {
    title: 'AnimeOwl Website',
    image: 'path_to_animeowl_image.png',
    github: 'https://github.com/yourusername/animeowl-website',
  },
];

const MyRecentWork = () => {
  return (
    <section className="mt-20 w-full text-white opacity-95 px-4">
      <div className="text-center">
        <h2 className="text-white text-2xl font-semibold mb-2">My Recent Work</h2>
        <h1 className="text-blue-400 text-4xl font-bold mb-12">Portfolio</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 w-full max-w-md bg-indigo-900 hover:border hover:border-purple-700 duration-300 rounded-3xl hover:bg-transparent transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h4 className="font-semibold text-2xl mb-4">{project.title}</h4>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-black px-6 py-2 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Github
            </a>
          </div>
        ))}
      </div>
        <div className="div w-full flex justify-center">
            <Link
        to="/projects"
        className="inline-block  bg-blue-400 text-black px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300"
      >
        View All
      </Link>
        </div>
      
    </section>
  );
};

export default MyRecentWork;

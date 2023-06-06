import React from "react";

import wallyImg from "../imgs/wheresWally.png";
import shoppingCartImg from "../imgs/shoppingCart.png";
import golfBallImg from "../imgs/golfballSite.png";
import memoryGameImg from "../imgs/memoryGame.png";
import { GrGithub } from "react-icons/gr";
import { FaLaptop } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  toolsUsed,
  description,
  liveLink,
  githubLink,
}) {
  return (
    <section className='flex flex-col md:flex-row-reverse md:gap-5 lg:gap-12 justify-center items-center mt-4 mb-4 lg:mt-6'>
      <div className='mt-4 lg:mt-6 w-1/2'>
        <img
          src={image}
          alt='Screenshot'
          className='w-full h-full rounded-md lg:scale-110'
        />
      </div>
      <div className='mt-3 w-1/2'>
        <h1 className='text-3xl lg:text-5xl  font-semibold mb-3 lg:mb-6'>
          {title}
        </h1>
        <p className='font-medium text-lg lg:text-xl  mb-1 lg:mb-2'>
          <strong className='text-primary'>Tech Stack: </strong>
          {toolsUsed}
        </p>
        <p className='mb-4 '>{description}</p>
        <div className='flex items-center gap-5'>
          <a
            href={liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center border-2 gap-2 py-2 px-5 rounded-full border-primary text-primary cursor-pointer'
          >
            <span className='text-lg'>Live </span>{" "}
            <FaLaptop style={{ color: "#22c998" }} />
          </a>
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center border-2 gap-2 py-2 px-5 rounded-full border-black text-black cursor-pointer'
          >
            <span className='text-lg'>Code</span> <GrGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

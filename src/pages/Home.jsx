import { Link } from "react-router-dom";
import selfPic from "../imgs/selfie.jpeg";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../components/Footer";

export function Home() {
  const containerRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col p-4 mt-5 items-center justify-center ${
          fadeIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
        ref={containerRef}
      >
        <div className='w-2/5 md:w-1/5 lg:w-[10%] mt-5'>
          <img
            src={selfPic}
            alt='Self Image'
            className='rounded-full'
            style={{ aspectRatio: "1/1", borderRadius: "50%" }}
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <p className='text-primary mt-5 text-2xl font-semibold'>Hey, I'm</p>
          <h1 className='text-6xl font-semibold capitalize my-3'>
            Griffin Quarles
          </h1>
          <p className='lg:text-lg'>
            A passionate front-end developer who likes to create beautiful,
            engaging, and exceptional user experiences.
          </p>
          <button className='mt-6 md:mt-8 bg-primary py-3 px-10 text-white rounded-full'>
            <Link to='/about'>More About Me</Link>
          </button>
        </div>
      </div>
    </>
  );
}

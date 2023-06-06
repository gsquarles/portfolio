import { Footer } from "../components/Footer";
import {
  SiVitest,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiWebpack,
  SiJest,
  SiNodedotjs,
  SiReactrouter,
  SiGit,
  SiNetlify,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaNpm } from "react-icons/fa";
import { useEffect } from "react";

const ICONS = [
  { title: "HTML", image: "SiHtml5", color: "#f1652a" },
  { title: "CSS", image: "SiCss3", color: "#2865f0" },
  { title: "Javascript", image: "SiJavascript", color: "#f7df1c" },
  { title: "React.js", image: "SiReact", color: "#00d8fe" },
  { title: "Tailwind CSS", image: "SiTailwindcss", color: "#06b6d5" },
  { title: "Firebase", image: "SiFirebase", color: "#ffa72c" },
  { title: "Webpack", image: "SiWebpack", color: "#1b78c0" },
  { title: "Vitest", image: "SiVitest", color: "#fcc72b" },
  { title: "Jest", image: "SiJest", color: "#c63c14" },
  { title: "Node.js", image: "SiNodedotjs", color: "#8cc84b" },
  { title: "React Router", image: "SiReactrouter", color: "" },
  { title: "Git", image: "SiGit", color: "#de4b36" },
  { title: "Netlify", image: "SiNetlify", color: "#4e9abf" },
  { title: "Linux Cli", image: "FcLinux", color: "" },
  { title: "npm", image: "FaNpm", color: "#c12027" },
];

export function AboutMe() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <main className=' flex-grow p-3 md:px-32 lg:px-72 lg:py-6'>
          <section className='mt-4'>
            <p className=' uppercase text-primary font-medium text-lg lg:text-xl text-center'>
              About me
            </p>
            <h1 className='text-4xl  font-semibold capitalize text-center mt-1'>
              Here's My Story
            </h1>
            <div className='mt-5 lg:text-xl'>
              <p className='mb-6'>
                Hi, I'm Griffin Quarles, a self-taught front-end web developer
                passionate about innovative solutions. My journey into web
                development started in 2021 when I delved into HTML and CSS.
                Since then, I've dedicated myself to mastering various web
                technologies and best practices, building projects that showcase
                my skills and experience.
              </p>
              <p className='mb-6'>
                Programming offers the perfect blend of practicality and
                creative problem-solving. I thrive on using it to overcome
                real-world challenges, expressing myself through visually
                appealing solutions. The ever-evolving nature of programming
                keeps me excited and eager to explore new possibilities.
              </p>
              <p className='mb-6'>
                Outside of coding, I prioritize physical fitness with a love for
                working out and playing golf. I also have a strong appetite for
                continuous learning, always seeking opportunities to expand my
                skill set.
              </p>
              <p className='mb-6'>
                Feel free to reach out and say hello at:
                <a
                  href='mailto:griffinquarles11@gmail.com'
                  className='text-primary'
                >
                  griffinquarles11@gmail.com
                </a>
              </p>
            </div>
          </section>
          <div className='w-full h-[2px] bg-primary'></div>
          <section className='text-center mt-5'>
            <div className='text-3xl lg:text-4xl font-semibold'>
              <span>Skills </span> <span className='text-primary'>& Tools</span>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-5'>
              {ICONS.map((icon, index) => {
                const IconComponent = eval(icon.image);
                return (
                  <div
                    className='flex flex-col gap-1 justify-center items-center mb-5'
                    key={index}
                  >
                    <IconComponent
                      style={{ color: icon.color }}
                      className='text-6xl'
                    />
                    <p className='text-sm'>{icon.title}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

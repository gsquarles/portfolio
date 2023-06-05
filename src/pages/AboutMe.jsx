import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";

export function AboutMe() {
  return (
    <>
      <main className=' p-3'>
        <section className='mt-4'>
          <p className=' uppercase text-primary font-medium text-lg text-center'>
            About me
          </p>
          <h1 className='text-4xl font-semibold capitalize text-center mt-1'>
            Here's My Story
          </h1>
          <div className='mt-5'>
            <p className='mb-6'>
              Hi, I'm Griffin Quarles, a self-taught front-end web developer
              passionate about innovative solutions. My journey into web
              development started in 2021 when I delved into HTML and CSS. Since
              then, I've dedicated myself to mastering various web technologies
              and best practices, building projects that showcase my skills and
              experience.
            </p>
            <p className='mb-6'>
              Programming offers the perfect blend of practicality and creative
              problem-solving. I thrive on using it to overcome real-world
              challenges, expressing myself through visually appealing
              solutions. The ever-evolving nature of programming keeps me
              excited and eager to explore new possibilities.
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
        <section>
          <div>
            <span>Skills </span> <span className='text-primary'>& Tools</span>
          </div>
        </section>
      </main>
      {/* <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1c" }} />
      <FontAwesomeIcon icon={faReact} style={{ color: "#00d8fe" }} /> */}
    </>
  );
}

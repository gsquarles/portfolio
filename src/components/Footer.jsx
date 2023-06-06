import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className='bg-slate-400 text-white w-full text-center py-2'>
      <div className='mt-2 flex justify-center'>
        <a
          href='https://github.com/gsquarles/porfolio'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-400 transition-colors duration-300 mx-2'
        >
          <FaGithub className='inline-block text-2xl lg:w-15' />
        </a>
        <a
          href='https://www.linkedin.com/in/griffinsquarles/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-400 transition-colors duration-300 mx-2'
        >
          <FaLinkedin className='inline-block text-2xl' />
        </a>
        <a
          href='mailto:griffinquarles11@gmail.com'
          className='text-white hover:text-gray-400 transition-colors duration-300 mx-2'
        >
          <FaEnvelope className='inline-block text-2xl' />
        </a>
      </div>
      <p className='text-sm mt-2'>&copy; 2023 gsquarles</p>
    </footer>
  );
}

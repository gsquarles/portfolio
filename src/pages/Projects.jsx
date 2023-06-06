import ProjectCard from "../components/ProjectCard";
import wallyImg from "../imgs/wheresWally.png";
import shoppingCartImg from "../imgs/shoppingCart.png";
import golfBallImg from "../imgs/golfballSite.png";
import memoryGameImg from "../imgs/memoryGame.png";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

const PROJECTS = [
  {
    title: "Where's Wally",
    image: wallyImg,
    toolsUsed: "React.js, Tailwind CSS, Firebase",
    description:
      "Try your luck at finding Wally and his friends and getting onto the leaderboard.  This app is a Where's Wally game with three different levels.  It is connected to Firebase's Firestore database that keeps track of all the scores to show the top 5.",
    liveLink: "https://photo-tagging-c233a.firebaseapp.com",
    githubLink: "https://github.com/gsquarles/photo-tagging",
  },
  {
    title: "Shopping Cart",
    image: shoppingCartImg,
    toolsUsed: "React.js, Tailwind CSS, React Router, FakeStore API",
    description:
      "This is a small mock eCommerce website built with React.js.  Users can broswe the available products that are fetched from Fake Store API and give orders with a fully functional cart.  You can also adjust the number of items you want to buy in your cart.",
    liveLink: "https://gsquarles-shopping-cart.netlify.app",
    githubLink: "https://github.com/gsquarles/shopping-cart",
  },
  {
    title: "Memory Game",
    image: memoryGameImg,
    toolsUsed: "React.js, Tailwind CSS",
    description:
      "As the name suggests, it is a game to test players' memory. The locations shuffle after every selection. The goal is to maximize your score by not selecting the same location again. The game shows the current and best score of a player.",
    liveLink: "https://gsquarles.github.io/memory-game/",
    githubLink: "https://github.com/gsquarles/memory-game",
  },
  {
    title: "Small Business Site",
    image: golfBallImg,
    toolsUsed: "React.js, Tailwind CSS, React Router, FormSpree",
    description:
      "This is a small business site that I built for a friend and I.  It is a simple site with multiple pages.  I also used a 3rd party form to collect any emails as I did not want to set up a server for that. ",
    liveLink: "https://teetogreenretrieval.netlify.app/",
    githubLink: "https://github.com/gsquarles/golfball-website",
  },
];

export function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <>
      <main className='flex flex-col justify-center items-center mt-2 p-4 md:px-32 lg:px-60 lg:py-6'>
        <div className='text-3xl font-semibold'>
          <span>My </span> <span className='text-primary'>Projects</span>
        </div>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            toolsUsed={project.toolsUsed}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

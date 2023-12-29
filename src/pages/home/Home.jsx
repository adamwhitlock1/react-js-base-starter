import { Link } from "react-router-dom";
import reactLogo from "~/assets/react.svg";

export const Home = () => (
  <div className="flex w-full flex-col p-12">
    <h2 className="text-4xl text-gray-900">
      <img className="w-20" src={reactLogo} alt="React Logo imported via assets folder" />
      <img className="w-20" src="./logo-with-shadow.png" alt="Vite Logo added via public folder" />
      <span className="block">React + Vite + TailwindCSS</span>

    </h2>

    <Link to="/about">About</Link>
  </div>
);

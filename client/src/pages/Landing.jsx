import Hero from "../components/Hero";
import Blogs from "./Blogs";

function Landing() {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <Blogs />
    </div>
  );
}

export default Landing;

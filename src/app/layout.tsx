import { MutableRefObject, useRef } from "react";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Manifest from "./pages/Manifest";
import Roadmap from "./pages/Roadmap";

const RootLayout = () => {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const manifestRef = useRef<null | HTMLDivElement>(null);
  const roadmapRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const handleClick = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const refs = {
    home: homeRef,
    about: aboutRef,
    manifest: manifestRef,
    roadmap: roadmapRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar handleClick={handleClick} refs={refs} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Manifest ref={manifestRef} />
      {/* <Roadmap ref={roadmapRef} /> */}
      {/* <Contact ref={contactRef} /> */}
    </>
  );
};

export default RootLayout;

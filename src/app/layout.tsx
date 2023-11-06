import Navbar from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Manifest from "./pages/Manifest";
import Roadmap from "./pages/Roadmap";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Manifest />
      <Roadmap />
      <Contact />
    </>
  );
}

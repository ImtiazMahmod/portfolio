import "./App.css";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import AnimatedCursor from "react-animated-cursor";
import { tsParticles } from "tsparticles";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  /* ---- tsParticles config ---- */

  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ["#344455", "#ffffff"],
      },
      shape: {
        type: "edge",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "https://i.ibb.co/82CVWx0/hero.png",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 50,
        color: "#fff",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  });

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={15}
        outerSize={25}
        color="255, 152, 0"
        outerAlpha={0.2}
        innerScale={1.7}
        outerScale={5}
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/*" element={<Home />}></Route>
          {/* <Route
            path="/projects/:projectId"
            element={<ProjectsDetails />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

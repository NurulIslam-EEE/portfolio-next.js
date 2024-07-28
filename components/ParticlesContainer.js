import { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

function ParticlesContainer() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  // "#f5d393","#e68e2e",#e68e2e,#f5d393,#EA4A79,#D3C9A8 #ffb400 #FDD064 #61F7D1

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      className="w-full h-full absolute translate-z-0 z-1000"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#64FFDA",
          },
          links: {
            color: "#64FFDA",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesContainer;

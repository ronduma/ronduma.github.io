import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Test = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const config = {
    background: {
      color: {
        value: "#0d47a1",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 30,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 100, max: 100 },
      },
    },
    detectRetina: true,
  }

  const options: ISourceOptions = useMemo(
    () => (
      config
    ),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default Test;

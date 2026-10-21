import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const ParticleBg = () => {

    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return (
        <Particles
            init={particlesInit}
            options={{
                background: { color: "#000" },
                particles: {
                    number: { value: 60 },
                    color: { value: "#ffffff" },
                    links: {
                        enable: true,
                        color: "#ffffff",
                        distance: 150
                    },
                    move: {
                        enable: true,
                        speed: 1
                    },
                    size: { value: 2 }
                }
            }}
        />
    );
};

export default ParticleBg;
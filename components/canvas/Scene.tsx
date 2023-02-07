import { FC } from "react";
import { Canvas, Props } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

type TProps = Props & React.RefAttributes<HTMLCanvasElement>;

const Scene: FC<TProps> = ({ children, ...props }) => {
  return (
    <Canvas
      style={{
        position: "fixed",
        left: "50%",
        top: 0,
        width: "100%",
        height: "100vh",
        transform: "translateX(-50%)",
      }}
      {...props}
    >
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <OrbitControls />
      <Preload all />
    </Canvas>
  );
};

export default Scene;

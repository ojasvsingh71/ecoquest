import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Globe3D = () => {
  return (
    <Canvas style={{ height: "300px", width: "300px" }}>
      {/* Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* Distorted Sphere */}
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#4CAF50"
          attach="material"
          distort={0.4} // distort level
          speed={2} // animation speed
        />
      </Sphere>

      {/* Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Globe3D;

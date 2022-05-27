import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars, useTexture } from "@react-three/drei";
import "./App.css";
import Tree from "./Tree";
// import earthMap from './images/earthmap.jpeg'
import { TextureLoader } from "three";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) => (
      (mesh.current.rotation.x += 0.01), (mesh.current.rotation.y += 0.01)
    )
  );
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "cyan" : "lime"} />
    </mesh>
  );
}
const Earth = (props) => {
  const mesh = useRef();

        const earthMap = useTexture("./src/images/mapOfEarth.jpg")
        useFrame(
          (state, delta) => (
            (mesh.current.rotation.y += 0.001)
          )
        );
  
  return (
    <mesh {...props}
      ref={mesh}
      scale={2}>
      <sphereBufferGeometry attach="geometry" args={[20, 40, 40]} />
      <meshStandardMaterial map={earthMap} />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <OrbitControls />
      {/* <PerspectiveCamera makeDefault /> */}
      <mesh />
      <Stars />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <Box position={[-2, 0, 0]} />
      <Box position={[2, 0, 0]} />
      <Box position={[0, 2, 0]} />
      <Box position={[0, -2, 0]} />
      <Tree position={[8, 2, -16]} />
      <Tree position={[-8, 2, -16]} />
      <Tree position={[4, 2, -8]} />
      <Tree position={[-4, 2, -8]} rotation={[-3, 0, 3]} /> */}
      <Earth position={[0, 0, 0]}/>
    </Canvas>
  );
}

export default App;

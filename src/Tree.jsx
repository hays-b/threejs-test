import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Leaves(props) {
  const mesh = useRef();

//   useFrame(
//     (state, delta) => (
//      (mesh.current.rotation.x += 0.01)
//     )
//   );

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <coneBufferGeometry args={[3, 5, 15]} />
      <meshStandardMaterial color="lime" />
    </mesh>
  );
}
function Trunk(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <cylinderBufferGeometry args={[0.25, 0.5, 10, 15]} openEnded={false} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );
}

function Tree(props) {
  return (
    <mesh {...props}>
      <Leaves position={[0, 10, 0]} />
      {/* <Leaves position={[0, 9, 0]} /> */}
      <Leaves position={[0, 8, 0]} />
      {/* <Leaves position={[0, 7, 0]} /> */}
      <Leaves position={[0, 6, 0]} />
      {/* <Leaves position={[0, 5, 0]} /> */}
      <Leaves position={[0, 4, 0]} />
      <Leaves position={[0, 2, 0]} />
      <Trunk position={[0, -2, 0]} />
    </mesh>
  );
}

export default Tree;

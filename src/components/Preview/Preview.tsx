import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";
import TwistyPuzzle from "../TwistyPuzzle";

export default function Preview() {
  return (
    <Box w="full" h="100%">
      <Canvas flat camera={{ position: [1, 2, 3] }}>
        <color args={[0x000000]} attach="background" />
        <OrbitControls />
        <TwistyPuzzle
          alg="R U R' U'"
          hintFacelets="none"
          experimentalSprite={"/cubing-js-sprite.png"}
          experimentalStickering="picture"
        />
      </Canvas>
    </Box>
  );
}

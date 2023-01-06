import { Box, Flex } from "@chakra-ui/react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TwistyPuzzle from "./components";

function App() {
  return (
    <Flex w="full" h="100vh" align="center" direction="column">
      <Box w="full" h="50%">
        <Canvas flat style={{ background: "#000000" }}>
          <Environment preset="city" />
          <OrbitControls />
          <TwistyPuzzle alg="R U R' U'" hintFacelets="none" />
        </Canvas>
      </Box>
    </Flex>
  );
}

export default App;

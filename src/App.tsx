import { Flex } from "@chakra-ui/react";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Flex w="full" h="100vh" direction="column" align="center">
      <Menu />
      <Preview aspectRatio={16 / 9} isPlaying={isPlaying} />
      <Timeline onPlayingChange={setIsPlaying} />
    </Flex>
  );
}

export default App;

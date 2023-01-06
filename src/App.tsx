import { Flex } from "@chakra-ui/react";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import Preview from "./components/Preview";

function App() {
  return (
    <Flex w="full" h="100vh" direction="column" align="left">
      <Menu />
      <Preview aspectRatio={16 / 9} />
      <Timeline />
    </Flex>
  );
}

export default App;

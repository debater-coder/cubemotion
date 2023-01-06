import { Flex } from "@chakra-ui/react";
import Menu from "./components/Menu";
import Preview from "./components/Preview";

function App() {
  return (
    <Flex w="full" h="100vh" direction="column" align="left">
      <Menu />
      <Preview />
    </Flex>
  );
}

export default App;

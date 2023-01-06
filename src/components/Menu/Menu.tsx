import {
  Flex,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Menu as ChakraMenu,
} from "@chakra-ui/react";

export default function Menu() {
  return (
    <Flex
      w="full"
      align="left"
      gap={1}
      px={1}
      bg="gray.900"
      borderBottom="solid 1px gray"
    >
      <ChakraMenu>
        <MenuButton p={1} _hover={{ bg: "gray.500" }} rounded="sm">
          File
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </ChakraMenu>
    </Flex>
  );
}

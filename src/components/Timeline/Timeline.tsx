import { Flex, IconButton } from "@chakra-ui/react";
import { Pause, Play } from "phosphor-react";
import { useState } from "react";

export default function Pane({
  onPlayingChange,
}: {
  onPlayingChange: (isPlaying: boolean) => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Flex
      direction="column"
      height="100%"
      borderTop={"solid 1px gray"}
      w="full"
    >
      <Flex w="full" justify={"space-around"}>
        <IconButton
          aria-label="Play"
          icon={isPlaying ? <Pause weight="fill" /> : <Play weight="fill" />}
          variant="ghost"
          colorScheme={"gray"}
          onClick={() => {
            onPlayingChange(!isPlaying);
            setIsPlaying(!isPlaying);
          }}
        />
      </Flex>
    </Flex>
  );
}

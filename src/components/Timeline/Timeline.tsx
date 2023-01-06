import { Flex, IconButton, useToken } from "@chakra-ui/react";
import {
  Pause,
  Play,
  Repeat,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  SpeakerSlash,
} from "phosphor-react";
import { useState } from "react";

export default function Pane({
  onPlayingChange,
}: {
  onPlayingChange: (isPlaying: boolean) => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const yellow = useToken("colors", "yellow.500");

  return (
    <Flex
      direction="column"
      height="100%"
      borderTop={"solid 1px gray"}
      w="full"
    >
      <Flex w="full" justify={"center"}>
        <IconButton
          aria-label="Toggle mute"
          icon={
            isMuted ? (
              <SpeakerSlash weight="fill" color="gray" />
            ) : (
              <SpeakerHigh weight="fill" />
            )
          }
          variant="ghost"
          colorScheme={"gray"}
          onClick={() => {
            setIsMuted(!isMuted);
          }}
        />
        <IconButton
          aria-label="Skip back"
          icon={<SkipBack weight="fill" />}
          variant="ghost"
          colorScheme={"gray"}
        />
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
        <IconButton
          aria-label="Skip forward"
          icon={<SkipForward weight="fill" />}
          variant="ghost"
          colorScheme={"gray"}
        />
        <IconButton
          aria-label="Repeat"
          icon={<Repeat weight="fill" color={isLooping ? yellow : undefined} />}
          variant="ghost"
          colorScheme={"gray"}
          onClick={() => {
            setIsLooping(!isLooping);
          }}
        />
      </Flex>
    </Flex>
  );
}

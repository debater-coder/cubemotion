import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AspectRatio, Box } from "@chakra-ui/react";
import TwistyPuzzle from "../TwistyPuzzle";
import { useEffect, useRef } from "react";
import { TwistyPlayer } from "cubing/dist/types/twisty";

export default function Preview({
  aspectRatio,
  isPlaying,
}: {
  aspectRatio: number;
  isPlaying: boolean;
}) {
  const playerRef = useRef<TwistyPlayer | null>(null);

  useEffect(() => {
    playerRef.current?.togglePlay(isPlaying);
  }, [playerRef, isPlaying]);

  return (
    <AspectRatio ratio={aspectRatio} w="60%">
      <Box w="100%" h="full">
        <Canvas flat camera={{ position: [1, 2, 3] }}>
          <color args={[0x000000]} attach="background" />
          <OrbitControls />
          <TwistyPuzzle
            alg="R U R' U'"
            hintFacelets="none"
            experimentalSprite={"/cubing-js-sprite.png"}
            experimentalStickering="picture"
            playerRef={playerRef}
          />
        </Canvas>
      </Box>
    </AspectRatio>
  );
}

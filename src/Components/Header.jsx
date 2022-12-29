import {
  Box,
  Flex,
  Image,
  // Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:480px)");

  return (
    <Box m="auto" w="90%" >
      {/* <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      /> */}
      <Flex
        // spacing="200px"
        direction={ isNotSmallerScreen ? "row" : "column" }
        p={isNotSmallerScreen ? "32" : "0"}
        // alignSelf="flex-start"
        justifyContent="center"
        border="1px solid red"
      >
        <Box
          // mt={isNotSmallerScreen ? "0" : 16}
          // align="flex-start"
          border="1px solid blue"
        >
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Satan Kumar Sharma
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Full stack developer who loves to build new things is a passionate,
            driven student who likes to solve real world problems.
          </Text>
        </Box>
        <Box border="1px solid black">
          <Image
            // align="center"
            // mt={isNotSmallerScreen ? "0" : "12"}
            // mb={isNotSmallerScreen ? "0" : "12"}
            // borderRadius="full"
            // backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            src="https://avatars.githubusercontent.com/u/107472942?v=4"
          />
        </Box>
      </Flex>
    </Box>
  );
};

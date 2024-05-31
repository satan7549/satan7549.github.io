import {
  Button,
  Grid,
  Heading,
  GridItem,
  Image,
  Link,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import CoderBoy from "../Utilities/coder_boy.gif";

export function Header() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 70,
      strings: ["Full Stack Developer.", "Designer.", "Problem Solver."],
    });
  }, []);

  return (
    <Grid
      paddingTop={"150px"}
      maxW={"90%"}
      id="home"
      margin={"auto"}
      gridTemplateColumns={{
        lg: "repeat(2,1fr)",
        md: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
      }}
      gap="30px"
    >
      <GridItem display={"flex"} textAlign="left" alignItems={"center"}>
        <Box>
          <Heading
            size={{ lg: "2xl", md: "2xl", sm: "2xl", base: "xl" }}
            color="rgb(8, 111, 143)"
            marginBottom={{ lg: "10px" }}
            fontFamily={"Moon Dance"}
            fontWeight="bold"
            _hover={{
              cursor: "pointer",
              transform: " scale(1.07)",
              transition: "all 0.5s ease-in-out",
            }}
          >
            SATAN SHARMA
          </Heading>
          <Heading
            fontWeight={"normal"}
            size={{ lg: "lg", md: "lg", sm: "md", base: "md" }}
            color="rgb(90,90,90)"
            marginBottom={"16px"}
          >
            I am a{" "}
            <span
              style={{
                fontSize: "inherit",
                color: "#c9184a",
                fontWeight: "bold",
              }}
              ref={textRef}
            ></span>
          </Heading>
          <Flex gap={"10px"} wrap={"wrap"}>
            <Link
              href="https://drive.google.com/uc?export=download&id=1sowK1pxE64cbONKcaB1Etc6JnvvMwJwz"
              download={"Satan-Sharma-Resume.pdf"}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1sowK1pxE64cbONKcaB1Etc6JnvvMwJwz/view?usp=sharing"
                )
              }
              _hover={{ textDecoration: "none" }}
            >
              <Button
                target={"_blank"}
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                h="35px"
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="16px"
              >
                Resume
              </Button>
            </Link>
          </Flex>
        </Box>
      </GridItem>
      <GridItem>
        <Image width={"100%"} borderRadius="5px" src={CoderBoy} />
      </GridItem>
    </Grid>
  );
}

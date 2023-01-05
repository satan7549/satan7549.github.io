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

export function Header() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 70,
      strings: ["Full Stack Developer.", "Designer.","Problem Solver."],
    });
  }, []);

  return (
    <Grid
      paddingTop={"150px"}
      maxW={"80%"}
      id="hero"
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
          >
            SATAN SHARMA
          </Heading>
          <Heading
            fontWeight={"normal"}
            size={{ lg: "lg", md: "lg", sm: "md", base: "md" }}
            color="rgb(90,90,90)"
            marginBottom={"16px"}
          >
            I am a {" "}
            <span
              style={{
                fontSize: "inherit",
                // color: "crimson",
                color:"#c9184a",
                fontWeight: "bold",
              }}
              ref={textRef}
            ></span>
          </Heading>
          <Flex gap={"10px"} wrap={"wrap"}>
            <Link href="https://drive.google.com/uc?export=download&id=1sowK1pxE64cbONKcaB1Etc6JnvvMwJwz">
              <Button
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                width="100px"
                height={"40px"}
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="16px"
              >
                Resume
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1sowK1pxE64cbONKcaB1Etc6JnvvMwJwz/view?usp=sharing"
              target={"_blank"}
              textDecoration="none"
            >
              <Button
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                width="120px"
                height={"40px"}
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="16px"
                // textDecoration="none"
              >
                View Resume
              </Button>
            </Link>
          </Flex>
        </Box>
      </GridItem>
      <GridItem>
        <Image
          width={"100%"}
          src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
        />
      </GridItem>
    </Grid>
  );
}

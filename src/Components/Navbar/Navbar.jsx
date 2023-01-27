import { Link as ScrollLink } from "react-scroll";
import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  useMediaQuery,
  Button,
  Link,
} from "@chakra-ui/react";
import Navmenu from "./Navmenu";

export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 1050px)");

  const name = "<SATAN/>";

  return (
    <Container
      shadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
      maxW={"100%"}
      position="fixed"
      backdropFilter={"blur(10px)"}
      color="rgb(1, 75, 97)"
      padding={"20px 40px"}
      top="0px"
      margin={"auto"}
      left="0px"
      zIndex={"10"}
    >
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Box _hover={{ cursor: "pointer" }}>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={1000}
            spy={false}
            hashSpy={true}
            activeClass="active"
          >
            <Heading fontFamily={"Moon Dance"} fontSize="40px">
              {name}
            </Heading>
          </ScrollLink>
        </Box>
        <Flex
          justifyContent={"space-around"}
          gap={"20px"}
          width="40%"
          fontSize={"20px"}
          fontWeight="500"
        >
          {isLargerThan800 ? (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                // activeClass="active"
              >
                <Text _hover={{ borderBottom: "5px solid", cursor: "pointer" }}>
                  About
                </Text>
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                <Text _hover={{ borderBottom: "5px solid", cursor: "pointer" }}>
                  Skills
                </Text>
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                <Text _hover={{ borderBottom: "5px solid", cursor: "pointer" }}>
                  Projects
                </Text>
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                <Text _hover={{ borderBottom: "5px solid", cursor: "pointer" }}>
                  Contact
                </Text>
              </ScrollLink>
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
                  bg={"rgb(1, 75, 97);"}
                  _hover={{ bg: "rgb(14, 129, 165)" }}
                  color="white"
                  h="30px"
                  variant={"solid"}
                >
                  Resume
                </Button>
              </Link>
            </>
          ) : (
            <Navmenu />
          )}
        </Flex>
      </Flex>
    </Container>
  );
}

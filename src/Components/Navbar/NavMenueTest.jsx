import { Link as ScrollLink } from "react-scroll";
import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Link,
  HStack,
  useDisclosure,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const SimpleNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const name = "<SATAN/>";
  const Links = ["Home", "About", "Skills", "Projects", "Contact"];
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
            to="home"
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
        {/* <Flex
          justifyContent={"space-around"}
          gap={"20px"}
          width="40%"
          fontSize={"20px"}
          fontWeight="500"
        > */}
        <HStack
          as={"nav"}
          spacing={6}
          display={{ base: "none", md: "flex" }}
          //   border={"1px solid red"}
        >
          {Links.map((link) => (
            <ScrollLink
              to={link[0].toLowerCase() + link.slice(1)}
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              //   activeClass="active"
              key={link}
            >
              <Text
                fontSize={"20px"}
                fontWeight="500"
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                {link}
              </Text>
            </ScrollLink>
          ))}
          <Link
            href="https://drive.google.com/uc?export=download&id=1sowK1pxE64cbONKcaB1Etc6JnvvMwJwz"
            download={"fw20_0536-Satan-Sharma-Resume.pdf"}
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
        </HStack>
        {/* </Flex> */}
        <IconButton
          size={"lg"}
          bg={"transparent"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={"80%"} h={"80%"} />}
          aria-label={"Open Menu"}
          variant={"unstyled"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box p={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={3}>
            {Links.map((link) => (
              <ScrollLink
                // activeClass="active"
                to={link[0].toLowerCase() + link.slice(1)}
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                key={link}
                onClick={() => onClose()}
              >
                <Text
                  fontSize={"md"}
                  fontWeight="semibold"
                  _hover={{ fontSize: "lg", cursor: "pointer" }}
                >
                  {link}
                </Text>
              </ScrollLink>
            ))}
            <Link
              href="https://drive.google.com/uc?export=download&id=1sowK1pxE64cbONKcaB1Etc6JnvvMwJwz"
              download={"fw20_0536-Satan-Sharma-Resume.pdf"}
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
          </Stack>
        </Box>
      ) : null}
    </Container>
  );
};

export default SimpleNav;

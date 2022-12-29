import React from "react";
import "./Navbar.css";
import {
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Heading,
  Spacer,
  useColorMode,
  VStack,
  Box,
  Stack,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "About", "Projects", "Skills", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    size={{ lg: "lg", md: "md", sm: "md" }}
    _hover={{
      textDecoration: "none",
      textColor: "#17cf97",
      bg: useColorModeValue("gray.200", "gray.700"),
      borderBottom: "2px solid white",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack p={5} px={7} >
      <Flex w="100%" alignItems="center" >
        <IconButton
          mr={2}
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Heading className="navheading">Satan</Heading>

        <Spacer />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          isRound="true"
        />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </VStack>
  );
};

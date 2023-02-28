import {
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
const Navmenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Icon as={AiOutlineMenu} width="20px" h={"20px"} />
      </MenuButton>
      <MenuList>
        <ScrollLink
          to="hero"
          smooth={true}
          duration={1000}
          spy={true}
          hashSpy={true}
        >
          <MenuItem>Home</MenuItem>
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={1000}
          spy={true}
          hashSpy={true}
        >
          <MenuItem>About</MenuItem>
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={1000}
          spy={true}
          hashSpy={true}
        >
          <MenuItem>Skills</MenuItem>
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={1000}
          spy={true}
          hashSpy={true}
        >
          <MenuItem>Projects</MenuItem>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          spy={true}
          hashSpy={true}
        >
          <MenuItem>Contact</MenuItem>
        </ScrollLink>
        <MenuItem>
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
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navmenu;

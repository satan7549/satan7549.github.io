import { BsGithub, BsLink45Deg } from "react-icons/bs";
import {
  Heading,
  Icon,
  Button,
  Text,
  HStack,
  Flex,
  Box,
  useMediaQuery,
  VStack,
  Link,
} from "@chakra-ui/react";

export function ProjectCard({ name, img, git, link, stacks, about }) {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  return (
    <Box
      width="100%"
      height={isMobile ? "100%" : "90%"}
      display={"flex"}
      justifyContent="flex-end"
      flexDir={"column"}
      borderRadius={"10px"}
      padding="none"
      textAlign={"center"}
      boxShadow="rgba(50, 50, 105, 0.25) 0px 2px 10px 0px,rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
      backgroundImage={img}
      bgPos="top"
      bgSize="100%"
      bgBlendMode=""
      backgroundRepeat="no-repeat"
    >
      <Box
        marginTop={isMobile ? "40%" : "50%"}
        backdropFilter={"blur(5px)"}
        padding={isMobile ? "5px" : "20px"}
        bg={"rgba(255,255,255,0.7)"}
        margin="none"
        borderBottomRadius={"10px"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Heading
          color={"rgb(14, 36, 49)"}
          size={{ lg: "lg", md: "md", sm: "md", base: "md" }}
        >
          {name}
        </Heading>
        <br />
        {isMobile ? (
          <VStack>
            <HStack display={"flex"} justifyContent={"center"} flexWrap="wrap">
              {stacks.map((stack, i) => (
                <Box
                  key={i}
                  transition=" all 0.2s ease-in-out"
                  _hover={{ transform: " scale(1.1)", transition: "0.8s" }}
                  gap={"20px"}
                >
                  {stack}
                </Box>
              ))}
            </HStack>
            <HStack
              display={"flex"}
              justifyContent={{ lg: "space-around", sm: "center" }}
            >
              <Link
                target={"_blank"}
                href={link}
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  bg={"rgb(8, 111, 143)"}
                  color="white"
                  _hover={{ bg: "rgb(14, 129, 165)" }}
                >
                  <Icon as={BsLink45Deg} />
                  <Text paddingLeft={"10px"}>Demo</Text>
                </Button>
              </Link>
              <Link
                target={"_blank"}
                href={git}
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  _hover={{ bg: "rgb(14, 129, 165)" }}
                  bg={"rgb(8, 111, 143)"}
                  color="white"
                >
                  <Icon as={BsGithub} />
                  <Text paddingLeft={"10px"}>Code</Text>
                </Button>
              </Link>
            </HStack>
          </VStack>
        ) : (
          <Flex
            justifyContent={"space-evenly"}
            flexDir={isMobile ? "column" : "row"}
          >
            <Link
              target={"_blank"}
              href={git}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                _hover={{ bg: "rgb(14, 129, 165)" }}
                bg={"rgb(8, 111, 143)"}
                color="white"
              >
                <Icon as={BsGithub} />
                <Text paddingLeft={"10px"}>Code</Text>
              </Button>
            </Link>
            <HStack display={"flex"} justifyContent={"center"} flexWrap="wrap">
              {stacks.map((stack, i) => (
                <Box
                  key={i}
                  transition=" all 0.2s ease-in-out"
                  _hover={{ transform: " scale(1.1)", transition: "0.8s" }}
                >
                  {stack}
                </Box>
              ))}
            </HStack>
            <Link
              target={"_blank"}
              href={link}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bg={"rgb(8, 111, 143)"}
                color="white"
                _hover={{ bg: "rgb(14, 129, 165)" }}
              >
                <Icon as={BsLink45Deg} />
                <Text paddingLeft={"10px"}>Demo</Text>
              </Button>
            </Link>
          </Flex>
        )}

        <br />
        <Text textAlign={"justify"} fontSize={{ lg: "2xl", md: "2xl", sm: "sm" }} p={2} >{about}</Text>
      </Box>
    </Box>
  );
}

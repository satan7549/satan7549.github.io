import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Grid,
  Button,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Container,
  Heading,
  Flex,
  Icon,
  Text,
  SimpleGrid,
  useMediaQuery,
  IconButton,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ContactSectionImage from "../Utilities/ContactSection_Img.png";

const ContactSection = () => {
  const [isLargerThan475] = useMediaQuery("(min-width: 475px)");

  return (
    <Container maxW={"90%"} id="contact" paddingTop={"120px"} pb={"50px"}>
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        Contact
      </Heading>
      <br />
      <br />
      <Grid
        maxW={"100%"}
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap="30px"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <GridItem height="full" p={"20px"}>
          <Image
            width={"100%"}
            height="full"
            borderRadius="5px"
            src={ContactSectionImage}
          />
        </GridItem>
        <GridItem
          p={"20px"}
          borderRadius={"10px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <VStack spacing={4}>
            <Heading
              fontFamily={"Moon Dance"}
              fontSize={{
                lg: "4xl",
                base: "2xl",
                md: "3xl",
              }}
            >
              Get in Touch
            </Heading>

            <SimpleGrid
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              padding="10px"
              borderRadius={"5px"}
              cursor="pointer"
              gridTemplateColumns={{ lg: "repeat(2,1fr)" }}
              gridTemplateRows="auto"
              gap={"10px"}
            >
              <GridItem>
                <Flex alignItems={"center"} gap={"10px"}>
                  <Icon
                    _hover={{
                      color: "rgb(9,97,184)",
                      cursor: "pointer",
                      transform: " scale(1.4)",
                      transition: "all 0.5s ease-in-out",
                    }}
                    as={PhoneIcon}
                  />
                  <Text fontSize={{ lg: "xl", md: "lg", sm: "sm", base: "sm" }}>
                    +918982385903
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                display={"flex"}
                alignItems={"center"}
                flexDir="row"
                gap={"10px"}
              >
                <Flex alignItems={"center"} gap={"10px"}>
                  <Icon
                    _hover={{
                      color: "rgb(9,97,184)",
                      cursor: "pointer",
                      transform: " scale(1.4)",
                      transition: "all 0.5s ease-in-out",
                    }}
                    as={EmailIcon}
                  />
                  <Text fontSize={{ lg: "xl", md: "lg", sm: "sm", base: "sm" }}>
                    satansharma7549@gmail.com
                  </Text>
                </Flex>
              </GridItem>
            </SimpleGrid>
            {isLargerThan475 ? null : (
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Link href="#">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      // color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
                <Link href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      // color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>
            )}

            <form
              style={{ width: "100%" }}
              target="_blank"
              action="https://formsubmit.co/5957675535b8962e3e2f31f2638049c1"
              method="POST"
            >
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input
                    type="text"
                    _hover={{ borderColor: "black" }}
                    name="name"
                    placeholder="Your Name"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input
                    type="email"
                    _hover={{ borderColor: "black" }}
                    name="email"
                    placeholder="Your Email"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>

                <Textarea
                  _hover={{ borderColor: "black" }}
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  resize="none"
                />
              </FormControl>
              <Button
                mt={2}
                type="submit"
                bg={"rgb(1, 75, 97)"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                h="40px"
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="16px"
                isFullWidth
              >
                Send Message
              </Button>
            </form>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ContactSection;

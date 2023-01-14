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
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ContactSectionImage from "../Utilities/ContactSection_Img.png";

const ContactSection = () => {
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
                bg={"rgb(1, 75, 97);"}
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

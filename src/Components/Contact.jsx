import React from "react";
import { Container, Flex, Icon, Link } from "@chakra-ui/react";
import { BiEnvelope } from "react-icons/bi"; /*BiPhoneCall*/
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <Container
      maxW={"5%"}
      position={"fixed"}
      left="0px"
      top={"40%"}
    >
      <Flex
        justifyContent="center"
        gap="20px"
        width={"100%"}
        flexDir={"column"}
      >
        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&to=satansharma7549@gmail.com&tf=cm"
          target={"_blank"}
        >
          <Icon
            _hover={{
              color: "rgb(234,67,53)",
              cursor: "pointer",
              transform: " scale(1.4)",
              transition: "all 0.5s ease-in-out",
            }}
            width={"70%"}
            height="70%"
            as={BiEnvelope}
          />
        </Link>
        <Link href="https://wa.me/+918982385903" target={"_blank"}>
          <Icon
            _hover={{
              color: "rgb(47,230,100)",
              cursor: "pointer",
              transform: " scale(1.4)",
              transition: "all 0.5s ease-in-out",
            }}
            width={"70%"}
            height="70%"
            as={BsWhatsapp}
          />
        </Link>
        <Link href="https://github.com/satan7549" target={"_blank"}>
          <Icon
            _hover={{
              color: "grey",
              cursor: "pointer",
              transform: " scale(1.4)",
              transition: "all 0.5s ease-in-out",
            }}
            width={"70%"}
            height="70%"
            as={BsGithub}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/satansharma-7549/"
          target={"_blank"}
        >
          <Icon
            _hover={{
              color: "rgb(9,97,184)",
              cursor: "pointer",
              transform: " scale(1.4)",
              transition: "all 0.5s ease-in-out",
            }}
            width={"70%"}
            height="70%"
            as={BsLinkedin}
          />
        </Link>
      </Flex>
    </Container>
  );
};

export default Contact;

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const About = () => {
  return (
    <Container
      maxW={"80%"}
      id="about"
      paddingTop={"120px"}

      // boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        About
      </Heading>
      <br />
      <br />
      <Grid
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        alignItems="center"
        gap={"50px"}
      >
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            width={{ lg: "65%", md: "60%", sm: "100%" }}
            borderRadius={"10px"}
            src="https://avatars.githubusercontent.com/u/107472942?v=4"
          />
        </GridItem>
        <GridItem display={"flex"} textAlign={"left"}>
          <Box margin={"auto"}>
            <Heading
              fontSize={{ lg: "25px", md: "25px", sm: "20px" }}
              size={{ lg: "lg", md: "md", sm: "md" }}
              color="rgb(14, 36, 49)"
            >
              Hi ,👋 I am Satan Kumar Sharma
            </Heading>
            <Text
              mt={4}
              fontStyle="italic"
              fontSize={{ lg: "22px", md: "18px", sm: "16px" }}
            >
              Full Stack Web Developer with a specialization in MERN stack,
              dedicated to developing creative web applications that enhance
              user experiences. The skilled, attentive, and collaborative
              developer is always ready to learn something new and strengthen
              skills.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

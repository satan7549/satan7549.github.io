import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Profile_Img from "../Utilities/My_Img.png";

export const About = () => {
  return (
    <Container maxW={"90%"} id="about" paddingTop={"120px"}>
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
        gap={"50px"}
        p={4}
        borderRadius="10px"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <GridItem>
          <Image
            margin={"auto"}
            width={{ lg: "65%", md: "60%", sm: "100%" }}
            borderRadius={"10px"}
            backdropFilter={"blur(2px)"}
            src={Profile_Img}
          />
        </GridItem>
        <GridItem
          display={"flex"}
          textAlign={{
            lg: "left",
            md: "justify",
            sm: "justify",
            base: "justify",
          }}
        >
          <Box margin={"auto"}>
            <Heading
              fontSize={{ lg: "25px", md: "25px", sm: "20px" }}
              textAlign={{
                lg: "left",
                md: "center",
                sm: "center",
                base: "center",
              }}
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

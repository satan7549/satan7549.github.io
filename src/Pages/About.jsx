import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export function About() {
  return (
    <Container maxW={"80%"} id="about" paddingTop={"50px"}>
      <Heading
        textAlign={"center"}
        size={"2xl"}
        //  color="rgb(14, 36, 49)"
      >
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
            width={{ lg: "50%", md: "60%", sm: "100%" }}
            borderRadius={"10px"}
            src="https://avatars.githubusercontent.com/u/107472942?v=4"
          />
        </GridItem>
        <GridItem display={"flex"} textAlign={"left"}>
          <Box margin={"auto"}>
            <Heading
              // size={{ lg: "lg", md: "md", sm: "md" }}
              fontSize={{ lg: "25px", md: "25px", sm: "20px" }}
              // color="rgb(14, 36, 49)"
            >
              Hi ,👋 I am Satan Kumar Sharma
            </Heading>
            <Text
              mt={4}
              fontStyle="italic"
              fontSize={{ lg: "22px", md: "18px", sm: "16px" }}
            >
              Full stack developer who loves to build new things is a
              passionate, driven student who likes to solve real world problems.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

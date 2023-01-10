import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStatus = () => {
  return (
    <Container
      maxW={"80%"}
      paddingTop={"120px"}
      // paddingBottom="80px"
    >
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Github Calendar
      </Heading>
      <br />
      <br />
      <Box display={"flex"} justifyContent="center">
        <GitHubCalendar color={"teal"} username="satan7549" />
      </Box>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Github Stats
      </Heading>
      <br />
      <br />
      <Grid
        templateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap="30px"
      >
        <GridItem>
          <Image
            width={"100%"}
            align={"center"}
            src="https://github-readme-stats.vercel.app/api/top-langs?username=satan7549&show_icons=true&locale=en&layout=compact"
          />
        </GridItem>
        <GridItem>
          <Image
            width={"100%"}
            align={"cen"}
            src="https://github-readme-stats.vercel.app/api?username=satan7549&show_icons=true&locale=en"
          />
        </GridItem>
        <GridItem>
          <Image
            width={"100%"}
            align={"cen"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=satan7549&"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default GithubStatus;

import { Container, Heading, Image, Box, HStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStatus = () => {
  const ImgSrc = [
    {
      src: "https://github-readme-stats.vercel.app/api/top-langs?username=satan7549&show_icons=true&locale=en&layout=compact",
    },
    {
      src: "https://github-readme-stats.vercel.app/api?username=satan7549&show_icons=true&locale=en",
    },
    {
      src: "https://github-readme-streak-stats.herokuapp.com/?user=satan7549&",
    },
  ];

  return (
    <Container maxW={"90%"} paddingTop={"120px"}>
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Github Calendar
      </Heading>
      <br />
      <br />
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        p={5}
        boxShadow="rgba(50, 50, 105, 0.25) 0px 2px 10px 0px,rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
        borderRadius={"0px 50px 0px 50px"}
      >
        <GitHubCalendar
          hideTotalCount={true}
          hideColorLegend={true}
          color={"teal"}
          username="satan7549"
        />
      </Box>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Github Stats
      </Heading>
      <br />
      <br />
      <HStack
        display={"flex"}
        gap="10px"
        justifyContent={"center"}
        gridTemplateColumns={"repeat(2,1fr)"}
        flexWrap={"wrap"}
      >
        {ImgSrc.map((ele, i) => (
          <Box width={{ lg: "40%", md: "40%", sm: "40%", base: "90%" }} key={i}>
            <Image w="full" h="full" align={"center"} src={ele.src} />
          </Box>
        ))}
      </HStack>
    </Container>
  );
};

export default GithubStatus;

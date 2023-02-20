import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import styles from "../Styles/SkillsSection.module.css";
import React from "react";
import { SkillCard } from "../Pages/Skills/SkillCard";
import { SiJson, SiNpm, SiPostman, SiVisualstudio } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Tools = () => {
  return (
    <Container paddingTop={"120px"} maxW={"90%"} id="skills">
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        Tools
      </Heading>
      <br />
      <HStack
        display={{ lg: "flex", md: "flex", sm: "grid", base: "grid" }}
        gap="10px"
        justifyContent={"center"}
        gridTemplateColumns={"repeat(2,1fr)"}
        flexWrap={{ lg: "wrap", md: "wrap", sm: "nowrap" }}
      >
        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(94, 211, 243, 0.4) 0px 5px 20px 2px"}
            skill="VS Code"
            icon={
              <SiVisualstudio
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.reactIcon}`}
              />
            }
          />
        </Box>
        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
        </Box>
        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </Box>
        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </Box>
        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="JSON"
            icon={
              <SiJson className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </Box>
      </HStack>
    </Container>
  );
};

export default Tools;

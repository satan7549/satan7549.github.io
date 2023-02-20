import React from "react";
import { SkillCard } from "./SkillCard";
import styles from "../../Styles/SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import {
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { HStack, Box, Container, Heading } from "@chakra-ui/react";

const SkillsSection = () => {
  return (
    <Container paddingTop={"120px"} maxW={"90%"} id="skills">
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        Technical Skills
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
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.reactIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(118, 76, 183, 0.4) 0px 10px 20px 4px"}
            skill="Redux"
            icon={
              <SiRedux
                className={`${styles.skillIcon}
              ${styles.reduxIcon}
               `}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Next JS"
            icon={
              <SiNextdotjs
                className={`${styles.skillIcon} ${styles.nextIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(247, 223, 30, 0.4) 0px 10px 20px 4px"}
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(233, 98, 40, 0.4) 0px 10px 20px 4px"}
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(37, 75, 221, 0.4) 0px 10px 20px 4px"}
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(0, 129, 203, 0.4) 0px 10px 20px 4px"}
            skill="Typescript"
            icon={
              <SiTypescript
                className={`${styles.skillIcon} ${styles.cssIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(95, 151, 89, 0.4) 0px 10px 20px 4px"}
            skill="Node"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="MongoDb"
            icon={
              <SiMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="Express"
            icon={
              <SiExpress
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </Box>

        <Box width={{ lg: "170px", md: "170px" }}>
          <SkillCard
            hover={"rgba(0, 129, 203, 0.4) 0px 10px 20px 4px"}
            skill="Chakra Ui"
            icon={
              <SiChakraui className={`${styles.skillIcon} ${styles.cuiIcon}`} />
            }
          />
        </Box>
      </HStack>
    </Container>
  );
};

export default SkillsSection;

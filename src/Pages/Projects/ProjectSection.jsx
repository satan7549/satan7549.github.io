import { ProjectCard } from "./ProjectCard";
import styles from "../../Styles/ProjectsSection.module.css";
import Skin_Store_Img from "../../Utilities/Projects.Images/Skin_Store_App_Img.PNG";
import Rentomojo_App_img from "../../Utilities/Projects.Images/Rentomojo_App_Img.PNG";
import HappFox_App_Img from "../../Utilities/Projects.Images/HappyFox_App_Img.PNG";
import fashion_square from "../../Utilities/Projects.Images/fashion_square.png";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiChakraui,
  SiRedux,
  // SiMongodb,
} from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";

const projects = [
  {
    name: "SkinStore.com Clone",
    img: Skin_Store_Img,
    link: "https://skinsotre-clone-by-sattan.netlify.app/",
    git: "https://github.com/satan7549/Skin_Store_Clone",
    about:
      "Skinstore.com is an e-commerce website that offers a wide range of cosmetic products. This was an individual project.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Rentomojo.com clone",
    img: Rentomojo_App_img,
    link: "https://glittering-liger-3137f9.netlify.app/",
    git: "https://github.com/Pushpendra-1697/Rentomojo.com-clone",
    about:
      "It is an e-commerce website where you can take a wide range of products for rent. This was a Collaborative Project.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  {
    name: "HappyFox.Com-Clone",
    img: HappFox_App_Img,
    link: "https://cheerful-duckanoo-d5d1ea.netlify.app/",
    git: "https://github.com/NAYANKUMAR21/closed-mask-38",
    about:
      "HappyFox is a customer relationship management solution that provides help desk and ticketing solutions to businesses across various industries.This was a Collaborative Project.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Limeroad.com-Clone",
    img: fashion_square,
    link: "https://fashi0n-square.netlify.app/",
    git: "https://github.com/Avneesh002/Fashion-square",
    about:
      "Fashion square is a clone of Limeroad.com. it is an E-commerce website that is used to shop for clothes and other products.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
];

export function ProjectsSection() {
  return (
    <Container maxW={"90%"} paddingTop={"120px"} id="projects">
      <Heading
        textAlign={"center"}
        marginBottom="50px"
        size={"2xl"}
        color="rgb(14, 36, 49)"
      >
        Projects
      </Heading>
      <SimpleGrid spacing={50}>
        {projects.map((project, i) => (
          <GridItem key={i}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}

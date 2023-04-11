import { ProjectCard } from "./ProjectCard";
import styles from "../../Styles/ProjectsSection.module.css";
import Skin_Store_Img from "../../Utilities/Projects.Images/Skin_Store_App_Img.PNG";
import Rentomojo_App_img from "../../Utilities/Projects.Images/Rentomojo_App_Img.PNG";
import Dukan_in_Img from "../../Utilities/Projects.Images/Dukan_in_Img.png";
// import HappFox_App_Img from "../../Utilities/Projects.Images/HappyFox_App_Img.PNG";
import fashion_square from "../../Utilities/Projects.Images/fashion_square.png";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiChakraui,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  // SiMongodb,
} from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const projects = [
  {
    name: "Amazon.in-Clone",
    img: Dukan_in_Img,
    link: "https://frontend-seven-red-58.vercel.app/",
    git: "https://github.com/satan7549/Dukan.in",
    about:
      "We developed Dukaan.in, an e-commerce website similar to Amazon.in, using the MERN stack. Our team created a platform with user-friendly features and unique designs that make it stand out. We focused on providing a smooth online shopping experience.",
    stacks: [
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiReact className={styles.stackIcon} />
        <Text>React</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiRedux className={styles.stackIcon} />
        <Text>Redux</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiNodedotjs className={styles.stackIcon} />
        <Text>Node.Js</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiMongodb className={styles.stackIcon} />
        <Text>MonogoDB</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiExpress className={styles.stackIcon} />
        <Text>Express</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiChakraui className={styles.stackIcon} />
        <Text>Chakra</Text>
      </Box>,
    ],
  },
  {
    name: "Limeroad.com-Clone",
    img: fashion_square,
    link: "https://fashi0n-square.netlify.app/",
    git: "https://github.com/Avneesh002/Fashion-square",
    about:
      "Fashion Square is our e-commerce website modeled after Limeroad.com, offering a wide range of clothing and accessories. Leveraging web development technologies, we created a user-friendly platform with unique features and designs to enhance the shopping experience.",
    stacks: [
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiReact className={styles.stackIcon} />
        <Text>React</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiRedux className={styles.stackIcon} />
        <Text>Redux</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiJavascript className={styles.stackIcon} />
        <Text>JS</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiChakraui className={styles.stackIcon} />
        <Text>Chakra</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiHtml5 className={styles.stackIcon} />
        <Text>HTML</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiCss3 className={styles.stackIcon} />
        <Text>CSS</Text>
      </Box>,
    ],
  },
  {
    name: "SkinStore.com Clone",
    img: Skin_Store_Img,
    link: "https://skinsotre-clone-by-sattan.netlify.app/",
    git: "https://github.com/satan7549/Skin_Store_Clone",
    about:
      "It is an e-commerce website called Skinstore.com that offers a variety of cosmetic products. Using web development technologies, I designed a user-friendly platform with a responsive design that provides customers with a seamless shopping experience. Skinstore.com is a reliable source for skincare, makeup, and haircare products from top brands.",
    stacks: [
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiReact className={styles.stackIcon} />
        <Text>React</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiChakraui className={styles.stackIcon} />
        <Text>Chakra</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiJavascript className={styles.stackIcon} />
        <Text>JS</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiCss3 className={styles.stackIcon} />
        <Text>CSS</Text>
      </Box>,
    ],
  },
  {
    name: "Rentomojo.com clone",
    img: Rentomojo_App_img,
    link: "https://glittering-liger-3137f9.netlify.app/",
    git: "https://github.com/Pushpendra-1697/Rentomojo.com-clone",
    about:
      "Our collaborative project was an e-commerce website that provides a range of products for rent. We used web development technologies to create this platform with a user-friendly interface. Our website offers a cost-effective solution for customers who need products for a limited time period, making rental services more convenient and accessible.",
    stacks: [
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiJavascript className={styles.stackIcon} />
        <Text>JS</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiHtml5 className={styles.stackIcon} />
        <Text>HTML</Text>
      </Box>,
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiCss3 className={styles.stackIcon} />
        <Text>CSS</Text>
      </Box>,
    ],
  },
  // {
  //   name: "HappyFox.Com-Clone",
  //   img: HappFox_App_Img,
  //   link: "https://cheerful-duckanoo-d5d1ea.netlify.app/",
  //   git: "https://github.com/NAYANKUMAR21/closed-mask-38",
  //   about:
  //     "I collaborated on HappyFox, a customer relationship management solution that offers help desk and ticketing solutions to businesses. We added unique features and designs to the existing platform, resulting in an effective solution for managing customer relationships. I am proud to showcase this project in my portfolio as an example of my development skills.",
  //   stacks: [
  //     <Box
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <SiJavascript className={styles.stackIcon} />
  //       <Text>JS</Text>
  //     </Box>,
  //     <Box
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <SiHtml5 className={styles.stackIcon} />
  //       <Text>HTML</Text>
  //     </Box>,
  //     <Box
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <SiCss3 className={styles.stackIcon} />
  //       <Text>CSS</Text>
  //     </Box>,
  //   ],
  // },
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

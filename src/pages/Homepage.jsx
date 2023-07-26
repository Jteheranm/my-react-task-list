import Header from "../components/Header";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import profileImg from "../assets/profileImg.jpg";
import "../assets/styles/home.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <Header />

      <Card maxW="sm">
        <CardBody>
          <Image src={profileImg} alt="My profile photo" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">JONATHAN TEHERAN MARTINEZ</Heading>
            <Text>Desarrollador web full stack</Text>
          </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
          <div className="profile-button-container">
            <Button
              leftIcon={<FaWhatsapp />}
              colorScheme="whatsapp"
              variant="solid"
              size="sm"
            >
              <a
                href="https://wa.me/573006421761"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp
              </a>
            </Button>

            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="messenger"
              variant="solid"
              size="sm"
            >
              <a
                href="https://co.linkedin.com/in/jonathanteheranmartinez"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </Button>

            <Button
              leftIcon={<FaGithub />}
              colorScheme="purple"
              variant="solid"
              size="sm"
            >
              <a
                href="https://github.com/Jteheranm"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;

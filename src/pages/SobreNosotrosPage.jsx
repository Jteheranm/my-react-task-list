import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  SiReact,
  SiEslint,
  SiChakraui,
} from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { TbBrandVite } from "react-icons/tb";
import Header from "../components/Header";

const SobreNosotrosPage = () => {

  const { colorMode } = useColorMode();

  return (
    <div className={`main-container ${colorMode}`}>
      <Header />

      <Card>
        <CardHeader>
          <Heading size="md" color="primaryColor.100">Funcionalidades</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <>
              <Heading size="xs" textTransform="uppercase" color="secondaryColor.100">
                Sobre nosotros
              </Heading>
              <Text pt="2" fontSize="sm">
                Contiene toda la información sobre la aplicación.
              </Text>
            </>
            <Box>
              <Heading size="xs" textTransform="uppercase" color="secondaryColor.100">
                Lista de tareas
              </Heading>
              <Text pt="2" fontSize="sm">
                Es una lista de tareas que se pueden marcar como terminadas.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md" color="primaryColor.100">Tecnologías</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <>
              <Heading size="xs" textTransform="uppercase" color="gold">
                Vite
                <TbBrandVite />
              </Heading>
              <Text pt="2" fontSize="sm">
                Herramienta para desarrollo frontend que permite iniciar
                proyectos rápidamente entre otras cualidades.
              </Text>
            </>
            <Box>
              <Heading size="xs" textTransform="uppercase" color="dodgerblue">
                React
                <SiReact />
              </Heading>
              <Text pt="2" fontSize="sm">
                Librería para desarrollo frontend caracterizada por la
                interactividad de las interfaces.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" color="teal">
                uuid
                <GiPerspectiveDiceSixFacesRandom />
              </Heading>
              <Text pt="2" fontSize="sm">
                Librería para generar identificadores únicos universales.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" color="slateBlue">
                Eslint
                <SiEslint />
              </Heading>
              <Text pt="2" fontSize="sm">
                Herramienta de análisis de código para identificar errores y
                malas prácticas al momento de escribir código, y así programar
                con mejores prácticas.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" color="turquoise">
                Chakra UI
                <SiChakraui />
              </Heading>
              <Text pt="2" fontSize="sm">
                Librería de componentes simple, modular y accesible que brinda
                componentes de interfaz básicos para crear aplicaciones.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default SobreNosotrosPage;

import { NavLink, useLocation } from "react-router-dom";
import { Tabs, TabList, Tab, Stack, Button } from "@chakra-ui/react";

import "../assets/styles/Navbar.css";

const Header = () => {
  const location = useLocation();
  const activeRouteIndex = {
    "/": 0,
    "/about": 1,
    "/tasks": 2,
  }[location.pathname];

  const setTabIndex = (tabIndex) => {
    const linkElement = document.querySelector(`#tabLink${tabIndex}`);
    linkElement.click();
  };

  return (
    <nav className="app-navbar">
      <h1 className="navbar-title">LISTA DE TAREAS App</h1>

      <Tabs
        id="no-responsive-tab"
        defaultIndex={activeRouteIndex}
        onChange={(index) => setTabIndex(index)}
        colorScheme="messenger"
      >
        <TabList>
          <Tab>
            <NavLink to="/" end id="tabLink0">
              Home
            </NavLink>
          </Tab>
          <Tab>
            <NavLink to="/about" end id="tabLink1">
              Sobre nosotros
            </NavLink>
          </Tab>
          <Tab>
            <NavLink to="/tasks" end id="tabLink2">
              Tareas
            </NavLink>
          </Tab>
        </TabList>
      </Tabs>

      <Stack
        id="responsive-tab"
        spacing={4}
        direction="column"
        align="center"
      >
        <NavLink to="/" end id="tabLink0">
          <Button colorScheme="gray" variant="outline" size="md">
            Home
          </Button>
        </NavLink>

        <NavLink to="/about" end id="tabLink1">
          <Button colorScheme="gray" variant="outline" size="md">
            Sobre nosotros
          </Button>
        </NavLink>

        <NavLink to="/tasks" end id="tabLink2">
          <Button colorScheme="gray" variant="outline" size="md">
            Tareas
          </Button>
        </NavLink>
      </Stack>
    </nav>
  );
};

export default Header;

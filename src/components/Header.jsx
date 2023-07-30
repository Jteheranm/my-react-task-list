import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Header = () => {
  const [viewMode, setViewMode] = useState("");

  return (
    <nav className="HeaderContainer">
      <h1 className="header-title">DOMINA EL TERRENO</h1>

      <div className={`button-group ${viewMode}`}>
        <Button
          size="md"
          variant="outline"
          variantColor="brand"
          onClick={() => setViewMode("")}
        >
          Ver detalles
        </Button>
        <Button
          size="md"
          variant="outline"
          variantColor="brand"
          onClick={() => setViewMode("column-view")}
        >
          Ver video
        </Button>
      </div>
    </nav>
  );
};

export default Header;

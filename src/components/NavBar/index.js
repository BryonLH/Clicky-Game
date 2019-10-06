import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css";

function NavBar() {
  return (
<Navbar>
  <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Score
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;


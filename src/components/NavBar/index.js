import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css";



function NavBar(props) {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Avengers Clicky Game | {props.message}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Score: <span className="score">{props.score}</span>
          High Score: <span className="high-score">{props.highscore}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


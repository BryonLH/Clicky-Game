import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import logo from "./Avengers-clicky-game-logo.png"
import "./style.css";


function NavBar(props) {
  return (
    <Navbar>
      <Navbar.Brand><img src={logo} className="logo" alt="Avengers Clicky Game"></img></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <div className="score">Current Score: {props.score}</div>
          <div className="score">High Score: {props.highscore}</div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


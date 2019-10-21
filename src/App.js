import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import AlertMessage from "./components/AlertMessage";
import characters from "./clickycharacters.json";
import { shuffle } from 'lodash';
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    clickedCharacters: [],
    characterOrder: shuffle(characters),
    score: 0,
    highscore: 0,
    message: `Select an Avenger to build your team`,
    alertType: `primary`
  };


  handleClick = (name) => {
    console.log(`Clicked characters: ${this.state.clickedCharacters}`);
    let clickedCharacters = this.state.clickedCharacters;
  if (clickedCharacters.indexOf(name) === -1) {
      this.setState({
        clickedCharacters: clickedCharacters.concat(name),
        characterOrder: shuffle(characters),
        score: this.state.score + 1,
        highscore: this.state.score + 1 > this.state.highscore ? this.state.score + 1 : this.state.highscore,
        message: `Avenger added to team!`,
        alertType: `success`
      })
    } else {
      this.setState({
        score: 0,
        clickedCharacters: [],
        characterOrder: shuffle(characters),
        message: `Avenger already selected, try again`,
        alertType: `danger`
      })
    };
  };


  // Map over this.state.characters and render a ClickyCard component for each character object
  render() {
    return (
      <Wrapper>
        <div className="container">
          <NavBar
            score={this.state.score}
            highscore={this.state.highscore}
          />
          <AlertMessage 
          message={this.state.message}
          alertType={this.state.alertType}
          />
          <div className="row clicky-container justify-content-center">
            {this.state.characterOrder.map(character => (
              <ClickyCard
                key={character.id}
                name={character.name}
                image={character.image}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;

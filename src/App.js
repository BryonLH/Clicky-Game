import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import characters from "./clickycharacters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    highscore: 0,
    message: "Select an Avenger to build your team"
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  handleClick = (id) => {
    // let clickedCharacters = this.state.clickedCharacters;
    let tempArray = this.clickedCharacters.push(id)
    console.log(`Clicked ${tempArray}`);

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container">
          <NavBar
            score={this.state.score}
            highscore={this.state.highscore}
            message={this.state.message}
          />
          <div className="row">
            {this.state.characters.map(character => (
              <ClickyCard
                removeFriend={this.removeFriend}
                id={character.id}
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

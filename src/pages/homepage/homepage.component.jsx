import { Component } from "react";
import "./homepage.styles.scss";
import Card from "../../components/card/card.component";
import CARDS_DATA from "./cards-data";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      active: 1,
      cards: CARDS_DATA,
    };
  }

  changeActive = (id) => {
    this.setState({ active: id });
  };

  render() {
    return (
      <div className="homepage">
        <div className="container">
          {this.state.cards.map((card) => (
            <Card
              key={card.id}
              changeActive={this.changeActive}
              active={this.state.active}
              {...card}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;

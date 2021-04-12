import React, { Component } from 'react';
import { Card } from './Components/index';
import './style.css';
import iconSedans from './image/icon-sedans.svg';
import iconSuvs from './image/icon-suvs.svg';
import iconLuxury from './image/icon-luxury.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          borderTopLeftRadius: true,
          borderTopRighRadius: false,
          borderBottomLeftRadius: true,
          borderBottomRightRadius: false,
        },
        {
          borderTopLeftRadius: false,
          borderTopRighRadius: false,
          borderBottomLeftRadius: false,
          borderBottomRightRadius: false,
        },
        {
          borderTopLeftRadius: false,
          borderTopRighRadius: true,
          borderBottomLeftRadius: false,
          borderBottomRightRadius: true,
        },
        
      ]
    }
  }
  mudarRadius() {
    if(mediaQuerieList) {
      this.setState()
    }
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <main>
        <Card
          backgroundColor="hsl(31, 77%, 52%)"
          borderTopLeftRadius={this.state.card[0].borderTopLeftRadius}
          borderTopRightRadius={this.state.card[0].borderTopRighRadius}
          borderBottomLeftRadius={this.state.card[0].borderBottomLeftRadius}
          borderBottomRightRadius={this.state.card[0].borderBottomRightRadius}
          imageSet={iconSedans}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city ar on your next road trip."
          color="hsl(31, 77%, 52%)"
          />
        <Card
          backgroundColor="hsl(184, 100%, 22%)"
          borderTopLeftRadius={this.state.card[1].borderTopLeftRadius}
          borderTopRightRadius={this.state.card[1].borderTopRighRadius}
          borderBottomLeftRadius={this.state.card[1].borderBottomLeftRadius}
          borderBottomRightRadius={this.state.card[1].borderBottomRightRadius}
          imageSet={iconSuvs}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vocation and off road adventures."
          color="hsl(184, 100%, 22%)"
          />
        <Card
          backgroundColor="hsl(179, 100%, 13%)"
          borderTopLeftRadius={false}
          borderTopRightRadius={true}
          borderBottomLeftRadius={false}
          borderBottomRightRadius={true}
          imageSet={iconLuxury}
          title="LUXURY"
          description="Cruise in the best car brands without the boated prices. Enjoy the enhanced confort of a luxury rental and arrive in style."
          color="hsl(179, 100%, 13%)"
          />
      </main>
    );
  }
}

const mediaQuerieList = matchMedia("(max-width: 791)");

export default App;

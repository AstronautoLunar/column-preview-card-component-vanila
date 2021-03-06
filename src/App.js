import React, { Component } from 'react';
import { Card } from './Components/index';
import './style.css';
import iconSedans from './image/icon-sedans.svg';
import iconSuvs from './image/icon-suvs.svg';
import iconLuxury from './image/icon-luxury.svg';

class App extends Component {
  render() {
    return (
      <main>
        <Card
          backgroundColor="hsl(31, 77%, 52%)"
          imageSet={iconSedans}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city ar on your next road trip."
          color="hsl(31, 77%, 52%)"
          id="card1"
          />
        <Card
          backgroundColor="hsl(184, 100%, 22%)"
          imageSet={iconSuvs}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vocation and off road adventures."
          color="hsl(184, 100%, 22%)"
          id="card2"
          />
        <Card
          backgroundColor="hsl(179, 100%, 13%)"
          imageSet={iconLuxury}
          title="LUXURY"
          description="Cruise in the best car brands without the boated prices. Enjoy the enhanced confort of a luxury rental and arrive in style."
          color="hsl(179, 100%, 13%)"
          id="card3"
          />
      </main>
    );
  }
}

export default App;

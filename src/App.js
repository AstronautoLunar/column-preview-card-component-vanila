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
          borderTopLeftRadius={true}
          borderTopRightRadius={false}
          borderBottomLeftRadius={true}
          borderBottomRightRadius={false}
          imageSet={iconSedans}
          />
        <Card
          backgroundColor="hsl(184, 100%, 22%)"
          borderTopLeftRadius={false}
          borderTopRightRadius={false}
          borderBottomLeftRadius={false}
          borderBottomRightRadius={false}
          imageSet={iconSuvs}
          />
        <Card
          backgroundColor="hsl(179, 100%, 13%)"
          borderTopLeftRadius={false}
          borderTopRightRadius={true}
          borderBottomLeftRadius={false}
          borderBottomRightRadius={true}
          imageSet={iconLuxury}
          />
      </main>
    );
  }
}

export default App;

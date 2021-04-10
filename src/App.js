import React, { Component } from 'react';
import { Card } from './Components/index';
import './style.css';
import iconSedans from './image/icon-sedans.svg';

/**
 * Tentando definir imagem
 */

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
          />
        <Card
          backgroundColor="hsl(179, 100%, 13%)"
          borderTopLeftRadius={false}
          borderTopRightRadius={true}
          borderBottomLeftRadius={false}
          borderBottomRightRadius={true}
          />
      </main>
    );
  }
}

export default App;

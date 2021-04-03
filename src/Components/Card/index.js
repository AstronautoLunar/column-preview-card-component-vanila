import React, { Component } from 'react';
import { AreaCard, ImageCard } from './styles';

class Card extends Component {
    render() {
        return (
            <AreaCard 
                backgroundColor={this.props.backgroundColor}
                borderTopLeftRadius={this.props.borderTopLeftRadius}
                borderTopRightRadius={this.props.borderTopRightRadius}
                borderBottomLeftRadius={this.props.borderBottomLeftRadius}
                borderBottomRightRadius={this.props.borderBottomRightRadius}
            >
                <ImageCard
                    imageSet={this.props.imageSet}
                />
            </AreaCard>
        );
    }
}

export default Card;
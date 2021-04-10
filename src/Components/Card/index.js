import React, { Component } from 'react';
import { AreaCard, Icon } from './styles';


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
                <Icon src={this.props.imageSet}/>
            </AreaCard>
        );
    }
}

export default Card;
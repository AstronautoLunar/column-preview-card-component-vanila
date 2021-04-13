import React, { Component } from 'react';
import { 
    AreaCard,
    Icon,
    TitleCard,
    DescriptionCard,
    ButtonCard
} from './styles';


class Card extends Component {
    render() {
        return (
            <AreaCard
                on
                backgroundColor={this.props.backgroundColor}
                borderTopLeftRadius={this.props.borderTopLeftRadius}
                borderTopRightRadius={this.props.borderTopRightRadius}
                borderBottomLeftRadius={this.props.borderBottomLeftRadius}
                borderBottomRightRadius={this.props.borderBottomRightRadius}
                id={this.props.id}
            >
                <Icon src={this.props.imageSet}/>
                <TitleCard>{this.props.title}</TitleCard>
                <DescriptionCard>
                    {this.props.description}
                </DescriptionCard>
                <ButtonCard
                    color={this.props.color}
                >Learn More</ButtonCard>
            </AreaCard>
        );
    }
}

export default Card;
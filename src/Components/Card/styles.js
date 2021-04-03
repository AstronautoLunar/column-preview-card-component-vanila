import styled from 'styled-components';

const AreaCard = styled.div`
    width: 225px;
    height: 350px;
    background-color: ${props => props.backgroundColor};
    border-top-left-radius: ${props => props.borderTopLeftRadius ? "10px" : "0px"};
    border-bottom-left-radius: ${props => props.borderBottomLeftRadius ? "10px" : "0px"};
    border-top-right-radius: ${props => props.borderTopRightRadius ? "10px" : "0px"};
    border-bottom-right-radius: ${props => props.borderBottomRightRadius ? "10px" : "0px"};
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const ImageCard = styled.image`
    src: ${props => props.imageSet};
    width: 50px;
    height: 50px;
`

export { AreaCard, ImageCard };
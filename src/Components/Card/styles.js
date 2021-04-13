import styled from 'styled-components';

const AreaCard = styled.div`
    width: 265px;
    height: 440px;
    background-color: ${props => props.backgroundColor};
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const IconStyle = styled.div`
    width: 63.5px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 20px;
`

const Icon = styled(IconStyle)`
    background-image: url(${props => props.src});
`

const TitleCard = styled.h1`
    color: white;
    font-size: 40px;
    font-family: 'Big Shoulders Display', cursive;
    margin: 20px;
`

const DescriptionCard = styled.p`
    color: white;
    font-size: 15px;
    font-family: 'Lexend Deca', sans-serif;
    margin-left: 20px;
    margin-bottom: 100px;
`

const ButtonCard = styled.button`
    border-radius: 20px;
    border: 2px solid white;
    outline: 0 0;
    box-shadow: 0 0 0 0 white;
    color: ${props => props.color};
    background-color: white;
    padding: 10px;
    width: 125px;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
        background-color: rgba(255, 255, 255, 0);
        color: white;
    }
`

export { 
    AreaCard, 
    Icon, 
    TitleCard, 
    DescriptionCard, 
    ButtonCard
};
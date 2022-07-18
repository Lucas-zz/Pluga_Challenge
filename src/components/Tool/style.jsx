import styled from 'styled-components';

const ToolContainer = styled.div`
    width: 15vw;
    height: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-self: center;
    align-items: center;
    align-self: center;

    position: relative;

    background-color: #EAEAEA;
    box-shadow: 1.5px 1.5px 3px rgba(57, 63, 72, 0.3);

    border-radius: 5px;

    padding: 10px;

    will-change: transition;
    transition: transform 250ms;

    :hover {
        transition: transform 250ms;
        transform: translateX(-3px) translateY(-3px);

        box-shadow: 0 0 0 1px #27AAE1;
        color: #27AAE1;

        cursor: pointer;
    }
`;

const CircularImage = styled.div`
    width: 90px;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.color} !important;
    border-radius: 50%;
    
    position: absolute;
    top: 30px;
`;

const Logo = styled.img`
    width: 50%;
    height: 50%;
`

const ToolName = styled.span`
    width: 70%;

    font-family: 'Roboto Condensed', sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    background-color: inherit;
    border-radius: 2px;

    position: absolute;
    bottom: 20px;
`;

export {
    ToolContainer,
    CircularImage,
    ToolName,
    Logo
}
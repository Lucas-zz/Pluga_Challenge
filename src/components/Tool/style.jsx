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

    background-color: #EAEAEA;
    box-shadow: 1.5px 1.5px 3px rgba(57, 63, 72, 0.3);

    border-radius: 5px;

    padding: 10px;

    will-change: transform;
    transition: transform 250ms ease-in-out;

    :hover {
        transition: transform 250ms;
        transform: translateX(-3px) translateY(-3px);
    }
`;

const CircularImage = styled.div`
    width: 90px;
    height: 90px;

    border-radius: 50%;

    background-color: #FFF;
`;

const ToolName = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFF;

    padding: 10px 30px;
`;

export {
    ToolContainer,
    CircularImage,
    ToolName,
}
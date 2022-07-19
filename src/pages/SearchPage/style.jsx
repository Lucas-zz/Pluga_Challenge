import styled from 'styled-components';

const OuterContainer = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFF;
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 35px;

    border-radius: 10px;
`;

export {
    OuterContainer,
    InnerContainer,
}
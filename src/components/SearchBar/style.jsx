import styled from 'styled-components';

const SearchContainer = styled.div`
    width: 100%;
    height: 60px;

    position: relative;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: 50px;

    background-color: #EAEAEA;

    border: 1px solid #CECECE;
    border-radius: 50px;

    font-size: 18px;
`;

const IconContainer = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;

    cursor: pointer;
`;

export {
    SearchContainer,
    SearchInput,
    IconContainer
}
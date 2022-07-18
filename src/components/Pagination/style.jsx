import styled from 'styled-components';

const ToolsContainer = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 35px;
    
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-wrap: wrap;

    gap: 40px;
`;

const PaginationContainer = styled.div`
    width: 100%;
    height: 30px;

    position: absolute;
    bottom: 10vh;

    font-family: 'Roboto Condensed', sans-serif;

    user-select: none;

    & > ul {
        display: flex;
        justify-content: center;
        align-items: center;

        & > li {
            margin: 2vw 1vw;
            padding: 1vw;

            box-shadow: 0 0 0 1px #27AAE1;
            color: #333;

            font-size: 18px;
            border-radius: 10px;

            will-change: transition;
            transition: background 150ms;

            cursor: pointer;

            :hover {
                background-color: #27AAE1;
                transition: transform 250ms;
            }

            & > a {
                margin: 10px;
            }
        }
    }
`;

export {
    ToolsContainer,
    PaginationContainer,
}
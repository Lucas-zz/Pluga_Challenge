import styled from 'styled-components';

const ToolsContainer = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 35px;

    position: relative;
    
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-wrap: wrap;

    gap: 40px;

    @media (max-width: 978px) {
        grid-template-columns: auto auto auto;
        margin-bottom: 150px;
    }
`;

const PaginationContainer = styled.div`
    width: 100%;
    height: 30px;

    position: absolute;
    bottom: 10%;

    font-family: 'Roboto Condensed', sans-serif;

    user-select: none;

    @media (max-width: 968px) {
        bottom: -15%;
    }

    & > ul {
        display: flex;
        justify-content: center;
        align-items: center;

        & > li {
            margin: 1vw;
            margin-top: 50px;
            color: #333;

            & > a {
                min-width: 100% !important;
                min-height: 100% !important;

                box-shadow: 0 0 0 1px #27AAE1;
                
                font-size: 18px;
                border-radius: 5px;
                padding: 15px;
                
                cursor: pointer;

                will-change: transition;
                transition: background 150ms;

                :hover {
                    background-color: #EAEAEA;
                    transition: transform 250ms;
                }

                :active {
                    background-color: #27AAE1;
                }
            }
        }
    }
`;

export {
    ToolsContainer,
    PaginationContainer,
}
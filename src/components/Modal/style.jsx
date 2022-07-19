import styled from "styled-components";

const CurrentTool = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
`;

const CircularImage = styled.div`
    width: ${props => props.smaller ? '80px' : '120px'};
    height: ${props => props.smaller ? '80px' : '120px'};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.color} !important;
    border-radius: 50%;

    margin: 20px 40px;
`;

const Logo = styled.img`
    width: 50%;
    height: 50%;
`;

const ToolName = styled.span`
    width: ${props => props.smaller ? '80%' : '100%'};

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${props => props.smaller ? 'font-size: 14px' : ''};
    
    padding: 20px;
    padding-top: 0;

    ${props => props.smaller ? 'padding: 0' : ''};

    font-family: 'Roboto Condensed', sans-serif;
`;

const LastSeenTools = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
`;

const AccessToolPage = styled.button`    
    border-radius: 20px;
    padding: 10px 35px !important;
    
    background-color: #27AAE1;
    color: #FFF;
    
    cursor: pointer;
`;

const ToolContainer = styled.div`
    width: 250px;

    display: flex;
    flex-direction: column;

    padding: 0 50px;
`;

const ToolsList = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ToolListing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};

export {
    CircularImage,
    Logo,
    ToolName,
    CurrentTool,
    LastSeenTools,
    AccessToolPage,
    ToolContainer,
    ToolsList,
    ToolListing,
    style,
}
import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import LastSeenToolsContext from '../../contexts/lastSeenToolsContext';
import { CircularImage, Logo, ToolName, CurrentTool, LastSeenTools, AccessToolPage, ToolContainer, ToolsList, ToolListing, style } from './style';

export default function Modality({ ...props }) {

    function handleNavigation(url) {
        window.open(url, '_blank').focus();
    }

    const { lastSeenTools } = useContext(LastSeenToolsContext);

    return (
        <Modal
            open={props?.open}
            onClose={props?.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CurrentTool>
                    <CircularImage color={props?.color}>
                        <Logo src={props?.icon} />
                    </CircularImage>
                    <ToolContainer>
                        <ToolName>{props?.name}</ToolName>
                        <AccessToolPage onClick={() => handleNavigation(props?.link)}>ACESSAR</AccessToolPage>
                    </ToolContainer>
                </CurrentTool>
                <LastSeenTools>
                    <span>ÚLTIMAS FERRAMENTAS VISUALIZADAS</span>
                    <ToolsList>
                        {lastSeenTools?.map((tool) => (
                            <ToolListing key={tool.name}>
                                <CircularImage smaller={true} color={tool?.color}>
                                    <Logo smaller={true} src={tool?.icon} />
                                </CircularImage>
                                <ToolName smaller={true}>{tool?.name}</ToolName>
                            </ToolListing>
                        ))}
                    </ToolsList>
                </LastSeenTools>

            </Box>
        </Modal>
    );
}
import { Box, Modal } from '@mui/material';
import { CircularImage, Logo, ToolName, CurrentTool, LastSeenTools, AccessToolPage, ToolContainer, style } from './style';

export default function Modality({ ...props }) {

    function handleNavigation(url) {
        window.open(url, '_blank');
    }

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
                    ÚLTIMAS FERRAMENTAS VISUALIZADAS
                </LastSeenTools>
            </Box>
        </Modal>
    );
}
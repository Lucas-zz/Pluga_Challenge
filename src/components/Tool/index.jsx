import { useState } from "react";
import Modality from "../Modal";
import { CircularImage, ToolContainer, ToolName, Logo } from "./style";

export default function Tool({ ...props }) {

    const upperCasedToolName = props.name.toUpperCase();
    const toolColor = props.color;
    const toolIcon = props.icon;
    const toolURL = props.link;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ToolContainer onClick={() => handleOpen()}>
                <CircularImage color={toolColor}>
                    <Logo src={toolIcon} />
                </CircularImage>
                <ToolName color={toolColor}>
                    {upperCasedToolName}
                </ToolName>
            </ToolContainer>
            <Modality
                name={upperCasedToolName}
                color={toolColor}
                icon={toolIcon}
                link={toolURL}
                handleClose={handleClose}
                open={open}
            />
        </>
    );
};

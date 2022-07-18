import { useState } from "react";
import { CircularImage, ToolContainer, ToolName, Logo } from "./style";

export default function Tool({ ...props }) {

    const upperCasedToolName = props.name.toUpperCase();
    const toolColor = props.color;
    const toolIcon = props.icon;
    const toolURL = props.link;

    return (
        <>
            <ToolContainer onClick={() => props.handleOpen()}>
                <CircularImage color={toolColor}>
                    <Logo src={toolIcon} />
                </CircularImage>
                <ToolName color={toolColor}>
                    {upperCasedToolName}
                </ToolName>
            </ToolContainer>
            <Modality />
        </>
    );
};

import { useContext, useState } from "react";
import LastSeenToolsContext from "../../contexts/lastSeenToolsContext";
import Modality from "../Modal";
import { CircularImage, ToolContainer, ToolName, Logo } from "./style";

export default function Tool({ ...props }) {
    const { lastSeenTools, setLastSeenTools } = useContext(LastSeenToolsContext);

    const upperCasedToolName = props.name.toUpperCase();
    const toolColor = props.color;
    const toolIcon = props.icon;
    const toolURL = props.link;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleLastSeenTools({ ...props }) {
        const MAX_LAST_SEEN_NUM = 3;

        if (lastSeenTools?.length === MAX_LAST_SEEN_NUM) lastSeenTools?.shift();

        if (!hasRepetitions(props.name)) lastSeenTools?.push(props);

        setLastSeenTools(lastSeenTools);
    }

    function hasRepetitions(name) {
        let hasRepetiton = false;

        lastSeenTools.map((tool) => {
            if (name === tool.name) {
                return hasRepetiton = true;
            }
            return null;
        });

        return hasRepetiton;
    }

    function handleToolSelection() {
        handleLastSeenTools(props);
        handleOpen();
    }

    return (
        <>
            <ToolContainer onClick={() => handleToolSelection()}>
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
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

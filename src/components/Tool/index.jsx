import { CircularImage, ToolContainer, ToolName, Logo } from "./style";

export default function Tool({ ...props }) {

    const upperCasedToolName = props.name.toUpperCase();
    const toolColor = props.color;
    const toolIcon = props.icon;
    const toolURL = props.link;

    function handleNavigation(url) {
        window.open(url, '_blank').focus();
    }

    return (
        <ToolContainer onClick={() => handleNavigation(toolURL)}>
            <CircularImage color={toolColor}>
                <Logo src={toolIcon} />
            </CircularImage>
            <ToolName color={toolColor}>
                {upperCasedToolName}
            </ToolName>
        </ToolContainer>
    );
};

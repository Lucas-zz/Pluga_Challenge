import SearchBar from "../../components/SearchBar";
import Tool from "../../components/Tool";
import { OuterContainer, InnerContainer, ToolsContainer } from "./style";
import useTools from "../../hooks/api/useTools";

export default function SearchPage() {

  const { toolsLoading, tools } = useTools();

  return (
    <OuterContainer>
      <InnerContainer>
        <SearchBar />
        <ToolsContainer>
          {tools?.map(tool => (
            <Tool
              key={tool.app_id}
              name={tool.name}
              color={tool.color}
              icon={tool.icon}
              link={tool.link}
            />
          ))}
        </ToolsContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

import SearchBar from "../../components/SearchBar";
import Tool from "../../components/Tool";
import { OuterContainer, InnerContainer, ToolsContainer } from "./style";

export default function SearchPage() {
  return (
    <OuterContainer>
      <InnerContainer>
        <SearchBar />
        <ToolsContainer>
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
        </ToolsContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

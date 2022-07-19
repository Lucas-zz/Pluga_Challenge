import SearchBar from "../../components/SearchBar";
import { OuterContainer, InnerContainer } from "./style";
import useTools from "../../hooks/api/useTools";
import Pagination from "../../components/Pagination";
import { useState } from "react";

export default function SearchPage() {
  const { toolLoading, tools } = useTools();
  const [filteredTools, setFilteredTools] = useState(null);

  function handleSearch(text) {
    const searchParams = text.toLowerCase();

    const filteredData = tools.filter((tool) => {
      if (searchParams === '') {
        return tool;
      } else {
        return tool.app_id.includes(searchParams);
      }
    });
    setFilteredTools(filteredData);
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <SearchBar onSearch={(text) => handleSearch(text)} />
        {toolLoading
          ? <h1>Loading...</h1>
          : filteredTools
            ? <Pagination tools={filteredTools} />
            : <Pagination tools={tools} />
        }
      </InnerContainer>
    </OuterContainer>
  );
};

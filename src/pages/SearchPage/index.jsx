import SearchBar from "../../components/SearchBar";
import { OuterContainer, InnerContainer } from "./style";
import useTools from "../../hooks/api/useTools";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import Modality from "../../components/Modal";

export default function SearchPage() {
  const { toolLoading, tools } = useTools();

  return (
    <OuterContainer>
      <InnerContainer>
        <SearchBar />
        {toolLoading
          ? <h1>Loading...</h1>
          : <Pagination tools={tools} />
        }
      </InnerContainer>
    </OuterContainer>
  );
};

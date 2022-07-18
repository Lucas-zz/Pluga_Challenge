import SearchBar from "../../components/SearchBar";
import { OuterContainer, InnerContainer } from "./style";
import useTools from "../../hooks/api/useTools";
import Pagination from "../../components/Pagination";
import { useState } from "react";

export default function SearchPage() {
  const { toolLoading, tools } = useTools();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <OuterContainer>
      <InnerContainer>
        <SearchBar />
        {toolLoading
          ? <h1>Loading...</h1>
          : <Pagination handleOpen={handleOpen} tools={tools} />
        }
      </InnerContainer>
    </OuterContainer>
  );
};

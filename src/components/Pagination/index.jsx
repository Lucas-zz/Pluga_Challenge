import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Tool from "../Tool";
import { PaginationContainer, ToolsContainer } from "./style";

export default function Pagination({ tools }) {

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 12;

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(tools?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(tools?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, tools]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % tools.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <ToolsContainer>
                {currentItems &&
                    currentItems.map(tool => (
                        <Tool
                            key={tool.app_id}
                            name={tool.name}
                            color={tool.color}
                            icon={tool.icon}
                            link={tool.link}
                        />
                    ))}
            </ToolsContainer>
            <PaginationContainer>
                <ReactPaginate
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            </PaginationContainer>
        </>
    );
}
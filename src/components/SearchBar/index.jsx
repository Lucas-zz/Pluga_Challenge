import { IconContainer, SearchContainer, SearchInput } from "./style";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function SearchBar({ onSearch = () => 0 }) {
    const [search, setSearch] = useState('');

    function onEnter() {
        onSearch(search);
    }

    function searching(event) {
        setSearch(event.target.value);
        onSearch(event.target.value);
    }
    return (
        <SearchContainer>
            <SearchInput
                type='text'
                placeholder='BUSCAR FERRAMENTAS'
                value={search}
                onChange={(event) => searching(event)}
                onKeyDown={(event) => event.key === 'Enter' && onEnter()}
            />
            <IconContainer>
                <SearchIcon onClick={() => onSearch(search)} />
            </IconContainer>
        </SearchContainer>
    );
};

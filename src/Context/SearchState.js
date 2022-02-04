import { useState } from "react";
import SearchContext from "./SearchContext";

const SearchState = (props) => {
    const [searchText, setSearchText] = useState("");

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            {props.children}
        </SearchContext.Provider>
    )


}

export default SearchState;
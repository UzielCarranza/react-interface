import {BiSearch, BiCaretDown} from "react-icons/bi";

const Search = () => {
    return (
        <div className="container-app">
            <div className="wrapper-app">
                <div className="search-icon">
                    <BiSearch/>
                    <label htmlFor="query-input" className="query"/>
                </div>
                <input type="text" name="query-input" id="query" value="" placeholder="Search" className="query-input"/>
                <div className="container-button">
                    <div>
                        <button type="button"
                                className="button-search" id="options-menu" aria-haspopup="true" aria-expanded="true">

                            Sort By <BiCaretDown className="down-arrow"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
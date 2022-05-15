import {BiSearch, BiCaretDown, BiCheck} from "react-icons/bi";
import {useState} from "react";

const DropDown = ({toggleSort, sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    if (!toggleSort) {
        return null;
    } else {
        return (
            <div className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div onClick={() => onSortByChange("petName")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                        role="menuitem">Pet Name {(sortBy === 'petName') && <BiCheck/>}
                    </div>
                    <div onClick={() => onSortByChange('ownerName')}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                        role="menuitem">Owner Name {(sortBy === 'ownerName') && <BiCheck/>}
                    </div>
                    <div onClick={() => onSortByChange('aptDate')}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                        role="menuitem">Date {(sortBy === 'aptDate') && <BiCheck/>}
                    </div>
                    <div onClick={() => onOrderByChange('asc')}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
                        role="menuitem">Asc  {(orderBy === 'asc') && <BiCheck/>}
                    </div>
                    <div onClick={() => onOrderByChange('desc')}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                        role="menuitem">Desc {(orderBy === 'desc') && <BiCheck/>}
                    </div>
                </div>
            </div>
        )
    }
}


const Search = ({query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange}) => {

    let [toggleSort, setToggleSort] = useState(false);
    return (
        <div className="container-app">
            <div className="wrapper-app">
                <div className="search-icon">
                    <BiSearch/>
                    <label htmlFor="query-input" className="query"/>
                </div>
                <input type="text" name="query-input" id="query" value={query} placeholder="Search" className="query-input"
                onChange={(event) => {onQueryChange(event.target.value)}}
                />
                <div className="container-button">
                    <div>
                        <button type="button" onClick={() => {
                            setToggleSort(!toggleSort)
                        }}
                                className="button-search" id="options-menu" aria-haspopup="true" aria-expanded="true">

                            Sort By <BiCaretDown className="down-arrow"/>
                        </button>
                        <DropDown toggleSort={toggleSort}
                                  orderBy={orderBy}
                                  onOrderByChange={mySort => onOrderByChange(mySort)}
                                  sortBy={sortBy}
                                  onSortByChange={sortBy => onSortByChange(sortBy)}

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
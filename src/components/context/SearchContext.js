import React, { useState } from 'react'

const SearchContext = React.createContext()

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const data = {search, setSearch, isSearching, setIsSearching}

    return (
        <SearchContext.Provider value={ data }>
            { children }
        </SearchContext.Provider>
    )
}

export { SearchProvider }
export default SearchContext
import { useContext, useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import getMovies from "../helpers/getMovies"
import SearchContext from "./context/SearchContext"
import useDebouncer from "./hooks/useDebounce"
import MovieItem from "./MovieItem"



const SearchList = () => {
    const { search } = useContext(SearchContext)
    const [searchedMovies, setSearchedMovies] = useState([])
    const debouncedSearch = useDebouncer(search, 500)
    
    useEffect(() => {
        const searchFormat = debouncedSearch?.replaceAll(' ', '+').toLowerCase()
        const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchFormat}`
        console.log(debouncedSearch)

        // query requires a text
        if (searchFormat)
        getMovies(searchURL)
        .then(data => {
            const results = data?.results
            const orderedMoviesByVote = results?.sort((a, b) => b.vote_average - a.vote_average)
            setSearchedMovies(orderedMoviesByVote)
        })
    }, [debouncedSearch])

    return (
        <div className="mt-3">
            <h3 className="mb-3">Search results</h3>
            <Row as="ul" className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 list-unstyled" >
                {searchedMovies?.map(movie => <MovieItem key={movie.id} {...movie} />)}
            </Row >
        </div>
    )
}

export default SearchList

import { useContext } from "react"
import Container from "react-bootstrap/Container"
import SearchContext from "./context/SearchContext"
import MovieList from "./MovieList"
import SearchList from "./SearchList"

const Home = () => {
    const { isSearching } = useContext(SearchContext)
    return (
        <Container>
            {
                isSearching
                    ?
                    <SearchList />
                    :
                    <MovieList />
            }
        </Container>
    )
}

export default Home

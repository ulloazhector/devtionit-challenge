import { useContext } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { useNavigate } from "react-router-dom"
import SearchContext from "./context/SearchContext"


const NavBar = () => {
    const { setSearch, setIsSearching } = useContext(SearchContext)
    let navigate = useNavigate()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        setIsSearching(true)
        
        // First character is not debounced
        navigate(`/`)

        if(!e.target.value)
            setIsSearching(false)
    }
    

    return (
        <Navbar bg="light" variant="light" sticky="top" className="shadow">
            <Container className="align-items-center">
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav>
                    <input
                        className="form-control rounded-pill py-1"
                        placeholder="Search..."
                        onChange={onChangeHandler}
                    />
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar

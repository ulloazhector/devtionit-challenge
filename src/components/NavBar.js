import { useContext } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import SearchContext from "./context/SearchContext"


const NavBar = () => {
    const {setSearch, setIsSearching} = useContext(SearchContext)

    return (
        <Navbar bg="light" variant="light" sticky="top" className="shadow">
            <Container className="align-items-center">
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav>
                    <input
                        className="form-control rounded-pill py-1"
                        placeholder="Search..."
                        onChange={(e)=>setSearch(e.target.value)}

                        // FocusIn
                        onFocus={()=> setIsSearching(true)}
                        // FocusOut
                        onBlur={()=> setIsSearching(false)}
                    />
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar

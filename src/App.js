import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import { SearchProvider } from './components/context/SearchContext';
import Home from "./components/Home"
import NavBar from './components/NavBar';

const App = () => {
    return (
        <SearchProvider>
            <Container fluid className='p-0 bg-darks'>
                <NavBar />
                <Home />
            </Container>
        </SearchProvider>
    )
}

export default App

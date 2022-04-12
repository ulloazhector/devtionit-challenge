import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchProvider } from './components/context/SearchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Home from "./components/Home"
import NavBar from './components/NavBar';
import MovieDetailContainer from './components/MovieDetailContainer';

const App = () => {
    return (
        <SearchProvider>
            <Container fluid className='p-0'>
                <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path="/"             element={ <Home /> } />
                        <Route path="/movie/:id"    element={ <MovieDetailContainer /> } />
                    </Routes>
                </BrowserRouter>
            </Container>
        </SearchProvider>
    )
}

export default App

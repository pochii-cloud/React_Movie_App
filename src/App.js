import './App.css';
import {useEffect, useState} from 'react'
import { Button,Navbar,Nav,Container,Form } from 'react-bootstrap'
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
const MOVIES_API="https://api.themoviedb.org/3/movie/popular?api_key=9fc0b4db7010ebe15f369cba0cf8d13a";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=9fc0b4db7010ebe15f369cba0cf8d13a&query";
function App() {
  const[movies,setMovies]=useState([]);
  const[query,setQuery]=useState('');
  useEffect(()=>{
    fetch(MOVIES_API)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results)
    })
  })

  const searchMovie=async(e)=>{
    e.preventDefault();
    console.log('searching');
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=9fc0b4db7010ebe15f369cba0cf8d13a&query=${query}`;
      const res=await fetch(url);
      const data=await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
     console.log(e)
    }
  }
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
  <>
   <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Trending</Nav.Link>
          
          </Nav>
          <Form className="d-flex" onSubmit={searchMovie}>
            <Form.Control
              type="search"
              placeholder="search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <div className="container">
      <div className="grid">
      {movies.map((movieReq)=><MovieBox key={movieReq.id}{...movieReq}/>)}
      </div>

      
    </div></>
    
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar.js";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Route, Routes} from "react-router-dom";
import SearchView from "./components/SearchView";
import { useState, useEffect } from "react";
import fetch from "node-fetch";
import MovieView from "./components/MovieView";
import PageNotFound from "./components/NotFound";
import GithubLander from "./components/GithubLander";

function App() {


  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect( () => {
    if(searchText){
      
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=62a9d3bb4a1b8106c1007ba4abff3931&query=${searchText}&include_adult=false&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => 
        setSearchResults(json.results))
    }
  }, [searchText]
  )




  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movieBrowser/" exact element={<GithubLander />} />

        <Route path="/about" element={<AboutView />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />

      </Routes>
    </div>
  );
}

export default App;

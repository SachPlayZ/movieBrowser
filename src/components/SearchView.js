import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const placeholderImage = "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="

const onImageError = (e) => {
  e.target.src = placeholderImage
}

const MovieCard = ({ movie }) => {

  const posterUrl= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl=`/movies/${movie.id}`  
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
  <img src={posterUrl ? posterUrl : placeholderImage} className="card-img-top" alt="No Preview" onError={onImageError} />
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
  </div>
</div>

        </div>
    )
}

// fe18eda9b19fda46ebc55955623452ea TMDB API
// https://api.themoviedb.org/3/search/movie?query=Star%20Wars&include_adult=false&language=en-US&page=1 url
//https://api.themoviedb.org/3/movie/11?api_key=62a9d3bb4a1b8106c1007ba4abff3931

const SearchView = ({ keyword, searchResults }) => {
    const title=`You are searching for ${keyword}`
    const resultsHtml = searchResults.map(( obj, i ) => { 
        return <MovieCard movie={obj} key={i} />
    })
  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">
            {resultsHtml}
            </div>
            
        </div>}
    </>
  );
};
export default SearchView;


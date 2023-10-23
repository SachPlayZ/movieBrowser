import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { useEffect, useState } from "react";
const placeholderImage = "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="

const onImageError = (e) => {
  e.target.src = placeholderImage
}


const MovieView = () => {
    const { id } = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails ] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=62a9d3bb4a1b8106c1007ba4abff3931&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data)
        setIsLoading(false)
      })
    }, [id]
    )


    function renderMovieDetails() {
      if (isLoading) {
        return <Hero text="Loading..." />
        
      }
      if(movieDetails) {
        // TODO: Deal with a missing image
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        return(
          <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={posterPath} alt="..." className="img-fluid shadow rounded" onError={onImageError} />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
          </>
          
          ) 

      }
    }
    return renderMovieDetails()
};
export default MovieView;

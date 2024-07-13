import './main-movie.scss'
import Actions from "./actions"
import Play from "./play"
import Rating from "./rating"
import { HomeQuery_movies } from "../../types/HomeQuery"

interface MainMovieProps {
    movie: HomeQuery_movies
}

function MainMovie (props: MainMovieProps){
    const {movie} = props

    return (
        <div className={'main-movie-container'}>
            <div className={'main-movie-poster'}>
                <img src={movie.image?.url} alt={ movie.title } />
                <div className={'mobile-hidden'}><Actions /></div>
            </div>
            
            <div className={'main-movie-infos'}>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                <div className={'main-movie-description'}>
                    <p >{movie.resume}</p>
                </div>
                <div className={'mobile-hidden'}><Play title={movie.title}/></div>
            </div>
            <div><Rating movieId={movie.id}/></div>
            <div className={'desktop-hidden'}><Actions /></div>
            <div className={'desktop-hidden'}><Play title={movie.title}/></div>
        </div>
    )
}

export default MainMovie
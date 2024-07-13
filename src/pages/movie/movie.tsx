import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { movieQuery } from "./queries";
import { MovieQuery, MovieQueryVariables } from "../../types/MovieQuery";
import Actions from "../../components/main-movie/actions";
import Play from "../../components/main-movie/play";
import './movie.scss';


export default function Movie(){
    const { id } = useParams()
    const navigate = useNavigate()

    const {loading, data } = useQuery<MovieQuery, MovieQueryVariables>(movieQuery, {
        variables: { id }
    })

    const movie = data?.movieById

    if (!movie){
        navigate('/')
        return null
    }

    return (
        <div className={'movie-container'}>
            <div className={'movie-poster'}>
                <img src={movie.image?.url} alt={ movie.title } />
                <div className={'mobile-hidden'}><Actions /></div>
            </div>
            
            <div className={'movie-infos'}>
                <h2>{movie.title}</h2>
                <p>Ano: {movie.year}</p>
                <p>País: {movie.country}</p>
                <p>Duração: {movie.duration} minutos</p>
                <p>Gênero: {movie.genre}</p>
                <div className={'movie-description'}>
                    <p >{movie.resume}</p>
                </div>
                <div className={'mobile-hidden'}><Play title={movie.title}/></div>
            </div>
            <div className={'desktop-hidden'}><Actions /></div>
            <div className={'desktop-hidden'}><Play title={movie.title}/></div>
        </div>
    )
}
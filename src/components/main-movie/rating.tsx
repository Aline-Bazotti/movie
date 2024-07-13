import { StarRounded } from '@mui/icons-material'
import './rating.scss'
import { ratingQuery } from './queries'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { MovieRatingById } from '../../types/MovieRatingById'

interface RatingProps{
    movieId: String
}

function Rating(props: RatingProps){
    const {movieId} = props

    const { data, loading, error } = useQuery<MovieRatingById>(ratingQuery, {
        variables: { movieId },
    })

    if (!data || loading){
        return <div className={'home-loading-container'}>
            <CircularProgress />
        </div>
    }

    const movies = data.movieRatingById
    const d = movies?.direction ?? 0
    const a = movies?.acting ??  0
    const s = movies?.script ?? 0

     
    return ( 
        <div className={'rating-container'}>
            <div className={'rating-infos'}>
                {Array(d).fill(<StarRounded  className={'star'} />)}
                {Array(5-d).fill(<StarRounded  className={'star-dark'} />)}
                <p>Direção</p>
            </div>
            <div className={'rating-infos'}>
            {Array(s).fill(<StarRounded  className={'star'} />)}
            {Array(5-s).fill(<StarRounded  className={'star-dark'} />)}
                <p>Roteiro</p>
            </div>
            <div className={'rating-infos'}>
            {Array(a).fill(<StarRounded  className={'star'} />)}
            {Array(5-a).fill(<StarRounded  className={'star-dark'} />)}
                <p>Atuação</p>
            </div>
        </div>
    )
}
export default Rating 
import './corridor.scss'
import { useQuery } from "@apollo/client"
import { CircularProgress } from "@mui/material"
import { corridorQuery } from "../../pages/home/queries"
import { MovieByGenre } from '../../types/MovieByGenre'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Fragment } from 'react/jsx-runtime'
import { useNavigate } from 'react-router-dom'


interface CorridorProps {
    title: string
    genre: string
}

function Corridor (props: CorridorProps){
    const { title, genre } = props
    const { loading, error, data } = useQuery<MovieByGenre>(corridorQuery, {
        variables: { genre },
    })
    const navigate = useNavigate();
      const responsive = {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 5,
          partialVisibilityGutter: 50
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    if (!data || loading){
        return <div className={'home-loading-container'}>
            <CircularProgress />
        </div>
    }

    const movies = data.movieByGenre

    

    return ( 
        <Fragment>
            <div className={'corridor-title'}>
              <p> {title} </p>
            </div>
            <div className={'movie-corridor'}>
              <Carousel responsive={responsive} className='movie-corridor'
              infinite rewind swipeable removeArrowOnDeviceType={["tablet", "mobile"]}>
              { movies.map((movie, index) => <div key={ index } className={ 'corridor-movie-poster' }>
                      <img src={ movie.image?.url } alt={ 'Poster de ' + movie.title + movie.year} 
                      onClick={() => navigate(`/movie/${ movie.id}`)}/>
                  </div>) }
              </Carousel>
            </div>
        </Fragment>
    )
}
export default Corridor
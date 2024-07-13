import './corridor.scss'
import { useQuery } from "@apollo/client"
import { CircularProgress } from "@mui/material"
import { corridorSerieQuery } from "../../pages/series/queries"
import { SeriesByGenre } from '../../types/SeriesByGenre'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Fragment } from 'react/jsx-runtime'


interface SerieCorridorProps {
    title: string
    genre: string
}

function SerieCorridor (props: SerieCorridorProps){
    const { title, genre } = props
    const { loading, error, data } = useQuery<SeriesByGenre>(corridorSerieQuery, {
        variables: { genre },
    })
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

    const series = data.seriesByGenre

    return ( 
          <Fragment>
              <div className={'corridor-title'}>
                <p> {title} </p>
              </div>
              <div className={'movie-corridor'}>
                <Carousel responsive={responsive} className='movie-corridor'
                infinite rewind swipeable removeArrowOnDeviceType={["tablet", "mobile"]}>
                { series.map((serie, index) => <div key={ index } className={ 'corridor-movie-poster' }>
                        <img src={ serie.image?.url } alt={ 'Poster de ' + serie.title + serie.year} />
                    </div>) }
                </Carousel>
              </div>
          </Fragment>
    )
}
export default SerieCorridor
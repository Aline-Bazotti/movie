import './main-movie.scss'
import Actions from "./actions"
import Play from "./play"
import { SeriesQuery_series } from '../../types/SeriesQuery'

interface MainSerieProps {
    serie: SeriesQuery_series
}

function MainSerie (props: MainSerieProps){
    const {serie} = props

    return (
        <div className={'main-movie-container'}>
            <div className={'main-movie-poster'}>
                <img src={serie.image?.url} alt={ serie.title } />
                <div className={'mobile-hidden'}><Actions /></div>
            </div>
            
            <div className={'main-movie-infos'}>
                <h2>{serie.title}</h2>
                <p>{serie.year}</p>
                <div className={'main-movie-description'}>
                    <p >{serie.resume}</p>
                </div>
                <div className={'mobile-hidden'}><Play title={serie.title}/></div>
            </div>
            <div className={'desktop-hidden'}><Actions /></div>
            <div className={'desktop-hidden'}><Play title={serie.title}/></div>
        </div>
    )
}

export default MainSerie
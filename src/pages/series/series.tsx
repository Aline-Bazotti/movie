import { useQuery } from "@apollo/client"
import { serieQuery } from "./queries"
import { CircularProgress } from "@mui/material"
import { SeriesQuery } from "../../types/SeriesQuery"
import SerieCorridor from "../../components/corridor/serie-corridor"
import MainSerie from "../../components/main-movie/main-serie"

function Series(){
    const { data, loading, error } = useQuery<SeriesQuery>(serieQuery)

    if (!data || loading){
        return <div className={'home-loading-container'}>
            <CircularProgress />
        </div>
    }

    const series = data.series

    const activeSerie  = (series[Math.floor(Math.random() * series.length)])

  
    return <div className={'home-container'}>
       
            <MainSerie serie={activeSerie}/>
            <div className={'divider'}></div>
            <SerieCorridor title={'Drama'} genre={'Drama'}/>
            <SerieCorridor title={'Adventure'} genre={'Adventure'}/>
            <SerieCorridor title={'Action'} genre={'Action'}/>
            
    </div>
}
export default Series
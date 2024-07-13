import './home.scss'
import Corridor from "../../components/corridor/corridor"
import MainMovie from "../../components/main-movie/main-movie"
import {useQuery } from "@apollo/client";
import { homeQuery } from "./queries"
import { CircularProgress } from "@mui/material";
import { HomeQuery } from "../../types/HomeQuery";


function Home(){

    const { data, loading, error } = useQuery<HomeQuery>(homeQuery)

    if (!data || loading){
        return <div className={'home-loading-container'}>
            <CircularProgress />
        </div>
    }

    const movies = data.movies

    const activeMovie  = (movies[Math.floor(Math.random() * movies.length)])

  
    return <div className={'home-container'}>
       
            <MainMovie movie={activeMovie}/>
            <div className={'divider'}></div>
            <Corridor title={'Drama'} genre={'Drama'}/>
            <Corridor title={'Aventura'} genre={'Adventure'}/>
            <Corridor title={'Ação'} genre={'Action'}/>
            
    </div>
}

export default Home
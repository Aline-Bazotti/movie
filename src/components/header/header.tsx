import React from "react";
import './header.scss';
import { AccountCircle, MenuRounded, MovieFilterRounded } from "@mui/icons-material";

function Header(){

    return <div className={'header-container'}>
        <MenuRounded className={'desktop-hidden'}/>
        <div className={'logo'}>
            <MovieFilterRounded /> <a href="../../">Cinema</a>
        </div>
        <div className={'desktop-menu'}>
            <a href="/series">Séries</a>
            <a href="/movies">Filmes</a>
        </div>
        <AccountCircle className={'desktop-hidden'}/>
        <div className={'profile'}>
            <p>Aline Bazotti</p>
            <img src="../images/avatar-light.jpg" alt="eu"></img>
        </div>
    </div>
}

export default Header
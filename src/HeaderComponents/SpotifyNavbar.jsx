import React, { Fragment } from 'react'
import SpotifyLogo from './LogoComponent/SpotifyLogo';
import SpotifyMenue from './MenuComponent/SpotifyMenu';
import './SpotifyNavbar.css';
import {Link} from "react-router-dom";

const SpotifyNavbar = () => {
    return (
        <Fragment>
            <section id ="spotifyNavbar-Block">
                <article>
                <div className="logoBlock">
                    <Link to="/">
                        <SpotifyLogo/>
                    </Link>
                </div>
                <div className="menuBlock">
                    <SpotifyMenue/>
                </div>
                </article>
            </section>
        </Fragment>
    )
}

export default SpotifyNavbar;

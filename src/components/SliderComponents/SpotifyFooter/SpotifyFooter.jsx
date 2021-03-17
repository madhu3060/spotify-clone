import React, { Component,Fragment } from 'react'
import SpotifyLogo from '../../../HeaderComponents/LogoComponent/SpotifyLogo';

import "./SpotifyFooter.css";

const SpotifyFooter = () => {
    return (
        <Fragment>
           <section id ="FooterBlock">
                <article>
                    <div id="FooterBlock1">
                        <div className="FooterLogo">
                            <a href="/"><SpotifyLogo/></a>
                        </div>
                        <div className="FooterMenu">
                            <div>
                                
                                <ul>
                                <p>COMPANY</p>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Jobs</a></li>
                                <li><a href="/">For the Record</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <p>COMMUNITIES</p>
                                    <li><a href="/">For Artists</a></li>
                                    <li><a href="/">Developers</a></li>
                                    <li><a href="/">Advertising</a></li>
                                    <li><a href="/">Investors</a></li>
                                    <li><a href="/">Vendors</a></li>
                                </ul>
                
                            </div>
                            <div>
                                <ul>
                                    <p>USEFUL LINKS</p>
                                    <li><a href="/">Support</a></li>
                                    <li><a href="/">Web Player</a></li>
                                    <li><a href="/">Free Mobile App</a></li>
                                </ul>
                            </div>
                        

                        </div>
                        <div className="SocialMediaLinks">
                            <ul>
                                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div>

        
                </article>
               </section> 
        </Fragment>
    )
}

export default SpotifyFooter;

import React, { Component, Fragment } from 'react'
import SpotifyLogo from './LogoComponent/SpotifyLogo';
import SpotifyMenue from './MenuComponent/SpotifyMenu';
import './SpotifyNavbar.css';
import {Link, withRouter} from "react-router-dom";
import { toast } from 'react-toastify';
import firebase from "../firebase";

class SpotifyNavbar extends Component {
    signOut = _ =>{
        firebase.auth().signOut().then( _ => {
            toast.success("Logged Out")
            this.props.history.push('/signin')
        })
        .catch(err=>toast.error(err.message))
    }

    render(){

        let {displayName, photoURL}=this.props.user;
        let IsAnonymousUser = () => (
            <Fragment>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/signin">Login</Link>
                </li>
            </Fragment>
        );
        let isAuthUser = () => (
            
            <Fragment>
                <li><a href="/">{displayName}</a></li>
                <li><a href="/"><img src={photoURL} alt={displayName}/></a></li>
                <li><a onClick={this.signOut}>Log Out</a></li>
                
            </Fragment>
        )
    
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
                <Fragment>
                <nav>
                <ul>
                    <li><Link to="/">preimium</Link></li>
                    <li><Link to="/">support</Link></li>
                    <li><Link to="/">download</Link></li>
                    {this.props.user.emailVerified === true || this.props.user.isAnonymous === false ? (
                        <isAuthUser/>): (<IsAnonymousUser/>)}
                    
                </ul>
                </nav>
                </Fragment>
                
                </div>
                </article>
            </section>
        </Fragment>
    )
}
};

export default withRouter(SpotifyNavbar);

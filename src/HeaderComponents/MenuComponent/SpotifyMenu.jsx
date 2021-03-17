import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
class SpotifyMenue extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
            <nav>
                <ul>
                    <li><Link to="/">preimium</Link></li>
                    <li><Link to="/">support</Link></li>
                    <li><Link to="/">download</Link></li>
                    <li><Link to="/signin">login</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                </ul>
            </nav>
        </Fragment> );
    }
}
 
export default SpotifyMenue;
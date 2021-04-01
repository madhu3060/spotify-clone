import React, { Component, Fragment } from 'react';
import {toast} from "react-toastify";
import firebase from "../../../firebase";
import {withRouter, Link} from "react-router-dom";
class PasswordReset extends Component {
    state = { 
        email:"",
     }
     handleChange = e =>{
         this.setState({[e.target.name]:e.target.value});
     }
     handleSubmit =async e => {
        let {email}= this.state;
        try {
            e.preventDefault();
            await firebase.auth().sendPasswordResetEmail(email);
            toast.success(`Reset password has been sent to ${email} please reset your password`);
            this.props.history.push("/signin")
        } catch (err) {
            toast.error(err.message);
            this.props.history.push("/password-reset"); 
        }
     };
    render() { 
        let {email}= this.state;
        return ( 
            
            <Fragment>
                
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Password Reset</h4>
                        <p>Enter your Spotify username, or the email address that you
                             used to register. We'll send you an email with your username 
                             and a link to reset your password.
                        </p>
                        <form onSubmit={this.handleSubmit}> 
                        <div className="form-group"><label htmlFor="email">Email address or username</label>
                        <input type="email" name="email" id="email" className="form-control" value={email} onChange={this.handleChange} placeholder="Enter your Email or username" /></div>
                        
                        
                        <div className="form-group">
                        <button className="btn btn-success btn-block">Reset</button>
                        
                        </div>
                        <div className="form-group">
                        <a href="/signin">Login</a>
                        </div>
                        
                        </form>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default withRouter(PasswordReset);
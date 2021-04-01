import React, { Component, Fragment } from 'react';
import {toast} from "react-toastify";
import firebase from "../../../firebase";
import {withRouter, Link} from "react-router-dom";
class Signin extends Component {
    state = { 
        email:"",
        password:"",
     }
     handleChange = e =>{
         this.setState({[e.target.name]:e.target.value});
     }
     handleSubmit =async e => {
         let{email,password}=this.state;
         let{history,match, location} = this.props;
         e.preventDefault();
         try {
             var userData = await firebase.auth().signInWithEmailAndPassword(email,password);
             if(userData.user.emailVerified===true){
                 toast.success(`successfully ${email} logged in...`);
                 history.push("/");

             }else{
                 toast.error(`${email} is not verified`);
                 //redirect to login
                 history.push("/signin");
             }

         } catch (err) {
             toast.error(err.message);
         }
     };
    render() { 
        let {email,password}= this.state;
        return ( 
            
            <Fragment>
                
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>To continue, login to spotify.</h4>
                        <p style={{padding:"10px", width:"100%", border:"1px solid black", borderRadius:"20px", textAlign:"center", margin:"10px, auto"}}>
                            <Link to="/phone-auth" style={{textDecoration:"none", color:"#555"}}>Continue with phone Number</Link>
                        </p>
                        <form onSubmit={this.handleSubmit}> 
                        <div className="form-group"><label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" value={email} onChange={this.handleChange} placeholder="Enter your Email" /></div>
                        <div className="form-group"><label htmlFor="password">Password</label>
                        <input type="password" name ="password" id="password" className="form-control" value={password} onChange={this.handleChange} placeholder="Enter your password" /></div>
                        <p><Link to="/password-reset">Forgot password</Link></p>
                        <div className="form-group">
                            <input type="checkbox" name=""  id="" /> &nbsp; Remember me
                        </div>
                        <button className="btn btn-success btn-block">Login</button>
                        </form>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default withRouter(Signin);
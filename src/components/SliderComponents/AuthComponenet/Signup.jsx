import React, { Component, Fragment } from 'react';
import firebase from "../../../firebase"

import {toast} from "react-toastify";
import md5 from "md5";

class Signup extends Component {
    state = { 
        email : "",
        confirmEmail:"",
        password:"",
        profile:"",
        dob:"",
        gender:"",
     };
     handleChange = e => { 
         
         this.setState({[e.target.name]: e.target.value});
     }
     handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let {email,confirmEmail,password,profile,dob,gender}=this.state;
        console.log({email,confirmEmail,password,profile,dob,gender});
        //auth
        let userData=await firebase.auth().createUserWithEmailAndPassword(email,password);
        userData.user.sendEmailVerification();
        let message=`Verfication mails has been send to ${email}please confirm i and signin...`;
        toast.success(message);

        await userData.user.updateProfile({
            displayName:profile,
            photoURL:`http://www.gravatar.com/avatar/ (${md5(email)}) ?d=identicon`

        })
       
        //store information into firebase
        await firebase.database().ref("/users "+ userData.user.uid).set({
            email:userData.user.email,
            photoURL:userData.user.photoURL,
            profile:userData.user.displayName,
            date:new Date().toLocaleDateString(),

        });
        }
        catch(err) {
            console.log(err);
            toast.error(err.message);
        }

        
     };
    render() { 
        let {email,confirmEmail,password,profile,dob,gender}=this.state;
        return ( 
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Sign up with your email address</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <small>What's your email</small>
                                <input type="email" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <small>Confirm your email</small>
                                <input type="email" className="form-control" placeholder="confirm your name" name="confirmEmail" value={confirmEmail} onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Enter your password</label>
                                <input type="password" className="form-control" placeholder="Enter the password" name="password" value={password} onChange={this.handleChange}  />
                            </div>
                            <div className="form-group">
                                <label>What should we call you</label>
                                <input type="text" className="form-control" placeholder="Enter the profile name" name="profile" value={profile} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>What is your date of birth</label>
                                <input type="datetime-local" className="form-control" placeholder="Enter the DOB" name="dob" value={dob} onChange={this.handleChange} />
                            </div>
                            <div className="from-group" name="gender" value={gender}>
                                <label>What's your gender</label>
                                <input type="radio" name="gender"  value="Male"  onChange={this.handleChange} /> Male 
                                <input type="radio" name="gender"  value="Female" onChange={this.handleChange} /> Female 
                                <input type="radio" name="gender" value="Non-binary"  onChange={this.handleChange}/>
                                Non-binary
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="checkdata"/>
                                Share my registration data with Spotify's content providers for marketing purposes.
                            </div>
                            <p>By clicking on Sign up, you agree to Spotify's <a href="/">Terms and Conditions of Use.</a></p>
                            <p>To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's <a href="/">Privacy Policy.</a></p>
                            <div className="form-group">
                                <button className="btn btn-success btn-block">Sign up</button>
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default Signup;
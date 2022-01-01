import React,{useState} from 'react';
import useAuth from '../Hooks/useAuth';
import './Login.css'
import img1 from './imag.svg'
import { useHistory, useLocation,NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [whole,setWhole]=useState("")
    

    const getEmail=(e)=>{
        
        setEmail(e.target.value)
    }
    const getPassword=(e)=>{
       
        setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.prevent.default()
        setWhole(email,password)
    }


    console.log(email)
    console.log(password)
    console.log(whole)



    return (
        <div className="content">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={img1} alt="Image" className="img-fluid"/>
                </div>
                    <div className="col-md-6 contents">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        <div className="mb-4">
                            
                        <div>
                            <div>
                                <h3>Log In</h3>
                            </div>
                        <form onSubmit={handleLogin} >
                            
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input onBlur={getEmail} type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group mb-4">
                                <label for="password">Password</label>
                                <input onBlur={getPassword} type="password" className="form-control" id="password"/>
                            </div>

                            <input type="submit" value="Login" className="btn btn-block btn-primary"/>

                            <span className="d-block text-left my-4 text-muted">&mdash; don't have an account? <span><a style={{textDecoration:"none",color:"coral"}} href="#"><b><NavLink to="/home">sign up</NavLink></b></a></span> &mdash;</span>
                            
                            
                        </form>
                        </div>
                            
                         </div>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
                </div>
            </div>
    );
};

export default Login;
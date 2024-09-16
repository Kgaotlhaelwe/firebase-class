import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import {SignIn} from '../auth/auth' ;
import { useState } from 'react';



function Login() {
const navigate = useNavigate();
   
    const [email, setEmail] =  useState("");
    const [password , setPassword] =  useState("")

    const  handlelogin =  ()=>{
        SignIn(email, password).then(()=>{
            navigate('/home')


        }).catch((err)=>{
            console.log(err.message)

        })
    }
    return (
        <div className="login-register-container">
            <div className="card login-register-box">
                <h2 className="login-register-title">Login</h2>
                
                    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)} />
                    <button  onClick={handlelogin}>Login</button>
                    <br></br>
                    <br></br>
                    

                  <small>Don't have an account</small>  <Link to={"/register"}>Sign Up </Link>

                
            </div>
        </div>
    );
}

export default Login;

import '../App.css';
import { signUp } from '../auth/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate() ;

    

    const [email, setEmail] =  useState("");
    const [password , setPassword] =  useState("")

    const  handleRegister = (()=>{
        signUp(email, password).then(()=>{

            alert("Registered successfully");
            navigate('/home');

        }).catch(()=>{

        })

    })


    return (
        <div className="login-register-container">
            <div className="card login-register-box">
                <h2 className="login-register-title">Register</h2>
                
                    <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter your password"  onChange={(e)=> setPassword(e.target.value)} />
                    <button onClick={handleRegister}>Register</button>
                
            </div>
        </div>
    );
}

export default Register;

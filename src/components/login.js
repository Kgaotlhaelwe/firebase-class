import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-register-container">
            <div className="card login-register-box">
                <h2 className="login-register-title">Login</h2>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <button>Login</button>
                    <br></br>
                    <br></br>
                    

                  <small>Don't have an account</small>  <Link to={"/register"}>Sign Up </Link>

                </form>
            </div>
        </div>
    );
}

export default Login;

import '../App.css';

function Register() {
    return (
        <div className="login-register-container">
            <div className="card login-register-box">
                <h2 className="login-register-title">Register</h2>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;

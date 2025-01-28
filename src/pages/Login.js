import { useRef, useState } from "react";
//import "../styles/pages/pinklogin.css";
import "../styles/pages/deepseabluelogin.css";
import { useNavigate } from "react-router-dom";
//import "../styles/pages/GreenOlivelogin.css";
//import "../styles/pages/Slategreylogin.css";



const Login = () => {
    const [loginid, setLoginid] = useState(""); // Corrected state
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "loginid") setLoginid(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!loginid) {
            alert("Please enter Login ID");
            loginRef.current.focus();
            return;
        }
        if (!password) {
            alert("Please enter Password");
            passwordRef.current.focus();
            return;
        }
        navigate('/dashboard');
        //alert("Login successful!");
    };

    return (
        <div className="login-container">
            <section className="login-form-section animate slide-up">
                <div className="form-container">
                    <h2>Welcome Back</h2>
                    <p>Please login to your account to continue.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="loginid">Login ID</label>
                            <input
                                type="text"
                                id="loginid"
                                name="loginid"
                                ref={loginRef}
                                placeholder="Enter your login ID"
                                value={loginid}
                                onChange={handleChange}
                                aria-label="Login ID"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                ref={passwordRef}
                                placeholder="Enter your password"
                                value={password}
                                onChange={handleChange}
                                aria-label="Password"
                            />
                        </div>
                        <button type="submit" className="wlidlife-btn mt-3">
                            Login
                        </button>
                    </form>
                    {/* <div className="login-footer">
                        <p>
                            Don't have an account? <a href="/register">Sign Up</a>
                        </p>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Login;

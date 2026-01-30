import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <div className="login-box">
                <div className="login-text">
                    <p>Please enter your credentials</p>
                </div>
                <div className="login-form">
                    <form action="#" method="get">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                        <div className="login-buttons">
                            <button type="submit">Login</button>
                            <button type="button" onClick={() => navigate('/register')}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()

    return (
        <div className="register-page">
            <h1>Register Page</h1>
            <div className="register-box">
                <div className="register-text">
                    <p>Please fill in the form to create an account</p>
                </div>
                <div className="register-form">
                    <form action="#" method="post">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                        <div className="register-buttons">
                            <button type="submit">Register</button>
                            <button type="button" onClick={() => navigate('/login')}>Already have an account?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
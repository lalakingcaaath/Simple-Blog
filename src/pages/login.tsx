import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [message, setMessage] = useState("")

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            setMessage("Error: " + error.message);
            setEmail("");
            setPassword("");
            return;
        }

        if (data) {
            navigate('/home');
            return null;
        }
    }

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold underline mb-5">Login Page</h1>
            {message && <p className="mb-4 text-center">{message}</p>}
            <div className="border rounded-lg p-6 bg-white shadow-md w-96">
                <div className="text-center mb-4">
                    <p>Please enter your credentials</p>
                </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="email">Email:</label>
                        <input
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}  
                        type="email" id="email" name="email" 
                        className="border rounded-lg p-2"
                        required
                        />
                        <label htmlFor="password">Password:</label>
                        <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        type="password" id="password" name="password" 
                        className="border rounded-lg p-2" 
                        required 
                        />
                        <div className="flex justify-center mt-4 gap-5">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Login</button>
                            <button type="button" onClick={() => navigate('/register')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Register</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}
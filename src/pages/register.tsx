import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold underline mb-5">Register Page</h1>
            <div className="border rounded-lg p-6 bg-white shadow-md w-96">
                <div className="text-center mb-4">
                    <p>Please fill in the form to create an account</p>
                </div>
                    <form action="#" method="post" className="flex flex-col gap-4">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="border rounded-lg" required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="border rounded-lg" required/>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="border rounded-lg" required />
                        <div className="flex justify-center mt-4 gap-5">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Register</button>
                            <button type="button" onClick={() => navigate('/login')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Already have an account?</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}
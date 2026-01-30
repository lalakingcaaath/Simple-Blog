import { useNavigate } from "react-router-dom"

export default function Logout () {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold underline mb-5">You have logged out.</h1>
            <button onClick={() => navigate('/login')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"> Go to Login
            </button>
        </div>
    )   
}
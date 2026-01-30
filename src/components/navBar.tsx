import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/logout');
    }

    return ( 
        <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <h1>Jecho's Blog</h1>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <button onClick={handleSignOut} className="cursor-pointer hover:underline">Sign Out</button>
            </ul>
        </nav>
    )
}
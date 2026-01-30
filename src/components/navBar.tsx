export default function NavBar() {
    return ( 
        <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <h1>Jecho's Blog</h1>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}
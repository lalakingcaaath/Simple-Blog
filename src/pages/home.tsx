import NavBar from "../components/navBar"
import CrudButton from "../components/crudButtons"

export default function Home () {

    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar />
            <h1 className="text-3xl font-bold text-center mt-8">Welcome to Jecho's Blog</h1>
            <p className="text-center mt-4">This is a simple blog application.</p>
            <div className="flex justify-center mt-4 cursor-pointer">
                <CrudButton />
            </div>
        </div>
    )
}
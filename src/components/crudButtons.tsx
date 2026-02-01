import { useNavigate } from "react-router-dom"

export default function CrudButtons() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row gap-5">
            <div onClick={() => navigate("/create")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"   >
            Create a blog
            </div>
            <div onClick={() => navigate("/review")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"   >
            View a blog
            </div>
            <div onClick={() => navigate("/update")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"   >
            Update a blog
            </div>
            <div onClick={() => navigate("/delete")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"   >
            Delete a blog
            </div>
        </div>
    )
}
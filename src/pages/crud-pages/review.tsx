import NavBar from "../../components/navBar"
import { useState, useEffect } from "react"
import supabase from "../../config/supabaseClient"
import { useNavigate } from "react-router-dom";

export default function ViewBlog() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function getBlogs() {
            const { data, error } = await supabase.from("blog-post").select("*");

            if (error) {
                console.log("Error fetching blog post:", error);
            } else {
                const blogsWithUrls = data.map((blog) => {
                    if (blog.imageUpload) {
                        const { data: publicUrlData } = supabase.storage.from("blog-post").getPublicUrl(blog.imageUpload);
                        return { ...blog, display_url: publicUrlData.publicUrl };
                    }
                    return blog;
                });
                setBlogs(blogsWithUrls);
            }
            setLoading(false);
        }
        getBlogs();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar />
            <h1 className="text-3xl font-bold text-center mt-8">View Blogs</h1>
            
            <div className="flex flex-wrap gap-6 justify-center mt-8 px-4">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md w-80 text-center">
                        {blog.display_url ? (
                            <img src={blog.display_url} alt={blog.title} className="mx-auto mb-4 h-40 object-cover" />
                        ) : (
                            <img src="https://placehold.co/400x200" alt="Placeholder" className="mx-auto mb-4" />
                        )}
                        <h2 className="text-xl font-bold">{blog.title}</h2>
                        <p className="text-gray-600 mt-2">{blog.content}</p>
                        <div className="flex flex-row">
                            <input type="text" name="comment" id="comment" className="border border-gray-300 rounded px-3 py-1 w-full mt-2" placeholder="Add a comment..." />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2 cursor-pointer">Add Comment</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
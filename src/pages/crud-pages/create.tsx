import NavBar from "../../components/navBar"
import { useState } from "react";
import supabase from "../../config/supabaseClient"

export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [resetKey, setResetKey] = useState(0); // State to force reset file input

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        let filePath = null;

        if (imageFile) {
            const fileName = `${Date.now()}_${imageFile?.name}`;
            
            const { data, error } = await supabase.storage.from("blog-post").upload(fileName, imageFile || undefined);
    
            if (error) {
                console.log("Error uploading image:", error);
            } else {
                console.log("Image uploaded successfully:", data);
            }
            filePath = fileName;
        }

        const {error} = await supabase.from("blog-post").insert([
            {
                title: title,
                content: content,
                imageUpload: filePath
            }
        ]);

         if (error) {
                console.log("Error creating blog post:", error);
            } else {
                console.log("Blog post created successfully");
            }

        setTitle("");
        setContent("");
        setImageFile(null);
        setResetKey(prevKey => prevKey + 1); 
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar />
            <h1 className="text-3xl font-bold text-center mt-8">Create a Blog</h1>
            <div>
                <form onSubmit={handleSubmit} className="border border-black p-4 flex flex-col gap-4 mx-50 mt-8">
                    <div className="flex flex-row gap-3 items-center">
                        <label htmlFor="title">Title:</label>
                        <input
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title}   
                        type="text" id="title" 
                        name="title" 
                        className="border rounded-md p-2" required />
                    </div>
                    <label htmlFor="content">Content:</label>
                    <textarea 
                    onChange={(e) => setContent(e.target.value)} 
                    value={content}  
                    id="content" 
                    name="content" 
                    className="border rounded-md p-2 h-35" 
                    required> 
                    </textarea>
                    <label htmlFor="upload image">Upload Image:</label>
                    <input
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    key={resetKey}
                    type="file" id="image" 
                    name="image" 
                    accept="image/*" 
                    className="border rounded-md p-2 cursor-pointer" />
                    <button type="submit" className="border rounded-md p-2 cursor-pointer bg-gray-800 text-white">Create Blog</button>
                </form>
            </div>
        </div>
    )
}
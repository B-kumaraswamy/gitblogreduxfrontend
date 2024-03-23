import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function BlogPage() {
   const {id} = useParams()
   const [blog, setBlog] = useState([])
   useEffect(() => {
    const getBlog = async() => {
        const url = `http://localhost:8080/blogs/${id}`
        const headers = {
            'Content-Type' : 'application/json'
        }

        console.log('Sending request to:', url);
        const response = await axios.get(url, {headers})
        console.log('response in the BlogPage', response.data.result)
        const reqBlog = response.data.result
        setBlog(reqBlog)

    }

    getBlog()
   }, [id])
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
        </div>
    )
}

export default BlogPage;




/*
from link 
{`/blog/${id}`}

app.js 
"/blogs/:id"

url hitting 

8080/blogs/${id}
*/

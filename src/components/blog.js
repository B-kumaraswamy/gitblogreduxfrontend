import Headers from "./header";
import axios from 'axios'
import { useEffect, useState } from "react";
import SingleBlog from "./singleblog";


function BlogComponent() {
    const [array, setArray] = useState([])
   useEffect(()=> {
    try {
        console.log("process.env value ", process.env)
        console.log("backend url ", process.env.BACKEND_URL)
        const getBlogs = async() => {
            const url = "https://gitblogreduxbackend.onrender.com/blogs"
            const headers = {
                'Content-Type' : 'application/json'
            }
            const res = await axios.get(url, {headers})
            const resultArray = res.data.result
            setArray(resultArray)
            console.log('15th march', res.data.result)
          
        }
    
        getBlogs()
    }

    catch(err) {
        alert(err)
    }
   }, [])
    return (
        <div>
            <Headers/>
            <ul>{array.map(eachBlog => <SingleBlog eachBlog = {eachBlog}/>)}</ul>
        </div>
    )
}

export default BlogComponent;
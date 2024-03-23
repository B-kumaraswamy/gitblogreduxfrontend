import Headers from "./header";
import axios from 'axios'
import { useEffect, useState } from "react";
import SingleBlog from "./singleblog";


function BlogComponent() {
    const [array, setArray] = useState([])
   useEffect(()=> {
    try {
        const getBlogs = async() => {
            const url = 'http://localhost:8080/blogs'
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
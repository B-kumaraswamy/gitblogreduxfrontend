import { Link } from "react-router-dom";

function SingleBlog(props) {
    const {_id, title, author, text, languageUsed, imageUrl} = props.eachBlog
    console.log('id in the singleblog page', typeof(id))
    return (
        <Link to = {`/blogs/${_id}`}>
            <li className="blog-container">
                <h1 className="blog-title">{title}</h1>
                <p className="blog-author">{author}</p>
                <p className="blog-language">{languageUsed}</p>
                <img src= {imageUrl} alt = "Loading"/>
                <p>{text}</p>
            </li>

            </Link>
       
    )
}

export default SingleBlog;
import {connect} from 'react-redux'
import { useDispatch } from 'react-redux'
import Headers from './header'
import {updateAuthor,
    updateImage,
    updateLanguage,
    updateText,
    updateTitle,
increment} from './action'
import axios from 'axios'
import { useState } from 'react'
import FloatingMessageComponent from './floatingmessage'
function PublishComponent(props) {
   const {updateTitle,
    updateAuthor,
    updateImage,
    updateLanguage,
    updateText,
    id,
    title,
    imageUrl,
    text,
    author,
    languageUsed




} = props
const [message, setMessage] = useState('')
const dispatch = useDispatch()
const onSubmit = async() => {

    setMessage('')
    const url = 'http://localhost:8080/publish'
    const body = {
        id : id,
        title : title ,
        imageUrl : imageUrl,
        author : author,
        text : text,
        languageUsed : languageUsed
    }
const response = await axios.post(url, {body})
 const res = response.data
if (res.status === 200) {
    dispatch(increment())
    console.log('response from backend is', res)
    setMessage('blog added to the db successfully')

    dispatch(updateTitle(''));
    dispatch(updateAuthor(''));
    dispatch(updateImage(''));
    dispatch(updateLanguage(''));
    dispatch(updateText(''));
}

else {
    alert(res.message)
}


}



   
    return (
        <center>
            <Headers/>
            <label>Title</label>
            <input type="text" value = {title} onChange={(event) => updateTitle(event.target.value)}/> <br/> <br/>
            <label>Name of the Publisher</label>
            <input type="text" value = {author} onChange={(event) => updateAuthor(event.target.value)}/> <br/> <br/>
            <label>Language used</label>
            <input type="text" value = {languageUsed} onChange={(event) => updateLanguage(event.target.value)}/> <br/> <br/>
            <label>Content</label>
           <textarea rows={5} cols={30} value = {text} onChange={(event) => updateText(event.target.value)} /> <br/> <br/>
           <label>Image Url</label>
           <input type="text" value = {imageUrl} onChange={(event) => updateImage(event.target.value)}/> <br/> <br/>
           <button type="submit" onClick={onSubmit}>Submit</button>
           <FloatingMessageComponent message={message}/>

        </center>
    )
}

/*const mapDispatchToProps = (dispatch) => {
    
    return {
       updateInput : (titleInput) => dispatch(updateInputDetails(titleInput))
    }

    
}*/


const mapStateToProps = (state) => {
    console.log('updated state', state)
    console.log('updated statevalue', state.state1.title)

    const {state1, state2} = state
    console.log('updated id', state2.id)
   return {
    id : state2.id,
    title : state1.title,
    imageUrl : state1.imageUrl,
    author : state1.author,
    languageUsed : state1.languageUsed,
    text : state1.text
    
   }
}
export default connect(mapStateToProps, 
    {updateTitle,
     updateAuthor,
     updateImage,
     updateLanguage,
     updateText,
     increment




})(PublishComponent)


/*
The reason why you only manually dispatched increment() could be because of the additional logic you've added in the onSubmit function that involves dispatching increment() after a successful API call.

For the other actions like updateTitle, updateAuthor, etc., you're relying on the automatic dispatching provided by connect. 
When you use connect with the action creators specified as the second argument, React Redux automatically wraps those action creators with dispatch. 
So when you call these action creators in your component (updateTitle(value), updateAuthor(value), etc.), they are internally dispatched without you needing to call dispatch explicitly.

However, if you want to maintain consistency and explicitly dispatch all actions using dispatch(), you can do so for all actions, not just increment(). Here's how you could update your component to achieve that:
*/


/*
Redux is often used for managing global state and complex state interactions across multiple components. 
It provides a centralized store and follows a unidirectional data flow pattern, making it suitable for larger applications with complex state management requirements.

On the other hand, React Context API is primarily used for sharing state between components without explicitly passing props through every level of the component tree.
 It's a more lightweight solution compared to Redux and is often used for simpler state management scenarios or for sharing state between closely related components.
*/
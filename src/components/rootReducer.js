const initialState = {
    title : "",
    imageUrl : "",
    author : "",
    languageUsed : "",
    text : ""
}

const reducer = (state1 = initialState, action) => {
    switch(action.type) {
        case 'update_title':
            return {
                ...state1, 
                title : action.payload
            }

        case 'update_image':
            return {
                ...state1,
                imageUrl : action.payload
            }

        case 'update_author':
            return {
                ...state1,
                author : action.payload
            }

        case 'update_language':
            return {
                ...state1, 
                languageUsed : action.payload
            }

        case 'update_text':
            return {
                ...state1,
                text : action.payload
            }
        default:
            return state1
    }

    
}



export default reducer
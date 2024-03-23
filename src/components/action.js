export const  updateTitle = (input) => {
    return {
        type : "update_title",
        payload : input
    }
}

export const updateAuthor = (input) => {
    return {
        type : "update_author",
        payload : input
    }
}

export const updateImage = (input) => {
    return {
        type : "update_image",
        payload : input
    }
}

export const updateText = (input) => {
    return {
        type : "update_text",
        payload : input
    }
}

export const updateLanguage = (input) => {
    return {
        type : "update_language",
        payload : input
    }
}

export const increment = () => {
    console.log('increment in action')
    return {
        type : 'increment'
    }
}
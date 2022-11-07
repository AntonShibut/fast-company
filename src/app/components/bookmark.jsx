import React from "react";

const BookMark = (props) => {
    

    const handleChangeMarkClass = () => {
        return (props.status === false) ? "bi bi-bookmark" :"bi bi-bookmark-heart-fill"
    }
    
    return  (
        <button onClick = {() => props.onTongle(props._id)}>
            <i className = {handleChangeMarkClass()}/>
        </button>    
            
    )
}

export default BookMark
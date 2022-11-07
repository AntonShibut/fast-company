import React from "react";

const BookMark = ({status,onTongle}) => {
    console.log(status)

    const handleChangeMarkClass = () => {
        return (status === false) ? "bi bi-bookmark" :"bi bi-bookmark-heart-fill"
    }
    
    return  (
        <i  
            className = {handleChangeMarkClass()}
            onClick = {() => onTongle(props.id)}
        />
    )
}

export default BookMark
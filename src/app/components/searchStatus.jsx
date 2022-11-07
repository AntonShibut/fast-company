import React from "react";

const SearchStatus = ({length}) => {
    const renderPhrase = (length) => {
        const lastOne = Number(length.toString().slice(-1))
        if (length > 4 && length < 15) return 'человек тусанет'
        if ([2,3,4].indexOf(lastOne) >= 0) return 'человека тусанут'
        if (lastOne === 1) return 'человек тусанет'
    }     

    const classForPhrase = () => {
        let classOfPhrase = 'badge m-2 '
        classOfPhrase += length === 0 ? 'bg-danger' : 'bg-primary'
        return classOfPhrase  
    }
    return (
        <>
            <span className={classForPhrase()}>
                        {length > 0
                            ? `${length} ${renderPhrase(length)} с тобой сегодня`
                            : 'Никто с тобой не тусанет'
                        }
            </span>
        </>
    )
    
}

export default SearchStatus
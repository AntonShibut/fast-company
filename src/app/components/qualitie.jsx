import React from "react";

const Qualitie = ({color, name, _id}) => {
  
    const getColorForQualitiesUser = (color) => {
        let classes = 'badge m-2 bg-'
        classes += color ? color : 'bg-primary'
        return classes   
    }

    return (
            <span 
                key={_id}
                className = {getColorForQualitiesUser(color)}
            >
                {name}
            </span>
    )

  
}

export default Qualitie
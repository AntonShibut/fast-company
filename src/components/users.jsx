import React from "react";
import { useState } from "react";
import api from '../api'

const Users = () => {
    
    const [users, setUsers] = useState(api.users.fetchAll())

    console.log(users)

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
        }

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return 'человек тусанет'
        if ([2,3,4].indexOf(lastOne) >= 0) return 'человека тусанут'
        if (lastOne === 1) return 'человек тусанет'
    }     
            

    const classForPhrase = () => {
        let classOfPhrase = 'badge m-2 '
        classOfPhrase += users.length === 0 ? 'bg-danger' : 'bg-primary'
        return classOfPhrase  
    }


    const getColorForQualitiesUser = (qualitie) => {
            let classes = 'badge m-2 bg-'
            classes += qualitie.color ? qualitie.color : 'bg-primary'
            return classes   
        }


    const getUserQualities = (qualities) => {
        return qualities.map(qualitie => (
                <span 
                    key={qualitie._id}
                    className = {getColorForQualitiesUser(qualitie)}
                >
                    {qualitie.name}
                </span>
        ))
    }   


    

    const tableRow = () => {
        return users.map(user => (
            <tr key={user._id}> 
                <td>{user.name}</td>
                <td>{getUserQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td><button 
                    className="btn btn-danger m-2"
                    onClick={()=>handleDelete(user._id)}
                >Delete
                </button></td>
            </tr>
        ))
    }  


    return (
        <>
            <h2><span className={classForPhrase()}>
                    {users.length > 0
                        ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
                        : 'Никто с тобой не тусанет'
                    }
                </span>
            </h2>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                        <th>Имя</th>
                        <th> Качества</th>
                        <th> Профессия</th>
                        <th> Встретился, раз</th>
                        <th> Оценка</th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRow()}
                    </tbody>
                </table>
            )}
        </> 
        
    )

}

export default Users



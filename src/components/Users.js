import React from 'react';
import Useritem from './Useritem'


const Users = (props) => {
    return(
        <div style={userStyle} className='userStyle'>
            {props.users.map( (user) => {
                return(
                    <Useritem user={user} />
                )
            })}
        </div>
    )
}



const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}


export default Users;
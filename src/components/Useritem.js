import React from 'react';
import {Link} from 'react-router-dom'

const Useritem = (props) => {
    const {login, avatar_url} = props.user
    return(
        <div className='responsiveCont'>
        <div className='card card1 text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{width: '60px'}}></img>
            <h3 >{login}</h3>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
        </div>
        </div>
    )
}

export default Useritem;
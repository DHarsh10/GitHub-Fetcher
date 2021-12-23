import {React, useState} from 'react';


const Search = (props) => {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        props.searchName(text)
        setText('')
    }

    
    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
            <input placeholder='Search here' type='text' name='text' value={text} onChange={(e) => {setText(e.target.value)}}></input>
            <input type='submit' value='Search' className='btn btn-dark btn-block'></input>
        </form>

        {props.showClear && <button type='submit' className='btn btn-light btn-block' onClick={props.clearUser}>Clear</button>} 
        </>
    )
}


export default Search;
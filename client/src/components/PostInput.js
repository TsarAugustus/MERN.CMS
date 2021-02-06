// import axios from 'axios';
import { useState } from 'react';

const PostInput = ( props ) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    function submitPost(event) {
        event.preventDefault();
        props.onSubmit(title, desc)
    }
    
    return (
        <form onSubmit={submitPost}>
            <input type="text" onChange={e => setTitle(e.target.value)}></input>
            <textarea type="text" onChange={e => setDesc(e.target.value)}></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default PostInput

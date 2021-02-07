// import axios from 'axios';
import { useState } from 'react';
import './PostInput.css';

const PostInput = ( { onSubmit } ) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [visible, setVisibility] = useState(false);

    

    function submitPost(event) {
        event.preventDefault();
        onSubmit(title, desc)
    }
    
    return (
        <div className="PostInput">
            <div className="postHeader">
                <button className="visibleBtn" onClick={ () => setVisibility(!visible) }>{(visible ? 'Hide' : 'Show')}</button>
                { visible && <h2>Express yourself.</h2> }
            </div>
            {visible && <form onSubmit={submitPost}>
                <input placeholder="Title" className="title" type="text" onChange={e => setTitle(e.target.value)}></input>
                <textarea placeholder="Description" className="desc" type="text" onChange={e => setDesc(e.target.value)}></textarea>
                <input className="submit" type="submit" value="Submit"></input>
            </form> }
        </div>
    )
}

export default PostInput

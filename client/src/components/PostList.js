import './PostList.css';
import PostItem from './PostItem';
import { useState, useEffect } from 'react';

const PostList = ( { postList, onDelete, onEdit } ) => {
    const [editing, setEdit] = useState(false);
    const [postID, setPostEdit] = useState('');
    const [newList, setList] = useState([]);
    const editPost = (id) => {
        setEdit(true);
        setPostEdit(id);
    }

    const submitEdit = (id) => {
        setEdit(false);
        setPostEdit('');
    }
    useEffect(() => {
        const list = postList.map((post) => 
        postID === post._id ? ( <li key={post._id}>
            {post.title} <br/>
            {post.text} <br/>
            <button onClick={e => onDelete(post._id)}>Delete Post</button>
            <button onClick={e => editPost(post._id)}>Edit Post</button>
        </li> ) : ( <li key={post._id}>
            <p>Editing</p>
            {post.title} <br/>
            {post.text} <br/>
            <button onClick={e => onDelete(post._id)}>Delete Post</button>
            <button onClick={e => editPost(post._id)}>Edit Post</button>
        </li> )
        )

        setList(list);
    }, [editing])

    // const list = postList.map((post) => 
    //     <li key={post._id}>
    //         {post.title} <br/>
    //         {post.text} <br/>
    //         <button onClick={e => onDelete(post._id)}>Delete Post</button>
    //     </li>
    // );

    return (
        <div className="PostList">
            {list}
        </div>
    )
}

export default PostList

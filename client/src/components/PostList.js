import './PostList.css';

const PostList = ( { postList, onDelete } ) => {

    return (
        <div className="PostList">
            {postList.map(post => <li key={post._id}>
                {post.title} <br/>
                {post.text} <br/>
                <button onClick={e => onDelete(post._id)}>Delete Post</button>
            </li>)}
            
        </div>
    )
}

export default PostList

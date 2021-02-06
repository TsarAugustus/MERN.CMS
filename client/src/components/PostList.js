const PostList = ( { postList, onDelete } ) => {

    return (
        <div>
            {postList.map(post => <li key={post._id}>
                {post.title} <br/>
                {post.text} <br/>
                <button onClick={e => onDelete(post._id)}>Delete Post</button>
            </li>)}
            
        </div>
    )
}

export default PostList

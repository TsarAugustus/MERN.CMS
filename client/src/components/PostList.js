const PostList = ( { postList } ) => {
    return (
        <div>
            {postList.map(post => <li key={post._id}>{post.title}</li>)}
            
        </div>
    )
}

export default PostList

import PostInput from './PostInput';
import PostList from './PostList';

import { useState, useEffect } from 'react';
import axios from 'axios';

const PostWrapper = () => {
    const [postList, setPostList] = useState([]);
    const [list, updateList] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const result = await axios.get('/api')
            .then(res => {
                return res;
            }, (error) => {
                console.log(error)
            })
            setPostList(result.data);
        }
        getPosts()
        updateList(false);
    }, [list])

    const onSubmit = async (title, desc) => {
        await axios.post('/api', {
            title,
            desc
        }).then(() => {
            updateList(true)
        }, (error) => {
            console.log(error)
        })
    }

    const onDelete = async (id) => {
        await axios.delete(`/api/${id}`)
        .then(() => {
            updateList(true)
        }, (error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Wrapper Header</h1>
            <PostList postList={postList} onDelete={onDelete}/>
            <PostInput onSubmit={onSubmit}/>
        </div>
    )
}

export default PostWrapper

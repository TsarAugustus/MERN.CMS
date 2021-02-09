import PostInput from './PostInput';
import PostList from './PostList';
import './PostWrapper.css';

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

    const onEdit = async (id) => {
        console.log(id)
    }

    return (
        <div className="PostWrapper">            
            <PostInput onSubmit={onSubmit}/>
            <PostList postList={postList} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    )
}

export default PostWrapper

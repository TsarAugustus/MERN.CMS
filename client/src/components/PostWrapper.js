import axios from 'axios';
import { useState } from 'react';

const PostWrapper = () => {
    const [titleData, setTitleData] = useState('');
    const [textData, setTextData] = useState('');
    const submitPost = event => {
        event.preventDefault();
        axios.post('/api', {
            titleData,
            textData
        })
        .then((res) => {
            console.log(res)
        }, (error) =>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Wrapper Header</h1>
            <form onSubmit={submitPost}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Title"
                    onChange={e => setTitleData(e.target.value)}>
                </input>
                <textarea 
                    type="text" 
                    name="description" 
                    placeholder="Post description" 
                    onChange={e => setTextData(e.target.value)}>
                </textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default PostWrapper

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createPost } from '../../redux/features/post/postSlice'
import { useDispatch } from 'react-redux'

import './createPostPage.scss'

const CreatePostPage = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [github, setGithub] = useState('')
    const [link, setLink] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        try {
            const data = new FormData()

            data.append('title', title)
            data.append('text', text)
            data.append('image', image)
            data.append('github', github)
            data.append('link', link)

            dispatch(createPost(data))
            navigate('https://pepper-portfolio.herokuapp.com/posts')
        } catch (error) {
            console.log(error);
        }
    }

    const clearFormData = () => {
        setTitle('')
        setText('')
        setImage('')
    }

    return (
        <form className='login' onSubmit={e => e.preventDefault()}>
        <h1>Create Post</h1>
        <label htmlFor="file">
            Image:
            <input 
                id="file"
                type="file" 
                style={{'display': 'none'}}
                onChange={e => setImage(e.target.files[0])}
                />
        </label>
        <div className="preview">{image && <img src={URL.createObjectURL(image)} alt={image.name} /> } </div>
        <label htmlFor="">
            Title:
            <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}

                />
        </label>
        <label htmlFor="">
            Github:
            <input 
                type="text"
                value={github}
                onChange={e => setGithub(e.target.value)}

                />
        </label>
        <label htmlFor="">
            Link:
            <input 
                type="text"
                value={link}
                onChange={e => setLink(e.target.value)}
                />
        </label>
        <label htmlFor="">
            Text:
            <textarea 
                value={text}
                onChange={e => setText(e.target.value)}
                />
        </label>
        <div className="btns">
            <button 
                className='btn btn-login'
                onClick={submitHandler}
                type="submit"
                >Create</button>
            <button
                onClick={clearFormData}
                className='btn btn-login'
                >Cancel</button>
        </div>
    </form>
    );
};

export default CreatePostPage;
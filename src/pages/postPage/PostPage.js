import { useState, useEffect } from "react"
import axios from "../../utils/axios"
import { useParams } from "react-router-dom"
import { useCallback } from "react"
import { Link } from "react-router-dom"

import './postPage.scss'

const PostPage = () => {

    const [post, setPost] = useState('')
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setPost(data)
    }, [params.id])

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <div className="tab project">
            <div className="header-tab">
                <h1>{post.title}</h1>
                <Link to="/posts" className="btn">Back</Link>
            </div>
            <div className="project__info">
                <div className="project__username">Author: {post.username}</div>
                <div className="project__views">Views: {post.views}</div>
                {/* <div className="item-proj__username">{post.createdAt}</div> */}
            </div>
            <div className="project__actions">
                <div className="project__image">
                    {
                        post?.imgUrl && <img src={`http://localhost:3002/${post.imgUrl}`} alt={post.title} />
                    }
                </div>
                <div className="project__links">
                    <a 
                        className="btn"
                        href={post?.github}
                        >Github</a>
                    <a 
                        className="btn"
                        href={post?.link}
                        >Link</a>
                </div>
            </div>
        
            <div className="project__text">{post.text}</div>
        </div>
    );
};

export default PostPage;
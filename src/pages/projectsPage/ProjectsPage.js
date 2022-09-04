import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllPosts } from '../../redux/features/post/postSlice'
import ProjectItem from './ProjectItem'
import Spinner from '../../components/spinner/Spinner'
import { toast } from 'react-toastify'
import { checkIsAuth } from '../../redux/features/auth/authSlice'

import './projectsPage.scss'

const ProjectsPage = () => {

    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    const { loading } = useSelector(state => state.post)
    const { status } = useSelector(state => state.post)
    const isAuth = useSelector(checkIsAuth)

    useEffect(() => {
        if (status) {
            toast(status) 
        }

        dispatch(getAllPosts())
    }, [dispatch, status])

    const renderPosts = (arr) => {
        const posts = arr?.map((post, index) => {
            return (
                <ProjectItem 
                key={index}
                post={post}
                /> 
            )  
        })

        return (
            <div className="projects__list">
                {posts}  
            </div>
        )
    }

    const isLoading = loading ? <Spinner /> : null
    const content = renderPosts(posts)

    return (
        <div className='tab projects'>
            <div className="projects__header header-tab">
                <h1>Projects</h1>
                {
                    isAuth ? <Link className="btn" to='/createpost'>Create Post</Link> : null
                } 
            </div>
            <div className="projects__body">
                {isLoading}
                {content}
            </div>
        </div>
    );
};

export default ProjectsPage;
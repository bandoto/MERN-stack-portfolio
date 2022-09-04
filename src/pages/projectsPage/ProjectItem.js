import { Link } from 'react-router-dom'
import './projectsPage.scss'

const ProjectItem = ({ post }) => {
    return (
        <div className="projects__item item-proj">
            <Link to={`/posts/${post._id}`}>
                <div className="item-proj__title">{post.title}</div>
                <div className="item-proj__image">
                    {
                        post.imgUrl && <img src={`https://pepper-portfolio.herokuapp.com/${post.imgUrl}`} alt={post} />
                    }
                </div>
                <div className="item-proj__info">
                    <div className="item-proj__username">Author: {post.username}</div>
                    <div className="item-proj__views">Views: {post.views}</div>
                    {/* <div className="item-proj__username">{post.createdAt}</div> */}
                </div>
            </Link>
        </div>
    );
};

export default ProjectItem;
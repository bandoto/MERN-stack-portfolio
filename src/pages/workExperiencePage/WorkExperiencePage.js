import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllWorks } from '../../redux/features/work/workSlice'
import { checkIsAuth } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../../components/spinner/Spinner'
import { Link } from 'react-router-dom'
import WorkExperienceItem from './WorkExperienceItem'

const WorkExperience = () => {

    const dispatch = useDispatch()
    const { works } = useSelector(state => state.work)
    const { loading } = useSelector(state => state.work)
    const { status } = useSelector(state => state.work)
    const isAuth = useSelector(checkIsAuth)

    useEffect(() => {
        if (status) {
            toast(status) 
        }

        dispatch(getAllWorks())
    }, [dispatch, status])

    const renderWorks = (arr) => {
        const works = arr?.map((work, index) => {
            return (
                <WorkExperienceItem 
                    work={work}
                    key={index}    
                />
            )  
        })

        return (
            <div className="works__list">
                {works}  
            </div>
        )
    }

    const isLoading = loading ? <Spinner /> : null
    const content = renderWorks(works)

    return (
        <div className="tab works">
            <div className="works__header header-tab">
                <h1>Work Experience</h1>
                {
                    isAuth ? <Link className="btn" to='/creatework'>Create Work</Link> : null
                } 
            </div>
            <div className="works__body">
                {isLoading}
                {content}
            </div>
        </div>
    );
};

export default WorkExperience;
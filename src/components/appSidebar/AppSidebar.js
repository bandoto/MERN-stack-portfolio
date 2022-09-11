import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import { GiChiliPepper } from 'react-icons/gi'

import resume from '../../resources/resume_2.0.pdf'
import './appSidebar.scss'
import { useState } from 'react'

const AppSidebar = () => {

    const [menuActive, setMenuActive] = useState(false)

    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }

    const activeStyles = {
        color: '#f06865'
    }

    const showSettings = (event) => {
        event.preventDefault();
    }

    return (
        <header className={menuActive ? 'header active' : 'header'}>
            <div className="header__container">
                <div className="header__body">
                    <div className="header__top top-header">
                        <div className="burger" onClick={() => setMenuActive(!menuActive)}>
                            <span></span>    
                        </div> 
                        <Link to="/" className="top-header__body">
                            <div className="top-header__user"><span>Pertsov</span><span>Vad<GiChiliPepper color='#f06865'/>m</span>
                            </div>
                        </Link>
                    </div>
                    <ul className="header__list">  
                        <li>
                            <NavLink 
                                to="/" 
                                className="top-header__link"
                                style={({isActive}) => isActive ? activeStyles : undefined}
                                >About
                            </NavLink>
                        </li>
                    
                        <li>
                            <NavLink 
                                to="/works" 
                                className="top-header__link"
                                style={({isActive}) => isActive ? activeStyles : undefined}
                                >Work experience
                            </NavLink>
                        </li>
                    
                        <li>
                            <NavLink 
                                to="/posts" 
                                className="top-header__link"
                                style={({isActive}) => isActive ? activeStyles : undefined}
                                >Pet projects
                            </NavLink>
                        </li>
                    
                        <li>
                            <a 
                                href={resume} 
                                className="top-header__link"
                                target="_blank"
                                rel="noreferrer" 
                                >Resume</a>
                        </li>
                    </ul>
                    {/* <li>
                        <NavLink 
                        to="/contact" 
                            className="top-header__link"
                            style={({isActive}) => isActive ? activeStyles : undefined}
                            >Contacts
                        </NavLink>
                    </li> */}
                    {isAuth ? 
                    <button className='btn btn-exit' onClick={logoutHandler}>Logout</button>
                    : <Link className='btn btn-login' to={'login'}>Sign In</Link>}
                </div>
            </div>
        </header>
    );
};

export default AppSidebar;
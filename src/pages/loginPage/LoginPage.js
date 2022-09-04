import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser, checkIsAuth } from '../../redux/features/auth/authSlice'

import './loginPage.scss'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { status } = useSelector(state => state.auth)
    const isAuth = useSelector(checkIsAuth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (status) {
            toast(status) 
        }

        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ username, password }))
            if (username && password) {
                setPassword('')
                setUsername('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className='login' onSubmit={e => e.preventDefault()}>
            <h1>Login</h1>
            <label htmlFor="">
                Username:
                <input 
                    type="text" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
            </label>
            <label htmlFor="">
                Password:
                <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
            </label>
            <div className="btns">
                <button 
                    className='btn btn-login' 
                    type="submit" 
                    onClick={handleSubmit}
                    >Sign In</button>
                <Link to="/register" className='btn btn-acc'>Don't have an account?</Link>
            </div>
        </form>
    );
};

export default LoginPage;
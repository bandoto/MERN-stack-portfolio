import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, checkIsAuth } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

import './registerPage.scss'

const RegisterPage = () => {

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
            dispatch(registerUser({ username, password }))
            setPassword('')
            setUsername('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className='register' onSubmit={e => e.preventDefault()}>
            <h1>Register</h1>
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
                    >Sign Up</button>
                <Link to="/login" className='btn btn-acc'>Have an account?</Link>
            </div>
        </form>
    );
};

export default RegisterPage;
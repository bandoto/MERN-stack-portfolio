import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createWork } from '../../redux/features/work/workSlice'
import { useDispatch } from 'react-redux'

const CreateWorkPage = () => {

    const [company, setCompany] = useState('')
    const [period, setPeriod] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        try {
            const data = new FormData()

            data.append('company', company)
            data.append('period', period)
            data.append('location', location)
            data.append('description', description)

            dispatch(createWork(data))
            navigate('/works')
        } catch (error) {
            console.log(error);
        }
    }

    const clearFormData = () => {
        setCompany('')
        setPeriod('')
        setLocation('')
        setDescription('')
    }

    return (
        <form className='login' onSubmit={e => e.preventDefault()}>
            <h1>Create Work</h1>

            <label htmlFor="">
                Company:
                <input 
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}

                    />
            </label>
            <label htmlFor="">
                Location:
                <input 
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}

                    />
            </label>
            <label htmlFor="">
                Period:
                <input 
                    type="text"
                    value={period}
                    onChange={e => setPeriod(e.target.value)}
                    />
            </label>
            <label htmlFor="">
                Description:
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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

export default CreateWorkPage;
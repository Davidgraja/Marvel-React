import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'

export const Login = () => {
    const navigate = useNavigate()
    const  {nameUser , onEventInput , onResetForm}  = useForm({nameUser : ''})
    const {login} = useContext(AuthContext)
    
    const lastPath = localStorage.getItem('lastPath') || '/characters';

    const handleSubmitLogin =(event) => {

        event.preventDefault();
        login(nameUser)
        navigate( lastPath ,{replace: true})
        onResetForm()
    }

    return (
        <section className='login-container'>
            <form className='form-login' onSubmit={handleSubmitLogin}>
                <div className="mb-3">
                    <input 
                        autoComplete='off'
                        type="text" 
                        className="form-control"  
                        aria-describedby="emailHelp" 
                        required
                        onChange={ onEventInput}
                        name ={'nameUser'}
                        value={ nameUser }
                    />

                    <div  className="form-text">Ingrese su nombre por favor</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        
        </section>
    )
}

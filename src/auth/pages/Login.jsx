import React from 'react'

export const Login = () => {
    return (
        
        <section className='login-container'>
            <form className='form-login'>
                <div className="mb-3">
                    <input type="text" className="form-control"  aria-describedby="emailHelp"/>
                    <div  className="form-text">Ingrese su nombre por favor</div>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
            </form>
        
        </section>

    )
}

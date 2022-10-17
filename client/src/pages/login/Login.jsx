import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/login/action';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input,setInput]= useState({
        email : '',
        password : ''
    });

    const handleInput = (e) => {
        setInput((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('email', input.email)
        formData.append('password', input.password)

        await dispatch(loginAction(formData, navigate))
        
    }

  return (
     <>
       <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h3>Sing In</h3>
                        <form action="" onClick={handleSubmit}>
                            <div className="my-3">
                                <label htmlFor="">Email</label>
                                <input name='email' value={input.email} onChange={handleInput} type="text" className='form-control' />
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Password</label>
                                <input onChange={handleInput} name='password' value={input.password} type="text" className='form-control' />
                            </div>
                            <div className="my-3">
                                <input type="submit" className='btn btn-primary form-control' />
                            </div>
                            <div className="my-3">
                                <Link to={'/registration'}>Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </>
  )
}

export default Login
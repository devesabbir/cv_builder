import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { registrationAction } from '../../redux/login/action';

const Registration = () => {

    const [input,setInput]= useState({
        email : '',
        password : '',
        firstName : '',
        lastName: '',
        mobile : ''
    });

    const handleInput = (e) => {
        setInput((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('email', input.email)
        formData.append('password', input.password)
        formData.append('firstName', input.firstName)
        formData.append('lastName', input.lastName)
        formData.append('mobile', input.mobile)

        await registrationAction(formData)
    }


  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3>Sing In</h3>
                    <form action="">
                        <div className="my-3">
                            <label htmlFor="">Firstname</label>
                            <input onChange={handleInput} name='firstName' value={input.firstName} type="text" className='form-control' />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Lastname</label>
                            <input onChange={handleInput} name='lastName' value={input.lastName} type="text" className='form-control' />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Email</label>
                            <input name='email' value={input.email} onChange={handleInput} type="text" className='form-control' />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Mobile</label>
                            <input name='mobile' value={input.mobile} onChange={handleInput} type="text" className='form-control' />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Password</label>
                            <input onChange={handleInput} name='password' value={input.password} type="password" className='form-control' />
                        </div>
                        <div className="my-3">
                            <input onClick={(e)=> handleSubmit(e)} type="submit" className='btn btn-primary form-control' />
                        </div>
                    </form>
                    <div className='text-center'><Link to='/login' className='text-center text-decoration-none' >Sing In</Link></div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Registration
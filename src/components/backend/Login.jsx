import React, { useContext } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/Auth'

const Login = () => {
    const { login } = useContext(AuthContext); 
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = async (data) => {
        console.log(data);
    
        const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const result = await res.json();

        if (!result.status) {
            toast.error(result.message);
        } else {
            const userInfo = {
                id: result.id,
                token: result.token
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo)); 
            login(userInfo);
            navigate('/admin/dashboard');
        }
    };

    return (
        <>
            <Header/>
            <main>
                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-3'>Login Here</h4>
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className='form-label'>Email</label>
                                            <input 
                                                {...register('email', {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                        message: "Enter a valid email"
                                                    }
                                                })}
                                                type="text" 
                                                id="email" 
                                                placeholder='Email' 
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className='form-label'>Password</label>
                                            <input 
                                                {...register('password', {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password must be at least 6 characters"
                                                    }
                                                })}
                                                type="password" 
                                                id="password" 
                                                placeholder='Password' 
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                            />
                                            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                        </div>
                                        <button type='submit' className='btn btn-primary'>Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Login;

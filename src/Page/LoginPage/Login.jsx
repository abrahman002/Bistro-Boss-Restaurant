import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { login } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(reslut => {
                const loggeduser = reslut.user;
                console.log(loggeduser)
            })
            .catch(error => {
                console.log(error.message)
            })

    }


    const handleCaptcha = () => {
        const userValue = captchaRef.current.value;
        //  console.log(userValue)
        if (validateCaptcha(userValue)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <form onSubmit={handleSubmit} className="card   w-1/2 max-w-sm shadow bg-base-100">
                    <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='Captcha' placeholder="Type The Captcha Above" className="input input-bordered" />
                            <button onClick={handleCaptcha} className='btn btn-outline btn-xs mt-3'>Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <label className="label">
                            <p><small>New Here?<Link to='/signup'>Create Account.</Link></small></p>
                        </label>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;
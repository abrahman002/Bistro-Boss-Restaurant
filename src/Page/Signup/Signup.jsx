import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png';
import { useContext } from 'react';
import { useForm } from "react-hook-form";


const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    // const handleSignin = event => {
    //     event.preventDefault()
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password)

    //     createUser(email,password)
    //     .then(result=>{
    //         const loggedUser=result.user;
    //         console.log(loggedUser);
    //     })
    //     .catch(error=>{
    //         console.log(error.message)
    //     })
    // }

    return (
        <div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}  className="card  w-1/2 max-w-sm shadow bg-base-100">
                    <h1 className="text-3xl text-center mt-2 font-bold">SignUp now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name",{ required: true })} name='name' placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",{ required: true,minLength:6, maxLength:20 })} name='password' placeholder="password" className="input input-bordered" />            
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                           
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                        <label className="label">
                            <p><small>Already Have Account?<Link to='/login'>Login</Link></small></p>
                        </label>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Signup;
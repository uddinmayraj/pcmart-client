import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../AuthContext/AuthProvider';

const Register = () => {
    const { register, handleSubmit } = useForm()
    const { createUser, updateUser } = useContext(authContext)
    const [regError, setRegError] = useState('')
    const navigate = useNavigate()

    const handleRegister = data => {
        setRegError('')
        console.log(data.name);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                toast('user create succesfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/')
                console.log(user);
            })
            .catch(err => {
                setRegError(err.message)
                console.log(err);
            })
    }
    return (
        <div>
            <section className="bg-[#F8F8F8] py-8 text-secondary">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto border bg-slate-400 shadow-xl rounded pb-6">
                        <form onSubmit={handleSubmit(handleRegister)} className="p-6">
                            <h3 className="text-center font-bold text-2xl capitalize">Register now</h3>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Name</div>
                                </div>
                                <input type="text" {...register('name', { required: true })} className="input focus:outline-none" placeholder='Your Name' />
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Email</div>
                                </div>
                                <input type="email" {...register('email', { required: true })} className="input focus:outline-none" placeholder='Your Email' />
                            </div>
                            <div className="form-control mb-2">
                                <div className="label">
                                    <div className="text-lg">Password</div>
                                </div>
                                <input type="password" {...register('password', { required: true })} className="input focus:outline-none" placeholder='Password' />
                            </div>
                            {regError && <p className="py-3">{regError}</p>}
                            <button type='submit' className='btn btn-secondary w-full mt-4 text-lg'>register</button>
                        </form>
                        <p className="text-center capitalize text-lg">new to Pcmart ? <Link to="/login" className=''><strong>register</strong></Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';

type FormValues = {
    username: string;
    password: string;
};

export default function Register() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        register_submit();
    });

    const register_submit = () => {
    axios.post("http://localhost:4000/register", {
            username,
            password
        }, {
            withCredentials: true
        }).then((res : AxiosResponse) => {
            if (res.data === "success") {
                window.location.href = "/login"
            }
        })
    }
    return (
        <section className="pb-4">
            <div className="bg-white border rounded-5 w-22">
                <form onSubmit={onSubmit}>
                    <h2 className="mb-4">Register</h2>
                    <div className="form-outline mb-4">
                        <input 
                            {...register("username", { required: true, maxLength: 10 })} 
                            type="text" 
                            placeholder='Username' 
                            className="form-control" 
                            onChange={e => setUsername(e.target.value)}
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username?.type === 'required' && <p role="alert">Username is required</p>}
                    </div>
                    <div className="form-outline mb-4">
                        <input 
                            {...register("password", { required: true, maxLength: 10 })}
                            type="text" 
                            placeholder='Password' 
                            className="form-control" 
                            onChange={e => setPassword(e.target.value)} 
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                    </div>
                    <button className="btn btn-primary btn-block mb-4">Register</button>
                </form>
            </div>
        </section>
    )
}
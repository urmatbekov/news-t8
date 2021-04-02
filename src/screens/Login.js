import React from 'react';
import LoginForm from '../components/LoginForm';
import http from '../service/http';

const Login = () => {
    const submit = (value) => {
        http.post("/auth/token/login/",value).then((response)=>{
            localStorage.setItem("token",response.data.token)
        }).catch(({response})=>{
            if (response && response.status === 400){
                alert(response.data.detail)
            }
        })
    }
    return (
        <div className="mt-4 m-auto col-md-6 col-sm-8">
            <h1 className="text-center mb-4">Login</h1>
            <LoginForm onSubmit={submit}/>
        </div>
    );
};

export default Login;
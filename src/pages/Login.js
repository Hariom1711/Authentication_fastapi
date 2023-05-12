import React from 'react'
import { Button, Form, Input,message } from 'antd';
import "./Register.css"
import {Link,useNavigate } from "react-router-dom"
import axios from 'axios';
const Login = () => {


  const navigate= useNavigate()
 

 
const onfinishHandler = async (values) => {
  try {
 
const res = await axios.post('http://10.0.20.133:8000/login', {
    username: values.email,
    password: values.password,
  } ,{
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
})
    if (res.data.access_token) {
      localStorage.setItem("token", res.data.access_token);
      message.success(`Login Successfully`);
      navigate('/');
    } else {
      message.error("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
    message.error('Something went wrong');
  }
};



  return (
    <>
   
    <div className="form-container">
     <Form layout="vertical" onFinish={onfinishHandler} className="card p-5 ">
       <h2 className='text-center'>Login Form </h2>
     {/* <Form.Item
       label="Name"
       name="name"
       rules={[
         {
           required: true,
           message: 'Please input your username!',
         },
       ]}
     >
       <Input />
     </Form.Item> */}
     <Form.Item
       label="Email"
       name="email"
       rules={[
         {
           required: true,
           message: 'Please input your Email',
         },
       ]}
     >
       <Input />
     </Form.Item>
     <Form.Item
       label="Password"
       name="password"
       rules={[
         {
           required: true,
           message: 'Please input your password!',
         },
       ]}
     >
       <Input.Password />
     </Form.Item>
 <Link to="/register" className='m-2'>Not a user Register here</Link>
 
 
     
     <Button type="primary" htmlType="submit">
        Login
       </Button>
     </Form>
    </div>
    
    </>
  )
}

export default Login
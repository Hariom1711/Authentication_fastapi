import React from 'react';
import { Button, Form, Input, message } from 'antd';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isEmail, isLength } from 'validator';
import Cookies from 'js-cookie';

const Login = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const { email, password } = values;

      // Input validation using validator.js
      const errors = {};

      if (!isEmail(email)) {
        errors.email = 'Invalid email address';
      }

      if (!isLength(password, { min: 8 })) {
        errors.password = 'Password must be at least 8 characters long';
      }

      if (Object.keys(errors).length > 0) {
        // Handle validation errors, e.g., display error messages to the user
        console.log(errors);
        return;
      }

      const sanitizedEmail = email.replace(/[<>"]/g, ''); // Remove <, >, and " characters
      const sanitizedPassword = password.replace(/[<>"]/g, '');

      const res = await axios.post(
        'http://10.0.20.133:8000/login',
        {
          username: sanitizedEmail,
          password: sanitizedPassword,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
        }
      );

      if (res.data.access_token) {
        // Store the token in an HTTP-only cookie
        Cookies.set('token', res.data.access_token, { httpOnly: true });
        message.success('Login Successful');
        navigate('/');
      } else {
        message.error('Invalid email or password');
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="card p-5">
          <h2 className="text-center">Login Form</h2>
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
          <Link to="/register" className="m-2">
            Not a user? Register here
          </Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;

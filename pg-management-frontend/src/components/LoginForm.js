import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    axios.post('http://localhost:8080/auth/login', values)
      .then(response => {
        // Assuming login success, check role and navigate accordingly
        // You can modify this based on how your backend responds (e.g., with a token)
        if (response.status === 200) {
          // For now, assuming role is handled on backend, adjust if needed
          navigate('/user/home');
        }
      })
      .catch(error => {
        setError('Invalid credentials');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

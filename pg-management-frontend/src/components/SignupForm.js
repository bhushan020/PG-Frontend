import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignupForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
    role: 'ROLE_USER'
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    role: Yup.string().required('Role is required')
  });

  const handleSubmit = (values) => {
    axios.post('http://localhost:8080/auth/signup', values)
      .then(response => {
        navigate('/login');  // Redirect to login page after successful signup
      })
      .catch(error => {
        setError('Error during signup');
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
          <div>
            <label>Role:</label>
            <Field as="select" name="role">
              <option value="ROLE_USER">User</option>
              <option value="ROLE_ADMIN">Admin</option>
            </Field>
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;

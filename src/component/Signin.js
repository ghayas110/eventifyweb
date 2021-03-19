import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './Textfield'
import * as Yup from 'yup';

export const Signin = () => {
  const validate = Yup.object({
    
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
   
  })
  return (
    <Formik
      initialValues={{
  
        email: '',
        password: '',
      
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
          <Form>
         
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
           
            <button className="btn btn-dark mt-3" type="submit">Sign In</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">SignUp</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
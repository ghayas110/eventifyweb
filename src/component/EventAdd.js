import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './Textfield'
import * as Yup from 'yup';

export const EventAdd = () => {
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
          <h1 className="my-4 font-weight-bold .display-4">Event</h1>
          <Form>
         
          <TextField label="Title" name="firstName" type="text" />
            <TextField label="Tags" name="lastName" type="text" />
       
            <label for="select">Event Categories</label>
            <br/>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" label="Categories">
  <option selected>Categories</option>
  <option value="1">Birthday Event</option>
  <option value="2">Wedding Event</option>
  <option value="3">Celebration Event</option>
</select>
<br/>
<label for="floatingTextarea">Description</label>
<br/>
<textarea class="form-control" placeholder="Write Description about Event" id="floatingTextarea"></textarea>
 
           <br/>
            <button className="btn btn-dark mt-3" type="submit">Add Event</button>
          
            <button className="btn btn-danger mt-3 ml-3" type="reset">Delete Event</button>
            <button className="btn btn-success mt-3 ml-3" type="submit">Update Event</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
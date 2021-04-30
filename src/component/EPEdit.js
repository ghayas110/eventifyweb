import React from "react";
import { Formik } from "formik";

import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
// --- Material Ui Picker Imports --- //


export const EPEdit = (props) => {

  // const handleInputChange = (e) => {
  //   var { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };
  // const handleFormSubmit = e => {
  //   e.preventDefault()
  //  props.addOrEdit(values)
  // }
  // var [values, setValues] = useState();

  return (
    <Formik
      initialValues={{
        epname: "",
        epcat: "",
        address: "",
        eventlogoupload: "",

        description: "",
      }}
      // validationSchema={validate}
      onSubmit={(values) => {
        props.addOrEdit(values)
        console.log(values);
        if (values.eventcategories === "0") console.log('0 value!')
        else
         alert("Your Profile is being Saved Successfully");
      }}
    >
      {({
        handleSubmit,
        handleReset,
        isSubmitting,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Event Planner </h1>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
                <Label htmlFor="epname" className='col-12' >Event Planner Name</Label>
                <Input
                  type="text"
                  name="epname"
                  placeholder="Event Planner Name"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="epcat">Event Categories</Label>
                <CustomInput type="select" id="epcat" name="epcat" onChange={handleChange} onSelect={handleChange} >
                  <option value="" label="Select Event Categories" />
                  <option value="Birthday Event" label="Birthday Event" />
                  <option value="Wedding Event" label="Wedding Event" />
                  <option value="Celebration Event" label="Celebration Event" />
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address" className='col-12' >Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="file">Event Planner Logo upload</Label>
                <CustomInput type="file" id="file" name="eventlogoupload" accept='image/*' label="Event upload" onChange={(e) => { values.eventupload = e.target.files[0] }} />
              </FormGroup>
            
        
           
            <label for="floatingTextarea">Description</label>
            <br />
          
            <textarea
              className="form-control"
              placeholder="Write Description about Event Planner"
              
              name="description"
              onChange={handleChange}
            />
        
            <br />
            
            <button
              className="btn btn-dark mt-3"
              type="submit"
              onClick={handleSubmit}
            >

              SAVE
            </button>

           
        
          </Form>
        </div>
      )}
    </Formik>
  );
};

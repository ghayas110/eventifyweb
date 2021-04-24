import React from "react";
import { Formik } from "formik";

import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
// --- Material Ui Picker Imports --- //


export const EventAdd = (props) => {

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
        title: "",
        location: "",
        eventupload: "",
        eventcategories: "",
        price:"",
        description: "",
      }}
      // validationSchema={validate}
      onSubmit={(values) => {
        props.addOrEdit(values)
        console.log(values);
        if (values.eventcategories === "0") console.log('0 value!')
        else
         alert("Your Package is being Processed Successfully");
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
          <h1 className="my-4 font-weight-bold .display-4">Event</h1>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
                <Label htmlFor="title" className='col-12' >Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="location" className='col-12' >Location</Label>
                <Input
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={handleChange}
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="file">Event upload</Label>
                <CustomInput type="file" id="file" name="eventupload" accept='image/*' label="Event upload" onChange={(e) => { values.eventupload = e.target.files[0] }} />
              </FormGroup>
            
              <FormGroup>
                <Label htmlFor="paymentMethod">Event Categories</Label>
                <CustomInput type="select" id="eventcategories" name="eventcategories" onChange={handleChange} onSelect={handleChange} >
                  <option value="" label="Select Event Categories" />
                  <option value="Birthday Event" label="Birthday Event" />
                  <option value="Wedding Event" label="Wedding Event" />
                  <option value="Celebration Event" label="Celebration Event" />
                </CustomInput>
              </FormGroup>
          
              <FormGroup>
                <Label htmlFor="Price" className='col-12' >Price</Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                />
              </FormGroup>
           
            <label for="floatingTextarea">Description</label>
            <br />
          
            <textarea
              className="form-control"
              placeholder="Write Description about Event"
              
              name="description"
              onChange={handleChange}
            />
        
            <br />
            
            <button
              className="btn btn-dark mt-3"
              type="submit"
              onClick={handleSubmit}
            >

              Add Event
            </button>

            <button className="btn btn-danger mt-3 ml-3" type="reset" onClick={handleReset}>
              Reset Event
            </button>
        
          </Form>
        </div>
      )}
    </Formik>
  );
};

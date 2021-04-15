import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./Textfield";

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
            <TextField
              label="Title"
              name="title"
              type="text"
              onChange={handleChange}
            />
            <TextField
              label="Location"
              name="location"
              type="text"
              onChange={handleChange}
            />
            <label >Event upload</label>
            <input id="file" name="eventupload" type="file" accept='image/*' className="form-control" onChange={handleChange} />
            <br />
        
              <br/>
            <label for="select">Event Categories</label>
            <br />
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              label="Categories"
              name="eventcategories"
              onChange={handleChange}
              onSelect={handleChange}
            >
              <option value='0'>Categories</option>
              <option value="Birthday Event">Birthday Event</option>
              <option value="Weding Event">Wedding Event</option>
              <option value="Celebration Event">Celebration Event</option>
            </select>
            <br />
            <TextField
              label="Total Price"
              name="price"
              type="number"
              onChange={handleChange}
            />
            <br />
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

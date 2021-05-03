import React,{useState} from "react";
import { Formik } from "formik";
import {db} from "../firebase";
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
// --- Material Ui Picker Imports --- //


export const EPEdit = (props) => {
  const[epname,setEpname]=useState("");
  const[epcat,setEpcat]=useState("");
  // const[eventupload,setEventupload]=useState("");
  const[address,setAddress]=useState("");
  // const[ eventlogoupload,setEventlogoupload]=useState("");
  const[description,setDescription]=useState("");

  

const handleSubmit=(e)=>{
  e.preventDefault();
  db.collection("eplanner").add(
    {
      epname:epname,
      epcat: epcat,
        //  eventupload: eventupload,
     
         address:address,
         description:description ,
    }
  ).then(()=>
alert("Form has been Uploaded")
  ).catch((error)=>{
    console.log(error.message)
  })
}
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
   
      // validationSchema={validate}
      // onSubmit={(values) => {
      //   props.addOrEdit(values)
      //   console.log(values);
      //   if (values.eventcategories === "0") console.log('0 value!')
      //   else
      //    alert("Your Profile is being Saved Successfully");
      // }}
    >
      {({
     
        handleReset,
        isSubmitting,
      
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
                  onChange={(e)=>setEpname(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="epcat">Event Categories</Label>
                <CustomInput type="select" id="epcat" name="epcat"   onChange={(e)=>setEpcat(e.target.value)}  >
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
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </FormGroup>
{/*             
              <FormGroup>
                <Label for="file">Event Planner Logo upload</Label>
                <CustomInput type="file" id="file" name="eventlogoupload" accept='image/*' label="Event upload" onChange={(e) => { values.eventupload = e.target.files[0] }} />
              </FormGroup> */}
            
        
           
            <label for="floatingTextarea">Description</label>
            <br />
          
            <textarea
              className="form-control"
              placeholder="Write Description about Event Planner"
              
              name="description"
              onChange={(e)=>setDescription(e.target.value)}
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

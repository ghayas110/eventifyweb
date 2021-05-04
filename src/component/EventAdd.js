import React,{useState} from "react";
import { Formik } from "formik";
import { db ,projectStorage, timestamp } from "../firebase";
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import ProgressBar from "./ProgressBar";
// --- Material Ui Picker Imports --- //


export const EventAdd = (props) => {
  const[title,setTitle]=useState("");
  const[location,setLocation]=useState("");
  const[file,setFile]=useState("");
  const[eventcategories,setEventCategories]=useState("");
  const[price,setPrice]=useState("");
  const[description,setDescription]=useState("");
  const [error, seterror] = useState(null);
  const types=['image/png','image/jpg','image/jpeg']

  
const changeHandler=(e)=>{
let selected= e.target.files[0];
if(selected && types.includes(selected.type)){
  setFile(selected);
}else{
  setFile(null);
  seterror("Wrong File Input")
}
}

const handleSubmit=(e)=>{
 
  e.preventDefault();

  db.collection("event").add(
    {
      title:title,
      location: location,
          //  file: file,
         eventcategories:eventcategories ,
         price:price,
         description:description ,
    }
  ).then(()=>
alert("Form has been Uploaded")

  ).catch((error)=>{
    console.log(error.message)
  })
  setTitle("");
  setLocation("");
  setEventCategories("");
  setPrice("");
  setFile("");
  setDescription("");

  
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
      // initialValues={{
      //   title: "",
      //   location: "",
      //   eventupload: "",
      //   eventcategories: "",
      //   price:"",
      //   description: "",
      // }}
      // validationSchema={validate}
      // onSubmit={() => {
    
      //   console.log(values);
      //   if (values.eventcategories === "0") console.log('0 value!')
      //   else
      //    alert("Your Package is being Processed Successfully");
      // }}
    >
      {({
       
        handleReset,
        isSubmitting,
        //  handleChange,
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
                  value={title}
                  placeholder="Title"
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="location" className='col-12' >Location</Label>
                <Input
                  type="text"
                  name="location"
                  value={location}
                  placeholder="Location"
                  onChange={(e)=>setLocation(e.target.value)}
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="file">Event upload</Label>
                <CustomInput type="file" id="file" name="file" accept='image/*' label="Event upload" onChange={changeHandler} />
              </FormGroup>
            {error && <div>{error}</div>}
             {file && <div>{file.name}</div>}
             {/* { file && <ProgressBar file={file} setFile={setFile} /> } */}
              <FormGroup>
                <Label >Event Categories</Label>
                <CustomInput value={eventcategories} type="select" id="eventcategories" name="eventcategories"  onChange={(e)=>setEventCategories(e.target.value) }  >
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
                  value={price}
                  placeholder="Price"

                  onChange={(e)=>setPrice(e.target.value) }
                />
              </FormGroup>
           
            <label for="floatingTextarea">Description</label>
            <br />
          
            <textarea
              className="form-control"
              placeholder="Write Description about Event"
              value={description}
              name="description"
              onChange={(e)=>setDescription(e.target.value)}
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

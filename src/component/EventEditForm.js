import  React from "react";
import rocketImg from '../images/rocket.png';



import { EPEdit } from './EPEdit';


 
 function EventEditForm(){
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
//    var [currentId, setCurrentId] = useState('');
  
//    const addOrEdit = (obj) => {
//        if (currentId === '')
//            database.ref().child('epedit').push(
//                obj,
//                err => {
//                    if (err)
//                        console.log(err)
//                    else
//                        setCurrentId('')
//        })
//        else
//            database.ref().child(`epedit/${currentId}`).set(
//                obj,
//                err => {
//                    if (err)
//                        console.log(err)
//                    else
//                        setCurrentId('')
//                })
//    }

    return (
        <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <EPEdit/>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
   );
 };
 export default EventEditForm;
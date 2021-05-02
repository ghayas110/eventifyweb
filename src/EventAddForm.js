// import  React,{useState} from "react";
// import database from "./firebase";

// import { EventAdd } from './component/EventAdd';

 
//  function EventAddForm(){
//    // Pass the useFormik() hook initial form values and a submit function that will
//    // be called when the form is submitted
//    var [currentId, setCurrentId] = useState('');
  
//    const addOrEdit = (obj) => {
//        if (currentId === '')
//            database.ref().child('eventify').push(
//                obj,
//                err => {
//                    if (err)
//                        console.log(err)
//                    else
//                        setCurrentId('')
//        })
//        else
//            database.ref().child(`eventify/${currentId}`).set(
//                obj,
//                err => {
//                    if (err)
//                        console.log(err)
//                    else
//                        setCurrentId('')
//                })
//    }

//     return (
//         <div className="container mt-3">
//       <div className="row">
//         <div className="col-md-5">
//           <EventAdd addOrEdit={addOrEdit}/>
//         </div>
       
//       </div>
//     </div>
//    );
//  };
//  export default EventAddForm;
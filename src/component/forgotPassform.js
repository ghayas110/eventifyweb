import React from 'react';
import rocketImg from '../images/rocket.png';
import ForgotPassword from './ForgetPassword';


 
 function ForgotPassForm(){
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   
    return (
        <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <ForgotPassword/>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
   );
 };
 export default ForgotPassForm;
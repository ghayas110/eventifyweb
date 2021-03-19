import React from 'react';
import rocketImg from './images/rocket.png';
import { Signin } from './component/Signin';

 
 function SignupForm(){
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   
    return (
        <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signin />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
   );
 };
 export default SignupForm;
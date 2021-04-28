import  firebase from "firebase";
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDrk9gnvo7th54NLtCfyLsn99EAgGkmYmU",
    authDomain: "eventify-5ea05.firebaseapp.com",
    projectId: "eventify-5ea05",
    storageBucket: "eventify-5ea05.appspot.com",
    messagingSenderId: "172389090599",
    appId: "1:172389090599:web:16233fb10640df2f689502"
  };
  // Initialize Firebase
 
 firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth();
 export default firebase.database();

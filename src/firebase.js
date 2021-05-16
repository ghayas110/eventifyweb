import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyDrk9gnvo7th54NLtCfyLsn99EAgGkmYmU",
  authDomain: "eventify-5ea05.firebaseapp.com",
  databaseURL: "https://eventify-5ea05-default-rtdb.firebaseio.com",
  projectId: "eventify-5ea05",
  storageBucket: "eventify-5ea05.appspot.com",
  messagingSenderId: "172389090599",
  appId: "1:172389090599:web:16233fb10640df2f689502"
};
// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const projectStorage=firebase.storage();
export const ana=firebase.analytics();
// export default firebase.database();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export var db = firebaseApp.firestore();
// export {db}


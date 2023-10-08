// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqbM47K5t7sTIIn9nwTXAENLcVvyPK5zg",
  authDomain: "education-training-react.firebaseapp.com",
  projectId: "education-training-react",
  storageBucket: "education-training-react.appspot.com",
  messagingSenderId: "542273517760",
  appId: "1:542273517760:web:656c3b8374ca6f54359525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
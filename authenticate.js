// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE5aSokDU17OnGXZKCiZ-iTiK4xNnvHBM",
  authDomain: "edu-website-294ab.firebaseapp.com",
  projectId: "edu-website-294ab",
  storageBucket: "edu-website-294ab.appspot.com",
  messagingSenderId: "825421369393",
  appId: "1:825421369393:web:789bca2f75802ab3648510",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// this is SIGN UP CODE
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("creating acc");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error");
      // ..
    });
});

// this is LOGIN CODE

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPass');
    alert("login succesful")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error")
  });



// const name = document.getElementById("name");
// const dob = document.getElementById("DOB");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const terms = document.getElementById("terms");
// const updates = document.getElementById("spam");

// function Validating() {
//   const nameVALUE = document.getElementById("name").value.trim();
//   const dobVALUE = document.getElementById("DOB").value.trim();
//   const emailVALUE = document.getElementById("email").value.trim();
//   const passwordVALUE = document.getElementById("password").value.trim();
//   const termsVALUE = document.getElementById("terms").checked;
//   const updatesVALUE = document.getElementById("spam").checked;

//   if (nameVALUE == ""){
//     showError(name,"Username is required");
//   } else {
//     showSuccess(name);
//   };

//   if (passwordVALUE == ""){
//     showError(password,"Password is required");
//   } else if ( passwordVALUE.length < 8) {
//     showError(password , "Password must be at least 8 character.");
//   } else {
//     showSuccess(password);
//   }

//   if(emailVALUE == ""){
//     showError(email,"Email is required");
//   } else if (!emailValidation(emailVALUE)){
//     showError(email,"Please enter a valid Email");
//   } else {
//     showSuccess(email);
//   }

//   if (termsVALUE == false){
//     showError(terms,"Accept the the terms and condition");
//   } else {
//     showSuccess(terms)
//   }

// }

// function emailValidation(email) {
//   const ref =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return ref.test(String(email).toLowerCase());
// }

// function showError (element, message){
//   const inputfield = element.parentElement;
//   const errordisplay = inputfield.querySelector('.error');
//   errordisplay.innertext = message;
//   inputfield.classList.add('error');
//   inputfield.classList.remove('success');
// }
// function showSuccess(element, message){
//   const inputfield = element.parentElement;
//   const errordisplay = inputfield.querySelector('.error');
//   errordisplay.innertext = message;
//   inputfield.classList.add('error');
//   inputfield.classList.remove('success');
// }

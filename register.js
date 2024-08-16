import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";

const email =document.querySelector('#email')
const password =document.querySelector('#password')
const username =document.querySelector('#username')
const form =document.querySelector('form')
form.addEventListener('submit',(event)=>{
  event.preventDefault()

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    alert('register successful')
    window.location ="login.html"
  })
  .catch((error) => {
     
    const errorMessage = error.message;
    error(errorMessage);
  });
})
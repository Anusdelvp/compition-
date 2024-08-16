import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";

const email =document.querySelector('#email')
const password =document.querySelector('#password')
const username =document.querySelector('#username')
const form =document.querySelector('form')
form.addEventListener('submit',(event)=>{
  event.preventDefault()
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    window.location='dashboard.html'
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    alert(errorMessage)
  });
})


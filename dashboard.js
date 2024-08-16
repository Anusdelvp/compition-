const form =document.querySelector('form');
const placeholder =document.querySelector('#placeholder');
const form2 =document.querySelector('form2');
form.addEventListener('publish blog',(event)=>{

    event.preventDefault()
console.log(email.value);
console.log(password.value);
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log(user); 
    window.location = 'home.html'
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage);
  });

})
googlebtn.addEventListener('click',()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
 
    const user = result.user;
    window.location ="dashboard.html"
   
    
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.customData.email;
   
    const credential = GoogleAuthProvider.credentialFromError(error);
  alert(errorMessage)
  });
})
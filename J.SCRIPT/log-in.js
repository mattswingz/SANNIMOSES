//Validation code for inputs
var firebaseConfig = {
    apiKey: "AIzaSyDHPpAxa1OW0ZEXKKdk9Nf11wB6aCJBUxk",
    authDomain: "olasanni-b57a1.firebaseapp.com",
    databaseURL: "https://olasanni-b57a1.firebaseio.com",
    projectId: "olasanni-b57a1",
    storageBucket: "olasanni-b57a1.appspot.com",
    messagingSenderId: "766456175952",
    appId: "1:766456175952:web:c60c476c0675b245"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");

  let email,pass;
  const loginpage=document.getElementById("loginbtn");
  loginpage.addEventListener('click', ()=>{
      Email=document.getElementById("Email").value;
      Pass=document.getElementById("Password").value;

      firebase.auth().logInWithEmailAndPassword(Email,Pass).then(function(){
          window.location="index.html";
      }).catch(function(error){
          //handle errors here
          var errorCode=error.code;
          var errorMessage= error.message;
          console.log("error:" +error.code);
      })

  });

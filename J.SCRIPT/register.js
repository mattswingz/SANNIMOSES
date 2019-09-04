   // Your web app's Firebase configuration

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
  console.log("firebaseloaded");

   //initialize firestore database and save the instance to db variable
   const db=firebase.firestore();

   //create a collection and empty document and save the instance docRef variable
   const docRef=db.doc("register/sample");
   const save = document.getElementById("save");

   //declared this global variable so they can be accessed by all funtions
   let Sname,Lname,Email,Phone,Uname,Pass,CPass;
   const date= Date.now();
   save.addEventListener("click", ()=>{
        let Sname =document.getElementById("Surname").value;
        let Lname =document.getElementById("Lastname").value;
        let Email =document.getElementById("Email").value;
        let Phone =document.getElementById("Number").value;
        let Uname =document.getElementById("Username").value;
        let Pass = document.getElementById("Password").value;
        let CPass = document.getElementById("CPassword").value;


        if (!Sname.match(/^[a-zA-Z]+$/)){
            alert ("Input your Surname")
        }
        else if (!Lname.match(/^[a-zA-Z]+$/)){
            alert ("Input your Last Name")
        }
        else if (!Email.includes("@")) {
            alert ("Input your Email ")
        }
        else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
            alert ("Invalid Phone Number")
        }
        else if (!Uname.match(/^[a-zA-Z0-9]+$/)){
            alert ("Input your Username")
        }
        else if (!Pass.match(/^[a-zA-Z0-9]+$/)||Pass.length < 5) {
            alert("Input your Password")
        }
        else if (!CPass.match(Pass)){
            alert ("Invalid confirm password")
        }
        else {
            alert ("Registred Successfully");
        docRef.set({
          Surname: Sname,
          Lastname:Lname,
          Email: Email,
          Number: Phone,
          Password: Pass,
          Comfirmpassword: CPass

    })
    .then(function(){console.log("registrated successfully");
})
    .catch(function(error){console.log("Got an error:"+error);
});
}
   });

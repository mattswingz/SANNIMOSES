
  
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
  console.log("firebase loaded");
  const firestore=firebase.firestore();


   //initialize firestore database and save the instance to db variable
   const db=firebase.firestore();


   //create a collection and empty document and save the instance docRef variable
   const save = document.getElementById("saveData");

   //declared this global variable so they can be accessed by all funtions
   let container, sendingLayout, successLayout, failedLayout;

 container = document.getElementById("container");
 sendingLayout = document.getElementById("sendingLayout");
 successLayout = document.getElementById("successLayout");
 failedLayout = document.getElementById("failedLayout");
 
 sendingLayout.style.display = "none";
 successLayout.style.display = "none";
 failedLayout.style.display = "none";

let Sname, Lname, Email, Phone, Uname, Pass, Cpass;
 const submitData = document.getElementById("submitData");
submitData.addEventListener("click", () => {
    Sname =document.getElementById("Surname").value;
    Lname =document.getElementById("Lastname").value;
    Email =document.getElementById("Email").value;
    Phone =document.getElementById("Number").value;
    Uname =document.getElementById("Username").value;
    Pass =document.getElementById("Password").value;
    CPass =document.getElementById("CPassword").value;
  
    if (!Sname.match(/^[a-zA-Z]+$/)){
        alert ("Enter Your  SurName")
        
    }
    else if (!Lname.match(/^[a-zA-Z]+$/)){
        alert ("Enter Your  LastName")
        
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
        
    }
    else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
        alert ("Incorrect Phone Number")
        
    }
    else if (!Uname.match(/^[a-zA-Z]+$/)){
        alert ("input UserName")
        SendData()
    }
    else if (!Pass.match(/^[a-zA-Z-0-9]+$/)){
        alert("Incorrect Password")
        SendData()
    }
    else if (!CPass.match(Pass)){
        alert ("Incorrect Comfirm Password")
        
    }
    else{
        firebase.auth().createUserWithEmailAndPassword(Email, Pass).then(function(){
                    SendData()
    }).catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.Message;
        console.log("error:"+error);


    })
}})

const SendData = () => {
    container.style.display = "none";
    sendingLayout.style.display = "block";
    SendToDataBase();
};

const SendToDataBase = () => {
    let docRef = db.collection("Container").doc(Phone);
    docRef.set({
    Surname: Sname,
    Lastname: Lname,
    Email: Email,
    Phone: Phone,
    Username: Uname,
    Password: Pass,
    Cpassword: CPass 
    })
    .then(function(){
        sendingLayout.style.display = "none";
        successLayout.style.display = "block";
        console.log("Successfully Saved");
    })
    .catch(function(error){
        container.style.display = "block";
        failedLayout.style.display = "block";
        console.log("Got an error:",error);
    });
};
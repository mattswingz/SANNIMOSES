  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHPpAxa1OW0ZEXKKdk9Nf11wB6aCJBUxk",
    authDomain: "olasanni-b57a1.firebaseapp.com",
    databaseURL: "https://olasanni-b57a1.firebaseio.com",
    projectId: "olasanni-b57a1",
    storageBucket: "olasanni-b57a1.appspot.com",
    messagingSenderId: "766456175952",
    appId: "1:766456175952:web:f316b0322fe73f36"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('firebaseloaded');
  const db = firebase.firestore();
  const docRef = db.collection('message').doc();
  const save = document.getElementById('save');
  let name, email, phone;
  let date = Date.now();
  save.addEventListener('click',() =>{

  });

  save.addEventListener("click", () => {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    addToDataBase();
 
  });

          const addToDataBase = () =>{

      docRef.set({
        Name:name,
        Email:email,
        PhoneNumber:phone,
        Date: date
      }).then(function(){
        console.log("Successfully Saved");
      }).catch(function(error){
        console.log("Got an error:",error);
      });
      
      };
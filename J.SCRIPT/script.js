Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@mattswingz 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


2
00mattswingz/SANNIMOSES
 Code Issues 1 Pull requests 0 Projects 0 Wiki Security Insights Settings
SANNIMOSES/J.SCRIPT/script.js
@mattswingz mattswingz first commit
6bbd969 5 days ago
45 lines (38 sloc)  1.25 KB
  
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
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About

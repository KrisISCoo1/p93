const firebaseConfig = {
      apiKey: "AIzaSyDWM_SH362OqXg1-UUzKTOt_kxLQySZVQw",
      authDomain: "thick-thack-toooe.firebaseapp.com",
      databaseURL: "https://thick-thack-toooe-default-rtdb.firebaseio.com",
      projectId: "thick-thack-toooe",
      storageBucket: "thick-thack-toooe.appspot.com",
      messagingSenderId: "1010208714503",
      appId: "1:1010208714503:web:05e4a0fa3b386248e25fa2",
      measurementId: "G-4M2ZXNNZBM"
    };
    
    // Initialize Firebase
    fireBase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

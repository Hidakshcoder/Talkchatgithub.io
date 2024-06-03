var firebaseConfig = {
    apiKey: "AIzaSyBQOrSl8VqPRuTrWsVIIx4yD3XH8GKd3rY",
    authDomain: "ai-bot-5a0fd.firebaseapp.com",
    databaseURL: "https://ai-bot-5a0fd-default-rtdb.firebaseio.com",
    projectId: "ai-bot-5a0fd",
    storageBucket: "ai-bot-5a0fd.appspot.com",
    messagingSenderId: "1091564992042",
    appId: "1:1091564992042:web:69ec91fdb01c5d3097b553",
    measurementId: "G-6MS2MWL7ES"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "talkchat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "talkchat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
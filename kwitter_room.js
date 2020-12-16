 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBlSZYbvYvV2xyw9EE8v1IXLliHyGK-lEI",
    authDomain: "lets-chat-f0b13.firebaseapp.com",
    projectId: "lets-chat-f0b13",
    storageBucket: "lets-chat-f0b13.appspot.com",
    messagingSenderId: "116860496838",
    appId: "1:116860496838:web:fa18f804d4e146356aa0c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
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
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

function addRoom(){
  room_name = document.getElementById("room_name").value;


  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
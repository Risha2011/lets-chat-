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

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() {
  firebase.database().ref("/"+room_name).on('value', function(snapshot)
  {
      document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       childData = childSnapshot.val();
       if(childKey != "purpose")
       {
         firebase_message_id = childKey;
         message_data = childData;
       }
    }
  }
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
    }

var firebaseConfig = {
  apiKey: "AIzaSyBfmzc7mJG2Zcm8ulXUGTNEutRTL2prN04",
  authDomain: "kwitter-app-a9cd4.firebaseapp.com",
  databaseURL: "https://kwitter-app-a9cd4-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-a9cd4",
  storageBucket: "kwitter-app-a9cd4.appspot.com",
  messagingSenderId: "138083436710",
  appId: "1:138083436710:web:45f305772dcb291f1e8c67",
  
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +  user_name + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";

}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name -" + Room_names);
  row = "<div class = 'room_name' id= "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;


  //End code
  });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
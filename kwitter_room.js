var firebaseConfig = {
    apiKey: "AIzaSyAR07UXpueLgTQTd_QADOhjAdufhJljmXE",
    authDomain: "emeralds-and-rubies-4bcef.firebaseapp.com",
    databaseURL: "https://emeralds-and-rubies-4bcef-default-rtdb.firebaseio.com",
    projectId: "emeralds-and-rubies-4bcef",
    storageBucket: "emeralds-and-rubies-4bcef.appspot.com",
    messagingSenderId: "824193603940",
    appId: "1:824193603940:web:a3c8c835f39c79be190271"
}
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";
function add()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_name);
row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>"
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}
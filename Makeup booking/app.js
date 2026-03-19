
function book(){

const name=document.getElementById("name").value;
const service=document.getElementById("service").value;
const date=document.getElementById("date").value;

if(!name || !date){
 alert("Please enter name and date");
 return;
}

let bookings=JSON.parse(localStorage.getItem("bookings")||"[]");

bookings.push({
 name:name,
 service:service,
 date:date
});

localStorage.setItem("bookings",JSON.stringify(bookings));

alert("Booking Confirmed");

document.getElementById("name").value="";
document.getElementById("date").value="";
}

function loadBookings(){

let bookings=JSON.parse(localStorage.getItem("bookings")||"[]");

const list=document.getElementById("bookingList");
list.innerHTML="";

bookings.forEach(b=>{

const li=document.createElement("li");
li.innerText=b.name+" - "+b.service+" - "+b.date;

list.appendChild(li);

});

}

// Wait until page loads
document.addEventListener("DOMContentLoaded", function(){

/* AOS INIT */
AOS.init({
duration:1000,
once:true
});

/* TESTIMONIAL DATA */

const testimonials = [

{
img:"images/FrBinoj.jpg",
text:"Highly engaging & hands-on learning experience.\n\n✔ Students showed strong interest in AI & Robotics\n✔ Practical exposure beyond textbooks\n✔ Well-structured and professionally delivered\n\nThe session truly inspired our students to explore technology.",
name:"Principal Fr Binoj Mathew",
role:"DeMatha English Medium School, Rangia"
},

{
img:"images/Anthony.jpeg",
text:"Inspiring session that made AI simple and exciting.\n\n✔ Real-world applications explained clearly\n✔ Students became curious about coding\n✔ Highly interactive and engaging approach\n\nA great initiative to prepare students for future technology.",
name:"Principal Anthony Peter",
role:"Noonmati Public School"
},

{
img:"images/school4.jpeg",
text:"Students absolutely loved building real robots.\n\n✔ Hands-on robotics learning\n✔ Fun + education combined\n✔ Strong student participation\n\nOne of the most engaging workshops we’ve hosted.",
name:"Principal Manoj Borah",
role:"MVM Rangia"
}

];

let index = 0;

/* UPDATE DOTS */

function updateDots(){
let dots = document.querySelectorAll(".dot");
dots.forEach((dot,i)=>{
dot.classList.remove("active");
if(i === index){
dot.classList.add("active");
}
});
}

/* SHOW TESTIMONIAL */

function showTestimonial(){

document.getElementById("t-img").src = testimonials[index].img;

// Convert \n to line breaks
document.getElementById("t-text").innerHTML =
testimonials[index].text.replace(/\n/g, "<br>");
document.getElementById("t-highlight").innerText =
testimonials[index].text.split(".")[0];

document.getElementById("t-name").innerText = testimonials[index].name;
document.getElementById("t-role").innerText = testimonials[index].role;

updateDots();
}

/* AUTO SLIDER CONTROL */

let interval = setInterval(nextTestimonial, 4000);

function resetInterval(){
clearInterval(interval);
interval = setInterval(nextTestimonial, 4000);
}

/* NEXT */

function nextTestimonial(){
index = (index + 1) % testimonials.length;
showTestimonial();
resetInterval();
}

/* PREV */

function prevTestimonial(){
index = (index - 1 + testimonials.length) % testimonials.length;
showTestimonial();
resetInterval();
}

/* DOT CLICK */

function setTestimonial(i){
index = i;
showTestimonial();
resetInterval();
}

/* INITIAL LOAD */
// Hide mode initially
let mode = document.getElementById("modeSelect");
if(mode){
  mode.style.display = "none";
}

showTestimonial();

});
function selectService(service){

document.getElementById("serviceSelect").value = service;

// Scroll to form
document.getElementById("contact").scrollIntoView({behavior:'smooth'});

// Show mode only for students
let mode = document.getElementById("modeSelect");

if(service === "In-Centre Learning"){
mode.style.display = "block";
}else{
mode.style.display = "none";
}

}

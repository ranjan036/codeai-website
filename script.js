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

    //reset old form details
    document.getElementById("contactForm").reset();

  document.getElementById("serviceSelect").value = service;

  document.getElementById("contact").scrollIntoView({behavior:'smooth'});

  let mode = document.getElementById("modeSelect");
  let button = document.querySelector("#contact button");

  if(service === "centre"){
    mode.style.display = "block";
    btn.innerText = "Book Demo Class";
} 
else if(service === "web"){
    mode.style.display = "none";
    btn.innerText = "Book Consultation";
} 
else {
    mode.style.display = "none";
    btn.innerText = "Request Demo";
}

}
document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault(); // stop normal submit

  // Get values
  let name = document.querySelector('[name="organization"]').value;
  let person = document.querySelector('[name="person"]').value;
  let phone = document.querySelector('[name="phone"]').value;
  let city = document.querySelector('[name="city"]').value;
  let service = document.getElementById("serviceSelect").value;
  let mode = document.getElementById("modeSelect").value;
  let message = document.querySelector('[name="message"]').value;

  // Create WhatsApp message
  let text = `Hello CODE AI,%0A%0A` +
             `New Inquiry:%0A` +
             `Name: ${name}%0A` +
             `Contact Person: ${person}%0A` +
             `Phone: ${phone}%0A` +
             `City: ${city}%0A` +
             `Service: ${service}%0A` +
             `Mode: ${mode}%0A` +
             `Message: ${message}`;

  // Your WhatsApp number (replace if needed)
  let whatsappNumber = "7980610537";

  let url = `https://wa.me/${whatsappNumber}?text=${text}`;

  // Open WhatsApp
  window.open(url, "_blank");

});

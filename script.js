document.addEventListener("DOMContentLoaded", function(){

AOS.init({
duration:1000,
once:true
});

const testimonials = [
{
img:"images/FrBinoj.jpg",
text:"DeMatha English Medium School conducted an AI, Coding, and Robotics workshop...",
name:"Principal Fr Binoj Mathew",
role:"DMS, Tulsibari,Rangia"
},
{
img:"images/Anthony.jpeg",
text:"Noonmati Public Senior Secondary School hosted Ranjan Ali...",
name:"Principal Anthony Peter",
role:"NPS kamarkuchi"
},
{
img:"images/school4.jpeg",
text:"Excellent hands-on learning approach...",
name:"Principal Manoj Borah",
role:"MVM Rangia"
}
];

let index = 0;

function updateDots(){
let dots = document.querySelectorAll(".dot");
dots.forEach((dot,i)=>{
dot.classList.remove("active");
if(i === index){
dot.classList.add("active");
}
});
}

function showTestimonial(){
document.getElementById("t-img").src = testimonials[index].img;
document.getElementById("t-text").innerText = testimonials[index].text;
document.getElementById("t-name").innerText = testimonials[index].name;
document.getElementById("t-role").innerText = testimonials[index].role;

updateDots();
}

let interval = setInterval(nextTestimonial, 4000);

function resetInterval(){
clearInterval(interval);
interval = setInterval(nextTestimonial, 4000);
}

function nextTestimonial(){
index = (index + 1) % testimonials.length;
showTestimonial();
resetInterval();
}

function prevTestimonial(){
index = (index - 1 + testimonials.length) % testimonials.length;
showTestimonial();
resetInterval();
}

function setTestimonial(i){
index = i;
showTestimonial();
resetInterval();
}

showTestimonial();

});
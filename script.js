AOS.init({
duration:1000,
once:true
});

const testimonials = [

{
img:"images/FrBinoj.jpg",
text:"DeMatha English Medium School conducted an AI, Coding, and Robotics workshop for our Class 7 students on January 6, 2026. The session was highly engaging, hands-on, and sparked strong interest in technology among the students. The program was well-structured and professionally delivered. We appreciate Mr. Ranjan Ali and the CODE AI team for their expertise and dedication.",
name:"Principal Fr Binoj Mathew",
role:"DMS, Tulsibari,Rangia"
},

{
img:"images/Anthony.jpeg",
text:"Noonmati Public Senior Secondary School hosted Ranjan Ali, founder of CodeAI, for an inspiring AI and robotics demonstration. He presented real-world uses of Artificial Intelligence in a simple, engaging way. The session sparked curiosity and encouraged students to explore coding and new technologies. We thank Mr. Ranjan Ali for inspiring our students and sharing his vision for the future.",
name:"Principal Anthony Peter",
role:"NPS kamarkuchi"
},

{
img:"images/school4.jpeg",
text:"Excellent hands-on learning approach. Students loved building robots.",
name:"Principal Manoj Borah",
role:"MVM Rangia"
}

];

let index = 0;

function showTestimonial(){
document.getElementById("t-img").src = testimonials[index].img;
document.getElementById("t-text").innerText = testimonials[index].text;
document.getElementById("t-name").innerText = testimonials[index].name;
document.getElementById("t-role").innerText = testimonials[index].role;
}

function nextTestimonial(){
index = (index + 1) % testimonials.length;
showTestimonial();
}

function prevTestimonial(){
index = (index - 1 + testimonials.length) % testimonials.length;
showTestimonial();
}

setInterval(nextTestimonial, 4000);

showTestimonial();
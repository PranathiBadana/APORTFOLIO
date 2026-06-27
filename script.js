const words = [
"Web Developer",
"Frontend Developer",
"UI Designer",
"JavaScript Programmer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = words[i];

if (!isDeleting) {
document.getElementById("typing").textContent =
current.substring(0, j++);
if (j > current.length) {
isDeleting = true;
setTimeout(type, 1000);
return;
}
}
else {
document.getElementById("typing").textContent =
current.substring(0, j--);

if (j < 0) {
isDeleting = false;
i = (i + 1) % words.length;
}
}

setTimeout(type, isDeleting ? 50 : 120);

}

type();

document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
alert("Message Sent Successfully!");
});
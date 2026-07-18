// Theme Button
function changeTheme() {
    document.body.classList.toggle("dark");
}

// View Project Button
function viewProject() {
    alert("Thanks for visiting T Trailer Portfolio!");
}const text = "Hi, I'm Kuldeep Nagar";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 120);
    }
}

typingEffect();const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
};window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector("nav ul");

menuBtn.onclick = function () {
    menu.classList.toggle("active");
};const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
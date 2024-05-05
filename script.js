const testimonials = [
  {
    name: "Los Angeles",
    photoUrl: "https://www.w3schools.com/w3images/la.jpg",
    text: "We had the best time playing at Venice Beach",
  },
  {
    name: "New York",
    photoUrl: "https://www.w3schools.com/w3images/ny.jpg",
    text: "The atmosphere in Mew York is lorem ipsum.",
  },
  {
    name: "Chicago",
    photoUrl: "https://www.w3schools.com/w3images/chicago.jpg",
    text: "Thank you Chicago - A night we won't forget.",
  },
];

const imagEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userrnameEl = document.querySelector(".username");

let indx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[indx];

  imagEl.src = photoUrl;
  textEl.innerText = text;
  userrnameEl.innerText = name;

  indx++;

  if (indx === testimonials.length) {
    indx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 3500);
}

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

// Function to toggle navigation menu

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

let navLinks = document.querySelectorAll("nav a");

// Add event listener to each anchor tag
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});

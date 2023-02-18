// responsive-navbar

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

// activeSection

let navbar = document.getElementById("navbar");
let btns = navbar.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// night-toogle 

function myFunction() {
  var element = document.body;
   element.classList.toggle("night-mode");
}

// modal

const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");

function modalShow() {
  modal.classList.add("modal-show");
  modal_content.classList.add("modal-content-show");
}

function modalHide() {
  modal.classList.remove("modal-show");
  modal_content.classList.remove("modal-content-show");
}

open_btn.addEventListener("click", modalShow);

close_btn.addEventListener("click", modalHide);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modalHide();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalHide();
  }
});

// card

let service_card = [
  {
    image: "../images/card-first-icon.png",
    title: "What I can do for you",
    desc: "Faster, better products that your users love. Here's all the services I provide:",
    feature1: "Design Strategy",
    feature2: "Web and Mobile App Design",
    feature3: "Front-end Development",
  },
  {
    image: "../images/card-second-icon.png",
    title: "Applications I'm fluent in",
    desc: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
    feature1: "Sketch",
    feature2: "Webflow",
    feature3: "Figma",
  },
  {
    image: "../images/card-third-icon.png",
    title: "What you can expect",
    desc: "I design products that are more than pretty. I make them shippable and usable.",
    feature1: "Clean and functional",
    feature2: "Device and user friendly",
    feature3: "Efficient and maintainable",
  },
];

let card_row = document.getElementById("service_card_row");

function getCard(image, title, desc, feature1, feature2, feature3) {
  return `<div id="service_card">
<div class="card-image">
  <img src="${image}" alt="" />
</div>
<div class="card_text">
  <h4 class="card-h">${title}</h4>
  <p class="card-p">
   ${desc}
  </p>
  <ul class="list-group">
    <li class="card-li list-group-item">${feature1}</li>
    <li class="card-li list-group-item">${feature2}</li>
    <li class="card-li list-group-item">${feature3}</li>
  </ul>
</div>
</div>
`;
}
for (el of service_card) {
  card_row.innerHTML += getCard(
    el.image,
    el.title,
    el.desc,
    el.feature1,
    el.feature2,
    el.feature3
  );
}

// carousel

const carousel = document.querySelector(".carousel");
const carouselAllItems = document.querySelectorAll(".carousel-item");
const carouselItems = document.querySelector(".carousel-items");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let slideLength = 2;

if (innerWidth < 600) {
  slideLength = 1;
}

const carouselItemsLength = carouselAllItems.length;

const carouselItemWidth = carousel.offsetWidth / slideLength;
carouselItems.style.width = carouselItemsLength * carouselItemWidth + "px";

for (let i = 0; i < carouselItemsLength; i++) {
  carouselAllItems[i].style.width = carouselItemWidth + "px";
}

const stepLength = 1;
const stepWidth = carouselItemWidth * stepLength;

let currentPosition = 0;
let lastPosition = (carouselItemsLength - slideLength) * carouselItemWidth;

prevBtn.addEventListener("click", function () {
  currentPosition -= stepWidth;
  if (Math.ceil(currentPosition) < 0) {
    currentPosition = lastPosition;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});

nextBtn.addEventListener("click", function () {
  currentPosition += stepWidth;
  if (Math.floor(currentPosition) > lastPosition) {
    currentPosition = 0;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;

});

// clickShow

const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");
indicators.addEventListener("click", function (event) {
  event.target.src && (show.src = event.target.src);
});

// secondCarousel

const carousel_cus = document.querySelector(".carousel-cus");
const carouselAllItems_cus = document.querySelectorAll(".carousel-item-cus");
const carouselItems_cus = document.querySelector(".carousel-items-cus");
const prevBtn_cus = document.querySelector(".carousel-prev-cus");
const nextBtn_cus = document.querySelector(".carousel-next-cus");

let slideLength_cus = 1;

const carouselItemsLength_cus = carouselAllItems_cus.length;

const carouselItemWidth_cus = carousel_cus.offsetWidth / slideLength_cus;
carouselItems_cus.style.width =
  carouselItemsLength_cus * carouselItemWidth_cus + "px";

for (let i = 0; i < carouselItemsLength_cus; i++) {
  carouselAllItems_cus[i].style.width = carouselItemWidth_cus + "px";
}

const stepLength_cus = 1;
const stepWidth_cus = carouselItemWidth_cus * stepLength_cus;

let currentPosition_cus = 0;
let lastPosition_cus =
  (carouselItemsLength_cus - slideLength_cus) * carouselItemWidth_cus;

prevBtn_cus.addEventListener("click", function () {
  currentPosition_cus -= stepWidth_cus;
  if (Math.ceil(currentPosition_cus) < 0) {
    currentPosition_cus = lastPosition_cus;
  }
  carouselItems_cus.style.transform = `translateX(${-currentPosition_cus}px)`;
});

nextBtn_cus.addEventListener("click", function () {
  currentPosition_cus += stepWidth_cus;
  if (Math.floor(currentPosition_cus) > lastPosition_cus) {
    currentPosition_cus = 0;
  }
  carouselItems_cus.style.transform = `translateX(${-currentPosition_cus}px)`;
  console.log(currentPosition_cus);
});

// accordion

const accordionItems = document.querySelectorAll(".accordion-item");
const accordionHeaders = document.querySelectorAll(".accordion-header");
let accordionSituation = document.querySelectorAll("accordion-situation");
const itemsLength = accordionItems.length;

for (let i = 0; i < itemsLength; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    const accordionContent = this.nextElementSibling;
    for (let j = 0; j < itemsLength; j++) {
      if (j == i) {
        continue;
      }
      accordionHeaders[j].nextElementSibling.style.maxHeight = null;
      accordionHeaders[j].parentNode.classList.remove("active");
     
    }
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionContent.parentNode.classList.remove("active");


    } else {
      this.parentNode.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      
    
    }
  });
}

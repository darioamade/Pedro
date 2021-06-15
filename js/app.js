"use strict";

const header = document.querySelector("header");
const main = document.querySelector(".main");
const navbar = document.querySelector(".navbar");
const menuOpen = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".close-svg");
const alllSection = document.querySelectorAll(".section");




const stickyNav = function (entries) {
    const [entry] = entries;
 console.log(entry);
  if (!entry.isIntersecting) 
 header.classList.add("stick")
 else 
  header.classList.remove("stick");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(main);


const revelSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});
alllSection.forEach(function (section) {
  sectionObserver.observe(section);

  section.classList.add("section--hidden");
});

menuOpen.addEventListener("click", function (e) {
  navbar.classList.toggle("nav-hidden");
  console.log('hewesgd');
});


menuClose.addEventListener("click", function (e) {
  navbar.classList.toggle("nav-hidden");
});
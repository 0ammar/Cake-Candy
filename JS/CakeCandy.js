// Switch landing
let landing = document.querySelector(".landing");
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
setInterval(() => {
  let count = Math.floor(Math.random() * imagesArray.length);
  landing.style.background = `url(Images/${imagesArray[count]})`;
}, 5000);
// Open bars
let bars = document.querySelector(".bars");
let links = document.querySelector(".links");
let allLinks = document.querySelectorAll(".link");

bars.onclick = function () {
  bars.children[0].classList.toggle("f1");
  bars.children[1].classList.toggle("s2");
  bars.children[2].classList.toggle("th3");
  links.classList.toggle("open");
};

allLinks.forEach((ele) => {
  ele.onclick = () => {
  ele.parentElement.classList.remove("open")
  bars.children[0].classList.remove("f1");
  bars.children[1].classList.remove("s2");
  bars.children[2].classList.remove("th3");
  }
});

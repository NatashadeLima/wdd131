
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();
document.getElementById("lastModified").textContent += formattedDate;


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open"); 
    hamburger.classList.toggle("open");
});



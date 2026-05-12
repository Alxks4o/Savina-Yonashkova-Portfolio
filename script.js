function slowScroll(event, id) {
  event.preventDefault();

  const element = document.getElementById(id);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


// Animated banner word duplication
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".group").forEach(group => {

    const original = group.innerHTML;

    let i = 0;

    while (group.scrollWidth < window.innerWidth && i < 10) {
      group.innerHTML += original;
      i++;
    }
  });

});


const card_details = [
  ["Film", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/image-1.jpg", "/film.html"],
  ["Advertising", "./assets/image-1.jpg", "/advertising.html"],
  ["Advertising", "./assets/image-1.jpg", "/advertising.html"],
  ["Advertising", "./assets/image-1.jpg", "/advertising.html"],
  ["Videography", "./assets/image-1.jpg", "/videography.html"]
];

const parent_grid = document.querySelector(".work-cards");

if (parent_grid) {
  card_details.forEach((card, index) => {

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.src = card[1];
    imageElement.alt = card[0];

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("slanted-bttn");

    const titleElement = document.createElement("a");
    titleElement.textContent = card[0];
    titleElement.href = card[2];


    imageElement.addEventListener("click", () => {
      window.location.href = card[2];
    });

    if (window.innerWidth > 900) {
      if (index === 0) {
        cardElement.classList.add("large");
      }

      if (index === 1) {
        cardElement.classList.add("tall");
      }

      if (index === 6 || index === 2) {
        cardElement.classList.add("wide");
      }
    }

    cardElement.appendChild(imageElement);

    titleDiv.appendChild(titleElement);
    cardElement.appendChild(titleDiv);

    parent_grid.appendChild(cardElement);

    cardElement.addEventListener("mouseout", () => {
      titleDiv.style.display = "block";
      titleDiv.querySelector("a").style.display = "block";
    });

    cardElement.addEventListener("mouseover", () => {
      titleDiv.style.display = "none";
      titleDiv.querySelector("a").style.display = "none";
    });
  });
}





// Sliding navigation (mobile)
const expandNav = document.querySelector(".expand-nav");
const retractNav = document.querySelector(".retract-nav");
const nav = document.querySelector("nav");

if (expandNav && retractNav && nav) {
  expandNav.addEventListener("click", () => {
    nav.classList.add("open");

    expandNav.style.display = "none";
    retractNav.style.display = "block";
  });

  retractNav.addEventListener("click", () => {
    nav.classList.remove("open");

    retractNav.style.display = "none";
    expandNav.style.display = "block";
  });
}
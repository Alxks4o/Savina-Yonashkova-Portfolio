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

    while (group.scrollWidth < window.innerWidth) {
      group.innerHTML += original;
    }

  });

});


const card_details = [
  ["Film", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/film.html"],
  ["Film", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/film.html"],
  ["Advertising", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/advertising.html"],
  ["Advertising", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/advertising.html"],
  ["Advertising", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/advertising.html"],
  ["Videography", "./assets/background video/bg-vid.mp4", "./assets/image-1.jpg", "/videography.html"]
];

const parent_grid = document.querySelector(".work-card");

card_details.forEach((card) => {
  // create card container
  const card_div = document.createElement("div");
  card_div.classList.add("card");

  // button div
  const bttn_div = document.createElement("div");
  bttn_div.classList.add("slanted-bttn");

  // button/link
  const bttn = document.createElement("a");
  bttn.href = card[3];
  bttn.innerText = card[0];

  // video
  const video = document.createElement("video");


  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  video.preload = "metadata";

  video.width = 1920;
  video.height = 1080;

  video.poster = card[2];

  const source = document.createElement("source");
  source.src = card[1];
  source.type = "video/mp4";

  video.appendChild(source);

  // image
  const thumbnail = document.createElement("img");

  thumbnail.src = card[2];

  thumbnail.width = 1920;
  thumbnail.height = 1080;

  thumbnail.loading = "lazy";
  thumbnail.decoding = "async";

  // assemble
  bttn_div.appendChild(bttn);

  card_div.appendChild(bttn_div);
  card_div.appendChild(video);
  card_div.appendChild(thumbnail);

  parent_grid.appendChild(card_div);

  thumbnail.addEventListener("mouseover", () => {
    video.style.display = "block";
    thumbnail.style.display = "none";
  });

  video.addEventListener("mouseout", () => {
    video.style.display = "none";
    thumbnail.style.display = "block";
  });
});



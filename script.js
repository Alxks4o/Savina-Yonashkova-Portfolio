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
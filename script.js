const imageContainers = document.querySelectorAll(".img-1");

imageContainers.forEach((container) => {
  const imageDescription = container.querySelector(".img-description");
  const imageSrc = container.querySelector(".load-img img").getAttribute("src");

  container.addEventListener("click", (event) => {
    if (event.target === container.querySelector(".load-img img")) {
      imageDescription.querySelector("p").textContent = `Description for ${container.querySelector(".load-img img").getAttribute("alt")}`;
      imageDescription.style.display = "block";
      container.querySelector(".load-img img").setAttribute("src", imageSrc);
      container.querySelector(".load-img img").focus();
    }
  });

  imageDescription.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      imageDescription.style.display = "none";
      container.querySelector(".load-img img").setAttribute("src", "");
    }
  });

  imageDescription.querySelector("button").addEventListener("click", () => {
    imageDescription.style.display = "none";
    container.querySelector(".load-img img").setAttribute("src", "");
  });
});
// About Me Logic

let isAboutMeDeployed = false;

document.querySelector(".about-button").addEventListener("click", () => {
  console.log("clicked")
  const aboutSection = document.querySelector("section");
  const expandIcon = document.querySelector(".expand-icon");
  if (isAboutMeDeployed) {
    aboutSection.classList.remove("deployed");
    expandIcon.classList.remove("rotated");
  }
  else {
    aboutSection.classList.add("deployed");
    expandIcon.classList.add("rotated");
  }
  isAboutMeDeployed = !isAboutMeDeployed
});

// Slider Logic

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

let image = 1;
prevButton.disabled = true;
prevButton.classList.add("button-disabled");

nextButton.addEventListener("click", (_e) => {
  slidesContainer.scrollLeft += slide.clientWidth;
  image++;
  
  if (prevButton.disabled) {
    prevButton.disabled = false;
    prevButton.classList.remove("button-disabled");
  };

  if (image === 3) {
    nextButton.disabled = true;
    nextButton.classList.add('button-disabled');
  };
});

prevButton.addEventListener("click", (_e) => {
  slidesContainer.scrollLeft -= slide.clientWidth;
  image--;

  if (nextButton.disabled) {
    nextButton.disabled = false;
    nextButton.classList.remove("button-disabled");
  };

  if (image == 1) {
    prevButton.disabled = true;
    prevButton.classList.add('button-disabled');
  };
});


// About Me Logic

const aboutSectionWrapper = document.querySelector(".about");
const aboutSection = document.querySelector(".about-section");
const expandIcon = document.querySelector(".expand-icon");
const navAboutButton = document.getElementById("nav-about-button");
const aboutButton = document.querySelector(".about-button");

let isAboutMeDeployed = false;

const expandAboutSection = (_e) => {
  aboutSectionWrapper.style.cssText = `min-height: ${aboutSection.scrollHeight + 8}px`;
  expandIcon.classList.add("rotated");
  isAboutMeDeployed = true;
};

const retractAboutSection = (_e) => {
  aboutSectionWrapper.style.cssText = `min-height: $0px`;
  expandIcon.classList.remove("rotated");
  isAboutMeDeployed = false;
};

aboutButton.addEventListener("click", () => {
  isAboutMeDeployed ? retractAboutSection() : expandAboutSection();
});

const getOffset = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
};

navAboutButton.addEventListener("click", (e) => {
  window.scrollTo(0, getOffset(aboutButton).top - 50);
  !isAboutMeDeployed && expandAboutSection();
});

// Slider Logic

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

let image = 1;
prevButton.disabled = true;
prevButton.classList.add("button-disabled");

window.addEventListener("resize", (_e) => {
  slidesContainer.scrollLeft = slide.clientWidth * (image - 1);
})

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


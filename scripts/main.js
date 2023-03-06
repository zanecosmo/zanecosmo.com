// About Me Logic

const aboutSectionWrapper = document.querySelector(".about");
const aboutSection = document.querySelector(".about-section");
const expandIcon = document.querySelector(".expand-icon");
const navAboutButton = document.getElementById("nav-about-button");
const aboutButton = document.querySelector(".about-button");

let isAboutMeDeployed = false;

window.addEventListener("resize", (_e) => {
  if (isAboutMeDeployed) {
    console.log(aboutSection.clientHeight)
    aboutSectionWrapper.style.cssText = `min-height: ${aboutSection.clientHeight + 8}px`;
  }
})

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

  console.log(window.scrollY, rect.top);

  return {
    top: window.scrollY + rect.top,
    left: window.scrollX + rect.left
  };
};

navAboutButton.addEventListener("click", (e) => {
  document.body.scrollTo(0, getOffset(aboutButton).top - 50);
  !isAboutMeDeployed && expandAboutSection();
});

// Profolio BUtton Logic

const navPortfolioButton = document.getElementById("nav-portfolio-button");
const portfolioButton = document.querySelector(".portfolio-button");
const projectSection = document.querySelector(".project-section");

const scrollToPortfolioSection = (_e) => {
  document.body.scrollTo(0, getOffset(projectSection).top - 50 - 30);
};

navPortfolioButton.addEventListener("click", scrollToPortfolioSection);
portfolioButton.addEventListener("click", scrollToPortfolioSection);

// Carousel Logic

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

// Touchscreen Dependent Logic

const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

if (supportsTouch) {
  const rootPseudo = document.querySelector(":root")
  rootPseudo.style.setProperty("--window-width", "100vw");
};

let lastTouchTime = 0;

const enableHover = () => {
  if (new Date() - lastTouchTime < 500) return;
  document.body.classList.add("hasHover");
};

const disableHover = () => {
  document.body.classList.remove("hasHover");
};

const updateLastTouchTime = () => {
  lastTouchTime = new Date();
};

document.addEventListener("touchstart", updateLastTouchTime, true);
document.addEventListener("touchstart", disableHover, true);
document.addEventListener("touchstart", enableHover, true);

enableHover();



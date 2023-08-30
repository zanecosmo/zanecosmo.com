// Nav Menu Logic

const navMenuButton = document.querySelector(".nav-menu-button");
const navMenu = document.querySelector(".nav-buttons");

let menuIsDeployed = false;

const retractNavMenu = (_e) => {
  navMenu.classList.remove("nav-menu-deployed");
  menuIsDeployed = false;
};

const deployNavMenu = (_e) => {
  console.log(menuIsDeployed);
  navMenu.classList.add("nav-menu-deployed");
  menuIsDeployed = true;
};

navMenuButton.addEventListener("click", (_e) => {
  menuIsDeployed ? retractNavMenu() : deployNavMenu();
});

document.querySelector("#nav-home-button").addEventListener("click", (_e) => {
  console.log("something")
  menuIsDeployed && retractNavMenu();
});

document.querySelector("#nav-resume-button").addEventListener("click", (_e) => {
  menuIsDeployed && retractNavMenu();
});

document.querySelector(".planet").addEventListener("click", (_e) => {
  menuIsDeployed && retractNavMenu();
});

// About Me Logic

const aboutSectionWrapper = document.querySelector(".about");
const aboutSection = document.querySelector(".about-section");
const expandIcon = document.querySelector(".expand-icon");
const navAboutButton = document.getElementById("nav-about-button");
const aboutButton = document.querySelector(".about-button");
const container = document.querySelector(".container");

let isAboutMeDeployed = false;

window.addEventListener("resize", (_e) => {
  menuIsDeployed && retractNavMenu();
  if (isAboutMeDeployed) {
    aboutSectionWrapper.style.cssText = `min-height: ${aboutSection.clientHeight + 8}px`;
  };
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
    top: container.scrollTop + rect.top,
    left: container.scrollLeft + rect.left
  };
};

navAboutButton.addEventListener("click", (e) => {
  container.scrollTo(0, getOffset(aboutButton).top - 50);
  menuIsDeployed && retractNavMenu();
  !isAboutMeDeployed && expandAboutSection();
});

// Portfolio BUtton Logic

const navPortfolioButton = document.getElementById("nav-portfolio-button");
const portfolioButton = document.querySelector(".portfolio-button");
const projectSection = document.querySelector(".project-section");

const scrollToPortfolioSection = (_e) => {
  menuIsDeployed && retractNavMenu();
  container.scrollTo(0, getOffset(projectSection).top - 50 - 30);
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
  menuIsDeployed && retractNavMenu();
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



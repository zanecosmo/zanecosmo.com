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



console.log("MOUSE ACTION EXISTS");

const backgroundWindow = document.querySelector("#window");

document.addEventListener("mousemove", (e) => {
    backgroundWindow.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
});
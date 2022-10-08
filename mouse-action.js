const backgroundWindow = document.querySelector("#window");
const background = document.querySelector("#background");

const randomNumber = (max, min) => Math.floor(Math.random() * (max - min) + min);

const drawCircumference = (x, y, radius, startAngle, endAngle) => {
    const ctx = background.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
};

const generateNodes = () => {
    const width = window.innerWidth;
    // const height = window.innerHeight;
    const height = document.getElementsByTagName("body")[0].scrollHeight;

    const nodeQuantity = Math.max(width, height);

    for (let i = 0; i < nodeQuantity; i++) {
        const X = randomNumber(0, width);
        const Y = randomNumber(0, height);

        const radius = randomNumber(0, 100)

        drawCircumference(X, Y, radius, 0, (2 * Math.PI));
    };
};

const resizeBackground = () => {
    background.width = window.innerWidth;
    // background.height = window.innerHeight;
    background.height = document.getElementsByTagName("body")[0].scrollHeight;
}

const clearPattern = () => {
    const ctx = background.getContext("2d");
    ctx.fillStyle = "#ededed"
    ctx.fillRect(0, 0, background.width, background.height)
};

resizeBackground();
generateNodes();

document.addEventListener("mousemove", (e) => {
    backgroundWindow.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    // background.style.transform = `translate(${(-1 * e.clientX + 50)}px, ${(-1 * e.clientY + 50)}px)`;
});

window.addEventListener("resize", () => {
    resizeBackground();
    clearPattern();
    generateNodes();
});
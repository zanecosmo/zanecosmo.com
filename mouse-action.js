const menu = document.querySelector(".menu");

console.log(menu.classList);

menu.addEventListener("click", (e) => {
    console.log("button clicked");
    document.getElementsByTagName("body")[0].classList.add("scroll-disabled");
    menu.classList.add("invisible");
    console.log(menu.classList);
});
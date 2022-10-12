const menu = document.querySelector("#link-icon");

console.log(menu.classList);
// menu.classList.add("invisible");
console.log(menu.classList);

menu.addEventListener("click", (_e) => {
    console.log("button clicked");
    document.getElementsByTagName("body")[0].classList.add("scroll-disabled");
});
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu_small");
let closea = document.querySelector(".close");
icon.addEventListener("click", () => (menu.style.right = "0%"));
closea.addEventListener("click", () => (menu.style.right = "-100%"));

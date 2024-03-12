let menu = document.querySelector("#menuIco");
let navabar = document.querySelector(".navbar");

menu.oclick = () => {
    menu.classList.toggle("bx-x");
    navabar.classList.toggle('active');

}


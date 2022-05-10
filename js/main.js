//Visa skroll knappen när man börjar skrolla på sidan
document.addEventListener("scroll", (e) => {
    let scroll = window.scrollY;
    let btn = document.getElementsByClassName("go-top")[0];
    if (scroll > 0) {
        btn.style = "opacity: 1;";
    } else {
        btn.style = "opacity: 0;";
    }
});

//Funktion för att smooth skrolla till toppen
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let menuOpen = false;

//Öppna och stänga meny för mobila enheter
function mobileToggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        //Open menu
        let menuElement = document.getElementsByTagName("ul")[0];
        menuElement.style.display = "flex";
    } else {
        //Close menu
        let menuElement = document.getElementsByTagName("ul")[0];
        menuElement.style.display = "none";
    }
}
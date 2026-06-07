// Animation légère du menu

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#111";
        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "#000";
        header.style.boxShadow = "none";
    }

});
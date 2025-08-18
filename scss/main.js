const carte_presantation = document.querySelector(".titre_portfolio");
const button_savoir = document.getElementById('button_savoir');
button_savoir.addEventListener("click", () => {
     carte_presantation.style.display = "block";

});
window.addEventListener("click", function (event) {
     if (event.target !== carte_presantation && event.target !== button_savoir) {
          carte_presantation.style.display = "none";
     }
});




function toggleDarkMode() {
     document.body.classList.toggle("dark-mode");
}



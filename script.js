const checkbox = document.getElementById("animate");
const carta = document.getElementById("carta");
const intro = document.getElementById("intro");

checkbox.addEventListener("change", () => {

  if (checkbox.checked) {

    setTimeout(() => {

      intro.style.display = "none";
      carta.style.display = "block";

    }, 4000);

  }

});
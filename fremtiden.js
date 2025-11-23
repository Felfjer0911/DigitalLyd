const knapp2 = document.getElementById("gen-knapp");
const accordion2 = document.getElementById("gen-accordion");

let lesMer2 = true;

function toggleAccordion2() {
    accordion2.classList.toggle("kort");
    lesMer2 = !lesMer2;

    if (lesMer2) {
        knapp2.innerHTML = "Les mer";
    } else {
        knapp2.innerHTML = "Les mindre";
    }
}

knapp2.addEventListener("click", toggleAccordion2);
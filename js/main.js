const buttonGriglia = document.getElementById("pulsanteGriglia");
const containerGriglia = document.querySelector(".grid-container");

buttonGriglia.addEventListener ("click", function () {

    generatoreGriglia(10);
    
});

/**
 * 
 * @param {number} numeroCelle 
 */

function generatoreGriglia(numeroCelle){

    const celleTotali = numeroCelle * numeroCelle;

    for (let i = 0; i < celleTotali; i++) {
        containerGriglia.innerHTML += '<div class="grid-cell"></div>';
        
    }
}
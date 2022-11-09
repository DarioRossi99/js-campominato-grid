const buttonGriglia = document.getElementById("pulsanteGriglia");

buttonGriglia.addEventListener ("click", function () {

    generatoreGriglia(10);
    
});

/**
 * @param {number} numeroCelle 
 */

function generatoreGriglia(numeroCelle){

    const containerGriglia = document.querySelector(".grid-container");
    const celleTotali = numeroCelle * numeroCelle;

    for (let i = 1; i < celleTotali; i++) {
        // containerGriglia.innerHTML += '<div class="grid-cell"></div>';
        // const cellaSelezionata = containerGriglia.querySelector(".grid—cell:last—child");
        // cellaSelezionata.addEventListener ("click")
        const cellaSelezionata = document.createElement("div");

        cellaSelezionata.classList.add("grid-cell")
        cellaSelezionata.style.flexBasis = 'calc(100% / ${numeroCelle})';
        cellaSelezionata.style.width = 'calc(100% / ${numeroCelle})';
        cellaSelezionata.addEventListener("click", function(){
            this.classList.toggle("bg-info");
            console.log("hai cliccato" + i)
        })

        containerGriglia.append(cellaSelezionata);

    }

    
       
}

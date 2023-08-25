let nomes = []
let professoes = []
let nome = document.getElementById("nome");
let prof = document.getElementById("prof");


function adc() {
    nomes.push(nome.value);
    professoes.push(prof.value);
    console.log(nomes, professoes);
}
function rmv() {
    let pos = nomes.indexOf(nome.value);
    if (pos !== -1) {
        nomes.splice(pos, 1);
        professoes.splice(pos, 1);


    }
    else {
        console.log("O nome " + nome + "não foi encontrado")
    }
    console.log(nome, professoes);

}


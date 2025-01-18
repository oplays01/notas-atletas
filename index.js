console.log("***** Resultados obtidos pelos atletas *****");

// Inputs

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

// Percorrer a matriz

atletas.forEach(function(ginasta){
    let nomes = ginasta.nome
    console.log("\nAtleta: " + nomes);

    let notas = ginasta.notas.sort()
    console.log("Notas obtidas: " + notas);

    // Descartar a menor e a maior nota

    let notasAComputar = ginasta.notas
    notasAComputar.sort(function(a,b){
        if(a > b) {
            return 1;
        }
        if(a < b) {
            return -  1;
        }
        else {
            return 0;
        }
    });

    let notasComputadas = notasAComputar.slice(1,4);

    // Fazer a média das notas

    let soma = 0;
    let media = 0;
    notasComputadas.forEach(function(notas){
        soma = soma + notas;

        media = soma / notasComputadas.length
        return media;
    });

    console.log("Média válida: " + media);
});

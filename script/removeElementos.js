// Função para remover elementos do início ou final do array
function removerElementos(array, escolha) {
    if (escolha === "inicio") {
      array.shift();
    } else if (escolha === "final") {
      array.pop();
    }
    return array;
  }
  
  // Array de nomes
  let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Heloisa"];
  
  // Removendo nome do início do array
  escolha = "inicio";
  nomes = removerElementos(nomes, escolha);
  console.log("Removendo no início:", nomes);
  
  // Removendo nome do final do array
  escolha = "final";
  nomes = removerElementos(nomes, escolha);
  console.log("Removendo no final:", nomes);
// Função para adicionar elementos ao início ou final do array
function adicionarElementos(array, nota, escolha) {
    if (escolha === "inicio") {
      array.unshift(nota);
    } else if (escolha === "final") {
      array.push(nota);
    }
    return array;
  }
  
  // Array de notas
  let notas = [7, 8.5, 9, 6.5, 8];
  
  // Adicionando nota no início do array
  let escolha = "inicio";
  notas = adicionarElementos(notas, 10, escolha);
  console.log("Adicionando no início:", notas);
  
  // Adicionando nota no final do array
  escolha = "final";
  notas = adicionarElementos(notas, 7.5, escolha);
  console.log("Adicionando no final:", notas);
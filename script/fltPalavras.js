// Função para filtrar palavras longas
function filtrarPalavrasLongas(array, comprimento) {
    return array.filter(palavra => palavra.length > comprimento);
  }
  
  // Array de strings
  let palavras = ["curto", "palavra", "longa", "muitoLonga", "enorme"];
  
  // Filtrando palavras com comprimento maior que 5
  let palavrasFiltradas = filtrarPalavrasLongas(palavras, 5);
  
  console.log("Palavras filtradas:", palavrasFiltradas);
  
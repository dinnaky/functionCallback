// Função para contar ocorrências de strings
function contarOcorrencias(array) {
    return array.reduce((contador, palavra) => {
      contador[palavra] = (contador[palavra] || 0) + 1;
      return contador;
    }, {});
  }
  
  // Array de strings
  let strings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
  
  // Contando ocorrências
  let ocorrencias = contarOcorrencias(strings);
  
  console.log("Ocorrências:", ocorrencias);
  
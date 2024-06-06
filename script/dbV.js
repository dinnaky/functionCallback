// Função para dobrar valores do array
function dobrarValores(array) {
    return array.map(num => num * 2);
  }
  
  // Array de números aleatórios
  numeros = [3, -5, 7, 8, -2, 1, -8, 4, -1, 6];
  
  // Dobrar os valores
  let numerosDobrados = dobrarValores(numeros);
  
  console.log("Array original:", numeros);
  console.log("Array dobrado:", numerosDobrados);
  
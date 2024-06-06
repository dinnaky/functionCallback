// Função para somar números positivos e imprimir elementos do array
function somarPositivos(array) {
    let soma = 0;
    array.forEach((num) => {
      if (num > 0) {
        soma += num;
      }
      console.log(num);
    });
    console.log("Soma dos positivos:", soma);
  }
  
  // Array de números aleatórios
  let numeros = [3, -5, 7, 8, -2, 1, -8, 4, -1, 6];
  
  // Chamando a função
  somarPositivos(numeros);
  
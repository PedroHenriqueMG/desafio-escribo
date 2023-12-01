function main(numero) {
  let soma = 0;

  //Verifica se o numero é inteiro positivo
  if (!Number.isInteger(numero) || numero < 0) {
    console.log("O número não é inteiro ou é negativo");
    return
  }

  // Verifica os números divisiveis por 3 ou 5 e realiza a soma
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  console.log(soma);
}

main(10);
main(11);
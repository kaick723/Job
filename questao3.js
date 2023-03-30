fetch('questao3.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  const faturamentoDiario =[questao3];  

// Cálculo do menor valor de faturamento diário
const menorFaturamento = Math.min(...faturamentoDiario);

// Cálculo do maior valor de faturamento diário
const maiorFaturamento = Math.max(...faturamentoDiario);

// Cálculo da média mensal de faturamento diário
const mediaMensal = faturamentoDiario.reduce((acc, curr) => acc + curr, 0) / faturamentoDiario.length;

// Cálculo do número de dias no mês em que o faturamento diário foi superior à média mensal
const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

// Impressão dos resultados
console.log(`Menor faturamento diário: R$ ${menorFaturamento}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
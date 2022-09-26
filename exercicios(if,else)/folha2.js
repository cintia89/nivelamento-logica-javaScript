// 1
var n1 = 5;
var n2 = 2;
var subtração = n1 - n2;
console.log(subtração);

// 2
var a = 1;
var b = 2;
var c = 1;
multiplicação = a * b * c;
console.log(multiplicação);

// 3
var d = 1;
var e = 1;
var f = 1;
var g = 1;
var soma = d + e + f + g;
console.log(soma);

// 4
var nota1 = 8;
var nota2 = 9;
var nota3 = 9;

var calculoMedia = (nota1 + nota2 + nota3) / 3;
console.log(calculoMedia.toFixed(2))

// 5
var pesoemKilo = 40;
calculoPesoemGrama = pesoemKilo * 1000;
console.log(calculoPesoemGrama);

// 6
var preçoProduto = 50;
var descontoPagaAvista = 0.1;
// forma de pagamento = ?
var impostoProdutoParcelado2x = preçoProduto;
var impostoProdutoParcelado4x = 0.05;
// var pagamento = "4 parcelas";


// if (pagamento === "avista") {
//     console.log(preçoProduto - (preçoProduto * descontoPagaAvista));
// }
// if (pagamento === "2 parcelas") {
//     console.log(preçoProduto);
// }
// if (pagamento === "4 parcelas") {
//     console.log(preçoProduto + (preçoProduto * impostoProdutoParcelado4x));
// }

// ou switch, case

let FormaDePagamento; // avista,2 parcelas ,4 parcelas
FormaDePagamento = 'avista';

switch(FormaDePagamento){
    case'avista':
    console.log(preçoProduto - (preçoProduto * descontoPagaAvista));
    break;

    case'2 parcelas':
    console.log(preçoProduto);
    break;

    case'4 parcelas':
    console.log(preçoProduto + (preçoProduto * impostoProdutoParcelado4x));
    break;
}

// // 7 
// /*Salario + 25%
// mostrar novosalario */
// var salario = 1000;
// var aumento = salario * 1.25;
// // var novo_Salario= salario + aumento;
// console.log(aumento);

// //8
// /* 
// salario=
// aumento2= 15%
// valor aumento
// novo_salario2
// */
// const salario4 = 1000;
// var valorAumento = salario4 * 0.15;
// console.log(valorAumento);
// const novo_salario2 = valorAumento + salario4;
// console.log(novo_salario2);

// /*
// 9.
// gradificação + 5%
// imposto -7%
// */
// const salarioBruto = 1000;
// const imposto2 = 0.07;
// const salarioAumento = salario * 1.05;
// console.log(salarioAumento);
// const salarioImposto = salarioAumento * 0.07;
// const salarioFinal = salarioAumento - salarioImposto;
// console.log(salarioFinal);

// /*
// 10.
// nome=
// dataNasc= (dia, mes, ano)
// dia viveu ?
// mes 30 dias
// ano 365 dias
// */
// const nome = "Cíntia";
// const anoNasc = 1989;
// const anoAtual = 2022;
// const mesNasc = 10;
// const mesAtual = 9;
// let idade = anoAtual - anoNasc;

// if (mesNasc > mesAtual) {
//     idade = idade - 1;
//     console.log("não completou mais um ano de vida");
// }
// let mesDias = mesAtual * 30;

// const diasDeVida = idade * 365 + mesDias;
// console.log(nome, diasDeVida);

// /* 11.
// sobrenome=
// nome=

// */

// const nomeN = "Cíntia";
// const sobrenome = "Oliveira";

// console.log('Sr(a).' + ' ' + nomeN + ' ' + sobrenome + ' ' + 'é uma honra contar com sua presença!')

//ou templete string

console.log(`Sr(a). ${nomeN} ${sobrenome} 
é uma honra contar com sua presença!`)
// /*
// 12.
// valor catetos ?
// valor hipotenusa
// calculo (h²= c1 ²+ c2 ²)
// */

// let c1 = 9;
// let c2 = 12;
// c1 = (9 ** 2);
// c2 = 12 ** 2;
// let catetos = c1 + c2;
// let hipotenusa = catetos ** (1 / 2);
// console.log(hipotenusa);

// /*
// 12.
// Triangulo;
// base 
// altura 
// area ?
// area= base * altura /2
// */
// const base = 8;
// const altura = 6;
// let area = base * altura / 2;
// console.log(area);

// /*
// area do circulo

// */
// let raio = 3;
// let areaCirculo = 3.14 * 3 ** 2;
// console.log('area do circulo', areaCirculo)

// /*
// 14.
// */
// let numero = 20;
// let quadrado = numero ** 2;
// let cubo = numero ** 3;
// let raizQuadrada = numero ** (1 / 2);
// let raizCubica = numero ** (1 / 3);
// if (numero > 0) {
//     console.log('a', quadrado, 'b', cubo, 'c', parseFloat(raizQuadrada.toFixed(2)), 'd', parseFloat(raizCubica.toFixed(2))) ;
// }
// //16.

// let numero1= 4;
// let numero2= 2;

// let resultado= numero1 ** numero2;
// console.log('potencia', resultado);

// /*17.medidasPolegadas= ;240,00012
// medidaJardas= 20/3;6,66667
// medidasMilhas= ;0,003787880681*/
// medidaPés= 50;
// medidasPolegadas= medidaPés*12;
// medidaJardas= medidaPés/3;
// medidasMilhas= medidaPés/ 1760;
// console.log(parseFloat(medidasPolegadas.toFixed(2)), parseFloat(medidaJardas.toFixed(2)), parseFloat(medidasMilhas.toFixed(2)));

// let anoNascimento2 = 2021;
// let anoAtual2 = 2022;

// let idade2 = anoAtual2 - anoNascimento2;
// let idade2050 = 2050 - anoNascimento2;
// console.log(idade2, idade2050);

// //19.

// let preçoFabrica= 20.000;
// let lucroDistribuidor = 0.50;
// let persentualImposto = 0.10;

// let lucro = preçoFabrica * lucroDistribuidor;
// let impost = preçoFabrica * persentualImposto;
// let preçoFinal = lucro + impost +preçoFabrica;
// console.log(lucro, impost, preçoFinal);

// //20.
// let horaTrabalhada= 20;
// let salarioMinimo= 100;
// let valorHora = 1/10 * salarioMinimo;
// let salarioBruto1 = valorHora  * horaTrabalhada;
// let ImpostoSalario = 0.03 * salarioBruto1;
// let salario_Receber = salarioBruto1 - ImpostoSalario;
// console.log(valorHora, salarioBruto1, salario_Receber );


// //21.
// let hora= 2;
// let minutos= 60;
// let horaMinuto= hora*60;
// let totalMinutos= minutos + horaMinuto;
// let Minuto_Segundo= totalMinutos * 60 ;
// console.log(horaMinuto, totalMinutos, Minuto_Segundo);


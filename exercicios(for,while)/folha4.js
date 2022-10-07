// while -> ENQUANTO
// For   -> PARA
// exercicio 1 
// let count = 0;

const { number } = require('prop-types');

// while (count <= 40) {
//     console.log(count++);
//     // count = count + 1;
// }

//exercicio 2
// let n1= 0;
// while (n1 <= 5){
//     console.log(n1);
//     n1= n1 + 1;
// }

//exercicio 3 
const prompt = require('prompt-sync')();

// let m= prompt('digite um numero: ');
// let n= 10;

// while(m < n){
//     console.log(m++);
// }

//exercicio 4
// let m = 5;
// let n = 30;

// for (i= m; i < n; i++){
//     if(i % 2 ==1 ){
//        console.log(i)
//     }
// }

//exercicio 5
// let m = 4;
// let n = 14;
// let count = 0;

// for (i = m ; i < n; i++){
//     if(i % 2 == 0 ){
//         count++
//                console.log(i)
//             }
// } console.log(count)

//exercicio 6
// let m = 3;
// let n = 14;

// for(i=m; i< n; i++){
//     if(i % 3 ===0){
//         console.log(i)
//     }
// }

//exercicio 7
// let m = 3;
// let n = 14;
// let i = 2;

// for ( j = m; j < n; j+=i) {
//     console.log(j);
// }

/*exercicio 8 
templete string ou concatenação
*/

// let n = 5;
// let maior = 0;
// let menor = 9999;

// for (i = 1; i <= n; i++) {
//     let valor = parseInt(prompt(`digite o ${i}º: `))
//     if (valor > maior) {
//         maior = valor
//     }
// console.log(`maior = ${maior}`)
// if (valor < menor) {
//     menor = valor
// }
// console.log(`menor = ${menor}`)
// }
// console.log(`maior = ${maior},menor = ${menor}`)

// exercicio 9
// let N = 4;
// let maior1 = 0;
// let maior2 = 0;
// let maior3 = 0;
// 
// for (i = 1; i <= N; i++) {
//     let valor = parseInt(prompt(`digite o valor ${i}º: `))
//     if (valor > maior1) {
//         maior2 = maior1
//         maior1 = valor 

//     }else if (valor > maior2) {
//         maior2 = valor 
//     }
//     console.log(`1 maior = ${maior}, 2 maior = ${maior2}`)
// }

//10 ( m2 e n6 = m2, m3, m4, m5, m6) (soma )
// let M = parseInt(prompt("digite o valor de m: "));
// let N = parseInt(prompt("digite o valor de n: "));
// for (i = M; i <= N; i++) {
//     console.log(i);
// if (i<= N){
//     let soma = i + N; // 2+6
//     soma = soma + i; // 8 + 2, 10 + 2 ...
//     console.log(soma)
// }
// }

// exercicio 11
// let V = 0;
// let count = 0;

// while(V > -1){
//     V++;
//     count ++;
//     V = parseInt(prompt("digite o valor de m: "));
//     console.log(V);
// }console.log(count);

// exercicio 12
// let v = 0;
// let valores= 0;

// while(v > -1){
//     v++;
//     v= parseInt(prompt("digite um valor: "));
//     console.log(v);
//     valores = v + valores
//     console.log(valores)

// }

// exercicio 13
// let v = 0;


// while(v > -1){
//     v++;
//     v= parseInt(prompt("digite um valor: "));
//     console.log(v);
//     if(v % 2 == 0){
//         console.log(v, "par");
//     }else if (v % 2 == 1){
//         console.log(v, "impar");
//     }
// }

//exercicio 14 - (10, 20,    6, 24   -1)
// let v = 0;

// while(v > -1){
//     v++;
//     v= parseInt(prompt("digite um valor: "));
//     console.log(v);
//     if ( v % 2 ==0 && v% 5 ==0){
//         console.log(v, 'divisor 5 e 2')
//     }if(v % 2==0 && v % 3 ==0){
//         console.log(v, 'divisor 2 e 3')
//     }
// }

/*exercicio 15 
quantidade de pares. quantidade de impar
media pares, media geral dos numeros
encerra com 0
*/
// let num = 5;
// let count= 0;
// let count1= 0;

// for(i=1; i < num; i++){
//     numeros = parseInt(prompt("digite um valor: "));
//     console.log(numeros)
//     if(numeros % 2 == 0){
//         count++

//      }
//     if(numeros % 2 == 1){
//         count1++

//     }
//     let media = count + numeros / 2;
//     console.log(media, 'media pares')
// }      
// console.log( 'quantidade de numeros impares digitados', count1)
// console.log('quantidade de numeros pares digitados', count)

/* exercicio 16. 
10 alunos
numero de medias = ?
nome aluno = ?
descobrir maior media e nome aluno
*/
// let mediaAluno = 0;
// let nomeAluno = "";
// let maiorMedia = 0;
// let alunoMaiorMedia= "";

// let turma = 10;
// for (i = 0; i < turma; i++) {
//     nomeAluno = prompt("digite nome do aluno: ");
//     mediaAluno = parseInt(prompt("digite á media: "));
//     if (mediaAluno > maiorMedia) {
//         maiorMedia = mediaAluno
//         alunoMaiorMedia = nomeAluno        
//     }
// } console.log(`maior media: ${maiorMedia} ,nome do aluno: ${alunoMaiorMedia}`)

/* 
exercicio 17.  
nome= ?
media=?
parar aluno fim
media todos alunos e numero de alunos informados a media
*/
// let nomeAluno= "";
// let mediaAluno=0;
// let count= 0;
// //let somaMediaAlunos= (nota1 + nota2 + nota3)/3
// let somaMediaAlunos= 0

// while(nomeAluno != 'fim'){
//     nomeAluno= prompt("digite nome do aluno: ");
//     if(nomeAluno === "fim"){
//         break
//     }
//     mediaAluno = parseInt(prompt("digite á media: "));
//     somaMediaAlunos += mediaAluno
//     count++
// console.log(`${somaMediaAlunos} -> ${count}`)
// }console.log(`media de todos os alunos: ${somaMediaAlunos / count},
//  quantidade de alunos que informaram a media: ${count}`)

/* 
exercicio 18.
1polegada = 2,54cm
*/
// let polegadasEmCm = 0;
// for(i=1; i <= 20; i++){
//     console.log(i)
//     polegadasEmCm = i* 2.54;
//     console.log(parseFloat(polegadasEmCm))
// }
//exercicio 19

// let multiblicacao = 0;
// let numero= 5;
// for(i=1; i <= 10; i++){
//     multiplicacao = i* numero;
//     console.log(parseFloat(multiplicacao))
// }

//exercicio 20
// let n= parseInt(prompt("digite á media: "));
// 4=2   9=3 16=4 25=5, 36=6  49=7  33=5,75

// let quadrado = n ** (1 / 2);
// let n = 1;

// while (n != 0) {
//     n= parseInt(prompt("digite um numero: "));
//     console.log(`valor ${n}`)
//     n = n ** (1 / 2);
//     if(n === 0){
//         break
//     }
//     if (n % 1 === 0) {
//     console.log(`valor quadrado inteiro ${n}`)
//     }
//     else{
//     console.log(`valor quadrado quebrado ${n}`)
//     } 
// }

//exercicio 21 - primos
let p = 0;
while (p >= 0) {
    p = parseInt(prompt("digite um numero: "));
    if (p % 2 == 0) {
        console.log(`numero não é primo: ${p}`)
    }
    else if (p % 1 === 0 && p % p === 0) {
        console.log(`numero é primo: ${p}`)
    }
}

//exercicio 22
// let dividendo = 20;
// let divisor = 5;
// let quociente = 0;
// let x = dividendo;
// while (x >= divisor){
//     x = x - divisor
//     quociente = quociente + 1
//     resto = x
// console.log(`${dividendo / divisor} = ${quociente} (quociente) ${resto} (resto)`)
// }

/*exercicio 23  
16 - 4

16 - 1 - 1
15 - 3 - 2
12 - 5 - 3
7  - 7 - 4
0
*/
// 
let numero=16;
let count = 0;
let impar= 1;
let num= numero;

while(numero > 0){
    console.log(`${impar}`)    // 1
    numero -= impar           //numero = numero - impar // 15
    impar += 2        // 3, 5, 7  // impar = impar + 2
    count++
}console.log(`valor raiz quadrada de ${num} é ${count}`)

//exercicio 24 -> não esta imprimindo só 5 valores 
// digite um numero: 3, digite um numero: -1 -> é negativo, quantidade de numeros negativos 1

// let count = 0; // contar até 5 numeros
// let a= 0; // ler os numero digitados
// let countNegativo = 0; // contar os numeros negativos

// while (count < 5) {
//     count++
//     a = parseInt(prompt("digite um numero: "));
//     if (a < 0) {
//         countNegativo++
//         console.log(`numero negativo, quantidade de numeros negativos ${countNegativo}`)
//     }
// }

/* exercicio 25.
26.90 por hora
10 % homem   6% mulher
termina codigo -11
codigo é id de funcionarios
*/
// const codigoEx = 0;
// const sexoEx = "feminino"// "masculino e feminino";
// const horaTrabalhada1 = 6; // 26,90 * 6 =
// const valorHora1 = 26.90;
// const salarioLiquido1 = horaTrabalhada1 * valorHora1;  // sem desconto
// let salarioBruto1 = 0; //salarioLiquido * desconto;// com desconto
// const media1 = salarioLiquido1 / 1;

// let descMasculino1 = 10 / 100;
// let descFeminino1 = 6 / 100;
// // uma funcionaria
// // if (sexoEx === "feminino") {
// //     salarioBruto1 = salarioLiquido1 - salarioLiquido1 * descFeminino1
// // }
// // console.log(`salario Bruto: ${salarioBruto1.toFixed(2)} 
// // salario liquido: ${salarioLiquido1.toFixed(2)}
// // media: ${media1.toFixed(2)}`)

// varios funcionarios usando while
// let codigo = 0;// codigo dos funcionarios
// let sexo = "";// "masculino e feminino";
// const horaTrabalhada = 6; // 26,90 * 6 =
// const valorHora = 26.90;
// let salarioLiquido = horaTrabalhada * valorHora;  // sem desconto
// let salarioBrutoF = 0; //salarioLiquido * desconto;// com desconto
// let salarioBrutoM = 0;
// let contador = 0; //quantidade de funcionarios 
// let contadorF = 0;
// let contadorM = 0;
// let descMasculino = 10 / 100;
// let descFeminino = 6 / 100;
// let mediaSalarialFuncionariosF = 0;
// let mediaSalarialFuncionariosM= 0;

// while (codigo !== -11) {
//     if (codigo === -11) {
//         break
//     }
//     contador++
//     codigo = parseInt(prompt(`digite o código: `))
//     sexo = prompt("feminino ou masculino: ")

//     if (sexo === "feminino") {
//         contadorF ++
//         mediaSalarialFuncionariosF = salarioLiquido / contadorF
//         salarioBrutoF = salarioLiquido - salarioLiquido * descFeminino
        
//     } if (sexo === "masculino") {
//         contadorM ++
//         mediaSalarialFuncionariosM= salarioLiquido / contadorM
//         salarioBrutoM = salarioLiquido - salarioLiquido * descMasculino
        
//     }
// }
// console.log(`salario Bruto Feminino: ${salarioBrutoF.toFixed(2)} 
// salario Bruto Masculino: ${salarioBrutoM.toFixed(2)}
// salario liquido: ${salarioLiquido.toFixed(2)}
// funcionários: ${contador}
// media Salarial Funcionarios Feminino ${mediaSalarialFuncionariosF.toFixed(2)}
// media Salarial Funcionarios Masculino ${mediaSalarialFuncionariosM.toFixed(2)}`)

//exercicio 26
// let salario_Habitantes = 0;
// let contador = 0;
// let numero_filho = 0;
// let media_salarial = 0;
// let habitantes = 0;
// let media_habitantes = 0;
// let numeroTotal_filho = 0;
// let salarioTotal_Habitantes = 0;
// let maior_salario = 0;
// let menor100 = 0;
// let contadorSalario_menor100 = 0;
// let percentualSalario = 0;
// let percentualSalario_ate100 =0;

// for (i = 0; i >= 0; i++) {
//     contador++
//     let salario_Habitantes = parseInt(prompt(`digite seu salário: `))
//     if (salario_Habitantes < 0) {
//         break
//     }
//     let numero_filho = parseInt(prompt(`digite quantos filhos tem: `))
//     numeroTotal_filho += numero_filho       // salarioTotal_Habitantes recebe todos os valores do salario_Habitantes
//     salarioTotal_Habitantes += salario_Habitantes // salarioTotal_Habitantes recebe todos os valores do salario_Habitantes
//     media_salarial = salarioTotal_Habitantes / contador
//     habitantes = numeroTotal_filho + contador
//     media_habitantes = habitantes / 2
//     if (salario_Habitantes > maior_salario) {
//         maior_salario = salario_Habitantes
//     }
//     if(salario_Habitantes <= 100){
//         contadorSalario_menor100 ++
//         menor100 += salario_Habitantes
//         percentualSalario = contadorSalario_menor100 * 100
//         percentualSalario_ate100 =  percentualSalario / contador
//     }

// }

// console.log(` media do salario: ${media_salarial}
// media habitantes: ${media_habitantes}
// quantos adultos recebem salarios até 100 reais: ${contadorSalario_menor100}
// percentual dos Salarios até 100 reais: ${percentualSalario_ate100}
// maior salario: ${maior_salario}
// adultos: ${i} filhos: ${numeroTotal_filho}`)

//exercicio 27    
//ze cresce 3 chico crece 2 (quantos anos deva ze maior que chico)
// let chico = 1.50;
// let ze = 1.10;
// let count = 0;          //ano

// while (chico > ze) {
    
//         ze += 0.03
//         count++
//         console.log(ze.toFixed(2), "ze")
//         chico += 0.02
//         console.log(chico.toFixed(2), "chico")
//     if(ze > chico){
//         break
//     }
           
// }
// console.log(`em ${count} anos zé sera maior que chico`)


// APRENDENDO CONDICIONAIS
// BRINCADEIRA MORTO OU VIV0
// let comando = "vivo"; //morto ou vivi

// if (comando === "morto") {
//     console.log('criança devem se abaixar')
// }
// else if (comando === "vivo") {
//     console.log('criança fica de pé')
// }
// else { console.log("criança fica na mesma posição") }

// // let comando = "morto"; //morto ou vivi
// switch (comando) {
//     case 'morto':
//         console.log('criança devem se abaixar');
//         break;

//     case 'vivo':
//         console.log('criança fica de pé');
//         break;

//     default:
//         console.log("criança fica na mesma posição")

// }

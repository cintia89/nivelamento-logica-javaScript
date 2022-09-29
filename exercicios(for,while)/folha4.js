// ENQUANTO

//1
// let count = 0;

// while (count <= 40) {
//     console.log(count++);
//     // count = count + 1;
// }

//2
// let n1= 0;
// while (n1 <= 5){
//     console.log(n1);
//     n1= n1 + 1;
// }

//3 ( 5 -> 6, 7, 8, 9)
const prompt = require('prompt-sync')();

// let m= prompt('digite um numero: ');
// let n= 10;

// while(m < n){
//     console.log(m++);
// }

//4
// let m = 5;
// let n = 30;

// for (i= m; i < n; i++){
//     if(i % 2 ==1 ){
//        console.log(i)
//     }
// }

//5
// let m = 4;
// let n = 14;
// let count = 0;

// for (i = m ; i < n; i++){
//     if(i % 2 == 0 ){
//         count++
//                console.log(i)
//             }
// } console.log(count)

//6
// let m = 3;
// let n = 14;

// for(i=m; i< n; i++){
//     if(i % 3 ===0){
//         console.log(i)
//     }
// }

//7
// let m = 3;
// let n = 14;
// let i = 2;

// for ( j = m; j < n; j+=i) {
//     console.log(j);
// }

/*8 
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

// 9
// let N = 4;
// let maior1 = 0;
// let maior2 = 0;
// let maior3 = 0;
// 4 6 5 1
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

// 11
// let V = 0;
// let count = 0;

// while(V > -1){
//     V++;
//     count ++;
//     V = parseInt(prompt("digite o valor de m: "));
//     console.log(V);
// }console.log(count);

// 12
// let v = 0;
// let valores= 0;

// while(v > -1){
//     v++;
//     v= parseInt(prompt("digite um valor: "));
//     console.log(v);
//     valores = v + valores
//     console.log(valores)

// }

// 13
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

//14- (10, 20,    6, 24   -1)
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

/*15 quantidade de pares. quantidade de impar
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

/* 16. 
3 alunos
numero de medias = ?
nome aluno = ?
descobrir maior media e nome aluno
*/
// let mediaAluno = 0;
// let nomeAluno = "";
// let maiorMedia = 0;
// let alunoMaiorMedia= "";

// let turma = 3;
// for (i = 0; i < turma; i++) {
//     nomeAluno = prompt("digite nome do aluno: ");
//     mediaAluno = parseInt(prompt("digite á media: "));
//     if (mediaAluno > maiorMedia) {
//         maiorMedia = mediaAluno
//         alunoMaiorMedia = nomeAluno        
//     }
// } console.log(`maior media: ${maiorMedia} ,nome do aluno: ${alunoMaiorMedia}`)

/* 
17.  
nome=
media=
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
18.
1polegada = 2,54cm
*/
// let polegadasEmCm = 0;
// for(i=1; i <= 20; i++){
//     console.log(i)
//     polegadasEmCm = i* 2.54;
//     console.log(parseFloat(polegadasEmCm))
// }
//19

// let tabu = 0;
// let numero= 5;
// for(i=1; i <= 10; i++){
//     tabu = i* numero;
//     console.log(parseFloat(tabu))
// }

//20
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

//21 primo
// let p = 0;
// while (p >= 0) {
//     p = parseInt(prompt("digite um numero: "));

//     if (p % 2 == 0) {
//         console.log(`numero não é primo: ${p}`)
//     }

//     else if (p % 1 === 0 && p % p === 0) {
//         console.log(`numero é primo: ${p}`)
//     }

// }
//22
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

//23


//24


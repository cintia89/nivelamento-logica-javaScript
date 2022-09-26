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

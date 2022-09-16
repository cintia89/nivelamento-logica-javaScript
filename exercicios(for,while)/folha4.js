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

//3
// let m= 0;
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
const prompt = require('prompt-sync')();
let n = 5;
let maior = 0;
let menor = 9999;

for (i = 1; i <= n; i++) {
    let valor = parseInt(prompt(`digite o ${i}º: `))
    if (valor > maior) {
        maior = valor
    }
    // console.log(`maior = ${maior}`)
    if (valor < menor) {
        menor = valor
    }
    // console.log(`menor = ${menor}`)
}
console.log(`maior = ${maior},menor = ${menor}`)

9
let N = 4;
let maior1 = 0;
let maior2 = 0;
let maior3 = 0;
// 4 6 5 1
for (i = 1; i <= N; i++) {
    let valor = parseInt(prompt(`digite o valor ${i}º: `))
    if (valor > maior1) {
        maior2 = maior1
        maior1 = valor 

    }else if (valor > maior2) {
        maior2 = valor 
    }
    console.log(`1 maior = ${maior}, 2 maior = ${maior2}`)
}

//10





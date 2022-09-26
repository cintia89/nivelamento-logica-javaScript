// 1
let a= 1;
let b= 1;
let c= 1;
let soma= a + b + c;
console.log(soma); 

let d= 2;
let e= 2;
let divisão= d / e ;
console.log(divisão);

let anoNasc = 1989;
let anoAtual = 2022;
let idade = anoAtual - anoNasc;
if(idade > 18){
console.log("maior de idade");
}else {console.log("menor de idade");}

// 1.4
let nota1= 10;
let nota2= 8;

let calculoMedia= nota1 + nota2 / 2;
if(calculoMedia >= 5){
    console.log("Aprovada");
}else{console.log(reprovada);}

// 2.1 
let n1 = 1;
let n2 = 1;
if(n2 == 0){
    console.log("não pode acontecer o calculo");
}else{console.log(n1/n2);}

// 2.2
let numerador = 5;
let denominador= 5;
if(denominador == 0){
    console.log("não pode acontecer o calculo");
}else{console.log(numerador/denominador);}

// 2.3
// let salario = 5000;
// let porcentualDe20= 0.20;
// let aumento= salario * porcentualDe20;
// let novoSalario = salario + aumento;

// let porcentualDe10= 0.10;
// let aumento2= salario * porcentualDe10;
// let novoSalario2= salario+ aumento2;


// if(salario == 2500){
//    console.log(novoSalario); 
// }if(salario > 2500){
//     console.log(novoSalario2);
// }
// outra forma de fazer lógica
let imposto= 0.2 ;
let salario= 3000;

if (salario > 2500){
    imposto= 0.1;
}
let aumento=salario * imposto;
let novoSalario= salario + aumento;
console.log(novoSalario);

// 2.4
// let notas1 = 4;
// let notas2 = 5;
// let notas3 = 3;
// let notas4 = 2;
// let mediaNotas = (notas1 + notas2 + notas3 + notas4) /4
// console.log(mediaNotas);

// if(mediaNotas >= 7){
//     console.log("aprovado");
// } if(mediaNotas < 7 && mediaNotas >= 4){
//     console.log("em exame");
// }else{
//     console.log("reprovado");
// }


// 1
var a= 1;
var b= 1;
var c= 1;
var soma= a + b + c;
console.log(soma); 

var d= 2;
var e= 2;
var divisão= d / e ;
console.log(divisão);

var anoNasc = 1989;
var anoAtual = 2022;
var idade = anoAtual - anoNasc;
if(idade > 18){
console.log("maior de idade");
}else {console.log("menor de idade");}

// 1.4
var nota1= 10;
var nota2= 8;

var calculoMedia= nota1 + nota2 / 2;
if(calculoMedia >= 5){
    console.log("Aprovada");
}else{console.log(reprovada);}

// 2.1 
var n1 = 1;
var n2 = 1;
if(n2 == 0){
    console.log("não pode acontecer o calculo");
}else{console.log(n1/n2);}

// 2.2
var numerador = 5;
var denominador= 5;
if(denominador == 0){
    console.log("não pode acontecer o calculo");
}else{console.log(numerador/denominador);}

// 2.3
var salario = 5.000;
var porcentualDe20= 0.20;
var aumento= salario * porcentualDe20;
var novoSalario = salario + aumento;

var porcentualDe10= 0.10;
var aumento2= salario * porcentualDe10;
var novoSalario2= salario+ aumento2;


if(salario == 2.500){
   console.log(novoSalario); 
}if(salario > 2.500){
    console.log(novoSalario2);
}

var imposto= 0.2 ;
var salario= 3000;

if (salario > 2500){
    imposto= 0.1;
}
var aumento=salario * imposto;
var novoSalario= salario + aumento;
console.log(novoSalario);

// 2.4
var notas1 = 4;
var notas2 = 5;
var notas3 = 3;
var notas4 = 2;
var mediaNotas = (notas1 + notas2 + notas3 + notas4) /4
console.log(mediaNotas);

if(mediaNotas >= 7){
    console.log("aprovado");
} if(mediaNotas < 7 && mediaNotas >= 4){
    console.log("em exame");
}else{
    console.log("reprovado");
}


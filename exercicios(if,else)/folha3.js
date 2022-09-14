//1
let n1 = 40;
let n2 = 20;
let adição = n1 + n2;
if (adição > 50) {
    console.log(adição);
}

//2
let valor = 100;
let quantidade = 200;
let valorTotal = valor + quantidade;
if (valorTotal > 100.00) {
    console.log(valorTotal);
}

//3
let n = 11;
if (n % 2 == 0) {
    console.log('par');
} else { console.log('impar') }

//4
let N = -1;

if (N > 0) {
    console.log('positivo');
} if (N < 0) {
    console.log('negativo');
} else if (N == 0) { console.log('nulo') }

let n_1 = 5;
let n_2 = 10;
let adição2 = n_1 + n_2;
if (adição2 > 20) {
    console.log(adição2 + 8)
} else if (adição2 <= 20) {
    console.log(adição2 - 5)
}

//6
let A = -25;
let raiz = A ** (1 / 2);
let potencia1 = A ** 2;
if (A >= 0) {
    console.log(raiz);
} else if (A < 0) {
    console.log(potencia1);
}

//7
let B = 19;
if (B % 3 == 0) {
    console.log('multiplo por 3');
} else if (B % 3 == 1) {
    console.log('não multiplicador');
}

//8
let A1 = 20;
let B1 = 3;

if (A1 % B1 == 0) {
    console.log('é divisivel')
} else { console.log('não é') }

//9
const n3 = 10;
const n4 = 5;
if (n3 > n4) {
    console.log('n3 é maior')
} else { console.log('n4 é maio') }

//10 não ultrapassar salario
let salarioBruto2 = 800;
let valorMaximoPrestação = salarioBruto2 * 0.30;
console.log('30%', valorMaximoPrestação)
let valorPrestação = 300;

if (valorPrestação < valorMaximoPrestação) {
    console.log('emprestimo aceito');
}
else { console.log('emprestimo não aceito') }

//11
const d = 5;
const e = 10;
const f = 15;
const g = 20;

if (d < e) {
    if (d < f) {
        if (d < g) {
            console.log('menor', d);
        }
    }
}
if (g > d) {
    if (g > e) {
        if (g > f) {
            console.log('maior', g);
        }
    }
}

//12 ascendente
const A3 = 20;
const B3 = 50;
const c3 = 5;

if (c3 < A3) {
    if (c3 < B3) {
        console.log('menor', c3);
    }
} if (A3 > c3) {
    if (A3 < B3) {
        console.log('meio', A3)
    }
} if (B3 > A3) {
    if (B3 > c3) {
        console.log('maior', B3)
    }
}

// if(B3 > A3 && B3 > c3) {
//     console.log('maior', B3);
// }

//13 descendente
const A4 = 20;
const B4 = 50;
const C4 = 5;


if (B4 > A4) {
    if (B4 > C4) {
        console.log('maior', B4)
    }
} if (A4 > C4) {
    if (A4 < B4) {
        console.log('meio', A4)
    }
} if (C4 < A4) {
    if (C4 < B4) {
        console.log('menor', C4);
    }
}

const num = 11;
if (num % 2 === 0) {
    console.log('é divisilvel por 2');
} if (num % 5 === 0) {
    console.log('é divisilvel por 5');
} if (num % 10 === 0) {
    console.log('é divisilvel por 10');
} else if (num % 2 === 1 || num % 2 === 1 || num % 2 === 1) {
    console.log('não é divisivel');
}

const number = 12;

if (number >= 20 && number <= 90) {
    console.log('esta na faixa 20 á 90');
} else { console.log('não esta na faixa 20 á 90'); }

//16
let C6 = 1;
if(C6 === 5 || C6 === 200 || C6 === 400){
    console.log('é igual á 5 ou 200 ou 400');
} else if(C6 >= 500 && C6 <= 1000){
    console.log('esta entre 500 e 1000');
}else{console.log('esta fora dos escopos anteriores')}

//  (C6 === 200 || C6 === 5 || C6 === 10 ? true : false) TERNARIO

//17
let A5 = 20;
let B5 = 50;

if (A5 < B5) {
    console.log('menor,quadrado', A5 ** 2);
} if (A5 > B5) {
    console.log('maior, raiz', A5 ** (1 / 2));
}
if (B5 < A5) {
    console.log('menor, quadrado', B5 ** 2);
} if (B5 > A5) {
    console.log('maior,raiz', B5 ** (1 / 2));
}
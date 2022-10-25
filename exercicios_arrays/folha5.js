/* 1. Crie um algoritmo que leia um vetor de 10 posições e
depois apresente este vetor em ordem inversa na tela.*/
// let vetor = [0, 10, 2, 30, 4, 5, 6, 70, 8, 90]

// for (i = 9; i <= vetor.length; i--) {
//     // console.log(i)     //posição não precisa os conchetes []
//     console.log(vetor[i])   //valores 
//     if (i <= 0) {
//         break
//     }
// }

/*2. Crie um algoritmo que leia um vetor de 30 números
inteiros e gere um segundo vetor cujas posições pares são o
dobro do vetor original e as ímpares o triplo.*/
// const vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28, 29, 30]
// let vetorNovo = []
// for (i = 0; i < vetor2.length; i++) {

//     i% 2 === 0 ? vetorNovo.push(vetor2[i] * 2): vetorNovo.push(vetor2[i]* 3) //ternario

// }console.log(vetorNovo)

/*3. Faça um programa que preencha um vetor com oito
números inteiros, calcule e mostre dois vetores resultantes. O
primeiro deve conter os números positivos; o segundo deve
conter os números negativos. Cada vetor resultante vai ter, no
máximo, oito posições, que poderão não ser completamente
utilizadas*/

// const vetor1 = [6, 4, 11, -3, 0, -80, -5, 17]  //inteiro
// let vetorPositivo = []  //positivo
// let vetorNegativo = []  //negativos

// for (i = 0; i < vetor1.length; i++) {
//     // vetor1[i] >= 0 ? vetorPositivo.push(vetor1[i]): vetorNegativo.push(vetor1[i])
//     if (vetor1[i] >= 0) {
//         // console.log(vetor1[i], "positivo") // linha para verificar se condição estava correta
//         vetorPositivo.push(vetor1[i])  //push empurrou o valor para novo array
//     }
//     else if (vetor1[i] < 0) {
//         // console.log(vetor1[i], "negativo")  // linha para verificar se condição estava correta
//         vetorNegativo.push(vetor1[i])   //push empurrou o valor para novo array
//     }
// }console.log(vetorPositivo, vetorNegativo)

/*4. Desenvolva um algoritmo que permita a leitura de um
vetor de 30 números inteiros, e gere um segundo vetor com os
mesmos dados, mas de maneira invertida, ou seja, o primeiro
elemento ficará na última posição, o segundo na penúltima, e
assim por diante.*/

// // const vetor2 = [1, 2, 3, 4, 5, 6, 7, 80, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 190, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
// // let vetorNovo = vetor2.reverse()          //REVERSE PARA INVERTER OS DADOS
// //     console.log(vetorNovo)

//  /*5. Faça um programa que preencha dois vetores de dez
// elementos numéricos cada um e mostre o vetor resultante da
// intercalação deles.*/
// // let vetor1 = [ 1 , 91 , 7 , 4 , 85 , 6 , 8 , 9 , 10 , 12 ]
// // let vetor2 = [ 11 , 30 , 44 , 88 , 222 , 33 , 21 , 82 , 39 , 22 ]
// // let novo = []
//  console.log(vetor1.intercalate(vetor2))

// // for(let i=0; i < vetor1.length; i++){        //usamos o vetor1 como comprimento que são 10 posições
// //     novo.push(vetor1[i],vetor2[i])           // o push empurrou os valores dos dois arrays para o novo array

// // }    console.log(novo)

// /*6. Elabore um algoritmo que leia uma série de 50 notas e
// uma média necessária para aprovação, calcule e mostre
// quantas notas estão em um intervalo de valores que vai de
// 10% abaixo da média até 10% acima dela.*/
// // estipulamos a media sendo 60
// // let notas= [50,60,70,80,75,68,90,50,62,55,50,60,70,80,75,68,90,50,62,55,50,60,70,80,75,68,90,50,62,55,50,60,70,80,75,68,90,50,62,55,50,60,70,80,75,68,90,50,62,55]
// // let media = []               

// // for(i=0; i < notas.length; i++){
// //     if( notas[i] >= 54 && notas[i] <= 66){
// //         media.push(notas[i])
// //     }
// // }console.log(media)

// /*7. Uma pequena loja de artesanato possui apenas um
// vendedor e comercializa dez tipos de objetos. O vendedor
// recebe um salário de R$ 400,00 acrescido de 5% do valor total
// de suas vendas. O valor unitário dos objetos deve ser
// informado e armazenado em um vetor; a quantidade vendida
// de cada peça deve ficar em outro, mas na mesma posição, e o
// código do produto deve ficar em um terceiro vetor, sempre
// respeitando as posições. Crie um programa que receba o
// código, o preço e quantidade vendida, armazenando-os em
// seus respectivos vetores, determine e mostre:
// a. Um relatório contendo o código, a quantidade o valor
// unitário, e o valor total vendido para cada objeto. Ao
// final deverá ser mostrado o valor geral das vendas e o
// valor da comissão que será paga ao vendedor.
// b. O código e o valor do objeto mais vendido (não se
// preocupe com empates).
// */

// let salarioVendedor= 400;
// // let salarioMaisVendas= 100/5;
// // let valorComissao=
// let precoValorUnitario= [20,30,40]
// let Quantidade_produtos_vendido2=[5,2,6]
// let codigoProduto3=[1,2,3,]
// // let valorTotalVendidoCadaProduto=[]


// // A    - Reduce

// let valorTotalVendidoCadaProduto = precoValorUnitario.reduce((armazem,valorAtual,posicao) => armazem + (valorAtual * Quantidade_produtos_vendido2[posicao]),0)
// let valorComissao = (valorTotalVendidoCadaProduto * 0.05) + salarioVendedor
// // console.log(`valor total: ${valorTotalVendidoCadaProduto} e valor da comissão: ${valorComissao}`)

// // B relatorio produto
// let maiorValor= 0
// let maiorQuantidade= 0
// let codigoMaiorProdutoVendido= 0

// for(i=0; i < codigoProduto3.length; i++){
//     console.log(`codigo:${codigoProduto3[i]} quantidade${Quantidade_produtos_vendido2[i]} valor: ${precoValorUnitario[i] * Quantidade_produtos_vendido2[i]} `)
//     if(maiorQuantidade < Quantidade_produtos_vendido2[i]){
//         maiorValor = precoValorUnitario[i]
//         codigoMaiorProdutoVendido = codigoProduto3[i]
//         maiorQuantidade = Quantidade_produtos_vendido2[i]
//     }
// }console.log(`codigo mais vendido${codigoMaiorProdutoVendido} e maior valor ${maiorValor}`)


/*8. Faça um algoritmo que leia o nome, o custo e o preço
de venda de 50 produtos. Ao final deverá informar a
quantidade de produtos que:
a. Tem lucro menor que 10%;
b. Tem lucro entre 10% e 30%;
c. Tem lucro maior que 30%.*/
// let salario = 400;
// let valorUnitario = [12, 20]
// let quantidade = [3, 7]
// let codigoProduto = [8731, 9283]

// //comissão do vendedor 
// let valorTotalVendido = valorUnitario.reduce((armazem, valorAtual, posicao) => armazem + (valorAtual * quantidade[posicao]),0)
// let comissao = (valorTotalVendido * 0.05) + salario

// // codigo e valor do produto mais vendido e relatorio
// let maiorValor = 0;
// let maiorQuantidade = 0;
// let codigoDoMaiorProduto = 0;

// for (let k = 0; k<codigoProduto.length; k++){
//     // relatorio dos produtos
//     console.log(codigo: ${codigoProduto[k]} quantidade: ${quantidade[k]} valor: R$${valorUnitario[k] * quantidade[k]} )
//     if(maiorQuantidade < quantidade[k]){
//         maiorValor = valorUnitario[k]
//         codigoDoMaiorProduto = codigoProduto[k]
//         maiorQuantidade = quantidade[k]
//     } 
// }

// // descrição codigo e valor do produto mais vendido 
// console.log(codigo do produto mais vendido: ${codigoDoMaiorProduto} e maior valor: R$${maiorValor})

// // /*9. Crie um algoritmo que leia a pontuação final de 200
// // provas de um concurso e os nomes dos respectivos
// // participantes, e apresente uma lista dos colocados que
// // obtiveram mais de 70 pontos
// // @ "pensar na logica com numeros fixos e depois colocar o prompt"
// // */
const prompt = require('prompt-sync')();

// let pontuacaoFinal = []      // 200 provas
// let nomeParticipantes = []  //nome dos participantes
// let declaraNotas 
// let declaracaoNomesParticipantes


// for (let i = 0; i <= 3; i++) {

//     declaraNotas = prompt(`digite as notas`)
//     declaracaoNomesParticipantes = prompt(`digitar nomes dos participantes:`)
//     pontuacaoFinal.push(declaraNotas)
//     nomeParticipantes.push(declaracaoNomesParticipantes)

// }

// for (let i = 0; i < pontuacaoFinal.length; i++) {

//     if (pontuacaoFinal[i] >= 70) {
//         console.log(nomeParticipantes[i])

//     }
// }

/*10. Faça um programa que preencha um vetor com dez
números inteiros, determine e mostre os números superiores a
cinqüenta e suas respectivas posições. O programa deverá mostrar
uma mensagem se não existir nenhum número que
atenda a esta condição.*/
// let vetor = [5, 70, 7, 9, 10, 33, 51, 84, 2, 15] //10 posições de numeros inteiros
// let vetor2 = []
// //determine e mostre numero  valor + 50

// for (let i = 0; i < vetor.length; i++) {
//     console.log(`laço esta na etapa ${i}`)
//     if (vetor[i] > 50) {
//         vetor2.push(vetor[i])
//         console.log(vetor2)
//     }else {
//         console.log('nesta etapa o numero não passou no teste')
//     }
// }

/*11. Faça um programa para corrigir provas de múltipla
escolha. Cada prova tem oito questões e cada questão vale um
ponto. O primeiro conjunto de dados a ser lido é o gabarito da
prova. Os outros dados são os números dos alunos e as
respostas que deram às questões. Existem dez alunos
matriculados. Calcule e mostre:
a. O número e a nota de cada aluno;
b. A percentagem de aprovação, sabendo-se que a nota
mínima é 6.*/

// const alternativas = ['A', 'B', 'C', 'D']
// const gabarito = ['A', 'C', 'C', 'D']

// const idAlunos = [01,02,03,04,05,06,07,08,09,10]

// // console.log("==== ALTERNATIVAS ====")
// // console.table(alternativas)

// // console.log("==== GABARITO ====")
// // console.table(gabarito)

// const listaDeNotasAlunas = []

// for (var i = 0; i < 10; i++) {     // vai fazer o random 10 vezes e trazer as alternativas

//     let notas = []
//     for (var j = 0; j < 4; j++) {
//         let indice = Math.floor(Math.random() * 4)      // Math.random() * 4 -> sorteia as posições do vetores alternativas
//         notas.push(alternativas[indice])
//     }
//     listaDeNotasAlunas.push(notas)
// }



// // console.log("==== NOTAS ALUNAS ====")
// // console.table(listaDeNotasAlunas)
// // console.log({ listaDeNotasAlunas })

// let vetor = []
// let contador=0;

// for (var i = 0; i < listaDeNotasAlunas.length; i++) {
//     // console.log("==> ", listaDeNotasAlunas[i])
//     contador = 5
//     for (var j = 0; j < listaDeNotasAlunas[i].length; j++) {
//         // console.log("-- ", listaDeNotasAlunas[i][j])

//         if (listaDeNotasAlunas[i][j] === gabarito[j]) {
//             contador ++

//             // if(listaDeNotasAlunas[i][j].length === 1){
//             //     vetor.push(listaDeNotasAlunas)

//             // }

//         } 
//         // else {
//         //     console.log("NAO ACERTOU!")
//         // }
//     }
//     console.log(`numero do aluno: ${idAlunos[i]}
// acertos: ${contador}
// `)
// if(contador >= 6){
//     console.log(`voce esta acima da media ${contador}
//     sua porcentagem é : ${contador + (contador*4)/ 100}
//     `)
// }else {
//     console.log(`numero do aluno ${idAlunos[i]} reprovado`)
// }
// }


/*12. Construa um algoritmo que leia um vetor com 20 
posições. Este vetor deverá conter apenas números inteiros e 
positivos. Após ele deve permitir que o usuário informe um 
valor para que o algoritmo verifique se este valor está presente 
no vetor ou não. A interação com o usuário terminará quando 
este informar um valor negativo.*/


// let vetor = [50, 60, 70, 80, 75, 68, 90, 50, 62, 55, 50, 60, 70, 80, 75, 68, 90, 50, 62, 55] // 20 posições
// let verificar

// for (var i = 0; i < vetor.length; i++) {
// verificar = Number(prompt(`escreva um numero que tem na lista vetor:`))
// vetor.indexOf(verificar)
// if (vetor.indexOf(verificar) >= 0) {
//     console.log("Está na lista")
// } else if (verificar < 0) {
//     break
// }
// else {
//     console.log(`voce errou o numero `)
// }
//errada
// if (vetor[i] === verificar) {

//     console.log(`voce acertou`)

// }

// else if (verificar < 0) {
//     break
// }else {
//     console.log(`voce errou o numero `)
// }
// }




/*13. Faça um programa que receba o nome de oito clientes e
armazene-os em um vetor. Em um segundo vetor, armazene a
quantidade de DVDs locados em 2012 por cada um destes
clientes. Sabe-se que, para cada dez locações, o cliente tem
direito a uma locação grátis. Faça um programa que mostre o
nome de todos os clientes, com a quantidade de locações
grátis a que tem direito.*/
//a cada X -> usar o multiplo na condição
// let listaClientes = []
// let locacoes = []
// let quantidadeGratis = []

// for (i = 0; i <2; i++) {
//     cliente = prompt(`Digite o nome do cliente: `)
//     listaClientes.push(cliente)
//     dvdLocado = Number(prompt(`Digite quantos dvd locou: `))
//     locacoes.push(dvdLocado)

// }
// for (i = 0; i < locacoes.length; i++) {
//     if(locacoes[i] % 10 === 0){
//         quantidadeGratis = (locacoes[i]/10)
//         console.log(`cliente:${listaClientes[i]},dvd gratis:${quantidadeGratis}`)
//     }

// }

// for (i = 0; i < locacoes.length; i++) {
//     // if(locacoes[i] > 10){
//         quantidadeGratis = (locacoes[i]/10)
//         console.log(quantidadeGratis)
//     // }

// }

/*14. Faça um programa que leia um vetor A de 10 elementos 
contendo números inteiros. Determine e mostre, a seguir, 
quais elementos de A estão repetidos e quantas vezes cada um 
se repete.*/
// let vetorA = [57, 44, 23, 11, 54, 7, 44, 23, 11, 4]  //10 posições
// let contador
// // let elemento


// // const elemento = vetorA.filter((e, i, a) => a.indexOf(e) !== i) 
// // contador = 
// // console.log(elemento) //44,23,11

// for (i = 0; i < vetorA.length; i++) {   
//     elemento = vetorA[i]
//     contador = 0

//     for (j = 0; j < vetorA.length; j++) {
//         if (elemento === vetorA[j]) {
//             contador++

//         }
//     }
//     if(contador > 1){
//         console.log(elemento)
//     }
// }

/*15. Faça um programa que preencha um vetor com os 
modelos de cinco carros. Carregue outro vetor com o consumo 
destes carros, isto é, quantos quilômetros cada um deles faz 
com um litro de combustível, calcule e mostre:
a. O modelo de carro mais econômico.
b. Quantos litros de combustível cada um dos carros 
cadastrados consomem para percorrer uma distância 
de 1.000 quilômetros. */






/*16. Desenvolva um algoritmo que leia um vetor de 20 
posições inteiras e o coloque em ordem crescente, utilizando a 
seguinte estratégia:
i. Selecione o elemento do vetor de 20 posições que 
apresenta o menor valor;
ii. Troque este elemento pelo primeiro;
iii. Repita estas operações envolvendo agora apenas os 19 
elementos restantes (trocando o de menor valor com a 
segunda posição), depois os 17, os 16 e assim por 
diante, até restar um único elemento, o maior deles.*/
// let vetor = [3,8,18,2,23,67,22,5,44,1,36]
// let vetorCrescente= []
// let menorValor;
// let indice = 0;

// while(vetor.length > 0){   //condição de parada para o slice
//     menorValor= vetor[0]

// for(i= 0; i < vetor.length;i++){
//     if(vetor[i]<= menorValor){
//         menorValor= vetor[i]
//         indice = i
//     }
// }
// vetorCrescente.push(menorValor)
// vetor.splice(indice, 1)             
// }console.log(`${vetorCrescente}`)
// console.log(`menor numero: ${vetorCrescente[0]}`)


/*17. Crie um algoritmo para ler um vetor de 15 posições 
inteiras e o coloque em ordem crescente, utilizando como 
estratégia de ordenação a comparação de pares de elementos 
adjacentes, permutando-os quando estiverem fora de ordem, 
até que todos estejam ordenados*/
// let vetor = [3,8,18,2,23,67,22,5,44,1,36]
// let comparacao;

// for(i= 0; i < vetor.length;i++){
//     comparacao= vetor[i]
//     let posicao = i-1
//     while((posicao > -1)&& (comparacao < vetor[posicao])){
//         vetor[posicao+1] = vetor[posicao]
//         posicao--;
//     }
//     vetor[posicao + 1]= comparacao
// } console.log(`${vetor}`)

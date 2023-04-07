/*AULA1 ---------------------- //criando a function MODULO 6!!!!!!!!!!!!
function criadorfrases() {
  console.log('bem vindo ao app')
  console.log('aqui voce encontrara frases')
  console.log('não desista de progamar')
}

//para rodar/executar codigo
criadorfrases()

*/
//==================================================

/*  const sum = function(number1, number2) {
     console.log(number1 + number2)
  
}

let number1 = 33
let number2 = 444

console.log(`a soma é ${sum(number1, number2)}`) */

//==========================================

/*o que aconteceu no exemplo acima foi que ao chegar na linha 22 ele vai executar o 
comando de number1 + number2 la no console da function acima 

const sum = function(number1, number2) {
-------->  console.log(number1 + number2)

após isso vai dar o resultado dos numeros, e logo em seguida a function vai dar um return
que como ainda não foi definido vai dar como undefined!!! 

para resolver isso vamos deixar o codigo da seguinte maneira */

//=======================================

/* const sum = function(number1, number2) {
  total = number1 + number2
  return total 
  
}

let number1 = 33
let number2 = 444

console.log(`a soma é ${sum(number1, number2)}`)

*/

//=============================================

/* desse novo modo ao chegar na linha 48 e voltar la na function para 
fazer as somas ele encontrara o seguinte, TOTAL é igual ao number1 mais o 
number2, na linha de baixo vai encontrar que o return é igual ao TOTAL assim 
retornando como resposta o TOTAL ((AO CHEGAR NO RETURN ELE PARA TODA A EXECUÇÃO PARA
  DAR O RETORNO!!!!!!!!!))  */

/* IMPORTANTE ((NÃO SE DEVE USAR O TOTAL COMO FOI USADO NO CODIGO ACIMA DE MODO ALGUM
    JA QUE ELE VAI FICAR DISPONIVEL POR TODO O CODIGO E ESCOPO, CASO VENHA A CRIAR UM VAR,LET
    OU CONST ANTES DELE COM O NOME TOTAL SIMPLISMENTE NÃO VAI EXISTIR, POR ISSO SE DEVE USAR VAR,
    LET OU CONST))

    /*ELE TAMBEM NÃO FUNCIONARA CASO SEJA CRIADO UM CONSOLE.LOG ANTES DO INTERCALADO COM O "SUM"

    POR EXEMPLO 
console.log(`a soma é ${sum(number1, number2)}`) 
console.log(total)

no caso acima ele ira funcionar pois ja foi retornado que o resultado de total é o number1 mais o number 2
!!!!
ja se fosse ao contrario como no exemplo abaixo 

console.log(total)
console.log(`a soma é ${sum(number1, number2)}`)  

teriamos ERRO!!! pois ainda não saberiamos o valor de total 

mas tbm se usassemos o seguinte

console.log(number + number2)
console.log(`a soma é ${sum(number1, number2)}`) 

tbm funcionaria pois ai o valor do primeiro console.log não dependeria do total
mas sim dos numbers que estavam fora do function


*/

//PROXIMA AULA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//MODO FACIL DE APRENDER FUNÇÃO FUNCTION

//imagine que a função é um liquidificador!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//?????????????????????????????????????????????????????????????????????????????
/* function FazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

let copo = FazerSuco('maçã', ' pera')

console.log(copo) */

//explicação no caderno EM VERMELHO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//proxima aula

/* let subject = 'criarVideo'
function creatThink() {
  subject = 'estudar'
  return subject
}
console.log(subject)
console.log(creatThink(subject))
console.log(subject) */ 

//explicação no caderno!!
// PROXIMA AULA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* digaMeuNome()

function digaMeuNome() {
  console.log('meu nome é Leoni!')
} */

//ESSE EXEMPLO ACIMA SOFRE O HOSTING 
/*Que no caso é como se por baixo dos panos a function 
subisse acima do DigaMeuNome, reorganizando o código para nós */

/* 
digaMeuNome()

var digaMeuNome = function digaMeuNome() {
  console.log('meu nome é Leoni!')
}
*/ 

/* JA NESSE EXEMPLO ACIMA ELE NÃO SOFRE O HOSTING, RESUMINDO
NÃO TENTA SUBIR AS LINHAS PARA CONCERTAR O CÓDIGO!
*/

//PROXIMA AULA CURTA---- ARROW
/*
let sayMyName = (name) => {
  console.log(name)
}
sayMyName('LEONI!')

*/

//PROXIMA AULA===============
//callback function
/*
function sayMyName (name) {
  console.log('antes da callback')

  name()

  console.log('depois da callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)
*/
//PROXIMA AULA===========================
//FUNÇÕES CONSTRUTORAS===================================!!!!!!!!!construtora construtora 

 /* function Person(name, idade, sexo, verdadeiro, profissão) {
    this.name = name
    this.idade = idade
    this.sexo = sexo
    this.cidade = verdadeiro
    this.profissão = profissão
  }
  const leoni = new Person("leoni", 18, "masculino", true, "dev" )
  console.log(leoni) */

//MANIPULANDO DADOS MODULO 7777777777777777777777777===============================================
//===============================================================/
//===========================================================

//AULA 1 

//console.log('9' + 5 )

//AULA 2 

  //transformando uma string em numero e um numero em uma string 
  /*
  let string = '10'
  console.log(Number(string))
  let number = 10
  console.log(String(number))
*/

//PROXIMA AULA======================================================
//CONTANDO CARACTERES E DIGITOS 
/*
let mundo = 'paralelepipedo'
console.log(mundo.length)
var number = 12345
console.log(String(number).length)

*/

//PROXIMA AULA=========================================================
//CASAS DECIMAIS TRANSFORMAÇÃO=========================================
/*
let number = 124.65123123
console.log(number.toFixed(1))

*/
//PROXIMA AULA========================================================
//transformando maiuscula em minuscula e o constrario
/*
let world = 'Progamar é Bom'
console.log(world)
console.log(world.toUpperCase())
console.log(world.toLowerCase())
*/

//PROXIMA AULA=========================================================
//separando strings 
/*
  let phrase = 'eu quero viver o amor!'
  let myArray = phrase.split(' ')
  console.log(myArray)
  let phraseWithUnderscore = myArray.join('_')
  console.log(phraseWithUnderscore)

  */ 

//PROXIMA AULA==========================================================
//VEREFICANDO SE CONTEM CARACTER ESPECIFICO
/*
let phrase = 'eu quero viver !'
console.log(phrase.includes('amor'))
let phraseTwo = 'eu quero viver o amor'
console.log(phraseTwo.includes('amor'))
*/
  
//PROXIMA AULA===============================================================
//criando array com constructor

/*
//jeito classico 
let myArray = ['1', '2', '3']
//criando com o construtor
let myArrayTwo = new Array('1', '2', '3 com o constructor')
console.log(myArray, myArrayTwo)
*/

//PROXIMA AULA=============================================================
//contar elemntos de um array
//para contar 
//2 para acessar
/*
console.log(['helio', 'leoni', 'douglas', 'davi'].length)

console.log(['helio', 'leoni', 'douglas', 'davi'][2])
*/

//PROXIMA AULA==============================
//transformando palavras em arrays letra por letra 
/*
  var world = 'paralelepipedonw'
  console.log(Array.from(world))

  */

//MANIPULANDO ARRAY====================================
/*
  let tech = ['html', 'css', 'js']
  
  //para adicionar um item no fim do array 
  tech.push('react')
  //adicionamos o .push() com o conteudo novo que vai dentro como no exemplo acima


  //ja para adicionar um item no começo do array usamos o .unshift() exemplo
  tech.unshift('java')
          */

  //ja para remover usa-se o .pop() como no exemplo abaixo (REMOVE O ULTIMO ITEM APENAS!)
  //tech.pop()
  //e se vier a adicionar outro tech.pop() ele voltara e remover mais uma 


  //para remover apenas o primeiro item usamos o .shift()
  //tech.shift()


// para trazer apenas alguns itens (explicação no caderno)
//  console.log(tech.slice(1, 3))


//remover um ou mais itens do array
//  esse modifica o array como os primeiros exemplos 
//tech.splice(1, 2)

//ja para encontrar algum elemento especifico no meio do array usamos o seguinte
//let index = tech.indexOf('css')

//tech.splice(index, 1)
//console.log(tech)

//no exemplo acima o console retornou a posição do 'css'


  //MODULO 8 -----------------------------------------------
  //------------------------------------------------------------
  //---------------------------------------------------------------
  //--------------------------------------------------------------
  //-----------------------------------------------------------
  //EXPRESSOES E OPERADORES 
/*
  let numbe 
  //o exemplo acima é uma expressão

  let number = 14 
  console.log(number + 200)
  //ja no exemplo acima o operador seria o "+" 
  //ja que esta fazendo seu papel de operador de soma binario OPERATORS BINARIO

  let number1 = 60
  console.log(--number1)
  console.log(++number1)
  console.log(typeof number1)
  //exemplo de operadores unario/ unary

  console.log(true ? 'parabens' : 'melhore!')

  //exemplo de operador ternary ternario, acima esta dizendo, se for verdadeiro de 'parabens', se nao de "melhore!" (O UNICO TIPO DE TERNARY QUE EXISTE NO JS É ESTE)

  */

  //PROXIMA AULA =================================================================
  //expressão NEW
/*
  let name = new String('leoni')
  let age = new Number(18)
  console.log(name, age)
  */
 //PROXIMA AULA==========================================================================
 //delete unitario 
/*
 //objeto de exemplo 
 let person = {
  name: 'leoni',
  age: 18,
  sex: 'masculino'
 }
// e assim usamos o delete
delete person.age

console.log(person)
*/

//proxima aula======================================
  //OPERADORES ATIMETICOS

  //para fazer calculos matematicos 

  //multiplicação *
  //console.log(50.67 * 9)
  //para fazer multiplicação usamos o * como no exemplo acima
  //funciona com numeros reais e inteiros como no exemplo acima, tambem vale para os exemplos abaixo


  //divisão usamos /
  //console.log(80.6 / 3)


  //soma usamos +
  //console.log(1000 + 1000)


  //subtração usamos - 
  //console.log(4022 - 2000)


  //==============================================================================
  //agora vamos falar sobre alguns operadores aritimeticos um pouco diferentes 

  //aquilo que sobra para completar a divisão é chamado resto de divisão, por exemplo para completar a divisão 11 % 4 falta 3 

  //resto de divisão %
   //console.log(11 % 4)
   //O resto da divisão de 11 por 4 = 3
   //O resultado da divisão de 11 / 4 = 2,75



   //incremento ++

   //let incremento = 0 
   //console.log(++incremento)
   //para incrementar antes 
   //console.log(incremento++)
   //para incrementar mais uma unidade apos esta linha 
   //console.log(incremento)
   //console.log(incremento)   

   //tambem ha outra forma de usar o encremento, pode ser usado mais de uma vez
   //let encremento1 = 0 
   //encremento1++
   //console.log(encremento1)



   //decremento --
   //ele funciona iguual o incremento exemplo:
   //let decremento = 0
   //decremento--
   //console.log(decremento)



   //expoencial**
   //console.log(2 ** 3)
   //como no exemplo acima vemos que funciona em expoencial, ali por exemplo ta dois elevado a 3 
   //que seria algo como 2,  2 x 2 = 4,  4 x 2 = 8 multiplicando o 2 por ele mesmo 3 vezes


   //PROXIMA AULA========================================================
/* //para comparar e ver se os valores são iguais e retornar um boolean 
   let one = 1 
   let two = 2 

   console.log(2 == one)
   console.log(one == 1)

*/ //ja para comparar e ver se um valor é diferente do utro usamos o != do mesmo modo que no exemplo acima
   /*
    let one = 1 
    let two = 2 


  console.log(one != 2)
  console.log('1' != one)
  console.log(one != 1)
   */

  //PROXIMA AULA==============================================================================
  //gruping operator ()
  //sem a prioridade do gruping ()
  //let number = 2 + 3 * 5
  //console.log(number)


  //com a prioridade do gruping ()
  //let number1 = (2 + 3) * 5
  //console.log(number1)
  //assim priorizando os que estão dentro do ()

  //PROXIMA AULA========================================================================================
  //let number = 1 
  
  //console.log(number === '1')
  //console.log(number === 1) 
  //para extritamente igual usamos o === 


  //let numbertwo = 2 
   
  //console.log(numbertwo !== '2')
  //console.log(numbertwo !== 2) 

  //PROXIMA AULA OPERADORES DE COMPARAÇÃO > < =    -------------------------------------------------------

  //let one = 1 
  //let two = 2 

  //maior que  > 
  //console.log(one > two)
  //R: false 

  //maior ou igual >=
  //console.log(one >= one)
  //R: true
  //console.log(two >= one)
  //R:true

  //menor que < 
  //console.log(one < two)
  //R: true

  
  //menor ou igual a <=
  //console.log(one <= 2 )
  //R: true
  //console.log(one <= 1 )
  //R:true
  //console.log(one <= 0)
  //R: false
  

  //PROXIMA AULA ======================================================
  //operadores de atribuição 
/*
  x = 2 
 //adição 
  x += 3   //R: 5 
 //subtração 
 x -= 2    //R: 3 
 //multiplicação
 x *= 3 //R: 9 
 //divisão 
 x /= 3  //R: 3 
 //resto de divisão 
 x %= 2 //R: sobrou 1 dessa divisão 
 //para expoencial 
 x **= 5  //R: 1 


  console.log(x)
  
*/ 

  //PROXIMA AULA=================================================================
  
  //let pão = true 
  //let queijo = false

  //&& (só aceita valores true, caso contrario retornara false )
  //console.log(pão && queijo)  

  // || (caso tenha um ou outro em true ja retorna em true, mas caso todos sejam false retorna o false )
  //console.log(pão || queijo)

  // o ! nega e inverte o valor, se for true vira false e vice versa 
  //console.log(!pão)

  //PROXIMA AULA ==================================================================
  //Operador Condicional Ternario 

  //dependendo da condição que voce passar nos podemos receber valores diferentes 
  //de principio teremos valor1 caso o contrario teremos o valor2 exemplo
  //cafe da manhã top 
  //let pão = true
  //let queijo = true
  //let café = true
  //aqui teremos uma condição na qual queremos o pão,queijo e o café façam parte do nosso café da manhã, caso contrario não é um bom café da manhã 

  //para reemlembrar o && exige que todos valores sejam true para que ele retorne true(cafe brabo),caso contrario ele retornara false(café ridico!)
  //const OtimoCafe = pão && queijo && café ? 'Café brabo apenas!' : 'café ridico!'
  //console.log(OtimoCafe)

  //outro exemplo 

  //let age = 16
  //o sinal de >= significa maior ou igual a tal valor 
  //const canDrive = age >= 18 ? 'pode dirigir fi' : 'sai dae vgbd' 
  //console.log(canDrive)
  
  //PROXIMA AULA=====================================================================
  //OPERADOR DE STRING 

  //alguns exemplos de operador por exemplo são 
  //operador de comparação ==
  //console.log('a' == 'b') //false 
  //console.log('a' == 'a') //true 

  //e agora vamos conhecer a de concatenação(união) + exemplo 
  //let varC = 'c'
  //console.log('a' + 'b' + varC)  //resultado  >  abc 

  //PROXIMA AULA ============================================================================
  //TRUTHY e FALSY 

  //FALSY
  //é quando um valor é considerado false em contextos onde um BOOLEANO é OBRIGATORIO 
  // acontece em (consicionais e loops) ainda não estudamos a fundo sobre eles porem ja vimos um exemplo de condicional que é o TERNARIO que consiste igual no exemplo abaixo:
  
  //console.log(true ? 'verdadeiro' : 'false' )

  //no exemplo acima o true significa verdadeiro, ja o ? significa que (se for verdadeiro escreva isso) 
  //no caso do exemplo acima como é verdadeiro ele vai retornar a string 'verdadeiro'
  // ja o : significa (se não, escreve isso) e no caso no exemplo acima se fosse um false ent o : retornaria a segunda alternativa que é um uma string 'falso'

  //quando um valor é considerado false em contextos obrigatorios, esses são alguns dos que portam o valor false em contextos obrigatorios 
/*

false
0
-0
""
null
undefined
NaN

*/ 
  //esse mudança de valor acontence por conta do coersion!!!!!!


  //quando um valor é considerado true em contextos obrigatorios, esses são alguns dos que portam o valor true em contextos obrigatorios 

/*

true
{}                 (mesmo o objeto sendo vazio)
[]
1
1.1
"1"
"false" 
-1
infinity
-infinity
*/ 

//PROXIMA AULA=======================================================
//PRECEDENCIA DE OPERADORES 

//LISTA DE PRIORIDADE
/*
// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %=
*/ 

//por baixo dos panos true vale 1 e false vale 0 

//PROXIMA AULA============================================================
//MODULO 9 ---------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//CONDICIONAIS E CONTROLE DE FLUXOS
//aula 1: if e else
/*

let temperatura = 36.5
let febremoderada = 37
let febrealta= 38

if(temperatura >= 37) {
   console.log('ta passando mal o minino 🥵')
} else {
  console.log('olha como ele ta dboa 🤙')
 }
*/

//um exemplo basico de if e else acima, caso a temperatura seja >= igual ou maior que 37 pedimos que o if retorne que o esta passando mal, se não o else vai retornar que ele ta dboa 

  
//PROXIMA AULA===================================================
//SWITCH 

//Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.

//let expression = '' //DEFINA UM VALOR 

/*switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}
  */ 
 

//PROXIMA AULA--------------------------------------------------------
/*
function sayMyName(name = '') {
  if(name === '') {
    throw 'digite seu nome!'
  }

//apos o throw ele para a aplicação inteira (apenas caso nao tenha um try e catch!) 
  console.log(name)

}

try {
  sayMyName('leoni') 
} catch(e) {
  console.log(e)
}

console.log('apos o try catch')

*/

//PROXIMA AULA============================================================
//ESTRUTURA DE REPETIÇÃO 
/*
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    //continue;
    //break;
  }
  console.log(i)
}

*/

//PROXIMA AULA=========================================
//WHILE 
//EXTREMAMENTE PERIGISO TRAVA PC CASO NÃO TENHA UMA TRAVE SE SEGURANÇA
/*
let i = 0;
while(i < 10 ) {
   console.log(i)
 
   i++
}
console.log('a')

*/

//PROXIMA AULA=======================================================
//for of
//para usar com string 
//let number = 'abcdefghijklmnopqrstuvwxyz'

//para usar com array 
//let char = ['cachorro', 'gato', 'peixe', 'vaca', 'cavalo' ]

/*for(let numero of char) {
  console.log(numero)
}
*/

//o que aconteceu no exemplo acima foi que o for cria o loop e o for determina até onde ira conseguir ir, ali por exemplo criamos uma var dentro do for com o nome de 'numero' na qual ira receber os valores cortados um por um do 'number', tambem funciona com array, recendo um por array por array, com string que são uma cadeia de caracteres ele repartira letra por letra, apos fim de cada loop ele ira roda o codigo dentro do {} que no caso do exemplo acima é o console log, 

//então ele ira pegar a letra a e rodar o codigo, pegar a letra b e rodar o codigo, letra c e rodar o codigo e assim por diante 

//PROXIMA AULA ====================================================================================
//nessa aula vamos ver mais sobre o for in, ele é bem parecido com o for of só que em vez de criar loop em cima de array e string, ele cria loop em cima de objetos, vamos ver nos exemplos abaixo 

//começamos criando um objeto 
/*                
let person = {
  name: 'joão',
  age: 18,
  kg: 70.5
}
*/
//agora que o objeto está criado vamos para o for in 

/*

for(let property in person) {
      console.log(property)
      //no exemplo acimas vamos conseguir acessar as propiedades de person, porem sem ver os valores de cada resultado 

      //para acessar algum valor especifico usamos o seguinte 
  //console.log(person.name)
      //nesse exemplo acima estamos chamando diretamente o objeto e pergutando qual o valor de name, assim ele ira atribuir esse valor (que no caso é joão) a todas as propiedades do property 
      //outra maneira de fazer a mesma coisa esta no exemplo a baixo (o resultado sera o mesmo so ira mudar o modo de escrever)
  //console.log(person["name"])

    
  //e por ultimo o melhor jeito é o do exemplo abaixo 
  console.log(person[property])
  //nesse exemplo acima puxamos todas as informações do objeto 



} */ 

///CONSOLIDANDO COM EXERCICIOS======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

//PRIMEIRO EXERCICIO 
/*Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C
switch
* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F  */ 


/// RESULTADO MEU 
/*
let notas = 68


switch (notas ) {
     case 99 : 
     case 98 :
     case 97 : 
     case 96 :
     case 95 : 
     case 94 :
     case 93 : 
     case 92 :
     case 91 :
     case 90 :
    console.log('rank A')
    break 

     case 89 : 
     case 88 :
     case 87 : 
     case 86 :
     case 85 : 
     case 84 :
     case 83 : 
     case 82 :
     case 81 :
     case 80 :  
     console.log('rank B')
     break 

     case 79 : 
     case 78 :
     case 77 : 
     case 76 :
     case 75 : 
     case 74 :
     case 73 : 
     case 72 :
     case 71 :
     case 70 :  
     console.log('rank C')
     break     

     case 69 : 
     case 68 :
     case 67 : 
     case 66 :
     case 65 : 
     case 64 :
     case 63 : 
     case 62 :
     case 61 :
     case 60 :  
     console.log('rank D')
     break 

     default: 
     console.log('rank F')    
     break
    
    
    
    }
*/ 

//RESULTADO MAYK BRITO ROCKETSEAT //
/*
let notas = 88
 
function getScore(notas) {
  
let rankA = notas >= 90 && notas <= 100 
let rankB = notas >= 80 && notas <= 89 
let rankC = notas >= 70 && notas <= 79 
let rankD = notas >= 60 && notas <= 69 
let rankF = notas >= 0 && notas <= 59 

let notaFinal;

if (rankA) {
  notaFinal = 'A' 
} else if(rankB) {
  notaFinal = 'B'
} else if(rankC) {
  notaFinal = 'C'
} else if(rankD) {
  notaFinal = 'D'
} else if(rankF) {
  notaFinal = 'F'
} else {
  notaFinal = 'nota invalida!'
} 
   
 return notaFinal
}

console.log(getScore(88))
console.log(getScore(58))
console.log(getScore(98))
console.log(getScore(100))
console.log(getScore(55))
console.log(getScore(89))
console.log(getScore(11))
console.log(getScore(46))
console.log(getScore(101))
console.log(getScore(77))
console.log(getScore(69))
console.log(getScore(48))
*/ 
//RESULTADO MAYK BRITO ROCKETSEAT //com algumas alterações feitas com base no meu conhecimento  
/*
let notas = 88 

let rankA = notas >= 90 && notas <= 100 
let rankB = notas >= 80 && notas <= 89 
let rankC = notas >= 70 && notas <= 79 
let rankD = notas >= 60 && notas <= 69 
let rankF = notas >= 0 && notas <= 59 



if (rankA) {
  console.log('nota A')
} else if(rankB) {
  console.log('nota B')
} else if(rankC) {
  console.log('nota C')
} else if(rankD) {
  console.log('nota D')
} else if(rankF) {
  console.log('nota F')
} else {
  console.log('nota INVALIDA!')
} 
   
 */

//PROXIMA ATIVIDADE==============================================================================
//==============================================================================================
//================================================================================================
/*    
    let despesas = {
    receita: [2800, 9000, 200, 4000],
    gastos: [300, 900, 2000, 2000, 1500, 2000]
   }

   function somarContas(final) {
    let value = 0;
    
    al += finalfor (let value of final) {
       tot
    }

    return; 
   }


   function calculadoraFinaldeMes() {

}

*/

//

//SEGUNDO EXERCICIO JAVASCRIPT algoritimo de notas escolares 

/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: [] irá calcular o
Agora, crie uma função que i total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */ 


/*

let financias = {
     lucro: [
      5000, 
      7000,
      1000, 
      3000,
    ],

    despesas: [
      500,
      150,
      1000,
      1900,
      150,
      250,
      900,
      12000,
      1200,
    ]
  
    

}

//calculadora apenas 
function sum(array) {
  total = 0
  for(let valor of array) {
     total += valor
  }

  return total
}

sum(financias.lucro, financias.despesas)


function calculadorSaldo() {
  const calcLucro = sum(financias.lucro)
  const calcDespe = sum(financias.despesas)

  const total = calcLucro - calcDespe
  if (total >= 0) {
    console.log(`o saldo fechou positivo :) com um total de ${total}`)
  } else {
    console.log(`o saldo fechou negativo :( com um total de ${total}`)
  }
  return total
}

calculadorSaldo()
*/

//Crie uma função que receba uma string em celsius ou fahrenheit
//e faça a transformação de uma unidade para outra 
//C = (F - 32) * 5/9 
//F = C * 9/5 + 32
/*
function Transform(temp) {
  const celsiusOn = temp.toUpperCase().includes('C')
  const fahrenheitOn = temp.toUpperCase().includes('F')

  if (!celsiusOn && !fahrenheitOn) {
    throw new Error("incorreto aaa");
  }

  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let sing = 'C'
  
  return formula
}

try {
    Transform('50a')
  
} catch (error) {
  console.log(error.message)
}

*/
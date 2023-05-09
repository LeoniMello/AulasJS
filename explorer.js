//lição 1 -----------------------------------------------
/*
let nome = prompt('qual seu nome?')
alert('bem vindo ' + nome)


*/
/*EXPLICACÃO________________________
para perguntar o nome do usuario criamos uma var (let) com o nome de 'nome' 

apos isso definimos a ela
um (prompt('qual seu nome?')) para que aparece uma mensagem pergutando o nome. o valor inserido ficara guardado na memoria do computador

para finalizar criamos um (alert) na qual vai aparecer uma alerta no topo de tela de pessoa, dentro desse alert definimos ('seja bem vindo' + nome) o resultado disso sera a cadeia de caracteres aparecendo dando boas vindas mais o dado inserido dentro da var nome 
*/

//lição 2 -----------------------------------------------
/*
let numberOne = prompt('digite o primeiro numero')
let numberTwo = prompt('digite seu segundo numero')
alert('seu resultado é ' + (Number(numberOne) + Number(numberTwo)) / 2)
*/
/*EXPLICACÃO________________________
para fazer a soma desses dois numeros usamos a estrategia parecida com a primeira
primeiro criamos duas let com nome de numberone e number two e definimos a ela um prompt para guardar 
os valores inseridos 

apos isso usamos o alert para  exibir a soma, só que os dados veio em tipo "string", para manipular os dados e alterar eles para tipo "number" usamos a função contrutora `number(NumberOne)` assim os dados se transformaram em type number 

ja para dividir esse valor por 2 usamoo o /, porem na hora da conta por prioridade matematica primeiro de dividia e depois somava, então para passar a prioridade para os `numberOne e numberTwo` botamos eles dentro de parentes (), e para concatenar com string tambem botamos eles dentro de parentes 'abc' + ()   

*/

//lição 3 -----------------------------------------------
/*
  let numberOne = prompt('digite o primeiro numero')
  let numberTwo = prompt('digite o segundo numero')

//mudando tipo de dado
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

//soma
  const sum = numberOne + numberTwo
//subtração
  const sub = numberOne - numberTwo
//multiplicação
  const mult = numberOne * numberTwo
//divisão
  const divi = numberOne / numberTwo
//resto de divisão
  const ResDiv = numberOne % numberTwo

  alert('seu resultado foi ' + sum)
  alert('seu resultado foi ' + sub)
  alert('seu resultado foi ' + mult)
  alert('seu resultado foi ' + divi)
  alert('seu resultado foi ' + ResDiv)

*/
/*EXPLICACÃO________________________

nessa aplicação nós capturamos os dados com o prompt

após isso mudamos o valor original deles de string para number com o 
`numberTwo = Number(numberTwo)`

criamos conts para fazer cada tipo de conta, e finalizamos com um alert exibindo cada resultado
*/

//lição 4 -----------------------------------------------
/*
let nome = prompt('qual é seu nome?')
let NotaUm = prompt('digite sua primeira nota do bimestre')
let NotaDois = prompt('agora sua segunda nota do bimestre')
let NotaTres = prompt('e para finalizar, digite sua terceira nota do bimestre')

NotaUm = Number(NotaUm)
NotaDois = Number(NotaDois)
NotaTres = Number(NotaTres)

const sum = NotaUm + NotaDois + NotaTres
const notaFinal = sum / 3

if (notaFinal >= 6) {
  alert(
    'parabéns ' +
      nome +
      ' está acima da media com ' +
      notaFinal.toFixed(2) +
      ' continue sendo esse ótimo aluno :)'
  )
} else {
  alert(
    nome +
      ' ainda está abaixo da media com a nota ' +
      notaFinal.toFixed(2) +
      ' continue estudando para passar de ano :)'
  )
}*/
/*EXPLICACÃO________________________

para começar criamos 4 lets, um perguntava o nome e os outros 3 a nota

após isso transformar os valores deles de string para number e somar guardando o valor 
final dentro de uma const e dividir o valor final por 3

após isso subir o if para se caso a nota for maior que 6 de o parabens, e o else para se caso a nota
for abaixo de 6 peça para que melhore
*/

//lição 5 -----------------------------------------------
/*
let arrays = []

for(let item = 0; item < 10; item++) {
   let captura = prompt('digite o item ' + (item + 1))
   arrays[item] = captura
}

alert(arrays)
*/
/*EXPLICACÃO________________________
para entendermos melhor, primeiro reelembramos o exercicio e oq se pede, no caso é capturar 10 itens 
e após isso imprima-os separando por uma virgula 

para não precisar criar 10 prompts, que poderia ser até 1000 prompts, vamos usar  uma estrutura de repetição que no caso é o `for() {}`

começamos criando um let de nome 'arrays' e definimos a ele um array

após isso criamos o for() {} e dentro dos parentes '()' definimos os seguintes valores
(let item = 0; item < 10; item++) 
- cada ; finaliza uma instrução
- primeiro começamos criando uma var com o nome item e dando o valor inicial de 0 
- após isso definimos a repetição, enquanto item for menos que dez quero que ele se repita
- e finalizamos com uma adição, quero que cada vez que o item de repetir add +1

essas era as condições, agora vamos para a parte do codigo '{}'
criamos um let com o nome de captura, pois ela ira capturar os dados, após isso damos a ele o prompt 
e dentro do prompt definimos
prompt('digite o item ' + (item + 1))
- já começamos botando a escrita, ''digite o item''
- após isso criamos um '()' para que façã soma em number
- dentro do () definimos (item + 1) pois o valor inicial do item é 0, assim ajuda a guiar o user sobre qual item ele está

ja indo para o final do cod chamamos o var ''arrays'' para dentro do for e atribuiamos a ele 10 uninades para o array 
que no caso fica
-array[item] 
pois o 'item' tem 10 unidades, após isso definimos oq ira ficar dentro dessas unidadaes 
arrays[item] = captura
pois o captura tem o conteudo em si
 
para finalizar damos um alert() fora do for e chamamos o 'arrys' ja que agr ele está com 10 unides 'item'
e essa mesmas estão com 10 conteudos 'captura'
*/

//lição 6 -----------------------------------------------
/*
let pergunta = prompt('adivinhe o numero que estou pensando? está entre 1 a 10')

const gerador = Math.round(Math.random() * 10)

let tentativas = 1;

while(Number(pergunta) != gerador) {
   pergunta = prompt('erro, tente novamente')
   tentativas++
}
alert('parabens voce advinhou em ' + tentativas + ' tentativas')
*/
/*EXPLICACÃO________________________
começamos criando uma var com o nome de 'pergunta' pois ela é quem vai capturar o numero fornecido pelo 
cliente.

após isso ja criamos uma const (pois n ira ser feitas alterações) e nessa const atribuimos o nome de 'gerador' pois vai ser 
ela quem vai gerar os numeros aleatorios, dentro dessa const atribuimos a funcionalidade Math que contem pacote com 
funcionalidades matematicas e após isso definimos o .roud assim ficando 'Math.round()'

detro desse math.round definimos outro Math só que agora o 'Math.random()' na qual vai gerar numeros aleatorios entre 0 e 1 
exemplo: 0.7, junto com esse sorteador de numeros (Math.Random) multiplicamos ele por 10, pois queremos sortear um numero de 0 
a 10.

após isso criamos o let com o nome de 'tentativas' para contar quantas vezes o cliente tentou 

agora criamos o 'While' que tem como função (enquanto o dado inserido dentro dele não for true, repita o codigo dentro dos {})
e agora dentro dos () dele ja definimos o segunte código (Number(pergunta) != gerador) !! ao inserir o pergunta não esqueça de mudar o tipo de dado de string para number!!

mas voltando ao assunto, esse cod (Number(pergunta) != gerador) significa, ''enquanto a let pergunta for diferente que o 
gerador, repita o código'' isso significa que ele só ira para de repetir o codigo quando ambos terem o mesmo resultado

ja dentro do código definimos que a cada vez que ele rodar, ele ira capturar um novo tipo de dado e retribuir ele ao 
'let pergunta', junto com esse codigo vamos fazer uma adição ao 'let tentativas' a cada vez que ele rodar novamente

e quando o a repetição finalmente se encaixar com o resultado gerado e eles sair da estrutura de repetiçaõ, sera 
rodado um alert parabenizando o cliente ao mesmo tempo que interpola com o 'let tentativas' para dizer quantas tentativas ele fez

*/

//lição 7 -----------------------------------------------
/*  
    let option;
    let lista = []; 

          while(option != 3) {
              
              option = Number(prompt(`
              olá usuario! digite o numero da opção desejada
          
              1. cadastrar um item na lista
              2. mostrar itens cadastrados 
              3. sair do programa
            `)) 


            if(option == 1) {
              let capturaItem = prompt('digite o nome do item')
              lista.push(capturaItem)
            }

            else if(option == 2) {

              if(lista.length == 0) {
                alert('nenhum item cadastrado')
              } else {
                alert(lista)
              }
              
            }

            else if(option == 3) {
              alert('até a próxima! :)')
            }


            }
          */
/*EXPLICACÃO________________________ 
para este desafio começamos criando um let de com o nome 'option' que é oq vai guardar as informaçoes das opçes 1 2 e 3, e depois criamos um let com o nome lista que é oq vamos usar para guardar os dados e depois os exibir em lista

ao let lista vamos definir um array [] e ao let option vamos deixar vazio por enquanto para podermos reatribuir os valores deles depois 

agora criamos o while com a seguinte condição : while (option != 3) {}  
que significa, enquanto o option for diferente de 3, o while ira repetir o codigo

agora começamos a criar o conteudo da aplicação dentro do while, começando por retribuir os valores 
de option para: option = number(prompt()) 
isso pq se botassemos o option dentro do while, o while não encontraria ele, porem se botassemos ele 
inteiro de fora do while ao digitar um dos numeros, o numero ficaria fixo assim travando a aplicação
,então criamos o option fora do while e depois botamos os valores dele dentro do while para toda vez que 
a aplicação se repita, exiba o menu com as opçoes 

nesse codigo o option captura o numero digitado e então transforma o seu tipo de dado de string para
number e volta la no while para vereficar se o numero digitado é diferente de 3 
caso não seja prosseguimos com o cod.

e entramos em um if e else if para as 3 opções 

caso o numero digitado seja igual a 1 
ele criaria um let para capturar os dados, com o nome de captura item, 
a baixo dele ja chamamos o array de nome 'lista' e definimos um 
lista.push(capturaitem) 
isso pq o .push vai inserindo os dados no array um por um 

caso o numero digitado seja 2 entramos no seguinnte codigo
    if(lista.length == 0) {
      alert('nenhum item cadastrado')
    } else {
      alert(lista)
    } 

    que significa, se o lista for igual a 0 itens entao mostrar um alert
    com a mensagem nenhum item cadastrado, se não mostrar um 
    alert exibindo os dados inseridos no lista 

caso o numero digitado seja igual a 3 entao apenas exibimos um alert até a promixa
e o while seja igual a 3, então logo fechara 
*/
//PT2 SWITCH------------------------
/*
let option;
let lista = []; 


while(option != 3) {
    
  option = Number(prompt(`
  olá usuario! digite o numero da opção desejada

  1. cadastrar um item na lista
  2. mostrar itens cadastrados 
  3. sair do programa
 `)) 

 switch(option) {
    case 1:
    //aqui vem o cod
    let capturaItem = prompt('digite o nome do item')
    lista.push(capturaItem)
      break;

    case 2:
      if(lista.length == 0) {
        alert('nenhum item cadastrado')
      } else {
        alert(lista)
      }
      break;

    case 3:
      alert('até a próxima! :)')
      break;

    default:  
    alert('opção invalida, tente novamente')
 }

}
*/

//lição 8 -----------------------------------------------
/*
 const pacientes = [
  {
    name: 'joao', 
    age: 50,
    Weight: 70, 
    height: 1.77, 
  },

  {
    name: 'Maria', 
    age: 40,
    Weight: 60, 
    height: 1.70, 
  },

  {
    name: 'Ana', 
    age: 30,
    Weight: 50, 
    height: 1.60, 
  },

]

let NomePacientes = []

for(let contador = 0; contador < pacientes.length; contador++) {
  NomePacientes[contador] = pacientes[contador].name
}

alert(NomePacientes)
*/ 
/*EXPLICACÃO----------------------- 
começamos criando uma lista de pacientes com array, e detro dela criamos objetos com as propiedades
de cada paciente como nome altura peso e idade 

agora para criar uma lista com os nomes de todos os pacientes vamos fazer o seguinte 

começamos criando uma let com o seguinte nome 'NomePacientes' essa let é quem vai receber a lista
com os nomes dos pacientes 
==========================
agora criamos um for() {} com as seguintes condiçoes

'let contador = 0;' --> começamos criando uma let com o nome de contador, pois ela ira contar o numero de 
unidades, ele começara no numero zero ou seja zerado 

'contador < pacientes.length;' --> agora criamos a segunda condição que é, enquanto o contador 
for menor que o numero de objetos dentro da lista pacientes, repita o cod 

'contador++' --> toda vez que o cod se repetir, adicione uma unidade ao contador
=========================

agora que definimos as condiçoes vamos para os cod {}

'NomePacientes[contador]' --> aqui estamos dizendo que o numero de nomes sera o mesmo que o contador

'= pacientes[contador].name' --> e aqui estamos dizendo para acessar o objeto dentro da lista pacientes
que seja de mesma numeração que o contador, e desses objetos puxar o a propiedade name '.name' 

assim o cod fica 
'NomePacientes[contador] = pacientes[contador].name' --> o numero de unidades que havera na lista de nomes 
de pacientes sera o mesmo numero que tera o contador, e será atribuido os seguintes valores para essa 
lista de nomes de pacientes, ela sera igual aos objetos da lista pacientes e tera levara para si somente 
a propiedade name dos objetos que estão dentro da lista pacientes 
*/
//FOR OF---------------------------
/*
const pacientes = [
  {
    name: 'joao', 
    age: 50,
    Weight: 70, 
    height: 1.77, 
  },

  {
    name: 'Maria', 
    age: 40,
    Weight: 60, 
    height: 1.70, 
  },

  {
    name: 'Ana', 
    age: 30,
    Weight: 50, 
    height: 1.60, 
  },

]

let NomePacientes = []

for(pacienteUnico of pacientes) {
  NomePacientes.push(pacienteUnico.name)
}

alert(NomePacientes)
*/
/*EXPLICACÃO________________________ 
aqui vamos explicar somente a parte do for, a explicação completa está na primeira parte
criamos o for() {} mas desta vez usamos o de maneira diferente, dizemos o seguinte 
================
for(pacienteUnico of pacientes) --> o pacienteunico é uma let que criamos dentro dele que recebe 
objeto por objeto da lista pacientes
================
agora dentro do cod {}
dizemos o seguinte 
'  NomePacientes.push(pacienteUnico.name)' --> o nomePacientes recebera um push ou envio de dados do let
PacienteUnico.name, ou ele acessara o objeto e a propiedade name dentro do objeto e dara um push desse 
dado la para o let NomePacient, 

para finalizar rodamos o NomePacientes que vai conter todos os nomes dos pacientes
*/

//lição 9 -----------------------------------------------
/*
function Liquidificador(fruta1, fruta2) {
   let suco = fruta1 + fruta2
   return suco
}

let MeuSuco = Liquidificador('Maça','pera')
alert(MeuSuco)
*/
/*
const pacientes = [
  {
    name: 'joao', 
    age: 50,
    Weight: 70, 
    height: 1.77, 
  },

  {
    name: 'Maria', 
    age: 40,
    Weight: 60, 
    height: 1.70, 
  },

  {
    name: 'Ana', 
    age: 30,
    Weight: 50, 
    height: 1.60, 
  },

]

function IMC(Weight, height) {
  return (Weight / (height ** 2)).toFixed(1)
}

function FraseXY(client) {
    return `Paciente ${client.name} possui o IMC de ${IMC(client.Weight, client.height)}`
 
}

for (let pacient of pacientes) {
 let MSGimc = FraseXY(pacient) 
 alert(MSGimc)
}
*/
/*EXPLICACÃO________________________ 
FUNCTION==========================================================
CRIAÇÃO***
começaremos explicando function, primeiro criamos a função, e damos a ela o nome, no caso do exemplo
acima o nome da function é 'liquidificador' abrimos os () e dentro deles vai os argumentos 
que no caso são o fruta1 e o fruta2, agora ambas ja existem dentro do escopo {} 

agora podemos usar elas dentro do escopo (elas so existem dentro do escopo e mais nenhum lugar) da function

criamos uma let de nome suco que vai receber fruta1 + fruta2 e no final damos 'return suco' que no 
caso vai retornar as informações para a function Liquidificador 

EXECUÇÃO***
agora nessa parte chamamos o liquidificador() e definimos a ele qual vai ser a fruta1 e a fruta2 que no caso ficaria: liquidificador('maça','pera')

e para finalizar criamos uma var com o nome 'meusuco' que vai receber os dados enviados de suco para liquidificador 
========================================================================
EXPLICAÇÃO DO COD. 

LISTA DE PACIENTES----------------------------------------------
logo de cara foi criado um array com o nome pacientes, dentro dele ele recebeu objetos com as propiedades
de cada paciente como name, age, weight e height 

FUNÇÃO CALCULADORA DE IMC APENAS---------------------------------
agora vamos criar a function que vai calcular o IMC apenas de cada paciente:
  function IMC(Weight, height) {
  return (Weight / (height ** 2)).toFixed(1)
  }
criamos com a function com o nome de IMC e damos os paremetroa de 'Weight' e 'height' 
dentro das chaves{} definimos o seguinte codigo 
retorne para mim o Weight dividido pelo height ao quadrado, as prioridades de calculo são primeiro
o height ao quadrado (height ** 2) e depois dividimos o Weight pelo Height, botamos eles dentro de parentes
() para que a conta seja feita e após isso definimos o .toFixed(1) para que apareca apenas 1 numero apos a virgula do resultado final   

FUNÇÃO QUE CRIA A FRASE------------------------------------------
agora vamos criar a function que vai retornar a frase 
    function FraseXY(client) {
    return `Paciente ${client.name} possui o IMC de ${IMC(client.Weight, client.height)}`
    }
aqui estamos criando uma function com o nome FraseXY e com o parametro chamado client, 
ela quem ira criar a frase que se pede e o client existe apenas dentro da funçao, 
dentro das chaves{ } definimos o seguinte cod:
retorne para mim uma string em `` para interpolar 
puxe o .name que está atribuido ao client e tambem chame a function que calcula o IMC e bote a Altura 
e o peso do client dentro da function, de certo modo ela funciona apenas para calcular com os dados do client

e agora para finalizar vamos para o for of com o seguinte cod
  for (let pacient of pacientes) {
  let MSGimc = FraseXY(pacient) 
  alert(MSGimc)
  }
começamos criando o for que é uma estrutura de repetição e passamos os seguintes parametros() 
criamos um let com o nome pacient e damos um 'of de pacientes, ou seja ele vai puxar um objeto 
do pacientes a cada vez que o cod repetir, até que tenha puxado todos
agora o pacient vai receber um dos objetos a cada ciclo 
agora dentro do codigo criamos um let com o nome MSGimc que é para exibir o resultado final da msg de 
imc, e dentro dessa let de nome MSGimc definimos que o 'client da function FraseXY sera o resultado 
da let criada pelo for, 

em resumo resumo puxamos um dos objeto do 'pacients' botamos ele na 'let paciente e botamos os dados
da let pacient no Client do FraseXY, agora o loop vai fazer isso com todos os objetos disponiveis dentro 
do pacientes e a cada rodada sera exibido um alert com o MSGimc que carrega o conteudo da function PraseXY que é a function que montou a frase
*/


//DOM JAVASCRIPT======================================================================  
/*selecionando elementos 
para selecionar elemtnos usamos normalmente o seguinte "document.getElementByld('nomeElemento')"
porem podemos usar outros tipos como ->

getElementByld -> 'ID #'
getElementsByClassName -> CLASS '.CLASSNAME'
getElementsByTagName  -> tag 'h1'  
querySelector -> pega igual css
QuerySelectorAll -> pega todos em formato NODELIST

*/

/* Manipulando Conteudos 
aqui vamos aprender a manipular os conteudos:

const element = document.querySelector('h1')

element.TextContent = 'Reatribuindo texto'
para mais consultar caderno de anotações!
/*
*/

/*Manipulando Estilos e Classes

*/
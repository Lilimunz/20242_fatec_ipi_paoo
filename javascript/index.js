//declaração de variaveis e constantes
//let, const e var (no javascript)

// const nome = 'João'
// const idade = 19
//não pode fazer reatribuições

//let da para reatribuir
// let nome = 'João'
// nome = 'João Silva'
// console.log(nome)

//coerção implicita e explicita:
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4) 
// console.log([] == []) - isso eh ilógico, não é estavel

//var um tipo, você não quer usar ele de jeito nenhum
//escopo global/retrocompatibilidade
// var linguagem = 'javascript'
// var linguagem = 'java'
// var idade = 18
//let nome = 'Ana'
// console.log('Oi, ' + nome) //ordem de execução 
// //hoist: içamento "leitura dupla" não restringe da variavel -> só pode usar dentro do if
// if (idade >= 18) {
//     var nome = 'Ana' //declaração e uma atribuição (atribuição 'cois = outracoisa)
//     console.log (nome + ' , você pode dirigir')
// }
// console.log ('Tchau, ' + nome)

//objeto JSON - objeto javascript
//class wrapper - classes empacotadoras
//null != de undefined
//null ta definido mas não existe
//let b = undefined -> algo não definido

//js usa sistema de tipos dinamico
//java usa sistema de tipos estático
// a = "abc"
// a.toUppercase()
// a = 2 
// a.falar()
//sistema de tipos estaticos:
//java, c, c++
//sistema de tipos dinamicos:
//javascript, python, ruby, php, perl
//sistema de tipo gradual: (tem como mudar para estatico ou dinamico)
//C#, Dart, Typescript, Kotlin
// dado esse vetor, produzir outro, ele deve conter a letra inicial de cada nome em posição original
//[a, j, r, a]
const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
const resultado = nomes.filter((n) => {return n[0]})
console.log(resultado)

//dado esse vetor, construa outro. Ele deve conter apenas os nomes que começão com a letra A
//const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
//forma declarativa (por baixo dos panos, parecido com sql)
// const resultado = nomes.filter((n) => {return n[0] === 'A'}) //função como parametro para outra
// console.log(resultado)

        //Forma imperativa
// const resultado =[]
// for (let i=0; i< nomes.length; i++){ 
//     if (nomes[i][0] === 'A')
//         resultado.push(nomes[i]) //push = adicionar
// }
// console.log(resultado)


//vetores 
// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// console.log(v1)

// for (let i=0; i< v1.length; i++)
//     console.log(v1[i])
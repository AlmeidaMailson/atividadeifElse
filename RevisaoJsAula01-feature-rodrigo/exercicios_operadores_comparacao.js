/*
===========================================================
Exercícios Práticos - Operadores de Comparação
===========================================================
*/

// 1. Teste 5 == "5" e exiba o resultado.
console.log(5 == "5")


// 2. Teste 5 === "5" e exiba o resultado.
console.log(5 === "5")

// 3. Teste 5 != "5" e 5 !== "5". Explique a diferença.
console.log(5 != "5") //false
console.log(5 !== "5") //true
// o != compara apenas o valor e já o !== compara o valor e o tipo da variável

// 4. Teste 10 > 5.
console.log(10 > 5) //true


// 5. Teste 10 < 5.
console.log(10 < 5) //false


// 6. Teste 10 >= 10.

console.log(10 >= 10) //true


// 7. Teste 5 <= 7.
console.log(5 <= 7) //true


// 8. Crie uma variável `idade = 20`. Verifique se é maior ou igual a 18.
let idade = 20
if(idade >= 18){
    console.log("Maior de idade")
}


// 9. Crie uma variável `nota = 6`. Verifique se `nota >= 7`.
let nota=6
if(nota>=7){
    console.log("nota maoior que 7")
}else{
    console.log("nota menor que 7")
}


// 10. Peça para o aluno prever o resultado de:
let a = 10, b = "10";
console.log(a == b);  //true
console.log(a === b); //false

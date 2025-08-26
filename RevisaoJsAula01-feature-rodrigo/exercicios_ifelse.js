/*
===========================================================
Exercícios Práticos - If/Else
===========================================================
*/

// 1. Crie uma variável idade. Se idade >= 18 exiba "Maior de idade", senão "Menor de idade".
let idade = 20
if (idade >=18){
    console.log("maior de idade")

}else{
    console.log("menor de idade")
}

// 2. Crie uma variável hora. Se hora < 12 → "Bom dia", senão → "Boa tarde".
 let hora = 12
 if(hora < 12){
    console.log("bom dia")
 }else{
    console.log("boa tarde")
 }

// 3. Crie uma variável nota. Se >= 7 → "Aprovado", senão → "Reprovado".
let nota=6
if(nota >=7){
    console.log("aprovado")
}else{
    console.log("reprovado")
}
// 4. Crie uma variável temperatura. Se >= 30 → "Quente", se >= 20 → "Agradável", senão → "Frio".
let temperatura= 30
if(temperatura >=30){
    console.log("quente")
}if(temperatura >=20){
    console.log("agradavel")
}else{
    console.log("frio")
}
// 5. Verifique se um número é par ou ímpar.

let num=4
if(num % 2 ===0){
    console.log("par")
}else{
    console.log("impar")
}

// 6. Crie duas variáveis usuario e senha. Verifique se usuario == "admin" e senha == "1234".
let usuario = "admin"
let senha = "1234"
if(usuario ==="admin" && senha ==="1234"){
    console.log("login realizado")
}
// 7. Crie uma condição que só exiba mensagem se uma variável ativo == true.
let ativo= true
if(ativo === true){
    console.log("usuario ativo")
}
// 8. Crie um programa que verifique se ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).
let ano=2024
if((ano % 4 ===0 && ano % 100 !==0) || (ano % 400 ===0)){
    console.log("ano bissexto")
}else{
    console.log("ano não bissexto")
}
// 9. Peça para o aluno prever o resultado:
// let x = 5;
// if (x > 10) { console.log("Maior que 10"); }
// else if (x > 3) { console.log("Maior que 3"); }
// else { console.log("Outro caso"); }
 

// 10. Crie um programa que receba 3 notas e calcule a média.
// Se média >= 7 → "Aprovado"
// Se média >= 5 → "Recuperação"
// Senão → "Reprovado".

/*
===========================================================
Exercícios Práticos - Operadores Lógicos
===========================================================
*/

// 1. Crie p = true e q = false. Exiba p && q.
     if(true){
     let p=true
     let q=false
     console.log(p && q)
     } 
   

// 2. Exiba p || q.

console.log(p || q)


// 3. Exiba !p e !q.
if(true){
    let p=true
    let q=false
console.log(!p)
console.log(!q) 
}

// 4. Verifique se idade > 18 E temCarteira == true.
    let idade=18;
    let temCarteira = true;
if ( idade=>18 && temCarteira===true){
    console.log("pode Dirigir")
   
}else{
    console.log("não pode Dirigir")
}


// 5. Use || para definir um valor padrão se uma variável for undefined.

if(true){
    let nome 
    let usuario=nome || "visitante"
    console.log(usuario)
}
// 6. Teste (5 > 3 && 10 < 20).

console.log(5 > 3 && 10 < 20) //true

// 7. Teste (false || (true && true)).

console.log(false || (true && true)) //true


// 8. Crie um if que só roda se usuario == "admin" E senha == "1234".
let usuario="admin"
let senha="123"
if( usuario=="admin" && senha=="1234"){
    console.log("bom vindo Admin")
}else{3
    console.log("usario ou senha incorretos")
}

// 9. Crie uma expressão com !(nota >= 7).
let nota = 6
 if(!(nota >=7)){
    console.log("reprovado")
 }else{
    console.log("aprovado")
 }
// 10. Peça para o aluno prever o resultado de:
let x = false, y = true, z = false;
console.log(x || y && !z); //true
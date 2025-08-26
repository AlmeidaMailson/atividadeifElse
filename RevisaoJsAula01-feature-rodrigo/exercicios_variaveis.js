// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let idade = 24;
console.log("idade:", idade);
idade = 30;
console.log("nova idade:", idade);

// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const array = [];
array.push(5, cachorra, adoro);
console.log("array com tres elementos:", array);

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.

if (true){
    var msg = "olá, mundo!";
}
console.log("mensagem fora do bloco:",msg);
// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
 if (true){
    let nome = "mailson";

 }
  console.log("nome fora do bloco:", nome); //erro na linha 35, pois o let nao aceita que a variavel seja chamda fora do bloco

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.

if (true){
    var nome= "Mailson";
    let = sobrenome = "Silva";

    console.log("chamando a varaiavel nome:" , nome);
    console.log("chamando a variave sobrenome:", sobrenome);

    var nome ="Alexandra";
    let sobrenome = "oliveira";
    console.log("redeclarando a variavel nome:" ,nome);
    console.log("redeclarando a variavel sobrenome:" , sobrenome);
}
    //A let não pode ser redeclarada no mesmo escopo, enquanto a var pode ser redeclarada.


// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.

const pessoa = {
    nome: "Mailson",
    idade: 24
};
pessoa.idade = 30;

console.log("objeto pessoa:", pessoa);
// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let m; 
m =3;
console.log("varaivel sem inicialização:" , m);

// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
if(true){
    console.log("variavel qualquer:", nome);

    var nome = "mailson";
}
// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function  declararVariavel() {
    var mensagem = "Olá, mundo";
    return mensagem
};
console.log("mensagem fora da função:", declararVariavel()); // erro, pois a variavel
console.log("Olá, mundo!");

let pessoa = {
    nome: "Erick",
    telefone: 61998396923,
    endereco: "Brasília - DF"
};

console.log(pessoa);

function alterarNomeSeForErick(pessoa) {
    if(pessoa.nome == "Erick") {
        pessoa.nome = "Joao";
    }
}

alterarNomeSeForErick(pessoa);
console.log(pessoa);
let num_A = 15.6, num_B = 3, resultado;


const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function  imprimirResultado(num1, num2, resultado, operacao) {
    console.log(`Resultado da ${operacao} entre ${num1} e ${num2} é igual a: ${resultado}`);
}

// Soma
resultado = num_A + num_B;
// imprimirResultado(num_A, num_B, resultado, operacoes[0]);

// Subtração
resultado = num_A - num_B;
// imprimirResultado(num_A, num_B, resultado, operacoes[1]);

// Multiplicação
resultado = num_A * num_B;
// imprimirResultado(num_A, num_B, resultado, operacoes[2]);

// Divisão
resultado = num_A / num_B;
// imprimirResultado(num_A, num_B, resultado, operacoes[3]);


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function imprimirMatriz(A) {
    for(let i = 0; i < A.length; i++) {
        let linhaMatriz = "";
        console.log(A[i]);
        // for(let j = 0; j < A[i].length; j++) {
        //     linhaMatriz += A[i][j] + "\t";
        // }
        // console.log(linhaMatriz);
    }
}

// imprimirMatriz(matriz);

let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

for (const key in capitais) {
    // console.log(key + " - " + capitais[key]);
}

// console.log(capitais.DF + " - " + capitais.DDD_DF);

function verificaNumeroPar(n) {
    if(n % 2 == 0) {
        return true;
    }

    return false;
}

console.log(verificaNumeroPar(5));

console.log(verificaNumeroPar(8));
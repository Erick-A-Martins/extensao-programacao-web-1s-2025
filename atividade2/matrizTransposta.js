function transporMatriz(A){
    console.log("Matriz\n")

    for(let i = 0; i < A.length; i++) {
        let linhaMatriz = "";

        for(let j = 0; j < A[i].length; j++) {
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }

    console.log("\nTransposta\n");

    for(let j = 0; j < A[0].length; j++) {
        let linhaMatriz = "";

        for(let i = 0; i < A.length; i++) {
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
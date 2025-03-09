function transporMatriz(A){
    for(let i = 0; i < A.length; i++) {
        let linhaMatriz = "";

        for(let j = 0; j < A[i].length; j++) {
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }

    console.log("\t");

    for(let i = 0; i < A[0].length; i++) {
        let linhaMatriz = "";

        for(let j = 0; j < A.length; j++) {
            linhaMatriz += A[j][i] + "\t";
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
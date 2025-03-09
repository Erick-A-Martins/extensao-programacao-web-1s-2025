function verificarNumeroPrimo(n) {
    if (n < 2) {
        return console.log(false)
    }

    for(let i = 2; i < n; i++) {
        if (n % i === 0) {
            return console.log(false)
        }
    }

    return console.log(true);
}

verificarNumeroPrimo(0);
verificarNumeroPrimo(1);
verificarNumeroPrimo(2);
verificarNumeroPrimo(3);
verificarNumeroPrimo(7);
verificarNumeroPrimo(83);
verificarNumeroPrimo(100);
verificarNumeroPrimo(991);
verificarNumeroPrimo(104729);
verificarNumeroPrimo(14348907);

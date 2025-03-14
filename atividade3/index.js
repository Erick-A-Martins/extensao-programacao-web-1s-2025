const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res)=> {
    res.send('Olá, mundo!');
});

app.get('/ola/:nome', (req, res)=> { // parte da rota é variavel (:nome) - indicado por dois pontos
    res.send(`Olá, ${req.params.nome}!`);
});

// Soma
app.get('/somar/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.somar(a, b);

    res.send(`Soma de ${a} + ${b} = ${resultado}`);
});

// Subtração
app.get('/subtrair/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.subtrair(a, b);

    res.send(`Subtração de ${a} - ${b} = ${resultado}`);
});

// Multiplicação
app.get('/multiplicar/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.multiplicar(a, b);

    res.send(`Multiplicação de ${a} x ${b} = ${resultado}`);
});

// Divisão
app.get('/dividir/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.dividir(a, b);

    res.send(`Divisão de ${a} ÷ ${b} = ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log('app rodando na porta ' + PORT);
});


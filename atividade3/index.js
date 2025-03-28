const express = require('express');
const calc = require('./util/calculadora');

const app = express();

app.get('/', (req, res)=> {
    let html = '<h1> APP Calculadora </h1>';
    html += '<h3> Rotas disponíveis </h3>';
    html += '<p>/somar/:a/:b (<a href="/somar/2/3" target="_blank">somar</a>)</p>';
    html += '<p>/subtrair/:a/:b (<a href="/subtrair/2/3" target="_blank">subtrair</a>)</p>';
    html += '<p>/multiplicar/:a/:b (<a href="/multiplicar/2/3" target="_blank">multiplicar</a>)</p>';
    html += '<p>/dividir/:a/:b (<a href="/dividir/2/3" target="_blank">dividir</a>)</p>';
    res.send(html);
});

app.get('/ola/:nome', (req, res)=> { // parte da rota é variavel (:nome) - indicado por dois pontos
    res.send(`Olá, ${req.params.nome}!`);
});

// Soma
app.get('/somar/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.somar(a, b);

    res.send(`<h1 style="color: gray">Soma <br> ${a} + ${b} = ${resultado}</h1>`);
});

// Subtração
app.get('/subtrair/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.subtrair(a, b);

    res.send(`<h1 style="color: red">Subtração <br> ${a} - ${b} = ${resultado}</h1>`);
});

// Multiplicação
app.get('/multiplicar/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.multiplicar(a, b);

    res.send(`<h1 style="color: lightgreen">Multiplicação <br> ${a} x ${b} = ${resultado}</h1>`);
});

// Divisão
app.get('/dividir/:a/:b', (req, res)=> {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    let resultado = calc.dividir(a, b);

    res.send(`<h1 style="color: purple">Divisão <br> ${a} ÷ ${b} = ${parseFloat(resultado.toFixed(2))}</h1>`);

});

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log('app rodando na porta ' + PORT);
});


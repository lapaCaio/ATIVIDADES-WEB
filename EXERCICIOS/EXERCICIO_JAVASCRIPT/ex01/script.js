
function soma() {
var num1 = document.getElementsByName("soma1")[0].value;
var num2 = document.getElementsByName("soma2")[0].value;
var result = parseFloat(num1) + parseFloat(num2);

document.getElementById("ResultadoSoma").innerHTML = result;
}

function multiplicacao() {
var num1 = document.getElementsByName("multiplicacao1")[0].value;
var num2 = document.getElementsByName("multiplicacao2")[0].value;
var result = parseFloat(num1) * parseFloat(num2);

document.getElementById("ResultadoMultiplicacao").innerHTML = result;
}

function divisao() {
var num1 = document.getElementsByName("divisao1")[0].value;
var num2 = document.getElementsByName("divisao2")[0].value;
var result = parseFloat(num1) / parseFloat(num2);

document.getElementById("ResultadoDivisao").innerHTML = result;
}

function resto() {
var num1 = document.getElementsByName("resto1")[0].value;
var num2 = document.getElementsByName("resto2")[0].value;
var result = parseFloat(num1) % parseFloat(num2);

document.getElementById("ResultadoResto").innerHTML = result;
}


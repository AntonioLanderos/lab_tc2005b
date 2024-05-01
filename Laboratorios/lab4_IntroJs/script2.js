let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);
let result = num1 + num2;

let startTime = performance.now();
let guess = prompt("Adivina el resultado de la suma de 2 números aleatorios del 1 al 10:");

if (guess == result)
{
    document.write('<h1 style="color:green">CORRECTO, EL RESULTADO ES ' + result + ' :)</h1>');
} else {
    document.write('<h1 style="color:red">INCORRECTO, EL RESULTADO ERA ' + result + ' :(</h1>');
}

let finishTime = (performance.now() - startTime) / 1000;
document.write('<p>Tiempo que tardaste en escribir: ' + finishTime.toFixed(2) + ' segundos</p>');
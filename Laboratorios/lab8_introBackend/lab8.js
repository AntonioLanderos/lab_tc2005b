function promedio (nums) {
    let size = nums.length;
    let suma = 0;
    for (let i = 0; i < size; i++)
    {
        suma += nums[i]
    }
    const promedio = suma / size;
    return promedio;
}

function escribe_archivo (text) {
    const filesystem = require('fs');
    filesystem.writeFileSync('archivo_producido.txt', text);
}

function findMax(numeros) {
    // Inicializar la variable para almacenar el número más grande
    let greater = numeros[0];

    // Iterar sobre el arreglo para encontrar el número más grande
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > greater) {
            greater = numeros[i];
        }
    }

    return greater;
}

const nums = [1, 2, 3, 4, 5];
const resultado = promedio(nums);
console.log('Problema 1')
console.log('El promedio es:', resultado);

let text = 'Mi nombre es Antonio';
console.log('\nProblema 2')
let archivo = escribe_archivo(text);
console.log('Archivo creado!')

const numeros = [10, 5, 20, 8, 15];
const max = findMax(numeros);
console.log('\nProblema 3')
console.log('El numero mas grande es:', max); 

const http = require('http');   
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 4</title>
    </head>
    <body>
      Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
      <script>
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
      </script>  
    </body>
    </html>
`);
    response.end();
});
server.listen(3000);
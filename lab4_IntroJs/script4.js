matriz = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
];

function promedios(matriz) {
    let promediosArray = [];
    size = matriz.length;
    
    for (let i = 0; i < size; i++)
    {
        let subarray = matriz[i]; 
        let suma = 0; 
        let n = subarray.length;
        for (let j = 0; j < n; j++)
        {
            suma += subarray[j];
        }
        let promedio = suma / n;
        promediosArray.push(promedio); 
    }
    return promediosArray;
}

let results = promedios(matriz);

document.write('<h3>La matriz es:</h3>');
document.write('<table border="1">');

for (let row of matriz)
{
    document.write('<tr>');
    for (let element of row)
    {
        document.write('<td>' + element + '</td>');
    }
    document.write('</tr>');
}

document.write('</table>');
document.write('<p>El arreglo de promedios es: '+ results + '</p>');
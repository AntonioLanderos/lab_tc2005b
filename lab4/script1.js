let num = prompt('dame un numero');
var array = new Array(num);

document.write("<table border = '1'>");
document.write("<tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (let i = 1; i <= num; i++)
{
    var cuadrado = i * i; 
    var cubo = i *i * i; 
    document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
}

document.write("</table>");

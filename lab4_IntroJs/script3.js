var numArray = [-1, -2, 0, 1, 2, 3, 4, -8, 0, 0];

function contador(numArray) {
    let size = numArray.length;
    let zeros = 0;
    let negatives = 0;
    let positives = 0; 

    for (i = 0; i < size; i++)
    {
        if (numArray[i] < 0)
        {
            negatives++;
        } 
        else if (numArray[i] > 0)
        {
            positives++;
        } else {
            zeros++;
        }
    }
    return [negatives, zeros, positives];
}

let results = contador(numArray);

document.write('<h3>El arreglo es: ' + numArray +'</h3>');
document.write('<p>Hay ' + results[0] + ' números negativos en el arreglo</p>');
document.write('<p>Hay ' + results[1] + ' ceros en el arreglo</p>');
document.write('<p>Hay ' + results[2] + ' números positivos en el arreglo</p>');
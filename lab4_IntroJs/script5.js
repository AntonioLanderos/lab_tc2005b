let num = 123;

function inverso(num) {
    let inverted = 0;

    while (num > 0)
    { 
        let last_digit = num % 10; 
        inverted = (inverted * 10) + last_digit;
        num = Math.floor(num / 10);
    }
    return inverted;
}

let result = inverso(num)

document.write('<h3>El número <em>original</em> es: '+ num + '</h3>');
document.write('<h3>El número <em>invertido</em> es: '+ result + '</h3>');
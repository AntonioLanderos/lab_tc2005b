function calculateTotal() {
    const quantity1 = parseInt(document.getElementById('quantity1').value);
    const quantity2 = parseInt(document.getElementById('quantity2').value);
    const quantity3 = parseInt(document.getElementById('quantity3').value);

    const price1 = 750;
    const price2 = 1500;
    const price3 = 1100;

    const subtotal = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3);
    const iva = subtotal * 0.16; 
    const total = subtotal + iva;

    document.getElementById('totalAmount').innerText = `$${total.toFixed(2)}`;
}
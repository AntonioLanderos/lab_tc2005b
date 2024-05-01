function CalculadoraGastos() {
    this.gastos = [];
    this.total = 0;

    this.agregarGasto = function(monto) {
        this.gastos.push(monto);
        this.total += monto;
        actualizarTotalEnHTML();
    }

    this.calcularTotal = function() {
        return this.total;
    }
}

let miCalculadora = new CalculadoraGastos();

function agregarGasto() {
    let montoInput = document.getElementById("montoInput").value;
    let monto = parseFloat(montoInput);
    if (!isNaN(monto)) {
        miCalculadora.agregarGasto(monto);
    } else {
        alert("Por favor, ingrese un monto válido.");
    }
}

function actualizarTotalEnHTML() {
    let totalSpan = document.getElementById("totalGastos");
    totalSpan.textContent = miCalculadora.calcularTotal();
}
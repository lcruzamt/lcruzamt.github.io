function calcularCambio() {
  const original = parseFloat(document.getElementById("valor-original").value);
  const nuevo = parseFloat(document.getElementById("valor-nuevo").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(original) || isNaN(nuevo) || original === 0) {
    resultado.textContent = "Por favor ingresa valores válidos (original debe ser distinto de 0).";
    return;
  }

  const diferencia = nuevo - original;
  const porcentaje = (diferencia / original) * 100;

  if (porcentaje > 0) {
    resultado.textContent = `Aumento del ${porcentaje.toFixed(2)}%`;
  } else if (porcentaje < 0) {
    resultado.textContent = `Disminución del ${Math.abs(porcentaje).toFixed(2)}%`;
  } else {
    resultado.textContent = "No hubo cambio porcentual.";
  }
}

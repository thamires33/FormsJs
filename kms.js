<<<<<<< HEAD
<!DOCTYPE html>
<html>
<head>
  <title>Calculadora de Gasto de combustivel</title>
</head>
<body>

<h1>Calculadora de Gasto de combustivel</h1>

<label for="kmPercorridos">Quilometragem percorrida (em km):</label>
<input type="number" id="kmPercorridos">
<br><br>

<label for="valorCombustivel">Valor do combustivel por litro (em R$):</label>
<input type="number" id="valorCombustivel">
<br><br>

<button onclick="calcularGastoCombustivel()">Calcular Gasto de Combustivel</button>

<p id="result"></p>

<script>
function calcularGastoCombustivel() {
  const kmPercorridos = parseFloat(document.getElementById("kmPercorridos").value) || 0;
  const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value) || 0;

  if (kmPercorridos <= 0 || valorCombustivel <= 0) {
    alert("Por favor, insira valores válidos maiores que zero.");
    return;
  }

  const consumoKmPorLitro = 8;
  const litrosNecessarios = kmPercorridos / consumoKmPorLitro;
  const gastoTotal = litrosNecessarios * valorCombustivel;

  document.getElementById("result").innerHTML = `O gasto total de combustivel é R$ ${gastoTotal.toFixed(2)}.`;
}
</script>

</body>
</html>
=======
<!DOCTYPE html>
<html>
<head>
  <title>Calculadora de Gasto de combustivel</title>
</head>
<body>

<h1>Calculadora de Gasto de combustivel</h1>

<label for="kmPercorridos">Quilometragem percorrida (em km):</label>
<input type="number" id="kmPercorridos">
<br><br>

<label for="valorCombustivel">Valor do combustivel por litro (em R$):</label>
<input type="number" id="valorCombustivel">
<br><br>

<button onclick="calcularGastoCombustivel()">Calcular Gasto de Combustivel</button>

<p id="result"></p>

<script>
function calcularGastoCombustivel() {
  const kmPercorridos = parseFloat(document.getElementById("kmPercorridos").value) || 0;
  const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value) || 0;

  if (kmPercorridos <= 0 || valorCombustivel <= 0) {
    alert("Por favor, insira valores válidos maiores que zero.");
    return;
  }

  const consumoKmPorLitro = 8;
  const litrosNecessarios = kmPercorridos / consumoKmPorLitro;
  const gastoTotal = litrosNecessarios * valorCombustivel;

  document.getElementById("result").innerHTML = `O gasto total de combustivel é R$ ${gastoTotal.toFixed(2)}.`;
}
</script>

</body>
</html>
>>>>>>> 59aef0f6c0c1d279e96ded2e7cae8ab6f0bb720f

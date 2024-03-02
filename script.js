document.addEventListener("DOMContentLoaded", function () {
  const fromUnitSelect = document.getElementById("from-unit");
  const toUnitSelect = document.getElementById("to-unit");
  const numberInput = document.getElementById("number");
  const resultInput = document.getElementById("result");

  function convertUnits() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const inputValue = parseFloat(numberInput.value);

    // Defina as taxas de conversão para cada unidade
    const conversionRates = {
      millimeter: 1,
      centimeter: 0.1,
      decimeter: 0.01,
      meter: 0.001,
      decameter: 0.0001,
      hectometer: 0.00001,
      kilometer: 0.000001
    };

    // Realize a conversão
    let convertedValue = inputValue * (conversionRates[toUnit] / conversionRates[fromUnit]);

    // Atualize o valor do campo de resultado
    resultInput.value = convertedValue.toFixed(3); // Arredonde para três casas decimais
  }

  // Adicione um evento de mudança aos elementos select
  fromUnitSelect.addEventListener("change", convertUnits);
  toUnitSelect.addEventListener("change", convertUnits);
  numberInput.addEventListener("input", convertUnits); // Atualize quando o número é alterado
});
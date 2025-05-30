const maxVolume = 1000; // max volume for scaling height

// Liquid containers and inputs
const liquids = [
  {
    id: "cyclohexanol",
    input: document.getElementById("input-cyclohexanol"),
    liquidDiv: document.querySelector("#beaker-cyclohexanol .liquid"),
  },
  {
    id: "cyclohexanone",
    input: document.getElementById("input-cyclohexanone"),
    liquidDiv: document.querySelector("#beaker-cyclohexanone .liquid"),
  },
  {
    id: "nitricacid",
    input: document.getElementById("input-nitricacid"),
    liquidDiv: document.querySelector("#beaker-nitricacid .liquid"),
  },
];

const adipicLiquid = document.querySelector("#beaker-result .adipicacid");
const yieldValueElem = document.getElementById("yield-value");
const mixBtn = document.getElementById("mixBtn");

let experimentCount = 0;
const maxExperiments = 3;

// Update liquid height visually on input change
liquids.forEach((liq) => {
  liq.input.addEventListener("input", () => {
    let val = parseFloat(liq.input.value);
    if (isNaN(val) || val < 0) {
      val = 0;
      liq.input.value = val;
    } else if (val > maxVolume) {
      val = maxVolume;
      liq.input.value = val;
    }
    const heightPercent = (val / maxVolume) * 100;
    liq.liquidDiv.style.height = heightPercent + "%";
  });
});

// Calculate realistic adipic acid yield
function calculateYield(cyclohexanol, cyclohexanone, nitricacid) {
  let limiting = Math.min(cyclohexanol, cyclohexanone);
  let yieldVal = limiting * (nitricacid / 500) * 0.8;
  yieldVal = Math.min(yieldVal, limiting); // clamp to limiting reagent
  yieldVal = Math.max(yieldVal, 0);        // ensure non-negative
  return yieldVal.toFixed(2);
}

// Handle "Mix Liquids" button
mixBtn.addEventListener("click", () => {
  if (experimentCount >= maxExperiments) {
    alert("You have completed all 3 experiments.");
    return;
  }

  const cyclohexanol = parseFloat(liquids[0].input.value) || 0;
  const cyclohexanone = parseFloat(liquids[1].input.value) || 0;
  const nitricacid = parseFloat(liquids[2].input.value) || 0;

  // Validate input
  if ([cyclohexanol, cyclohexanone, nitricacid].some(val => val <= 0)) {
    alert("Please enter valid non-zero values for all reactants.");
    return;
  }

  // Calculate yield
  const yieldValue = calculateYield(cyclohexanol, cyclohexanone, nitricacid);

  // Update beaker visuals
  const heightPercent = (yieldValue / maxVolume) * 100;
  adipicLiquid.style.height = `${heightPercent}%`;
  yieldValueElem.textContent = yieldValue;

  // Add to results table
  experimentCount++;
  const table = document.getElementById("resultsTable").getElementsByTagName("tbody")[0];
  const row = table.insertRow();
  row.innerHTML = `
    <td>${experimentCount}</td>
    <td>${cyclohexanol}</td>
    <td>${cyclohexanone}</td>
    <td>${nitricacid}</td>
    <td>${yieldValue}</td>
  `;
});

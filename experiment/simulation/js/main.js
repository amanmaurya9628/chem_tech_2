//Your JavaScript goes in here
    function runSynthesis() {
      const ch = parseFloat(document.getElementById("cyclohexanol").value);
      const ck = parseFloat(document.getElementById("cyclohexanone").value);
      const na = parseFloat(document.getElementById("nitric").value);
      const result = document.getElementById("result");

      result.innerHTML = "";

      if (isNaN(ch) || isNaN(ck) || isNaN(na)) {
        result.innerHTML = "<div class='error'>❌ Please enter valid numeric values for all reactants.</div>";
        return;
      }

      if (ch <= 0 || ck <= 0 || na <= 0) {
        result.innerHTML = "<div class='error'>❌ All values must be greater than zero.</div>";
        return;
      }

      // Basic yield calculation
      const limiting = Math.min(ch, ck); // assuming 1:1 molar ratio simplification
      const theoreticalYield = limiting * 0.9; // 90% of limiting reactant
      const actualYield = theoreticalYield * 0.85; // 85% yield efficiency

      result.innerHTML = `
        <p>✅ Cyclohexanol: ${ch} g</p>
        <p>✅ Cyclohexanone: ${ck} g</p>
        <p>✅ Nitric Acid: ${na} mL</p>
        <hr>
        <p>⚗️ Reaction complete.</p>
        <p class="success">🎉 Estimated Adipic Acid Yield: <strong>${actualYield.toFixed(2)} g</strong></p>
      `;
    }

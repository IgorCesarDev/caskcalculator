const potions = [
  { name: "Ultimate Spirit", tc: 42, npc: 488 },
  { name: "Great Mana", tc: 14, npc: 158 },
  { name: "Strong Mana", tc: 9, npc: 488 },
  { name: "Supreme Health", tc: 59, npc: 650 },
  { name: "Ultimate Health", tc: 36, npc: 379 },
  { name: "Ultimate Mana", tc: 42, npc: 488 },
];

function calcularPrecos() {
  const coinValue = parseFloat(document.getElementById("coin").value);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  potions.forEach((potion) => {
    const storeTotal = potion.tc * coinValue;
    const storeUnit = Math.round(storeTotal / 1000); // valor inteiro
    const cheaper = storeUnit < potion.npc ? "store" : "npc";

    resultDiv.innerHTML += `
      <div class="potion">
        <h3>${potion.name}</h3>
        <p>Valor unitário via Store: <strong>${storeUnit} gp</strong></p>
        <p>Valor unitário no NPC: <strong>${potion.npc} gp</strong></p>
        <p class="${cheaper === "store" ? "cheaper-store" : "cheaper-npc"}">
          Mais barato pelo: <strong>${cheaper.toUpperCase()}</strong>
        </p>
      </div>
    `;
  });
}


document.getElementById("coin").addEventListener("input", calcularPrecos);

// Executa ao carregar a página
calcularPrecos();

const form = document.querySelector("form");
const reply1 = document.querySelector("h3");
const reply2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const amountDeposited = Number(form.inNumber.value);

   if (amountDeposited < 1) {
      reply1.innerText = "Valor Infuficiente";
      reply1.style.color = "red";
   } else if (amountDeposited < 3) {
      const change = amountDeposited - 1.75;
      reply1.innerText = "Tempo: 60 min"
      reply2.innerText =`Troco R$: ${change}`;
   } else {
      const change = amountDeposited - 3.00;
      reply1.innerText = "Tempo: 120 min"
      reply2.innerText =`Troco R$: ${change.toFixed(2)}`;
   }
})
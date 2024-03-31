const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
   const vehicle = form.inVehicle.value;
   const price = Number(form.inPrice.value);

   const entry = price * 0.5;
   const installments = (price * 0.5) / 12;

   resp1.innerText = `Promoção: ${vehicle}`;
   resp2.innerText = `Entrada de R$: ${entry.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
   })}`;
   resp3.innerText = `+ 12x de R$ ${installments.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
   })}`;

   e.preventDefault();
});

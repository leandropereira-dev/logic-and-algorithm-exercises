const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
   const name = form.inName.value;
   const price = Number(form.inPrice.value);

   const promotion = Math.floor(price * 2);
   resp1.innerText = `Promoção de ${name}`;
   resp2.innerText = `Leve 2 por apenas R$: ${promotion.toFixed(2)}`;
   e.preventDefault();
});

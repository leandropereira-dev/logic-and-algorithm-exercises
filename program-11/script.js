const form = document.querySelector("form");
const reply = document.querySelector("h3");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   
   const numCalculate = Number(form.inNumber.value);
   const squareRoot = Math.sqrt(numCalculate);

   if (Number.isInteger(squareRoot)) {
      reply.innerText = `Raiz: ${squareRoot}`;
   } else {
      reply.innerText = `Não há raiz exata para ${numCalculate}`;
   }
});
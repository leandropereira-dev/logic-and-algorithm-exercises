const form = document.querySelector("form");
const reply = document.querySelector("h3");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const permittedSpeed = Number(form.permittedSpeed.value);
   const driverSpeed = Number(form.driverSpeed.value);

   if (driverSpeed <= permittedSpeed) {
      reply.innerText = "Situação: Sem Multa";
   } else if (driverSpeed <= (permittedSpeed + permittedSpeed * 0.20)) {
      reply.innerText = "Situação: Multa Leve";
   } else {
      reply.innerText = "Situação: Multa Grave";
   }
});


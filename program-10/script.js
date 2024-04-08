const form = document.querySelector("form");
const reply = document.querySelector("h3");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const hour = Number(form.inHour.value);
   let hourFrance = hour + 5;

   if (hourFrance > 24) {
      hourFrance -= 24;
   }
   reply.innerText = `Hora na França ${hourFrance.toFixed(2)}`
});

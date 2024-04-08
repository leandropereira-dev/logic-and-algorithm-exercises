const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
   const title = frm.inTitle.value;
   const duration = Number(frm.inDuration.value);

   const hours = Math.floor(duration / 60);
   const minutes = duration % 60;

   resp1.innerText = title;
   resp2.innerText = `${hours} horas(s) e ${minutes} minutos(s)`;

   e.preventDefault();
});

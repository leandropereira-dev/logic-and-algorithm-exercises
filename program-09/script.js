const form = document.querySelector("form");
const reply = document.querySelector("h3");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const name = form.inName.value;
   const masculine = form.inMasculine.checked;
   const height = Number(form.inHeight.value);

   let weigth;
   
   if (masculine) {
      weigth = 22 * Math.pow(height, 2);
   } else {
      weigth = 21 * Math.pow(height, 2);
   }
   reply.innerText = `${name}: Seu peso ideal é ${weigth.toFixed(3)} kg`;
});

form.addEventListener("reset", () => {
   reply.innerText = "";
});
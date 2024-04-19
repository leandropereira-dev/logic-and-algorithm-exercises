const form = document.querySelector("form");
const reply1 = document.querySelector("h3");
const reply2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const sideA = Number(form.inSideA.value);
   const sideB = Number(form.inSideB.value);
   const sideC = Number(form.inSideC.value);

   if (sideA > sideB + sideC || sideB > sideA + sideB || sideC > sideA + sideB ) {
      reply1.innerText = "Lados não podem formar um triângulo!";
      reply2.innerText = "";
   } else {
      reply1.innerText = "Lados podem formar um triângulo.";
      if (sideA === sideB && sideB === sideC) {
         reply2.innerText = "Tipo: Equilátero";
      } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
         reply2.innerText = "Tipo: Isósceles";
      } else {
         reply2.innerText = "Tipo: Escaleno";
      }
   }
});
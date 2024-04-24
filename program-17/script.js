const form = document.querySelector("form");
const reply = document.querySelector("pre");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const number = Number(form.inNumber.value);
   let multiplicationTable = "";

   for (let i = 1; i <= 10; i++) {
      multiplicationTable = `${multiplicationTable}${number} x ${i} = ${number * i}\n`;
   }
   reply.innerText = multiplicationTable;
});
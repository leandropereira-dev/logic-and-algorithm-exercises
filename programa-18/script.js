const form = document.querySelector("form");
const reply = document.querySelector("h3");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const number = Number(form.inNumber.value);
   let printReply = `Entre ${number} e 1: `
   
   for(let i = number; i > 1; i--) {
      printReply = printReply + i + ", "
   }

   reply.innerText = printReply + "1."
});
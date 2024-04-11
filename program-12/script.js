const form = document.querySelector("form");
const reply1 = document.getElementById('outReply1');
const reply2 = document.getElementById('outReply2');
const reply3 = document.getElementById('outReply3');

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const withdrawal = Number(form.inNumber.value);

   if (withdrawal % 10 != 0) {
      alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
      form.inNumber.focus();
      return
   }
   const notes100 = Math.floor(withdrawal / 100);
   let rest = withdrawal % 100;

   const notes50 = Math.floor(rest / 50)
   rest = rest % 50;

   const notes10 = Math.floor(rest / 10);

   if (notes100 > 0) {
      reply1.innerText = `Notas de R$ 100: ${notes100}`;
   }
   if (notes50 > 0) {
      reply2.innerText = `Notas de R$ 50: ${notes50}`;
   }
   if (notes10 > 0) {
      reply3.innerText = `Notas de R$ 10: ${notes10}`;
   }
});


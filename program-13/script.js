const form = document.querySelector("form");
const reply = document.querySelector("h3");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const num = Number(form.inNumber.value);
   
   num % 2 === 0 ? reply.innerText = `${num} é par` : reply.innerText = `${num} é ímpar`;
});
const form = document.querySelector('form');
const resp1 = document.querySelector('h3');

form.addEventListener('submit', (e) => {
   const price = Number(form.inValue.value);
   const time = Number(form.inTime.value);
   const timeCalculation = Math.ceil(time / 15);
   const payment = timeCalculation * price;
   resp1.innerText = `Valor a Pagar R$: ${payment.toFixed(2)}`;
   e.preventDefault();
});
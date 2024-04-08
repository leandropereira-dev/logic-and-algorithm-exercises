const form = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

form.addEventListener('submit', (e) => {
   const product = form.inProduct.value;
   const price = Number(form.inPrice.value);
   const discout = price / 2;
   const promotion = (price * 3) - discout;
   resp1.innerText = `${product} - Promoção: Leve 3 por R$: ${promotion.toFixed(2)}`;
   resp2.innerText = `O 3° produto custa apenas R$: ${discout.toFixed(2)}`;
   e.preventDefault();
});
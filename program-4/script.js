const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    const kilo = Number(form.inKilo.value);
    const consumption = Number(form.inConsumption.value);
    const accountValue = (kilo / 1000) * consumption;
    resp.innerText = `Valor a pagar R$: ${accountValue.toFixed(2)}`;
    e.preventDefault();
})
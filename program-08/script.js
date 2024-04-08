const form = document.querySelector('form');
const reply1 = document.querySelector('#note');
const reply2 = document.querySelector('#message');

form.addEventListener('submit', (e) => {
   const name = form.inName.value;
   const note1 = Number(form.inNote1.value);
   const note2 = Number(form.inNote2.value);

   const calcAverage = (note1 + note2) / 2;
   reply1.innerText = `Média das Notas: ${calcAverage.toFixed(2)}`;
   
   if (calcAverage >= 7) {
      reply2.innerText = `Parabéns ${name}! Você foi aprovado(a)`;
      reply2.classList.add('color-approved');
      reply2.classList.remove('color-disapproved');
   } else {
      reply2.innerText = `${name}, infelizmente você foi Reprovado(a)`;
      reply2.classList.add('color-disapproved');
      reply2.classList.remove('color-approved');
   };

   e.preventDefault();
});
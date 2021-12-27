import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onBtnSubmitCreatePromise);

let position = 0;

function onBtnSubmitCreatePromise(e) {
  e.preventDefault();
  const delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);
}
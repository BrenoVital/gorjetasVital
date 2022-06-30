const conta = document.querySelector('#conta');
const gorjetaUser = document.querySelector('#gorjetaUser');
const pessoas = document.querySelector('#pessoas');
const gorjeta = document.querySelector('#gorjeta');
const reset = document.querySelector('#reset');
const total = document.querySelector('#total');

let valorConta = '';

// input conta

conta.addEventListener('input', (e) => {
  if (e.data !== '0' && e.data !== '1' && e.data !== '2' && e.data !== '3' && e.data !== '4' && e.data !== '5' && e.data !== '6' && e.data !== '7' && e.data !== '8' && e.data !== '9' && e.data !== '.' && e.data !== ',') {
    conta.value = '';
  } if (conta.value === '0') {
    conta.classList.add('erro');
  } else {
    conta.classList.remove('erro');
    valorConta = conta.value;
  }

})

// valor da gorjeta

const btSelect = document.querySelectorAll('.bt-gorjeta');
let valorGorjeta = '';

for (let select of btSelect) {
    select.addEventListener('click', () => {

        for (let off of btSelect) {
            off.classList.remove('active');
        }

        select.classList.add('active');

        valorGorjeta = '';
        for (let i = 0; i < (select.innerText.length - 1); i++) {
            valorGorjeta += select.innerText[i];
        }

    })
}

// Campo gorjeta livre

gorjetaUser.addEventListener('input', (e) => {
  if (gorjetaUser.value === '') {
    gorjetaUser.classList.add('erro');
  } else {
    gorjetaUser.classList.remove('erro');
    valorGorjeta = gorjetaUser.value;
  }
})

// numero de pessoas
let valorPessoas = '';

pessoas.addEventListener('input', () => {
  if (pessoas.value === '0') {
    pessoas.classList.add('erro');
  } else {
    pessoas.classList.remove('erro');
    valorPessoas = pessoas.value;
  }
})

// calcular a gorjeta

setInterval(() => {

  if (valorConta !== '' && valorGorjeta !== '' && pessoas.value !== '' && pessoas.value !== '0') {

      gorjeta.innerText = `$${((parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) / parseFloat(pessoas.value)).toFixed(2)}`;

      total.innerText = `$${(((parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) + parseFloat(valorConta)) / parseFloat(pessoas.value)).toFixed(2)}`;
  }else{
      gorjeta.innerText = '0.00'
      total.innerText = '0.00'
  }

}, 1000)

// botao reset

reset.addEventListener('click', () => {
  for (let off of btSelect) {
    off.classList.remove('active');
  }
  conta.value = '';
  pessoas.value = '';
  gorjetaUser.value = '';
  valorConta = '';
  gorjeta.innerText = 'R$ 0,00';
  total.innerText = 'R$ 0,00';
  valorGorjeta = '';
})
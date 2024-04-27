const $ = selector => document.querySelector(selector);
const $contador = $('#contador');
const $button = $('#boton');

$button.addEventListener('click', () => {
  let i = 0;
  while(true){
    if(i  === 100000){
      break;
    }

    i++;
    $contador.textContent = i;

    $contador.textContent = parseInt($contador.textContent) + 1;
  }
});
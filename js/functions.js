// function contador() {
//   let contador = 0;
//   // while(true) {
//   //   if(contador === 10000000) {
//   //     false;
//   //   } else {
//   //     contador ++;
//   //     document.getElementById("contador").innerHTML = `<span id='contador' onload='contador()'>${contador}</span>`;
//   //   }
//   // }
//   document.getElementById("contador").innerHTML = `<span id='contador' onload='contador()'>${contador}</span>`;
//   // https://www.youtube.com/watch?v=ir9yaSgbOdY minuto 30:15
// }

// const $ = selector => document.querySelector(selector);

// const $contador = $('#contador');
// const $button = $('#boton');

// $button.addEventListener('click', () => {
//   let i = 0;
//   while(true){
//     if(i  === 10000000){
//       break;
//     }
    
//     i++;
//     $contador.textContent = i;
    
//   }
//   $contador.textContent = parseInt($contador.textContent) + 1;
// });

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

    // $contador.textContent = parseInt($contador.textContent) + 1;
  }
  // const contador = +$contador.innerText
  // $contador.textContent = contador + 1;
});
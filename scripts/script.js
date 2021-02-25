import { translator } from './translator.js'

document.getElementById('hidden-enter').addEventListener('click', ()=>{
  let toBeTranslated= document.getElementById('translation-input').value;
  document.getElementById("translated-output").innerHTML = translator(toBeTranslated);
})

document.getElementById('translation-input').addEventListener('keyup', () =>{
  let toBeTranslated = document.getElementById('translation-input').value;
  document.getElementById("translated-output").innerHTML = translator(toBeTranslated);
})


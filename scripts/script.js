import { translator } from './translator.js'

document.getElementById('hidden-enter').addEventListener('click', ()=>{
  let toBeTranslated= document.getElementById('translation-input').value;
  translator(toBeTranslated);
})


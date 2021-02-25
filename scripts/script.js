import { translator} from './translator.js'

const morse = /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/;
document.getElementById('translation-input').addEventListener('keyup', () =>{
  let toBeTranslated = document.getElementById('translation-input').value;
  document.getElementById("translated-output").innerHTML = translator(toBeTranslated);
})


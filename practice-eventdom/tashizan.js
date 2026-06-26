function greeting(){
  let n = document.querySelector('input[name="left"]');
  let m =document.querySelector('input[name="right"]');
  let s =document.querySelector('span#answer');
  let ans = Number(n.value)+Number(m.value);
  s.textContent = ans;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);
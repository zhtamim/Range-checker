
let input = document.querySelector('input')

input.addEventListener('input',function(){
  document.querySelector('p').innerText = input.value
});


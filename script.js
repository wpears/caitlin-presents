const button = document.querySelector('button');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const result = document.getElementById('result');
const imgs = document.querySelectorAll('img');

function showImgs(){
  imgs.forEach(v => v.style.display = 'block');
}

function hideImgs(){
  imgs.forEach(v => v.style.display = 'none');
}

button.addEventListener('click', async function(e){
  e.preventDefault();
  showImgs();
  const res = await fetch('https://caitlin.wyatt.workers.dev', {
    method: 'POST',
    body: JSON.stringify({
      first: first.value,
      second: second.value,
      third: third.value
    })
  });
  result.textContent = await res.text();
  hideImgs();
  result.scrollIntoView();
})

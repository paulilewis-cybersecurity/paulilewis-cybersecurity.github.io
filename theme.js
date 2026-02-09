
(function(){
  const saved = localStorage.getItem('theme');
  if (saved === 'terminal') document.body.classList.add('terminal');
})();
function toggleTheme(){
  document.body.classList.toggle('terminal');
  localStorage.setItem('theme', document.body.classList.contains('terminal') ? 'terminal' : 'blackice');
}
// Utility: typewriter effect
function typeWriter(el, text, speed=12){
  el.textContent=''; let i=0; const id=setInterval(()=>{ el.textContent += text[i++]||''; if(i>=text.length) clearInterval(id); }, speed);
}
// Utility: random helper
function rand(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

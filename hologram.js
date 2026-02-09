
let started=false; function activate(){ if(started) return; started=true; const box=document.getElementById('cube');
  box.innerHTML = `<div class="cube3d">
    <div class="face f1"></div><div class="face f2"></div><div class="face f3"></div>
    <div class="face f4"></div><div class="face f5"></div><div class="face f6"></div>
  </div>`;
  const css=document.createElement('style'); css.textContent=`
    .cube3d { position:relative; width:100%; height:100%; transform-style:preserve-3d; animation:spin 8s linear infinite; }
    .cube3d .face{ position:absolute; inset:0; border:1px solid #00eaff; box-shadow:0 0 20px #00eaff55 inset; background:linear-gradient(180deg,#001018,#000); opacity:.8 }
    .f1{ transform: translateZ(80px);} .f2{ transform: rotateY(90deg) translateZ(80px);} .f3{ transform: rotateY(180deg) translateZ(80px);} .f4{ transform: rotateY(270deg) translateZ(80px);} .f5{ transform: rotateX(90deg) translateZ(80px);} .f6{ transform: rotateX(-90deg) translateZ(80px);} 
    @keyframes spin { from{ transform: rotateX(0) rotateY(0);} to{ transform: rotateX(360deg) rotateY(360deg);} }
  `; document.head.appendChild(css);
}

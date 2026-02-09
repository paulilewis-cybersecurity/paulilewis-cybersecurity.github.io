
let rctx, A=0, rid;
function activate(){ const c=document.getElementById('rad'); rctx=c.getContext('2d'); rid=requestAnimationFrame(loop); }
function loop(){ const c=rctx.canvas, w=c.width, h=c.height; rctx.clearRect(0,0,w,h);
  rctx.fillStyle='#001017'; rctx.fillRect(0,0,w,h); rctx.strokeStyle='#0a3949'; for(let i=40;i<Math.min(w,h);i+=40){ rctx.beginPath(); rctx.arc(w/2,h/2,i,0,Math.PI*2); rctx.stroke(); }
  // sweep
  A=(A+0.04)%(Math.PI*2); rctx.fillStyle='rgba(0,234,255,0.16)'; rctx.beginPath(); rctx.moveTo(w/2,h/2); rctx.arc(w/2,h/2,Math.min(w,h)/2-10,A-0.2,A+0.2); rctx.closePath(); rctx.fill();
  // blips
  for(let i=0;i<10;i++){ const ang=i*0.6+0.3; const r=60+i*20; const x=w/2 + Math.cos(ang)*r, y=h/2 + Math.sin(ang)*r; rctx.fillStyle=i%3? '#00eaff':'#ff4d9d'; rctx.beginPath(); rctx.arc(x,y,3,0,Math.PI*2); rctx.fill(); }
  rid=requestAnimationFrame(loop);
}

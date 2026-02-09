
let ctx, W, H, nodes=[], arcs=[], running=false; // abstract map grid (no external assets)
function activate(){ if(running) return; const c=document.getElementById('map'); ctx=c.getContext('2d'); W=c.width; H=c.height; running=true; seed(); loop(); }
function seed(){
  // place random geo-nodes on an abstract map
  nodes = Array.from({length:18},()=>({x:Math.random()*W, y:Math.random()*H, r:3+Math.random()*2, pulse:0}));
}
function addBurst(){
  for(let i=0;i<12;i++){
    const a=nodes[Math.floor(Math.random()*nodes.length)], b=nodes[Math.floor(Math.random()*nodes.length)];
    if(a!==b){ arcs.push({ax:a.x, ay:a.y, bx:b.x, by:b.y, t:0}); }
  }
}
function loop(){ if(!running) return; ctx.clearRect(0,0,W,H);
  // background grid
  ctx.strokeStyle='#0b2a36'; ctx.lineWidth=1; for(let x=0;x<W;x+=50){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); } for(let y=0;y<H;y+=50){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  // arcs
  for(const a of arcs){ a.t+=0.02; drawArc(a); }
  arcs = arcs.filter(a=>a.t<1.0);
  // nodes
  for(const n of nodes){ n.pulse = (n.pulse+0.08)%Math.PI; ctx.fillStyle='#00eaff'; ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='#00eaff77'; ctx.beginPath(); ctx.arc(n.x,n.y,n.r+Math.sin(n.pulse)*4+6,0,Math.PI*2); ctx.stroke(); }
  requestAnimationFrame(loop);
}
function drawArc(a){
  const mx=(a.ax+a.bx)/2, my=(a.ay+a.by)/2 - 80; // control for curve (raised)
  ctx.strokeStyle='#ff4d9d'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(a.ax,a.ay); ctx.quadraticCurveTo(mx,my, a.bx,a.by); ctx.stroke();
  // moving dot
  const t=a.t; const p=quadPoint(a.ax,a.ay,mx,my,a.bx,a.by,t);
  ctx.fillStyle='#ff4d9d'; ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fill();
}
function quadPoint(x0,y0,cx,cy,x1,y1,t){ const x=(1-t)*(1-t)*x0 + 2*(1-t)*t*cx + t*t*x1; const y=(1-t)*(1-t)*y0 + 2*(1-t)*t*cy + t*t*y1; return {x,y}; }

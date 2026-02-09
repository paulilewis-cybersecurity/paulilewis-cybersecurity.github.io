
let widgetsOn=false;
function activateWidgets(){ if(widgetsOn) return; widgetsOn=true; const host=document.getElementById('widgetsArea');
  // Gauges
  host.innerHTML=`
    <div class='panel'><canvas class='gauge' id='cpu'></canvas><div>CPU Utilisation</div></div>
    <div class='panel'><canvas class='gauge' id='mem'></canvas><div>Memory Utilisation</div></div>
    <div class='panel'><canvas class='gauge' id='net'></canvas><div>Network Throughput</div></div>
    <div class='panel'><canvas id='alertsChart' width='320' height='160'></canvas><div>Alerts per Severity</div></div>
    <div class='panel'><canvas id='trendChart' width='320' height='160'></canvas><div>Incidents over Time</div></div>
    <div class='panel'><pre id='kpi'></pre></div>`;
  startGauges(); startCharts(); startKPI();
}
function drawGauge(id,val,color){ const c=document.getElementById(id), ctx=c.getContext('2d'); const w=c.width=c.offsetWidth, h=c.height=c.offsetHeight; const r=Math.min(w,h)/2-10; const cx=w/2, cy=h/2; ctx.clearRect(0,0,w,h); ctx.lineWidth=12; ctx.strokeStyle='#0b2a36'; ctx.beginPath(); ctx.arc(cx,cy,r,Math.PI,0); ctx.stroke(); ctx.strokeStyle=color; const ang=Math.PI + (Math.PI*val); ctx.beginPath(); ctx.arc(cx,cy,r,Math.PI,ang); ctx.stroke(); ctx.fillStyle=color; ctx.beginPath(); ctx.arc(cx,cy,6,0,Math.PI*2); ctx.fill(); }
function startGauges(){ setInterval(()=>{ drawGauge('cpu', Math.random(), '#00eaff'); drawGauge('mem', Math.random(), '#ff4d9d'); drawGauge('net', Math.random(), '#22c55e'); }, 800); }
function startCharts(){
  const a=document.getElementById('alertsChart').getContext('2d'); const t=document.getElementById('trendChart').getContext('2d');
  // Simple bar chart
  let sev=[rand(2,9),rand(4,12),rand(1,6)]; function bar(){ a.clearRect(0,0,320,160); const colors=['#93c5fd','#f59e0b','#ef4444']; for(let i=0;i<3;i++){ a.fillStyle=colors[i]; a.fillRect(40+i*80, 150-sev[i]*10, 60, sev[i]*10); } a.fillStyle='#bfefff'; a.fillText('LOW    MED    HIGH', 40, 155); sev = sev.map(s=> Math.max(1, s + rand(-1,1))); }
  // Simple line chart
  let pts = Array.from({length:24},()=>rand(0,20)); function line(){ t.clearRect(0,0,320,160); t.strokeStyle='#00eaff'; t.beginPath(); for(let i=0;i<pts.length;i++){ const x=10+i*13, y=150-pts[i]*5; if(i===0) t.moveTo(x,y); else t.lineTo(x,y);} t.stroke(); pts.push(rand(0,20)); pts.shift(); }
  setInterval(bar, 1200); setInterval(line, 700);
}
function startKPI(){ const k=document.getElementById('kpi'); setInterval(()=>{ k.textContent = `Active Investigations: ${rand(2,9)}\nSuspicious Logins/min: ${rand(3,18)}\nMean Time to Triage: ${rand(3,15)} min\nContainment SLA: ${rand(80,99)}%`; }, 1000); }

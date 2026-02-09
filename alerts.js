
let tid; const ticker=document.getElementById('ticker');
function startTicker(){ if(tid) return; function add(){ const sev=pick(['LOW','MED','HIGH']); const msg=`[${new Date().toLocaleTimeString()}] ${sev} ${rand(1,255)}.${rand(0,255)}.${rand(0,255)}.${rand(1,254)} ${pick(['Failed login','Beacon','Impossible travel','Malware','RDP brute'])}`; const span=document.createElement('span'); span.textContent='  '+msg+'  '; ticker.appendChild(span); ticker.scrollLeft = ticker.scrollWidth; }
  add(); tid=setInterval(add, 1200);
}
function stopTicker(){ clearInterval(tid); tid=null; }

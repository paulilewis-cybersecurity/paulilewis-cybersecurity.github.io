
let termActive=false, inputEl, outEl, history=[], hIdx=0;
const commands = {
  help(){
    print(`Available commands:\n  help\n  alerts [count]\n  siem live [seconds]\n  scan net [subnet]\n  decode base64 <text>\n  ioc lookup <hash|ip>\n  clear`);
  },
  clear(){ outEl.innerHTML=''; },
  alerts(cnt=5){
    cnt = parseInt(cnt)||5;
    for(let i=0;i<cnt;i++) print(alertLine());
  },
  'siem live'(secs=10){
    secs=parseInt(secs)||10; let n=0; const id=setInterval(()=>{print(alertLine())},700);
    setTimeout(()=>clearInterval(id), secs*1000);
  },
  'scan net'(subnet='10.0.0.0/24'){
    print(`Scanning ${subnet}...`);
    for(let i=0;i<8;i++) print(`host ${rand(2,254)} open: 22,80,443`);
    print('Scan complete.');
  },
  'decode base64'(...txt){ try{ const s=atob(txt.join(' ')); print(`decoded: ${s}`);}catch(e){ print('Invalid base64'); } },
  'ioc lookup'(...v){ const q=v.join(' '); print(`Querying IOCs for: ${q}\n\nResult: no critical hits (demo)`); }
};
function alertLine(){
  const sev=['LOW','MED','HIGH'][rand(0,2)];
  const ip=`${rand(10,250)}.${rand(0,255)}.${rand(0,255)}.${rand(1,254)}`;
  const act=pick(['Failed login','Impossible travel','MFA fatigue','Malware beacon','Port scan']);
  return `[${new Date().toLocaleTimeString()}] ${sev} ${ip} ${act}`;
}
function activateTerminal(){ if(termActive) return; termActive=true; const host=document.getElementById('terminal');
  host.innerHTML = `<pre id="out"></pre><div class="row"><span>$</span><input id="in" class="mono" style="flex:1;background:transparent;border:1px solid var(--border);color:inherit;padding:6px"></div>`;
  inputEl=document.getElementById('in'); outEl=document.getElementById('out'); inputEl.focus();
  inputEl.addEventListener('keydown', (e)=>{
    if(e.key==='Enter') { const val=inputEl.value.trim(); history.push(val); hIdx=history.length; print(`$ ${val}`); run(val); inputEl.value=''; }
    if(e.key==='ArrowUp'){ hIdx=Math.max(0,hIdx-1); inputEl.value=history[hIdx]||''; }
    if(e.key==='ArrowDown'){ hIdx=Math.min(history.length,hIdx+1); inputEl.value=history[hIdx]||''; }
  });
  print('Terminal online. Type `help`.');
}
function run(line){ if(!line) return; const parts=line.split(' '); let cmd=parts.shift();
  // support two-word commands
  if(commands[cmd]===undefined && parts.length){ const two=`${cmd} ${parts[0]}`; if(commands[two]){ cmd=two; parts.shift(); }}
  const fn=commands[cmd]; if(!fn){ print('Unknown command. Type `help`.'); return; }
  try{ fn(...parts); }catch(e){ print('Error: '+e.message); }
}
function print(s){ outEl.innerText += s + "\n"; outEl.scrollTop=outEl.scrollHeight; }


function respond(){ const chat=document.getElementById('chat'); const m=document.getElementById('mode').value; const p=document.getElementById('prompt').value||'summarise latest alerts';
  const box=document.createElement('pre'); box.textContent='[You] '+p; chat.appendChild(box);
  const out=document.createElement('pre'); chat.appendChild(out);
  const replies = {
    'Analyst':   ['Correlating identity events…','MFA fatigue pattern detected.','Recommend CA policy: block legacy auth; enforce MFA re‑registration.'],
    'Incident Commander': ['Declaring SEV‑2.','Containment: disable compromised accounts, isolate hosts.','Eradication: remove persistence, reset credentials.'],
    'Forensics': ['Collecting triage artefacts (SRUM, ShimCache, Prefetch).','Hashing binaries, carving MFT timeline.','Preserve volatile memory where possible.'],
    'Cloud Defender': ['Querying sign‑in logs for impossible travel.','Risky IP from TOR exit node.','Apply sign‑in risk policy & session revoke.']
  }[m];
  let i=0; const id=setInterval(()=>{ if(i<replies.length){ typeWriter(out, `[AI‑OPS/${m}] `+replies[i++]); } else clearInterval(id); }, 900);
}


let all=[]; let view=[];
async function load(){
  const res = await fetch('projects.json');
  all = await res.json();
  applyFilters();
}
function applyFilters(){
  const q=(document.getElementById('q').value||'').toLowerCase();
  const t=(document.getElementById('type').value||'');
  const s=(document.getElementById('sort').value||'date_desc');
  view = all.filter(p=>{
    const mQ = !q || (p.title+" "+p.description+" "+(p.tags||[]).join(' ')).toLowerCase().includes(q);
    const mT = !t || p.type===t;
    return mQ && mT;
  });
  view.sort((a,b)=>{
    if(s==='date_desc') return (b.date||'').localeCompare(a.date||'');
    if(s==='date_asc') return (a.date||'').localeCompare(b.date||'');
    if(s==='title_asc') return (a.title||'').localeCompare(b.title||'');
    return 0;
  });
  render();
}
function render(){
  const grid=document.getElementById('grid');
  if(!view.length){ grid.innerHTML = `<div class='empty'>No projects match your filters.</div>`; return; }
  grid.innerHTML = view.map(card).join('');
}
function badge(tag){ return `<span class='badge'>${tag}</span>`; }
function card(p){
  const cover = p.cover ? `<img src='${p.cover}' alt='${p.title}'>` : '';
  const links = [ ['View',p.view], ['Repo',p.repo], ['PDF',p.pdf], ['Blog',p.blog] ].filter(x=>!!x[1]).map(x=>`<a class='btn' href='${x[1]}' target='_blank' rel='noopener'>${x[0]}</a>`).join('');
  const tags = (p.tags||[]).map(badge).join('');
  const date = p.date ? `<footer>${p.date}</footer>` : '';
  return `<div class='card'>${cover}<h3>${p.title}</h3><p>${p.description||''}</p><div>${tags}</div><div class='links'>${links}</div>${date}</div>`;
}
window.addEventListener('DOMContentLoaded', load);

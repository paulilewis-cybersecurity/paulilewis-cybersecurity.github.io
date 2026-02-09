
function toggleMode(){document.body.classList.toggle('light');}
// Matrix packet stream
const stream = document.getElementById('streamText');
let data='';
setInterval(()=>{data += '> packet ' + Math.random().toString(16).slice(2,8) + '
'; if(data.length>500) data=data.slice(100); stream.textContent=data;},200);
// Radar animation placeholder
const radar=document.getElementById('radar'); if(radar){const ctx=radar.getContext('2d');function draw(){ctx.clearRect(0,0,radar.width,radar.height);ctx.strokeStyle='#00eaff';ctx.beginPath();ctx.arc(radar.width/2,radar.height/2,80,0,Math.PI*2);ctx.stroke();requestAnimationFrame(draw);}draw();}

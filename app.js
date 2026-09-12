const KEY='cienie-oli-v1',SEED_VERSION=2;
const seed={
  shadows:[
    ['inglot-490','Inglot','490','','Freedom System','Double Sparkle','#b51f58',['malina','fuksja'],'active',''],
    ['inglot-426','Inglot','426','','Freedom System','Pearl','#1768b3',['niebieski','szafir'],'active',''],
    ['inglot-253','Inglot','253','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-301','Inglot','301','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-207','Inglot','207','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-335','Inglot','335','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-281','Inglot','281','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-296','Inglot','296','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-382','Inglot','382','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-304','Inglot','304','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-292','Inglot','292','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-283','Inglot','283','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-297','Inglot','297','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-299','Inglot','299','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-300','Inglot','300','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-303','Inglot','303','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-311','Inglot','311','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-390','Inglot','390','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-215','Inglot','215','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-319','Inglot','319','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-209','Inglot','209','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-357','Inglot','357','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-351','Inglot','351','','Freedom System','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-108r','Inglot','108R','','Rainbow','Matte','#ed762d',['pomarańczowy'],'active',''],
    ['inglot-117r','Inglot','117R','','Rainbow','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-134r','Inglot','134R','','Rainbow','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-106r','Inglot','106R','','Rainbow','Matte','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-j305','Inglot','J305','Ivory','Jennifer Lopez','Pearl','#dcc7a4',['beż','rozświetlający'],'active',''],
    ['inglot-j337','Inglot','J337','','Jennifer Lopez','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-701','Inglot','701',"Just Chillin’",'Creamy Pigment','Creamy Pigment','#ead9b1',['białe złoto'],'active',''],
    ['inglot-463','Inglot','463','','Freedom System','Double Sparkle','#d8c8ad',['wanilia','złoto'],'active',''],
    ['inglot-153','Inglot','153','','Freedom System','AMC Shine','#8d766d',['taupe'],'active',''],
    ['inglot-409','Inglot','409','','Freedom System','Pearl','#5d4035',['brąz','bronze'],'active',''],
    ['inglot-402','Inglot','402','','Freedom System','Pearl','#8a706b',['taupe','brąz'],'active',''],
    ['inglot-397','Inglot','397','','Freedom System','Pearl','#d6b6a8',['szampan','róż'],'active',''],
    ['inglot-142','Inglot','142','','Freedom System','AMC Shine','#d4b7bb',['opalizujący','róż'],'active',''],
    ['inglot-118','Inglot','118','','Freedom System','AMC Shine','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-111','Inglot','111','','Freedom System','AMC Shine','#d3aa52',['złoto'],'active',''],
    ['inglot-102','Inglot','102','','Freedom System','AMC Shine','#b98b36',['złoto'],'active',''],
    ['inglot-140','Inglot','140','','Freedom System','AMC Shine','#387e8b',['morski'],'active',''],
    ['inglot-607','Inglot','607','','Freedom System','Pearl','#a23f4f',['malina','miedź'],'active',''],
    ['inglot-439','Inglot','439','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-450','Inglot','450','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-605','Inglot','605','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-606','Inglot','606','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-393','Inglot','393','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-433','Inglot','433','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active',''],
    ['inglot-423','Inglot','423','','Freedom System','Pearl','#c7c0bc',['kolor do uzupełnienia'],'active','']
  ].map(x=>({id:x[0],brand:x[1],number:x[2],name:x[3],series:x[4],finish:x[5],hex:x[6],tags:x[7],status:x[8],location:x[9],texture:'',notes:''})),
  palettes:[]
};
let state=load(), currentTexture='', groupBy='brand', paintColor='#b51f58', painting=false;
function load(){try{const saved=JSON.parse(localStorage.getItem(KEY));if(!saved)return {...structuredClone(seed),seedVersion:SEED_VERSION};if((saved.seedVersion||1)<SEED_VERSION){const known=new Map(saved.shadows.map(s=>[`${s.brand}|${s.number}`.toLowerCase(),s]));seed.shadows.forEach(fresh=>{const old=known.get(`${fresh.brand}|${fresh.number}`.toLowerCase());if(old){old.series=fresh.series;old.finish=fresh.finish}else saved.shadows.push(structuredClone(fresh))});saved.seedVersion=SEED_VERSION;localStorage.setItem(KEY,JSON.stringify(saved))}return saved}catch{return {...structuredClone(seed),seedVersion:SEED_VERSION}}}
function save(){localStorage.setItem(KEY,JSON.stringify(state));renderAll()}
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function esc(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function swatchStyle(s){return `--swatch:${s.hex||'#ccc'};${s.texture?`background-image:url('${s.texture}')`:''}`}
function shadowLabel(s){return [s.brand,s.number,s.name].filter(Boolean).join(' ')}
function renderShadows(){
  const q=$('#search').value.trim().toLowerCase(), status=$('#statusFilter').value;
  const list=state.shadows.filter(s=>(status==='all'||s.status===status)&&JSON.stringify(s).toLowerCase().includes(q)).sort((a,b)=>shadowLabel(a).localeCompare(shadowLabel(b),'pl',{numeric:true}));
  $('#shadowCount').textContent=`${list.length} ${list.length===1?'cień':list.length<5?'cienie':'cieni'}`;
  $('#shadowGrid').innerHTML=list.map(s=>`<article class="shadow-card status-${s.status}" data-id="${s.id}"><div class="status-dot"></div><div class="swatch" style="${swatchStyle(s)}"></div><div class="card-info"><h3>${esc(s.brand)} ${esc(s.number)}</h3><p>${esc(s.name||s.finish||s.series||'Bez opisu')}</p><div class="tag-row">${s.tags.slice(0,3).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></div></article>`).join('');
  $('#emptyShadows').classList.toggle('hidden',list.length>0);
  $$('.shadow-card').forEach(el=>el.onclick=()=>openShadow(el.dataset.id));
}
function renderGroups(){
  const map=new Map(); state.shadows.forEach(s=>{let vals=groupBy==='tags'?s.tags:[s[groupBy]||'Bez kategorii'];vals.forEach(v=>{if(!map.has(v))map.set(v,[]);map.get(v).push(s)})});
  $('#groupList').innerHTML=[...map.entries()].sort((a,b)=>a[0].localeCompare(b[0],'pl')).map(([n,items])=>`<div class="group-card"><div class="group-head"><h3>${esc(n)}</h3><span class="muted">${items.length}</span></div><div class="mini-grid">${items.map(mini).join('')}</div></div>`).join('')||'<div class="empty"><p>Brak kategorii</p></div>';
  bindMinis();
}
function mini(s,drag=false){return `<div class="mini-shadow" ${drag?'draggable="true"':''} data-id="${s.id}" title="${esc(shadowLabel(s))}" style="${swatchStyle(s)}"></div>`}
function bindMinis(){
  $$('.mini-shadow').forEach(el=>{el.onclick=()=>openShadow(el.dataset.id);el.ondragstart=e=>e.dataTransfer.setData('text/plain',el.dataset.id)});
}
function renderPalettes(){
  $('#paletteList').innerHTML=state.palettes.map(p=>{const shadows=state.shadows.filter(s=>s.location===p.id);let slots=p.type==='container'?Math.max(p.slots,shadows.length+1):p.slots;return `<article class="palette-card"><div class="palette-head"><div><h3>${esc(p.name)}</h3><p class="muted">${shadows.length} / ${p.type==='palette'?p.slots:'∞'}</p></div><button class="delete-palette" data-pid="${p.id}" title="Usuń miejsce">×</button></div><div class="palette-slots">${Array.from({length:slots},(_,i)=>`<div class="palette-slot" data-pid="${p.id}">${shadows[i]?mini(shadows[i],true):''}</div>`).join('')}</div></article>`}).join('');
  const unplaced=state.shadows.filter(s=>!s.location);$('#unplaced').innerHTML=unplaced.map(s=>mini(s,true)).join('');$('#unplacedWrap').classList.toggle('hidden',!unplaced.length);
  $$('.palette-slot').forEach(slot=>{slot.ondragover=e=>{e.preventDefault();slot.classList.add('over')};slot.ondragleave=()=>slot.classList.remove('over');slot.ondrop=e=>{e.preventDefault();const s=state.shadows.find(x=>x.id===e.dataTransfer.getData('text/plain'));if(s){s.location=slot.dataset.pid;save();toast('Cień przeniesiony')} }});
  $$('.delete-palette').forEach(b=>b.onclick=()=>{if(confirm('Usunąć tę paletę lub miejsce? Cienie pozostaną w kolekcji.')){state.shadows.forEach(s=>{if(s.location===b.dataset.pid)s.location=''});state.palettes=state.palettes.filter(p=>p.id!==b.dataset.pid);save()}});bindMinis();
}
function renderMixer(){
  $('#mixerSwatches').innerHTML=state.shadows.filter(s=>s.status!=='empty').map(s=>`<button class="mix-swatch ${s.hex===paintColor?'active':''}" data-color="${s.hex}" title="${esc(shadowLabel(s))}" style="${swatchStyle(s)}"></button>`).join('');
  $$('.mix-swatch').forEach(b=>b.onclick=()=>{paintColor=b.dataset.color;renderMixer()});
}
function renderLocations(){const sel=$('#shadowForm [name=location]'),value=sel.value;sel.innerHTML='<option value="">Bez przypisania</option>'+state.palettes.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');sel.value=value}
function renderAll(){renderShadows();renderGroups();renderPalettes();renderMixer();renderLocations()}
function openShadow(id){
  const f=$('#shadowForm'), s=state.shadows.find(x=>x.id===id);f.reset();currentTexture=s?.texture||'';
  $('#shadowDialogTitle').textContent=s?'Edytuj cień':'Nowy cień';$('#deleteShadow').classList.toggle('hidden',!s);
  const data=s||{id:'',brand:'',number:'',name:'',series:'',finish:'',hex:'#b79285',status:'active',tags:[],location:'',notes:''};
  Object.entries(data).forEach(([k,v])=>{if(f.elements[k]&&k!=='texture')f.elements[k].value=Array.isArray(v)?v.join(', '):v});f.elements.picker.value=data.hex||'#b79285';showTexture();renderLocations();f.elements.location.value=data.location||'';$('#shadowDialog').showModal();
}
function showTexture(){const has=!!currentTexture;$('#textureTools').classList.toggle('hidden',!has);if(has)$('#texturePreview').src=currentTexture}
function resizeImage(file){return new Promise((resolve,reject)=>{const r=new FileReader;r.onerror=reject;r.onload=()=>{const img=new Image();img.onload=()=>{const size=420,c=document.createElement('canvas'),ctx=c.getContext('2d');c.width=c.height=size;const scale=Math.max(size/img.width,size/img.height),w=img.width*scale,h=img.height*scale;ctx.drawImage(img,(size-w)/2,(size-h)/2,w,h);resolve(c.toDataURL('image/jpeg',.82))};img.src=r.result};r.readAsDataURL(file)})}
function uid(prefix){return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),1800)}
$$('.bottom-nav button').forEach(b=>b.onclick=()=>{$$('.bottom-nav button').forEach(x=>x.classList.toggle('active',x===b));$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${b.dataset.view}`));if(b.dataset.view==='mixer')fitCanvas()});
$('#addShadow').onclick=$('#addShadowTop').onclick=()=>openShadow();$('#search').oninput=renderShadows;$('#statusFilter').onchange=renderShadows;
$$('#groupMode button').forEach(b=>b.onclick=()=>{$$('#groupMode button').forEach(x=>x.classList.toggle('active',x===b));groupBy=b.dataset.group;renderGroups()});
$$('.close-dialog').forEach(b=>b.onclick=()=>$('#shadowDialog').close());$$('.close-palette').forEach(b=>b.onclick=()=>$('#paletteDialog').close());
$('#shadowForm [name=picker]').oninput=e=>$('#shadowForm [name=hex]').value=e.target.value;$('#shadowForm [name=hex]').oninput=e=>{if(/^#[0-9a-f]{6}$/i.test(e.target.value))$('#shadowForm [name=picker]').value=e.target.value};
$('#shadowForm [name=texture]').onchange=async e=>{if(e.target.files[0]){currentTexture=await resizeImage(e.target.files[0]);showTexture()}};$('#removeTexture').onclick=()=>{currentTexture='';showTexture()};
$('#shadowForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),o=Object.fromEntries(fd);const existing=state.shadows.find(s=>s.id===o.id);const s={id:o.id||uid('shadow'),brand:o.brand.trim(),number:o.number.trim(),name:o.name.trim(),series:o.series.trim(),finish:o.finish,hex:/^#[0-9a-f]{6}$/i.test(o.hex)?o.hex:'#b79285',tags:o.tags.split(',').map(x=>x.trim()).filter(Boolean),status:o.status,location:o.location,texture:currentTexture,notes:o.notes.trim()};if(existing)Object.assign(existing,s);else state.shadows.push(s);save();$('#shadowDialog').close();toast('Cień zapisany')};
$('#deleteShadow').onclick=()=>{const id=$('#shadowForm [name=id]').value;if(id&&confirm('Usunąć ten cień z kolekcji?')){state.shadows=state.shadows.filter(s=>s.id!==id);save();$('#shadowDialog').close();toast('Cień usunięty')}};
$('#addPalette').onclick=()=>{$('#paletteForm').reset();$('#paletteDialog').showModal()};$('#paletteForm [name=type]').onchange=e=>$('#paletteForm [name=slots]').parentElement.classList.toggle('hidden',e.target.value==='container');
$('#paletteForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target);state.palettes.push({id:uid('place'),name:fd.get('name').trim(),type:fd.get('type'),slots:+fd.get('slots')||10});save();$('#paletteDialog').close();toast('Miejsce dodane')};
$('#exportData').onclick=()=>{const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`cienie-oli-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)};
$('#importData').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader;r.onload=()=>{try{const d=JSON.parse(r.result);if(!Array.isArray(d.shadows)||!Array.isArray(d.palettes))throw Error();state={shadows:d.shadows,palettes:d.palettes};save();toast('Kopia przywrócona')}catch{alert('To nie jest prawidłowa kopia Cieni Oli.')}};r.readAsText(f)};
const canvas=$('#paintCanvas'),ctx=canvas.getContext('2d');let lastPaintPoint=null;function fitCanvas(){if(!canvas.dataset.ready){ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);canvas.dataset.ready='1'}}function point(e){const r=canvas.getBoundingClientRect(),t=e.touches?.[0]||e;return{x:(t.clientX-r.left)*canvas.width/r.width,y:(t.clientY-r.top)*canvas.height/r.height}}
function transparentPaintColor(){const hex=paintColor.replace('#','');const value=hex.length===3?hex.split('').map(x=>x+x).join(''):hex;return `rgba(${parseInt(value.slice(0,2),16)},${parseInt(value.slice(2,4),16)},${parseInt(value.slice(4,6),16)},0)`}
function stampBrush(p,size){const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,size/2);g.addColorStop(0,paintColor);g.addColorStop(.72,paintColor);g.addColorStop(1,transparentPaintColor());ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,size/2,0,Math.PI*2);ctx.fill()}
function paint(e){if(!painting)return;e.preventDefault();const p=point(e),size=+$('#brushSize').value*canvas.width/canvas.clientWidth,mode=$('#blendMode').value,opacity=+$('#brushOpacity').value/100;ctx.globalAlpha=mode==='soft-mix'?opacity*.32:opacity;ctx.globalCompositeOperation=mode==='soft-mix'?'source-over':mode;const from=lastPaintPoint||p,dx=p.x-from.x,dy=p.y-from.y,distance=Math.hypot(dx,dy),steps=Math.max(1,Math.ceil(distance/(size*.12)));for(let i=1;i<=steps;i++)stampBrush({x:from.x+dx*i/steps,y:from.y+dy*i/steps},size);lastPaintPoint=p;ctx.globalAlpha=1}
canvas.onpointerdown=e=>{painting=true;lastPaintPoint=null;canvas.setPointerCapture(e.pointerId);paint(e)};canvas.onpointermove=paint;canvas.onpointerup=canvas.onpointercancel=()=>{painting=false;lastPaintPoint=null};$('#clearCanvas').onclick=()=>{ctx.globalCompositeOperation='source-over';ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height)};
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});renderAll();fitCanvas();

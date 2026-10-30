/* ============ CONFIG: ubah data di sini ============ */
const CONFIG = {
  motto: "“Mengajar dengan hati, membimbing dengan teladan, menumbuhkan generasi yang berkarakter dan berdaya saing.”",
  nama: "Wahyudin, S.Pd",
  hp: { teks: "0852-9955-7045", url: "https://wa.me/6285299557045" },
  alamat: { teks: "Dusun Balocci, Benteng Gajah, Tompobulu, Maros", url: "https://www.google.com/maps/search/?api=1&query=Dusun+Balocci+Benteng+Gajah+Tompobulu+Maros" },
  lptk: "Universitas Negeri Makassar",
  lokasi: "SMKN 3 Makassar",
  dpl: "Ir. Wabdillah, S.Pd., M.Pd",
  pamong: "Imran Madjid, S.Pd., M.Si., M.Pd",
  foto: "images/foto-profil.jpg",   /* letakkan foto di folder images */
  galeri: []                       /* contoh: ["images/kegiatan-1.jpg","images/kegiatan-2.jpg"] */
};
/* Isi 'link' dengan file lokal (contoh: "artefak/dokumen/rpp-siklus1.pdf" atau "artefak/video/siklus1.mp4"), atau dengan tautan Google Drive (berbagi: siapa saja yang memiliki tautan) atau YouTube agar permanen */
const SECTIONS = {
  terbimbing: [
    {id:"t1",tag:"Dokumen",t:"Analisis Rancangan Pembelajaran",d:"Analisis produk rancangan atau perencanaan pembelajaran untuk praktik mengajar mandiri.",link:""},
    {id:"t2",tag:"Dokumen",t:"Analisis Materi Pembelajaran",d:"Analisis materi yang sudah disusun dan diterapkan dalam praktik mengajar mandiri.",link:""},
    {id:"t3",tag:"Dokumen",t:"Analisis Media Pembelajaran",d:"Analisis media pembelajaran yang dipergunakan dalam praktik mengajar mandiri.",link:""},
    {id:"t4",tag:"Video",t:"Analisis Video Praktik Mengajar",d:"Analisis video pelaksanaan praktik mengajar mandiri.",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"},
    {id:"t5",tag:"Dokumen",t:"Analisis Kegiatan Nonmengajar",d:"Analisis kegiatan nonmengajar selama PPL.",link:""},
    {id:"t6",tag:"Dokumen",t:"Instrumen Penilaian dan Analisisnya",d:"Instrumen penilaian yang dirancang beserta analisisnya.",link:""}
  ],
  uts: [
    {id:"u1",tag:"Dokumen",t:"Modul Ajar Siklus 1: Perawatan Baterai",d:"Produk rancangan pembelajaran lengkap terbaik dari praktik mengajar mandiri siklus 1 (Perawatan Baterai, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-1-perawatan-baterai.pdf"},
    {id:"u2",tag:"Video",t:"Video Praktik Mengajar Siklus 1",d:"Video pelaksanaan praktik mengajar mandiri dari modul ajar siklus 1.",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"},
    {id:"u3",tag:"Dokumen",t:"Refleksi Siklus 1 (LK 4.1)",d:"Lembar kerja refleksi praktik pembelajaran mandiri siklus 1.",link:"artefak/dokumen/refleksi-siklus-1.pdf"}
  ],
  uas: [
    {id:"a1",tag:"Dokumen",t:"Modul Ajar Siklus 2: Sistem Pengisian",d:"Rancangan pembelajaran lengkap siklus 2 (Sistem Pengisian, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-2-sistem-pengisian.pdf"},
    {id:"a2",tag:"Dokumen",t:"Modul Ajar Siklus 3: Sistem Starter",d:"Rancangan pembelajaran lengkap siklus 3 (Sistem Starter, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-3-sistem-starter.pdf"},
    {id:"a3",tag:"Video",t:"Video Praktik Mengajar Siklus 2",d:"Video pelaksanaan praktik mengajar mandiri siklus 2.",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"},
    {id:"a4",tag:"Video",t:"Video Praktik Mengajar Siklus 3",d:"Video pelaksanaan praktik mengajar mandiri siklus 3.",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"},
    {id:"a5",tag:"Video",t:"Video Praktik Mengajar Siklus 4",d:"Video pelaksanaan praktik mengajar mandiri siklus 4 (integrasi baterai, pengisian, dan starter).",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"},
    {id:"a6",tag:"Dokumen",t:"Refleksi Siklus 2 (LK 4.2)",d:"Lembar kerja refleksi praktik pembelajaran mandiri siklus 2.",link:"artefak/dokumen/refleksi-siklus-2.pdf"},
    {id:"a7",tag:"Dokumen",t:"Refleksi Siklus 3 (LK 4.3)",d:"Lembar kerja refleksi praktik pembelajaran mandiri siklus 3.",link:"artefak/dokumen/refleksi-siklus-3.pdf"},
    {id:"a8",tag:"Dokumen",t:"Refleksi Siklus 4 (LK 4.4)",d:"Lembar kerja refleksi siklus 4 (integrasi perawatan baterai, sistem pengisian, dan sistem starter).",link:"artefak/dokumen/refleksi-siklus-4.pdf"}
  ],
  rtl: [{id:"r1",tag:"Dokumen",t:"Dokumen Rencana Tindak Lanjut",d:"Berkas lengkap rencana tindak lanjut.",link:""}],
  dok: [{id:"d1",tag:"Dokumen",t:"Laporan Dokumentasi Kegiatan",d:"Berkas pendukung dokumentasi PPL.",link:""},{id:"d2",tag:"Video",t:"Video Dokumentasi Kegiatan",d:"Rekaman kegiatan selama PPL.",link:""}]
};
const RTL = [
  ["Perbaikan pembelajaran","Tuliskan aspek yang akan diperbaiki berdasarkan refleksi tiap siklus."],
  ["Pengembangan profesional","Tuliskan rencana pelatihan, komunitas belajar, atau publikasi yang akan diikuti."],
  ["Penerapan di sekolah","Tuliskan rencana penerapan hasil PPL di kelas dan sekolah Anda."]
];
const MENU = [["beranda","Beranda"],["profil","Profil"],["terbimbing","Praktik Terbimbing"],["uts","Ujian Tengah Semester"],["uas","Ujian Akhir Semester"],["rtl","Rencana Tindak Lanjut"],["dokumentasi","Dokumentasi"]];

/* ============ util ============ */
const $=s=>document.querySelector(s);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const temp={}; // file lokal sementara (sesi ini)
const find=id=>Object.values(SECTIONS).flat().find(i=>i.id===id);
const getLink=i=>store.get('ep:'+i.id)||i.link||'';
function toEmbed(u){
  try{const x=new URL(u);
    if(/youtu\.be$/.test(x.hostname))return 'https://www.youtube.com/embed/'+x.pathname.slice(1);
    if(/youtube\.com$/.test(x.hostname)&&x.searchParams.get('v'))return 'https://www.youtube.com/embed/'+x.searchParams.get('v');
    if(/drive\.google\.com$/.test(x.hostname)){const m=x.pathname.match(/\/d\/([^/]+)/);if(m)return 'https://drive.google.com/file/d/'+m[1]+'/preview';}
    if(/docs\.google\.com$/.test(x.hostname))return u.replace(/\/(edit|view).*$/,'/preview');
  }catch(e){}return u;
}
const eye='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';

/* ============ render ============ */
$('#nav').innerHTML=MENU.map(([id,l])=>`<button data-go="${id}">${l}</button>`).join('');
$('#motto').firstChild.textContent=CONFIG.motto;
const link=(o)=>`<a href="${o.url}" target="_blank" rel="noopener">${o.teks}</a>`;
$('#info').innerHTML=[["Nama Lengkap",CONFIG.nama],["Nomor HP / WhatsApp",link(CONFIG.hp)],["Alamat",link(CONFIG.alamat)],["LPTK",CONFIG.lptk],["Lokasi PPL",CONFIG.lokasi],["Dosen Pembimbing Lapangan",CONFIG.dpl],["Guru Pamong",CONFIG.pamong]].map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
$('#rtlBox').innerHTML=RTL.map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('');
const keys={terbimbing:'g-terbimbing',uts:'g-uts',uas:'g-uas',rtl:'g-rtl',dok:'g-dok'};
function renderItems(){
  for(const k in keys){
    $('#'+keys[k]).innerHTML=SECTIONS[k].map(i=>{const has=!!(getLink(i)||temp[i.id]);
      return `<article class="card item" data-k="${i.tag}"><span class="tag">${i.tag}</span><h3>${i.t}</h3><p>${i.d}</p><div class="acts"><button class="view" data-open="${i.id}" aria-label="Lihat file ${i.t}">${eye}Lihat file</button><span class="state ${has?'ok':''}">${has?'File tersedia':'Belum ada file'}</span></div></article>`}).join('');
  }
}
renderItems();

/* ============ animasi ============ */
const hh=$('.hero h1');hh.setAttribute('aria-label',hh.textContent.trim());
hh.innerHTML=hh.textContent.trim().split(/\s+/).map((w,i)=>`<span class="w" aria-hidden="true" style="--w:${i}">${w}</span>`).join(' ');
let tm,tm0;
function typeMotto(){const el=$('#motto').firstChild;clearInterval(tm);clearTimeout(tm0);
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=CONFIG.motto;return}
  el.textContent='';let n=0;
  tm0=setTimeout(()=>{tm=setInterval(()=>{n++;el.textContent=CONFIG.motto.slice(0,n);if(n>=CONFIG.motto.length)clearInterval(tm)},38)},1100)}
/* ============ navigasi ============ */
function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));
  const p=document.getElementById(id)||$('#beranda');p.classList.add('show');
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.go===p.id));
  const b=document.querySelector(`nav button[data-go="${p.id}"]`);if(b)b.scrollIntoView({inline:'center',block:'nearest'});
  window.scrollTo({top:0,behavior:'smooth'});
  p.querySelectorAll('.card,.gal figure').forEach((c,i)=>c.style.setProperty('--i',i));
  p.classList.add('enter');clearTimeout(p._t);p._t=setTimeout(()=>p.classList.remove('enter'),1800);
  if(p.id==='beranda')typeMotto();
  if(location.hash!=='#'+p.id)history.replaceState(null,'','#'+p.id);
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g)go(g.dataset.go);
  const o=e.target.closest('[data-open]');if(o)openFile(o.dataset.open);
});
window.addEventListener('hashchange',()=>go(location.hash.slice(1)));
go(location.hash.slice(1)||'beranda');

/* ============ tema ============ */
$('#theme').onclick=()=>{const d=document.documentElement;const dark=getComputedStyle(d).colorScheme==='dark';d.dataset.theme=dark?'light':'dark';store.set('ep:theme',d.dataset.theme)};
const st=store.get('ep:theme');if(st)document.documentElement.dataset.theme=st;

/* ============ foto ============ */
let target=null;
function setPhoto(el,src){el.querySelector('img').src=src;el.classList.add('has')}
['heroPhoto','avatar'].forEach(id=>{const el=document.getElementById(id);
  const saved=store.get('ep:'+id);if(saved)setPhoto(el,saved);else{const t=new Image();t.onload=()=>setPhoto(el,CONFIG.foto);t.src=CONFIG.foto}
  const pick=()=>{target=el;$('#photoIn').click()};
  el.onclick=pick;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick()}};
});
function readImg(f,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const m=900,s=Math.min(1,m/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.82))};im.src=r.result};r.readAsDataURL(f)}
$('#photoIn').onchange=e=>{const f=e.target.files[0];if(!f||!target)return;readImg(f,d=>{setPhoto(target,d);store.set('ep:'+target.id,d);
  const other=document.getElementById(target.id==='avatar'?'heroPhoto':'avatar');if(!other.classList.contains('has')){setPhoto(other,d);store.set('ep:'+other.id,d)}});e.target.value=''};

/* galeri */
let gal=[];try{gal=JSON.parse(store.get('ep:gal')||'[]')}catch(e){}
function drawGal(){$('#gal').querySelectorAll('figure:not(.add)').forEach(f=>f.remove());
  [...CONFIG.galeri,...gal].forEach(s=>{const f=document.createElement('figure');f.innerHTML=`<img src="${s}" alt="Dokumentasi PPL">`;$('#gal').appendChild(f)})}
drawGal();
$('#addPhoto').onclick=()=>$('#galIn').click();
$('#addPhoto').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#galIn').click()}};
$('#galIn').onchange=e=>{[...e.target.files].forEach(f=>readImg(f,d=>{gal.push(d);drawGal();store.set('ep:gal',JSON.stringify(gal.slice(-12)))}));e.target.value=''};

/* ============ penampil file ============ */
let cur=null;
function openFile(id){
  cur=find(id);$('#mt').textContent=cur.t;$('#lnk').value=getLink(cur);
  show();$('#modal').classList.add('open');document.body.style.overflow='hidden';
}
function show(){
  const mb=$('#mb'),u=getLink(cur),t=temp[cur.id],ext=$('#ext');ext.style.display='none';
  if(t){mb.innerHTML=t.type.startsWith('video')?`<video src="${t.url}" controls></video>`:t.type.startsWith('image')?`<img src="${t.url}" style="max-width:100%;margin:auto" alt="">`:`<iframe src="${t.url}" title="Pratinjau"></iframe>`}
  else if(u&&/\.(mp4|webm|ogg|mov)(\?|$)/i.test(u)){mb.innerHTML=`<video src="${u}" controls></video>`;ext.href=u;ext.style.display=''}
  else if(u){const e=toEmbed(u);mb.innerHTML=`<iframe src="${e}" allow="autoplay;fullscreen" allowfullscreen title="Pratinjau"></iframe>`;ext.href=u;ext.style.display=''}
  else mb.innerHTML='<div class="empty"><b>Belum ada file</b><br>Tempel tautan Google Drive atau YouTube di bawah, atau pilih file dari perangkat untuk melihatnya di sini.</div>';
}
function closeM(){$('#modal').classList.remove('open');$('#mb').innerHTML='';document.body.style.overflow=''}
$('#close').onclick=closeM;$('#modal').onclick=e=>{if(e.target.id==='modal')closeM()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
$('#saveLnk').onclick=()=>{const v=$('#lnk').value.trim();store.set('ep:'+cur.id,v);delete temp[cur.id];show();renderItems()};
$('#up').onchange=e=>{const f=e.target.files[0];if(!f)return;temp[cur.id]={url:URL.createObjectURL(f),type:f.type};show();renderItems();e.target.value=''};

/* ============ pilihan tampilan ============ */
const LOOKS=['klasik','minimal','navy'];
function setLook(l){if(!LOOKS.includes(l))l='klasik';document.documentElement.dataset.look=l;document.querySelectorAll('.looks button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.look===l));store.set('ep:look',l)}
document.querySelectorAll('.looks button').forEach(b=>b.onclick=()=>setLook(b.dataset.look));
setLook(store.get('ep:look')||'klasik');

/* ============ menu smartphone ============ */
const hdr=$('header'),burger=$('#burger');
function menu(open){hdr.classList.toggle('menu-open',open);burger.setAttribute('aria-expanded',open)}
burger.onclick=e=>{e.stopPropagation();menu(!hdr.classList.contains('menu-open'))};
document.addEventListener('click',e=>{if(e.target.closest('nav button')||!e.target.closest('header'))menu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false)});
matchMedia('(min-width:821px)').addEventListener('change',()=>menu(false));

/* ============ latar: jaringan bintang interaktif ============ */
(function(){
  const c=document.createElement('canvas');c.id='fx';c.setAttribute('aria-hidden','true');$('.bg').appendChild(c);
  const x=c.getContext('2d'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  let W,H,D,P=[],S=[],mx=-9999,my=-9999,color='#2457c5',f=0;
  function size(){D=Math.min(devicePixelRatio||1,2);W=c.width=Math.round(innerWidth*D);H=c.height=Math.round(innerHeight*D);
    const n=Math.min(95,Math.round(innerWidth*innerHeight/(innerWidth<820?15000:13000)));
    P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4*D,vy:(Math.random()-.5)*.4*D,r:(1+Math.random()*2)*D,t:Math.random()*6}))}
  function draw(){
    if(f++%90===0)color=getComputedStyle(document.documentElement).getPropertyValue('--blue').trim()||color;
    x.clearRect(0,0,W,H);x.fillStyle=x.strokeStyle=color;x.lineWidth=D;
    const L=150*D,M=190*D;
    for(const p of P){if(!rm){p.x+=p.vx;p.y+=p.vy;p.t+=.03}
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
    for(let i=0;i<P.length;i++){const a=P[i];
      for(let j=i+1;j<P.length;j++){const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<L){x.globalAlpha=(1-d/L)*.38;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
      const m=Math.hypot(a.x-mx,a.y-my);
      if(m<M){x.globalAlpha=(1-m/M)*.7;x.lineWidth=1.4*D;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(mx,my);x.stroke();x.lineWidth=D;if(!rm){a.x+=(mx-a.x)*.004;a.y+=(my-a.y)*.004}}
      x.globalAlpha=.55+.35*Math.sin(a.t);x.beginPath();x.arc(a.x,a.y,a.r*(m<M?1.5:1),0,7);x.fill()}
    if(!rm){if(Math.random()<.004&&S.length<2)S.push({x:Math.random()*W*.7,y:Math.random()*H*.35,l:0});
      S=S.filter(s=>s.l<70);
      for(const s of S){s.x+=9*D;s.y+=4*D;s.l++;const g=x.createLinearGradient(s.x,s.y,s.x-130*D,s.y-58*D);
        g.addColorStop(0,color);g.addColorStop(1,'transparent');x.globalAlpha=1-s.l/70;x.strokeStyle=g;x.lineWidth=2*D;
        x.beginPath();x.moveTo(s.x,s.y);x.lineTo(s.x-130*D,s.y-58*D);x.stroke();x.strokeStyle=color;x.lineWidth=D}}
    x.globalAlpha=1}
  function loop(){if(!document.hidden)draw();requestAnimationFrame(loop)}
  size();draw();if(!rm)requestAnimationFrame(loop);
  let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{size();if(rm)draw()},150)});
  addEventListener('pointermove',e=>{mx=e.clientX*D;my=e.clientY*D},{passive:true});
  addEventListener('pointerleave',()=>{mx=my=-9999});
  addEventListener('pointerup',e=>{if(e.pointerType!=='mouse'){mx=my=-9999}});
})();

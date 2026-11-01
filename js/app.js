/* ============ CONFIG: ubah data di sini ============ */
const CONFIG = {
  motto: "“Mengajar dengan hati, membimbing dengan teladan, menumbuhkan generasi yang berkarakter dan berdaya saing.”",
  nama: "Wahyudin, S.Pd",
  hp: { teks: "0852-9955-7045", url: "https://wa.me/6285299557045" },
  alamat: { teks: "Dusun Balocci, Benteng Gajah, Tompobulu, Maros", url: "https://www.google.com/maps/search/?api=1&query=Dusun+Balocci+Benteng+Gajah+Tompobulu+Maros" },
  lptk: "Universitas Negeri Makassar",
  lokasi: "SMK Negeri 3 Makassar",
  dpl: "Ir. Wabdillah, S.Pd., M.Pd",
  pamong: "Imran Madjid, S.Pd., M.Si., M.Pd",
  foto: "images/foto-profil.jpg",   /* letakkan foto di folder images */
  sosmed: [
    {ikon:"whatsapp",teks:"0852-9955-7045",url:"https://wa.me/6285299557045"},
    {ikon:"web",teks:"wahyudintamrin.com",url:"https://wahyudintamrin.com"},
    {ikon:"email",teks:"wahyudintamrin@gmail.com",url:"mailto:wahyudintamrin@gmail.com"}
  ]
};
/* Isi 'link' dengan file lokal (contoh: "artefak/dokumen/rpp-siklus1.pdf" atau "artefak/video/siklus1.mp4"), atau dengan tautan Google Drive (berbagi: siapa saja yang memiliki tautan) atau YouTube agar permanen */
const SECTIONS = {
  terbimbing: [
    {id:"t1",tag:"Dokumen",t:"Analisis Rancangan Pembelajaran",d:"Analisis produk rancangan atau perencanaan pembelajaran untuk praktik mengajar mandiri.",link:"artefak/dokumen/analisis-1-rancangan-pembelajaran.pdf"},
    {id:"t2",tag:"Dokumen",t:"Analisis Materi Pembelajaran",d:"Analisis materi yang sudah disusun dan diterapkan dalam praktik mengajar mandiri.",link:"artefak/dokumen/analisis-2-materi-pembelajaran.pdf"},
    {id:"t3",tag:"Dokumen",t:"Analisis Media Pembelajaran",d:"Analisis media pembelajaran yang dipergunakan dalam praktik mengajar mandiri.",link:"artefak/dokumen/analisis-3-media-pembelajaran.pdf"},
    {id:"t4",tag:"Dokumen",t:"Analisis Video Praktik Mengajar",d:"Analisis video pelaksanaan praktik mengajar mandiri.",link:"artefak/dokumen/analisis-4-video-praktik-mengajar.pdf"},
    {id:"t5",tag:"Dokumen",t:"Analisis Kegiatan Nonmengajar",d:"Analisis kegiatan nonmengajar selama praktik pengalaman lapangan.",link:"artefak/dokumen/analisis-5-kegiatan-nonmengajar.pdf"},
    {id:"t6",tag:"Dokumen",t:"Instrumen Penilaian dan Analisisnya",d:"Instrumen penilaian yang dirancang beserta analisisnya.",link:"artefak/dokumen/analisis-6-instrumen-penilaian.pdf"}
  ],
  uts: [
    {id:"u1",tag:"Dokumen",t:"Modul Ajar Siklus 1: Perawatan Baterai",d:"Produk rancangan pembelajaran lengkap terbaik dari praktik mengajar mandiri siklus 1 (Perawatan Baterai, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-1-perawatan-baterai.pdf"},
    {id:"u2",tag:"Video",t:"Video Praktik Mengajar Siklus 1",d:"Video pelaksanaan praktik mengajar mandiri dari modul ajar siklus 1.",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"}
  ],
  uas: [
    {id:"a1",tag:"Dokumen",t:"Modul Ajar Siklus 2: Sistem Pengisian",d:"Rancangan pembelajaran lengkap siklus 2 (Sistem Pengisian, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-2-sistem-pengisian.pdf"},
    {id:"a2",tag:"Dokumen",t:"Modul Ajar Siklus 3: Sistem Starter",d:"Rancangan pembelajaran lengkap siklus 3 (Sistem Starter, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-3-sistem-starter.pdf"},
    {id:"a6",tag:"Dokumen",t:"Modul Ajar Siklus 4: Sistem Penerangan dan Lampu Tanda",d:"Rancangan pembelajaran lengkap siklus 4 (Sistem Penerangan dan Lampu Tanda, Kelas XI TKRO).",link:"artefak/dokumen/modul-siklus-4-sistem-penerangan-dan-lampu-tanda.pdf"},
    {id:"a3",tag:"Video",t:"Video Praktik Mengajar",d:"Video pelaksanaan praktik mengajar mandiri.",link:"https://www.youtube.com/watch?v=XqTrxBIe__k"}
  ],
  rtl: [{id:"r1",tag:"Dokumen",t:"Dokumen Rencana Tindak Lanjut",d:"Rencana perbaikan pembelajaran, pengembangan profesional, dan penerapan di sekolah setelah PPL mandiri.",link:"artefak/dokumen/rencana-tindak-lanjut.pdf"}]
};
const RTL = [
  ["Perbaikan pembelajaran","Membatasi penjelasan awal dan mengatur alokasi waktu tiap tahap, menerapkan rotasi pos dan pembagian peran, menyediakan job sheet bergambar serta tugas dasar dan tantangan, memperkuat rubrik penilaian proses, checklist K3, dan templat laporan praktik."],
  ["Pengembangan profesional","Menjaga refleksi berkelanjutan dengan siklus plan–do–see, memperdalam kompetensi teknis melalui manual pabrikan dan pelatihan otomotif, berbagi praktik dengan rekan guru, dan mengembangkan media digital interaktif."],
  ["Penerapan di sekolah","Memakai perangkat revisi pada kelas XI TKRO lain dan kompetensi kelistrikan berikutnya, menerapkan pembelajaran berbasis masalah hingga blind case pada materi lain, serta menyimpan perangkat sebagai templat bersama."]
];
const MENU = [["beranda","Beranda"],["profil","Profil"],["terbimbing","Praktik Terbimbing"],["uts","Ujian Tengah Semester"],["uas","Ujian Akhir Semester"],["rtl","Rencana Tindak Lanjut"],["dokumentasi","Dokumentasi"]];
/* Galeri Dokumentasi: tambah foto dengan menyalin file ke folder images lalu daftarkan namanya di sini */
const pad=n=>String(n).padStart(2,"0");
const rentang=(awal,akhir,pre,ext)=>Array.from({length:akhir-awal+1},(_,i)=>"images/"+pre+pad(awal+i)+"."+ext);
const GALERI=[
  {judul:"Praktik Mengajar",ket:"Pelaksanaan praktik mengajar mandiri di kelas XI dan bengkel.",foto:rentang(1,20,"ppl-","jpeg")},
  {judul:"Kunjungan Dosen Pembimbing Lapangan",ket:"Kunjungan dan pendampingan dosen pembimbing lapangan di SMK Negeri 3 Makassar.",foto:rentang(1,10,"kunjungan-dpl-","jpeg")},
  {judul:"Kegiatan Nonmengajar",ket:"Keterlibatan dalam kegiatan sekolah di luar pembelajaran di kelas.",foto:rentang(1,4,"nonmengajar-","jpeg")}
];

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
const NAVI={beranda:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',profil:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',terbimbing:'<path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3zM8 8h7"/>',uts:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/>',uas:'<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>',rtl:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',dokumentasi:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 9"/>'};
const DOCI='<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',PLAYI='<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>';
$('#nav').innerHTML=MENU.map(([id,l])=>`<button data-go="${id}" title="${(document.querySelector('#'+id+' h2')||{textContent:l}).textContent}"><svg viewBox="0 0 24 24">${NAVI[id]}</svg><span>${l}</span></button>`).join('');
$('#motto').firstChild.textContent=CONFIG.motto;
const link=(o)=>`<a href="${o.url}" target="_blank" rel="noopener">${o.teks}</a>`;
$('#info').innerHTML=[["Nama Lengkap",CONFIG.nama],["Nomor Telepon / WhatsApp",link(CONFIG.hp)],["Alamat",link(CONFIG.alamat)],["Lembaga Pendidikan Tenaga Kependidikan",CONFIG.lptk],["Lokasi Praktik",CONFIG.lokasi],["Dosen Pembimbing Lapangan",CONFIG.dpl],["Guru Pamong",CONFIG.pamong]].map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
$('#rtlBox').innerHTML=RTL.map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('');
const keys={terbimbing:'g-terbimbing',uts:'g-uts',uas:'g-uas',rtl:'g-rtl'};
function renderItems(){
  for(const k in keys){
    $('#'+keys[k]).innerHTML=SECTIONS[k].map(i=>{const has=!!(getLink(i)||temp[i.id]);
      return `<article class="card item" data-k="${i.tag}"><div class="ico">${i.tag==='Video'?PLAYI:DOCI}</div><div class="txt"><span class="tag">${i.tag}</span><h3>${i.t}</h3><p>${i.d}</p></div><div class="acts"><button class="view" data-open="${i.id}" aria-label="Lihat file ${i.t}">${eye}Lihat file</button><span class="state ${has?'ok':''}">${has?'File tersedia':'Belum ada file'}</span></div></article>`}).join('');
  }
}
renderItems();
let lbList=[],lbIdx=0;
$('#galeri').innerHTML=GALERI.map((g,gi)=>`<div class="gsec"><h3>${g.judul}<small>${g.foto.length} foto</small></h3><p class="gket">${g.ket}</p><div class="gal">${g.foto.map((f,fi)=>`<figure data-gal="${gi}" data-fi="${fi}" tabindex="0" role="button" aria-label="Perbesar foto ${fi+1} ${g.judul}"><img src="${f}" loading="lazy" decoding="async" alt="${g.judul} ${fi+1}"></figure>`).join('')}</div></div>`).join('');
function lbShow(i){lbIdx=(i+lbList.length)%lbList.length;$('#lbi').src=lbList[lbIdx];$('#lbc').textContent=lbCap+' · '+(lbIdx+1)+' dari '+lbList.length}
let lbCap='';
function lbOpen(g,i){lbList=GALERI[g].foto;lbCap=GALERI[g].judul;lbShow(i);$('#lb').classList.add('open');document.body.style.overflow='hidden'}
function lbClose(){$('#lb').classList.remove('open');$('#lbi').removeAttribute('src');document.body.style.overflow=''}
document.addEventListener('click',e=>{const f=e.target.closest('figure[data-gal]');if(f)lbOpen(+f.dataset.gal,+f.dataset.fi);
  if(e.target.id==='lb'||e.target.id==='lbx')lbClose();if(e.target.id==='lbp')lbShow(lbIdx-1);if(e.target.id==='lbf')lbShow(lbIdx+1)});
document.addEventListener('keydown',e=>{const f=e.target.closest&&e.target.closest('figure[data-gal]');if(f&&(e.key==='Enter'||e.key===' ')){e.preventDefault();lbOpen(+f.dataset.gal,+f.dataset.fi)}
  if(!$('#lb').classList.contains('open'))return;if(e.key==='Escape')lbClose();if(e.key==='ArrowLeft')lbShow(lbIdx-1);if(e.key==='ArrowRight')lbShow(lbIdx+1)});

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


/* ============ penampil file ============ */
let cur=null;
function openFile(id){
  cur=find(id);
  show();$('#modal').classList.add('open');document.body.style.overflow='hidden';
}
function show(){
  const mb=$('#mb'),u=getLink(cur),t=temp[cur.id];
  if(t){mb.innerHTML=t.type.startsWith('video')?`<video src="${t.url}" controls></video>`:t.type.startsWith('image')?`<img src="${t.url}" style="max-width:100%;margin:auto" alt="">`:`<iframe src="${t.url}" title="Pratinjau"></iframe>`}
  else if(u&&/\.(mp4|webm|ogg|mov)(\?|$)/i.test(u)){mb.innerHTML=`<video src="${u}" controls></video>`}
  else if(u){const e=toEmbed(u);mb.innerHTML=`<iframe src="${e}" allow="autoplay;fullscreen" allowfullscreen title="Pratinjau"></iframe>`}
  else mb.innerHTML='<div class="empty"><b>Belum ada file</b><br>File ini belum tersedia.</div>';
}
function closeM(){$('#modal').classList.remove('open');$('#mb').innerHTML='';document.body.style.overflow=''}
$('#close').onclick=closeM;$('#modal').onclick=e=>{if(e.target.id==='modal')closeM()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});


/* ============ menu smartphone ============ */
const hdr=$('header'),burger=$('#burger');
function menu(open){hdr.classList.toggle('menu-open',open);burger.setAttribute('aria-expanded',open)}
burger.onclick=e=>{e.stopPropagation();menu(!hdr.classList.contains('menu-open'))};
document.addEventListener('click',e=>{if(e.target.closest('nav button')||!e.target.closest('header'))menu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false)});
matchMedia('(min-width:821px)').addEventListener('change',()=>menu(false));


/* ============ media sosial ============ */
const ICON={
 facebook:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.6 3 10.3 4.6 10.3 6.9v1.6H8v3h2.3V21h3.7v-9.5h2.6l.4-3H14z"/></svg>',
 instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
 whatsapp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6L3 21z"/><path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.5-2-1-1 .7c-1-.4-1.8-1.2-2.2-2.2l.7-1-1-2L9 8.5z" fill="currentColor"/></svg>',
 email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
 web:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg>'};
$('#social').innerHTML=CONFIG.sosmed.map(m=>`<a href="${m.url}" target="_blank" rel="noopener" aria-label="${m.ikon}: ${m.teks}"><i>${ICON[m.ikon]}</i><span>${m.teks}</span></a>`).join('');

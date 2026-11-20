document.documentElement.classList.add('js');
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')};
var S=SITE,A=S.about;
var mail=function(sub){return 'mailto:'+S.email+(sub?'?subject='+encodeURIComponent(sub):'')};
/* header + hero */
$('#logo').innerHTML=esc(S.shortName)+'<i>.</i>';
$('#photo').src=S.photo;$('#photo').alt='Portrait of '+S.name;
$('#hero-copy').innerHTML='<span class="tag in1"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z"/></svg>'+esc(S.hero.tag)+'</span><h1 class="in2">'+esc(S.hero.headline)+' <b>'+esc(S.hero.highlight)+'</b></h1><p class="lead in3">'+esc(S.hero.lead)+'</p><div class="row in4"><a class="btn" href="#work">'+esc(S.hero.button1)+'</a><a class="btn line" href="#resume">'+esc(S.hero.button2)+'</a></div>';
var mq=S.marquee.map(function(x){return '<span>'+esc(x)+'</span>'}).join('');$('#mq').innerHTML=mq+mq;
/* about */
$('#about-wrap').innerHTML='<div class="eyebrow">'+esc(A.eyebrow)+'</div><h2>'+esc(A.heading)+'</h2>'
+'<div class="about"><div class="story rv">'+A.paragraphs.map(function(p){return '<p>'+esc(p)+'</p>'}).join('')+'</div>'
+'<aside class="glance rv"><h3>'+esc(A.glanceTitle)+'</h3><dl>'+A.glance.map(function(g){return '<div><dt>'+esc(g.label)+'</dt><dd>'+esc(g.value)+'</dd></div>'}).join('')+'</dl></aside></div>'
+'<div class="cols"><div class="rv"><h3>'+esc(A.experienceTitle)+'</h3><ol class="tl">'+A.experience.map(function(e){return '<li><h4>'+esc(e.role)+'</h4><div class="when">'+esc(e.place)+' · '+esc(e.when)+'</div><p>'+esc(e.text)+'</p></li>'}).join('')+'</ol></div>'
+'<div class="rv"><h3>'+esc(A.certsTitle)+'</h3><div class="certs">'+A.certs.map(function(c){return '<div class="cert"><b>'+esc(c.title)+'</b><span>'+esc(c.by)+'</span></div>'}).join('')+'</div></div></div>'
+'<div class="vals">'+A.values.map(function(v){return '<div class="val rv"><h4>'+esc(v.title)+'</h4><p>'+esc(v.text)+'</p></div>'}).join('')+'</div>';
/* headings */
$('#work-head').innerHTML='<div class="eyebrow">'+esc(S.work.eyebrow)+'</div><h2 class="big">'+esc(S.work.heading)+'</h2><p class="sub">'+esc(S.work.sub)+'</p>';
$('#tools-head').innerHTML='<div class="eyebrow">'+esc(S.tools.eyebrow)+'</div><h2 class="big">'+esc(S.tools.heading)+'</h2><p class="sub">'+esc(S.tools.sub)+'</p>';
/* contact + footer */
$('#contact').innerHTML='<div><h2>'+esc(S.contact.heading)+'</h2><div class="em" id="mail">'+esc(S.email)+'</div><p>'+esc(S.contact.text)+'</p></div><div class="cta"><a class="btn" href="'+esc(mail('Hello '+S.shortName))+'">Send an email</a><button class="btn line" type="button" id="copy">Copy email address</button><a class="btn line" href="'+esc(S.linkedin)+'" target="_blank" rel="noopener">LinkedIn</a></div>';
$('#footer').textContent=S.footer;
/* resume */
var Rz=S.resume;
$('#resume-wrap').innerHTML='<a class="back" href="#home">← Back to home</a><h1>'+esc(Rz.heading)+'</h1>'+(Rz.sub?'<p class="sub">'+esc(Rz.sub)+'</p>':'')
+(Rz.pdf&&!window.__noPdf?'<div class="row" style="margin-top:1.4rem"><a class="btn" href="'+esc(Rz.pdf)+'" download>Download PDF</a></div>':'')
+'<div class="rs"><div class="paper"><div class="pdfv" id="pdfv">'+'<img src="'+esc(Rz.image)+'" alt="Resume of '+esc(S.name)+'" width="1000" height="1414">'+'</div></div></div>';
/* real PDF, drawn with PDF.js; the image stays as fallback */
var pdfTried=false;
function loadPdf(){
  if(pdfTried||!Rz.pdf||window.__noPdf)return;pdfTried=true;
  var box=$('#pdfv'),base=document.baseURI,dpr=Math.min(window.devicePixelRatio||1,2);
  /* computers with a built-in PDF viewer: show the real PDF with its own toolbar */
  if(navigator.pdfViewerEnabled&&window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches){
    var f=document.createElement('iframe');f.className='pdfframe';f.title='Resume of '+S.name;f.src=new URL(Rz.pdf,base).href+'#navpanes=0&pagemode=none&view=FitH';
    f.style.height=Math.round(box.clientWidth*842/595+56)+'px';box.innerHTML='';box.appendChild(f);return;
  }
  import(new URL('js/vendor/pdf.min.mjs',base).href).then(function(L){
    L.GlobalWorkerOptions.workerSrc=new URL('js/vendor/pdf.worker.min.mjs',base).href;
    return L.getDocument({url:new URL(Rz.pdf,base).href}).promise;
  }).then(function(doc){
    var w=Math.max(box.clientWidth,320),jobs=[];
    for(var n=1;n<=doc.numPages;n++)jobs.push(doc.getPage(n).then(function(pg){
      var v0=pg.getViewport({scale:1}),sc=(w*dpr)/v0.width,v=pg.getViewport({scale:sc});
      var c=document.createElement('canvas');c.width=Math.floor(v.width);c.height=Math.floor(v.height);
      return pg.render({canvasContext:c.getContext('2d'),viewport:v}).promise.then(function(){return c});
    }));
    return Promise.all(jobs);
  }).then(function(cs){box.innerHTML='';cs.forEach(function(c){box.appendChild(c)});box.setAttribute('role','img');box.setAttribute('aria-label','Resume of '+S.name)})
  .catch(function(){/* keep the image */});
}
/* routing */
var H=$('#v-home'),R=$('#v-resume');
function route(){
  var h=location.hash.slice(1),r=h==='resume';
  H.hidden=r;R.hidden=!r;if(r)loadPdf();
  document.querySelectorAll('nav a[data-n]').forEach(function(a){a.classList.toggle('on',a.dataset.n===h)});
  if(r||!h||h==='home'){window.scrollTo(0,0)}else{var e=document.getElementById(h);if(e)e.scrollIntoView()}
}
window.addEventListener('hashchange',route);
/* projects */
var imgBase=function(p){return (window.__imgBase||'images/projects/')+p.id+'/'};
$('#cards').innerHTML=PROJECTS.map(function(p,i){
  var cv=p.cover?'<div class="cover hasimg"><img src="'+esc(imgBase(p)+p.cover)+'" alt="'+esc(p.title)+'" loading="lazy"></div>':'<div class="cover '+esc(p.cls)+'">'+esc(p.title)+'</div>';
  return '<article class="card rv">'+cv+'<div class="meta">'+esc(p.cat)+'</div><h3>'+esc(p.title)+'</h3><p>'+esc(p.short)+'</p><button class="btn line sm" type="button" data-i="'+i+'">View project</button></article>';
}).join('');
var d=$('#dlg'),lb=$('#lb'),cur=null;
function list(a,t){return '<'+t+'>'+a.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</'+t+'>'}
$('#cards').addEventListener('click',function(e){
  var b=e.target.closest('button[data-i]');if(!b)return;var p=cur=PROJECTS[b.dataset.i];
  $('#dt').textContent=p.title;
  var gal='';
  if(p.images&&p.images.length){gal='<div class="gal">'+p.images.map(function(im,k){return '<figure><button type="button" class="shot" data-k="'+k+'" aria-label="Enlarge image: '+esc(im.caption)+'"><img src="'+esc(imgBase(p)+im.file)+'" alt="'+esc(im.caption)+'" loading="lazy"></button><figcaption>'+esc(im.caption)+'</figcaption></figure>'}).join('')+'</div>'}
  else{for(var k=1;k<=3;k++)gal+='<div class="ph" role="img" aria-label="Image placeholder">Image placeholder '+k+'</div>';gal='<div class="gal">'+gal+'</div><p style="margin-top:.6rem;font-size:.9rem">Add your images in content.js to replace these placeholders.</p>'}
  $('#db').innerHTML='<div class="cat">'+esc(p.cat)+'</div><div><h4>Overview</h4><p>'+esc(p.overview)+'</p></div><div><h4>Objectives</h4>'+list(p.objectives,'ul')+'</div><div><h4>The challenge</h4><p>'+esc(p.challenge)+'</p></div><div><h4>Approach and process</h4>'+list(p.approach,'ol')+'</div><div><h4>Tools and skills</h4><div class="chips">'+p.tools.map(function(x){return '<span>'+esc(x)+'</span>'}).join('')+'</div>'+(p.toolsNote?'<p class="todo" style="margin-top:.7rem">'+esc(p.toolsNote)+'</p>':'')+'</div><div><h4>Results</h4>'+(p.results?'<p>'+esc(p.results)+'</p>':'<p class="todo">Results are not added yet. Add real outcomes in content.js, only what you can back up.</p>')+'</div><div><h4>Gallery</h4>'+gal+'</div>';
  d.showModal();d.scrollTop=0;
});
$('#db').addEventListener('click',function(e){
  var b=e.target.closest('.shot');if(!b||!cur)return;var im=cur.images[b.dataset.k];
  $('#lbi').src=imgBase(cur)+im.file;$('#lbi').alt=im.caption;$('#lbc').textContent=im.caption;lb.showModal();
});
$('#dx').addEventListener('click',function(){d.close()});
d.addEventListener('click',function(e){if(e.target===d)d.close()});
$('#lbx').addEventListener('click',function(){lb.close()});
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
/* tools */
var tg=$('#tgroups'),panel=$('#panel');
var logoBase=window.__logoBase||'images/logos/';
function mark(t,big){return t.logo?'<img src="'+esc(logoBase+t.logo)+'" alt="">':'<span class="ini" aria-hidden="true">'+esc(t.n.charAt(0))+'</span>'}
tg.innerHTML=TOOLS.map(function(g){return '<div class="tgroup"><h3>'+esc(g.group)+'</h3><div class="tchips">'+g.items.map(function(t){return '<button class="chip" type="button" aria-pressed="false" data-n="'+esc(t.n)+'">'+mark(t)+esc(t.n)+'</button>'}).join('')+'</div></div>'}).join('');
var small=window.matchMedia('(max-width:860px)');
var sheet=document.createElement('dialog');sheet.className='sheet';sheet.setAttribute('aria-label','Tool details');
sheet.innerHTML='<button type="button" class="btn line sm sx">Close</button><div class="panel"></div>';document.body.appendChild(sheet);
sheet.querySelector('.sx').addEventListener('click',function(){sheet.close()});
sheet.addEventListener('click',function(e){if(e.target===sheet)sheet.close()});
function pick(n,open){
  var t=null;TOOLS.forEach(function(g){g.items.forEach(function(x){if(x.n===n)t=x})});if(!t)return;
  tg.querySelectorAll('.chip').forEach(function(c){c.setAttribute('aria-pressed',c.dataset.n===n)});
  var html='<div class="swap"><div class="head">'+mark(t)+'<h3>'+esc(t.n)+'</h3></div><div class="blk"><div class="k">What it is</div><p>'+esc(t.what)+'</p></div><div class="blk"><div class="k">What I use it for</div><p>'+esc(t.use)+'</p></div><div class="blk"><div class="k">Why it matters for a VA</div><p>'+esc(t.why)+'</p></div></div>';
  panel.innerHTML=html;sheet.querySelector('.panel').innerHTML=html;
  if(open&&small.matches){if(!sheet.open)sheet.showModal();sheet.scrollTop=0}
}
tg.addEventListener('click',function(e){var c=e.target.closest('.chip');if(c)pick(c.dataset.n,true)});
if(TOOLS[0]&&TOOLS[0].items[0])pick(TOOLS[0].items[0].n);
/* copy email */
var cp=$('#copy');
cp.addEventListener('click',function(){
  var ok=function(){cp.textContent='Copied';setTimeout(function(){cp.textContent='Copy email address'},1800)};
  var sel=function(){var r=document.createRange();r.selectNodeContents($('#mail'));var s=getSelection();s.removeAllRanges();s.addRange(r);cp.textContent='Press copy on your device'};
  try{navigator.clipboard.writeText(S.email).then(ok,sel)}catch(e){sel()}
});
/* scroll reveal */
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&'IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
route();
})();

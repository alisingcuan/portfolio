/* IMAGE MANIFEST
   To show an image: put the file in the folder shown for the project, then change file:'' to the file name, e.g. file:'01.jpg'.
   Edit the cap text to change the caption. Add more lines to show more images. */
var GALLERY={
  'academic-activity-tracker':{folder:'../images/projects/academic-activity-tracker/',hint:'images/projects/academic-activity-tracker/',items:[
    {file:'',alt:'Activity tracker overview',cap:'Activity tracker overview'},
    {file:'',alt:'Deadline and submission status',cap:'Deadline and submission status'},
    {file:'',alt:'Attendance proof matching',cap:'Attendance proof matching'},
    {file:'',alt:'Apps Script automation',cap:'Apps Script automation'},
    {file:'',alt:'Drive folder organization',cap:'Drive folder organization'},
    {file:'',alt:'Activity summary',cap:'Activity summary'}
  ]},
  'social-media-campaign-support':{folder:'../images/projects/social-media-campaign-support/',hint:'images/projects/social-media-campaign-support/',items:[
    {file:'',alt:'Content calendar',cap:'Content calendar'},
    {file:'',alt:'Scheduled posts',cap:'Scheduled posts'},
    {file:'',alt:'Graphic samples',cap:'Graphic samples'},
    {file:'',alt:'Engagement monitoring',cap:'Engagement monitoring'},
    {file:'',alt:'Caption samples',cap:'Caption samples'},
    {file:'',alt:'Brand consistency set',cap:'Brand consistency set'}
  ]},
  'spreadsheet-mastery':{folder:'../images/projects/spreadsheet-mastery/',hint:'images/projects/spreadsheet-mastery/',items:[
    {file:'',alt:'Expense tracker',cap:'Expense tracker'},
    {file:'',alt:'Sales tracker',cap:'Sales tracker'},
    {file:'',alt:'Project timeline',cap:'Project timeline'},
    {file:'',alt:'Formulas and calculations',cap:'Formulas and calculations'},
    {file:'',alt:'Charts and data visualization',cap:'Charts and data visualization'},
    {file:'',alt:'Spreadsheet overview',cap:'Spreadsheet overview'}
  ]}
};
(function(){
var root=document.getElementById('gal');if(!root)return;
var P=GALLERY[root.dataset.project];if(!P)return;
var real=[],cur=0;
root.innerHTML=P.items.map(function(it,i){
  var n=('0'+(i+1)).slice(-2),body;
  if(it.file){real.push(i);body='<button type="button" class="shot" data-i="'+i+'" aria-label="Enlarge image: '+it.alt+'"><img src="'+P.folder+it.file+'" alt="'+it.alt+'" loading="lazy"></button>'}
  else body='<div class="ph" role="img" aria-label="Image placeholder: '+it.alt+'"><div>Image placeholder<small>Add '+P.hint+n+'.jpg</small></div></div>';
  return '<figure>'+body+'<figcaption>'+it.cap+'</figcaption></figure>';
}).join('');
if(!real.length)return;
var d=document.createElement('dialog');d.className='lb';d.setAttribute('aria-label','Image viewer');
d.innerHTML='<figure><img alt=""><figcaption></figcaption><div class="ctl"><button type="button" class="btn line sm" data-a="p">Previous</button><button type="button" class="btn line sm" data-a="c">Close</button><button type="button" class="btn line sm" data-a="n">Next</button></div></figure>';
document.body.appendChild(d);
var im=d.querySelector('img'),cp=d.querySelector('figcaption');
function show(k){cur=(k+real.length)%real.length;var it=P.items[real[cur]];im.src=P.folder+it.file;im.alt=it.alt;cp.textContent=it.cap}
root.addEventListener('click',function(e){var b=e.target.closest('.shot');if(!b)return;show(real.indexOf(+b.dataset.i));d.showModal()});
d.addEventListener('click',function(e){var a=e.target.dataset.a;if(a==='p')show(cur-1);else if(a==='n')show(cur+1);else if(a==='c'||e.target===d)d.close()});
document.addEventListener('keydown',function(e){if(!d.open)return;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
})();

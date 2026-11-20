(function(){
var H=document.getElementById('v-home'),R=document.getElementById('v-resume');
function route(){
  var h=location.hash.slice(1),r=h==='resume';
  H.hidden=r;R.hidden=!r;
  document.querySelectorAll('nav a[data-n]').forEach(function(a){a.classList.toggle('on',a.dataset.n===h)});
  if(r||!h||h==='home'){window.scrollTo(0,0)}else{var e=document.getElementById(h);if(e)e.scrollIntoView()}
}
window.addEventListener('hashchange',route);route();
var fl=document.getElementById('filters');
if(fl)fl.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  fl.querySelectorAll('button').forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});
  document.querySelectorAll('.tile').forEach(function(t){t.hidden=!(b.dataset.f==='All'||t.dataset.type===b.dataset.f)});
});
})();

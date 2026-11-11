
const search=document.getElementById('search'),buttons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.card')],count=document.getElementById('count');let active='Tutti';
function update(){const q=(search.value||'').toLocaleLowerCase('it').trim();let n=0;for(const c of cards){let ok=(active==='Tutti'||c.dataset.category===active)&&(!q||c.dataset.keywords.includes(q));c.hidden=!ok;if(ok)n++;}count.textContent=n+' lotti';document.querySelector('.no-results').classList.toggle('show',n===0)}
buttons.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;buttons.forEach(x=>x.classList.toggle('active',x===b));update()}));search.addEventListener('input',update);update();


// Condivisione gratuita dei lotti: i link aprono il normale dialogo del social.
// Non pubblicano automaticamente e non utilizzano account personali o sessioni.
for(const card of cards){
  const id=card.id;
  if(!/^sg-\d{3}$/.test(id))continue;
  const body=card.querySelector('.card-body');
  if(!body||body.querySelector('.share-links'))continue;
  const url=new URL(id+'.html',window.location.href).href;
  const group=document.createElement('div');
  group.className='share-links';
  const fb=document.createElement('a');
  fb.href='https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url);
  fb.target='_blank';
  fb.rel='noopener noreferrer';
  fb.textContent='Condividi su Facebook';
  fb.setAttribute('aria-label','Condividi il lotto '+id+' su Facebook');
  const wa=document.createElement('a');
  wa.href='https://api.whatsapp.com/send?text='+encodeURIComponent('Attrezzatura in vendita a Cusago: '+url);
  wa.target='_blank';
  wa.rel='noopener noreferrer';
  wa.textContent='Condividi su WhatsApp';
  wa.setAttribute('aria-label','Condividi il lotto '+id+' su WhatsApp');
  group.append(fb,wa);
  body.appendChild(group);
}

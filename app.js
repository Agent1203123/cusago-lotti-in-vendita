
const search=document.getElementById('search'),buttons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.card')],count=document.getElementById('count');let active='Tutti';
function update(){const q=(search.value||'').toLocaleLowerCase('it').trim();let n=0;for(const c of cards){let ok=(active==='Tutti'||c.dataset.category===active)&&(!q||c.dataset.keywords.includes(q));c.hidden=!ok;if(ok)n++;}count.textContent=n+' lotti';document.querySelector('.no-results').classList.toggle('show',n===0)}
buttons.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;buttons.forEach(x=>x.classList.toggle('active',x===b));update()}));search.addEventListener('input',update);update();

const modal=document.getElementById('donateModal');
document.querySelectorAll('[data-donate]').forEach(b=>b.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
document.querySelector('[data-close]').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.querySelectorAll('.amounts button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.amounts button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelector('.custom-amount').value=b.textContent.replace('₽','').trim()}));
document.querySelector('[data-report]').addEventListener('click',()=>alert('Раздел отчётности готов. После появления документов сюда можно добавить реальные PDF-файлы и данные фонда.'));
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('mobile-open'));

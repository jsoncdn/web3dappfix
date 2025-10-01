function setupScrollLinks(){
  document.querySelectorAll('[data-scroll]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      const target = el.getAttribute('data-scroll') || el.getAttribute('href');
      if (!target || !target.startsWith('#')) return;
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}

function setupMenu(){
  const menuBtn = document.getElementById('menuBtn');
  if (!menuBtn) return;
  menuBtn.addEventListener('click', ()=>{
    alert('Menu');
  });
}

window.addEventListener('DOMContentLoaded', ()=>{
  setupScrollLinks();
  setupMenu();
});


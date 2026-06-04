
function showTab(id, btn){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
function showSubTab(id, btn){
  document.querySelectorAll('.subsection').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.subtab').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
function filterLessons(sectionId){
  const q=document.getElementById('search-'+sectionId).value.toLowerCase();
  document.querySelectorAll('#'+sectionId+' .lesson').forEach(card=>{
    card.style.display=card.innerText.toLowerCase().includes(q)?'':'none';
  });
}

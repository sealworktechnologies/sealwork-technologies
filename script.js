const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const popup=document.getElementById('welcomePopup');const closePopup=()=>{popup.classList.remove('show');popup.setAttribute('aria-hidden','true');try{sessionStorage.setItem('sealworkPopupSeen','1')}catch(e){}};
let alreadySeen=false;try{alreadySeen=sessionStorage.getItem('sealworkPopupSeen')==='1'}catch(e){}
if(!alreadySeen){setTimeout(()=>{popup.classList.add('show');popup.setAttribute('aria-hidden','false')},4200)}
popup.querySelector('.popup-close').addEventListener('click',closePopup);
popup.addEventListener('click',e=>{if(e.target===popup)closePopup()});
popup.querySelector('a').addEventListener('click',closePopup);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&popup.classList.contains('show'))closePopup()});
document.getElementById('enquiryForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent('Website Enquiry - Sealwork Technologies');const body=encodeURIComponent(`Name: ${d.get('name')}\nCompany: ${d.get('company')||'Not provided'}\nContact: ${d.get('reply')}\n\nRequirement:\n${d.get('message')}`);window.location.href=`mailto:sealworktechnologies@gmail.com?subject=${subject}&body=${body}`;});

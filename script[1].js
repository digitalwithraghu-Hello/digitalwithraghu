const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const data=new FormData(this);
  const recipient='hello@digitalwithraghu.com'; // CHANGE THIS
  const subject=encodeURIComponent(`Website enquiry from ${data.get('name')}`);
  const body=encodeURIComponent(
`Name: ${data.get('name')}
Business: ${data.get('business')}
Email: ${data.get('email')}

Requirement:
${data.get('message')}`);
  window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;
});
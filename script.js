'use strict';
const booking='https://wa.me/447391659345?text='+encodeURIComponent("Hi SLICK, I'd like to book a haircut. What are your prices and next available appointments?");
document.querySelectorAll('[data-book]').forEach(a=>{a.href=booking;a.rel='noreferrer';});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
const motion=document.getElementById('motion');
function syncMotion(){document.body.classList.toggle('paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Enable motion ▷':'Pause motion Ⅱ';}
syncMotion();motion.addEventListener('click',()=>{paused=!paused;syncMotion();});
reduced.addEventListener('change',e=>{paused=e.matches;syncMotion();});
const hero=document.querySelector('.hero'),word=document.querySelector('.wordmark');
hero.addEventListener('pointermove',e=>{if(paused||reduced.matches||e.pointerType==='touch')return;const r=hero.getBoundingClientRect();word.style.setProperty('--ry',((e.clientX-r.left)/r.width*10-9)+'deg');word.style.setProperty('--rx',((e.clientY-r.top)/r.height*-5+5)+'deg');});
hero.addEventListener('pointerleave',()=>{word.style.removeProperty('--ry');word.style.removeProperty('--rx');});
if('IntersectionObserver' in window){const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){if(!paused)e.target.classList.add('reveal');reveal.unobserve(e.target);}}),{threshold:.15});document.querySelectorAll('.roots-grid,.detail-grid,.visit-grid').forEach(el=>reveal.observe(el));const sticky=document.querySelector('.mobile-book');new IntersectionObserver(entries=>{sticky.classList.toggle('visible',!entries[0].isIntersecting);},{threshold:0}).observe(hero);}
document.querySelectorAll('a[href="#privacy"]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('privacy').open=true;}));

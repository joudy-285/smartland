const P={
ss:{t:'Smart Signal',img:'smart-signal',tag:['ذكاء اصطناعي','رؤية حاسوبية'],d:'تطبيق لترجمة لغة الإشارة إلى نص وصوت في الزمن الحقيقي، يهدف إلى تسهيل التواصل بين الصم وضعاف السمع والمجتمع.',f:['التعرّف على حركات اليد بالكاميرا','تحويل الإشارة إلى نص ثم إلى صوت','واجهة بسيطة تناسب جميع الفئات']},
mk:{t:'MyKey',img:'mykey',tag:['عقارات','مركبات'],d:'منصة للإعلان عن العقارات والمركبات المعروضة للبيع والإيجار، تربط البائعين بالمشترين بسهولة.',f:['إعلانات مصنّفة للبيع والإيجار','بحث وتصفية متقدمان','صور وتفاصيل واضحة لكل إعلان']},
sd:{t:'Sada',img:'sada',tag:['تعليم','تفاعلي'],d:'منصة للتعلّم عن بعد بتجربة تفاعلية مرنة تجمع الدروس المرئية والأسئلة والشهادات.',f:['دروس فيديو منظّمة','اختبارات وأسئلة تفاعلية','شهادات إتمام']},
wl:{t:'Welcome',img:'welcome',tag:['تجارة إلكترونية','متعدد المتاجر'],d:'تطبيق للتسوق الإلكتروني متعدد المتاجر يتيح للتجار عرض منتجاتهم وللمستخدمين التسوق من مكان واحد.',f:['متاجر متعددة في تطبيق واحد','عروض وخصومات','سلة شراء سهلة']},
hp:{t:'أنظمة إدارة المشافي',img:'hospital',tag:['صحة','أنظمة مؤسسية'],d:'أنظمة متكاملة لإدارة المشافي تشمل سجلات المرضى والمواعيد والأسرّة والمخابر والصيدلية.',f:['السجل الطبي الإلكتروني','حجز المواعيد','لوحات مؤشرات للإدارة']}};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function show(id){if(!$('#'+id))id='home';
 $$('.panel').forEach(p=>p.hidden=p.id!==id);
 $$('.tabs [role=tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===id));
 $('nav').classList.remove('open');scrollTo({top:0});
 document.title=($('.tabs [data-tab='+id+']')?.textContent||'')+' | Smart Land';}
function go(id){location.hash=id}
addEventListener('hashchange',()=>show(location.hash.slice(1)));
$$('[data-tab]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();go(b.dataset.tab)}));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
$('.tabs').addEventListener('keydown',e=>{const t=$$('.tabs [role=tab]'),i=t.indexOf(document.activeElement);
 if(i<0)return;const n=e.key==='ArrowLeft'?i+1:e.key==='ArrowRight'?i-1:null;if(n!==null){e.preventDefault();const x=t[(n+t.length)%t.length];x.focus();go(x.dataset.tab)}});
$('.burger').onclick=e=>{const o=$('nav').classList.toggle('open');e.target.setAttribute('aria-expanded',o)};
function proj(k){const p=P[k];$$('.subtabs button').forEach(b=>{const on=b.dataset.proj===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});
 $('#projbox').innerHTML=`<div class="proj"><img class="rounded" src="images/${p.img}.webp" alt="${p.t}" width="1600" height="900"><div><h3>${p.t}</h3><div class="tags">${p.tag.map(x=>`<span>${x}</span>`).join('')}</div><p>${p.d}</p><ul class="ticks">${p.f.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`}
$$('.subtabs button').forEach(b=>b.onclick=()=>proj(b.dataset.proj));proj('ss');
const G=[['hero','شبكة رقمية'],['globe','حضور عالمي'],['ai-chip','الذكاء الاصطناعي'],['smart-signal','Smart Signal'],['mykey','MyKey'],['sada','Sada'],['welcome','Welcome'],['hospital','أنظمة المشافي']];
$('#gal').innerHTML=G.map(([f,t])=>`<button data-f="${f}" aria-label="تكبير: ${t}"><img src="images/${f}-thumb.webp" alt="${t}" width="640" height="360" loading="lazy"><span>${t}</span></button>`).join('');
const lb=$('#lb');$('#gal').onclick=e=>{const b=e.target.closest('button');if(b){$('img',lb).src=`images/${b.dataset.f}.webp`;lb.hidden=false}};
lb.onclick=()=>lb.hidden=true;addEventListener('keydown',e=>e.key==='Escape'&&(lb.hidden=true));
show(location.hash.slice(1)||'home');

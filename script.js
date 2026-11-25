(function(){
"use strict";
const M=window.MATERI;
const root=document.getElementById("app");
const palette={burgundy:"#792E3B",rose:"#D9B7B5",ivory:"#FBF7F0",gold:"#C6A15B"};
if(!M){root.innerHTML='<main class="main"><div class="empty">تعذر تحميل ملف المادة. تأكد من وجود materi.js بجانب index.html.</div></main>';return;}
const state={route:"welcome",unit:null,vocab:"verbs",quiz:null,answered:false,score:0};
const ui=M.ui||{};
const t=(key,fallback)=>ui[key]||fallback;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const logo="assets/logo.png";
function shell(content,showNav=true){
 return `<div class="app-shell">
 ${showNav?`<header class="topbar"><a class="brand" href="#/" aria-label="الرئيسية"><img src="${logo}" alt=""><span>مداد الهمزة</span></a><nav class="nav">${navButtons()}</nav></header>`:""}
 <main class="${showNav?'main':''}">${content}</main>
 ${showNav?`<nav class="mobile-nav">${navButtons()}</nav>`:""}
 <footer class="footer">مداد الهمزة · رحلتك نحو الكتابة العربية الصحيحة</footer></div>`;
}
function navButtons(){
 const items=[["dashboard","الرئيسية"],["units","الوحدات"],["vocab","المفردات"],["quiz","التدريبات"],["game","لعبة التصنيف"]];
 return items.map(([r,l])=>`<button type="button" data-route="${r}" class="${state.route===r?'active':''}">${l}</button>`).join("");
}
function go(route,extra){state.route=route;if(extra)Object.assign(state,extra);render();window.scrollTo({top:0,behavior:"instant"});}
function welcome(){
 return `<section class="welcome"><div class="welcome-card">
 <img class="welcome-logo" src="${logo}" alt="شعار مداد الهمزة">
 <div class="welcome-copy"><div class="eyebrow">مهارات الكتابة</div><h1>مداد الهمزة</h1>
 <p class="tagline">رحلتك نحو الكتابة العربية الصحيحة</p>
 <p class="welcome-desc">تعلم رسم الهمزة، واكتشف الفرق بين الهمزة والألف، وتدرّب على همزتي الوصل والقطع بطريقة ممتعة.</p>
 <button class="btn btn-primary" data-route="dashboard">ادخل <span aria-hidden="true">←</span></button>
 </div></div></section>`;
}
function dashboard(){
 const units=M.units||[], qs=M.questions||[], vocab=M.vocabulary||{};
 const words=[...(vocab.verbs||[]),...(vocab.nouns||[]),...(vocab.particles||[])];
 const outcome=M.learningOutcomes||{};
 return `<div class="page-head"><div><h1>لوحة التعلم</h1><p>اختر مسارك وابدأ رحلتك في تعلم الهمزة.</p></div><button class="btn btn-soft" data-route="welcome">العودة إلى البداية</button></div>
 ${outcome.generalGoal?`<div class="card"><h2>${esc(outcome.generalGoalTitle||"الهدف العام")}</h2><p>${esc(outcome.generalGoal)}</p></div>`:""}
 <div class="stats"><div class="stat"><strong>${units.length}</strong><span>وحدات</span></div><div class="stat"><strong>${qs.length}</strong><span>أسئلة</span></div><div class="stat"><strong>${words.length}</strong><span>مفردات</span></div><div class="stat"><strong>${(M.games||[]).length||3}</strong><span>أنشطة</span></div></div>
 <h2 class="section-title">الوحدات التعليمية</h2><div class="card-grid">${units.map((u,i)=>`<button class="unit-card" data-unit="${esc(u.id)}"><span class="unit-num">${i+1}</span><span><strong>${esc(u.title)}</strong><small>${esc(u.subtitle||"")}</small></span></button>`).join("")}</div>
 <h2 class="section-title">أنشطة التعلم</h2><div class="card-grid">
 <article class="card"><h2>المفردات</h2><p>تعرّف إلى الأفعال والأسماء والحروف، وصنّف الهمزة في الكلمات.</p><button class="btn btn-soft" data-route="vocab">افتح المفردات</button></article>
 <article class="card"><h2>التدريبات</h2><p>أجب عن أسئلة متنوعة من محتوى الوحدات.</p><button class="btn btn-soft" data-route="quiz">ابدأ التدريب</button></article>
 <article class="card"><h2>لعبة التصنيف</h2><p>اختر نوع الهمزة في الكلمة المعروضة.</p><button class="btn btn-soft" data-route="game">ابدأ اللعبة</button></article>
 <article class="card"><h2>التقويم النهائي</h2><p>اختبر فهمك للموضوعات التي تعلمتها.</p><button class="btn btn-primary" data-route="eval">ابدأ التقويم</button></article>
 </div>`;
}
function unitPage(id){
 const u=(M.units||[]).find(x=>x.id===id)||M.units[0];if(!u)return '<div class="empty">لا توجد وحدات متاحة.</div>';
 state.unit=u.id;
 let sections=(u.sections||[]).map(sec=>`<section class="lesson-section"><h2>${esc(sec.title)}</h2>${(sec.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join("")}
 ${(sec.rules||[]).map(r=>`<div class="rule"><p>${esc(r.text)}</p>${(r.examples||[]).length?`<div class="examples">${r.examples.map(e=>`<div class="example"><b>${esc(e.harakat||e.word)}</b>${e.note?`<small>${esc(e.note)}</small>`:""}</div>`).join("")}</div>`:""}</div>`).join("")}
 ${sec.table?tableHTML(sec.table):""}</section>`).join("");
 return `<div class="page-head"><div><h1>${esc(u.title)}</h1><p>${esc(u.subtitle||"")} ${u.sourcePage?`· صفحة ${esc(u.sourcePage)}`:""}</p></div><button class="btn btn-soft" data-route="dashboard">رجوع</button></div>${sections}
 <div class="actions"><button class="btn btn-soft" data-unit-prev="${esc(u.id)}">الوحدة السابقة</button><button class="btn btn-primary" data-route="quiz">تدرّب على الوحدة</button><button class="btn btn-soft" data-unit-next="${esc(u.id)}">الوحدة التالية</button></div>`;
}
function tableHTML(tab){
 return `<div class="table-wrap"><table><thead><tr>${(tab.columns||[]).map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${(tab.rows||[]).map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function vocabPage(){
 const groups=M.vocabulary||{}, names={verbs:"الأفعال",nouns:"الأسماء",particles:"الحروف"};
 const arr=groups[state.vocab]||[];
 return `<div class="page-head"><div><h1>المفردات</h1><p>اقرأ الكلمة وتأمل نوع الهمزة فيها.</p></div><button class="btn btn-soft" data-route="dashboard">رجوع</button></div>
 <div class="vocab-tabs">${Object.keys(names).map(k=>`<button data-vocab="${k}" class="${state.vocab===k?'active':''}">${names[k]}</button>`).join("")}</div>
 <div class="word-grid">${arr.map(w=>`<article class="word-card"><strong>${esc(w.word)}</strong>${w.harakat?`<div class="harakat">${esc(w.harakat)}</div>`:""}<small>${esc(w.form||names[state.vocab])}${w.hamzah?` · ${w.hamzah==="وصل"?"همزة الوصل":"همزة القطع"}`:""}</small>${w.reason?`<p>${esc(w.reason)}</p>`:""}</article>`).join("")||'<div class="empty">لا توجد مفردات في هذا القسم.</div>'}</div>`;
}
function makeQuiz(route){
 let ids=(M.questions||[]).map(q=>q.id);
 if(route==="eval"&&M.evaluation&&M.evaluation.questionIds)ids=M.evaluation.questionIds;
 let qs=ids.map(id=>(M.questions||[]).find(q=>q.id===id)).filter(q=>q&&Array.isArray(q.choices)&&Number.isInteger(q.answer));
 state.quiz={route,qs,index:0,score:0,selected:null,done:false};
}
function startQuiz(route){ state.route=route; makeQuiz(route); render(); }
function quizPage(){
 const qstate=state.quiz;
 if(!qstate||qstate.route!==state.route){makeQuiz(state.route);}
 if(qstate.done){
  const percent=qstate.qs.length?Math.round(qstate.score/qstate.qs.length*100):0;
  return `<div class="quiz-card"><div class="page-head"><div><h1>${state.route==="eval"?"التقويم النهائي":"نتيجة التدريب"}</h1></div></div><div class="stat"><strong>${percent}٪</strong><span>${qstate.score} / ${qstate.qs.length} إجابات صحيحة</span></div><p class="quiz-question">${percent>=(M.evaluation?.passingScore||70)?"أحسنت! لقد أتممت التدريب.":"راجع الوحدات ثم حاول مرة أخرى."}</p><div class="actions"><button class="btn btn-primary" data-restart="${state.route}">أعد المحاولة</button><button class="btn btn-soft" data-route="dashboard">لوحة التعلم</button></div></div>`;
 }
 const q=qstate.qs[qstate.index];if(!q)return '<div class="empty">لا توجد أسئلة متاحة.</div>';
 const progress=Math.round(qstate.index/qstate.qs.length*100);
 return `<div class="page-head"><div><h1>${state.route==="eval"?"التقويم النهائي":"التدريبات"}</h1><p>السؤال ${qstate.index+1} من ${qstate.qs.length}</p></div><button class="btn btn-soft" data-route="dashboard">رجوع</button></div>
 <section class="quiz-card"><div class="quiz-progress"><span style="width:${progress}%"></span></div><div class="quiz-question">${esc(q.question)}</div><div class="choice-list">${q.choices.map((c,i)=>`<button class="choice ${qstate.selected!==null&&i===q.answer?'correct':''} ${qstate.selected===i&&i!==q.answer?'wrong':''}" data-choice="${i}" ${qstate.selected!==null?'disabled':''}>${esc(c)}</button>`).join("")}</div>
 ${qstate.selected!==null?`<div class="feedback ${qstate.selected===q.answer?'good':'bad'}">${qstate.selected===q.answer?"إجابة صحيحة، أحسنت!":"ليست الإجابة الصحيحة."} ${esc(q.explanation||"")}</div><div class="actions"><button class="btn btn-primary" data-next-question>${qstate.index===qstate.qs.length-1?"عرض النتيجة":"السؤال التالي"}</button></div>`:""}</section>`;
}
function gamePage(){
 const words=[...(M.vocabulary?.verbs||[]),...(M.vocabulary?.nouns||[]),...(M.vocabulary?.particles||[])].filter(w=>w.hamzah==="وصل"||w.hamzah==="قطع");
 if(!state.gameWord){state.gameWord=words[Math.floor(Math.random()*words.length)];state.gameAnswered=false;state.gameFeedback="";}
 const w=state.gameWord;
 return `<div class="page-head"><div><h1>لعبة التصنيف</h1><p>اختر نوع الهمزة في الكلمة.</p></div><button class="btn btn-soft" data-route="dashboard">رجوع</button></div><div class="quiz-card"><p class="eyebrow">ما نوع الهمزة؟</p><div class="quiz-question" style="text-align:center;font-size:2.8rem">${esc(w?.harakat||w?.word||"")}</div><div class="actions" style="justify-content:center"><button class="btn btn-soft" data-game-answer="وصل">همزة الوصل</button><button class="btn btn-primary" data-game-answer="قطع">همزة القطع</button></div>${state.gameFeedback?`<div class="feedback ${state.gameFeedback.startsWith("صحيح")?"good":"bad"}">${esc(state.gameFeedback)}</div><div class="actions"><button class="btn btn-primary" data-game-next>كلمة أخرى</button></div>`:""}</div>`;
}
function render(){
 let content="";
 if(state.route==="welcome"){root.innerHTML=shell(welcome(),false);return;}
 if(state.route==="dashboard")content=dashboard();
 else if(state.route==="units")content=dashboard();
 else if(state.route==="unit")content=unitPage(state.unit||M.units?.[0]?.id);
 else if(state.route==="vocab")content=vocabPage();
 else if(state.route==="quiz"||state.route==="eval")content=quizPage();
 else if(state.route==="game")content=gamePage();
 else content=dashboard();
 root.innerHTML=shell(content,true);
}
root.addEventListener("click",e=>{
 const route=e.target.closest("[data-route]");if(route){go(route.dataset.route);return;}
 const unit=e.target.closest("[data-unit]");if(unit){go("unit",{unit:unit.dataset.unit});return;}
 const vocab=e.target.closest("[data-vocab]");if(vocab){state.vocab=vocab.dataset.vocab;render();return;}
 const choice=e.target.closest("[data-choice]");if(choice&&state.quiz&&!state.quiz.done&&state.quiz.selected===null){const i=Number(choice.dataset.choice),q=state.quiz.qs[state.quiz.index];state.quiz.selected=i;if(i===q.answer)state.quiz.score++;render();return;}
 if(e.target.closest("[data-next-question]")){if(state.quiz.index<state.quiz.qs.length-1){state.quiz.index++;state.quiz.selected=null;}else state.quiz.done=true;render();return;}
 const restart=e.target.closest("[data-restart]");if(restart){startQuiz(restart.dataset.restart);return;}
 const game=e.target.closest("[data-game-answer]");if(game&&!state.gameAnswered){state.gameAnswered=true;state.gameFeedback=game.dataset.gameAnswer===state.gameWord.hamzah?"صحيح، أحسنت!":"حاول مرة أخرى. نوع الهمزة: "+(state.gameWord.hamzah==="وصل"?"همزة الوصل":"همزة القطع");render();return;}
 if(e.target.closest("[data-game-next]")){state.gameWord=null;state.gameAnswered=false;state.gameFeedback="";render();return;}
 const prev=e.target.closest("[data-unit-prev]");const next=e.target.closest("[data-unit-next]");if(prev||next){const idx=M.units.findIndex(u=>u.id===(prev||next).dataset[prev?"unitPrev":"unitNext"]);const newidx=Math.max(0,Math.min(M.units.length-1,idx+(prev?-1:1)));go("unit",{unit:M.units[newidx].id});}
});
window.addEventListener("hashchange",()=>{const route=location.hash.replace(/^#\/?/,"");if(route==="")go("welcome");else if(["dashboard","units","vocab","quiz","eval","game"].includes(route))go(route);});
render();
})();
const e=document.querySelector(".header__interakt"),t=document.querySelector(".header__submenu");e.addEventListener("click",(()=>{t.classList.toggle("isShow")}));const l=document.getElementById("all"),c=document.getElementById("number"),n=document.getElementById("game"),o=document.getElementById("greeting"),a=document.querySelectorAll(".numerical"),d=document.querySelectorAll(".game"),s=document.querySelectorAll(".acquaintance");c.addEventListener("click",(()=>{a.forEach((e=>e.style.display="block")),d.forEach((e=>e.style.display="none")),s.forEach((e=>e.style.display="none"))})),n.addEventListener("click",(()=>{a.forEach((e=>e.style.display="none")),d.forEach((e=>e.style.display="block")),s.forEach((e=>e.style.display="none"))})),o.addEventListener("click",(()=>{a.forEach((e=>e.style.display="none")),d.forEach((e=>e.style.display="none")),s.forEach((e=>e.style.display="block"))})),l.addEventListener("click",(()=>{a.forEach((e=>e.style.display="block")),d.forEach((e=>e.style.display="block")),s.forEach((e=>e.style.display="block"))}));document.getElementById("theme-switch").addEventListener("click",(()=>{document.body.classList.toggle("dark"),console.log("changetheme")}));
//# sourceMappingURL=index.d98a475e.js.map

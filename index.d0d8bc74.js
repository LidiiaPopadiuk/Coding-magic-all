const e=document.querySelector(".game3__result"),o=document.querySelector(".count-computer"),t=document.querySelector(".count-user"),c=document.querySelectorAll(".game3__choice");let r;const l={computer:0,user:0};c.forEach((e=>{e.addEventListener("click",(()=>{c.forEach((e=>e.style.boxShadow="0 0 0 black")),r=e.dataset.choice,e.style.boxShadow="1px 1px 10px skyblue",console.log(r)}))})),console.log(c),console.log(Array.from(c));const s=Array.from(c).find((e=>"камінь"===e.dataset.choice));console.log(s);document.querySelector(".game3__btn").addEventListener("click",(()=>{!function(r){const s=["камінь","ножиці","папір"][Math.floor(3*Math.random())];let n="";switch(s){case"камінь":let e=Array.from(c).find((e=>"камінь"===e.dataset.choice));console.log(e),e.style.boxShadow="1px 1px 10px red";break;case"ножиці":let o=Array.from(c).find((e=>"ножиці"===e.dataset.choice));console.log(o),o.style.boxShadow="1px 1px 10px red"}console.log("computer",s),console.log("user",r),"камінь"===r&&"ножиці"===s||"ножиці"===r&&"папір"===s||"папір"===r&&"камінь"===s?(n="Ви виграли раунд!!",e.style.color="#039900",l.user+=1):"камінь"===r&&"камінь"===s||"ножиці"===r&&"ножиці"===s||"папір"===r&&"папір"===s?(n="Нічія!",e.style.color="skyblue"):(n="Комп’ютер виграв раунд!! ",e.style.color="#990000",l.computer+=1),console.log(l.computer,l.user),e.textContent=n,o.textContent=`Комп’ютер - ${l.computer}`,t.textContent=`Ви - ${l.user}`}(r)}));
//# sourceMappingURL=index.d0d8bc74.js.map
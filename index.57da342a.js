!function(){var o,e=document.querySelector(".game3__result"),t=document.querySelector(".count-computer"),c=document.querySelector(".count-user"),r=document.querySelectorAll(".game3__choice"),n={computer:0,user:0};r.forEach((function(e){e.addEventListener("click",(function(){r.forEach((function(o){return o.style.boxShadow="0 0 0 black"})),o=e.dataset.choice,e.style.boxShadow="1px 1px 10px skyblue",console.log(o)}))})),console.log(r),console.log(Array.from(r));var l=Array.from(r).find((function(o){return"камінь"===o.dataset.choice}));console.log(l);document.querySelector(".game3__btn").addEventListener("click",(function(){!function(o){var l=["камінь","ножиці","папір"][Math.floor(3*Math.random())],u="";switch(l){case"камінь":var a=Array.from(r).find((function(o){return"камінь"===o.dataset.choice}));console.log(a),a.style.boxShadow="1px 1px 10px red";break;case"ножиці":var s=Array.from(r).find((function(o){return"ножиці"===o.dataset.choice}));console.log(s),s.style.boxShadow="1px 1px 10px red"}console.log("computer",l),console.log("user",o),"камінь"===o&&"ножиці"===l||"ножиці"===o&&"папір"===l||"папір"===o&&"камінь"===l?(u="Ви виграли раунд!!",e.style.color="#039900",n.user+=1):"камінь"===o&&"камінь"===l||"ножиці"===o&&"ножиці"===l||"папір"===o&&"папір"===l?(u="Нічія!",e.style.color="skyblue"):(u="Комп’ютер виграв раунд!! ",e.style.color="#990000",n.computer+=1),console.log(n.computer,n.user),e.textContent=u,t.textContent="Комп’ютер - ".concat(n.computer),c.textContent="Ви - ".concat(n.user)}(o)}))}();
//# sourceMappingURL=index.57da342a.js.map
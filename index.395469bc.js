!function(){var e=document.getElementById("resultNum");document.querySelector(".guess-number__btn").addEventListener("click",(function(){var t=Math.floor(10*Math.random())+1,o=parseInt(document.getElementById("guess").value),n="";isNaN(o)?(n="Будь ласка, введіть коректне число.",e.style.color="#8ACECF"):o>10||o<=0?(n="Будь ласка, введіть число в діапазоні від 1 до 10.",e.style.color="black"):o===t?(n="Вітаю, ви вгадали число ".concat(t,"!"),e.style.color="#039900"):(n="Ви програли, комп'ютер загадав число ".concat(t,"."),e.style.color="#990000"),e.textContent=n}))}();
//# sourceMappingURL=index.395469bc.js.map
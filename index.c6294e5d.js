!function(){var e=document.querySelector(".modal-header__close"),t=document.querySelector(".backdrop-header"),c=document.querySelector(".header__greeting"),n=document.querySelector(".modal-header__input"),o=document.querySelector(".modal-header__btn");console.log("close",e),o.addEventListener("click",(function(){""!==n.value?(c.textContent="Вітаємо, ".concat(n.value,"!"),r()):alert("Введіть ваше ім'я")}));var r=function(){t.classList.toggle("is-hidden")};e.addEventListener("click",(function(){console.log("click"),r()})),t.addEventListener("click",(function(e){e.target===t&&r()}))}();
//# sourceMappingURL=index.c6294e5d.js.map

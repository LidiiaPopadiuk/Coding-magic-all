!function(){var n=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],e=function(n){i.innerHTML="",n.forEach((function(n){return r(n)}))},r=function(n){i.insertAdjacentHTML("beforeend",'\n      <li class="scientists__item">\n        <h3 class="scientists__item-name">'.concat(n.name," ").concat(n.surname,'</h3>\n        <p class="scientists__item-year">').concat(n.born,"-").concat(n.dead,"</hp>\n      </li>\n      "))},a=document.querySelectorAll(".scientists__btn"),i=document.querySelector(".scientists__cards");e(n),a[0].onclick=function(){i.innerHTML="",n.forEach((function(n){"18"==n.born.toString().slice(0,2)&&r(n)}))},a[1].onclick=function(){var e=n.find((function(n){return"Albert"===n.name&&"Einstein"===n.surname}));i.innerHTML="",r(e)},a[2].onclick=function(){var r=n.sort((function(n,e){return n.name.localeCompare(e.name)||n.surname.localeCompare(e.surname)}));e(r)},a[3].onclick=function(){i.innerHTML="",e(n.filter((function(n){return"C"==n.surname[0]})))},a[4].onclick=function(){var r=n.sort((function(n,e){return e.dead-e.born-(n.dead-n.born)}));e(r)},a[5].onclick=function(){i.innerHTML="",e(n.filter((function(n){return"A"!=n.name[0]})))},a[6].onclick=function(){var e=n.reduce((function(n,e){var r=n.dead-n.born;return e.dead-e.born>r?e:n}));i.innerHTML="",r(e)},a[7].onclick=function(){var e=n.reduce((function(n,e){var r=n.dead-n.born;return e.dead-e.born>r?e:n})),a=n.reduce((function(n,e){var r=n.dead-n.born;return e.dead-e.born<r?e:n}));i.innerHTML="",r(e),r(a)},a[8].onclick=function(){var r=n.filter((function(n){return n.name[0]===n.surname[0]}));i.innerHTML="",e(r)}}();
//# sourceMappingURL=index.4ca8270b.js.map
(()=>{"use strict";var e=document.querySelector(".Refresh"),n=document.querySelector(".table"),t="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat("MbnuI7zAKorwnEuale8c","/scores/");e.addEventListener("click",(function(){fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.innerHTML="",e.results.forEach((function(e){var t=document.createElement("tr"),c=document.createElement("td");c.innerHTML=e.user;var r=document.createElement("td");r.innerHTML=e.score,t.appendChild(c),t.appendChild(r),n.appendChild(t)}))}))}))})();
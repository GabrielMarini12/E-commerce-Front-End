import{l as g,c,s as a}from"./utilidades-W0jybg9u.js";const r=g("carrinho")??{};function f(){document.getElementById("carrinho").classList.remove("right-[-360px]"),document.getElementById("carrinho").classList.add("right-0")}function p(){document.getElementById("carrinho").classList.remove("right-0"),document.getElementById("carrinho").classList.add("right-[-360px]")}function C(){Object.keys(r).length!==0&&(window.location.href="./checkout.html")}function L(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho");t.addEventListener("click",p),e.addEventListener("click",f),document.getElementById("finalizar-compra").addEventListener("click",C)}function d(t){delete r[t],a("carrinho",r),i(),E()}function s(t){r[t]++,a("carrinho",r),i(),l(t)}function x(t){if(r[t]===1){d(t);return}r[t]--,a("carrinho",r),i(),l(t)}function l(t){document.getElementById(`quantidade-${t}`).innerText=r[t]}function m(t){const e=c.find(h=>h.id===t),o=document.getElementById("produtos-carrinho"),n=document.createElement("article");n.classList.add("flex"),n.classList.add("bg-slate-100"),n.classList.add("rounded-lg"),n.classList.add("p-1"),n.classList.add("relative");const u=`<button id="remover-item-${e.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${e.imagem}"
      alt="Carrinho: ${e.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${e.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${e.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute right-2 bottom-0 text-lg">
        <button id="decrementar-produto-${e.id}">-</button>
        <p id="quantidade-${e.id}" class="ml-2">${r[e.id]}</p>
        <button id="incrementar-produto-${e.id}" class="ml-2">+</button>
    </div>`;n.innerHTML=u,o.appendChild(n),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>x(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>s(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>d(e.id))}function E(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in r)m(e)}function v(t){if(t in r){s(t);return}r[t]=1,a("carrinho",r),m(t),i()}function i(){const t=document.getElementById("preco-total");let e=0;for(const o in r)e+=c.find(n=>n.id===o).preco*r[o];t.innerText=`Total: $${e}`}export{v as a,i as b,L as i,E as r};

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=i(o);fetch(o.href,e)}})();const n=[{id:"1",marca:"Zara",nome:"Camisa Larga com Bolsos",preco:70,imagem:"product-1.jpg",feminino:!1},{id:"2",marca:"Zara",nome:"Casaco Reto com Lã",preco:85,imagem:"product-2.jpg",feminino:!0},{id:"3",marca:"Zara",nome:"Jaqueta com Efeito Camurça",preco:60,imagem:"product-3.jpg",feminino:!1},{id:"4",marca:"Zara",nome:"Sobretudo em Mescla de Lã",preco:160,imagem:"product-4.jpg",feminino:!1},{id:"5",marca:"Zara",nome:"Camisa Larga Acolchoada de Veludo Cotelê",preco:110,imagem:"product-5.jpg",feminino:!1},{id:"6",marca:"Zara",nome:"Casaco de Lã com Botões",preco:170,imagem:"product-6.jpg",feminino:!0},{id:"7",marca:"Zara",nome:"Casaco com Botões",preco:75,imagem:"product-7.jpg",feminino:!0},{id:"8",marca:"Zara",nome:"Colete Comprido com Cinto",preco:88,imagem:"product-8.jpg",feminino:!0}];function d(t,r){localStorage.setItem(t,JSON.stringify(r))}function l(t){return JSON.parse(localStorage.getItem(t))}function m(t){localStorage.removeItem(t)}function p(t,r,i){const a=n.find(c=>c.id===t),o=document.getElementById(r),e=document.createElement("article");e.classList.add("flex"),e.classList.add("bg-stone-200"),e.classList.add("rounded-lg"),e.classList.add("p-1"),e.classList.add("relative"),e.classList.add("mb-2"),e.classList.add("w-96");const s=`
    <img
      src="./assets/img/${a.imagem}"
      alt="Carrinho: ${a.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${a.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${a.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute right-2 bottom-0 text-lg">
        <p id="quantidade-${a.id}" class="ml-2">${i}</p>
    </div>`;e.innerHTML=s,o.appendChild(e)}export{m as a,n as c,p as d,l,d as s};

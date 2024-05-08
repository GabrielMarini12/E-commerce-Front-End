import{c as i}from"./utilidades-W0jybg9u.js";import{a as n,i as a,r,b as d}from"./menuCarrinho-4RuFRVKm.js";function c(){for(const o of i){const e=`
            <div class="border-solid shadow-xl shadow-slate-400 rounded-lg w-48 m-2 flex flex-col p-2 justify-between group ${o.feminino?"feminino":"masculino"}" id="card-produto-${o.id}">
                <img
                    src="./assets/img/${o.imagem}"
                    alt="Produto 1 do E-commerce"
                    class="group-hover:scale-110 duration-300 my-3 rounded-lg"
                />
                <p class="text-sm">${o.marca}</p>
                <p class="text-sm">${o.nome}</p>
                <p class="text-sm">$${o.preco}</p>
                <button id="adicionar-${o.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i></button>
            </div>`;document.getElementById("container-produto").innerHTML+=e}for(const o of i)document.getElementById(`adicionar-${o.id}`).addEventListener("click",()=>n(o.id))}const t=document.getElementById("container-produto");function s(){const o=Array.from(t.getElementsByClassName("hidden"));for(const e of o)e.classList.remove("hidden")}function l(){s();const o=Array.from(t.getElementsByClassName("masculino"));for(const e of o)e.classList.add("hidden")}function m(){s();const o=Array.from(t.getElementsByClassName("feminino"));for(const e of o)e.classList.add("hidden")}function u(){document.getElementById("exibir-todos").addEventListener("click",s),document.getElementById("exibir-masculinos").addEventListener("click",m),document.getElementById("exibir-femininos").addEventListener("click",l)}c();a();r();d();u();

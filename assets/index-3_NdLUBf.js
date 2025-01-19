(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const a=document.querySelector("dialog"),f=document.querySelector(".show-modal-button"),m=document.querySelector("dialog button"),g=document.querySelector("#confirmBtn"),c=document.querySelector("#new-book-modal"),u=document.querySelector(".books-container"),y=document.querySelector("#book-amount-display"),b=document.querySelector("#read-books-display"),i=[];function h(n,e,o,t){this.id=Date.now().toString(),this.title=n,this.author=e,this.pages=o,this.isRead=t}function p(n,e,o,t){i.push(new h(n,e,o,t))}u.addEventListener("click",n=>{const e=n.target.closest(".book-container");if(!e)return;const o=e.dataset.bookId;n.target.classList.contains("mark-as-read-button")?k(o):n.target.classList.contains("delete-book-button")&&v(o)});function v(n){const e=i.findIndex(o=>o.id===n);e!==-1&&(i.splice(e,1),l())}function k(n){const e=i.find(o=>o.id===n);e&&(e.isRead=!e.isRead,l())}function l(){let n=i.length,e=i.filter(t=>t.isRead).length;y.textContent=`Books added: ${n}`,b.textContent=`Books read: ${e}`;const o=i.map(t=>`
    <div class="book-container flex flex-col justify-evenly w-74 h-80 p-5 rounded-md text-xl bg-card-color" data-book-id="${t.id}">
      <h3 class="text-2xl font-bold text-center w-60 break-words italic">${t.title}</h3>
      <div class="book-info flex-col items-start justify-start">
        <p><span class="font-bold">Author:</span> ${t.author}</p>
        <p><span class="font-bold">Pages:</span> ${t.pages}</p>
        <p><span class="font-bold">Status:</span> ${t.isRead?"Read":"Not Read"}</p>
      </div>
      <div class="flex justify-center items-center gap-2 text-md">
        <button class="flex gap-1 items-center justify-center mark-as-read-button rounded-lg px-3 py-4 w-32 cursor-pointer break-words ${t.isRead?"bg-gray-600":"bg-lime-600"} ${t.isRead?"hover:bg-gray-700":"hover:bg-lime-700"} text-white">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </span>  
          ${t.isRead?"Unread":"Read"}
        </button>
        <button class="delete-book-button flex gap-1 items-center rounded-lg px-3 py-4 w-32 cursor-pointer bg-red-700 hover:bg-red-900 text-white">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
          Remove
        </button>
      </div>
    </div>
  `).join("");u.innerHTML=o}f.addEventListener("click",()=>{a.showModal(),a.classList.remove("hidden")});m.addEventListener("click",()=>{a.close(),a.classList.add("hidden")});g.addEventListener("click",n=>{n.preventDefault();const e=document.querySelector("#title").value,o=document.querySelector("#author").value,t=document.querySelector("#pages").value,s=document.querySelector("#isRead").value;!e||!o||!t?alert("Please don't leave any empty fields"):(p(e,o,t,s),l(),c.close(),c.classList.add("hidden"),document.querySelector("#title").value="",document.querySelector("#author").value="",document.querySelector("#pages").value="",document.querySelector("#isRead").value="false")});p("To Kill a Mockingbird","Harper Lee",281,!1);l();

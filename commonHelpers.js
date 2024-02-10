import{S as w,i as p,a as L}from"./assets/vendor-951421c8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const v=document.querySelector(".search-form"),f=document.querySelector(".pictures-list"),u=document.querySelector(".loader"),a=document.querySelector(".button-load"),l=new w(".gallery-card a.gallary-card-link",{captionsData:"alt",captionDelay:250});let d=null,m=0;v.addEventListener("submit",r=>{r.preventDefault(),d=r.target.elements.input.value,n=1,d.trim("")!==""&&(u.style.display="flex",l&&(l.close(),f.innerHTML=""),setTimeout(()=>{y().then(e=>{m=e.totalHits,b(e.hits),l.refresh(),e.hits.length===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),a.style.opacity=1,a.style.overflow="visible"}).catch(e=>{console.error("Помилка отримання зображень:",e)}).finally(()=>{u.style.display="none"})},500),h(),r.target.reset())});let n=1,g=15;a.addEventListener("click",async()=>{n+=1;const r=await y();b(r.hits),l.refresh(),h(),document.querySelectorAll(".gallery-card").forEach(e=>{const i=e.getBoundingClientRect();window.scrollBy({top:i.height*1.36,behavior:"smooth"})})});async function y(){const r="42193842-675e74ed987999787d4b57f5e",s=new URLSearchParams({key:r,per_page:g,page:n,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L.get(`https://pixabay.com/api/?${s}`)).data}function h(){const r=Math.ceil(m/g);n===r&&(p.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#add8e6",messageColor:"white"}),a.disabled=!0,a.style.opacity=0,a.style.overflow=hidden)}function b(r){const s=r.map(e=>`<li class="gallery-card">
    <a class="gallary-card-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
    <ul class="image-info">
            <li class="image-item-info">
            <p>Likes</p>
            <p>${e.likes}</p>
        </li>
        <li class="image-item-info">
            <p>Views</p>
            <p>${e.views}</p>
        </li>
        <li class="image-item-info">
            <p>Comments</p>
            <p>${e.comments}</p>
        </li>
        <li class="image-item-info">
            <p>Downloads</p>
            <p>${e.downloads}</p>
        </li>
    </ul>
    </a>
</li>`).join("");f.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map

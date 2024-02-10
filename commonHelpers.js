import{S as w,i as p,a as L}from"./assets/vendor-951421c8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const v=document.querySelector(".search-form"),f=document.querySelector(".pictures-list"),u=document.querySelector(".loader"),o=document.querySelector(".button-load"),i=new w(".gallery-card a.gallary-card-link",{captionsData:"alt",captionDelay:250});let d=null,y=0;v.addEventListener("submit",r=>{r.preventDefault(),d=r.target.elements.input.value,n=1,d.trim("")!==""&&(u.style.display="flex",i&&(i.close(),f.innerHTML=""),setTimeout(()=>{g().then(e=>{y=e.totalHits,b(e.hits),i.refresh(),e.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),o.disabled=!0,o.style.display="none",o.style.opacity=0,o.style.overflow="hidden"):(o.disabled=!1,o.style.display="flex",o.style.opacity=1,o.style.overflow="visible")}).catch(e=>{console.error("Помилка отримання зображень:",e)}).finally(()=>{u.style.display="none"})},500),h(),r.target.reset())});let n=1,m=15;o.addEventListener("click",async()=>{n+=1;const r=await g();b(r.hits),i.refresh(),h(),document.querySelectorAll(".gallery-card").forEach(e=>{const l=e.getBoundingClientRect();window.scrollBy({top:l.height*1.36,behavior:"smooth"})})});async function g(){const r="42193842-675e74ed987999787d4b57f5e",a=new URLSearchParams({key:r,per_page:m,page:n,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L.get(`https://pixabay.com/api/?${a}`)).data}function h(){const r=Math.ceil(y/m);n===r&&(p.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#add8e6",messageColor:"white"}),o.disabled=!0,o.style.display="none",o.style.opacity=0,o.style.overflow="hidden")}function b(r){const a=r.map(e=>`<li class="gallery-card">
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
</li>`).join("");f.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=commonHelpers.js.map

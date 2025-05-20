(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(){const c=document.createElement("header");return c.innerHTML=`
    <section class="Darkmode__container"> 
        <button id="theme-switch">
            <svg class="svg_black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
            <svg class="svg_white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="http://www.w3.org/2000/svg" width="24px"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
        </button>
    </section>
    <!-- navsection -->
    <nav class="navbar">
        <div class="logo">
           <img src="../public/img/logo2.png" alt="">
        </div>
        <div class="menu">
            <div class="menu-links">
                <a href="../index.html">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="../skill/index.html">Projects</a>
                
                <select name="language" id="lang">
                    <option value="en">En</option>
                    <option value="dk">Dk</option>
                </select>
            </div>
        </div>
        <a href="#top" class="go-top" data-go-top title="Go to Top"><ion-icon name="arrow-up"></ion-icon></a>
    `,setTimeout(()=>{const n=document.getElementById("theme-switch");let o=localStorage.getItem("darkmode");const r=()=>{document.body.classList.add("darkmode"),localStorage.setItem("darkmode","active")},e=()=>{document.body.classList.remove("darkmode"),localStorage.setItem("darkmode",null)};o==="active"&&r(),n.addEventListener("click",()=>{o=localStorage.getItem("darkmode"),o!=="active"?r():e()})},0),setTimeout(()=>{const n=document.getElementById("lang"),o={en:{home:"Home",about:"About",contact:"Contact",projects:"Projects"},dk:{home:"Hjem",about:"Om",contact:"Kontakt",projects:"Projekter"}},r=e=>{const t=document.querySelector('a[href="../index.html"]'),a=document.querySelector('a[href="#"]:nth-of-type(1)'),s=document.querySelector('a[href="#"]:nth-of-type(2)'),i=document.querySelector('a[href="../skill/index.html"]');t&&(t.textContent=o[e].home),a&&(a.textContent=o[e].about),s&&(s.textContent=o[e].contact),i&&(i.textContent=o[e].projects)};n.addEventListener("change",e=>{const t=e.target.value;r(t)}),r(n.value)},0),c}export{l as H};

import{H as r}from"./home-Bj7f8zOr.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.body;s.insertBefore(r(),s.firstChild),localStorage.getItem("darkmode")==="active"&&document.body.classList.add("darkmode"),m()});function m(){const s=document.querySelector("[data-skills-box]");if(!s)return;const l=[{name:"HTML5",img:"https://i.postimg.cc/90cYBMc2/html5.png"},{name:"CSS3",img:"https://i.postimg.cc/cCDwMBD7/css3.png"},{name:"Javascript",img:"https://i.postimg.cc/htmQfnq1/javascript.png"},{name:"SASS",img:"https://i.postimg.cc/jSrKsYqf/sass.png"}],c=[{name:"Webpack",img:"https://i.postimg.cc/NFTk6zy3/webpack.png"},{name:"Git",img:"https://i.postimg.cc/Gp5FZCv0/git.png"},{name:"Npm",img:"https://i.postimg.cc/wjxDMvV8/npm.png"},{name:"VS Code",img:"https://i.postimg.cc/zvXqW9PB/vs-code.png"}],i=t=>t.map(e=>`
        <li>
            <div class="skills-card">
                <div class="tooltip">${e.name}</div>
                <div class="card-icon">
                    <img src="${e.img}" alt="${e.name} logo">
                </div>
            </div>
        </li>
    `).join("");s.innerHTML=`
        <h1>Skills & Tools</h1>
        <div class="skills-toggle" data-toggle-box>
            <button class="toggle-btn active" data-toggle-btn aria-expanded="true" aria-controls="skills-list">Skills</button>
            <button class="toggle-btn" data-toggle-btn aria-expanded="false" aria-controls="tools-list">Tools</button>
        </div>
        <ul class="skills-list active" id="skills-list" role="list" aria-label="Skills">
            ${i(l)}
        </ul>
        <ul class="tools-list" id="tools-list" role="list" aria-label="Tools">
            ${i(c)}
        </ul>
    `;const o=t=>{t.classList.toggle("active")},n=document.querySelector("[data-toggle-box]"),a=document.querySelectorAll("[data-toggle-btn]"),g=document.querySelector(".skills-list"),d=document.querySelector(".tools-list");a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(e=>{e.classList.remove("active"),e.setAttribute("aria-expanded","false")}),t.classList.add("active"),t.setAttribute("aria-expanded","true"),o(n),o(s),g.classList.toggle("active",t.textContent==="Tools"),d.classList.toggle("active",t.textContent==="Skills")})})}

import '../src/style/style.css';
import './skill.css';
import Header from '../src/js/home.js';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.insertBefore(Header(), body.firstChild);

    const savedDarkMode = localStorage.getItem('darkmode');
    if (savedDarkMode === 'active') {
        document.body.classList.add('darkmode');
    }

    initSkillPage();
});

function initSkillPage() {
    const skillsBox = document.querySelector('[data-skills-box]');
    if (!skillsBox) return;

    // Define skills and tools data
    const skills = [
        { name: 'HTML5', img: 'https://i.postimg.cc/90cYBMc2/html5.png' },
        { name: 'CSS3', img: 'https://i.postimg.cc/cCDwMBD7/css3.png' },
        { name: 'Javascript', img: 'https://i.postimg.cc/htmQfnq1/javascript.png' },
        { name: 'SASS', img: 'https://i.postimg.cc/jSrKsYqf/sass.png' }
    ];

    const tools = [
        { name: 'Webpack', img: 'https://i.postimg.cc/NFTk6zy3/webpack.png' },
        { name: 'Git', img: 'https://i.postimg.cc/Gp5FZCv0/git.png' },
        { name: 'Npm', img: 'https://i.postimg.cc/wjxDMvV8/npm.png' },
        { name: 'VS Code', img: 'https://i.postimg.cc/zvXqW9PB/vs-code.png' }
    ];

    // Generate HTML for skills and tools lists
    const generateListItems = (items) => items.map(item => `
        <li>
            <div class="skills-card">
                <div class="tooltip">${item.name}</div>
                <div class="card-icon">
                    <img src="${item.img}" alt="${item.name} logo">
                </div>
            </div>
        </li>
    `).join('');

    skillsBox.innerHTML = `
        <h1>Skills & Tools</h1>
        <div class="skills-toggle" data-toggle-box>
            <button class="toggle-btn active" data-toggle-btn aria-expanded="true" aria-controls="skills-list">Skills</button>
            <button class="toggle-btn" data-toggle-btn aria-expanded="false" aria-controls="tools-list">Tools</button>
        </div>
        <ul class="skills-list active" id="skills-list" role="list" aria-label="Skills">
            ${generateListItems(skills)}
        </ul>
        <ul class="tools-list" id="tools-list" role="list" aria-label="Tools">
            ${generateListItems(tools)}
        </ul>
    `;

    // Toggle function to handle active class
    const elemToggleFunc = (elem) => {
        elem.classList.toggle('active');
    };

    // Initialize toggle functionality
    const toggleBtnBox = document.querySelector('[data-toggle-box]');
    const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
    const skillsList = document.querySelector('.skills-list');
    const toolsList = document.querySelector('.tools-list');

    toggleBtns.forEach((button) => {
        button.addEventListener('click', () => {
            // Toggle active class on buttons and toggle box
            toggleBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            elemToggleFunc(toggleBtnBox);
            elemToggleFunc(skillsBox);

            // Update active list using class
            skillsList.classList.toggle('active', button.textContent === 'Tools');
            toolsList.classList.toggle('active', button.textContent === 'Skills');
        });
    });
}
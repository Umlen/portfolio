import { projects } from "./projects-data.js";

const navPos = document.querySelector('nav').offsetTop;

redner();

function redner() {
    const projectsContainerEl = document.querySelector('.projects-container');
    for (let project of projects) {
        projectsContainerEl.innerHTML += `
            <div class="project">
                <h4>${project.name}</h4>
                <a href="${project.demo}" target="_blank">
                    <img class="project-img" src="${project.screenshot}" alt="">
                </a>
                <a href="${project.code}" target="_blank" class="section-links">Code</a>
                <a href="${project.demo}" target="_blank" class="section-links">Demo</a>
            </div>
        `;
    }
}

window.addEventListener('load', () => {
    if (navPos < window.pageYOffset) {
        document.querySelector('nav').classList.add('fixed-nav');
    } else if (navPos >= window.pageYOffset) {
        document.querySelector('nav').classList.remove('fixed-nav');
    }
});

document.addEventListener('scroll', () => {
    if (navPos < window.pageYOffset) {
        document.querySelector('nav').classList.add('fixed-nav');
    } else if (navPos >= window.pageYOffset) {
        document.querySelector('nav').classList.remove('fixed-nav');
    }
});

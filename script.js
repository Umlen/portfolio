import { projects } from "./projects-data.js";

const projectsContainerEl = document.querySelector('.projects-container');

for (let project of projects) {
    projectsContainerEl.innerHTML += `
        <div class="project">
            <h4>${project.name}</h4>
            <a href="${project.demo}">
                <img class="project-img" src="${project.screenshot}" alt="">
            </a>
            <a href="${project.code}" class="section-links">Code</a>
            <a href="${project.demo}" class="section-links">Demo</a>
        </div>
    `;
}
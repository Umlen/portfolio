import { projects } from "./projects-data.js";

const projectsContainerEl = document.querySelector('.projects-container');

for (let project of projects) {
    projectsContainerEl.innerHTML += `
        <div class="project">
            <h4>${project.name}</h4>
            <img src="${project.screenshot}" alt="">
            <a href="${project.github}" class="section-links" >Github</a>
            <a href="${project.demo}" class="section-links">Demo</a>
        </div>
    `;
}
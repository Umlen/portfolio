import { projects } from "./projects-data.js";

const projectsContainerEl = document.querySelector('.projects-container');

for (let project of projects) {
    projectsContainerEl.innerHTML += `
        <div>
            <h4>${project.name}</h4>
            <img src="${project.screenshot}" alt="">
            <a href="${project.github}">Github</a>
            <a href="${project.demo}">Demo</a>
        </div>
    `;
}
const items = {
    "Explanation": "index.html",
    "Minimal Shuffle": "minimal-shuffle-grid.html",
    "Rotate Grid": "rotate-grid.html",
    "Full Shuffle": "shuffle-grid.html"
}
const current = document.location.href.split('/').pop();
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
for (const [name, path] of Object.entries(items)) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = path;
    a.textContent = name;
    if (path === current) {
        li.appendChild(document.createTextNode(name));
    } else {
        li.appendChild(a);
    }
    ul.appendChild(li);
}
nav.appendChild(ul);
import navbar from './nav.js'
let container=document.getElementById('nav_container');
let nav_html=(new navbar()).render();
console.log(nav_html);
container.innerHTML=nav_html;
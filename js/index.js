// create namespace
window._sw = {};

window.onload = function() {
    window.__T = setTimeout(function() {
        document.getElementById('status').innerText = 'loaded';    
        clearTimeout(window.__T);
    }, 1000);    
}
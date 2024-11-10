

document.addEventListener('DOMContentLoaded', (event) => {
    const lastModified = document.getElementById('lastmodified');
    lastModified.textContent = `Last modified: ${document.lastModified}`;
});

document.querySelector('.dark-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

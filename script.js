document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to homepage
});
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', (e) => {
        alert('You clicked on ' + e.target.alt + '!');
    });
});

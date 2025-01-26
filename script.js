// Example JavaScript for adding interactivity, animations, or effects if needed.
document.addEventListener("DOMContentLoaded", function () {
    const shopButtons = document.querySelectorAll('.btn');
    shopButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#d32f2f';
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#f44336';
        });
    });
});

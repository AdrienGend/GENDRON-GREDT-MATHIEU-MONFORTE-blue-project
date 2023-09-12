document.addEventListener('DOMContentLoaded', function () {
    const backpack = document.getElementById('backpack');
    const dropdown = document.getElementById('dropdown');
    const closeButton = document.getElementById('closeButton');

    backpack.addEventListener('click', function () {
        // Affiche le dropdown et masque le sac à dos
        dropdown.style.display = 'block';
        backpack.style.display = 'none';
    });

    closeButton.addEventListener('click', function () {
        // Masque le dropdown et affiche à nouveau le sac à dos
        dropdown.style.display = 'none';
        backpack.style.display = 'block';
    });
});
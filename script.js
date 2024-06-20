document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    menuButton.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("show");
        menuButton.classList.toggle("hidden");
    });

    overlay.addEventListener("click", function() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
        menuButton.classList.remove("hidden");
    });
});

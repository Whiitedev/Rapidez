document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("menuToggle");
    const toggleMobile = document.getElementById("menuToggleMobile");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("activo");
    });

    toggleMobile.addEventListener("click", () => {
        sidebar.classList.toggle("activo");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggleMobile");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.add("activo");
        });
    }

    if (closeSidebar) {
        closeSidebar.addEventListener("click", function () {
            sidebar.classList.remove("activo");
        });
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const usuarioMenu = document.getElementById("usuarioMenu");
    const usuarioDropdown = document.getElementById("usuarioDropdown");

    // Mostrar/ocultar dropdown al hacer click en cualquier parte del contenedor usuario
    usuarioMenu.addEventListener("click", (e) => {
        const isDropdown = e.target.closest("#usuarioDropdown");
        if (!isDropdown) {
            usuarioDropdown.style.display = 
                usuarioDropdown.style.display === "block" ? "none" : "block";
        }
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener("click", (event) => {
        if (!event.target.closest("#usuarioMenu")) {
            usuarioDropdown.style.display = "none";
        }
    });

    // Acción del botón de logout
    document.getElementById("logoutBtn").addEventListener("click", (e) => {
        e.stopPropagation(); // evita que vuelva a abrir el menú
        window.location.href = "../index.html"; // cambia por tu login real
    });
});


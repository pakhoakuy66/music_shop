document
    .getElementById("search-icon")
    ?.addEventListener("click", function (e: MouseEvent) {
        e.preventDefault();
        const searchInput = document.getElementById(
            "search-input"
        ) as HTMLInputElement | null;

        if (searchInput) {
            if (searchInput.classList.contains("hidden")) {
                searchInput.classList.remove("hidden");
                searchInput.classList.add("block"); // Sử dụng 'block' thay vì 'visible' nếu dùng Tailwind CSS
                searchInput.focus();
            } else {
                searchInput.classList.remove("block");
                searchInput.classList.add("hidden");
            }
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    const mainMenu = document.querySelector(".main-menu") as HTMLElement | null;
    const closeMenu = document.querySelector(
        ".close-menu"
    ) as HTMLElement | null;
    const openMenu = document.querySelector(".open-menu") as HTMLElement | null;

    openMenu?.addEventListener("click", show);
    closeMenu?.addEventListener("click", close);

    function show() {
        if (mainMenu) {
            mainMenu.style.display = "flex";
            mainMenu.style.top = "0";
        }
    }

    function close() {
        if (mainMenu) {
            mainMenu.style.top = "-100%";
        }
    }
});

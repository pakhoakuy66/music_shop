const listItems = document.querySelector<HTMLElement>(".list_item");
const images = listItems?.getElementsByTagName("img");
const btnL = document.querySelector(".btn_left");
const btnR = document.querySelector(".btn_right");
let currents = 0;

if (listItems && images && images.length > 0) {
    const handleChangeSlide = () => {
        let width = images[0].offsetWidth;

        if (currents === images.length - 1) {
            currents = 0;
            listItems.style.transform = `translateX(0px)`;
        } else {
            currents++;
            listItems.style.transform = `translateX(-${width * currents}px)`;
        }
    };

    let handleEvent = setInterval(handleChangeSlide, 4000);

    btnR?.addEventListener("click", () => {
        clearInterval(handleEvent);
        handleChangeSlide(); // Gọi hàm để thực hiện thay đổi slide khi nhấn nút
        handleEvent = setInterval(handleChangeSlide, 4000);
    });

    btnL?.addEventListener("click", () => {
        clearInterval(handleEvent);
        let width = images[0].offsetWidth;

        if (currents === 0) {
            currents = images.length - 1;
        } else {
            currents--;
        }

        listItems.style.transform = `translateX(-${width * currents}px)`;

        handleEvent = setInterval(handleChangeSlide, 4000);
    });
} else {
    console.error("Element with class 'list_item' or 'img' tag not found.");
}

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

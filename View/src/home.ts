const list_items = document.querySelector<HTMLElement>(".list_item");
const imgs = list_items?.getElementsByTagName("img");
const btnLeft = document.querySelector(".btn_left");
const btnRight = document.querySelector(".btn_right");
let current = 0;

if (list_items && imgs && imgs.length > 0) {
    const handleChangeSlide = () => {
        let width = imgs[0].offsetWidth;

        if (current === imgs.length - 1) {
            current = 0;
            list_items.style.transform = `translateX(0px)`;
        } else {
            current++;
            list_items.style.transform = `translateX(-${width * current}px)`;
        }
    };

    let handleEvent = setInterval(handleChangeSlide, 4000);

    btnRight?.addEventListener("click", () => {
        clearInterval(handleEvent);
        handleChangeSlide(); // Gọi hàm để thực hiện thay đổi slide khi nhấn nút
        handleEvent = setInterval(handleChangeSlide, 4000);
    });

    btnLeft?.addEventListener("click", () => {
        clearInterval(handleEvent);
        let width = imgs[0].offsetWidth;

        if (current === 0) {
            current = imgs.length - 1;
        } else {
            current--;
        }

        list_items.style.transform = `translateX(-${width * current}px)`;

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

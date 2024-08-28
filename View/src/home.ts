const list_items = document.querySelector<HTMLElement>(".list_item");
const imgs = document.getElementsByTagName("img");
let current = 0;

if (list_items && imgs.length > 0) {
    setInterval(() => {
        if (current == length - 1) {
            current = 0;
            let width = imgs[0].offsetWidth;
            list_items.style.transform = `translateX(${0}px)`;
        } else {
            current++;
            let width = imgs[0].offsetWidth;
            list_items.style.transform = `translateX(${
                width * -8.95 * current
            }px)`;
        }
    }, 4000);
} else {
    console.error("Element with class 'list_item' or 'img' tag not found.");
}

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

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Gears {
    name: string;
    price: number;
    image: string;
}

// Dữ liệu mẫu từ cơ sở dữ liệu (thay thế bằng dữ liệu thực tế)
const manaGear: Gears[] = [
    //Lưu mốt sửa chỗ này lại
    {
        name: "Nova Go SP1 AcousticPlus 2.0 - Black",
        price: 5490000,
        image: "../../../public/IMG/Capo_01.png",
    },
    {
        name: "X4 Pro EQ AcousticPlus",
        price: 16990000,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Nova Go Sonic - Black",
        price: 7490000,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Nova Go SP1 AcousticPlus 2.0 - White",
        price: 5490000,
        image: "https://via.placeholder.com/150",
    },
];

const manaGearGrid = document.getElementById("product-grid") as HTMLDivElement;
const manaGearCount = document.getElementById(
    "product-count"
) as HTMLDivElement;
const manaGearsortOptions = document.getElementById(
    "sort-options"
) as HTMLSelectElement;

// Hàm hiển thị sản phẩm
function displayProductsManaGears(manaGear: Gears[]) {
    manaGearGrid.innerHTML = "";
    manaGear.forEach((product) => {
        const productGuitars = document.createElement("div");
        productGuitars.classList.add(
            "bg-white",
            "p-6",
            "rounded-lg",
            "shadow-lg",
            "hover:shadow-xl",
            "transition-shadow",
            "duration-1000"
        );
        productGuitars.innerHTML = `
            <img class="w-full h-64 object-cover mb-4" src="${
                product.image
            }" alt="${product.name}">
            <h2 class="text-xl font-bold mb-2">${product.name}</h2>
            <p class="text-gray-700">${product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            })}</p>
        `;
        manaGearGrid.appendChild(productGuitars);
    });
    // Cập nhật số lượng sản phẩm
    manaGearCount.textContent = `${manaGear.length} Sản Phẩm`;
}

// Hàm sắp xếp sản phẩm
function sortProductsManaGears(sortOption: string) {
    if (sortOption === "price-asc") {
        manaGear.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        manaGear.sort((a, b) => b.price - a.price);
    }
    // Hiển thị lại các sản phẩm đã được sắp xếp
    displayProductsManaGears(manaGear);
}

// Hiển thị sản phẩm ban đầu
displayProductsManaGears(manaGear);

// Lắng nghe sự kiện thay đổi cho tùy chọn sắp xếp
manaGearsortOptions.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    sortProductsManaGears(target.value);
});

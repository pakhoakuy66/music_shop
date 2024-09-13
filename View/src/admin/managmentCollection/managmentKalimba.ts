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
interface Kalimbas {
    name: string;
    price: number;
    image: string;
}

// Dữ liệu mẫu từ cơ sở dữ liệu (thay thế bằng dữ liệu thực tế)
const manaKalimba: Kalimbas[] = [
    //Lưu mốt sửa chỗ này lại
    {
        name: "Nova Go SP1 AcousticPlus 2.0 - Black",
        price: 5490000,
        image: "../../../public/IMG/kalimba_1.jpg",
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

const manaKalimbaGrid = document.getElementById(
    "product-grid"
) as HTMLDivElement;
const manaKalimbaCount = document.getElementById(
    "product-count"
) as HTMLDivElement;
const manaKalimbasortOptions = document.getElementById(
    "sort-options"
) as HTMLSelectElement;

function displayProductsManaKalimba(manaKalimba: Kalimbas[]) {
    // Lưu ý phần product
    manaKalimbaGrid.innerHTML = "";
    manaKalimba.forEach((product) => {
        const productUkuleles = document.createElement("div");
        productUkuleles.classList.add(
            "bg-white",
            "p-6",
            "rounded-lg",
            "shadow-lg",
            "hover:shadow-xl",
            "transition-shadow",
            "duration-1000"
        );
        productUkuleles.innerHTML = `
                <img class="w-full h-64 object-cover mb-4" src="${
                    product.image
                }" alt="${product.name}">
                <h2 class="text-xl font-bold mb-2">${product.name}</h2>
                <p class="text-gray-700">${product.price.toLocaleString(
                    "vi-VN",
                    {
                        style: "currency",
                        currency: "VND",
                    }
                )}</p>
            `;
        manaKalimbaGrid.appendChild(productUkuleles);
    });
    // Cập nhật số lượng sản phẩm
    manaKalimbaCount.textContent = `${manaKalimba.length} Sản Phẩm`;
}

// Hàm sắp xếp sản phẩm
function sortProductsManaKalimba(sortOption: string) {
    if (sortOption === "price-asc") {
        manaKalimba.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        manaKalimba.sort((a, b) => b.price - a.price);
    }
    // Hiển thị lại các sản phẩm đã được sắp xếp
    displayProductsManaKalimba(manaKalimba);
}

// Hiển thị sản phẩm ban đầu
displayProductsManaKalimba(manaKalimba);

// Lắng nghe sự kiện thay đổi cho tùy chọn sắp xếp
manaKalimbasortOptions.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    sortProductsManaKalimba(target.value);
});

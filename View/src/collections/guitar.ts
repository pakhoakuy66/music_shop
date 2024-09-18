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
interface Guitars {
    name: string;
    price: number;
    image: string;
}

// Dữ liệu mẫu từ cơ sở dữ liệu (thay thế bằng dữ liệu thực tế)
const guitars: Guitars[] = [
    //Lưu mốt sửa chỗ này lại
    {
        name: "Nova Go SP1 AcousticPlus 2.0 - Black",
        price: 5490000,
        image: "../../public/IMG/guitar_VT.jpg",
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

const guitarGrid = document.getElementById("product-grid") as HTMLDivElement;
const guitarCount = document.getElementById("product-count") as HTMLDivElement;
const guitarsortOptions = document.getElementById(
    "sort-options"
) as HTMLSelectElement;

// Hàm hiển thị sản phẩm
function displayProductsGuitars(guitars: Guitars[]) {
    guitarGrid.innerHTML = "";
    guitars.forEach((product) => {
        const productGuitars = document.createElement("div");
        productGuitars.classList.add(
            "bg-white",
            "p-6",
            "rounded-lg",
            "shadow-lg",
            "cursor-pointer",
            "duration-200",
            "hover:shadow-lg", // Thêm hiệu ứng bóng khi rê chuột vào
            "hover:scale-105", // Thêm hiệu ứng phóng to khi rê chuột vào
            "transform",
            "transition-transform"
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
        guitarGrid.appendChild(productGuitars);
    });
    // Cập nhật số lượng sản phẩm
    guitarCount.textContent = `${guitars.length} Sản Phẩm`;
}

// Hàm sắp xếp sản phẩm
function sortProductsGuitars(sortOption: string) {
    if (sortOption === "price-asc") {
        guitars.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        guitars.sort((a, b) => b.price - a.price);
    }
    // Hiển thị lại các sản phẩm đã được sắp xếp
    displayProductsGuitars(guitars);
}

// Hiển thị sản phẩm ban đầu
displayProductsGuitars(guitars);

// Lắng nghe sự kiện thay đổi cho tùy chọn sắp xếp
guitarsortOptions.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    sortProductsGuitars(target.value);
});

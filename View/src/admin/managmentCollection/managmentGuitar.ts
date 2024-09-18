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
                searchInput.classList.add("block");
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
const managmentGuitars: Guitars[] = [
    {
        name: "Nova Go SP1 AcousticPlus 2.0 - Black",
        price: 5490000,
        image: "../../../public/IMG/guitar_VT.jpg",
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
        name: "Blue EQ AcousticPlus 2.0 - Red",
        price: 12990000,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "X4 Pro EQ AcousticPlus - Blue",
        price: 18990000,
        image: "https://via.placeholder.com/150",
    },
];

// Hàm hiển thị sản phẩm
function displayProducts(products: Guitars[]): void {
    const productGrid = document.getElementById("product-grid");

    if (!productGrid) return;

    // Làm sạch nội dung hiện tại của productGrid
    productGrid.innerHTML = "";

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add(
            "border",
            "border-gray-300",
            "rounded",
            "p-7",
            "bg-white",
            "cursor-pointer",
            "duration-200",
            "hover:shadow-lg",
            "hover:scale-105", // Thêm lớp phóng to khi rê chuột vào
            "transform",
            "transition-transform"
        );

        productElement.innerHTML = `
        <img src="${product.image}" alt="${
            product.name
        }" class="w-full h-48 object-cover mb-4" />
        <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
        <p class="text-gray-600">${product.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        })}</p>
        `;

        productGrid.appendChild(productElement);
    });

    // Cập nhật số lượng sản phẩm
    const productCount = document.getElementById("product-count");
    if (productCount) {
        productCount.textContent = `${products.length} Sản Phẩm`;
    }
}

// Hiển thị tất cả sản phẩm khi trang được tải
displayProducts(managmentGuitars);

// Lắng nghe sự kiện thay đổi trên dropdown sắp xếp
const sortOptions = document.getElementById("sort-options");
if (sortOptions) {
    sortOptions.addEventListener("change", (e: Event) => {
        const target = e.target as HTMLSelectElement;
        const sortValue = target.value;

        // Sao chép danh sách sản phẩm để không làm thay đổi dữ liệu gốc
        const sortedProducts = [...managmentGuitars];

        if (sortValue === "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === "price-desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        displayProducts(sortedProducts);
    });
}

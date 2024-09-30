document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement)
        .value;
    const password = (document.getElementById("password") as HTMLInputElement)
        .value;
    const role = (
        document.querySelector('input[name="role"]:checked') as HTMLInputElement
    ).value;

    const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
    });

    const data = await response.json();

    if (response.ok) {
        if (role === "admin") {
            window.location.href = "/admin_home.html";
        } else {
            window.location.href = "/user_home.html";
        }
    } else {
        alert(data.message);
    }
});

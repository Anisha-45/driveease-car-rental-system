// 🔥 IMAGE MAPPING (based on brand)
const carImages = {
    "Toyota": "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    "Honda": "https://images.unsplash.com/photo-1549924231-f129b911e442",
    "Mahindra": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
};

let cars = [];
let selectedCar = null;

// LOAD CARS
window.onload = loadCars;

async function loadCars() {
    showLoader(true);

    try {
        const res = await fetch("http://127.0.0.1:8080/cars");
        cars = await res.json();

        console.log("Cars:", cars);

        if (!cars || cars.length === 0) {
            document.getElementById("empty").style.display = "block";
            document.getElementById("carList").innerHTML = "";
            return;
        }

        document.getElementById("empty").style.display = "none";
        renderCars(cars);

    } catch (error) {
        console.error(error);
        showToast("Failed to load cars ❌");
    }

    showLoader(false);
}

// 🔥 RENDER CARS WITH IMAGE
function renderCars(data) {
    const container = document.getElementById("carList");
    container.innerHTML = "";

    data.forEach(car => {
        const img = carImages[car.brand] || "https://via.placeholder.com/300";

        container.innerHTML += `
            <div class="card">

                <img src="${img}" class="car-img" />

                <h3>${car.brand} ${car.model}</h3>

                <p class="price">₹${car.price}/day</p>

                <p class="${car.available ? 'available' : 'rented'}">
                    ${car.available ? "Available ✅" : "Rented ❌"}
                </p>

                ${
                    car.available
                    ? `<button onclick="openModal('${car.id}')">Rent Now</button>`
                    : `<button onclick="returnCar('${car.id}')">Return Car</button>`
                }

            </div>
        `;
    });
}

// 🔥 FILTER
document.getElementById("filter").addEventListener("change", function () {
    if (this.value === "available") {
        renderCars(cars.filter(c => c.available));
    } else {
        renderCars(cars);
    }
});

// 🔥 SORT
document.getElementById("sort").addEventListener("change", function () {
    let sorted = [...cars];

    if (this.value === "low") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (this.value === "high") {
        sorted.sort((a, b) => b.price - a.price);
    }

    renderCars(sorted);
});

// 🔥 OPEN MODAL
function openModal(id) {
    selectedCar = id;

    document.getElementById("modal").style.display = "flex";

    document.getElementById("modalName").value = localStorage.getItem("name") || "";
    document.getElementById("modalDays").value = localStorage.getItem("days") || "";
}

// 🔥 CONFIRM RENT
async function confirmRent() {
    const name = document.getElementById("modalName").value;
    const days = document.getElementById("modalDays").value;

    if (!name || !days) {
        showToast("Please fill all fields");
        return;
    }

    try {
        await fetch(`http://127.0.0.1:8080/cars/rent?id=${selectedCar}&name=${name}&days=${days}`, {
            method: "POST"
        });

        showToast("Car Rented Successfully 🚗");

        closeModal();
        loadCars();

    } catch (error) {
        showToast("Error renting car ❌");
    }
}

// 🔥 RETURN CAR
async function returnCar(id) {
    try {
        await fetch(`http://127.0.0.1:8080/cars/return/${id}`, {
            method: "POST"
        });

        showToast("Car Returned Successfully 🔁");
        loadCars();

    } catch (error) {
        showToast("Error returning car ❌");
    }
}

// 🔥 CLOSE MODAL
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// 🔥 TOAST
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// 🔥 LOADER
function showLoader(show) {
    document.getElementById("loader").style.display = show ? "block" : "none";
}
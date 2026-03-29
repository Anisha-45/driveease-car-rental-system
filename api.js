const BASE_URL = "http://127.0.0.1:8080/cars";

// 🔥 COMMON FETCH FUNCTION (clean architecture)
async function apiRequest(url, method = "GET") {
    try {
        const res = await fetch(url, { method });

        if (!res.ok) {
            throw new Error("API Error");
        }

        return await res.json();
    } catch (err) {
        showToast("Server error ❌");
        console.error(err);
    }
}

// 🔥 GET ALL CARS
async function getCars() {
    return await apiRequest(BASE_URL);
}

// 🔥 RENT CAR
async function rentCar(id, name, days) {
    await fetch(`${BASE_URL}/rent?id=${id}&name=${name}&days=${days}`, {
        method: "POST"
    });
}

// 🔥 RETURN CAR
async function returnCarApi(id) {
    await fetch(`${BASE_URL}/return/${id}`, {
        method: "POST"
    });
}

// 🔥 GET HISTORY
async function getHistory() {
    return await apiRequest(`${BASE_URL}/history`);
}
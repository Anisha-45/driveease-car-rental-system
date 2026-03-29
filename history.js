window.onload = loadHistory;

async function loadHistory() {
    showLoader(true);

    try {
        const res = await fetch("http://127.0.0.1:8080/cars/history");
        const data = await res.json();

        showLoader(false);

        const table = document.getElementById("historyTable");

        if (!data || data.length === 0) {
            document.getElementById("empty").style.display = "block";
            return;
        }

        data.forEach(r => {
            table.innerHTML += `
                <tr>
                    <td>${r.customerName}</td>
                    <td>${r.carId}</td>
                    <td>${r.days}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error(error);
        showLoader(false);
    }
}

// Loader
function showLoader(show) {
    document.getElementById("loader").style.display = show ? "block" : "none";
}
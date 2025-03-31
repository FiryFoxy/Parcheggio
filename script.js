const canvas = document.getElementById("parkingLot");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;

fetch("data/parking.json")
    .then(response => response.json())
    .then(data => drawParking(data));

function drawParking(parkingData) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parkingData.forEach((spot, index) => {
        ctx.fillStyle = spot.status === "available" ? "green" :
                        spot.status === "reserved" ? "yellow" : "red";
        ctx.fillRect(50 + (index % 5) * 80, 50 + Math.floor(index / 5) * 60, 60, 40);
        ctx.strokeRect(50 + (index % 5) * 80, 50 + Math.floor(index / 5) * 60, 60, 40);
    });
}

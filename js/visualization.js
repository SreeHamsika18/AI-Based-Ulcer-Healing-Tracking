let healingChart;

function drawGraph(prev, curr) {
  const ctx = document.getElementById("healingGraph").getContext("2d");

  if (healingChart) {
    healingChart.destroy();
  }

  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#e5e7eb" : "#374151";

  healingChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Previous Visit", "Current Visit"],
      datasets: [
        {
          label: "Ulcer Size",
          data: [prev.size, curr.size],
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: "Redness",
          data: [prev.redness, curr.redness],
          borderWidth: 2,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: textColor }
        }
      },
      scales: {
        x: {
          ticks: { color: textColor }
        },
        y: {
          ticks: { color: textColor }
        }
      }
    }
  });
}

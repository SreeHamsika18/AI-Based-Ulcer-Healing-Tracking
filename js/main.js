function analyzeUlcer() {
  const prevImage = document.getElementById("prevImage").files[0];
  const currImage = document.getElementById("currImage").files[0];

  if (!prevImage || !currImage) {
    alert("Please upload both previous and current images");
    return;
  }

  const prevFeatures = extractFeatures(prevImage);
  const currFeatures = extractFeatures(currImage);

  document.getElementById("sizeResult").textContent = currFeatures.size;
  document.getElementById("colorResult").textContent = currFeatures.redness;
  document.getElementById("borderResult").textContent = currFeatures.border;

  const status = assessHealing(prevFeatures, currFeatures);
  const statusEl = document.getElementById("healingStatus");

  statusEl.textContent = status;

  statusEl.className =
    status === "Improved"
      ? "text-green-500 font-bold"
      : status === "Worsened"
      ? "text-red-500 font-bold"
      : "text-yellow-500 font-bold";

  updateRemedies(status);
  drawGraph(prevFeatures, currFeatures);
}

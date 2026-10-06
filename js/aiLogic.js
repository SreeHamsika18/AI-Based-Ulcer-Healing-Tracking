function assessHealing(prev, curr) {
  const sizeChange = ((prev.size - curr.size) / prev.size) * 100;
  const rednessChange = ((prev.redness - curr.redness) / prev.redness) * 100;

  if (sizeChange > 10 && rednessChange > 10) {
    return "Improved";
  }

  if (sizeChange < -10 || rednessChange < -10) {
    return "Worsened";
  }

  return "No Change";
}

function updateRemedies(status) {
  const remediesList = document.getElementById("remediesList");
  remediesList.innerHTML = "";

  let items = [];

  if (status === "Improved") {
    items = [
      "Maintain oral hygiene",
      "Rinse mouth with saline water",
      "Avoid spicy foods",
      "Drink plenty of water"
    ];
  } else if (status === "No Change") {
    items = [
      "Use mild toothpaste",
      "Avoid hot foods",
      "Apply oral gel if prescribed",
      "Monitor for changes"
    ];
  } else {
    items = [
      "Consult dentist immediately",
      "Avoid tobacco & alcohol",
      "Follow medical prescription",
      "Maintain strict oral hygiene"
    ];
  }

  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    remediesList.appendChild(li);
  });
}

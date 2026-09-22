document.addEventListener("DOMContentLoaded", function () {
  const items = [
    "Clothes",
    "ID",
    "Phone / Watch Charger",
    "Makeup",
    "Toiletries",
    "Sunscreen",
    "Medications",
    "First aid items",
    "Money",
  ];

  const divList = document.getElementById("div-list");
  const tally = document.getElementById("tally");

  let checkedCount = 0;

  items.forEach((item) => {
    const itemContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item;
    checkbox.addEventListener("change", function () {
      checkedCount += this.checked ? 1 : -1;
      tally.textContent = checkedCount;
    });

    const label = document.createElement("label");
    label.htmlFor = item;
    label.textContent = item;

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);
    divList.appendChild(itemContainer);
  });
});

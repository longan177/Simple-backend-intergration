import { addList, postData, deleteItem, sendAlert } from "./utils.js";
const list = document.querySelector(".list-group");
const availableGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
availableGrid.forEach((n) => addList(n, list));
const attackedGrid = [];
const url = "http://localhost:5000/api/gameID";
const data = { arry: attackedGrid };
document.querySelector(".fetchAPI").addEventListener("click", () => {
  if (attackedGrid.length === 10) return;
  postData(url, data).then(({ attack }) => {
    sendAlert(data.arry, attack);
    attackedGrid.push(attack);
    deleteItem(attack);
    document.querySelector(".totalMove").textContent =
      "Action Left: " + (10 - attackedGrid.length);
  });
});

export const addList = (content, element) => {
  const newItem = document.createElement("li");
  newItem.classList = `list-group-item item-${content}`;
  newItem.textContent = content;
  element.append(newItem);
};

export const postData = async (url = "", data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export const deleteItem = (num) => {
  const targetItem = document.querySelector(`.item-${num}`);
  targetItem.classList.add("active");
  targetItem.innerHTML = `<strong>DELETED</strong>`;
};

export const sendAlert = (arr, receive) => {
  const box = document.querySelector(".infomations");
  const target = document.createElement("div");
  target.innerHTML = `Request Body:<strong>[${arr}]</strong>, Received:<strong> ${receive}</strong>`;
  target.classList = "alert alert-info";
  box.append(target);
};

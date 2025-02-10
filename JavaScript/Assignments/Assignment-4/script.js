const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
      <span class="task-content">${inputBox.value}</span>
      <span class="delete-task">×</span>
    `;
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("task-content")) {
      e.target.parentElement.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("delete-task")) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

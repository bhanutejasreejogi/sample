function showMessage() {
  document.getElementById("message").innerText = "Hello! GitHub Deployment Successful 🚀";
}
const students = [];

function addStudent() {
  const nameInput = document.getElementById("student-name");
  const name = nameInput.value.trim();
  if (name) {
    students.push(name);
    renderStudentList();
    nameInput.value = "";
  }
}

function renderStudentList() {
  const list = document.getElementById("student-list");
  list.innerHTML = "";
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${student}`;
    list.appendChild(li);
  });
}


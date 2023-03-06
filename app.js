const toggleBtn = document.querySelector(".sidebar-toogle");

const closedBtn = document.querySelector(".closed-btn");

const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closedBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

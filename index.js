const Sidebar = document.querySelector(".sidebar");
const openNav = document.querySelector(".openNav");

//Import the text as well as the script from the Sidebar.html

fetch("./components/Sidebar.html")
  .then((response) => response.text())
  .then((data) => {
    Sidebar.innerHTML = data;
  });


// script.js
// script.js
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

const menuIcon = document.getElementById('menu-icon');
    const headerContent = document.getElementById('header-content');

    menuIcon.addEventListener('click', () => {
      headerContent.classList.toggle('open');
    });

document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
      toggleSwitch.checked = savedTheme === "dark-mode";
    }
  
    // Toggle theme on switch change
    toggleSwitch.addEventListener("change", () => {
      if (toggleSwitch.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-mode");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);
    toggleSwitch.checked = savedTheme === "dark";
  
    toggleSwitch.addEventListener("change", () => {
      const newTheme = toggleSwitch.checked ? "dark" : "light";
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
  
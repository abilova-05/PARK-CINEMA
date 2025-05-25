document.addEventListener("DOMContentLoaded", function () {
      const toggleBtn = document.getElementById("language-toggle");
      const mtoggleBtn = document.getElementById("m-language-toggle");
      const dropdown = document.getElementById("language-options");
      const mdropdown = document.getElementById("m-language-options");
      const selectedLang = document.getElementById("selected-lang");
      const mselectedLang = document.getElementById("m-selected-lang");

      toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
      });
      mtoggleBtn.addEventListener("click", () => {
        mdropdown.classList.toggle("hidden");
      });

      dropdown.querySelectorAll("div").forEach((option) => {
        option.addEventListener("click", () => {
          selectedLang.innerHTML = option.innerHTML;
          dropdown.classList.add("hidden");
        });
      });
      mdropdown.querySelectorAll("div").forEach((option) => {
        option.addEventListener("click", () => {
          mselectedLang.innerHTML = option.innerHTML;
          mdropdown.classList.add("hidden");
        });
      });

      document.addEventListener("click", function (e) {
        if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add("hidden");
        }
      });
      document.addEventListener("click", function (e) {
        if (!mtoggleBtn.contains(e.target) && !mdropdown.contains(e.target)) {
          mdropdown.classList.add("hidden");
        }
      });
    });

    const slideMenu = document.getElementById("slideMenu");
    const modalBg = document.getElementById("modal-bg");
    const openBtn = document.getElementById("openMenuBtn");


  let isOpen = false;

function showMenu() {
    if (!isOpen) {
      slideMenu.classList.remove("bottom-[-100%]");
      slideMenu.classList.add("bottom-0");
      modalBg.classList.remove('hidden')
      isOpen = true;
    } else {
      slideMenu.classList.remove("bottom-0");
      slideMenu.classList.add("bottom-[-100%]");
      modalBg.classList.add('hidden')
      isOpen = false;
    }
  }
  


function closeModals() {
    slideMenu.classList.remove("bottom-0");
    slideMenu.classList.add("bottom-[-100%]");
    modalBg.classList.add("hidden");
    isOpen = false;
}

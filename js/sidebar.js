let isSidebarToggled = false;

document
  .getElementById("sidebar-toggle")
  .addEventListener("click", function () {
    isSidebarToggled = !isSidebarToggled;
    toggleSidebar();
  });

function toggleSidebar() {
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  const rotateIcon = document.getElementById("sidebar-toggle");

  if (isSidebarToggled === true) {
    sidebarWrapper.classList.add("expanded");

    if (rotateIcon) {
      rotateIcon.style.transform = "rotate(180deg)";
      const mainContent = document.getElementById("mainContent");
      mainContent.style.paddingLeft = "180px";
    }
  } else {
    sidebarWrapper.classList.add("expanded");

    if (rotateIcon) {
      rotateIcon.style.transform = "rotate(0deg)";
      const mainContent = document.getElementById("mainContent");
      mainContent.style.paddingLeft = "10px";
      mainContent.style.display = "inline-block";
    }
  }

  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item) => {
    if (isSidebarToggled === true) {
      item.classList.add("expanded");
    } else {
      item.classList.add("collapse");
    }
  });
}

document
  .getElementById("sidebar-wrapper")
  .addEventListener("mouseenter", function () {
    if (isSidebarToggled === false) {
      const sidebarWrapper = document.getElementById("sidebar-wrapper");
      sidebarWrapper.classList.add("expanded");
      sidebarWrapper.classList.remove("collapsed");

      const sidebarItems = document.querySelectorAll(".sidebar-item");
      sidebarItems.forEach((item) => {
        item.classList.add("expanded");
      });
    }
  });

document
  .getElementById("sidebar-wrapper")
  .addEventListener("mouseleave", function () {
    if (!isSidebarToggled) {
      const sidebarWrapper = document.getElementById("sidebar-wrapper");
      sidebarWrapper.classList.add("collapsed");
      sidebarWrapper.classList.remove("expanded");

      const sidebarItems = document.querySelectorAll(".sidebar-item");
      sidebarItems.forEach((item) => {
        item.classList.remove("expanded");
      });
    }
  });
  

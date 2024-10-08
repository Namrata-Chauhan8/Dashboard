"use strict";

var isSidebarToggled = false;
document.getElementById("sidebar-toggle").addEventListener("click", function () {
  isSidebarToggled = !isSidebarToggled;
  toggleSidebar();
});

function toggleSidebar() {
  var sidebarWrapper = document.getElementById("sidebar-wrapper");
  var rotateIcon = document.getElementById("sidebar-toggle");

  if (isSidebarToggled === true) {
    sidebarWrapper.classList.add("expanded");

    if (rotateIcon) {
      rotateIcon.style.transform = "rotate(180deg)";
      var mainContent = document.getElementById("mainContent");
      mainContent.style.paddingLeft = "180px";
    }
  } else {
    sidebarWrapper.classList.add("expanded");

    if (rotateIcon) {
      rotateIcon.style.transform = "rotate(0deg)";

      var _mainContent = document.getElementById("mainContent");

      _mainContent.style.paddingLeft = "10px";
      _mainContent.style.display = "inline-block";
    }
  }

  var sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach(function (item) {
    if (isSidebarToggled === true) {
      item.classList.add("expanded");
    } else {
      item.classList.add("collapse");
    }
  });
}

document.getElementById("sidebar-wrapper").addEventListener("mouseenter", function () {
  if (isSidebarToggled === false) {
    var sidebarWrapper = document.getElementById("sidebar-wrapper");
    sidebarWrapper.classList.add("expanded");
    sidebarWrapper.classList.remove("collapsed");
    var sidebarItems = document.querySelectorAll(".sidebar-item");
    sidebarItems.forEach(function (item) {
      item.classList.add("expanded");
    });
  }
});
document.getElementById("sidebar-wrapper").addEventListener("mouseleave", function () {
  if (!isSidebarToggled) {
    var sidebarWrapper = document.getElementById("sidebar-wrapper");
    sidebarWrapper.classList.add("collapsed");
    sidebarWrapper.classList.remove("expanded");
    var sidebarItems = document.querySelectorAll(".sidebar-item");
    sidebarItems.forEach(function (item) {
      item.classList.remove("expanded");
    });
  }
});
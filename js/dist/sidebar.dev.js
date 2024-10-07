"use strict";

document.getElementById("sidebar-toggle").addEventListener("click", function () {
  var sidebarWrapper = document.getElementById("sidebar-wrapper");
  sidebarWrapper.classList.toggle("collapsed");
  sidebarWrapper.classList.toggle("expanded"); // Update sidebar items to show or hide names

  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(function (item) {
    if (sidebarWrapper.classList.contains('expanded')) {
      item.classList.add('expanded');
    } else {
      item.classList.remove('expanded');
    }
  });
});
document.getElementById("title").addEventListener("click", function () {
  var sidebarWrapper = document.getElementById("sidebar-wrapper");
  sidebarWrapper.classList.toggle("collapsed");
  sidebarWrapper.classList.toggle("expanded");
  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(function (item) {
    if (sidebarWrapper.classList.contains('expanded')) {
      item.classList.add('expanded');
    } else {
      item.classList.remove('expanded');
    }
  });
});
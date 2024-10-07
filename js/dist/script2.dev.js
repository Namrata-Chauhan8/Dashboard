"use strict";

function toggleDropdown2(event) {
  event.preventDefault();
  var dropdownContent = document.querySelector(".dropdown-content1");

  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}
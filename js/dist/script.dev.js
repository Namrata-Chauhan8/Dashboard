"use strict";

function toggleDropdown(event, dropdownId) {
  event.preventDefault(); // Find the dropdown content by its ID

  var dropdownContent = document.getElementById(dropdownId); // Toggle the display property

  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
}
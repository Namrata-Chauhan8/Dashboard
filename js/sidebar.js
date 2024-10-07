document
    .getElementById("sidebar-toggle")
    .addEventListener("click", function () {
        const sidebarWrapper = document.getElementById("sidebar-wrapper");
        sidebarWrapper.classList.toggle("collapsed");
        sidebarWrapper.classList.toggle("expanded");
        
        // Update sidebar items to show or hide names
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        sidebarItems.forEach(item => {
            if (sidebarWrapper.classList.contains('expanded')) {
                item.classList.add('expanded');
            } else {
                item.classList.remove('expanded');
            }
        });
    });

document
    .getElementById("title")
    .addEventListener("click", function () {
        const sidebarWrapper = document.getElementById("sidebar-wrapper");
        sidebarWrapper.classList.toggle("collapsed");
        sidebarWrapper.classList.toggle("expanded");
        
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        sidebarItems.forEach(item => {
            if (sidebarWrapper.classList.contains('expanded')) {
                item.classList.add('expanded');
            } else {
                item.classList.remove('expanded');
            }
        });
    });
    

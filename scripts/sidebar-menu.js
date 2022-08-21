
(function(){
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar')
    
    openingBtn.addEventListener('click', openSidebar);
    closingBtn.addEventListener('click', closeSidebar);
    
    function openSidebar(){
        sidebar.classList.add('sidebar__opened')
    }
    
    function closeSidebar(){
        sidebar.classList.remove('sidebar__opened')
    }
})()
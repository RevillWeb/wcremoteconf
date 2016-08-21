var $slideMenu = document.querySelector(".slide-menu-container");
var $menuBtns = document.querySelectorAll(".menu-btn");
var _toggleMenu = function() {
    $slideMenu.classList.toggle("open");
};
//ForEach like this so its works in IE
[].forEach.call($menuBtns, function($element){
    $element.addEventListener("click", _toggleMenu);
});
var $navLinks = document.querySelectorAll(".slide-menu .nav-list li a");
[].forEach.call($navLinks, function($element){
    $element.addEventListener("click", function(){
        setTimeout(function(){
            _toggleMenu();
        }, 300);
    });
});
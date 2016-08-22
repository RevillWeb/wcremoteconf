var $menu = document.querySelector("#menu");
$menu.addEventListener("click", function(){
    setTimeout(function(){
        $menu.close();
    }, 300);
});
var $menuBtn = document.querySelector(".menu-btn");
$menuBtn.addEventListener("click", function(){
    $menu.open();
});
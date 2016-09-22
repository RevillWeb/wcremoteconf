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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84551354-1', 'auto');
ga('send', 'pageview');
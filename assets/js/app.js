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

// var talks = [];
// var $days = document.querySelectorAll("#schedule .day");
// $days.forEach(function($day, day){
//     var $items = $day.querySelectorAll(".item");
//
//     $items.forEach(function($item){
//         const regex = /\([0-9]*/g;
//         const str = $item.querySelector("h3").innerText;
//         const duration = parseInt(regex.exec(str)[0].replace("(", ""));
//         var talk = {
//             "day": (day + 1),
//             "title": $item.querySelector(".talk-title").innerText,
//             "duration": duration,
//             "break": ($item.classList.contains("break") === true)
//         };
//         var $a = $item.querySelector("a");
//         if ($a !== null) {
//             talk.speaker = $item.querySelector("a").getAttribute("title");
//             talk.handle = $item.querySelector("a").getAttribute("href");
//         }
//         var $img = $item.querySelector("img");
//         if ($img !== null) {
//             talk.photo = $img.getAttribute("src");
//         }
//         var $description = $item.querySelector(".description");
//         if ($description !== null) {
//             talk.description = $description.innerText;
//         }
//         talks.push(talk);
//     });
// });


const GAP = 5;
let day1 = moment("2017-02-16 10-0500");
let day2 = moment("2017-02-17 10-0500");
let $day1 = document.querySelector("#day1");
let $day2 = document.querySelector("#day2");
const tzString = String(String(new Date()).split("(")[1]).split(")")[0];

var req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        response.forEach(function(talk){

            const time = (talk.day === 1) ? day1 : day2;
            const timeLabel = time.format("LT");
            let $item = document.createElement("div");
            $item.classList.add("item");
            if (talk.break === true) {
                $item.classList.add("break");
            }
            $item.innerHTML = `               
                <div class="title">
                    <div class="text">
                        <h3>${timeLabel} ${tzString} (${talk.duration} Min)</h3>
                        <div class="talk-title">${talk.title}</div>
                    </div>
                    <a href="${talk.handle}" title="${talk.speaker}" class="photo">
                        <img src="${talk.photo}" />
                    </a>
                </div>
                <p class="description">${talk.description}</p>                
            `;

            if (talk.day === 1) {
                $day1.appendChild($item);
                day1 = moment(day1).add(talk.duration + GAP, 'm');
            } else {
                $day2.appendChild($item);
                day2 = moment(day2).add(talk.duration + GAP, 'm');
            }

        });
    }
};
req.open("GET", "schedule.json", true);
req.send();

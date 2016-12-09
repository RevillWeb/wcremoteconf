/**
 * Created by leon on 12/9/2016.
 */
var GAP = 5;
var day1 = moment("2017-02-16 10-0500");
var day2 = moment("2017-02-17 10-0500");
var $day1Items = document.querySelector("#day1 .items");
var $day1Start = document.querySelector("#day1 .start");
$day1Start.innerText = day1.format("LT");
var $day1End = document.querySelector("#day1 .end");
var $day2Items = document.querySelector("#day2 .items");
var $day2Start = document.querySelector("#day2 .start");
$day2Start.innerText = day2.format("LT");
var $day2End = document.querySelector("#day2 .end");

let req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        response.forEach(function(talk){
            var time = (talk.day === 1) ? day1 : day2;
            var timeLabel = time.format("LT");
            var $item = document.createElement("div");
            $item.classList.add("item");
            if (talk.break === true) {
                $item.classList.add("break");
            }
            var $template = '<div class="title"><div class="text"><h3>' + timeLabel + ' (' + talk.duration + ' Min)</h3><div class="talk-title">' + talk.title + '</div></div><a href="' + talk.handle + '" title="' + talk.speaker + '" class="photo"> <img src="' + talk.photo + '" /></a></div>';
            if (talk.break === false) {
                $template += '<p class="description">' + talk.description + '</p>';
            }
            $item.innerHTML = $template;
            if (talk.day === 1) {
                $day1Items.appendChild($item);
                day1 = moment(day1).add(talk.duration + GAP, 'm');
            } else {
                $day2Items.appendChild($item);
                day2 = moment(day2).add(talk.duration + GAP, 'm');
            }
        });
        $day1End.innerText = day1.format("LT");
        $day2End.innerText = day2.format("LT");
        document.querySelector("#schedule").classList.add("loaded");
    }
};
req.open("GET", "schedule.json", true);
req.send();

var veri = prompt("Do you want to see my blog?The best front language is Java or PHP?");
if(veri=="neither")
{
	$("body").show();
}
if(veri=="yes")
{
document.location='http://yoha.win';
}
function updateTime()
{
	
var nowTime = Date.parse(new Date())-new Date("2015/03/21 22:11:00").getTime();
var days = parseInt(nowTime/(1000*60*60*24));
var hours = parseInt((nowTime%(1000*60*60*24))/(1000*60*60));
var mins = parseInt((nowTime%(1000*60*60))/(1000*60));
var secs = parseInt((nowTime%(1000*60))/1000);
$(".days").children(".hundreds").text(parseInt(days/100));
$(".days").children(".tens").text(parseInt((days%100)/10));
$(".days").children(".units").text(parseInt(days%10));
$(".hours").children(".tens").text(parseInt(hours/10));
$(".hours").children(".units").text(parseInt(hours%10));
$(".minutes").children(".tens").text(parseInt(mins/10));
$(".minutes").children(".units").text(parseInt(mins%10));
$(".seconds").children(".tens").text(parseInt(secs/10));
$(".seconds").children(".units").text(parseInt(secs%10));

setTimeout("updateTime()",1000);
}
updateTime();
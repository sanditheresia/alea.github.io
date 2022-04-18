var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good Morning Devi :)');
	var afternoon = ('Good Afternoon Devi :)');
	var evening = ('Good Evening Devi :)');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);


// needs jquery.min.js
//$(document).ready(function(){
	//var d = new Date();
	//var n = d.getHours();
	//if (n > 19 || n < 6)
 		// If time is after 7PM or before 6AM, apply night theme to ‘body’
 		//document.body.className = "night";
	//else if (n > 16 && n < 19)
 		// If time is between 4PM – 7PM sunset theme to ‘body’
 		//document.body.className = "sunset";
	//else
 		// Else use ‘day’ theme
 		//document.body.className = "day";
//});

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

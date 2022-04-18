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

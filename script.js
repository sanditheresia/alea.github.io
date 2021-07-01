var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good Morning Priscilia :)');
	var afternoon = ('Good Afternoon Priscilia :)');
	var evening = ('Good Evening Priscilia :)');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);
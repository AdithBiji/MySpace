
function pass() {
	var pass1 = window.document.forms[0].psw.value;
	var pass2 = window.document.forms[0].psw-retype.value;
	if(pass1 == pass2) {
        window.open()
	} else {
		alert("Password Mismatch!");
	}
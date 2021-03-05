function openPage(page){
	window.location.assign(page);
}

function validateForm(event){
	event.preventDefault();
	let formdata = new FormData(event.target);
	if(!/^[A-Za-z ]{2,}$/.test(formdata.get("name"))){
		alert("Enter valid fullname");
		return;
	} else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formdata.get("email"))){
		alert("Enter valid email");
		return;
	} else if(!/[0-9]{10}/.test(formdata.get("phone"))){
		alert("Enter valid phone number");
		return;
	} 
	event.target.submit();
}

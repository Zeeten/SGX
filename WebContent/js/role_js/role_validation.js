 function checkOnSubmit(){
	var role = document.getElementById("name");
	if(role === null || role === undefined || role.value === ''){
		alert("PLEASE ENTER THE NAME");
		return false;
	}else {
		return true;
	}
	
	var shortcode = document.getElementById("roleShortName");
	if(shortcode === null || shortcode === undefined || shortcode.value === '')
	{
	    alert("PLEASE ENTER THE SHORT CODE");
		return false;
	}else{
	    return true;
	}
}
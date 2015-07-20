function checkOnSubmit(){
	var desgn = document.getElementById("name");
	if(desgn === null || desgn === undefined || desgn.value === ''){
		alert("PLEASE ENTER THE NAME");
		return false;
	}
	else {
		return true;
	}
	
	var shortcode = document.getElementById("designationShortName");
	if(shortcode === null || shortcode.value === ''|| shortcode === undefined || shortcode.length>2 || shortcode.length<2)
	{
	   alert("Please enter 3 Character");
	   return false;
	}else{
	   return true;
	}
}
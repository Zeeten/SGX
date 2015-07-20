/**
	This is common file for generic used for validation.
	Author : Gajanan 
*/

// This function provide you a prototype for 
// checking empty value.
function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g, "");
}

// This function used for checking numeric value.
function numeric(obj) {
	valid = true;
	var numExp = /^[0-9]+$/;
	if (obj.value.match(numExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please enter numbers only");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return valid;
}

// This function used for email address validation.
function emailValidator(obj) {
	valid = true;
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (obj.value.match(emailExp) || obj.value.length == 0) {
		return true;
	} else {
		alert("Please enter valid email address");
		obj.value = "";
		obj.focus();
		return false;
	}
	return valid;
}

// This function used for numeric percentage.
function numericPercentage(obj) {
	valid = true;
	var numExp = /^(100(\.0{2,2})?|([0-9]?[0-9](\.[0-9]{2,2})))$/;
	if (obj.value.match(numExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please enter numbers only between 00.00 to 99.99");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return valid;
}

// Checking for alphanumeric values.
function alphanumeric(obj) {
	valid = true;
	var alphaExp = /^[0-9 a-z A-Z]+$/;
	if (obj.value.match(alphaExp)) {
		return true;
	} else {
		alert("Please enter alphabets and numbers only");
		obj.value = "";
		obj.focus();
		return false;
	}
	return valid;
}

function addressValidation(){
	if(document.getElementById('countryId').value != 0){
		if(document.getElementById('stateId').value != 0){
			if(document.getElementById('districtId').value !=0){
				if(document.getElementById('cityId').value !=0){
					if(document.getElementById('postOffice').value !=0){
						return true;
					}else{
						alert('Please enter post office.');
						return false;
					}
				}else{
					alert('Please enter city');
					return false;
				}
			}else{
				alert('Please enter district');
				return false;
			}
		}else{
			alert('Please enter state.');
			return false;
		}
	}else{
		alert('Please enter country.');
		return false;
	}
}

//  This function help full for comparing two date
// validation like deassociation date not less than joing date.
function CompareDate(compareBy, compareTo, msg){
	alert('compareTo.value'+compareTo.value);
	if (compareTo.value != "") {
		var jDate = compareTo.value; //  name of text box
		tmp = jDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		establishgDate = calcJulian(xDate);
		var lDate = compareBy.value; //  name of text box
		tmp = lDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		validityDate = calcJulian(xDate);
		if (validityDate < establishgDate) {
			alert(msg);
			return false;
		}
	}
	 return true;
}
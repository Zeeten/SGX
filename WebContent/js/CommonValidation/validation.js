function ltrim(stringToTrim) {
	return stringToTrim.replace(/^\s+/, "");
}
function rtrim(stringToTrim) {
	return stringToTrim.replace(/\s+$/, "");
}
//added by ajit on 08/014/2010
function countWidth(str){
	//str = str.replace(/[\n\r]/g,'');
	str = escape(str);
	//alert("string"+str);
	//str = str.replace(/%u[A-Z\d]{4}/g,'  ');
	str = str.replace(/%[A-Z\d]{2}/g,' ');
	return str.length;
}
//ended by ajit on 08/04/2010

// Added By Vidya to remove trim(Spaces)
function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g, "");
}
// Ended by vidya

//aniladded 2/11/09:Begin
function calcJulian(isDate) {
	gregDate = new Date(isDate);
	year = gregDate.getFullYear();
	month = gregDate.getMonth() + 1;
	day = gregDate.getDate();
	A = Math.floor((7 * (year + Math.floor((month + 9) / 12))) / 4);
	B = day + Math.floor((275 * month) / 9);
	isJulian = (367 * year) - A + B + 1721014;
	return isJulian;
}
//Anil added 2/11/09:End
//anil added
//function setDataFrom(obj){
//alert('hi');
//		if (obj.value == "Same") {
//		generalInformationForm.presentAddress.value=generalInformationForm.permanentAddress.value;
//		generalInformationForm.presCountryId.value=generalInformationForm.country.value;
//		generalInformationForm.state2.value=generalInformationForm.state1.value;
//		generalInformationForm.district2.value=generalInformationForm.district1.value;
//		generalInformationForm.presCityId.value=generalInformationForm.permCityId.value;
//		generalInformationForm.postOffice2.value=generalInformationForm.postOffice1.value;
//		generalInformationForm.pin2.value=generalInformationForm.pin1.value;
//		}
//	}
function age(bDay) {
	now = new Date();
	born = new Date(bDay.value);
	years = Math.floor((now.getTime() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
 //alert(bDay.value+': '+years)
	if (years < 18) {
		alert("Age is less than 18 years");
		generalInformationForm.birthDate.focus();
		return false;
	} else {
		return true;
	}
}
function alphabet(obj) {
	valid = true;
	var alphaExp = /^[a-z A-Z , .]+$/;
	if (obj.value.match(alphaExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please Enter Alphabets Only");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return valid;
}
function numeric(obj) {
	valid = true;
	var numExp = /^[0-9]+$/;
	if (obj.value.match(numExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please Enter Numbers Only");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return valid;
}
function emailValidator(obj) {
	valid = true;
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (obj.value.match(emailExp) || obj.value.length == 0) {
		return true;
	} else {
		alert("Please Enter Valid email Address");
		obj.value = "";
		obj.focus();
		return false;
	}
	return valid;
}
function numericPercentage(obj) {
	valid = true;
	var numExp = /^(100(\.0{2,2})?|([0-9]?[0-9](\.[0-9]{2,2})))$/;
	if (obj.value.match(numExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please Enter Numbers Only between 00.00 to 99.99");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return valid;
}
function Alphanumeric(obj) {
	valid = true;
	var alphaExp = /^[0-9 a-z A-Z]+$/;
	if (obj.value.match(alphaExp)) {
		return true;
	} else {
		alert("Please Enter Alphabets and Numbers only");
		obj.value = "";
		obj.focus();
		return false;
	}
	return valid;
}
function Alphanumericexp(obj) {
	valid = true;
	var alphaExp = /^[0-9 a-z A-Z & . , ( )]+$/;
	if (obj.value.match(alphaExp)) {
		return true;
	} else {
		alert("Please Enter Alphabets,Numbers and Regular expression only");
		obj.value = "";
		obj.focus();
		return false;
	}
	return valid;
}

function Trim(str){
	return LTrim(RTrim(str));
	}
	function LTrim(str){
		if (str==null){
			return null;
		}
		for(var i=0; str.charAt(i)==" "; i++);
			return str.substring(i, str.length);
	}
	function RTrim(str){
		if (str==null){
			return null;
		}
		for(var i=str.length-1; str.charAt(i)==" "; i--);
			return str.substring(0,i+1);
	}


function toggleDisabled(el) {
	try {
		alert("hi");
		el.disabled = el.disabled ? false : true;
	}
	catch (E) {
	}
	if (el.childNodes && el.childNodes.length > 0) {
		for (var x = 0; x < el.childNodes.length; x++) {
			alert(el.childNodes);
			toggleDisabled(el.childNodes[x]);
		}
	}
}

function validateUpdateSPAddedByPE() { // Validation Function For Service Provider's Update Form (Added By Vidya)
try{
	valid = true;
	if (document.getElementById("operationUpdate").value == "Update") {
		if (updateSPAddedByPEForm.name.value == "") {
			alert("Please enter the name of Service Provider");
			updateSPAddedByPEForm.name.focus();
			return false;
		}
		/*if (updateSPAddedByPEForm.establishmentNo.value == "") {
			alert("Please enter establishment no. of your company");
			updateSPAddedByPEForm.establishmentNo.focus();
			return false;
		}*/

		if (updateSPAddedByPEForm.establishmentFrom.value != "") {
			var intFlag = 0;
			var strErrMsg = "Invalid establishment date \n\n";
			var dtDate = updateSPAddedByPEForm.establishmentFrom.value;
			tmp = dtDate.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			userdate = calcJulian(xDate);
			gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;
			tmp = tmp.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			currentdate = calcJulian(xDate);
			if (userdate >= currentdate) {
				strErrMsg = strErrMsg + "EstablishmentDate is not greater than Current Date \n";
				alert(strErrMsg);
				updateSPAddedByPEForm.establishmentFrom.focus();
				return false;
			}
		}
		/*if ((document.getElementById("offenceYes").checked == false) && (document.getElementById("offenceNo").checked == false)) {
			alert("Please select a value for DGR");
			document.getElementById("offenceYes").focus();
			return false;
		}
		if ((document.getElementById("offenceYes").checked == true) && (updateSPAddedByPEForm.empanelmentNo.value == "")) {
			alert("Please enter empanelment no.");
			updateSPAddedByPEForm.empanelmentNo.focus();
			return false;
		}
		if ((document.getElementById("offenceYes").checked == true) && (updateSPAddedByPEForm.empanelmentDate.value == "")) {
			alert("Please enter empanelment date");
			updateSPAddedByPEForm.empanelmentDate.focus();
			return false;
		}
		if (updateSPAddedByPEForm.empanelmentDate.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid empanelment date \n\n";
		var dtDate = updateSPAddedByPEForm.empanelmentDate.value;
		tmp = dtDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		userdate = calcJulian(xDate);
		gregDate = new Date();
		year = gregDate.getFullYear();
		month = gregDate.getMonth() + 1;
		day = gregDate.getDate();
		tmp = day + "/" + month + "/" + year;
		tmp = tmp.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		currentdate = calcJulian(xDate);
		if (userdate > currentdate) {
			strErrMsg = strErrMsg + "Empanelment date is not greater than current date \n";
			alert(strErrMsg);
			updateSPAddedByPEForm.empanelmentDate.focus();
			return false;
		}
    	}
		if ((document.getElementById("offenceOneYes").checked == false) && (document.getElementById("offenceOneNo").checked == false)) {
			alert("Please select a value for PSAR");
			document.getElementById("offenceOneYes").focus();
			return false;
		}
		if ((document.getElementById("offenceOneYes").checked == true) && (updateSPAddedByPEForm.psar.value == "")) {
			alert("Please enter PSAR");
			updateSPAddedByPEForm.psar.focus();
			return false;
		}*/
		if (updateSPAddedByPEForm.address.value == "") {
			alert("Please enter address details ");
			updateSPAddedByPEForm.address.focus();
			return false;
		}
		if (updateSPAddedByPEForm.email.value == "") {
			alert("Please enter e-mail Id ");
			updateSPAddedByPEForm.email.focus();
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.email) == false) {
			return false;
		}
		/*if (updateSPAddedByPEForm.epfAccNo.value == "") {
			alert("Please enter epf Account No. ");
			updateSPAddedByPEForm.epfAccNo.focus();
			return false;
		}*/
		if (updateSPAddedByPEForm.ownerName.value == "") {
			alert("Please enter owner name ");
			updateSPAddedByPEForm.ownerName.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerAddress.value == "") {
			alert("Please enter owner address ");
			updateSPAddedByPEForm.ownerAddress.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerAddress.value.length > 100) {
	        alert("Please do not enter more than 100 characters.Please shorten your entry and submit again.");
	        updateSPAddedByPEForm.ownerAddress.focus();
	        return false;
	    }
		if (updateSPAddedByPEForm.ownerCountry.selectedIndex == 0) {
			alert("Please enter owner country ");
			updateSPAddedByPEForm.ownerCountry.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerStateId.selectedIndex == 0) {
			alert("Please enter owner state");
			updateSPAddedByPEForm.ownerStateId.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerDistrict.selectedIndex == 0) {
			alert("Please enter owner district ");
			updateSPAddedByPEForm.ownerDistrict.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerCity.selectedIndex == 0) {
			alert("Please enter owner city ");
			updateSPAddedByPEForm.ownerCity.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerArea.selectedIndex == 0) {
			alert("Please enter owner area ");
			updateSPAddedByPEForm.ownerArea.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerPostOffice.selectedIndex == 0) {
			alert("Please enter owner post office ");
			updateSPAddedByPEForm.ownerPostOffice.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerEmail.value == "") {
			alert("Please enter owner e-mail ");
			updateSPAddedByPEForm.ownerEmail.focus();
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.ownerEmail) == false) {
			return false;
			if (updateSPAddedByPEForm.email.value == "") {
				alert("Please enter e-mail ");
				updateSPAddedByPEForm.email.focus();
				return false;
			}
			if (emailValidator(updateSPAddedByPEForm.email2) == false) {
				return false;
			}
		}
		if (updateSPAddedByPEForm.ownerMobileNo.value == "") {
			alert("Please enter owner mobile no. ");
			updateSPAddedByPEForm.ownerMobileNo.focus();
			return false;
		}
		if (numeric(updateSPAddedByPEForm.ownerMobileNo) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.ownerMobileNo.value.length < 10 && updateSPAddedByPEForm.ownerMobileNo.value.length > 1) {
			alert("Please enter a valid ten digit mobile no.");
			updateSPAddedByPEForm.ownerMobileNo.value = "";
			updateSPAddedByPEForm.ownerMobileNo.focus();
			return false;
		}
		if (numeric(updateSPAddedByPEForm.ownerStdCodePhoneNo) == false) {
			return false;
		}
		if (numeric(updateSPAddedByPEForm.ownerPhoneNo) == false) {
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.email2) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.contactPersonName.value == "") {
			alert("Please enter contact person name ");
			updateSPAddedByPEForm.contactPersonName.focus();
			return false;
		}
		/*if (numeric(updateSPAddedByPEForm.contactPersonPhone) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.contactPersonMobileNo.value == "") {
			alert("Please enter contact person mobile no. ");
			updateSPAddedByPEForm.contactPersonMobileNo.focus();
			return false;
		}*/
		if (numeric(updateSPAddedByPEForm.contactPersonMobileNo) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.contactPersonMobileNo.value.length < 10 && updateSPAddedByPEForm.contactPersonMobileNo.value.length > 1) {
			alert("Please enter a valid ten digit mobile no.");
			updateSPAddedByPEForm.contactPersonMobileNo.value = "";
			updateSPAddedByPEForm.contactPersonMobileNo.focus();
			return false;
		}
		if (updateSPAddedByPEForm.contactPersonEmail.value == "") {
			alert("Please enter contact person e-mail Id ");
			updateSPAddedByPEForm.contactPersonEmail.focus();
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.contactPersonEmail) == false) {
			return false;
		}
		/*if (updateSPAddedByPEForm.tillDate.value.value == "") {
			alert("Please enter validity date");
			updateSPAddedByPEForm.tillDate.focus();
			return false;
		}
		if (updateSPAddedByPEForm.tillDate.value != "") {
			var intFlag = 0;
			var strErrMsg = "Invalid validity date \n\n";
			var dtDate = updateSPAddedByPEForm.tillDate.value;
			tmp = dtDate.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			userdate = calcJulian(xDate);
			gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;
			tmp = tmp.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			currentdate = calcJulian(xDate);
			if (userdate < currentdate) {
				strErrMsg = strErrMsg + "Validity Date should not be less than Current Date \n";
				alert(strErrMsg);
				updateSPAddedByPEForm.tillDate.focus();
				return false;
			}
		}*/
		if ((updateSPAddedByPEForm.name1.value != "") && (updateSPAddedByPEForm.countryOne.selectedIndex == 0)) {
			alert("Please select country");
			updateSPAddedByPEForm.countryOne.focus();
			return false;
		}
		if ((updateSPAddedByPEForm.name1.value != "") && (updateSPAddedByPEForm.stateOne.selectedIndex == 0)) {
			alert("Please select state");
			updateSPAddedByPEForm.stateOne.focus();
			return false;
		}
		if ((updateSPAddedByPEForm.name2.value != "") && (updateSPAddedByPEForm.countryTwo.selectedIndex == 0)) {
			alert("Please select country");
			updateSPAddedByPEForm.countryTwo.focus();
			return false;
		}
		if ((updateSPAddedByPEForm.name2.value != "") && (updateSPAddedByPEForm.stateTwo.selectedIndex == 0)) {
			alert("Please select state");
			updateSPAddedByPEForm.stateTwo.focus();
			return false;
		}
		if ((updateSPAddedByPEForm.name3.value != "") && (updateSPAddedByPEForm.countryThree.selectedIndex == 0)) {
			alert("Please select country");
			updateSPAddedByPEForm.countryThree.focus();
			return false;
		}
		if ((updateSPAddedByPEForm.name3.value != "") && (updateSPAddedByPEForm.stateThree.selectedIndex == 0)) {
			alert("Please select state");
			updateSPAddedByPEForm.stateThree.focus();
			return false;
		}
		if (updateSPAddedByPEForm.address.value == "") {
			alert("Please enter address");
			updateSPAddedByPEForm.address.focus();
			return false;
		}
		if (updateSPAddedByPEForm.country.selectedIndex == 0) {
			alert("Please select country");
			updateSPAddedByPEForm.country.focus();
			return false;
		}
		if (updateSPAddedByPEForm.stateId.selectedIndex == 0) {
			alert("Please select state");
			updateSPAddedByPEForm.stateId.focus();
			return false;
		}
		if (updateSPAddedByPEForm.district.selectedIndex == 0) {
			alert("Please select district");
			updateSPAddedByPEForm.district.focus();
			return false;
		}
		if (updateSPAddedByPEForm.cityId.selectedIndex == 0) {
			alert("Please select city");
			updateSPAddedByPEForm.cityId.focus();
			return false;
		}
		if (updateSPAddedByPEForm.area.selectedIndex == 0) {
			alert("Please select area");
			updateSPAddedByPEForm.area.focus();
			return false;
		}
		if (updateSPAddedByPEForm.postOffice.selectedIndex == 0) {
			alert("Please select post office");
			updateSPAddedByPEForm.postOffice.focus();
			return false;
		}
		if (updateSPAddedByPEForm.stdCodePhoneNo1.value == "") {
			alert("Please enter your std code");
			updateSPAddedByPEForm.stdCodePhoneNo1.focus();
			return false;
		}
		if (numeric(updateSPAddedByPEForm.stdCodePhoneNo1) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.phoneNo.value == "") {
			alert("Please enter your phone no.");
			updateSPAddedByPEForm.phoneNo.focus();
			return false;
		}
		if (numeric(updateSPAddedByPEForm.phoneNo) == false) {
			return false;
		}
		if (numeric(updateSPAddedByPEForm.stdCodePhoneNo2) == false) {
			return false;
		}
		if (numeric(updateSPAddedByPEForm.phoneNoTwo) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.email.value == "") {
			alert("Please enter your e-mail Id");
			updateSPAddedByPEForm.email.focus();
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.email) == false) {
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.email2) == false) {
			return false;
		}
		//if (updateSPAddedByPEForm.epfAccNo.value == "") {
			//alert("Please enter your EPF account no.");
			//updateSPAddedByPEForm.epfAccNo.focus();
			//return false;
		//}
		if (alphabet(updateSPAddedByPEForm.contactPersonName) == false) {
			return false;
		}
//		if (numeric(updateSPAddedByPEForm.contactPersonPhone) == false) {
//			return false;
//		}
//		if (updateSPAddedByPEForm.contactPersonPhone.value.length < 10 && updateSPAddedByPEForm.contactPersonPhone.value.length > 1) {
//			alert("Please enter a valid ten digit phone no.");
//			updateSPAddedByPEForm.contactPersonPhone.value = "";
//			updateSPAddedByPEForm.contactPersonPhone.focus();
//			return false;
//		}
		if (updateSPAddedByPEForm.ownerMobileNo.value == "") {
			alert("Please enter owner mobile no.");
			updateSPAddedByPEForm.ownerMobileNo.focus();
			return false;
		}
		if (numeric(updateSPAddedByPEForm.ownerMobileNo) == false) {
			return false;
		}
		if (updateSPAddedByPEForm.ownerMobileNo.value.length < 10 && updateSPAddedByPEForm.ownerMobileNo.value.length > 1) {
			alert("Please enter a valid ten digit phone no.");
			updateSPAddedByPEForm.ownerMobileNo.value = "";
			updateSPAddedByPEForm.ownerMobileNo.focus();
			return false;
		}
		if (updateSPAddedByPEForm.ownerEmail.value == "") {
			alert("Please enter owner e-mail.");
			updateSPAddedByPEForm.ownerEmail.focus();
			return false;
		}
		if (updateSPAddedByPEForm.contactPersonName.value == "") {
			alert("Please enter contact person name.");
			updateSPAddedByPEForm.contactPersonName.focus();
			return false;
		}
		if (updateSPAddedByPEForm.contactPersonEmail.value == "") {
			alert("Please enter contact person e-mail.");
			updateSPAddedByPEForm.contactPersonEmail.focus();
			return false;
		}
		if (emailValidator(updateSPAddedByPEForm.contactPersonEmail) == false) {
			return false;
		}
		/*if(updateSPAddedByPEForm.tillDate.value!=""){
	        var dtDate = updateSPAddedByPEForm.tillDate.value;
	    	tmp = dtDate.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		    tillDate = calcJulian(xDate);

			var toDate = updateSPAddedByPEForm.pedate.value;
			tmp = toDate.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			pedate = calcJulian(xDate);

			if (tillDate > pedate) {
			alert("Validity date should be less than Principal Employer's validity date.");
			updateSPAddedByPEForm.tillDate.focus();
			return false;
		    }
		 } else {
			return valid;
		}*/
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}
}
catch(e){
return false;
}
}
// Ended by Vidya

// Validation function for Service Provider Update Registration Form for Go operation (Added By Vidya)
function validateGo() {
	if (document.getElementById("operationGo").value == "Go") {
		if (updateSPAddedByPEForm.serviceProviderId.selectedIndex == 0) {
			alert("Please select name of Service Provider.");
			updateSPAddedByPEForm.serviceProviderId.focus();
			return false;
		} else {
			return true;
		}
	}
}
function checkUpdateSPName1() {
	if (updateSPAddedByPEForm.name1.value == "") {
		updateSPAddedByPEForm.countryOne.selectedIndex = 0;
		alert("Please Enter Name First");
		updateSPAddedByPEForm.name1.focus();
	}
}
function checkUpdateSPCountry1() {
	if (updateSPAddedByPEForm.countryOne.selectedIndex == 0) {
		updateSPAddedByPEForm.stateOne.selectedIndex = 0;
		alert("Please Enter Country First");
		return false;
	}
}
function checkUpdateSPName2() {
	if (updateSPAddedByPEForm.name2.value == "") {
		updateSPAddedByPEForm.countryTwo.selectedIndex = 0;
		alert("Please Enter Name First");
		updateSPAddedByPEForm.name2.focus();
	}
}
function checkUpdateSPCountry2() {
	if (updateSPAddedByPEForm.countryTwo.selectedIndex == 0) {
		updateSPAddedByPEForm.stateTwo.selectedIndex = 0;
		alert("Please Select Country First");
		return false;
	}
}
function checkUpdateSPName3() {
	if (updateSPAddedByPEForm.name3.value == "") {
		updateSPAddedByPEForm.countryThree.selectedIndex = 0;
		alert("Please Enter Name First");
		updateSPAddedByPEForm.name3.focus();
	}
}
function checkUpdateSPCountry3() {
	if (updateSPAddedByPEForm.countryThree.selectedIndex == 0) {
		updateSPAddedByPEForm.stateThree.selectedIndex = 0;
		alert("Please Select Country First");
		return false;
	}
}
// Ended by Vidya

// Validation function for Principal Employer's Update Registration Form (By Vidya)
function validateUpdatePEAddedBySP() {
 try{
	if (document.getElementById("operationUpdate").value == "Update") {
		if (updatePEProfileAddedBySPForm.company.value == "") {
			alert("Please enter name of company / organization");
			updatePEProfileAddedBySPForm.company.focus();
			return false;
		}
		if (alphabet(updatePEProfileAddedBySPForm.company) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.name.value == "") {
			alert("Please enter name of registrant / owner");
			updatePEProfileAddedBySPForm.name.focus();
			return false;
		}
		if (alphabet(updatePEProfileAddedBySPForm.name) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.designation.value == "") {
			alert("Please enter designation");
			updatePEProfileAddedBySPForm.designation.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.industy.selectedIndex == 0) {
			alert("Please select industry");
			updatePEProfileAddedBySPForm.industy.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.companyType.selectedIndex == 0) {
			alert("Please select company type");
			updatePEProfileAddedBySPForm.companyType.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.address.value == "") {
			alert("Please enter address of premises");
			updatePEProfileAddedBySPForm.address.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.country.selectedIndex == 0) {
			alert("Please select country");
			updatePEProfileAddedBySPForm.country.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.stateId.selectedIndex == 0) {
			alert("Please select state");
			updatePEProfileAddedBySPForm.stateId.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.district.selectedIndex == 0) {
			alert("Please select district");
			updatePEProfileAddedBySPForm.district.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.city.selectedIndex == 0) {
			alert("Please select city");
			updatePEProfileAddedBySPForm.city.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.area.selectedIndex == 0) {
			alert("Please select area");
			updatePEProfileAddedBySPForm.area.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.postOffice.selectedIndex == 0) {
			alert("Please select post office");
			updatePEProfileAddedBySPForm.postOffice.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.stdCodePhoneNo.value == "") {
			alert("Please enter std code");
			updatePEProfileAddedBySPForm.stdCodePhoneNo.focus();
			return false;
		}
		if (numeric(updatePEProfileAddedBySPForm.stdCodePhoneNo) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.phoneNo.value == "") {
			alert("Please enter phone no.");
			updatePEProfileAddedBySPForm.phoneNo.focus();
			return false;
		}
		if (numeric(updatePEProfileAddedBySPForm.phoneNo) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.mobileNo.value == "") {
			alert("Please enter mobile no.");
			updatePEProfileAddedBySPForm.mobileNo.focus();
			return false;
		}
		if (numeric(updatePEProfileAddedBySPForm.mobileNo) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.mobileNo.value.length < 10 && updatePEProfileAddedBySPForm.mobileNo.value.length > 1) {
			alert("Please enter a valid ten digit mobile no.");
			updatePEProfileAddedBySPForm.mobileNo.value = "";
			updatePEProfileAddedBySPForm.mobileNo.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.email.value == "") {
			alert("Please enter your email id");
			updatePEProfileAddedBySPForm.email.focus();
			return false;
		}
		if (emailValidator(updatePEProfileAddedBySPForm.email) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.contactPersonName.value == "") {
		    alert("Please enter contact person name");
			updatePEProfileAddedBySPForm.contactPersonName.focus();
			return false;
	    }
		if (alphabet(updatePEProfileAddedBySPForm.contactPersonName) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.contactPersonMobileNo.value == "") {
			alert("Please enter contact person mobile no.");
			updatePEProfileAddedBySPForm.contactPersonMobileNo.focus();
			return false;
		}
		if (numeric(updatePEProfileAddedBySPForm.contactPersonMobileNo) == false) {
			return false;
		}
		if (updatePEProfileAddedBySPForm.contactPersonMobileNo.value.length < 10 && updatePEProfileAddedBySPForm.contactPersonMobileNo.value.length > 1) {
			alert("Please enter a valid ten digit mobile no.");
			updatePEProfileAddedBySPForm.contactPersonMobileNo.value = "";
			updatePEProfileAddedBySPForm.contactPersonMobileNo.focus();
			return false;
		}
		if (updatePEProfileAddedBySPForm.contactPersonEmail.value == "") {
			alert("Please enter your e-mail id");
			updatePEProfileAddedBySPForm.contactPersonEmail.focus();
			return false;
		}
		if (emailValidator(updatePEProfileAddedBySPForm.contactPersonEmail) == false) {
			return false;
		}
		var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
		}else {
		return false;
		}
	 }
	 }
	catch(e){
 	return false;
  }
   }

// Ended by Vidya

 // Validation function for Principal Employer Update Registration Form for Go operation (By Vidya)
function validatePEGo() {
	if (document.getElementById("operationGo").value == "Go") {
		if (updatePEProfileAddedBySPForm.employerId.selectedIndex == 0) {
			alert("Please Select Name of Company / Organization");
			updatePEProfileAddedBySPForm.employerId.focus();
			return false;
		} else {
			return true;
		}
	}
}
// Ended by Vidya

// Populate Post Office
function populatePostCode() {
	populateRequest("districtIdForPostOffice", document.getElementById("presDistrictId"), "postOffice", null);
}
function populateOwnerPostCode() {
	populateRequest("districtIdForOwnerPostOffice", document.getElementById("ownerDistrictId"), "ownerPostOffice", null);
}

function populatePermPostOffice() {
	populateRequest("districtIdForPermPostOffice", document.getElementById("permDistrictId"), "permPostOffice", null);
}

function populatePresPostOffice() {
	populateRequest("districtIdForPresPostOffice", document.getElementById("presDistrictId"), "presPostOffice", null);
}
function populateUnderMetricPostOffice() {
	populateRequest("districtIdForUnderMetricPostOffice", document.getElementById("underMetricDistrictId"), "underMetricPostOffice", null);
}
function populateHighSchoolPostOffice() {
	populateRequest("districtIdForHighSchoolPostOffice", document.getElementById("highSchoolDistrictId"), "highSchoolPostOffice", null);
}
function populateHigherSecondaryPostOffice() {
	populateRequest("districtIdForHigherSecondaryPostOffice", document.getElementById("higherSecondaryDistrictId"), "higherSecondaryPostOffice", null);
}
function populateGraduationPostOffice() {
	populateRequest("districtIdForGraduationPostOffice", document.getElementById("graduationDistrictId"), "graduationPostOffice", null);
}
function populateOtherPostOffice() {
	populateRequest("districtIdForOtherPostOffice", document.getElementById("otherDistrictId"), "otherPostOffice", null);
}
function populateCurrentOwnerPostOffice() {
	populateRequest("districtIdForCurrentOwnerPostOffice", document.getElementById("currentOwnerDistrictId"), "currentOwnerPostOffice", null);
}
function populatePreviousOwnerPostOffice() {
	populateRequest("districtIdForPreviousOwnerPostOffice", document.getElementById("previousOwnerDistrictId"), "previousOwnerPostOffice", null);
}
function populateOrgPostOffice1() {
	populateRequest("districtIdForOrgPostOffice1", document.getElementById("orgDistrictId1"), "orgPostOffice1", null);
}
function populateOrgPostOffice2() {
	populateRequest("districtIdForOrgPostOffice2", document.getElementById("orgDistrictId2"), "orgPostOffice2", null);
}
//Populate Pin Code
function populatePinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("postOffice").value, "pinCode", "");
}
function populateOwnerPinCode() {
	populateRequestForPinCode("ownerPostOffice", document.getElementById("ownerPostOffice").value, "ownerPINCode", "");
}
function populatePermPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("permPostOffice").value, "permPinCode", "");
}
function populatePresPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("presPostOffice").value, "presPinCode", "");
}
function populateUnderMetricPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("underMetricPostOffice").value, "underMetricPinCode", "");
}
function populateHighSchoolPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("highSchoolPostOffice").value, "highSchoolPinCode", "");
}
function populateHigherSecondaryPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("higherSecondaryPostOffice").value, "higherSecondaryPinCode", "");
}
function populateGraduationPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("graduationPostOffice").value, "graduationPinCode", "");
}
function populateOtherPinCode() {
	populateRequestForPinCode("postOffice", document.getElementById("otherPostOffice").value, "otherPinCode", "");
}
function populateCurrentOwnerPinCode() {
	populateRequestForPinCode("currentOwnerPostOffice", document.getElementById("currentOwnerPostOffice").value, "currentOwnerPinCode", "");
}
function populatePreviousOwnerPinCode() {
	populateRequestForPinCode("previousOwnerPostOffice", document.getElementById("previousOwnerPostOffice").value, "previousOwnerPinCode", "");
}
function populateOrgPinCode1() {
	populateRequestForPinCode("orgPostOffice1", document.getElementById("orgPostOffice1").value, "orgPinCode1", "");
}
function populateOrgPinCode2() {
	populateRequestForPinCode("orgPostOffice2", document.getElementById("orgPostOffice2").value, "orgPinCode2", "");
}


// Validation Function for Principal Employer Delegate Registration Form (Added By Vidya)
function validatePEDelegate() {
	valid = true;
	if (principalEmployerDelegateForm.first_name.value == "") {
		alert("Please Enter First Name");
		principalEmployerDelegateForm.first_name.focus();
		return false;
	}
	if (alphabet(principalEmployerDelegateForm.first_name) == false) {
		return false;
	}
	if (principalEmployerDelegateForm.last_name.value == "") {
		alert("Please Enter Last Name");
		principalEmployerDelegateForm.last_name.focus();
		return false;
	}
	if (alphabet(principalEmployerDelegateForm.last_name) == false) {
		return false;
	}
	if (principalEmployerDelegateForm.designation.selectedIndex == 0) {
        alert("Please Select Designation");
        principalEmployerDelegateForm.designation.focus();
		return false;
	}
	if (principalEmployerDelegateForm.employee_id.value == "") {
		alert("Please Enter Employee Id");
		principalEmployerDelegateForm.employee_id.focus();
		return false;
	}
	if (principalEmployerDelegateForm.addressPEDelegate.value == "") {
		alert("Please Enter Address");
		principalEmployerDelegateForm.addressPEDelegate.focus();
		return false;
	}
	if (principalEmployerDelegateForm.country.selectedIndex == 0) {
		alert("Please Select Country");
		principalEmployerDelegateForm.country.focus();
		return false;
	}
	if (principalEmployerDelegateForm.state.selectedIndex == 0) {
		alert("Please Select State");
		principalEmployerDelegateForm.state.focus();
		return false;
	}
	if (principalEmployerDelegateForm.district.selectedIndex == 0) {
		alert("Please Select District");
		principalEmployerDelegateForm.district.focus();
		return false;
	}
	if (principalEmployerDelegateForm.city.selectedIndex == 0) {
		alert("Please Select City");
		principalEmployerDelegateForm.city.focus();
		return false;
	}
	if (principalEmployerDelegateForm.post_office.selectedIndex == 0) {
		alert("Please Select Post Office");
		principalEmployerDelegateForm.post_office.focus();
		return false;
	}
	if (principalEmployerDelegateForm.pin_code.selectedIndex == 0) {
		alert("Please Select PIN Code");
		principalEmployerDelegateForm.pin_code.focus();
		return false;
	}
	if (principalEmployerDelegateForm.mobile_no.value == "") {
		alert("Please Enter Mobile No.");
		principalEmployerDelegateForm.mobile_no.focus();
		return false;
	}
	if (numeric(principalEmployerDelegateForm.mobile_no) == false) {
		return false;
	}
	if (principalEmployerDelegateForm.mobile_no.value.length < 10 && principalEmployerDelegateForm.mobile_no.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Mobile No.");
		principalEmployerDelegateForm.mobile_no.value = "";
		principalEmployerDelegateForm.mobile_no.focus();
		return false;
	}
	if (principalEmployerDelegateForm.e_mail.value == "") {
		alert("Please Enter Your Email Id");
		principalEmployerDelegateForm.e_mail.focus();
		return false;
	}
	if (emailValidator(principalEmployerDelegateForm.e_mail) == false) {
		return false;
	}
	if (principalEmployerDelegateForm.status.selectedIndex == 0) {
		alert("Please Select Allow");
		principalEmployerDelegateForm.status.focus();
		return false;
	}
	if (principalEmployerDelegateForm.allowed_date.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid Allowed Date \n\n";
		var dtDate = principalEmployerDelegateForm.allowed_date.value;
		tmp = dtDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		userdate = calcJulian(xDate);
		gregDate = new Date();
		year = gregDate.getFullYear();
		month = gregDate.getMonth() + 1;
		day = gregDate.getDate();
		tmp = day + "/" + month + "/" + year;
		tmp = tmp.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		currentdate = calcJulian(xDate);
		if (userdate < currentdate) {
			strErrMsg = strErrMsg + "Allowed Date is not less than Current Date \n";
			alert(strErrMsg);
			principalEmployerDelegateForm.allowed_date.focus();
			return false;
		}
	}
	if (principalEmployerDelegateForm.disallowed_date.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid Disallowed Date \n\n";
		var dtDate = principalEmployerDelegateForm.disallowed_date.value;
		tmp = dtDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		userdate = calcJulian(xDate);
		gregDate = new Date();
		year = gregDate.getFullYear();
		month = gregDate.getMonth() + 1;
		day = gregDate.getDate();
		tmp = day + "/" + month + "/" + year;
		tmp = tmp.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		currentdate = calcJulian(xDate);
		if (userdate < currentdate) {
			strErrMsg = strErrMsg + "Disallowed Date is not less than Current Date \n";
			alert(strErrMsg);
			principalEmployerDelegateForm.disallowed_date.focus();
			return false;
		}
	}
	if (document.getElementById("status").value == "Y") {
		if (principalEmployerDelegateForm.allowed_date.value == "") {
			alert("Please Enter Allowed Date");
			principalEmployerDelegateForm.allowed_date.focus();
			return false;
		} else {
			return valid;
		}
	}
	if (document.getElementById("status").value == "N") {
		if (principalEmployerDelegateForm.disallowed_date.value == "") {
			alert("Please Enter Disallowed Date");
			principalEmployerDelegateForm.disallowed_date.focus();
			return false;
		} else {
			return valid;
		}
	} else {
		return valid;
	}
}
// Ended by Vidya

//Validation function for Country Form(Added By Vidya)
function validateCountry() {
	if (countryForm.name.value == "" || trim(countryForm.name.value) == "") {
		alert("Please Enter Name");
		countryForm.name.focus();
		return false;
	}
	if (alphabet(countryForm.name) == false) {
		return false;
	}
	if (countryForm.countryAbr.value == "" || trim(countryForm.countryAbr.value) == "") {
		alert("Please Enter Code");
		countryForm.countryAbr.focus();
		return false;
	}
	if (alphabet(countryForm.countryAbr) == false) {
		return false;
	} else {
		return true;
	}
}
// Ended by Vidya



//Validation function for State Form(Added By Vidya)
function validateSF() {
	valid = true;
	if (stateForm.countryId.selectedIndex == 0) {
		alert("Please Select Country");
		stateForm.countryId.focus();
		return false;
	}
	if (stateForm.name.value == "" || trim(stateForm.name.value) == "") {
		alert("Please Enter State");
		stateForm.name.focus();
		return false;
	}
	if (alphabet(stateForm.name) == false) {
		return false;
	} else {
		return valid;
	}
}
// Ended by Vidya

// Validation function for State List Form(Added By Vidya)
function stateGO() {
	if (document.getElementById("operationGo").value == "Go") {
		if (stateListForm.countryID.selectedIndex == 0) {
			alert("Please Select Country");
			stateListForm.countryID.focus();
			return false;
		} else {
			return true;
		}
	}
}
// Ended by Vidya

// Validatation function for City Form(Added By Vidya)
function validateCF() {
	valid = true;
	if (cityForm.countryId.selectedIndex == 0) {
		alert("Please Select Country");
		cityForm.countryId.focus();
		return false;
	}
	if (cityForm.stateId.selectedIndex == 0) {
		alert("Please Select State");
		cityForm.stateId.focus();
		return false;
	}
	if (cityForm.districtId.selectedIndex == 0) {
		alert("Please Select District");
		cityForm.districtId.focus();
		return false;
	}
	if (cityForm.name.value == "" || trim(cityForm.name.value) == "") {
		alert("Please Enter City");
		cityForm.name.focus();
		return false;
	}
	if (alphabet(cityForm.name) == false) {
		return false;
	} else {
		return valid;
	}
}
// Ended by Vidya

// Validation Function for City List Form(Added By Vidya)
function cityGO() {
	if (document.getElementById("operationGo").value == "Go") {
		if (cityListForm.country_id.selectedIndex == 0) {
			alert("Please Select Country");
			cityListForm.country_id.focus();
			return false;
		} else {
			if (cityListForm.state_id.selectedIndex == 0) {
				alert("Please Select State");
				cityListForm.state_id.focus();
				return false;
			} else {
				if (cityListForm.district_id.selectedIndex == 0) {
					alert("Please Select District");
					cityListForm.district_id.focus();
					return false;
				} else {
					return true;
				}
			}
		}
	}
}
// Ended by Vidya


//Validation functon for district text box (Added : Meghraj)
function districtGo() {
	if (document.getElementById("operationGo").value == "Go") {
		if (districtListForm.stateId.selectedIndex == 0) {
			alert("Please Select State");
			districtListForm.stateId.focus();
			return false;
		} else {
			return true;
		}
	}
}


//Validation functon for district list form (Added : Meghraj)
function validateSearchCriteriaForDistrict() {
	var valid = true;
	if (document.getElementById("operationGo").value == "Go") {
		if (districtListForm.countryId.selectedIndex == 0) {
			alert("Please Select Country");
			districtListForm.countryId.focus();
			return false;
		} else {
			if (districtListForm.stateId.selectedIndex == 0) {
				alert("Please Select state");
				districtListForm.stateId.focus();
				return false;
			} else {
				return valid;
			}
		}
	} else {
		return true;
	}
}

//Validation function for add new district (Added : Meghraj)
function validateDF() {
	valid = true;
	if (districtForm.countryId.selectedIndex == 0) {
		alert("Please Select Country");
		districtForm.countryId.focus();
		return false;
	} else {
		if (districtForm.stateId.selectedIndex == 0) {
			alert("Please Select State");
			districtForm.stateId.focus();
			return false;
		} else {
			if (districtForm.name.value == "" || trim(districtForm.name.value) == "") {
				alert("Please Enter District");
				districtForm.name.focus();
				return false;
			} else {
				if (alphabet(districtForm.name) == false) {
					return false;
				} else {
					return valid;
				}
			}
		}
	}
}

 // Validation function for post office update (by Meghraj)
function PostOfficeUpdate() {
	valid = true;
	var postOffice = document.getElementsByName("postOffice1");
	for (var i = 0; i < postOffice.length; i++) {
		if (postOffice[i].type == "text" && postOffice[i].value == "") {
			alert("Please Enter Post Office Name");
			postOffice[i].focus();
			return false;
		}
	}
	return PINCodeUpdate();
}
function PINCodeUpdate() {
	valid = true;
	var pinCode = document.getElementsByName("pinCode1");
	for (var j = 0; j < pinCode.length; j++) {
		if (pinCode[j].type == "text" && pinCode[j].value == "") {
			alert("Please Enter PIN Code");
			pinCode[j].focus();
			return false;
		} else {
			if (pinCode[j].value.length < 5 || pinCode[j].value.length > 7) {
				alert("Please Enter Six Digit Valid PIN Code");
				pinCode[j].focus();
				return false;
			}
		}
	}
	return valid();
}

 // Validation function for allow to enter number only (by Meghraj)
function numbersonly(myfield, e, dec) {
  var key;
  var keychar;

  if (window.event)
    key = window.event.keyCode;
  else if (e)
    key = e.which;
  else
    return true;
  keychar = String.fromCharCode(key);

  // control keys
  if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
    return true;

  // numbers
  else if ((("0123456789").indexOf(keychar) > -1)){
    return true;
    }

  // decimal point jump
  else if (dec && (keychar == ".")) {
    myfield.form.elements[dec].focus();
    return false;
  } else
    return false;
}


// Validation function for validate pin code (by Meghraj)
function validatePinCode() {
	valid = true;
	if (pinCodeForm.countryId.selectedIndex == 0) {
		alert("Please Select Country");
		pinCodeForm.countryId.focus();
		return false;
	} else {
		if (pinCodeForm.stateId.selectedIndex == 0) {
			alert("Please Select State");
			pinCodeForm.stateId.focus();
			return false;
		} else {
			if (pinCodeForm.districtId.selectedIndex == 0) {
				alert("Please Enter District");
				pinCodeForm.districtId.focus();
				return false;
			} else {
				return valid;
			}
		}
	}
}
// Validation function for City And Zone List Form (Added By Vidya)
function cityAndZoneGO() {
	if (document.getElementById("operationGo").value == "Go") {
		if (cityAndZoneListForm.country_id.selectedIndex == 0) {
			alert("Please Select Country");
			cityAndZoneListForm.country_id.focus();
			return false;
		} else {
			if (cityAndZoneListForm.state_id.selectedIndex == 0) {
				alert("Please Select State");
				cityAndZoneListForm.state_id.focus();
				return false;
			} else {
				if (cityAndZoneListForm.district_id.selectedIndex == 0) {
					alert("Please Select District");
					cityAndZoneListForm.district_id.focus();
					return false;
				} else {
					return true;
				}
			}
		}
	}
}
// Ended by Vidya

// Validation function for City And Zone Form (Added By Vidya)
function validateCityNZone() {
	valid = true;
	if (cityAndZoneForm.countryId.selectedIndex == 0) {
		alert("Please Select Country");
		cityAndZoneForm.countryId.focus();
		return false;
	}
	if (cityAndZoneForm.stateId.selectedIndex == 0) {
		alert("Please Select State");
		cityAndZoneForm.stateId.focus();
		return false;
	}
	if (cityAndZoneForm.districtId.selectedIndex == 0) {
		alert("Please Select District");
		cityAndZoneForm.districtId.focus();
		return false;
	}
	if (cityAndZoneForm.cityId.selectedIndex == 0) {
		alert("Please Select City");
		cityAndZoneForm.cityId.focus();
		return false;
	}
	if (cityAndZoneForm.zone.selectedIndex == 0) {
		alert("Please Select Zone");
		cityAndZoneForm.zone.focus();
		return false;
	} else {
		return valid;
	}
}
// Ended by Vidya

// Function for validate EPF relieving form (By Meghraj) and modified by Vidya
function validateEPFForm() {
    if (relievingEmployeeForm.dateOfLeaving.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid date of leaving \n\n";
		var dtDate = relievingEmployeeForm.dateOfLeaving.value;
		tmp = dtDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		userdate = calcJulian(xDate);
		gregDate = new Date();
		year = gregDate.getFullYear();
		month = gregDate.getMonth() + 1;
		day = gregDate.getDate();
		tmp = day + "/" + month + "/" + year;
		tmp = tmp.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		currentdate = calcJulian(xDate);
		if (userdate < currentdate) {
			strErrMsg = strErrMsg + "Date of leaving should be greater than current date. \n";
			alert(strErrMsg);
			relievingEmployeeForm.dateOfLeaving.focus();
			return false;
		}
	}
	if (document.getElementById("reason").selectedIndex == 0) {
		alert("Please select reason for leaving the job.");
		return false;
	}
	return valid;
}

// Validation for Employee Advance Salary Application Form By Vidya
function validateAdvanceSalaryApplication() {
	if (document.getElementById("advanceAmount").value == "") {
		alert("Please Enter Advance Amount");
		document.getElementById("advanceAmount").focus();
		return false;
	}
	if (numeric(employeeAdvanceSalaryApplicationForm.advanceAmount) == false) {
		return false;
	}
	if (document.getElementById("reasonForAdvance").selectedIndex == 0) {
		alert("Please Select Reason");
		document.getElementById("reasonForAdvance").focus();
		return false;
	}
	if (document.getElementById("reasonForAdvance").selectedIndex == 2 && document.getElementById("reasonOtherId").value == "") {
		alert("Please Enter Valid Reason");
		document.getElementById("reasonOtherId").focus();
		return false;
	}
	if (document.getElementById("repaymentMode").selectedIndex == 0) {
		alert("Please Select Repayment Mode");
		document.getElementById("repaymentMode").focus();
		return false;
	}
	if (document.getElementById("noOfInstallments").selectedIndex == 0) {
		alert("Please Select No. of Installments");
		document.getElementById("noOfInstallments").focus();
		return false;
	}
	if (emailValidator(document.getElementById("emailId")) == false) {
		return false;
	} else {
		return true;
	}
}
function advanceOtherReason() {  // Added By Vidya
	if (document.getElementById("reasonForAdvance").selectedIndex == 2) {
		document.getElementById("reasonOtherId").readOnly = false;
		document.getElementById("reasonOtherId").style.backgroundColor = "#ffffff";
	}
	if (document.getElementById("reasonForAdvance").selectedIndex == 1 || document.getElementById("reasonForAdvance").selectedIndex == 0) {
		document.getElementById("reasonOtherId").value = "";
		document.getElementById("reasonOtherId").readOnly = true;
		document.getElementById("reasonOtherId").style.backgroundColor = "#eeeeee";
	}
}
function repaymentInstallment() {  // Added By Vidya
	if (document.getElementById("repaymentMode").selectedIndex == 3) {
		document.getElementById("noOfInstallments").disabled = false;
	}
	if (document.getElementById("repaymentMode").selectedIndex == 0 || document.getElementById("repaymentMode").selectedIndex == 1 || document.getElementById("repaymentMode").selectedIndex == 2) {
		document.getElementById("noOfInstallments").disabled = true;
		document.getElementById("noOfInstallments").value = "0";
	}
}
// Ended by Vidya

 // Validation For Application for Leave
function validateLeaveAppln() {
	var radioSelected = false;
	for (i = 0; i < applicationForLeaveForEmployeesForm.typeOfLeave.length; i++) {
		if (applicationForLeaveForEmployeesForm.typeOfLeave[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select A Value For Type of Leave You Are Applying For");
		return (false);
	}
	if (emailValidator(document.getElementById("email")) == false) {
		return false;
	}
	if (applicationForLeaveForEmployeesForm.fromDate.value == "") {
		alert("Please Enter The Starting Date of Your Leave Period");
		applicationForLeaveForEmployeesForm.fromDate.focus();
		return false;
	}
	if (applicationForLeaveForEmployeesForm.tillDate.value == "") {
		alert("Please Enter The Ending Date of Your Leave Period");
		applicationForLeaveForEmployeesForm.tillDate.focus();
		return false;
	}
	if (applicationForLeaveForEmployeesForm.tillDate.value <= applicationForLeaveForEmployeesForm.fromDate.value) {
		alert("From Date Could Not Be Greater Than To Date");
		applicationForLeaveForEmployeesForm.fromDate.value = "";
		applicationForLeaveForEmployeesForm.tillDate.value = "";
		return false;
	}
	if (applicationForLeaveForEmployeesForm.reason.value == "") {
		alert("Please Enter The Reason For Your Leave");
		applicationForLeaveForEmployeesForm.reason.focus();
		return false;
	}
	return true;
}
function setAllSelection() {
	document.getElementById("approvedByAdmin1").checked = false;
	document.getElementById("approvedByAdmin2").checked = false;
	document.getElementById("approvedByAdmin").checked = false;
	document.getElementById("onlyNotApproved").checked = false;
}
function setOnlyNotApproved() {
	document.getElementById("approvedByAdmin1").checked = false;
	document.getElementById("approvedByAdmin2").checked = false;
	document.getElementById("approvedByAdmin").checked = false;
	document.getElementById("allList").checked = false;
}
function setAdminSelection() {
	document.getElementById("onlyNotApproved").checked = false;
	document.getElementById("allList").checked = false;
}


function validateJobs()
	{
	if(document.getElementById('name').value==""){
	alert("Please Enter Your Name");
	document.getElementById('name').focus();
	return false;
	}
	if(alphabet(document.getElementById('name')) == false) {
		return false;
	}
	if(document.getElementById('positionCode').value==""){
	alert("Please Enter The Position Code");
	document.getElementById('positionCode').focus();
	return false;
	}
	if(document.getElementById('mobileNo').value==""){
	alert("Please Enter Your Mobile No.");
	document.getElementById('mobileNo').focus();
	return false;
	}
	if(numeric(document.getElementById('mobileNo')) == false) {
		return false;
	}
	if(document.getElementById("emailId").value == ""){
	alert("Please Enter Your email Id");
	document.getElementById("emailId").focus();
	return false;
	}
	if(emailValidator(document.getElementById("emailId")) == false) {
		return false;
	}
	if(document.getElementById('resume').value==""){
	alert("Please Upload Your Resume");
	document.getElementById('resume').focus();
	return false;
	}
	return true;
	}

//Function for check arrested option (Added by Meghraj)
function checkArrested(obj){
	if(obj.value == 'Y' ){
		document.getElementById('calDateArrested').setAttribute("href", "javascript: NewCssCal('demo211','ddmmyyyy','dropdown',false,24,false);");
		policeCaseForm.placeArrested.readOnly = 0;
		policeCaseForm.placeArrested.style.backgroundColor = '#ffffff';

		policeCaseForm.arrestLocationPs.readOnly = 0;
		policeCaseForm.arrestLocationPs.style.backgroundColor = '#ffffff';

		document.getElementById('demo211').readonly = '';
		document.getElementById('demo211').style.backgroundColor = '#ffffff';
	} else {
		document.getElementById('calDateArrested').removeAttribute("href");
		policeCaseForm.placeArrested.readOnly = 1;
		policeCaseForm.placeArrested.style.backgroundColor = '#eeeeee';
		policeCaseForm.placeArrested.value = '';

		policeCaseForm.arrestLocationPs.readOnly = 1;
		policeCaseForm.arrestLocationPs.style.backgroundColor = '#eeeeee';
		policeCaseForm.arrestLocationPs.value = '';

		document.getElementById('demo211').readonly = true;
		document.getElementById('demo211').style.backgroundColor = '#eeeeee';
		document.getElementById('demo211').value = '';
	}
}

//Function for validate police case state (Added by Meghraj)
function validateCase(){
	if(policeCaseForm.formNo.value == ""){
		alert('Please Enter Form Number ');
		policeCaseForm.formNo.focus();
		return false;
	}else if(policeCaseForm.caseRegistrationNo.value == ""){
		alert('Please Enter police case number');
		policeCaseForm.caseRegistrationNo.focus();
		return false;
	}else if(policeCaseForm.underIpcSections.value == ""){
		alert('Please Enter IPC Sections');
		policeCaseForm.underIpcSections.focus();
		return false;
	}else if(policeCaseForm.typeSelectionOfArrested.value == 'Y' && policeCaseForm.placeArrested.value == ""){
		alert('Please Enter Place arrested');
		policeCaseForm.placeArrested.focus();
		return false;
	}else if(policeCaseForm.typeSelectionOfArrested.value == 'Y' && policeCaseForm.arrestLocationPs.value == ""){
		alert('Please Enter Arrested Location police station');
		policeCaseForm.arrestLocationPs.focus();
		return false;
	}else if(policeCaseForm.caseStatus.selectedIndex == 0){
		alert('Please Enter case status');
		policeCaseForm.caseStatus.focus();
		return false;
	}else if(policeCaseForm.crimePlace.value == ""){
		alert('Please Enter Crime place');
		policeCaseForm.crimePlace.focus();
		return false;
	}else if(policeCaseForm.crimeDescription.value == ""){
		alert('Please Enter Crime description');
		policeCaseForm.crimeDescription.focus();
		return false;
	}else if(policeCaseForm.crimeLocationPs.value == ""){
		alert('Please Enter Crime location police station');
		policeCaseForm.crimeLocationPs.focus();
		return false;
	}else if(policeCaseForm.typeSelectionOfArrested.value == 'Y' && document.getElementById('demo211').value == ""){
		alert('Please Enter date arrested');
		document.getElementById('demo211').focus();
		return false;
	}else if(document.getElementById('crimeDate1').value == ""){
		alert('Please Enter date arrested');
		document.getElementById('crimeDate1').focus();
		return false;
	}
	document.getElementById('dateArrested').value = document.getElementById('demo211').value;
	document.getElementById('crimeDate').value = document.getElementById('crimeDate1').value;
	document.getElementById('caseClosedDate').value = document.getElementById('caseClosedDate1').value;
	return true;

}

function setEmpty(){
	if(document.getElementById('operation').value == 'Add Second Employee' ||
					document.getElementById('operation').value == 'Add Third Employee'){
		document.getElementById('firstName').value = '';
		document.getElementById('middleName').value = '';
		document.getElementById('lastName').value = '';
		document.getElementById('fatherName').value = '';
		document.getElementById('designation').value = '';
		document.getElementById('batchNo').value = '';
		document.getElementById('birthDate').value = '';
		document.getElementById('mobile').value = '';
		document.getElementById('email').value = '';
		document.getElementById('joiningDate').value = '';
		document.getElementById('deassociationDate').value = '';
		document.getElementById('policeDepartment').value = '';
		document.getElementById('address').value = '';
		document.getElementById('title').value = '';
		document.getElementById('pinCode').value = '';
		document.getElementById('phoneNumber').value = '';
		policeEmployeesForm.countryId.selectedIndex = 0;
	}
}
function setEmptyAddPolice(){
	document.getElementById('userName').value = '';
	document.getElementById('password').value = '';
	document.getElementById('reEnterPassword').value = '';

}
// Validation Function ForOwnerDetails Registration Form:added anil on 19/02/2010:begin
function validateOwnerDetails() {
	valid = true;
	if (ownerDetailsForm.ownerName.value == "") {
		alert("Please Enter the ownerName");
		ownerDetailsForm.ownerName.focus();
		return false;
	}
		if (alphabet(ownerDetailsForm.ownerName) == false) {
		return false;
	}

	if (ownerDetailsForm.permanentAddress.value == "") {
		alert("Please Enter Address");
		ownerDetailsForm.permanentAddress.focus();
		return false;
	}
	if ((ownerDetailsForm.permanentCountry.value != "") && (ownerDetailsForm.permanentCountry.selectedIndex == 0)) {
		alert("Please Select Country");
		ownerDetailsForm.permanentCountry.focus();
		return false;
	}

	if (ownerDetailsForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		ownerDetailsForm.permanentState.focus();
		return false;
	}

	if (ownerDetailsForm.permanentDistrictId.selectedIndex == 0) {
		alert("Please Select District");
		ownerDetailsForm.permanentDistrictId.focus();
		return false;
	}
	if (ownerDetailsForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		ownerDetailsForm.permanentCity.focus();
		return false;
	}
	if (ownerDetailsForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		ownerDetailsForm.permanentPostOffice.focus();
		return false;
	}
	if (ownerDetailsForm.permanentPin.selectedIndex == 0) {
		alert("Please Select PIN Code");
		ownerDetailsForm.permanentPin.focus();
		return false;
	}
	if (ownerDetailsForm.ownerPhone.value == "") {
		alert("Please Enter Your Phone No.");
		ownerDetailsForm.ownerPhone.focus();
		return false;
	}
	if (numeric(ownerDetailsForm.ownerPhone) == false) {
		return false;
	}
	/*if ( ownerDetailsForm.ownerPhone.value.length > 1) {
		alert("Please Enter a Valid  Phone No.");
		ownerDetailsForm.ownerPhone.value = "";
		ownerDetailsForm.ownerPhone.focus();
		return false;
	}*/

	if (ownerDetailsForm.ownerEmailId.value == "") {
		alert("Please Enter Your E Mail Id");
		ownerDetailsForm.ownerEmailId.focus();
		return false;
	}
	if (emailValidator(ownerDetailsForm.email) == false) {
		return false;
	}
 else {
		return valid;
	}
}
//added anil on 19/02/2010:End=======




// Added by Meenakshi (Validations for JL DB Info Form)-->

//Added by Meenakshi (Validations for JL DB Info Form)

  function validateJLSetup()
    {
    if(locationJLSetUpDBForm.ipAddress.value=="")
    {
    alert("Please enter the Static IP Address of your computer");
    locationJLSetUpDBForm.ipAddress.focus();
    return false;
    }
    if(numeric(locationJLSetUpDBForm.ipAddress) == false) {
		return false;
	}
     if(locationJLSetUpDBForm.port.value=="")
    {
    alert("Please enter the Port No. for MSSQL Database");
    locationJLSetUpDBForm.port.focus();
    return false;
    }
    if(numeric(locationJLSetUpDBForm.port) == false) {
		return false;
	}
     if(locationJLSetUpDBForm.username.value=="")
    {
    alert("Please enter the Username of MSSQL Database");
    locationJLSetUpDBForm.username.focus();
    return false;
    }
     if(locationJLSetUpDBForm.password.value=="")
    {
    alert("Please enter the Password of MSSQL Database");
    locationJLSetUpDBForm.password.focus();
    return false;
    }
     if(locationJLSetUpDBForm.principalEmployerId.selectedIndex==0)
    {
    alert("Please select your Principal Employer");
    locationJLSetUpDBForm.principalEmployerId.focus();
    return false;
    }
    if(locationJLSetUpDBForm.locationId.selectedIndex==0)
    {
    alert("Please select your Location");
    locationJLSetUpDBForm.locationId.focus();
    return false;
    }
    if(locationJLSetUpDBForm.serviceProviderId.selectedIndex==0)
    {
    alert("Please select your Service Provider");
    locationJLSetUpDBForm.serviceProviderId.focus();
    return false;
    }
     if(locationJLSetUpDBForm.status.selectedIndex==0)
    {
    alert("Please select your Status");
    locationJLSetUpDBForm.status.focus();
    return false;
    }
    return true;
    }
//End by Meenakshi

//rakeshlodhi Begin
function societyRegistrationValidation()
{

	 if( document.getElementById('back') != null && document.getElementById('back')!="undefined" && document.getElementById('back').value !="Back")
	 {
	  return true;
	 }

	 if(document.societyRegistrationForm.societyName.value.trim().length==0)
	 {
	  alert("Pls Enter Society Name ");
	  document.societyRegistrationForm.societyName.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.societyName.value !="" && !alphabet(document.societyRegistrationForm.societyName))
	 {
	     document.societyRegistrationForm.societyName.focus();
	     return false;

	 }
	 else if(document.societyRegistrationForm.societyPresidentName.value.trim().length==0)
	 {
	  alert("Pls Enter President Name ");
	  document.societyRegistrationForm.societyPresidentName.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.societyPresidentName.value !="" && !alphabet(document.societyRegistrationForm.societyPresidentName))
	 {
	     document.societyRegistrationForm.societyPresidentName.focus();
	     return false;
	 }
	 else if(document.societyRegistrationForm.societySecretaryName.value.trim().length==0)
	 {
	  alert("Pls Enter Secretary Name ");
	  document.societyRegistrationForm.societySecretaryName.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.societySecretaryName.value !="" && !alphabet(document.societyRegistrationForm.societySecretaryName))
	 {
	     document.societyRegistrationForm.societyPresidentName.focus();
	     return false;

	 }
	 else if(document.societyRegistrationForm.emailId.value !="" && !emailValidator(document.societyRegistrationForm.emailId))
	 {
	     document.societyRegistrationForm.emailId.focus();
	     return false;
	 }
	 else if(document.societyRegistrationForm.contactNo.value.trim().length==0 || document.societyRegistrationForm.contactNo.value =="0")
	 {
	  alert("Pls Enter Phone No");
	  document.societyRegistrationForm.contactNo.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.contactNo.value !="" && !numeric(document.societyRegistrationForm.contactNo))
	 {
	     document.societyRegistrationForm.contactNo.focus();
	     return false;

	 }
	 else if(document.societyRegistrationForm.noOfFlats.value.trim().length==0 || document.societyRegistrationForm.noOfFlats.value=="0")
	 {
	  alert("Pls Enter No of Flats");
	  document.societyRegistrationForm.noOfFlats.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.noOfFlats.value !="" && !numeric(document.societyRegistrationForm.noOfFlats))
	 {
	     document.societyRegistrationForm.noOfFlats.focus();
	     return false;

	 }
	 else if(document.societyRegistrationForm.societyAddress.value=="")
	 {
	  alert("Pls Enter Society Address");
	  document.societyRegistrationForm.societyAddress.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.countryId.value=="0")
	 {
	  alert("Pls Select the Country ");
	  document.societyRegistrationForm.countryId.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.countryId.value!="0" && document.societyRegistrationForm.stateId.value=="")
	 {
	  alert("Pls Select the State ");
	  document.societyRegistrationForm.stateId.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.stateId.value !="0" && document.societyRegistrationForm.districtId.value=="")
	 {

	  alert("Pls Select the District ");
	  document.societyRegistrationForm.districtId.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.districtId.value!="0" && document.societyRegistrationForm.cityId.value=="")
	 {
	  alert("Pls Select the City ");
	  document.societyRegistrationForm.cityId.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.cityId.value!="0" && document.societyRegistrationForm.postOfficeId.value=="")
	 {
	  alert("Pls Select the Post Office ");
	  document.societyRegistrationForm.cityId.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.cityId.value !="0" && (document.societyRegistrationForm.pinCode.value.trim().length==0 ||document.societyRegistrationForm.pinCode.value=="0"))
	 {
	  alert("Pls Enter Pin Code");
	  document.societyRegistrationForm.pinCode.focus();
	  return false;
	 }
	 else if(document.societyRegistrationForm.pinCode.value !="" && !numeric(document.societyRegistrationForm.pinCode))
	 {
	     document.societyRegistrationForm.pinCode.focus();
	     return false;

	 }
	 else if(document.societyRegistrationForm.layout1.value=="")
	 {
	  alert("Pls click on Browse to select Layout");
	  document.societyRegistrationForm.layout.focus();
	  return false;
	 }
	 return true;
}
function societyTowerValidation()
	{

	 if( document.getElementById('back') != null && document.getElementById('back')!="undefined" && document.getElementById('back').value !="Back")
	 {
	 document.getElementById('back').value="Back";
	  return true;
	 }
	 if(document.societyTowerForm.towerName.value.trim().length==0)
	 {
	  alert("Pls Enter Tower Name ");
	  document.societyTowerForm.towerName.focus();
	  return false;
	 }

	 return true;
	}
  function societyFlatTypeValidation()
	{

	 if( document.getElementById('back') != null && document.getElementById('back')!="undefined" && document.getElementById('back').value !="Back")
	 {
	 document.getElementById('back').value="Back";
	  return true;
	 }
	 if(document.societyFlatTypeForm.flatType.value.trim().length==0)
	 {
	  alert("Pls Enter Society Flat Type ");
	  document.societyFlatTypeForm.flatType.focus();
	  return false;
	 }

	 return true;
	}

//rakeshlodhi End


	function rwaBlockValidation()
	{

	 if( document.getElementById('back') != null && document.getElementById('back')!="undefined" && document.getElementById('back').value !="Back" && document.getElementById('back').value !="Goto Block List")
	 {
	  document.getElementById('back').value="Back";
	  return true;
	 }
	 if(document.rwaBlockForm.blockName.value.trim().length==0)
	 {
	  alert("Pls Enter RWA Block Name ");
	  document.rwaBlockForm.blockName.focus();
	  return false;
	 }

	 return true;
	}
	//rakeshlodhi Begin
function rwaRegistrationValidation()
{

	 if( document.getElementById('back') != null && document.getElementById('back')!="undefined" && document.getElementById('back').value !="Back")
	 {
	  return true;
	 }

	 if(document.rwaRegistrationForm.name.value.trim().length==0)
	 {
	  alert("Pls Enter RWA Name ");
	  document.rwaRegistrationForm.name.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.name.value !="" && !alphabet(document.rwaRegistrationForm.name))
	 {
	     document.rwaRegistrationForm.name.focus();
	     return false;
	 }
	 else if(document.rwaRegistrationForm.registrationNo.value.trim().length==0)
	 {
	  alert("Pls Enter Valid Registration No ");
	  document.rwaRegistrationForm.registrationNo.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.presidentName.value.trim().length==0)
	 {
	  alert("Pls Enter President Name ");
	  document.rwaRegistrationForm.presidentName.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.presidentName.value !="" && !alphabet(document.rwaRegistrationForm.presidentName))
	 {
	     document.rwaRegistrationForm.presidentName.focus();
	     return false;
	 }
	 else if(document.rwaRegistrationForm.secretaryName.value.trim().length==0)
	 {
	  alert("Pls Enter Secretary Name ");
	  document.rwaRegistrationForm.secretaryName.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.secretaryName.value !="" && !alphabet(document.rwaRegistrationForm.secretaryName))
	 {
	     document.rwaRegistrationForm.secretaryName.focus();
	     return false;

	 }
	 else if(document.rwaRegistrationForm.email.value !="" && !emailValidator(document.rwaRegistrationForm.email))
	 {
	     document.rwaRegistrationForm.email.focus();
	     return false;
	 }
	 else if(document.rwaRegistrationForm.officePhoneNo.value.trim().length==0 || document.rwaRegistrationForm.officePhoneNo.value =="0")
	 {
	  alert("Pls Enter Office Phone No");
	  document.rwaRegistrationForm.officePhoneNo.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.officePhoneNo.value !="" && !numeric(document.rwaRegistrationForm.officePhoneNo))
	 {
	     document.rwaRegistrationForm.officePhoneNo.focus();
	     return false;

	 }
	 else if(document.rwaRegistrationForm.officeAddress.value=="")
	 {
	  alert("Pls Enter Office Address");
	  document.rwaRegistrationForm.officeAddress.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.countryId.value=="0")
	 {
	  alert("Pls Select the Country ");
	  document.rwaRegistrationForm.countryId.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.countryId.value!="0" && document.rwaRegistrationForm.stateId.value=="")
	 {
	  alert("Pls Select the State ");
	  document.rwaRegistrationForm.stateId.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.stateId.value !="0" && document.rwaRegistrationForm.districtId.value=="")
	 {

	  alert("Pls Select the District ");
	  document.rwaRegistrationForm.districtId.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.districtId.value!="0" && document.rwaRegistrationForm.cityId.value=="")
	 {
	  alert("Pls Select the City ");
	  document.rwaRegistrationForm.cityId.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.cityId.value!="0" && document.rwaRegistrationForm.postOfficeId.value=="")
	 {
	  alert("Pls Select the Post Office ");
	  document.rwaRegistrationForm.cityId.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.cityId.value !="0" && (document.rwaRegistrationForm.pinCodeId.value.trim().length==0 ||document.rwaRegistrationForm.pinCodeId.value=="0"))
	 {
	  alert("Pls Enter Pin Code");
	  document.rwaRegistrationForm.pinCodeId.focus();
	  return false;
	 }
	 else if(document.rwaRegistrationForm.pinCodeId.value !="" && !numeric(document.rwaRegistrationForm.pinCodeId))
	 {
	     document.rwaRegistrationForm.pinCodeId.focus();
	     return false;

	 }
	 else if(document.rwaRegistrationForm.areaLayout1.value=="")
	 {
	  alert("Pls click on Browse to select Layout");
	  document.rwaRegistrationForm.areaLayout1.focus();
	  return false;
	 }
	 return true;
}
//Added by Meenakshi

 function changeMonth()
{
	if(document.getElementById('fromMonth').value==4)
	{
	locationWiseListOfEmpForESICForm.toMonth.value='9';
	document.getElementById('toMonth').value='9';
	document.getElementById('toMonth').disabled=true;
	}
	if(document.getElementById('fromMonth').value==10)
	{
	locationWiseListOfEmpForESICForm.toMonth.value='3';
	document.getElementById('toMonth').value='3';
	document.getElementById('toMonth').disabled=true;
	}
}

   function validateSelectESICChallan(){
	if(document.getElementById('locationId').selectedIndex==0){
		alert("Please select location");
		document.getElementById('locationId').focus();
		return false;
	}
	if(document.getElementById('fromMonth').selectedIndex==0){
		alert("Please select month");
		document.getElementById('fromMonth').focus();
		return false;
	}
	if(document.getElementById('fromYear').selectedIndex==0){
		alert("Please select starting year");
		document.getElementById('fromYear').focus();
		return false;
	}
	if(document.getElementById('ToYear').selectedIndex==0){
		alert("Please select ending year");
		document.getElementById('ToYear').focus();
		return false;
	}
	if((document.getElementById('ToYear').value)<(document.getElementById('fromYear').value)){
	   alert("'Duration To' should be greater than 'Duration From'");
	   document.getElementById('ToYear').selectedIndex=0;
	   return false;
	}
	if(document.getElementById('toMonth').disabled=true){
		document.getElementById('toMonth').disabled=false;
	}
	return true;
 }



function code(){
	if(document.getElementById('codeNo').value=="")
	{
	alert("Please enter code No.");
	document.getElementById('codeNo').focus();
	return false;
	}
	if(document.getElementById('branchOffice').value=="")
	{
	alert("Please enter name of Branch Office");
	document.getElementById('branchOffice').focus();
	return false;
	}
	return window.print();
}
// Ended by Meenakshi

//Anil added 0n 06/03/2010:Begin add validation For Tenant Registration
function validateTenant(){
	if(tenantsForm.tenantName.value == "" ){
		alert('Please Enter tenantName ');
		tenantsForm.tenantName.focus();
		return false;
	}
	else if(tenantsForm.permanantAddress.value == ""){
		alert('Please Enter permanant Address');
		tenantsForm.permanantAddress.focus();
		return false;
	}
	else if(tenantsForm.countryId.selectedIndex == 0){
		alert('Please Select Country');
		tenantsForm.countryId.focus();
		return false;
	}
	else  if(tenantsForm.stateId.selectedIndex == 0){
		alert('Please Select State');
		tenantsForm.stateId.focus();
		return false;
	}
	else if(tenantsForm.districtId.selectedIndex == 0){
		alert('Please Select District');
		tenantsForm.districtId.focus();
		return false;
	}
	else if(tenantsForm.cityId.selectedIndex == 0){
		alert('Please Select City');
		tenantsForm.cityId.focus();
		return false;
	}
	else if(tenantsForm.postOffice.selectedIndex == 0){
		alert('Please Select post office');
		tenantsForm.postOffice.focus();
		return false;
	}
	else if(document.getElementById('rentedFromInput').value == ""){
		alert('Please Select rented Date From');
		document.getElementById('rentedFromInput').focus();
		return false;
	}
	else if(document.getElementById('rentedToInput').value == ""){
		alert('Please Select rented To Date');
		document.getElementById('rentedToInput').focus();
		return false;
	}
	else if(tenantsForm.tenantType.selectedIndex == 0){
		alert('Please Select City');
		tenantsForm.tenantType.focus();
		return false;
	}
	else {
	     return true;
	   }

}
//Anil added 0n 06/03/2010:end


//Anil added 0n 08/03/2010:Begin RWAOWner Registration
function validateRWAOWner(){

	 if (rWAOwnerForm.hiddenFloor0.checked==true && rWAOwnerForm.hiddenFloor0.value==""){
	 	alert("ground floor is not present");
	 	return false;

	 }

	if (rWAOwnerForm.hiddenFloor1.checked==true && rWAOwnerForm.hiddenFloor1.value==""){
	 	alert("1 floor is not present");
	 	return false;

	 }
	 if (rWAOwnerForm.hiddenFloor2.checked==true && rWAOwnerForm.hiddenFloor2.value==""){

	 	alert("2 floor is not present");
	 	return false;
	 }
	 if (rWAOwnerForm.hiddenFloor3.checked==true && rWAOwnerForm.hiddenFloor3.value==""){

	 	alert("3 floor is not present");
	 	return false;
	 }

}
function validateRWAO(){
//Anil added on 10/03/2010:Begin
valid = true;
	if (rWAOwnerForm.ownerName.value == "") {
		alert("Please Enter the ownerName");
		rWAOwnerForm.ownerName.focus();
		return false;
	}
		if (alphabet(rWAOwnerForm.ownerName) == false) {
		return false;
	}

	if (rWAOwnerForm.permanentAddress.value == "") {
		alert("Please Enter Address");
		ownerDetailsForm.permanentAddress.focus();
		return false;
	}
	if ((rWAOwnerForm.permanentCountry.value != "") && (rWAOwnerForm.permanentCountry.selectedIndex == 0)) {
		alert("Please Select Country");
		rWAOwnerForm.permanentCountry.focus();
		return false;
	}

	if (rWAOwnerForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		rWAOwnerForm.permanentState.focus();
		return false;
	}

	if (rWAOwnerForm.permanentDistrictId.selectedIndex == 0) {
		alert("Please Select District");
		rWAOwnerForm.permanentDistrictId.focus();
		return false;
	}
	if (rWAOwnerForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		rWAOwnerForm.permanentCity.focus();
		return false;
	}
	if (rWAOwnerForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		rWAOwnerForm.permanentPostOffice.focus();
		return false;
	}
	if (rWAOwnerForm.permanentPin.selectedIndex == 0) {
		alert("Please Select PIN Code");
		rWAOwnerForm.permanentPin.focus();
		return false;
	}
	if (rWAOwnerForm.ownerPhone.value == "") {
		alert("Please Enter Your Phone No.");
		rWAOwnerForm.ownerPhone.focus();
		return false;
	}
	if (numeric(rWAOwnerForm.ownerPhone) == false) {
		return false;
	}
	/*if ( ownerDetailsForm.ownerPhone.value.length > 1) {
		alert("Please Enter a Valid  Phone No.");
		ownerDetailsForm.ownerPhone.value = "";
		ownerDetailsForm.ownerPhone.focus();
		return false;
	}*/

	if (rWAOwnerForm.ownerEmailId.value == "") {
		alert("Please Enter Your E Mail Id");
		rWAOwnerForm.ownerEmailId.focus();
		return false;
	}
	if (emailValidator(rWAOwnerForm.email) == false) {
		return false;
	}//Anil added on 10/03/2010:End
 if (document.getElementById("dateFrom").value!="")
	{
	 var oInput=document.getElementById("dateFrom");
		if (isValidDate(oInput.value))
		{
		}
		else
		{
			alert("Invalid DateFormat!Please Enter Date in dd/MM/yyyy Format");
            return false;
		}
		var dtDate=document.getElementById("dateFrom").value;
		tmp = dtDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		userdate = calcJulian(xDate);
		gregDate = new Date();
		year = gregDate.getFullYear();
		month = gregDate.getMonth() + 1;
		day = gregDate.getDate();
		tmp = day + "/" + month + "/" + year;
		tmp = tmp.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		currentdate = calcJulian(xDate);
		if (userdate  < currentdate) {
		alert(" From Date is not Less than Current Date \n");
			return false;
		}
	}
	else
	return true;
	if (document.getElementById("dateTo").value!="")
	{
	 var oInput=document.getElementById("dateTo");
		if (isValidDate(oInput.value))
		{
		}
		else
		{
			alert("Please Enter Date in dd/MM/yyyy Format ");
            return false;
		}
		var dtDate=document.getElementById("dateTo").value;
		tmp = dtDate.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		userdate = calcJulian(xDate);
		gregDate = new Date();
		year = gregDate.getFullYear();
		month = gregDate.getMonth() + 1;
		day = gregDate.getDate();
		tmp = day + "/" + month + "/" + year;
		tmp = tmp.split("/");
		xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
		currentdate = calcJulian(xDate);
		if (userdate  < currentdate) {
		alert(" date To is not Less than Current Date \n");
			return false;
		}
	}
	else
	return true;
}
function isValidDate(sText) {
        var reDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
        return reDate.test(sText);
    }

//Anil added 0n 08/03/2010:End


//Added By Suresh validation for CommercialComplex Registration on 09/03/2010
function ccRegistrationValidation()
{
   if(document.ccRegistrationForm.webSite.value!="")
	 {
        if(!isURL(document.ccRegistrationForm.webSite.value)){
         document.ccRegistrationForm.webSite.focus();
         return false;
        }
     }
   if(document.ccRegistrationForm.complexName.value=="")
	 {
	  alert("Pls Enter Complex Name ");
	  document.ccRegistrationForm.complexName.focus();
	  return false;
	 }else if(document.ccRegistrationForm.complexType.selectedIndex==0)
	 {
	    alert("Please Select Complex Type");
		ccRegistrationForm.complexType.focus();
		return false;
	 }
	 else if(document.ccRegistrationForm.ccAddress.value=="")
	 {
	  alert("Pls Enter Office Address");
	  document.ccRegistrationForm.ccAddress.focus();
	  return false;
	 }else if(document.getElementById('ccAddress').value.length >=254)
	 {
	  alert("Your Address Length Must Be Less Then 255 Charcater");
	  document.getElementById('ccAddress').focus();
	  return false;
	 }else if(document.ccRegistrationForm.countryId.value=="0")
	 {
	  alert("Pls Select the Country ");
	  document.ccRegistrationForm.countryId.focus();
	  return false;
	 }
	 else if(document.ccRegistrationForm.countryId.value!="0" && (document.ccRegistrationForm.stateId.value=="" || document.ccRegistrationForm.stateId.value=="0"))
	 {
	  alert("Pls Select the State ");
	  document.ccRegistrationForm.stateId.focus();
	  return false;
	 }
	 else if(document.ccRegistrationForm.stateId.value !="0" && (document.ccRegistrationForm.districtId.value==""||document.ccRegistrationForm.districtId.value=="0"))
	 {

	  alert("Pls Select the District ");
	  document.ccRegistrationForm.districtId.focus();
	  return false;
	 }
	 else if(document.ccRegistrationForm.districtId.value!="0" && (document.ccRegistrationForm.cityId.value==""||document.ccRegistrationForm.cityId.value=="0"))
	 {
	  alert("Pls Select the City ");
	  document.ccRegistrationForm.cityId.focus();
	  return false;
	 }
	 else if(document.ccRegistrationForm.cityId.value!="0" && (document.ccRegistrationForm.postOfficeId.value==""||document.ccRegistrationForm.postOfficeId.value=="0"))
	 {
	  alert("Pls Select the Post Office ");
	  document.ccRegistrationForm.postOfficeId.focus();
	  return false;
	 }
	 else if(document.ccRegistrationForm.cityId.value !="0" && (document.ccRegistrationForm.pinCodeId.value=="" ||document.ccRegistrationForm.pinCodeId.value=="0"))
	 {
	  alert("Pls Enter Pin Code");
	  document.ccRegistrationForm.pinCodeId.focus();
	  return false;
	 }else if(document.ccRegistrationForm.registrationNo.value=="")
	 {
	  alert("Pls Enter Valid Registration No ");
	  document.ccRegistrationForm.registrationNo.focus();
	  return false;
	 }
	 else if(document.ccRegistrationForm.pinCodeId.value !="" && !numeric(document.ccRegistrationForm.pinCodeId))
	 {
	     document.ccRegistrationForm.pinCodeId.focus();
	     return false;
	 }else if (document.ccRegistrationForm.registrationDate.value == "") {
		alert("Please Enter Registration Date");
		document.ccRegistrationForm.registrationDate.focus();
		return false;
	}else if(document.ccRegistrationForm.email.value !="" && !emailValidator(document.ccRegistrationForm.email))
	 {
	     document.ccRegistrationForm.email.focus();
	     return false;
	 }else if (document.ccRegistrationForm.phoneNo.value == "") {
		alert("Please Enter Phone No");
		document.ccRegistrationForm.phoneNo.focus();
		return false;
	}else if(document.ccRegistrationForm.phoneNo.value !="" && !numeric(document.ccRegistrationForm.phoneNo))
	 {
	  document.ccRegistrationForm.phoneNo.focus();
	  return false;
	 }else if (document.ccRegistrationForm.landMark.value == "") {
		alert("Please Enter Land Mark ");
		document.ccRegistrationForm.landMark.focus();
		return false;
	}else if (document.ccRegistrationForm.layoutImage.value!="") {
	     var fileTypes=["bmp","gif","png","jpg","jpeg"];
	     var source=document.ccRegistrationForm.layoutImage.value;
  		 var ext=source.substring(source.lastIndexOf(".")+1,source.length).toLowerCase();
        for (var i=0; i<=fileTypes.length; i++) if (fileTypes[i]==ext) break;
	       if (i<fileTypes.length) {}
  			else {
       			alert("THAT IS NOT A VALID IMAGE\nPlease load an image with an extention of one of the following:\n\n"+fileTypes.join(", "));
  	  			 document.ccRegistrationForm.layoutImage.focus();
	 			 return false;
	 			}

	}
	else{
	return true;
  }
}
//validation end For Commercial Complex Registration

//validation for Url Checking added By suresh on 11/03/2010

function isURL(urlStr) {
 var theurl=urlStr;
     var tomatch= /[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/

     if (tomatch.test(theurl)){
           return true;
     }
     else
     {
         window.alert("WebSite URL Is Invalid. Please Enter Correct Url.");
         return false;
     }

//if (urlStr.indexOf(" ") != -1) {
//alert("Spaces are not allowed in a URL");
//return false;
//}
//
//if (urlStr == "" || urlStr == null) {
//return true;
//}
//
//urlStr=urlStr.toLowerCase();
//
//var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
//var validChars="\[^\\s" + specialChars + "\]";
//var atom=validChars + '+';
//alert("in url");
//var urlPat=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_%&\?\/.=]+$/;
//^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
//var matchArray=urlStr.match(urlPat);
//alert("url correct");
//if (matchArray==null) {
//alert("The URL seems incorrect ");
//return false;
//}
//alert("url check1");
//var user=matchArray[2];
//var domain=matchArray[3];
//
//for (i=0; i<user.length; i++) {
//if (user.charCodeAt(i)>127) {
//alert("This domain contains invalid characters.");
//return false;
//}
//alert("url 123");
//}
//alert("url check");
//for (i=0; i<domain.length; i++) {
//if (domain.charCodeAt(i) > 127) {
//alert("This domain name contains invalid characters.");
//return false;
//}
//}
//
//var atomPat=new RegExp("^" + atom + "$");
//var domArr=domain.split(".");
//var len=domArr.length;
//
//for (i=0;i<len;i++) {
//if (domArr[i].search(atomPat) == -1) {
//alert("The domain name does not seem to be valid.");
//return false;
//}
//}
//
//return true;
}

//Ended by suresh

function ccShopOccupantValidation()
{
if(document.ccShopOccupantForm.shopName.value=="")
	 {
	  alert("Pls Enter Shop Name ");
	  document.ccShopOccupantForm.shopName.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.businessType.selectedIndex==0)
	 {
	    alert("Please Select Business Type");
		document.ccShopOccupantForm.businessType.focus();
		return false;
	 }else if(document.ccShopOccupantForm.businessDescription.value=="")
	 {
	  alert("Pls Enter Business Description");
	  document.ccShopOccupantForm.businessDescription.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.occuipedFromDate.value=="")
	 {
	  alert("Pls Enter Occupied From Date");
	  document.ccShopOccupantForm.occuipedFromDate.focus();
	  return false;
	  }
//	 }else if(document.ccShopOccupantForm.shopRented.value==0)
//	 {
//	    alert("Please Select Shop Rented ");
//		ccShopOccupantForm.shopRented.focus();
//		return false;
//	 }
     else if(document.ccShopOccupantForm.title.selectedIndex==0)
	 {
	  alert("Please Select  Title  ");
	  document.ccShopOccupantForm.title.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.firstName.value=="")
	 {
	  alert("Pls Enter First Name");
	  document.ccShopOccupantForm.firstName.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.lastName.value=="")
	 {
	  alert("Pls Enter Last Name");
	  document.ccShopOccupantForm.lastName.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.permanentAddress.value=="")
	 {
	  alert("Pls Enter Permanent Address");
	  document.ccShopOccupantForm.permanentAddress.focus();
	  return false;
	 }else if(document.getElementById('permanentAddress').value.length>=254)
	 {
	   alert("Your Permanent Address Length Must Be Less Then 255 Charcater");
	 document.getElementById('permanentAddress').focus();
	  return false;
	 }
	  else if(document.ccShopOccupantForm.permanentCountryId.value=="0")
	 {
	  alert("Pls Select the Permanent Address Country ");
	  document.ccShopOccupantForm.permanentCountryId.focus();
	  return false;
	 } else if(document.ccShopOccupantForm.permanentCountryId.value!="0" && (document.ccShopOccupantForm.permanentAddressStateId.value=="" || document.ccShopOccupantForm.permanentAddressStateId.value=="0"))
	 {
	  alert("Pls Select the Permanent Address State ");
	  document.ccShopOccupantForm.permanentAddressStateId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.permanentAddressStateId.value !="0" && (document.ccShopOccupantForm.permanentAddressDistrictId.value==""||document.ccShopOccupantForm.permanentAddressDistrictId.value=="0"))
	 {

	  alert("Pls Select the Permanent Address District ");
	  document.ccShopOccupantForm.permanentAddressDistrictId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.permanentAddressDistrictId.value!="0" && (document.ccShopOccupantForm.permanentAddressCityId.value==""||document.ccShopOccupantForm.permanentAddressCityId.value=="0"))
	 {
	  alert("Pls Select the Permanent Address City ");
	  document.ccShopOccupantForm.permanentAddressCityId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.permanentAddressCityId.value!="0" && (document.ccShopOccupantForm.permanentPostOfficeId.value==""||document.ccShopOccupantForm.permanentPostOfficeId.value=="0"))
	 {
	  alert("Pls Select the Permanent Address Post Office ");
	  document.ccShopOccupantForm.permanentPostOfficeId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.permanentAddressCityId.value !="0" && (document.ccShopOccupantForm.permanentAddressPinCode.value=="" ||document.ccShopOccupantForm.permanentAddressPinCode.value=="0"))
	 {
	  alert("Pls Enter Permanent Address Pin Code");
	  document.ccShopOccupantForm.permanentAddressPinCode.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.permanentAddressPinCode.value !="" && !numeric(document.ccShopOccupantForm.permanentAddressPinCode))
	 {
	     document.ccShopOccupantForm.permanentAddressPinCode.focus();
	     return false;
	 }else if (document.ccShopOccupantForm.permanentAddressPhoneNo1.value == "") {
		alert("Please Enter Permanent Address Phone No1!");
		document.ccShopOccupantForm.permanentAddressPhoneNo1.focus();
		return false;
	}else if(document.ccShopOccupantForm.permanentAddressPhoneNo1.value !="" && !numeric(document.ccShopOccupantForm.permanentAddressPhoneNo1))
	 {
	  document.ccShopOccupantForm.permanentAddressPhoneNo1.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.permanentAddressPhoneNo2.value !="" && !numeric(document.ccShopOccupantForm.permanentAddressPhoneNo2))
	 {
	  document.ccShopOccupantForm.permanentAddressPhoneNo2.focus();
	  return false;
	 }else if(document.ccShopOccupantForm.presentAddress.value=="")
	 {
	  alert("Pls Enter Present Address");
	  document.ccShopOccupantForm.presentAddress.focus();
	  return false;
	 }else if(document.getElementById('presentAddress').value.length>=254)
	 {
	   alert("Your Present Address Length Must Be Less Then 255 Charcater");
	 document.getElementById('presentAddress').focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.presentCountryId.value=="0")
	 {
	  alert("Pls Select the Present Address Country ");
	  document.ccShopOccupantForm.presentCountryId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.presentCountryId.value!="0" && (document.ccShopOccupantForm.presentAddressStateId.value=="" || document.ccShopOccupantForm.presentAddressStateId.value=="0"))
	 {
	  alert("Pls Select the Present Address State ");
	  document.ccShopOccupantForm.presentAddressStateId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.presentAddressStateId.value !="0" && (document.ccShopOccupantForm.presentAddressDistrictId.value==""||document.ccShopOccupantForm.presentAddressDistrictId.value=="0"))
	 {

	  alert("Pls Select the Present Address District ");
	  document.ccShopOccupantForm.presentAddressDistrictId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.presentAddressDistrictId.value!="0" && (document.ccShopOccupantForm.presentAddressCityId.value==""||document.ccShopOccupantForm.presentAddressCityId.value=="0"))
	 {
	  alert("Pls Select the Present Address City ");
	  document.ccShopOccupantForm.presentAddressCityId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.presentAddressCityId.value!="0" && (document.ccShopOccupantForm.presentPostOfficeId.value==""||document.ccShopOccupantForm.presentPostOfficeId.value=="0"))
	 {
	  alert("Pls Select the Present Address Post Office ");
	  document.ccShopOccupantForm.presentPostOfficeId.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.permanentAddressCityId.value !="0" && (document.ccShopOccupantForm.presentAddressPinCode.value=="" ||document.ccShopOccupantForm.presentAddressPinCode.value=="0"))
	 {
	  alert("Pls Enter Present Address Pin Code");
	  document.ccShopOccupantForm.presentAddressPinCode.focus();
	  return false;
	 }
	 else if(document.ccShopOccupantForm.presentAddressPinCode.value !="" && !numeric(document.ccShopOccupantForm.presentAddressPinCode))
	 {
	     document.ccShopOccupantForm.presentAddressPinCode.focus();
	     return false;
	 }else if(document.ccShopOccupantForm.presentAddressPhoneNo.value !="" && !numeric(document.ccShopOccupantForm.presentAddressPhoneNo))
	 {
	  document.ccShopOccupantForm.presentAddressPhoneNo.focus();
	  return false;
	 }else if (document.ccShopOccupantForm.presentAddressMobileNo.value == "") {
		alert("Please Enter Mobile No ");
		document.ccShopOccupantForm.presentAddressMobileNo.focus();
		return false;
	}
	 else if (ccShopOccupantForm.presentAddressMobileNo.value.length < 10 && ccShopOccupantForm.presentAddressMobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Mobile No.");
		ccShopOccupantForm.presentAddressMobileNo.value = "";
		ccShopOccupantForm.presentAddressMobileNo.focus();
		return false;
	}else if(document.ccShopOccupantForm.emailId.value !="" && !emailValidator(document.ccShopOccupantForm.emailId))
	 {
	     document.ccShopOccupantForm.emailId.focus();
	     return false;
	 }else if(document.ccShopOccupantForm.occuipedToDate.value!=""){
		var fromDate = document.ccShopOccupantForm.occuipedFromDate.value;
		var toDate = document.ccShopOccupantForm.occuipedToDate.value;
	    var day = days_Between_Two_Date(fromDate, toDate);
		if (day == "fail") {
		alert("Occupied From Date Shold Be Less Then Occupied To Date");
    	return false;
     	}else{
     	return true;
     	}
	  }
	 else{
	 return true;
	 }
}

//Anil added on 16/03/2010:Begin
function validateAddPolicestation(){
	if(document.getElementById('psCode').value.trim() ==''){
		alert('Please enter police Code.');
		return false;
	}

	if(alphanumeric(document.getElementById('psCode'))){
		alert('Please enter  correct police  Code.');
		return false;
	}
	else if(document.getElementById('psDescription').value.trim() == ''){
		alert('Please Enter  police station  Description.');
		return false;
	}
	else if(document.getElementById('psType').value == 'N'){
		alert('Please select police station type.');
		return false;
	}
	else 	if(document.getElementById('psLocation').value.trim() == ''){
		alert('Please select location of police station.');
		return false;

	}else if(document.getElementById('countryId').value ==0){
		alert('Please select country of police station. ');
		return false;
	}
	else	if(document.getElementById('stateId').value ==0){
		alert('Please select state of police station. ');
		return false;
	}
	else if(document.getElementById('districtId').value ==0){

		alert('Please select district of police station. ');
		return false;
	}
	else	if(document.getElementById('cityId').value ==0){
		alert('Please select city of police station. ');
		return false;
	}
	else 	if(document.getElementById('postOffice').value ==0){
		alert('Please select post office of police station. ');
		return false;
	}
	else 	if(emailValidator(document.getElementById('psEmail'))){
		alert('Please enter email address for police station.');
		return false;
	}
	else if(numeric(document.getElementById('psPhone'))){
	alert('Please Enter Mobile number for police station .');
		return false;

	}else if(document.getElementById('contactPerson').value.trim() == ''){
		alert('Please Enter contact Person Name .');
		return false;
	}
	else if(document.getElementById('contactPersonNo').value.trim() == ''){

		alert('Please Enter contact Person Mobile number .');
		return false;
	}
	else{
	return true;
	}
}
function validateUpdatePolicestation(){
if(alphanumeric(document.getElementById('psCode'))){
if(document.getElementById('psDescription').value.trim() != ''){
if(document.getElementById('psType').value != 'N'){
if(document.getElementById('psLocation').value.trim() != ''){
if(document.getElementById('countryId').value !=0){
if(document.getElementById('stateId').value !=0){
if(document.getElementById('districtId').value !=0){
if(document.getElementById('cityId').value !=0){
if(document.getElementById('postOffice').value !=0){
if(emailValidator(document.getElementById('psEmail'))){
if(numeric(document.getElementById('psPhone'))){
if(document.getElementById('psEmail').value.trim() != ''){
if(document.getElementById('psPhone').value.trim() != ''){
return true;
}else{
alert('Please add phone number for police station.');
return false;
}
}else{
alert('Please enter email address for police station.');
return false;
}
}else{
return false;
}
}else{
return false;
}
}else{
alert('Please select post office of police station. ');
return false;
}
}else{
alert('Please select city of police station. ');
return false;
}
}else{
alert('Please select district of police station. ');
return false;
}
}else{
alert('Please select state of police station. ');
return false;
}
}else{
alert('Please select country of police station. ');
return false;
}
}else{
alert('Please select location of police station.');
return false;
}
}else{
alert('Please select police station type.');
return false;
}
}else{
alert('Please enter police station description.');
return false;
}
}else{
return false;
}
}

 //Anil added on 16/03/2010:End


// Begin in meenakshi
 function validateESICForm2(){

	if(esicForm2Form.place.value==""){
	alert("Please enter place");
	esicForm2Form.place.focus();
	return false;
	}
	if(esicForm2Form.date.value==""){
	alert("Please enter date");
	esicForm2Form.date.focus();
	return false;
	}
	if(document.getElementById("whetherResidingWithIP[0]").selectedIndex==2){
	if(document.getElementById("memberAddress[0]").value==""){
	alert("Please enter address")
	document.getElementById("memberAddress[0]").focus();
	return false;
	}
	}
	if(document.getElementById("whetherResidingWithIP[1]").selectedIndex==2){
	if(document.getElementById("memberAddress[1]").value==""){
	alert("Please enter address")
	document.getElementById("memberAddress[1]").focus();
	return false;
	}
	}
	if(document.getElementById("whetherResidingWithIP[2]").selectedIndex==2){
	if(document.getElementById("memberAddress[2]").value==""){
	alert("Please enter address")
	document.getElementById("memberAddress[2]").focus();
	return false;
	}
	}
	if(document.getElementById("whetherResidingWithIP[3]").selectedIndex==2){
	if(document.getElementById("memberAddress[3]").value==""){
	alert("Please enter address")
	document.getElementById("memberAddress[3]").focus();
	return false;
	}
	}
	if(document.getElementById("whetherResidingWithIP[4]").selectedIndex==2){
	if(document.getElementById("memberAddress[4]").value==""){
	alert("Please enter address")
	document.getElementById("memberAddress[4]").focus();
	return false;
	}
	}
	if(document.getElementById("whetherResidingWithIP[5]").selectedIndex==2){
	if(document.getElementById("memberAddress[5]").value==""){
	alert("Please enter address")
	document.getElementById("memberAddress[5]").focus();
	return false;
	}
	}
	if(document.getElementById("memberName[0]").value==""){
	alert("Please enter atleast one nominee");
	document.getElementById("memberName[0]").focus();
	return false;
	}
	if(document.getElementById("memberDOB0").value==""){
	alert("Please enter the birth date of nominee");
	document.getElementById("memberDOB0").focus();
	return false;
	}

	if(document.getElementById("reason[0]").value==""){
	alert("Please enter the reason");
	document.getElementById("reason[0]").focus();
	return false;
	}
	if(document.getElementById("relation[0]").value==""){
	alert("Please enter the relation");
	document.getElementById("relation[0]").focus();
	return false;
	}
	if(document.getElementById("whetherResidingWithIP[0]").selectedIndex==0){
	alert("Please select a value for 'whetherResidingWithIP'");
	document.getElementById("whetherResidingWithIP[0]").focus();
	return false;
	}
	if(document.getElementById("whetherResidingWithIP[0]").value==""){
	alert("Please select a value for 'whetherResidingWithIP'");
	document.getElementById("whetherResidingWithIP[0]").focus();
	return false;
	}
	if(document.getElementById("impDisp[0]").value==""){
	alert("Please enter nam eof the IMP/Disp");
	document.getElementById("impDisp[0]").focus();
	return false;
	}

	if(esicForm2Form.signTIOfEmployee.value==""){
	alert("Please enter signature");
	esicForm2Form.signTIOfEmployee.focus();
	return false;
	}
	}

	function disableESICForm2(){
	if(document.getElementById('whetherResidingWithIP[0]').selectedIndex==1){
	document.getElementById('memberAddress[0]').value="";
	document.getElementById('memberAddress[0]').readOnly=true;
	}
	else{
	document.getElementById('memberAddress[0]').readOnly=false;
	}
	if(document.getElementById('whetherResidingWithIP[1]').selectedIndex==1){
	document.getElementById('memberAddress[1]').value="";
	document.getElementById('memberAddress[1]').readOnly=true;
	}
	else{
	document.getElementById('memberAddress[1]').readOnly=false;
	}
	if(document.getElementById('whetherResidingWithIP[2]').selectedIndex==1){
	document.getElementById('memberAddress[2]').value="";
	document.getElementById('memberAddress[2]').readOnly=true;
	}
	else{
	document.getElementById('memberAddress[2]').readOnly=false;
	}
	if(document.getElementById('whetherResidingWithIP[3]').selectedIndex==1){
	document.getElementById('memberAddress[3]').value="";
	document.getElementById('memberAddress[3]').readOnly=true;
	}
	else{
	document.getElementById('memberAddress[3]').readOnly=false;
	}
	if(document.getElementById('whetherResidingWithIP[4]').selectedIndex==1){
	document.getElementById('memberAddress[4]').value="";
	document.getElementById('memberAddress[4]').readOnly=true;
	}
	else{
	document.getElementById('memberAddress[4]').readOnly=false;
	}
	if(document.getElementById('whetherResidingWithIP[5]').selectedIndex==1){
	document.getElementById('memberAddress[5]').value="";
	document.getElementById('memberAddress[5]').readOnly=true;
	}
	else{
	document.getElementById('memberAddress[5]').readOnly=false;
	}
	}

//Ended by Meenakshi


//Added by suresh for Principal Employer Location Address Form
function principalEmployerLocationAddressValidation()
{
  if(trim(document.getElementById('location0').value) == ''){
  		alert("Please Enter location");
  		document.getElementById('location0').focus();
  		return false;
  	}
  	else if(document.getElementById('branchId').selectedIndex == 0)
	 {
	  alert("Please Select the branch  ");
	  document.getElementById('branchId').focus();
	  return false;
	 }
   	else if(document.getElementById('address').value == 0){
  		alert("Please Enter Address ");
  		document.getElementById('address').focus();
  		return false;
  	}else if(document.getElementById('address').value.length>=254){
  		alert("Your Address must Be Less Then 255 Character");
  		document.getElementById('address').focus();
  		return false;

  	}else if(document.getElementById('presCountryId').value=="0")
	 {
	  alert("Please Select the Country ");
	  document.getElementById('presCountryId').focus();
	  return false;
	 }
  	else if(document.getElementById('stateId').selectedIndex == 0){
  		alert("Please Select State");
  		document.getElementById('stateId').focus();
  		return false;
  	}else if(document.getElementById('stateId').value !="0" && (document.getElementById('presDistrictId').value==""||document.getElementById('presDistrictId').value=="0"))
	 {
	  alert("Please Select  District ");
	  document.getElementById('presDistrictId').focus();
	  return false;
	 }
  	else if(document.getElementById('cityAndZoneId').selectedIndex == 0){
  		alert("Please Select City");
  		document.getElementById('cityAndZoneId').focus();
  		return false;
  	}


//	 else if( document.getElementById('presCountryId').value!="0" && (document.getElementById('presStateId').value=="" || document.getElementById('presStateId').value=="0"))
//	 {
//	  alert("Pls Select the Present Address State ");
//	  document.getElementById('presStateId').focus();
//	  return false;
//	 }

//	 else if(document.getElementById('presDistrictId').value!="0" && (document.getElementById('presCityId').value==""||document.getElementById('presCityId').value=="0"))
//	 {
//	  alert("Pls Select the Present Address City ");
//	  document.getElementById('presCityId').focus();
//	  return false;
//	 }
	 else if(document.getElementById('cityAndZoneId').value!="0" && (document.getElementById('presPostOffice').value==""||document.getElementById('presPostOffice').value=="0"))
	 {
	  alert("Pls Select  Post Office ");
	  document.getElementById('presPostOffice').focus();
	  return false;
	 }
	 else if(document.getElementById('cityAndZoneId').value !="0" && (document.getElementById('presPinCode').value=="" ||document.getElementById('presPinCode').value=="0"))
	 {
	  alert("Pls Enter  Pin Code");
	  document.getElementById('presPinCode').focus();
	  return false;
	 }
	 else if(document.getElementById('presPinCode').value !="" && !numeric(document.getElementById('presPinCode')))
	 {
	     document.getElementById('presPinCode').focus();
	     return false;
	 }else if(document.getElementById('phoneNo').value ==0)
	 {
	  alert("Please Enter Phone No.");
	  document.getElementById('phoneNo').focus();
	  return false;
	}
	 else if(document.getElementById('phoneNo').value !="" && !numeric(document.getElementById('phoneNo')))
	 {
	  document.getElementById('phoneNo').focus();
	  return false;
	}else if(document.getElementById('emailId').value !="" && !emailValidator(document.getElementById('emailId')))
	 {
	     document.getElementById('emailId').focus();
	     return false;
	 }
	else{
	return true;
	}
 }
 function principalEmployerLocationUpdateValidation(){
     if(trim(document.getElementById('location').value) == 0){
  		alert("Please Enter location");
  		document.getElementById('location').focus();
  		return false;
  	}else if(document.getElementById('address').value == 0){
  		alert("Please Enter Address ");
  		document.getElementById('address').focus();
  		return false;
  	}else if(document.getElementById('address').value.length>=254){
  		alert("Your Address must Be Less Then 255 Character");
  		document.getElementById('address').focus();
  		return false;

  	}else if(document.getElementById('phoneNo').value ==0)
	 {
	  alert("Please Enter Phone No.");
	  document.getElementById('phoneNo').focus();
	  return false;
	}
	 else if(document.getElementById('phoneNo').value !="" && !numeric(document.getElementById('phoneNo')))
	 {
	  document.getElementById('phoneNo').focus();
	  return false;
	}else if(document.getElementById('emailId').value !="" && !emailValidator(document.getElementById('emailId')))
	 {
	     document.getElementById('emailId').focus();
	     return false;
	 }
	else{
	return true;
	}
 }

function days_Between_Two_Date(FirstDate,SecounDate) {
   //Total time for one day
	var one_day = 1000 * 60 * 60 * 24;
	var x = FirstDate.split("/");
	var y = SecounDate.split("/");
  //date format(Fullyear,month,date)
	var date1 = new Date(x[2], (x[1] - 1), x[0]);
	var date2 = new Date(y[2], (y[1] - 1), y[0]);
	var month1 = x[1] - 1;
	var month2 = y[1] - 1;
        //Calculate difference between the two dates, and convert to days

	if (date2.getTime() < date1.getTime()) {
		return 'fail';
	}
	return Math.ceil((date1.getTime() - date2.getTime()) / (one_day));

//_Diff gives the diffrence between the two dates.
}

function hotelGuestInformationValidation(){
  if(document.getElementById('hotelRoomId').value=="")
	 {
	  alert("Please Assign Room No. ");
	  return false;
	 }else if(document.hotelGuestInformationForm.title.selectedIndex==0)
	 {
	  alert("Please Select  Title  ");
	  document.hotelGuestInformationForm.title.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.firstName.value=="")
	 {
	  alert("Pls Enter First Name");
	  document.hotelGuestInformationForm.firstName.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.lastName.value=="")
	 {
	  alert("Pls Enter Last Name");
	  document.hotelGuestInformationForm.lastName.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.gender.selectedIndex==0)
	 {
	  alert("Please Select  Gender  ");
	  document.hotelGuestInformationForm.gender.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.idProof.selectedIndex==0)
	 {
	  alert("Please Select ID Propf  ");
	  document.hotelGuestInformationForm.idProof.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.idProof.selectedIndex!=0 && document.hotelGuestInformationForm.idProof.value=='Other' && document.hotelGuestInformationForm.otherProof.value =="" )
	 {
	  	alert("Please Enter Other Propf  ");
	   document.hotelGuestInformationForm.otherProof.focus();
	   return false;
	 }
	 else if(document.hotelGuestInformationForm.idNumber.value=="")
	 {
	  alert("Please Enter ID Number ");
	  document.hotelGuestInformationForm.idNumber.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.checkDateTime.value=="")
	 {
	  alert("Pls Enter Check In Date");
	  document.hotelGuestInformationForm.checkDateTime.focus();
	  return false;
	  }
//	  else if(document.hotelGuestInformationForm.checkOutDateTime.value=="")
//	 {
//	  alert("Pls Enter Check Out Date");
//	  document.hotelGuestInformationForm.checkOutDateTime.focus();
//	  return false;
//	  }
	 else if(document.hotelGuestInformationForm.comingFrom.value=="")
	 {
	  alert("Pls Enter Coming From");
	  document.hotelGuestInformationForm.comingFrom.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.travelModeUsed.selectedIndex==0)
	 {
	  alert("Please Select Travel Mode Used  ");
	  document.hotelGuestInformationForm.travelModeUsed.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.permanentAddress.value=="")
	 {
	  alert("Pls Enter Permanent Address");
	  document.hotelGuestInformationForm.permanentAddress.focus();
	  return false;
	 }else if(document.getElementById('permanentAddress').value.length>=254)
	 {
	   alert("Your Permanent Address Length Must Be Less Then 255 Charcater");
	 document.getElementById('permanentAddress').focus();
	  return false;
	 }
	  else if(document.hotelGuestInformationForm.permanentCountryId.value=="0")
	 {
	  alert("Pls Select the Permanent Address Country ");
	  document.hotelGuestInformationForm.permanentCountryId.focus();
	  return false;
	 } else if(document.hotelGuestInformationForm.permanentCountryId.value!="0" && (document.hotelGuestInformationForm.permanentAddressStateId.value=="" || document.hotelGuestInformationForm.permanentAddressStateId.value=="0"))
	 {
	  alert("Pls Select the Permanent Address State ");
	  document.hotelGuestInformationForm.permanentAddressStateId.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.permanentAddressStateId.value !="0" && (document.hotelGuestInformationForm.permanentAddressDistrictId.value==""||document.hotelGuestInformationForm.permanentAddressDistrictId.value=="0"))
	 {

	  alert("Pls Select the Permanent Address District ");
	  document.hotelGuestInformationForm.permanentAddressDistrictId.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.permanentAddressDistrictId.value!="0" && (document.hotelGuestInformationForm.permanentAddressCityId.value==""||document.hotelGuestInformationForm.permanentAddressCityId.value=="0"))
	 {
	  alert("Pls Select the Permanent Address City ");
	  document.hotelGuestInformationForm.permanentAddressCityId.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.permanentAddressCityId.value!="0" && (document.hotelGuestInformationForm.permanentPostOfficeId.value==""||document.hotelGuestInformationForm.permanentPostOfficeId.value=="0"))
	 {
	  alert("Pls Select the Permanent Address Post Office ");
	  document.hotelGuestInformationForm.permanentPostOfficeId.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.permanentAddressCityId.value !="0" && (document.hotelGuestInformationForm.permanentAddressPinCode.value=="" ||document.hotelGuestInformationForm.permanentAddressPinCode.value=="0"))
	 {
	  alert("Pls Enter Permanent Address Pin Code");
	  document.hotelGuestInformationForm.permanentAddressPinCode.focus();
	  return false;
	 }
	 else if(document.hotelGuestInformationForm.permanentAddressPinCode.value !="" && !numeric(document.hotelGuestInformationForm.permanentAddressPinCode))
	 {
	     document.hotelGuestInformationForm.permanentAddressPinCode.focus();
	     return false;
	 }else if (document.hotelGuestInformationForm.permanentAddressPhoneNo1.value == "") {
		alert("Please Enter Permanent Address Phone No1!");
		document.hotelGuestInformationForm.permanentAddressPhoneNo1.focus();
		return false;
	}else if(document.hotelGuestInformationForm.permanentAddressPhoneNo1.value !="" && !numeric(document.hotelGuestInformationForm.permanentAddressPhoneNo1))
	 {
	  document.hotelGuestInformationForm.permanentAddressPhoneNo1.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.permanentAddressPhoneNo2.value !="" && !numeric(document.hotelGuestInformationForm.permanentAddressPhoneNo2))
	 {
	  document.hotelGuestInformationForm.permanentAddressPhoneNo2.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.presentAddressPhoneNo.value !="" && !numeric(document.hotelGuestInformationForm.presentAddressPhoneNo))
	 {
	  document.hotelGuestInformationForm.presentAddressPhoneNo.focus();
	  return false;
	 }else if(document.hotelGuestInformationForm.presentAddressMobileNo.value !="" && !numeric(document.hotelGuestInformationForm.presentAddressMobileNo))
	 {
	  document.hotelGuestInformationForm.presentAddressMobileNo.focus();
	  return false;
	 }else if (hotelGuestInformationForm.presentAddressMobileNo.value.length < 10 && hotelGuestInformationForm.presentAddressMobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Mobile No.");
		hotelGuestInformationForm.presentAddressMobileNo.value = "";
		hotelGuestInformationForm.presentAddressMobileNo.focus();
		return false;
	}else if(document.hotelGuestInformationForm.emailId.value !="" && !emailValidator(document.hotelGuestInformationForm.emailId))
	 {
	     document.hotelGuestInformationForm.emailId.focus();
	     return false;
	 }else if(document.hotelGuestInformationForm.checkOutDateTime.value!=""){
		var fromDate = document.hotelGuestInformationForm.checkDateTime.value;
		var toDate = document.hotelGuestInformationForm.checkOutDateTime.value;
	    var day = days_Between_Two_Date(fromDate, toDate);
		if (day == "fail") {
		alert("Check Out Date Shold Be Greater Then Check In Date");
    	return false;
     	}else{
     	return true;
     	}
	  }
	 else{
	 return true;
	 }
}




	function validateSPBranchInfo(){

	if(branchListForm.branchName.value=="")
	{
	alert("Please enter branch name");
	branchListForm.branchName.focus();
	return false;
	}

	if(branchListForm.industryId.selectedIndex==0)
	{
	alert("Please select industry type");
	branchListForm.industryId.focus();
	return false;
	}

	if(branchListForm.address.value=="")
	{
	alert("Please enter address");
	branchListForm.address.focus();
	return false;
	}

	if(branchListForm.country.selectedIndex==0)
	{
	alert("Please select country");
	branchListForm.country.focus();
	return false;
	}

	if(branchListForm.stateId.selectedIndex==0)
	{
	alert("Please select state");
	branchListForm.stateId.focus();
	return false;
	}

	if(branchListForm.district.selectedIndex==0)
	{
	alert("Please select district");
	branchListForm.district.focus();
	return false;
	}

	if(branchListForm.cityId.selectedIndex==0)
	{
	alert("Please select city");
	branchListForm.cityId.focus();
	return false;
	}

	if(branchListForm.postOffice.selectedIndex==0)
	{
	alert("Please select post office");
	branchListForm.postOffice.focus();
	return false;
	}

	if(branchListForm.phoneNo.value=="")
	{
	alert("Please enter phone no.");
	branchListForm.industryId.focus();
	return false;
	}
	if(numeric(branchListForm.phoneNo) == false) {
		return false;
	}
	if(numeric(branchListForm.phoneNo1) == false) {
		return false;
	}

	if(branchListForm.email.value=="")
	{
	alert("Please enter email");
	branchListForm.email.focus();
	return false;
	}

	if (emailValidator(branchListForm.email) == false) {
		return false;
	}
	if (emailValidator(branchListForm.email1) == false) {
		return false;
	}

	if(branchListForm.contactPersonName.value=="")
	{
	alert("Please enter contact persons' name");
	branchListForm.contactPersonName.focus();
	return false;
	}
	if(alphabet(branchListForm.contactPersonName) == false) {
		return false;
	}
	if(branchListForm.contactPersonMobileNo.value=="")
	{
	alert("Please contact persons' mobile no.");
	branchListForm.contactPersonMobileNo.focus();
	return false;
	}
	if(numeric(branchListForm.contactPersonMobileNo) == false) {
		return false;
	}
	if(branchListForm.contactPersonEmail.value=="")
	{
	alert("Please enter contact persons' email-Id");
	branchListForm.contactPersonEmail.focus();
	return false;
	}
	if (emailValidator(branchListForm.contactPersonEmail) == false) {
		return false;
	}
	return true;
	}

	//Added by Meenakshi
	function changeCase(frmObj) {
	var index;
	var tmpStr;
	var tmpChar;
	var preString;
	var postString;
	var strlen;
	tmpStr = frmObj.value.toLowerCase();
	strLen = tmpStr.length;
	if (strLen > 0)  {
	for (index = 0; index < strLen; index++)  {
	if (index == 0)  {
	tmpChar = tmpStr.substring(0,1).toUpperCase();
	postString = tmpStr.substring(1,strLen);
	tmpStr = tmpChar + postString;
	}
	else {
	tmpChar = tmpStr.substring(index, index+1);
	if (tmpChar == " " && index < (strLen-1))  {
	tmpChar = tmpStr.substring(index+1, index+2).toUpperCase();
	preString = tmpStr.substring(0, index+1);
	postString = tmpStr.substring(index+2,strLen);
	tmpStr = preString + tmpChar + postString;
	         }
	      }
	   }
	}
	frmObj.value = tmpStr;
	}

	function Trim(str){
	return LTrim(RTrim(str));
	}
	function LTrim(str){
		if (str==null){
			return null;
		}
		for(var i=0; str.charAt(i)==" "; i++);
			return str.substring(i, str.length);
	}

	function RTrim(str){
		if (str==null){
			return null;
		}
		for(var i=str.length-1; str.charAt(i)==" "; i--);
			return str.substring(0,i+1);
	}



	function validateSpaces(str,id)
	{
	var temp='';
	for(var i=0;i<str.length;i++)
	{
	try
	{
	if(str[i].indexOf(' ')!=-1 && str[i-1].indexOf(' ')!=-1)
	{
	}
	else if(str[i].indexOf(' ')!=-1 && str[i+1].indexOf(' ')!=-1)
	{
	temp=temp+str[i];
	}
	else
	{
	temp=temp+str[i];
	}
	id.value=trim(temp);
	}
	catch(e)
	{
	}
	}
	}


	 function validatePEBySP(){
  try{
	valid = true;
	if (principalEmployerForm.name.value == "") {
		alert("Please enter name of registrant / owner");
		principalEmployerForm.name.focus();
		return false;
	}
	if (alphabet(principalEmployerForm.name) == false) {
		return false;
	}
	if (principalEmployerForm.designation.value == "") {
		alert("Please enter designation");
		principalEmployerForm.designation.focus();
		return false;
	}
	if (principalEmployerForm.company.value == "") {
		alert("Please enter name of company / organization");
		principalEmployerForm.company.focus();
		return false;
	}
	if (principalEmployerForm.industy.selectedIndex == 0) {
		alert("Please select industry");
		principalEmployerForm.industy.focus();
		return false;
	}
	if (principalEmployerForm.companyType.selectedIndex == 0) {
		alert("Please select company type");
		principalEmployerForm.companyType.focus();
		return false;
	}
	if (principalEmployerForm.address.value == "") {
		alert("Please enter address of premises");
		principalEmployerForm.address.focus();
		return false;
	}
	if (principalEmployerForm.country.selectedIndex == 0) {
		alert("Please select country");
		principalEmployerForm.country.focus();
		return false;
	}
	if (principalEmployerForm.stateId.selectedIndex == 0) {
		alert("Please select state");
		principalEmployerForm.stateId.focus();
		return false;
	}
	if (principalEmployerForm.district.selectedIndex == 0) {
		alert("Please select district");
		principalEmployerForm.district.focus();
		return false;
	}
	if (principalEmployerForm.city.selectedIndex == 0) {
		alert("Please select city");
		principalEmployerForm.city.focus();
		return false;
	}
	if (principalEmployerForm.area.selectedIndex == 0) {
		alert("Please select area");
		principalEmployerForm.area.focus();
		return false;
	}
	if (principalEmployerForm.postOffice.selectedIndex == 0) {
		alert("Please select post office");
		principalEmployerForm.postOffice.focus();
		return false;
	}
	if (principalEmployerForm.stdCodePhoneNo.value == "") {
		alert("Please enter std code");
		principalEmployerForm.stdCodePhoneNo.focus();
		return false;
	}
	if (numeric(principalEmployerForm.stdCodePhoneNo) == false) {
		return false;
	}
	if (principalEmployerForm.phoneNo.value == "") {
		alert("Please enter phone no.");
		principalEmployerForm.phoneNo.focus();
		return false;
	}
	if (numeric(principalEmployerForm.phoneNo) == false) {
		return false;
	}
	if (principalEmployerForm.mobileNo.value == "") {
		alert("Please enter mobile no.");
		principalEmployerForm.mobileNo.focus();
		return false;
	}
	if (numeric(principalEmployerForm.mobileNo) == false) {
		return false;
	}
	if (principalEmployerForm.mobileNo.value.length < 10 && principalEmployerForm.mobileNo.value.length > 1) {
		alert("Please enter a valid ten digit mobile no.");
		principalEmployerForm.mobileNo.value = "";
		principalEmployerForm.mobileNo.focus();
		return false;
	}
	if (principalEmployerForm.email.value == "") {
		alert("Please enter your e-mail id");
		principalEmployerForm.email.focus();
		return false;
	}
	if (emailValidator(principalEmployerForm.email) == false) {
		return false;
	}
	if (principalEmployerForm.contactPersonName.value == "") {
	    alert("Please enter contact person name");
		principalEmployerForm.contactPersonName.focus();
		return false;
	}
	if (alphabet(principalEmployerForm.contactPersonName) == false) {
		return false;
	}
	if (principalEmployerForm.contactPersonMobileNo.value == "") {
		alert("Please enter contact person mobile no.");
		principalEmployerForm.contactPersonMobileNo.focus();
		return false;
	}
	if (numeric(principalEmployerForm.contactPersonMobileNo) == false) {
		return false;
	}
	if (principalEmployerForm.contactPersonMobileNo.value.length < 10 && principalEmployerForm.contactPersonMobileNo.value.length > 1) {
		alert("Please enter a valid ten digit mobile no.");
		principalEmployerForm.contactPersonMobileNo.value = "";
		principalEmployerForm.contactPersonMobileNo.focus();
		return false;
	}
	if (principalEmployerForm.contactPersonEmail.value == "") {
		alert("Please enter your e-mail id");
		principalEmployerForm.contactPersonEmail.focus();
		return false;
	}
	if (emailValidator(principalEmployerForm.contactPersonEmail) == false) {
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
	}
 catch(e){
 return false;
}
}


 function validateSPByPE(){
 try{
	valid = true;
	if (securityAgencyForm.name.value=="") {
		alert("Please enter the name of company");
		securityAgencyForm.name.focus();
		return false;
	}

	if(securityAgencyForm.industryId.selectedIndex==0){
	   alert("Please select the industry type");
	   securityAgencyForm.industryId.focus();
		return false;
	}
	if (securityAgencyForm.address.value == "") {
		alert("Please enter address of premises");
		securityAgencyForm.address.focus();
		return false;
	}
	if (securityAgencyForm.country.selectedIndex == 0) {
		alert("Please select country");
		securityAgencyForm.country.focus();
		return false;
	}
	if (securityAgencyForm.stateId.selectedIndex == 0) {
		alert("Please select state");
		securityAgencyForm.stateId.focus();
		return false;
	}
	if (securityAgencyForm.district.selectedIndex == 0) {
		alert("Please select district");
		securityAgencyForm.district.focus();
		return false;
	}
	if (securityAgencyForm.cityId.selectedIndex == 0) {
		alert("Please select city");
		securityAgencyForm.cityId.focus();
		return false;
	}
	if (securityAgencyForm.area.selectedIndex == 0) {
		alert("Please select area");
		securityAgencyForm.area.focus();
		return false;
	}
	if (securityAgencyForm.postOffice.selectedIndex == 0) {
		alert("Please select Post Office");
		securityAgencyForm.postOffice.focus();
		return false;
	}
	if (securityAgencyForm.stdCodePhoneNo1.value == "") {
		alert("Please enter std code");
		securityAgencyForm.stdCodePhoneNo1.focus();
		return false;
	}
	if (numeric(securityAgencyForm.stdCodePhoneNo1) == false) {
		return false;
	}
	if (securityAgencyForm.phoneNo.value == "") {
		alert("Please enter phone no.");
		securityAgencyForm.phoneNo.focus();
		return false;
	}
	if (numeric(securityAgencyForm.phoneNo) == false) {
		return false;
	}
	if (numeric(securityAgencyForm.stdCodePhoneNo2) == false) {
		return false;
	}
	if (numeric(securityAgencyForm.phoneNoTwo) == false) {
		return false;
	}
	if (securityAgencyForm.email.value == "") {
		alert("Please enter e-mail id");
		securityAgencyForm.email.focus();
		return false;
	}
	if (emailValidator(securityAgencyForm.email) == false) {
		return false;
	}
	if (emailValidator(securityAgencyForm.email2) == false) {
		return false;
	}
	if ((securityAgencyForm.name1.value != "") && (securityAgencyForm.countryOne.selectedIndex == 0)) {
		alert("Please select country");
		securityAgencyForm.countryOne.focus();
		return false;
	}
	if ((securityAgencyForm.name1.value != "") && (securityAgencyForm.stateOne.selectedIndex == 0)) {
		alert("Please select state");
		securityAgencyForm.stateOne.focus();
		return false;
	}
	if ((securityAgencyForm.name2.value != "") && (securityAgencyForm.countryTwo.selectedIndex == 0)) {
		alert("Please select country");
		securityAgencyForm.countryTwo.focus();
		return false;
	}
	if ((securityAgencyForm.name2.value != "") && (securityAgencyForm.stateTwo.selectedIndex == 0)) {
		alert("Please select state");
		securityAgencyForm.stateTwo.focus();
		return false;
	}
	if ((securityAgencyForm.name3.value != "") && (securityAgencyForm.countryThree.selectedIndex == 0)) {
		alert("Please select country");
		securityAgencyForm.countryThree.focus();
		return false;
	}
	if ((securityAgencyForm.name3.value != "") && (securityAgencyForm.stateThree.selectedIndex == 0)) {
		alert("Please select state");
		securityAgencyForm.stateThree.focus();
		return false;
	}

	if (alphabet(securityAgencyForm.ownerName) == false) {
		return false;
	}
	if (numeric(securityAgencyForm.ownerStdCodePhoneNo) == false) {
		return false;
	}
	if (numeric(securityAgencyForm.ownerPhoneNo) == false) {
		return false;
	}
	if (numeric(securityAgencyForm.ownerMobileNo) == false) {
		return false;
	}
	if (securityAgencyForm.ownerMobileNo.value.length < 10 && securityAgencyForm.ownerMobileNo.value.length > 1) {
		alert("Please enter a valid ten digit phone no.");
		securityAgencyForm.ownerMobileNo.value = "";
		securityAgencyForm.ownerMobileNo.focus();
		return false;
	}
	if (emailValidator(securityAgencyForm.ownerEmail) == false) {
		return false;
	}
	if (securityAgencyForm.ownerName.value == "") {
		alert("Please enter owner's name");
		securityAgencyForm.ownerName.focus();
		return false;
	}
	if (securityAgencyForm.ownerAddress.value == "") {
		alert("Please enter owner's address");
		securityAgencyForm.ownerAddress.focus();
		return false;
	}
	if (securityAgencyForm.ownerCountry.selectedIndex == 0) {
		alert("Please enter owner's country");
		securityAgencyForm.ownerCountry.focus();
		return false;
	}
	if (securityAgencyForm.ownerStateId.selectedIndex == 0) {
		alert("Please enter owner's state");
		securityAgencyForm.ownerStateId.focus();
		return false;
	}
	if (securityAgencyForm.ownerDistrict.selectedIndex == 0) {
		alert("Please enter owner's district");
		securityAgencyForm.ownerDistrict.focus();
		return false;
	}
	if (securityAgencyForm.ownerCity.selectedIndex == 0) {
		alert("Please enter owner's city");
		securityAgencyForm.ownerCity.focus();
		return false;
	}
	if (securityAgencyForm.ownerArea.selectedIndex == 0) {
		alert("Please enter owner's area");
		securityAgencyForm.ownerArea.focus();
		return false;
	}
	if (securityAgencyForm.ownerPostOffice.selectedIndex == 0) {
		alert("Please enter owner's Post Office");
		securityAgencyForm.ownerPostOffice.focus();
		return false;
	}
	if (securityAgencyForm.ownerMobileNo.value == "") {
		alert("Please enter owner's mobile no.");
		securityAgencyForm.ownerMobileNo.focus();
		return false;
	}
	if (numeric(securityAgencyForm.ownerMobileNo) == false) {
		return false;
	}
	if (securityAgencyForm.ownerEmail.value == "") {
		alert("Please enter owner's e-mail id");
		securityAgencyForm.ownerEmail.focus();
		return false;
	}
	if (emailValidator(securityAgencyForm.ownerEmail) == false) {
		return false;
	}
	if (securityAgencyForm.email.value == "") {
		alert("Please enter e-mail id ");
		securityAgencyForm.email2.focus();
		return false;
	}
	if (emailValidator(securityAgencyForm.email2) == false) {
		return false;
	}
	if (securityAgencyForm.contactPersonName.value == "") {
		alert("Please enter contact person's name");
		securityAgencyForm.contactPersonName.focus();
		return false;
	}

	if (alphabet(securityAgencyForm.contactPersonName) == false) {
		return false;
	}
	if(securityAgencyForm.contactPersonMobileNo.value==""){
	   alert("Please enter contact person's mobile no.");
	   securityAgencyForm.contactPersonMobileNo.focus();
	   return false;
	}
		if (numeric(securityAgencyForm.contactPersonMobileNo) == false) {
		return false;
	}
	if (securityAgencyForm.contactPersonMobileNo.value.length < 10 && securityAgencyForm.contactPersonMobileNo.value.length > 1) {
		alert("Please enter a valid ten digit mobile no.");
		securityAgencyForm.contactPersonMobileNo.value = "";
		securityAgencyForm.contactPersonMobileNo.focus();
		return false;
	}

	if (securityAgencyForm.contactPersonEmail.value == "") {
		alert("Please enter contact person's e-mail id");
		securityAgencyForm.contactPersonEmail.focus();
		return false;
	}
	if (emailValidator(securityAgencyForm.contactPersonEmail) == false) {
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;

	}

}catch(e){
 return false;
}
}
 //By Atul for ED
		function changeAttStatus(){
				document.getElementById('attStatus').value = 'A'; 
		}
		function changeAttStatusToPresent(){
				document.getElementById('attStatus').value = 'P'; 
		}
			  	
		function checkShiftDesignation(){
			if(document.getElementById('shiftId').selectedIndex==0){
				alert('Please select a Shift');
				return false;
			}
			else if(document.getElementById('designationId').selectedIndex==0){
				alert('Please select a Designation');
				return false;
			}
				return true;	
		}
		function setReportType(reportType){
			document.getElementById('reportType').value = reportType;
		}
 //Ends
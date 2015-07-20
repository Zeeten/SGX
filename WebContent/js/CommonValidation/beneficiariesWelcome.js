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

function age(bDay) {
	now = new Date();
	born = new Date(bDay.value);
	years = Math.floor((now.getTime() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
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


function validatePE() { // Validation Function For Principal Employer Registration Form(By Vidya)
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
	if (principalEmployerForm.captcha.value == "") {
		alert("Please enter code");
		principalEmployerForm.captcha.focus();
		return false;
	}
	if( document.getElementById('captchaHidden').value=='Error')
	{
	alert("Wrong code entered");
	return false;
	}
	
	//validateCaptchaPE();
	/*
	if( document.getElementById('captchaHidden').value=='Error')
	{
	alert("Wrong code entered");
	return false;
	}
	
    else
    {	
	*/
	
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	document.getElementById('PEFormId').submit();
	return true;
	}else {
	return false;
	    }
 
 }
 catch(e){
 return false;
}
 }
 
 
function validateSA() { // Validation Function For Service Provider Registration Form(By Vidya)
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
	/*
	if (securityAgencyForm.establishmentNo.value == "") {
	alert("Please Enter Establishment No. Of Your Company");
		securityAgencyForm.establishmentNo.focus();
	return false;
	}
	if (securityAgencyForm.establishmentDate.value == "") {
		alert("Please Enter Establishment Date Of Your Company");
		securityAgencyForm.establishmentDate.focus();
		return false;
	}
	
	if (securityAgencyForm.establishmentFrom.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid establishment date \n\n";
		var dtDate = securityAgencyForm.establishmentFrom.value; //  name of text box
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
			strErrMsg = strErrMsg + "Establishment date should not be greater than current date \n";
   			//intFlag++;
			alert(strErrMsg);
			securityAgencyForm.establishmentFrom.focus();
			return false;
		}
	}
	if ((document.getElementById("offenceYes").checked == false) && (document.getElementById("offenceNo").checked == false)) {
		alert("Please select a value for DGR");
		document.getElementById("offenceYes").focus();
		return false;
	}
	if ((document.getElementById("offenceYes").checked == true) && (securityAgencyForm.empanelmentNo.value == "")) {
		alert("Please enter empanelment no.");
		securityAgencyForm.empanelmentNo.focus();
		return false;
	}
	if ((document.getElementById("offenceYes").checked == true) && (securityAgencyForm.empanelmentDate.value == "")) {
		alert("Please enter empanelment date");
		securityAgencyForm.empanelmentDate.focus();
		return false;
	}
	//Anil added 12/11/09:begin
	if (securityAgencyForm.empanelmentDate.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid empanelment date \n\n";
		var dtDate = securityAgencyForm.empanelmentDate.value; //  name of text box
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
   			//intFlag++;
			alert(strErrMsg);
			securityAgencyForm.empanelmentDate.focus();
			return false;
		}
	}
	//ANil added 12/11/09:end
	if ((document.getElementById("offenceOneYes").checked == false) && (document.getElementById("offenceOneNo").checked == false)) {
		alert("Please select a value for PSAR");
		document.getElementById("offenceOneYes").focus();
		return false;
	}
	if ((document.getElementById("offenceOneYes").checked == true) && (securityAgencyForm.psar.value == "")) {
		alert("Please enter PSAR");
		securityAgencyForm.psar.focus();
		return false;
	}
	*/
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
	
	/*if (numeric(securityAgencyForm.contactPersonPhone) == false) {
		return false;
	}
	if (securityAgencyForm.contactPersonPhone.value.length < 10 && securityAgencyForm.contactPersonPhone.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityAgencyForm.contactPersonPhone.value = "";
		securityAgencyForm.contactPersonPhone.focus();
		return false;
	}
	if (emailValidator(securityAgencyForm.contactPersonEmail) == false) {
		return false;
	}*/
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
	//Added by Shubhangi on 30.05.11 for labor department
	if (securityAgencyForm.lcAddress.value == "") {
		alert("Please enter labor department's address");
		securityAgencyForm.lcAddress.focus();
		return false;
	}
	if (securityAgencyForm.lcCountryId.selectedIndex == 0) {
		alert("Please enter labor department's country");
		securityAgencyForm.lcCountryId.focus();
		return false;
	}
	if (securityAgencyForm.lcStateId.selectedIndex == 0) {
		alert("Please enter labor department's state");
		securityAgencyForm.lcStateId.focus();
		return false;
	}
	if (securityAgencyForm.lcDistrictId.selectedIndex == 0) {
		alert("Please enter labor department's district");
		securityAgencyForm.lcDistrictId.focus();
		return false;
	}
	if (securityAgencyForm.lcCity.selectedIndex == 0) {
		alert("Please enter labor department's city");
		securityAgencyForm.lcCity.focus();
		return false;
	}
	if (securityAgencyForm.lcArea.selectedIndex == 0) {
		alert("Please enter labor department's area");
		securityAgencyForm.lcArea.focus();
		return false;
	}
	if (securityAgencyForm.lcPostOffice.selectedIndex == 0) {
		alert("Please enter labor department's Post Office");
		securityAgencyForm.lcPostOffice.focus();
		return false;
	}
	
	//Anil added :BEgin 28/10/09
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
	
	if(document.getElementById('companyLogo').value==""){
		alert("Please upload company logo");
		document.getElementById('companyLogo').focus();
		return false;
	}
	
	if(document.getElementById('companyShortCode').value==""){
		alert("Please enter short code");
		document.getElementById('companyShortCode').focus();
		return false;
	}
	if (securityAgencyForm.captcha.value == "") {
		alert("Please enter code");
		securityAgencyForm.captcha.focus();
		return false;
	}
	if( document.getElementById('captchaHidden').value=='Error')
	{
	alert("Wrong code entered");
	return false;
	}
	else
	{
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	document.getElementById('form').submit();
	return true;
	}else {
	return false;
	}
	}
		//Anil added :End 28/10/09
	//Anil Added 24/10/09:Begin for validation of establishmentDate with current Date
	/*if (securityAgencyForm.tillDate.value == "") {
		alert("Please Enter Validity Date");
		securityAgencyForm.tillDate.focus();
		return false;
	}
	if (securityAgencyForm.tillDate.value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid Validity Date\n\n";
		var dtDate = securityAgencyForm.tillDate.value; //  name of text box
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
		if (userdate < currentdate) {//fwdDate <= refDate
			strErrMsg = strErrMsg + "Validity Date should not be less than Current Date \n";
			alert(strErrMsg);
			securityAgencyForm.tillDate.focus();
			return false;
		}
	} else {
		return valid;
	}*/
}catch(e){
 return false;
}
}

function checkName1() {
	if (securityAgencyForm.name1.value == "") {
		securityAgencyForm.countryOne.selectedIndex = 0;
		alert("Please enter name first");
		securityAgencyForm.name1.focus();
	}
}
function checkCountry1() {
	if (securityAgencyForm.countryOne.selectedIndex == 0) {
		securityAgencyForm.stateOne.selectedIndex = 0;
		alert("Please enter country first");
		return false;
	}
}
function checkName2() {
	if (securityAgencyForm.name2.value == "") {
		securityAgencyForm.countryTwo.selectedIndex = 0;
		alert("Please enter name first");
		securityAgencyForm.name2.focus();
	}
}
function checkCountry2() {
	if (securityAgencyForm.countryTwo.selectedIndex == 0) {
		securityAgencyForm.stateTwo.selectedIndex = 0;
		alert("Please select country first");
		return false;
	}
}
function checkName3() {
	if (securityAgencyForm.name3.value == "") {
		securityAgencyForm.countryThree.selectedIndex = 0;
		alert("Please enter name first");
		securityAgencyForm.name3.focus();
	}
}
function checkCountry3() {
	if (securityAgencyForm.countryThree.selectedIndex == 0) {
		securityAgencyForm.stateThree.selectedIndex = 0;
		alert("Please select country first");
		return false;
	}
}
function setReadOnly(obj) {
	if (obj.value == "yes") {
		document.forms[0].psar.style.backgroundColor = "#ffffff";
		document.forms[0].psar.readOnly = 0;
	} else {
		document.forms[0].psar.style.backgroundColor = "#eeeeee";
		document.forms[0].psar.value = "";
		document.forms[0].psar.readOnly = 1;
	}
}
//Anil added 3/11/09:Begin used for disable the empanelmentDate onclick on radio button
function disableDate(disable) {
	calobj = document.getElementById("getCal");
	disableAnchor(calobj, disable);
}
function disableDateField(obj, disable, dateField) {
	if (disable) {
		var href = obj.getAttribute("href");
		if (href && href != "" && href != null) {
			obj.setAttribute("href_bak", href);
		}
		obj.removeAttribute("href");
		obj.style.readOnly = 1;
		dateField.style.readOnly = 1;
	} else {
		obj.setAttribute("href", "javascript:getCalendar(document.forms[0].empanelmentDate);");
		obj.style.color = "blue";
		obj.style.readOnly = 1;
		dateField.style.readOnly = 1;
	}
}
function disableAnchor(obj, disable) {
	if (disable) {
		var href = obj.getAttribute("href");
		if (href && href != "" && href != null) {
			obj.setAttribute("href_bak", href);
		}
		obj.removeAttribute("href");
		document.forms[0].empanelmentNo.style.backgroundColor = "#eeeeee";
		document.forms[0].empanelmentDate.style.backgroundColor = "#eeeeee";
		document.forms[0].empanelmentNo.value = "";
		document.forms[0].empanelmentDate.value = "";
		document.forms[0].empanelmentNo.readOnly = 1;
		document.forms[0].empanelmentDate.readOnly = 1;
	} else {
		obj.setAttribute("href", "javascript:getCalendar(document.forms[0].empanelmentDate);");
		obj.style.color = "blue";
		document.forms[0].empanelmentNo.style.backgroundColor = "#ffffff";
		document.forms[0].empanelmentDate.style.backgroundColor = "#ffffff";
		document.forms[0].empanelmentNo.readOnly = 0;
	}
}
function disableAnchor(obj, disable) {
	if (disable) {
		var href = obj.getAttribute("href");
		if (href && href != "" && href != null) {
			obj.setAttribute("href_bak", href);
		}
		obj.removeAttribute("href");
		document.forms[0].empanelmentNo.style.backgroundColor = "#eeeeee";
		document.forms[0].empanelmentDate.style.backgroundColor = "#eeeeee";
		document.forms[0].empanelmentNo.value = "";
		document.forms[0].empanelmentDate.value = "";
		document.forms[0].empanelmentNo.readOnly = 1;
		document.forms[0].empanelmentDate.readOnly = 1;
	} else {
		obj.setAttribute("href", "javascript:getCalendar(document.forms[0].empanelmentDate);");
		obj.style.color = "blue";
		document.forms[0].empanelmentNo.style.backgroundColor = "#ffffff";
		document.forms[0].empanelmentDate.style.backgroundColor = "#ffffff";
		document.forms[0].empanelmentNo.readOnly = 0;
	}
}
//Anil added 3/11/09:End
function setReadOnlyOne(obj) {
	if (obj.value == "yes") {
		document.forms[0].empanelmentNo.style.backgroundColor = "#ffffff";
		document.forms[0].empanelmentDate.style.backgroundColor = "#ffffff";
		document.forms[0].empanelmentNo.readOnly = 0;
		obj.setAttribute("href");
    	//obj.style.color="blue";
		
		//=false;
	} else {
		document.forms[0].empanelmentNo.style.backgroundColor = "#eeeeee";
		document.forms[0].empanelmentDate.style.backgroundColor = "#eeeeee";
		document.forms[0].empanelmentNo.value = "";
		document.forms[0].empanelmentDate.value = "";
		document.forms[0].empanelmentNo.readOnly = 1;
		document.forms[0].empanelmentDate.readOnly = 1;
		//document.getElementById("getCal").href = "";
		//e.handle=true;
		//toggleDisabled(document.getElementById("span_1"));
	}
}

// Added By Vidya
function validateCE() { // Validation Function For Corporate Employee Registration Form(By Vidya) 
	valid = true;
	if (corporateEmployeeForm.name.value == "") {
		alert("Please Enter Your Name");
		corporateEmployeeForm.name.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.name) == false) {
		return false;
	}
	if (corporateEmployeeForm.fathersName.value == "") {
		alert("Please Enter Your Father's Name");
		corporateEmployeeForm.fathersName.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.fathersName) == false) {
		return false;
	}
	if (corporateEmployeeForm.mothersName.value == "") {
		alert("Please Enter Your Mother's Name");
		corporateEmployeeForm.mothersName.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.mothersName) == false) {
		return false;
	}
	if (corporateEmployeeForm.birthDate.value == "") {
		alert("Please Enter Your Date of Birth");
		corporateEmployeeForm.birthDate.focus();
		return false;
	}
	var radioSelected = false;
	for (i = 0; i < corporateEmployeeForm.gender.length; i++) {
		if (corporateEmployeeForm.gender[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select Gender");
		return (false);
	}
	if (numeric(corporateEmployeeForm.telephoneNo) == false) {
		return false;
	}
	if (corporateEmployeeForm.telephoneNo.value.length < 10 && corporateEmployeeForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		corporateEmployeeForm.telephoneNo.value = "";
		corporateEmployeeForm.telephoneNo.focus();
		return false;
	}
	if (corporateEmployeeForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		corporateEmployeeForm.mobileNo.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.mobileNo) == false) {
		return false;
	}
	if (corporateEmployeeForm.mobileNo.value.length < 10 && corporateEmployeeForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		corporateEmployeeForm.mobileNo.value = "";
		corporateEmployeeForm.mobileNo.focus();
		return false;
	}
//	if (corporateEmployeeForm.email.value == "") {
//		alert("Please Enter Your e-Mail Id");
//		corporateEmployeeForm.email.focus();
//		return false;
//	}
	if (emailValidator(corporateEmployeeForm.email) == false) {
		return false;
    }
	if (corporateEmployeeForm.permanentAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		corporateEmployeeForm.permanentAddress.focus();
		return false;
	}
	if (corporateEmployeeForm.permanentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		corporateEmployeeForm.permanentCountry.focus();
		return false;
	}
	if (corporateEmployeeForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		corporateEmployeeForm.permanentState.focus();
		return false;
	}
	if (corporateEmployeeForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		corporateEmployeeForm.permanentDistrict.focus();
		return false;
	}
	if (corporateEmployeeForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		corporateEmployeeForm.permanentCity.focus();
		return false;
	}
	if (corporateEmployeeForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		corporateEmployeeForm.permanentPostOffice.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.permanentPhoneNo1) == false) {
		return false;
	}
	if (corporateEmployeeForm.permanentPhoneNo1.value.length < 10 && corporateEmployeeForm.permanentPhoneNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		corporateEmployeeForm.permanentPhoneNo1.value = "";
		corporateEmployeeForm.permanentPhoneNo1.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.permanentPhoneNo2) == false) {
		return false;
	}
	if (corporateEmployeeForm.permanentPhoneNo2.value.length < 10 && corporateEmployeeForm.permanentPhoneNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		corporateEmployeeForm.permanentPhoneNo2.value = "";
		corporateEmployeeForm.permanentPhoneNo2.focus();
		return false;
	}
	if (corporateEmployeeForm.presentAddress.value == "") {
		alert("Please Enter Your Present Address");
		corporateEmployeeForm.presentAddress.focus();
		return false;
	}
	if (corporateEmployeeForm.presentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		corporateEmployeeForm.presentCountry.focus();
		return false;
	}
	if (corporateEmployeeForm.presentState.selectedIndex == 0) {
		alert("Please Select State");
		corporateEmployeeForm.presentState.focus();
		return false;
	}
	if (corporateEmployeeForm.presentDistrict.selectedIndex == 0) {
		alert("Plese Select District");
		corporateEmployeeForm.presentDistrict.focus();
		return false;
	}
	if (corporateEmployeeForm.presentCity.selectedIndex == 0) {
		alert("Please Select City");
		corporateEmployeeForm.presentCity.focus();
		return false;
	}
	if (corporateEmployeeForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		corporateEmployeeForm.presentPostOffice.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.presentPhoneNo1) == false) {
		return false;
	}
	if (corporateEmployeeForm.presentPhoneNo1.value.length < 10 && corporateEmployeeForm.presentPhoneNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		corporateEmployeeForm.presentPhoneNo1.value = "";
		corporateEmployeeForm.presentPhoneNo1.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.presentPhoneNo2) == false) {
		return false;
	}
	if (corporateEmployeeForm.presentPhoneNo2.value.length < 10 && corporateEmployeeForm.presentPhoneNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		corporateEmployeeForm.presentPhoneNo2.value = "";
		corporateEmployeeForm.presentPhoneNo2.focus();
		return false;
	}
//	if (corporateEmployeeForm.height.value == "") {
//		alert("Please Enter Height");
//		corporateEmployeeForm.height.focus();
//		return false;
//	}
//	if (corporateEmployeeForm.chest.value == "") {
//		alert("Please Enter Chest");
//		corporateEmployeeForm.chest.focus();
//		return false;
//	}
//	if (corporateEmployeeForm.weight.value == "") {
//		alert("Please Enter Weight");
//		corporateEmployeeForm.weight.focus();
//		return false;
//	}
	if (corporateEmployeeForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		corporateEmployeeForm.bloodGroup.focus();
		return false;
	}
	if ((corporateEmployeeForm.otherLanguage.selectedIndex == 0) && (corporateEmployeeForm.otherLanguageRead.checked == true || corporateEmployeeForm.otherLanguageWrite.checked == true || corporateEmployeeForm.otherLanguageSpeak.checked == true)) {
		alert("Please Select Language");
		corporateEmployeeForm.otherLanguage.focus();
		return false;
	}
	if ((corporateEmployeeForm.otherLanguage.selectedIndex != 0) && (corporateEmployeeForm.otherLanguageRead.checked == false && corporateEmployeeForm.otherLanguageWrite.checked == false && corporateEmployeeForm.otherLanguageSpeak.checked == false)) {
		alert("Please Select A Relevant Option For Other Language");
		corporateEmployeeForm.otherLanguage.focus();
		return false;
	}
	if (corporateEmployeeForm.underMetricBoard.value == "") {
		alert("Please Enter Your Under Metric Board");
		corporateEmployeeForm.underMetricBoard.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.underMetricBoard) == false) {
		return false;
	}
	if (corporateEmployeeForm.underMetricInstitute.value == "") {
		alert("Please Enter the Name of Your Under Metric Institute");
		corporateEmployeeForm.underMetricInstitute.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.underMetricInstitute) == false) {
		return false;
	}
	if (corporateEmployeeForm.underMetricCountry.selectedIndex == 0) {
		alert("Please Select Your Under Metric Country");
		corporateEmployeeForm.underMetricCountry.focus();
		return false;
	}
	if (corporateEmployeeForm.underMetricState.selectedIndex == 0) {
		alert("Please Select Your Under Metric State");
		corporateEmployeeForm.underMetricState.focus();
		return false;
	}
	if (corporateEmployeeForm.underMetricDistrict.selectedIndex == 0) {
		alert("Please Select Your Under Metric District");
		corporateEmployeeForm.underMetricDistrict.focus();
		return false;
	}
	if (corporateEmployeeForm.underMetricCity.selectedIndex == 0) {
		alert("Please Select Your Under Metric City");
		corporateEmployeeForm.underMetricCity.focus();
		return false;
	}
	if (corporateEmployeeForm.underMetricPercentage.value == "") {
		alert("Please Enter Your Under Metric Percentage");
		corporateEmployeeForm.underMetricPercentage.focus();
		return false;
	}
	if (numericPercentage(corporateEmployeeForm.underMetricPercentage) == false) {
		return false;
	}
	if (corporateEmployeeForm.underMetricSubject.value == "") {
		alert("Please Enter Your Under Metric Subject");
		corporateEmployeeForm.underMetricSubject.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.underMetricSubject) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(corporateEmployeeForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.highSchoolSubject) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.higherSecondaryBoard) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.higherSecondaryInstitute) == false) {
		return false;
	}
	if (numericPercentage(corporateEmployeeForm.higherSecondaryPercentage) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.higherSecondarySubject) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.graduationUniversity) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.graduationInstitute) == false) {
		return false;
	}
	if (numericPercentage(corporateEmployeeForm.graduationPercentage) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.graduationSubject) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.otherBoard) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.otherInstitute) == false) {
		return false;
	}
	if (numericPercentage(corporateEmployeeForm.otherPercentage) == false) {
		return false;
	}
	if (alphabet(corporateEmployeeForm.otherSubject) == false) {
		return false;
	}
	if ((document.getElementById("employmentYes").checked == false) && (document.getElementById("employmentNo").checked == false)) {
		alert("Please Select A Value For Your Present Employment");
		document.getElementById("employmentYes").focus();
		return false;
	}
	if (corporateEmployeeForm.employment[0].checked == true) {
		if (corporateEmployeeForm.experience.value == "") {
			alert("Please Fill In Your Work Experience");
			corporateEmployeeForm.experience.focus();
			return false;
		}
		if (corporateEmployeeForm.nameOfOrganization.value == "") {
			alert("Please Fill In The Name of Your Previous Organization");
			corporateEmployeeForm.nameOfOrganization.focus();
			return false;
		}
	}
	if (corporateEmployeeForm.nameOne.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		corporateEmployeeForm.nameOne.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.nameOne) == false) {
		return false;
	}
	if (corporateEmployeeForm.nameTwo.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		corporateEmployeeForm.nameTwo.focus();
		return false;
	}
	if (alphabet(corporateEmployeeForm.nameTwo) == false) {
		return false;
	}
	if (corporateEmployeeForm.addressOne.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		corporateEmployeeForm.addressOne.focus();
		return false;
	}
	if (corporateEmployeeForm.addressTwo.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		corporateEmployeeForm.addressTwo.focus();
		return false;
	}
	if (corporateEmployeeForm.pinCodeOne.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		corporateEmployeeForm.pinCodeOne.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.pinCodeOne) == false) {
		return false;
	}
	if (corporateEmployeeForm.pinCodeOne.value.length < 6 && corporateEmployeeForm.pinCodeOne.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		corporateEmployeeForm.pinCodeOne.value = "";
		corporateEmployeeForm.pinCodeOne.focus();
		return false;
	}
	if (corporateEmployeeForm.pinCodeTwo.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		corporateEmployeeForm.pinCodeTwo.focus();
		return false;
	}
	if (numeric(corporateEmployeeForm.pinCodeTwo) == false) {
		return false;
	}
	if (corporateEmployeeForm.pinCodeTwo.value.length < 6 && corporateEmployeeForm.pinCodeTwo.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		corporateEmployeeForm.pinCodeTwo.value = "";
		corporateEmployeeForm.pinCodeTwo.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}

// Ended by Vidya

// Added by Vidya
function validateSP() { // Validation Function For Security Personnel Registration Form(By Vidya)
	valid = true;
	if (securityPersonnelForm.name.value == "") {
		alert("Please Enter Your Name");
		securityPersonnelForm.name.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.name) == false) {
		return false;
	}
	if (securityPersonnelForm.fathersName.value == "") {
		alert("Please Enter Your Father's Name");
		securityPersonnelForm.fathersName.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.fathersName) == false) {
		return false;
	}
	if (securityPersonnelForm.mothersName.value == "") {
		alert("Please Enter Your Mother's Name");
		securityPersonnelForm.mothersName.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.mothersName) == false) {
		return false;
	}
	if (securityPersonnelForm.birthDate.value == "") {
		alert("Please Enter Your Date of Birth");
		securityPersonnelForm.birthDate.focus();
		return false;
	}
	if ((document.getElementById("genderMale").checked == false) && (document.getElementById("genderFemale").checked == false)) {
		alert("Please Select A Value For Gender");
		document.getElementById("genderMale").focus();
		return false;
	}
	if (securityPersonnelForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		securityPersonnelForm.bloodGroup.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.telephoneNo) == false) {
		return false;
	}
	if (securityPersonnelForm.telephoneNo.value.length < 10 && securityPersonnelForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityPersonnelForm.telephoneNo.value = "";
		securityPersonnelForm.telephoneNo.focus();
		return false;
	}
	if (securityPersonnelForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		securityPersonnelForm.mobileNo.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.mobileNo) == false) {
		return false;
	}
	if (securityPersonnelForm.mobileNo.value.length < 10 && securityPersonnelForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityPersonnelForm.mobileNo.value = "";
		securityPersonnelForm.mobileNo.focus();
		return false;
	}
//	if (securityPersonnelForm.email.value == "") {
//		alert("Please Enter Your Email Id");
//		securityPersonnelForm.email.focus();
//		return false;
//	}
	if (emailValidator(securityPersonnelForm.email) == false) {
		return false;
	}
	if (securityPersonnelForm.permanentAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		securityPersonnelForm.permanentAddress.focus();
		return false;
	}
	if (securityPersonnelForm.permanentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		securityPersonnelForm.permanentCountry.focus();
		return false;
	}
	if (securityPersonnelForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		securityPersonnelForm.permanentState.focus();
		return false;
	}
	if (securityPersonnelForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		securityPersonnelForm.permanentDistrict.focus();
		return false;
	}
	if (securityPersonnelForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		securityPersonnelForm.permanentCity.focus();
		return false;
	}
	if (securityPersonnelForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		securityPersonnelForm.permanentPostOffice.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.permanentContactNo1) == false) {
		return false;
	}
	if (securityPersonnelForm.permanentContactNo1.value.length < 10 && securityPersonnelForm.permanentContactNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityPersonnelForm.permanentContactNo1.value = "";
		securityPersonnelForm.permanentContactNo1.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.permanentContactNo2) == false) {
		return false;
	}
	if (securityPersonnelForm.permanentContactNo2.value.length < 10 && securityPersonnelForm.permanentContactNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityPersonnelForm.permanentContactNo2.value = "";
		securityPersonnelForm.permanentContactNo2.focus();
		return false;
	}
	if (securityPersonnelForm.presentAddress.value == "") {
		alert("Please Enter Your Present Address");
		securityPersonnelForm.presentAddress.focus();
		return false;
	}
	if (securityPersonnelForm.presentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		securityPersonnelForm.presentCountry.focus();
		return false;
	}
	if (securityPersonnelForm.presentState.selectedIndex == 0) {
		alert("Please Select State");
		securityPersonnelForm.presentState.focus();
		return false;
	}
	if (securityPersonnelForm.presentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		securityPersonnelForm.presentDistrict.focus();
		return false;
	}
	if (securityPersonnelForm.presentCity.selectedIndex == 0) {
		alert("Please Select City");
		securityPersonnelForm.presentCity.focus();
		return false;
	}
	if (securityPersonnelForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		securityPersonnelForm.presentPostOffice.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.presentContactNo1) == false) {
		return false;
	}
	if (securityPersonnelForm.presentContactNo1.value.length < 10 && securityPersonnelForm.presentContactNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityPersonnelForm.presentContactNo1.value = "";
		securityPersonnelForm.presentContactNo1.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.presentContactNo2) == false) {
		return false;
	}
	if (securityPersonnelForm.presentContactNo2.value.length < 10 && securityPersonnelForm.presentContactNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		securityPersonnelForm.presentContactNo2.value = "";
		securityPersonnelForm.presentContactNo2.focus();
		return false;
	}
//	if (securityPersonnelForm.height.value == "") {
//		alert("Please Enter Height");
//		securityPersonnelForm.height.focus();
//		return false;
//	}
//	if (securityPersonnelForm.chest.value == "") {
//		alert("Please Enter Chest");
//		securityPersonnelForm.chest.focus();
//		return false;
//	}
//	if (securityPersonnelForm.weight.value == "") {
//		alert("Please Enter Weight");
//		securityPersonnelForm.weight.focus();
//		return false;
//	}
	if ((securityPersonnelForm.otherLanguage.selectedIndex == 0) && (securityPersonnelForm.otherLanguageRead.checked == true || securityPersonnelForm.otherLanguageWrite.checked == true || securityPersonnelForm.otherLanguageSpeak.checked == true)) {
		alert("Please Select Language");
		securityPersonnelForm.otherLanguage.focus();
		return false;
	}
	if ((securityPersonnelForm.otherLanguage.selectedIndex != 0) && (securityPersonnelForm.otherLanguageRead.checked == false && securityPersonnelForm.otherLanguageWrite.checked == false && securityPersonnelForm.otherLanguageSpeak.checked == false)) {
		alert("Please Select A Relevant Option For Other Language");
		securityPersonnelForm.otherLanguage.focus();
		return false;
	}
	if ((document.getElementById("presentEmploymentYes").checked == false) && (document.getElementById("presentEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Present Employment");
		document.getElementById("presentEmploymentYes").focus();
		return false;
	}
	if (securityPersonnelForm.presentEmployment[0].checked == true) {
		if (securityPersonnelForm.nameofOrganization1.value == "") {
			alert("Please Fill In The Name of Your Present Organization");
			securityPersonnelForm.nameofOrganization1.focus();
			return false;
		}
//		if (securityPersonnelForm.orgDesignation1.value == "") {
//			alert("Please Enter Designation of Your Present Organization ");
//			securityPersonnelForm.orgDesignation1.focus();
//			return false;
//		}
		if (securityPersonnelForm.totalExperience.value == "") {
			alert("Please Fill In Your Work Experience");
			securityPersonnelForm.totalExperience.focus();
			return false;
		}
	}
	if ((document.getElementById("previousEmploymentYes").checked == false) && (document.getElementById("previousEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Previous Employment");
		document.getElementById("previousEmploymentYes").focus();
		return false;
	}
	if (securityPersonnelForm.previousEmployment[0].checked == true) {
		if (securityPersonnelForm.nameofOrganization2.value == "") {
			alert("Please Fill In The Name of Your Previous Organization");
			securityPersonnelForm.nameofOrganization2.focus();
			return false;
		}
//		if (securityPersonnelForm.orgDesignation2.value == "") {
//			alert("Please Enter Designation of Your Previous Organization ");
//			securityPersonnelForm.orgDesignation2.focus();
//			return false;
//		}
		if (securityPersonnelForm.totalExperience.value == "") {
			alert("Please Fill In Your Work Experience");
			securityPersonnelForm.totalExperience.focus();
			return false;
		}
	}
	if (securityPersonnelForm.underMetricBoard.value == "") {
		alert("Please Enter Your Under Metric Board / University");
		securityPersonnelForm.underMetricBoard.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.underMetricBoard) == false) {
		return false;
	}
	if (securityPersonnelForm.underMetricInstitute.value == "") {
		alert("Please Enter Your Under Metric Institute / College");
		securityPersonnelForm.underMetricInstitute.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.underMetricInstitute) == false) {
		return false;
	}
	if (securityPersonnelForm.underMetricCountry.selectedIndex == 0) {
		alert("Please Select Country");
		securityPersonnelForm.underMetricCountry.focus();
		return false;
	}
	if (securityPersonnelForm.underMetricState.selectedIndex == 0) {
		alert("Please Select State");
		securityPersonnelForm.underMetricState.focus();
		return false;
	}
	if (securityPersonnelForm.underMetricDistrict.selectedIndex == 0) {
		alert("Please Select District");
		securityPersonnelForm.underMetricDistrict.focus();
		return false;
	}
	if (securityPersonnelForm.underMetricCity.selectedIndex == 0) {
		alert("Please Select City");
		securityPersonnelForm.underMetricCity.focus();
		return false;
	}
	if (securityPersonnelForm.underMetricPercentage.value == "") {
		alert("Please Enter Your Under Metric Percentage");
		securityPersonnelForm.underMetricPercentage.focus();
		return false;
	}
	if (numericPercentage(securityPersonnelForm.underMetricPercentage) == false) {
		return false;
	}
	if (securityPersonnelForm.underMetricSubject.value == "") {
		alert("Please Enter Your Under Metric Subject");
		securityPersonnelForm.underMetricSubject.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.underMetricSubject) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(securityPersonnelForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.highSchoolSubject) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.higherSecondaryBoard) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.higherSecondaryInstitute) == false) {
		return false;
	}
	if (numericPercentage(securityPersonnelForm.higherSecondaryPercentage) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.higherSecondarySubject) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.graduationUniversity) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.graduationInstitute) == false) {
		return false;
	}
	if (numericPercentage(securityPersonnelForm.graduationPercentage) == false) {
		return false;
	}
	if (alphabet(securityPersonnelForm.graduationSubject) == false) {
		return false;
	}
//	if (alphabet(securityPersonnelForm.otherBoard) == false) {
//		return false;
//	}
//	if (alphabet(securityPersonnelForm.otherInstitute) == false) {
//		return false;
//	}
//	if (numericPercentage(securityPersonnelForm.otherPercentage) == false) {
//		return false;
//	}
//	if (alphabet(securityPersonnelForm.otherSubject) == false) {
//		return false;
//	}
	if (securityPersonnelForm.nameResponsiblePerson1.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		securityPersonnelForm.nameResponsiblePerson1.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.nameResponsiblePerson1) == false) {
		return false;
	}
	if (securityPersonnelForm.addressResponsiblePerson1.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		securityPersonnelForm.addressResponsiblePerson1.focus();
		return false;
	}
	if (securityPersonnelForm.pinCodeResponsiblePerson1.value == "") {
		alert("Please Enter PIN Code");
		securityPersonnelForm.pinCodeResponsiblePerson1.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.pinCodeResponsiblePerson1) == false) {
		return false;
	}
	if (securityPersonnelForm.pinCodeResponsiblePerson1.value.length < 6 && securityPersonnelForm.pinCodeResponsiblePerson1.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		securityPersonnelForm.pinCodeResponsiblePerson1.value = "";
		securityPersonnelForm.pinCodeResponsiblePerson1.focus();
		return false;
	}
	if (securityPersonnelForm.nameResponsiblePerson2.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		securityPersonnelForm.nameResponsiblePerson2.focus();
		return false;
	}
	if (alphabet(securityPersonnelForm.nameResponsiblePerson2) == false) {
		return false;
	}
	if (securityPersonnelForm.addressResponsiblePerson2.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		securityPersonnelForm.addressResponsiblePerson2.focus();
		return false;
	}
	if (securityPersonnelForm.pinCodeResponsiblePerson2.value == "") {
		alert("Please Enter PIN Code");
		securityPersonnelForm.pinCodeResponsiblePerson2.focus();
		return false;
	}
	if (numeric(securityPersonnelForm.pinCodeResponsiblePerson2) == false) {
		return false;
	}
	if (securityPersonnelForm.pinCodeResponsiblePerson2.value.length < 6 && securityPersonnelForm.pinCodeResponsiblePerson2.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		securityPersonnelForm.pinCodeResponsiblePerson2.value = "";
		securityPersonnelForm.pinCodeResponsiblePerson2.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}

// Ended by Vidya

// Added by Vidya
function validateHK() {  // Validation Function For House Keeper Registration Form (Added By Vidya)
	valid = true;
	if (houseKeeperForm.name.value == "") {
		alert("Please Enter Your Name");
		houseKeeperForm.name.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.name) == false) {
		return false;
	}
	if (houseKeeperForm.fathersName.value == "") {
		alert("Please Enter Your Father's Name");
		houseKeeperForm.fathersName.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.fathersName) == false) {
		return false;
	}
	if (houseKeeperForm.mothersName.value == "") {
		alert("Please Enter Your Mother's Name");
		houseKeeperForm.mothersName.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.mothersName) == false) {
		return false;
	}
	if (houseKeeperForm.birthDate.value == "") {
		alert("Please Enter Your Date of Birth");
		houseKeeperForm.birthDate.focus();
		return false;
	}
	var radioSelected = false;
	for (i = 0; i < houseKeeperForm.gender.length; i++) {
		if (houseKeeperForm.gender[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select Gender");
		return (false);
	}
	if (houseKeeperForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		houseKeeperForm.bloodGroup.focus();
		return false;
	}
	if (houseKeeperForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		houseKeeperForm.mobileNo.focus();
		return false;
	}
	if (numeric(houseKeeperForm.mobileNo) == false) {
		return false;
	}
	if (houseKeeperForm.mobileNo.value.length < 10 && houseKeeperForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		houseKeeperForm.mobileNo.value = "";
		houseKeeperForm.mobileNo.focus();
		return false;
	}
	if (numeric(houseKeeperForm.telephoneNo) == false) {
		return false;
	}
	if (houseKeeperForm.telephoneNo.value.length < 10 && houseKeeperForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		houseKeeperForm.telephoneNo.value = "";
		houseKeeperForm.telephoneNo.focus();
		return false;
	}
//	if (houseKeeperForm.email.value == "") {
//		alert("Please Enter Your e-Mail Id");
//		houseKeeperForm.email.focus();
//		return false;
//	}
	if (emailValidator(houseKeeperForm.email) == false) {
		return false;
	}
	if (houseKeeperForm.permanentAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		houseKeeperForm.permanentAddress.focus();
		return false;
	}
	if (houseKeeperForm.permanentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		houseKeeperForm.permanentCountry.focus();
		return false;
	}
	if (houseKeeperForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		houseKeeperForm.permanentState.focus();
		return false;
	}
	if (houseKeeperForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		houseKeeperForm.permanentDistrict.focus();
		return false;
	}
	if (houseKeeperForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		houseKeeperForm.permanentCity.focus();
		return false;
	}
	if (houseKeeperForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		houseKeeperForm.permanentPostOffice.focus();
		return false;
	}
	if (numeric(houseKeeperForm.permanentPhoneNo1) == false) {
		return false;
	}
	if (houseKeeperForm.permanentPhoneNo1.value.length < 10 && houseKeeperForm.permanentPhoneNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		houseKeeperForm.permanentPhoneNo1.value = "";
		houseKeeperForm.permanentPhoneNo1.focus();
		return false;
	}
	if (numeric(houseKeeperForm.permanentPhoneNo2) == false) {
		return false;
	}
	if (houseKeeperForm.permanentPhoneNo2.value.length < 10 && houseKeeperForm.permanentPhoneNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		houseKeeperForm.permanentPhoneNo2.value = "";
		houseKeeperForm.permanentPhoneNo2.focus();
		return false;
	}
	if (houseKeeperForm.presentAddress.value == "") {
		alert("Please Enter Your Present Address");
		houseKeeperForm.presentAddress.focus();
		return false;
	}
	if (houseKeeperForm.presentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		houseKeeperForm.presentCountry.focus();
		return false;
	}
	if (houseKeeperForm.presentState.selectedIndex == 0) {
		alert("Please Select State");
		houseKeeperForm.presentState.focus();
		return false;
	}
	if (houseKeeperForm.presentDistrict.selectedIndex == 0) {
		alert("Plese Select District");
		houseKeeperForm.presentDistrict.focus();
		return false;
	}
	if (houseKeeperForm.presentCity.selectedIndex == 0) {
		alert("Please Select City");
		houseKeeperForm.presentCity.focus();
		return false;
	}
	if (houseKeeperForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		houseKeeperForm.presentPostOffice.focus();
		return false;
	}
	if (numeric(houseKeeperForm.presentPhoneNo1) == false) {
		return false;
	}
	if (houseKeeperForm.presentPhoneNo1.value.length < 10 && houseKeeperForm.presentPhoneNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		houseKeeperForm.presentPhoneNo1.value = "";
		houseKeeperForm.presentPhoneNo1.focus();
		return false;
	}
	if (numeric(houseKeeperForm.presentPhoneNo2) == false) {
		return false;
	}
	if (houseKeeperForm.presentPhoneNo2.value.length < 10 && houseKeeperForm.presentPhoneNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		houseKeeperForm.presentPhoneNo2.value = "";
		houseKeeperForm.presentPhoneNo2.focus();
		return false;
	}
//	if (houseKeeperForm.height.value == "") {
//		alert("Please Enter Height");
//		houseKeeperForm.height.focus();
//		return false;
//	}
//	if (houseKeeperForm.chest.value == "") {
//		alert("Please Enter Chest");
//		houseKeeperForm.chest.focus();
//		return false;
//	}
//	if (houseKeeperForm.weight.value == "") {
//		alert("Please Enter Weight");
//		houseKeeperForm.weight.focus();
//		return false;
//	}
	if ((houseKeeperForm.otherLanguage.selectedIndex == 0) && (houseKeeperForm.otherLanguageRead.checked == true || houseKeeperForm.otherLanguageWrite.checked == true || houseKeeperForm.otherLanguageSpeak.checked == true)) {
		alert("Please Select Language");
		houseKeeperForm.otherLanguage.focus();
		return false;
	}
	if ((houseKeeperForm.otherLanguage.selectedIndex != 0) && (houseKeeperForm.otherLanguageRead.checked == false && houseKeeperForm.otherLanguageWrite.checked == false && houseKeeperForm.otherLanguageSpeak.checked == false)) {
		alert("Please Select A Relevant Option For Other Language");
		houseKeeperForm.otherLanguage.focus();
		return false;
	}
	if (houseKeeperForm.underMetricBoard.value == "") {
		alert("Please Enter Your Under Metric Board");
		houseKeeperForm.underMetricBoard.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.underMetricBoard) == false) {
		return false;
	}
	if (houseKeeperForm.underMetricInstitute.value == "") {
		alert("Please Enter the Name of Your Under Metric Institute");
		houseKeeperForm.underMetricInstitute.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.underMetricInstitute) == false) {
		return false;
	}
	if (houseKeeperForm.underMetricCountry.selectedIndex == 0) {
		alert("Please Select Your Under Metric Country");
		houseKeeperForm.underMetricCountry.focus();
		return false;
	}
	if (houseKeeperForm.underMetricState.selectedIndex == 0) {
		alert("Please Select Your Under Metric State");
		houseKeeperForm.underMetricState.focus();
		return false;
	}
	if (houseKeeperForm.underMetricDistrict.selectedIndex == 0) {
		alert("Please Select Your Under Metric District");
		houseKeeperForm.underMetricDistrict.focus();
		return false;
	}
	if (houseKeeperForm.underMetricCity.selectedIndex == 0) {
		alert("Please Select Your Under Metric City");
		houseKeeperForm.underMetricCity.focus();
		return false;
	}
	if (houseKeeperForm.underMetricPercentage.value == "") {
		alert("Please Enter Your Under Metric Percentage");
		houseKeeperForm.underMetricPercentage.focus();
		return false;
	}
	if (numericPercentage(houseKeeperForm.underMetricPercentage) == false) {
		return false;
	}
	if (houseKeeperForm.underMetricSubject.value == "") {
		alert("Please Enter Your Under Metric Subject");
		houseKeeperForm.underMetricSubject.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(houseKeeperForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.highSchoolSubject) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.higherSecondaryBoard) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.higherSecondaryInstitute) == false) {
		return false;
	}
	if (numericPercentage(houseKeeperForm.higherSecondaryPercentage) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.higherSecondarySubject) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.graduationUniversity) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.graduationInstitute) == false) {
		return false;
	}
	if (numericPercentage(houseKeeperForm.graduationPercentage) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.graduationSubject) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.otherBoard) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.otherInstitute) == false) {
		return false;
	}
	if (numericPercentage(houseKeeperForm.otherPercentage) == false) {
		return false;
	}
	if (alphabet(houseKeeperForm.otherSubject) == false) {
		return false;
	}
	if ((document.getElementById("employmentYes").checked == false) && (document.getElementById("employmentNo").checked == false)) {
		alert("Please Select A Value For Your Present Employment");
		document.getElementById("employmentYes").focus();
		return false;
	}
	if (houseKeeperForm.employment[0].checked == true) {
		if (houseKeeperForm.experience.value == "") {
			alert("Please Fill In Your Work Experience");
			houseKeeperForm.experience.focus();
			return false;
		}
		if (houseKeeperForm.nameOfOrganization.value == "") {
			alert("Please Fill In The Name of Your Previous Organization");
			houseKeeperForm.nameOfOrganization.focus();
			return false;
		}
	}
	if (houseKeeperForm.nameOne.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		houseKeeperForm.nameOne.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.nameOne) == false) {
		return false;
	}
	if (houseKeeperForm.nameTwo.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		houseKeeperForm.nameTwo.focus();
		return false;
	}
	if (alphabet(houseKeeperForm.nameTwo) == false) {
		return false;
	}
	if (houseKeeperForm.addressOne.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		houseKeeperForm.addressOne.focus();
		return false;
	}
	if (houseKeeperForm.addressTwo.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		houseKeeperForm.addressTwo.focus();
		return false;
	}
	if (houseKeeperForm.pinCodeOne.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		houseKeeperForm.pinCodeOne.focus();
		return false;
	}
	if (numeric(houseKeeperForm.pinCodeOne) == false) {
		return false;
	}
	if (houseKeeperForm.pinCodeOne.value.length < 6 && houseKeeperForm.pinCodeOne.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		houseKeeperForm.pinCodeOne.value = "";
		houseKeeperForm.pinCodeOne.focus();
		return false;
	}
	if (houseKeeperForm.pinCodeTwo.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		houseKeeperForm.pinCodeTwo.focus();
		return false;
	}
	if (numeric(houseKeeperForm.pinCodeTwo) == false) {
		return false;
	}
	if (houseKeeperForm.pinCodeTwo.value.length < 6 && houseKeeperForm.pinCodeTwo.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		houseKeeperForm.pinCodeTwo.value = "";
		houseKeeperForm.pinCodeTwo.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}
// Ended by Vidya

// Added by Vidya
function validateFC() {  // Validation Function For Facilitator Registration Form (By Vidya)
	valid = true;
	if (facilitatorForm.name.value == "") {
		alert("Please Enter Your Name");
		facilitatorForm.name.focus();
		return false;
	}
	if (alphabet(facilitatorForm.name) == false) {
		return false;
	}
	if (facilitatorForm.fathersName.value == "") {
		alert("Please Enter Your Father's Name");
		facilitatorForm.fathersName.focus();
		return false;
	}
	if (alphabet(facilitatorForm.fathersName) == false) {
		return false;
	}
	if (facilitatorForm.mothersName.value == "") {
		alert("Please Enter Your Mother's Name");
		facilitatorForm.mothersName.focus();
		return false;
	}
	if (alphabet(facilitatorForm.mothersName) == false) {
		return false;
	}
	if (facilitatorForm.birthDate.value == "") {
		alert("Please Enter Your Date of Birth");
		facilitatorForm.birthDate.focus();
		return false;
	}
	if ((document.getElementById("genderMale").checked == false) && (document.getElementById("genderFemale").checked == false)) {
		alert("Please Select A Value For Gender");
		document.getElementById("genderMale").focus();
		return false;
	}
	if (facilitatorForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		facilitatorForm.bloodGroup.focus();
		return false;
	}
	if (numeric(facilitatorForm.telephoneNo) == false) {
		return false;
	}
	if (facilitatorForm.telephoneNo.value.length < 10 && facilitatorForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		facilitatorForm.telephoneNo.value = "";
		facilitatorForm.telephoneNo.focus();
		return false;
	}
	if (facilitatorForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		facilitatorForm.mobileNo.focus();
		return false;
	}
	if (numeric(facilitatorForm.mobileNo) == false) {
		return false;
	}
	if (facilitatorForm.mobileNo.value.length < 10 && facilitatorForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Mobile No.");
		facilitatorForm.mobileNo.value = "";
		facilitatorForm.mobileNo.focus();
		return false;
	}
//	if (facilitatorForm.email.value == "") {
//		alert("Please Enter Your Email Id");
//		facilitatorForm.email.focus();
//		return false;
//	}
	if (emailValidator(facilitatorForm.email) == false) {
		return false;
	}
	if (facilitatorForm.permanentAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		facilitatorForm.permanentAddress.focus();
		return false;
	}
	if (facilitatorForm.permanentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		facilitatorForm.permanentCountry.focus();
		return false;
	}
	if (facilitatorForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		facilitatorForm.permanentState.focus();
		return false;
	}
	if (facilitatorForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		facilitatorForm.permanentDistrict.focus();
		return false;
	}
	if (facilitatorForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		facilitatorForm.permanentCity.focus();
		return false;
	}
	if (facilitatorForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		facilitatorForm.permanentPostOffice.focus();
		return false;
	}
	if (numeric(facilitatorForm.permanentContactNo1) == false) {
		return false;
	}
	if (facilitatorForm.permanentContactNo1.value.length < 10 && facilitatorForm.permanentContactNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		facilitatorForm.permanentContactNo1.value = "";
		facilitatorForm.permanentContactNo1.focus();
		return false;
	}
	if (numeric(facilitatorForm.permanentContactNo2) == false) {
		return false;
	}
	if (facilitatorForm.permanentContactNo2.value.length < 10 && facilitatorForm.permanentContactNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		facilitatorForm.permanentContactNo2.value = "";
		facilitatorForm.permanentContactNo2.focus();
		return false;
	}
	if (facilitatorForm.presentAddress.value == "") {
		alert("Please Enter Your Present Address");
		facilitatorForm.presentAddress.focus();
		return false;
	}
	if (facilitatorForm.presentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		facilitatorForm.presentCountry.focus();
		return false;
	}
	if (facilitatorForm.presentState.selectedIndex == 0) {
		alert("Please Select State");
		facilitatorForm.presentState.focus();
		return false;
	}
	if (facilitatorForm.presentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		facilitatorForm.presentDistrict.focus();
		return false;
	}
	if (facilitatorForm.presentCity.selectedIndex == 0) {
		alert("Please Select City");
		facilitatorForm.presentCity.focus();
		return false;
	}
	if (facilitatorForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		facilitatorForm.presentPostOffice.focus();
		return false;
	}
	if (numeric(facilitatorForm.presentContactNo1) == false) {
		return false;
	}
	if (facilitatorForm.presentContactNo1.value.length < 10 && facilitatorForm.presentContactNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		facilitatorForm.presentContactNo1.value = "";
		facilitatorForm.presentContactNo1.focus();
		return false;
	}
	if (numeric(facilitatorForm.presentContactNo2) == false) {
		return false;
	}
	if (facilitatorForm.presentContactNo2.value.length < 10 && facilitatorForm.presentContactNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		facilitatorForm.presentContactNo2.value = "";
		facilitatorForm.presentContactNo2.focus();
		return false;
	}
//	if (facilitatorForm.height.value == "") {
//		alert("Please Enter Height");
//		facilitatorForm.height.focus();
//		return false;
//	}
//	if (facilitatorForm.chest.value == "") {
//		alert("Please Enter Chest");
//		facilitatorForm.chest.focus();
//		return false;
//	}
//	if (facilitatorForm.weight.value == "") {
//		alert("Please Enter Weight");
//		facilitatorForm.weight.focus();
//		return false;
//	}
	if ((facilitatorForm.otherLanguage.selectedIndex == 0) && (facilitatorForm.otherLanguageRead.checked == true || facilitatorForm.otherLanguageWrite.checked == true || facilitatorForm.otherLanguageSpeak.checked == true)) {
		alert("Please Select Language");
		facilitatorForm.otherLanguage.focus();
		return false;
	}
	if ((facilitatorForm.otherLanguage.selectedIndex != 0) && (facilitatorForm.otherLanguageRead.checked == false && facilitatorForm.otherLanguageWrite.checked == false && facilitatorForm.otherLanguageSpeak.checked == false)) {
		alert("Please Select A Relevant Option For Other Language");
		facilitatorForm.otherLanguage.focus();
		return false;
	}
	if ((document.getElementById("presentEmploymentYes").checked == false) && (document.getElementById("presentEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Present Employment");
		document.getElementById("presentEmploymentYes").focus();
		return false;
	}
	if (facilitatorForm.presentEmployment[0].checked == true) {
		if (facilitatorForm.nameofOrganization1.value == "") {
			alert("Please Fill In The Name of Your Present Organization");
			facilitatorForm.nameofOrganization1.focus();
			return false;
		}
//		if (facilitatorForm.orgDesignation1.value == "") {
//			alert("Please Enter Designation of Your Present Organization ");
//			facilitatorForm.orgDesignation1.focus();
//			return false;
//		}
		if (facilitatorForm.totalExperience.value == "") {
			alert("Please Fill In Your Work Experience");
			facilitatorForm.totalExperience.focus();
			return false;
		}
	}
	if ((document.getElementById("previousEmploymentYes").checked == false) && (document.getElementById("previousEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Previous Employment");
		document.getElementById("previousEmploymentYes").focus();
		return false;
	}
	if (facilitatorForm.previousEmployment[0].checked == true) {
		if (facilitatorForm.nameofOrganization2.value == "") {
			alert("Please Fill In The Name of Your Previous Organization");
			facilitatorForm.nameofOrganization2.focus();
			return false;
		}
//		if (facilitatorForm.orgDesignation2.value == "") {
//			alert("Please Enter Designation of Your Previous Organization ");
//			facilitatorForm.orgDesignation2.focus();
//			return false;
//		}
		if (facilitatorForm.totalExperience.value == "") {
			alert("Please Fill In Your Work Experience");
			facilitatorForm.totalExperience.focus();
			return false;
		}
	}
	if (facilitatorForm.underMetricBoard.value == "") {
		alert("Please Enter Your Under Metric Board / University");
		facilitatorForm.underMetricBoard.focus();
		return false;
	}
	if (alphabet(facilitatorForm.underMetricBoard) == false) {
		return false;
	}
	if (facilitatorForm.underMetricInstitute.value == "") {
		alert("Please Enter Your Under Metric Institute / College");
		facilitatorForm.underMetricInstitute.focus();
		return false;
	}
	if (alphabet(facilitatorForm.underMetricInstitute) == false) {
		return false;
	}
	if (facilitatorForm.underMetricCountry.selectedIndex == 0) {
		alert("Please Select Country");
		facilitatorForm.underMetricCountry.focus();
		return false;
	}
	if (facilitatorForm.underMetricState.selectedIndex == 0) {
		alert("Please Select State");
		facilitatorForm.underMetricState.focus();
		return false;
	}
	if (facilitatorForm.underMetricDistrict.selectedIndex == 0) {
		alert("Please Select District");
		facilitatorForm.underMetricDistrict.focus();
		return false;
	}
	if (facilitatorForm.underMetricCity.selectedIndex == 0) {
		alert("Please Select City");
		facilitatorForm.underMetricCity.focus();
		return false;
	}
	if (facilitatorForm.underMetricPercentage.value == "") {
		alert("Please Enter Your Under Metric Percentage");
		facilitatorForm.underMetricPercentage.focus();
		return false;
	}
	if (numericPercentage(facilitatorForm.underMetricPercentage) == false) {
		return false;
	}
	if (facilitatorForm.underMetricSubject.value == "") {
		alert("Please Enter Your Under Metric Subject");
		facilitatorForm.underMetricSubject.focus();
		return false;
	}
	if (alphabet(facilitatorForm.underMetricSubject) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(facilitatorForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.highSchoolSubject) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.higherSecondaryBoard) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.higherSecondaryInstitute) == false) {
		return false;
	}
	if (numericPercentage(facilitatorForm.higherSecondaryPercentage) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.higherSecondarySubject) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.graduationUniversity) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.graduationInstitute) == false) {
		return false;
	}
	if (numericPercentage(facilitatorForm.graduationPercentage) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.graduationSubject) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.otherBoard) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.otherInstitute) == false) {
		return false;
	}
	if (numericPercentage(facilitatorForm.otherPercentage) == false) {
		return false;
	}
	if (alphabet(facilitatorForm.otherSubject) == false) {
		return false;
	}
	if (facilitatorForm.nameResponsiblePerson1.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		facilitatorForm.nameResponsiblePerson1.focus();
		return false;
	}
	if (alphabet(facilitatorForm.nameResponsiblePerson1) == false) {
		return false;
	}
	if (facilitatorForm.addressResponsiblePerson1.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		facilitatorForm.addressResponsiblePerson1.focus();
		return false;
	}
	if (facilitatorForm.pinCodeResponsiblePerson1.value == "") {
		alert("Please Enter PIN Code");
		facilitatorForm.pinCodeResponsiblePerson1.focus();
		return false;
	}
	if (numeric(facilitatorForm.pinCodeResponsiblePerson1) == false) {
		return false;
	}
	if (facilitatorForm.pinCodeResponsiblePerson1.value.length < 6 && facilitatorForm.pinCodeResponsiblePerson1.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		facilitatorForm.pinCodeResponsiblePerson1.value = "";
		facilitatorForm.pinCodeResponsiblePerson1.focus();
		return false;
	}
	if (facilitatorForm.nameResponsiblePerson2.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		facilitatorForm.nameResponsiblePerson2.focus();
		return false;
	}
	if (alphabet(facilitatorForm.nameResponsiblePerson2) == false) {
		return false;
	}
	if (facilitatorForm.addressResponsiblePerson2.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		facilitatorForm.addressResponsiblePerson2.focus();
		return false;
	}
	if (facilitatorForm.pinCodeResponsiblePerson2.value == "") {
		alert("Please Enter PIN Code");
		facilitatorForm.pinCodeResponsiblePerson2.focus();
		return false;
	}
	if (numeric(facilitatorForm.pinCodeResponsiblePerson2) == false) {
		return false;
	}
	if (facilitatorForm.pinCodeResponsiblePerson2.value.length < 6 && facilitatorForm.pinCodeResponsiblePerson2.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		facilitatorForm.pinCodeResponsiblePerson2.value = "";
		facilitatorForm.pinCodeResponsiblePerson2.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}

// Ended by Vidya

// Added by Vidya
function validateDC() {  // Validation Function For Driver and Cleaner Registration Form (By Vidya)
	valid = true;
	if ((document.getElementById("typeDriver").checked == false) && (document.getElementById("typeCleaner").checked == false)) {
		alert("Please Select A Value For Type");
		document.getElementById("typeDriver").focus();
		return false;
	}
	if (driversAndCleanersForm.type[0].checked == true) {
		if (driversAndCleanersForm.category.selectedIndex == 0) {
			alert("Please Select Category");
			driversAndCleanersForm.category.focus();
			return false;
		}
	}
	if (driversAndCleanersForm.name.value == "") {
		alert("Please Enter Your Name");
		driversAndCleanersForm.name.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.name) == false) {
		return false;
	}
	if (driversAndCleanersForm.fathersName.value == "") {
		alert("Please Enter Your Father's Name");
		driversAndCleanersForm.fathersName.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.fathersName) == false) {
		return false;
	}
	if (driversAndCleanersForm.mothersName.value == "") {
		alert("Please Enter Your Mother's Name");
		driversAndCleanersForm.mothersName.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.mothersName) == false) {
		return false;
	}
	if (driversAndCleanersForm.birthDate.value == "") {
		alert("Please Enter Your Date of Birth");
		driversAndCleanersForm.birthDate.focus();
		return false;
	}
	if ((document.getElementById("genderMale").checked == false) && (document.getElementById("genderFemale").checked == false)) {
		alert("Please Select A Value For Gender");
		document.getElementById("genderMale").focus();
		return false;
	}
	if (driversAndCleanersForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		driversAndCleanersForm.bloodGroup.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.telephoneNo) == false) {
		return false;
	}
	if (driversAndCleanersForm.telephoneNo.value.length < 10 && driversAndCleanersForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		driversAndCleanersForm.telephoneNo.value = "";
		driversAndCleanersForm.telephoneNo.focus();
		return false;
	}
	if (driversAndCleanersForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		driversAndCleanersForm.mobileNo.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.mobileNo) == false) {
		return false;
	}
	if (driversAndCleanersForm.mobileNo.value.length < 10 && driversAndCleanersForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Mobile No.");
		driversAndCleanersForm.mobileNo.value = "";
		driversAndCleanersForm.mobileNo.focus();
		return false;
	}
//	if (driversAndCleanersForm.email.value == "") {
//		alert("Please Enter Your Email Id");
//		driversAndCleanersForm.email.focus();
//		return false;
//	}
	if (emailValidator(driversAndCleanersForm.email) == false) {
		return false;
	}
	if (driversAndCleanersForm.permanentAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		driversAndCleanersForm.permanentAddress.focus();
		return false;
	}
	if (driversAndCleanersForm.permanentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		driversAndCleanersForm.permanentCountry.focus();
		return false;
	}
	if (driversAndCleanersForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		driversAndCleanersForm.permanentState.focus();
		return false;
	}
	if (driversAndCleanersForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		driversAndCleanersForm.permanentDistrict.focus();
		return false;
	}
	if (driversAndCleanersForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		driversAndCleanersForm.permanentCity.focus();
		return false;
	}
	if (driversAndCleanersForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		driversAndCleanersForm.permanentPostOffice.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.permanentContactNo1) == false) {
		return false;
	}
	if (driversAndCleanersForm.permanentContactNo1.value.length < 10 && driversAndCleanersForm.permanentContactNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		driversAndCleanersForm.permanentContactNo1.value = "";
		driversAndCleanersForm.permanentContactNo1.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.permanentContactNo2) == false) {
		return false;
	}
	if (driversAndCleanersForm.permanentContactNo2.value.length < 10 && driversAndCleanersForm.permanentContactNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		driversAndCleanersForm.permanentContactNo2.value = "";
		driversAndCleanersForm.permanentContactNo2.focus();
		return false;
	}
	if (driversAndCleanersForm.presentAddress.value == "") {
		alert("Please Enter Your Present Address");
		driversAndCleanersForm.presentAddress.focus();
		return false;
	}
	if (driversAndCleanersForm.presentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		driversAndCleanersForm.presentCountry.focus();
		return false;
	}
	if (driversAndCleanersForm.presentState.selectedIndex == 0) {
		alert("Please Select State");
		driversAndCleanersForm.presentState.focus();
		return false;
	}
	if (driversAndCleanersForm.presentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		driversAndCleanersForm.presentDistrict.focus();
		return false;
	}
	if (driversAndCleanersForm.presentCity.selectedIndex == 0) {
		alert("Please Select City");
		driversAndCleanersForm.presentCity.focus();
		return false;
	}
	if (driversAndCleanersForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		driversAndCleanersForm.presentPostOffice.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.presentContactNo1) == false) {
		return false;
	}
	if (driversAndCleanersForm.presentContactNo1.value.length < 10 && driversAndCleanersForm.presentContactNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		driversAndCleanersForm.presentContactNo1.value = "";
		driversAndCleanersForm.presentContactNo1.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.presentContactNo2) == false) {
		return false;
	}
	if (driversAndCleanersForm.presentContactNo2.value.length < 10 && driversAndCleanersForm.presentContactNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		driversAndCleanersForm.presentContactNo2.value = "";
		driversAndCleanersForm.presentContactNo2.focus();
		return false;
	}
//	if (driversAndCleanersForm.height.value == "") {
//		alert("Please Enter Height");
//		driversAndCleanersForm.height.focus();
//		return false;
//	}
//	if (driversAndCleanersForm.chest.value == "") {
//		alert("Please Enter Chest");
//		driversAndCleanersForm.chest.focus();
//		return false;
//	}
//	if (driversAndCleanersForm.weight.value == "") {
//		alert("Please Enter Weight");
//		driversAndCleanersForm.weight.focus();
//		return false;
//	}
	if ((driversAndCleanersForm.otherLanguage.selectedIndex == 0) && (driversAndCleanersForm.otherLanguageRead.checked == true || driversAndCleanersForm.otherLanguageWrite.checked == true || driversAndCleanersForm.otherLanguageSpeak.checked == true)) {
		alert("Please Select Language");
		driversAndCleanersForm.otherLanguage.focus();
		return false;
	}
	if ((driversAndCleanersForm.otherLanguage.selectedIndex != 0) && (driversAndCleanersForm.otherLanguageRead.checked == false && driversAndCleanersForm.otherLanguageWrite.checked == false && driversAndCleanersForm.otherLanguageSpeak.checked == false)) {
		alert("Please Select A Relevant Option For Other Language");
		driversAndCleanersForm.otherLanguage.focus();
		return false;
	}
	if ((document.getElementById("presentEmploymentYes").checked == false) && (document.getElementById("presentEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Present Employment");
		document.getElementById("presentEmploymentYes").focus();
		return false;
	}
	if (driversAndCleanersForm.presentEmployment[0].checked == true) {
		if (driversAndCleanersForm.nameofOrganization1.value == "") {
			alert("Please Fill In The Name of Your Present Organization");
			driversAndCleanersForm.nameofOrganization1.focus();
			return false;
		}
		if (driversAndCleanersForm.fromDateOrg1.value == "") {
			alert("Please Fill In the Date");
			driversAndCleanersForm.fromDateOrg1.focus();
			return false;
		}
		if (driversAndCleanersForm.toDateOrg1.value == "") {
			alert("Please Fill In the Date");
			driversAndCleanersForm.toDateOrg1.focus();
			return false;
		}
//		if (driversAndCleanersForm.orgDesignation1.value == "") {
//			alert("Please Enter Designation of Your Present Organization");
//			driversAndCleanersForm.orgDesignation1.focus();
//			return false;
//		}
		if (driversAndCleanersForm.totalExperience.value == "") {
			alert("Please Fill In Your Work Experience");
			driversAndCleanersForm.totalExperience.focus();
			return false;
		}
		if (driversAndCleanersForm.currentOwnerName.value == "") {
			alert("Please Enter The Name Of Your Present Owner");
			driversAndCleanersForm.currentOwnerName.focus();
			return false;
		}
		if (alphabet(driversAndCleanersForm.currentOwnerName) == false) {
			return false;
		}
		if (driversAndCleanersForm.currentOwnerAddress.value == "") {
			alert("Please Enter the Address Of Your Present Owner");
			driversAndCleanersForm.currentOwnerAddress.focus();
			return false;
		}
		if (driversAndCleanersForm.currentOwnerCountry.selectedIndex == 0) {
			alert("Please Select Country");
			driversAndCleanersForm.currentOwnerCountry.focus();
			return false;
		}
		if (driversAndCleanersForm.currentOwnerState.selectedIndex == 0) {
			alert("Please Select State");
			driversAndCleanersForm.currentOwnerState.focus();
			return false;
		}
		if (driversAndCleanersForm.currentOwnerDistrict.selectedIndex == 0) {
			alert("Please Select District");
			driversAndCleanersForm.currentOwnerDistrict.focus();
			return false;
		}
		if (driversAndCleanersForm.currentOwnerCity.selectedIndex == 0) {
			alert("Please Select City");
			driversAndCleanersForm.currentOwnerCity.focus();
			return false;
		}
		if (driversAndCleanersForm.currentOwnerPostOffice.selectedIndex == 0) {
			alert("Please Select Post Office");
			driversAndCleanersForm.currentOwnerPostOffice.focus();
			return false;
		}
		if (numeric(driversAndCleanersForm.currentOwnerPhoneNo) == false) {
			return false;
		}
		if (driversAndCleanersForm.currentOwnerPhoneNo.value.length < 10 && driversAndCleanersForm.currentOwnerPhoneNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Phone No.");
			driversAndCleanersForm.currentOwnerPhoneNo.value = "";
			driversAndCleanersForm.currentOwnerPhoneNo.focus();
			return false;
		}
		if (numeric(driversAndCleanersForm.currentOwnerMobileNo) == false) {
			return false;
		}
		if (driversAndCleanersForm.currentOwnerMobileNo.value.length < 10 && driversAndCleanersForm.currentOwnerMobileNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Mobile No.");
			driversAndCleanersForm.currentOwnerMobileNo.value = "";
			driversAndCleanersForm.currentOwnerMobileNo.focus();
			return false;
		}
	}
	if ((document.getElementById("previousEmploymentYes").checked == false) && (document.getElementById("previousEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Previous Employment");
		document.getElementById("previousEmploymentYes").focus();
		return false;
	}
	if (driversAndCleanersForm.previousEmployment[0].checked == true) {
		if (driversAndCleanersForm.nameofOrganization2.value == "") {
			alert("Please Fill In The Name of Your Previous Organization");
			driversAndCleanersForm.nameofOrganization2.focus();
			return false;
		}
		if (driversAndCleanersForm.fromDateOrg2.value == "") {
			alert("Please Fill In the Date");
			driversAndCleanersForm.fromDateOrg2.focus();
			return false;
		}
		if (driversAndCleanersForm.toDateOrg2.value == "") {
			alert("Please Fill In the Date");
			driversAndCleanersForm.toDateOrg2.focus();
			return false;
		}
//		if (driversAndCleanersForm.orgDesignation2.value == "") {
//			alert("Please Enter Designation of Your Previous Organization ");
//			driversAndCleanersForm.orgDesignation2.focus();
//			return false;
//		}
		if (driversAndCleanersForm.totalExperience.value == "") {
			alert("Please Fill In Your Work Experience");
			driversAndCleanersForm.totalExperience.focus();
			return false;
		}
		if (driversAndCleanersForm.previousOwnerName.value == "") {
			alert("Please Enter The Name Of Your Previous Owner");
			driversAndCleanersForm.previousOwnerName.focus();
			return false;
		}
		if (alphabet(driversAndCleanersForm.previousOwnerName) == false) {
			return false;
		}
		if (driversAndCleanersForm.previousOwnerAddress.value == "") {
			alert("Please Enter The Address Of Your Previous Owner");
			driversAndCleanersForm.previousOwnerAddress.focus();
			return false;
		}
		if (driversAndCleanersForm.previousOwnerCountry.selectedIndex == 0) {
			alert("Please Select Country");
			driversAndCleanersForm.previousOwnerCountry.focus();
			return false;
		}
		if (driversAndCleanersForm.previousOwnerState.selectedIndex == 0) {
			alert("Please Select State");
			driversAndCleanersForm.previousOwnerState.focus();
			return false;
		}
		if (driversAndCleanersForm.previousOwnerDistrict.selectedIndex == 0) {
			alert("Please Select District");
			driversAndCleanersForm.previousOwnerDistrict.focus();
			return false;
		}
		if (driversAndCleanersForm.previousOwnerCity.selectedIndex == 0) {
			alert("Please Select City");
			driversAndCleanersForm.previousOwnerCity.focus();
			return false;
		}
		if (driversAndCleanersForm.previousOwnerPostOffice.selectedIndex == 0) {
			alert("Please Select Post Office");
			driversAndCleanersForm.previousOwnerPostOffice.focus();
			return false;
		}
		if (numeric(driversAndCleanersForm.previousOwnerPhoneNo) == false) {
			return false;
		}
		if (driversAndCleanersForm.previousOwnerPhoneNo.value.length < 10 && driversAndCleanersForm.previousOwnerPhoneNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Phone No.");
			driversAndCleanersForm.previousOwnerPhoneNo.value = "";
			driversAndCleanersForm.previousOwnerPhoneNo.focus();
			return false;
		}
		if (numeric(driversAndCleanersForm.previousOwnerMobileNo) == false) {
			return false;
		}
		if (driversAndCleanersForm.previousOwnerMobileNo.value.length < 10 && driversAndCleanersForm.previousOwnerMobileNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Mobile No.");
			driversAndCleanersForm.previousOwnerMobileNo.value = "";
			driversAndCleanersForm.previousOwnerMobileNo.focus();
			return false;
		}
	}
	if (driversAndCleanersForm.underMetricBoard.value == "") {
		alert("Please Enter Your Under Metric Board");
		driversAndCleanersForm.underMetricBoard.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.underMetricBoard) == false) {
		return false;
	}
	if (driversAndCleanersForm.underMetricInstitute.value == "") {
		alert("Please Enter the Name of Your Under Metric Institute");
		driversAndCleanersForm.underMetricInstitute.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.underMetricInstitute) == false) {
		return false;
	}
	if (driversAndCleanersForm.underMetricCountry.selectedIndex == 0) {
		alert("Please Select Your Under Metric Country");
		driversAndCleanersForm.underMetricCountry.focus();
		return false;
	}
	if (driversAndCleanersForm.underMetricState.selectedIndex == 0) {
		alert("Please Select Your Under Metric State");
		driversAndCleanersForm.underMetricState.focus();
		return false;
	}
	if (driversAndCleanersForm.underMetricDistrict.selectedIndex == 0) {
		alert("Please Select Your Under Metric District");
		driversAndCleanersForm.underMetricDistrict.focus();
		return false;
	}
	if (driversAndCleanersForm.underMetricCity.selectedIndex == 0) {
		alert("Please Select Your Under Metric City");
		driversAndCleanersForm.underMetricCity.focus();
		return false;
	}
	if (driversAndCleanersForm.underMetricPercentage.value == "") {
		alert("Please Enter Your Under Metric Percentage");
		driversAndCleanersForm.underMetricPercentage.focus();
		return false;
	}
	if (numericPercentage(driversAndCleanersForm.underMetricPercentage) == false) {
		return false;
	}
	if (driversAndCleanersForm.underMetricSubject.value == "") {
		alert("Please Enter Your Under Metric Subject");
		driversAndCleanersForm.underMetricSubject.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.underMetricSubject) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(driversAndCleanersForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.highSchoolSubject) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.higherSecondaryBoard) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.higherSecondaryInstitute) == false) {
		return false;
	}
	if (numericPercentage(driversAndCleanersForm.higherSecondaryPercentage) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.higherSecondarySubject) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.graduationUniversity) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.graduationInstitute) == false) {
		return false;
	}
	if (numericPercentage(driversAndCleanersForm.graduationPercentage) == false) {
		return false;
	}
	if (alphabet(driversAndCleanersForm.graduationSubject) == false) {
		return false;
	}
//	if (alphabet(driversAndCleanersForm.otherBoard) == false) {
//		return false;
//	}
//	if (alphabet(driversAndCleanersForm.otherInstitute) == false) {
//		return false;
//	}
//	if (numericPercentage(driversAndCleanersForm.otherPercentage) == false) {
//		return false;
//	}
//	if (alphabet(driversAndCleanersForm.otherSubject) == false) {
//		return false;
//	}
	if (driversAndCleanersForm.drivingLicenseNo.value == "") {
		alert("Please Enter Your Driving License No.");
		driversAndCleanersForm.drivingLicenseNo.focus();
		return false;
	}
	if (driversAndCleanersForm.drivingIssuingAuthority.value == "") {
		alert("Please Enter The Issuing Authority of Your Driving License.");
		driversAndCleanersForm.drivingIssuingAuthority.focus();
		return false;
	}
	if (driversAndCleanersForm.drivingValidationDetails.value == "") {
		alert("Please Enter The Validation Details of Your Driving License.");
		driversAndCleanersForm.drivingValidationDetails.focus();
		return false;
	}
	if ((document.getElementById("ownVehicle").checked == false) && (document.getElementById("ownerVehicle").checked == false)) {
		alert("Please Select A Value For Your Vehicle Type");
		document.getElementById("ownerVehicle").focus();
		return false;
	}
	if (driversAndCleanersForm.vehicleNo.value == "") {
		alert("Please Enter Your Vehicle No.");
		driversAndCleanersForm.vehicleNo.focus();
		return false;
	}
	if (driversAndCleanersForm.vehicleIssuingAuthority.value == "") {
		alert("Please Enter The Issuing Authority of Your Vehicle");
		driversAndCleanersForm.vehicleIssuingAuthority.focus();
		return false;
	}
	if (driversAndCleanersForm.vehicleType[0].checked == true) {
		if (driversAndCleanersForm.vehicleRegisteredOwner.value == "") {
			alert("Please Fill In The Name of Your Registered Owner");
			driversAndCleanersForm.vehicleRegisteredOwner.focus();
			return false;
		}
		if (driversAndCleanersForm.vehicleOwnerAddress.value == "") {
			alert("Please Fill In The Name of Your Owner Address");
			driversAndCleanersForm.vehicleOwnerAddress.focus();
			return false;
		}
		if (numeric(driversAndCleanersForm.vehicleOwnerPhoneNo) == false) {
			return false;
		}
		if (driversAndCleanersForm.vehicleOwnerPhoneNo.value.length < 10 && driversAndCleanersForm.vehicleOwnerPhoneNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Phone No.");
			driversAndCleanersForm.vehicleOwnerPhoneNo.value = "";
			driversAndCleanersForm.vehicleOwnerPhoneNo.focus();
			return false;
		}
	}
	if (alphabet(driversAndCleanersForm.agentName) == false) {
		return false;
	}
	if (numeric(driversAndCleanersForm.agentPhoneNo) == false) {
		return false;
	}
	if (driversAndCleanersForm.agentPhoneNo.value.length < 10 && driversAndCleanersForm.agentPhoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		driversAndCleanersForm.agentPhoneNo.value = "";
		driversAndCleanersForm.agentPhoneNo.focus();
		return false;
	}
	if (driversAndCleanersForm.nameResponsiblePerson1.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		driversAndCleanersForm.nameResponsiblePerson1.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.nameResponsiblePerson1) == false) {
		return false;
	}
	if (driversAndCleanersForm.addressResponsiblePerson1.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		driversAndCleanersForm.addressResponsiblePerson1.focus();
		return false;
	}
	if (driversAndCleanersForm.pinCodeResponsiblePerson1.value == "") {
		alert("Please Enter PIN Code");
		driversAndCleanersForm.pinCodeResponsiblePerson1.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.pinCodeResponsiblePerson1) == false) {
		return false;
	}
	if (driversAndCleanersForm.pinCodeResponsiblePerson1.value.length < 6 && driversAndCleanersForm.pinCodeResponsiblePerson1.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		driversAndCleanersForm.pinCodeResponsiblePerson1.value = "";
		driversAndCleanersForm.pinCodeResponsiblePerson1.focus();
		return false;
	}
	if (driversAndCleanersForm.nameResponsiblePerson2.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		driversAndCleanersForm.nameResponsiblePerson2.focus();
		return false;
	}
	if (alphabet(driversAndCleanersForm.nameResponsiblePerson2) == false) {
		return false;
	}
	if (driversAndCleanersForm.addressResponsiblePerson2.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		driversAndCleanersForm.addressResponsiblePerson2.focus();
		return false;
	}
	if (driversAndCleanersForm.pinCodeResponsiblePerson2.value == "") {
		alert("Please Enter PIN Code");
		driversAndCleanersForm.pinCodeResponsiblePerson2.focus();
		return false;
	}
	if (numeric(driversAndCleanersForm.pinCodeResponsiblePerson2) == false) {
		return false;
	}
	if (driversAndCleanersForm.pinCodeResponsiblePerson2.value.length < 6 && driversAndCleanersForm.pinCodeResponsiblePerson2.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		driversAndCleanersForm.pinCodeResponsiblePerson2.value = "";
		driversAndCleanersForm.pinCodeResponsiblePerson2.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}
// Ended by Vidya

// Added by Vidya
function validateDH() { // Validation Function For Domestic Helper's Registration Form (By Vidya)
	valid = true;
	if (domesticServantForm.category.selectedIndex == 0) {
		alert("Please Select A Category");
		domesticServantForm.category.focus();
		return false;
	}
	if (domesticServantForm.name.value == "") {
		alert("Please Enter Your Name");
		domesticServantForm.name.focus();
		return false;
	}
	if (alphabet(domesticServantForm.name) == false) {
		return false;
	}
	if (domesticServantForm.fathersName.value == "") {
		alert("Please Enter Your Father's Name");
		domesticServantForm.fathersName.focus();
		return false;
	}
	if (alphabet(domesticServantForm.fathersName) == false) {
		return false;
	}
	if (domesticServantForm.mothersName.value == "") {
		alert("Please Enter Your Mother's Name");
		domesticServantForm.mothersName.focus();
		return false;
	}
	if (alphabet(domesticServantForm.mothersName) == false) {
		return false;
	}
	if (domesticServantForm.birthDate.value == "") {
		alert("Please Enter Your Date of Birth");
		domesticServantForm.birthDate.focus();
		return false;
	}
	var radioSelected = false;
	for (i = 0; i < domesticServantForm.gender.length; i++) {
		if (domesticServantForm.gender[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select Gender");
		return (false);
	}
	if (domesticServantForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		domesticServantForm.bloodGroup.focus();
		return false;
	}
	if (domesticServantForm.email.value == "") {
		alert("Please Enter Your e-Mail Id");
		domesticServantForm.email.focus();
		return false;
	}
	if (emailValidator(domesticServantForm.email) == false) {
		return false;
	}
	if (numeric(domesticServantForm.telephoneNo) == false) {
		return false;
	}
	if (domesticServantForm.telephoneNo.value.length < 10 && domesticServantForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		domesticServantForm.telephoneNo.value = "";
		domesticServantForm.telephoneNo.focus();
		return false;
	}
	if (domesticServantForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		domesticServantForm.mobileNo.focus();
		return false;
	}
	if (numeric(domesticServantForm.mobileNo) == false) {
		return false;
	}
	if (domesticServantForm.mobileNo.value.length < 10 && domesticServantForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		domesticServantForm.mobileNo.value = "";
		domesticServantForm.mobileNo.focus();
		return false;
	}
	if (domesticServantForm.permanentAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		domesticServantForm.permanentAddress.focus();
		return false;
	}
	if (domesticServantForm.permanentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		domesticServantForm.permanentCountry.focus();
		return false;
	}
	if (domesticServantForm.permanentState.selectedIndex == 0) {
		alert("Please Select State");
		domesticServantForm.permanentState.focus();
		return false;
	}
	if (domesticServantForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		domesticServantForm.permanentDistrict.focus();
		return false;
	}
	if (domesticServantForm.permanentCity.selectedIndex == 0) {
		alert("Please Select City");
		domesticServantForm.permanentCity.focus();
		return false;
	}
	if (domesticServantForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		domesticServantForm.permanentPostOffice.focus();
		return false;
	}
	if (numeric(domesticServantForm.permanentPhoneNo1) == false) {
		return false;
	}
	if (domesticServantForm.permanentPhoneNo1.value.length < 10 && domesticServantForm.permanentPhoneNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		domesticServantForm.permanentPhoneNo1.value = "";
		domesticServantForm.permanentPhoneNo1.focus();
		return false;
	}
	if (numeric(domesticServantForm.permanentPhoneNo2) == false) {
		return false;
	}
	if (domesticServantForm.permanentPhoneNo2.value.length < 10 && domesticServantForm.permanentPhoneNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		domesticServantForm.permanentPhoneNo2.value = "";
		domesticServantForm.permanentPhoneNo2.focus();
		return false;
	}
	if (domesticServantForm.presentAddress.value == "") {
		alert("Please Enter Your Present Address");
		domesticServantForm.presentAddress.focus();
		return false;
	}
	if (domesticServantForm.presentCountry.selectedIndex == 0) {
		alert("Please Select Country");
		domesticServantForm.presentCountry.focus();
		return false;
	}
	if (domesticServantForm.presentState.selectedIndex == 0) {
		alert("Please Select State");
		domesticServantForm.presentState.focus();
		return false;
	}
	if (domesticServantForm.presentDistrict.selectedIndex == 0) {
		alert("Plese Select District");
		domesticServantForm.presentDistrict.focus();
		return false;
	}
	if (domesticServantForm.presentCity.selectedIndex == 0) {
		alert("Please Select City");
		domesticServantForm.presentCity.focus();
		return false;
	}
	if (domesticServantForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		domesticServantForm.presentPostOffice.focus();
		return false;
	}
	if (numeric(domesticServantForm.presentPhoneNo1) == false) {
		return false;
	}
	if (domesticServantForm.presentPhoneNo1.value.length < 10 && domesticServantForm.presentPhoneNo1.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		domesticServantForm.presentPhoneNo1.value = "";
		domesticServantForm.presentPhoneNo1.focus();
		return false;
	}
	if (numeric(domesticServantForm.presentPhoneNo2) == false) {
		return false;
	}
	if (domesticServantForm.presentPhoneNo2.value.length < 10 && domesticServantForm.presentPhoneNo2.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		domesticServantForm.presentPhoneNo2.value = "";
		domesticServantForm.presentPhoneNo2.focus();
		return false;
	}
	if (domesticServantForm.height.value == "") {
		alert("Please Enter Height");
		domesticServantForm.height.focus();
		return false;
	}
	if (domesticServantForm.chest.value == "") {
		alert("Please Enter Chest");
		domesticServantForm.chest.focus();
		return false;
	}
	if (domesticServantForm.weight.value == "") {
		alert("Please Enter Weight");
		domesticServantForm.weight.focus();
		return false;
	}
	if ((domesticServantForm.otherLanguage.selectedIndex == 0) && (domesticServantForm.otherLanguageRead.checked == true || domesticServantForm.otherLanguageWrite.checked == true || domesticServantForm.otherLanguageSpeak.checked == true)) {
		alert("Please Select Language");
		domesticServantForm.otherLanguage.focus();
		return false;
	}
	if ((domesticServantForm.otherLanguage.selectedIndex != 0) && (domesticServantForm.otherLanguageRead.checked == false && domesticServantForm.otherLanguageWrite.checked == false && domesticServantForm.otherLanguageSpeak.checked == false)) {
		alert("Please Select A Relevant Option For Other Language");
		domesticServantForm.otherLanguage.focus();
		return false;
	}
	if ((document.getElementById("employmentYes").checked == false) && (document.getElementById("employmentNo").checked == false)) {
		alert("Please Select A Value For Your Present Employment");
		document.getElementById("employmentYes").focus();
		return false;
	}
	if (domesticServantForm.employment[0].checked == true) {
		if (domesticServantForm.experience.value == "") {
			alert("Please Fill In Your Work Experience");
			domesticServantForm.experience.focus();
			return false;
		}
		if (domesticServantForm.nameOfOrganization.value == "") {
			alert("Please Fill In The Name of Your Present Organization");
			domesticServantForm.nameOfOrganization.focus();
			return false;
		}
		if (domesticServantForm.fromDatePresent.value == "") {
			alert("Please Fill In the Date");
			domesticServantForm.fromDatePresent.focus();
			return false;
		}
		if (domesticServantForm.toDatePresent.value == "") {
			alert("Please Fill In the Date");
			domesticServantForm.toDatePresent.focus();
			return false;
		}
		if (domesticServantForm.designation.value == "") {
			alert("Please Fill In the Designation");
			domesticServantForm.designation.focus();
			return false;
		}
		if (domesticServantForm.currentOwnerName.value == "") {
			alert("Please Enter The Name Of Your Present Owner");
			domesticServantForm.currentOwnerName.focus();
			return false;
		}
		if (alphabet(domesticServantForm.currentOwnerName) == false) {
			return false;
		}
		if (domesticServantForm.currentOwnerAddress.value == "") {
			alert("Please Enter the Address Of Your Present Owner");
			domesticServantForm.currentOwnerAddress.focus();
			return false;
		}
		if (domesticServantForm.currentOwnerCountry.selectedIndex == 0) {
			alert("Please Select Country");
			domesticServantForm.currentOwnerCountry.focus();
			return false;
		}
		if (domesticServantForm.currentOwnerState.selectedIndex == 0) {
			alert("Please Select State");
			domesticServantForm.currentOwnerState.focus();
			return false;
		}
		if (domesticServantForm.currentOwnerDistrict.selectedIndex == 0) {
			alert("Please Select District");
			domesticServantForm.currentOwnerDistrict.focus();
			return false;
		}
		if (domesticServantForm.currentOwnerCity.selectedIndex == 0) {
			alert("Please Select City");
			domesticServantForm.currentOwnerCity.focus();
			return false;
		}
		if (domesticServantForm.currentOwnerPostOffice.selectedIndex == 0) {
			alert("Please Select Post Office");
			domesticServantForm.currentOwnerPostOffice.focus();
			return false;
		}
		if (numeric(domesticServantForm.currentOwnerTelephoneNo) == false) {
			return false;
		}
		if (domesticServantForm.currentOwnerTelephoneNo.value.length < 10 && domesticServantForm.currentOwnerTelephoneNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Phone No.");
			domesticServantForm.currentOwnerTelephoneNo.value = "";
			domesticServantForm.currentOwnerTelephoneNo.focus();
			return false;
		}
		if (numeric(domesticServantForm.currentOwnerMobileNo) == false) {
			return false;
		}
		if (domesticServantForm.currentOwnerMobileNo.value.length < 10 && domesticServantForm.currentOwnerMobileNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Mobile No.");
			domesticServantForm.currentOwnerMobileNo.value = "";
			domesticServantForm.currentOwnerMobileNo.focus();
			return false;
		}
	}
	if ((document.getElementById("previousEmploymentYes").checked == false) && (document.getElementById("previousEmploymentNo").checked == false)) {
		alert("Please Select A Value For Your Previous Employment");
		document.getElementById("previousEmploymentYes").focus();
		return false;
	}
	if (domesticServantForm.previousEmployment[0].checked == true) {
		if (domesticServantForm.experience.value == "") {
			alert("Please Fill In Your Work Experience");
			domesticServantForm.experience.focus();
			return false;
		}
		if (domesticServantForm.nameOfOrganization1.value == "") {
			alert("Please Select the Name of Your Previous Organization");
			domesticServantForm.nameOfOrganization1.focus();
			return false;
		}
		if (domesticServantForm.fromDatePrevious.value == "") {
			alert("Please Select A Date");
			domesticServantForm.fromDatePrevious.focus();
			return false;
		}
		if (domesticServantForm.toDatePrevious.value == "") {
			alert("Please Select A Date");
			domesticServantForm.toDatePrevious.focus();
			return false;
		}
		if (domesticServantForm.designation1.value == "") {
			alert("Please Enter Designation");
			domesticServantForm.designation1.focus();
			return false;
		}
		if (domesticServantForm.previousOwnerName.value == "") {
			alert("Please Enter The Name Of Your Previous Owner");
			domesticServantForm.previousOwnerName.focus();
			return false;
		}
		if (alphabet(domesticServantForm.previousOwnerName) == false) {
			return false;
		}
		if (domesticServantForm.previousOwnerAddress.value == "") {
			alert("Please Enter The Address Of Your Previous Owner");
			domesticServantForm.previousOwnerAddress.focus();
			return false;
		}
		if (domesticServantForm.previousOwnerCountry.selectedIndex == 0) {
			alert("Please Select Country");
			domesticServantForm.previousOwnerCountry.focus();
			return false;
		}
		if (domesticServantForm.previousOwnerState.selectedIndex == 0) {
			alert("Please Select State");
			domesticServantForm.previousOwnerState.focus();
			return false;
		}
		if (domesticServantForm.previousOwnerDistrict.selectedIndex == 0) {
			alert("Please Select District");
			domesticServantForm.previousOwnerDistrict.focus();
			return false;
		}
		if (domesticServantForm.previousOwnerCity.selectedIndex == 0) {
			alert("Please Select City");
			domesticServantForm.previousOwnerCity.focus();
			return false;
		}
		if (domesticServantForm.previousOwnerPostOffice.selectedIndex == 0) {
			alert("Please Select Post Office");
			domesticServantForm.previousOwnerPostOffice.focus();
			return false;
		}
		if (numeric(domesticServantForm.previousOwnerTelephoneNo) == false) {
			return false;
		}
		if (domesticServantForm.previousOwnerTelephoneNo.value.length < 10 && domesticServantForm.previousOwnerTelephoneNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Phone No.");
			domesticServantForm.previousOwnerTelephoneNo.value = "";
			domesticServantForm.previousOwnerTelephoneNo.focus();
			return false;
		}
		if (numeric(domesticServantForm.previousOwnerMobileNo) == false) {
			return false;
		}
		if (domesticServantForm.previousOwnerMobileNo.value.length < 10 && domesticServantForm.previousOwnerMobileNo.value.length > 1) {
			alert("Please Enter a Valid Ten Digit Mobile No.");
			domesticServantForm.previousOwnerMobileNo.value = "";
			domesticServantForm.previousOwnerMobileNo.focus();
			return false;
		}
	}
	if (domesticServantForm.underMetricBoard.value == "") {
		alert("Please Enter Your Under Metric Board");
		domesticServantForm.underMetricBoard.focus();
		return false;
	}
	if (alphabet(domesticServantForm.underMetricBoard) == false) {
		return false;
	}
	if (domesticServantForm.underMetricInstitute.value == "") {
		alert("Please Enter the Name of Your Under Metric Institute");
		domesticServantForm.underMetricInstitute.focus();
		return false;
	}
	if (alphabet(domesticServantForm.underMetricInstitute) == false) {
		return false;
	}
	if (domesticServantForm.underMetricCountry.selectedIndex == 0) {
		alert("Please Select Your Under Metric Country");
		domesticServantForm.underMetricCountry.focus();
		return false;
	}
	if (domesticServantForm.underMetricState.selectedIndex == 0) {
		alert("Please Select Your Under Metric State");
		domesticServantForm.underMetricState.focus();
		return false;
	}
	if (domesticServantForm.underMetricDistrict.selectedIndex == 0) {
		alert("Please Select Your Under Metric District");
		domesticServantForm.underMetricDistrict.focus();
		return false;
	}
	if (domesticServantForm.underMetricCity.selectedIndex == 0) {
		alert("Please Select Your Under Metric City");
		domesticServantForm.underMetricCity.focus();
		return false;
	}
	if (domesticServantForm.underMetricPercentage.value == "") {
		alert("Please Enter Your Under Metric Percentage");
		domesticServantForm.underMetricPercentage.focus();
		return false;
	}
	if (numericPercentage(domesticServantForm.underMetricPercentage) == false) {
		return false;
	}
	if (domesticServantForm.underMetricSubject.value == "") {
		alert("Please Enter Your Under Metric Subject");
		domesticServantForm.underMetricSubject.focus();
		return false;
	}
	if (alphabet(domesticServantForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(domesticServantForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.highSchoolSubject) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.higherSecondaryBoard) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.higherSecondaryInstitute) == false) {
		return false;
	}
	if (numericPercentage(domesticServantForm.higherSecondaryPercentage) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.higherSecondarySubject) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.graduationUniversity) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.graduationInstitute) == false) {
		return false;
	}
	if (numericPercentage(domesticServantForm.graduationPercentage) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.graduationSubject) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.otherBoard) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.otherInstitute) == false) {
		return false;
	}
	if (numericPercentage(domesticServantForm.otherPercentage) == false) {
		return false;
	}
	if (alphabet(domesticServantForm.otherSubject) == false) {
		return false;
	}
	if (domesticServantForm.criminalOffence[0].checked == true) {
		if (domesticServantForm.caseRegistration.value == "") {
			alert("Please Fill In the Details of Case Registered Against You");
			domesticServantForm.caseRegistration.focus();
			return false;
		}
		if (domesticServantForm.underSection.value == "") {
			alert("Please Fill In the IPC Section");
			domesticServantForm.underSection.focus();
			return false;
		}
		if (domesticServantForm.arrested.checked == false) {
			alert("Please Select a Value");
			domesticServantForm.arrested.focus();
			return false;
		}
		if (domesticServantForm.caseStatus.value == "") {
			alert("Please Select the Present Status of Your Case");
			domesticServantForm.caseStatus.focus();
			return false;
		}
		if (domesticServantForm.caseDate.value == "") {
			alert("Please Select the Case Date");
			domesticServantForm.caseDate.focus();
			return false;
		}
		if (domesticServantForm.place.value == "") {
			alert("Please Enter the Place of Case Registration");
			domesticServantForm.place.focus();
			return false;
		}
	}
	if (domesticServantForm.nameOne.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		domesticServantForm.nameOne.focus();
		return false;
	}
	if (alphabet(domesticServantForm.nameOne) == false) {
		return false;
	}
	if (domesticServantForm.nameTwo.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		domesticServantForm.nameTwo.focus();
		return false;
	}
	if (alphabet(domesticServantForm.nameTwo) == false) {
		return false;
	}
	if (domesticServantForm.addressOne.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		domesticServantForm.addressOne.focus();
		return false;
	}
	if (domesticServantForm.addressTwo.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		domesticServantForm.addressTwo.focus();
		return false;
	}
	if (domesticServantForm.pinCodeOne.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		domesticServantForm.pinCodeOne.focus();
		return false;
	}
	if (numeric(domesticServantForm.pinCodeOne) == false) {
		return false;
	}
	if (domesticServantForm.pinCodeOne.value.length < 6 && domesticServantForm.pinCodeOne.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		domesticServantForm.pinCodeOne.value = "";
		domesticServantForm.pinCodeOne.focus();
		return false;
	}
	if (domesticServantForm.pinCodeTwo.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		domesticServantForm.pinCodeTwo.focus();
		return false;
	}
	if (numeric(domesticServantForm.pinCodeTwo) == false) {
		return false;
	}
	if (domesticServantForm.pinCodeTwo.value.length < 6 && domesticServantForm.pinCodeTwo.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		domesticServantForm.pinCodeTwo.value = "";
		domesticServantForm.pinCodeTwo.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}
// Ended by Vidya

// Added by Vidya
function validateSC() { // Validation Function For Senior Citizen Registration Form (By Vidya)
		
	if (seniorCitezenForm.name.value == "") {
		alert("Please Enter Your Name");
		seniorCitezenForm.name.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.name) == false) {
		return false;
	}
		
	if (seniorCitezenForm.dob.value == "") {
		alert("Please Enter Your Date of Birth");
		seniorCitezenForm.dob.focus();
		return false;
	}
	var radioSelected = false;
	for (i = 0; i < seniorCitezenForm.gender.length; i++) {
		if (seniorCitezenForm.gender[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select Gender");
		return (false);
	}
	if (seniorCitezenForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		seniorCitezenForm.bloodGroup.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.telephoneNo) == false) {
		return false;
	}
	if (seniorCitezenForm.telephoneNo.value.length < 10 && seniorCitezenForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.telephoneNo.value = "";
		seniorCitezenForm.telephoneNo.focus();
		return false;
	}
	if (seniorCitezenForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		seniorCitezenForm.mobileNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.mobileNo) == false) {
		return false;
	}
	if (seniorCitezenForm.mobileNo.value.length < 10 && seniorCitezenForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.mobileNo.value = "";
		seniorCitezenForm.mobileNo.focus();
		return false;
	}
	
	if (seniorCitezenForm.permAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		seniorCitezenForm.permAddress.focus();
		return false;
	}
	if (seniorCitezenForm.permCountryId.selectedIndex == 0) {
		alert("Please Select Country");
		seniorCitezenForm.permCountryId.focus();
		return false;
	}
	if (seniorCitezenForm.permStateId.selectedIndex == 0) {
		alert("Please Select State");
		seniorCitezenForm.permStateId.focus();
		return false;
	}
	if (seniorCitezenForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		seniorCitezenForm.permanentDistrict.focus();
		return false;
	}
	if (seniorCitezenForm.permCityId.selectedIndex == 0) {
		alert("Please Select City");
		seniorCitezenForm.permCityId.focus();
		return false;
	}
	if (seniorCitezenForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		seniorCitezenForm.permanentPostOffice.focus();
		return false;
	}
	if (seniorCitezenForm.permPolice.value == "") {
		alert("Please Enter the name of Police Station");
		seniorCitezenForm.permPolice.focus();
		return false;
	}
	if (seniorCitezenForm.presAddress.value == "") {
		alert("Please Enter Your Present Address");
		seniorCitezenForm.presAddress.focus();
		return false;
	}
	if (seniorCitezenForm.presCountryId.selectedIndex == 0) {
		alert("Please Select Country");
		seniorCitezenForm.presCountryId.focus();
		return false;
	}
	if (seniorCitezenForm.presStateId.selectedIndex == 0) {
		alert("Please Select State");
		seniorCitezenForm.presStateId.focus();
		return false;
	}
	if (seniorCitezenForm.presentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		seniorCitezenForm.presentDistrict.focus();
		return false;
	}
	if (seniorCitezenForm.presCityId.selectedIndex == 0) {
		alert("Please Select City");
		seniorCitezenForm.presCityId.focus();
		return false;
	}
	if (seniorCitezenForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		seniorCitezenForm.presentPostOffice.focus();
		return false;
	}
	if (seniorCitezenForm.presPolice.value == "") {
		alert("Please Enter the name of Police Station");
		seniorCitezenForm.presPolice.focus();
		return false;
	}
	
	if (seniorCitezenForm.health.selectedIndex == 0) {
		alert("Please Select the status of Your Health");
		seniorCitezenForm.health.focus();
		return false;
	}
	
	var radioSelected = false;
	for (i = 0; i < seniorCitezenForm.residingWith.length; i++) {
		if (seniorCitezenForm.residingWith[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select Your Residing Details");
		return (false);
	}
	if (((document.getElementById("FriendsRelatives")).checked == true) && (seniorCitezenForm.relativeName.value == "")) {
		alert("Please Enter Your Relative's Name");
		seniorCitezenForm.relativeName.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.relativeName) == false) {
		return false;
	}
	if (((document.getElementById("FriendsRelatives")).checked == true) && (seniorCitezenForm.relation.value == "")) {
		alert("Please Enter Relation");
		seniorCitezenForm.relation.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.relation) == false) {
		return false;
	}
	if (((document.getElementById("FriendsRelatives")).checked == true) && (seniorCitezenForm.relativeAddress.value == "")) {
		alert("Please Enter Your Relative's Address");
		seniorCitezenForm.relativeAddress.focus();
		return false;
	}
	if (((document.getElementById("FriendsRelatives")).checked == true) && (seniorCitezenForm.relativePhoneNo.value == "")) {
		alert("Please Enter Your Relative's Phone No.");
		seniorCitezenForm.relativePhoneNo.focus();
		return false;
	}
	if (seniorCitezenForm.relativePhoneNo.value.length < 10 && seniorCitezenForm.relativePhoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.relativePhoneNo.value = "";
		seniorCitezenForm.relativePhoneNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.relativePhoneNo) == false) {
		return false;
	}
	
	if((document.getElementById('old').style.display!='none')&&(seniorCitezenForm.oldAgeHomeName.value == ""))
	{
		alert("Please Enter the Name of Old Age Home");
		seniorCitezenForm.oldAgeHomeName.focus();
		return false;
	}
	if((document.getElementById('old').style.display!='none')&&(seniorCitezenForm.oldAgeHomeAddress.value == ""))
	{
		alert("Please Enter the Address of Old Age Home");
		seniorCitezenForm.oldAgeHomeAddress.focus();
		return false;
	}
	if((document.getElementById('old').style.display!='none')&&(seniorCitezenForm.oldAgeHomePhone.value == ""))
	{
		alert("Please Enter the Phone No. of Old Age Home");
		seniorCitezenForm.oldAgeHomePhone.focus();
		return false;
	}
	if (seniorCitezenForm.oldAgeHomePhone.value.length < 10 && seniorCitezenForm.oldAgeHomePhone.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.oldAgeHomePhone.value = "";
		seniorCitezenForm.oldAgeHomePhone.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.oldAgeHomePhone) == false) {
		return false;
	}
	
	if((document.getElementById('pg').style.display!='none')&&(seniorCitezenForm.pgName.value == ""))
	{
		alert("Please Enter the Name of Your Paying Guest");
		seniorCitezenForm.pgName.focus();
		return false;
	}
	if((document.getElementById('pg').style.display!='none')&&(seniorCitezenForm.pgPermAddress.value == ""))
	{
		alert("Please Enter the Address of Your Paying Guest");
		seniorCitezenForm.pgPermAddress.focus();
		return false;
	}
	if((document.getElementById('pg').style.display!='none')&&(seniorCitezenForm.pgPhoneNo.value == ""))
	{
		alert("Please Enter the Phone No. of Your Paying Guest");
		seniorCitezenForm.pgPhoneNo.focus();
		return false;
	}
	if (seniorCitezenForm.pgPhoneNo.value.length < 10 && seniorCitezenForm.pgPhoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.pgPhoneNo.value = "";
		seniorCitezenForm.pgPhoneNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.pgPhoneNo) == false) {
		return false;
	}
	
	if ((document.getElementById("servantPartTime").checked == false) && (document.getElementById("servantFullTime").checked == false) && (document.getElementById("servantNone").checked == false)) {
		alert("Select Relevant Option for Servant");
		return false;
	}
	if ((document.getElementById("driverPartTime").checked == false) && (document.getElementById("driverFullTime").checked == false) && (document.getElementById("driverNone").checked == false)) {
		alert("Select Relevant Option for Driver");
		return false;
	}
	if ((document.getElementById("watchmanPartTime").checked == false) && (document.getElementById("watchmanFullTime").checked == false) && (document.getElementById("watchmanNone").checked == false)) {
		alert("Select Relevant Option for Watchman");
		return false;
	}
	if ((document.getElementById("tenantPartTime").checked == false) && (document.getElementById("tenantFullTime").checked == false) && (document.getElementById("tenantNone").checked == false)) {
		alert("Select Relevant Option for Tenant");
		return false;
	}
	if (((document.getElementById("servantPartTime").checked == true) || (document.getElementById("servantFullTime").checked == true)) && (seniorCitezenForm.servantName.value == "")) {
		alert("Please Enter the Name of Your Domestic Help");
		seniorCitezenForm.servantName.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.servantName) == false) {
		return false;
	}
	if (((document.getElementById("servantPartTime").checked == true) || (document.getElementById("servantFullTime").checked == true)) && (seniorCitezenForm.servantAddress.value == "")) {
		alert("Please Enter Your Domestic Helps' Present Address");
		seniorCitezenForm.servantAddress.focus();
		return false;
	}
	if (((document.getElementById("servantPartTime").checked == true) || (document.getElementById("servantFullTime").checked == true)) && (seniorCitezenForm.domesticPermAddress.value == "")) {
		alert("Please Enter Your Domestic Helps' Permanent Address");
		seniorCitezenForm.domesticPermAddress.focus();
		return false;
	}
	if (((document.getElementById("servantPartTime").checked == true) || (document.getElementById("servantFullTime").checked == true)) && (seniorCitezenForm.domesticPermAddress.value == "")) {
		alert("Please Enter Your Domestic Helps' Phone No.");
		seniorCitezenForm.domesticPhoneNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.domesticPhoneNo) == false) {
		return false;
	}
	if (((document.getElementById("driverPartTime").checked == true) || (document.getElementById("driverFullTime").checked == true)) && (seniorCitezenForm.driverName.value == "")) {
		alert("Please Enter the Name of Your Driver");
		seniorCitezenForm.driverName.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.driverName) == false) {
		return false;
	}
	if (((document.getElementById("driverPartTime").checked == true) || (document.getElementById("driverFullTime").checked == true)) && (seniorCitezenForm.driverAddress.value == "")) {
		alert("Please Enter Your Driver's Present Address");
		seniorCitezenForm.driverAddress.focus();
		return false;
	}
	if (((document.getElementById("driverPartTime").checked == true) || (document.getElementById("driverFullTime").checked == true)) && (seniorCitezenForm.driverPermAddress.value == "")) {
		alert("Please Enter Your Driver's Permanent Address");
		seniorCitezenForm.driverPermAddress.focus();
		return false;
	}
	if (((document.getElementById("driverPartTime").checked == true) || (document.getElementById("driverFullTime").checked == true)) && (seniorCitezenForm.driverPhoneNo.value == "")) {
		alert("Please Enter Your Driver's Phone No.");
		seniorCitezenForm.driverPhoneNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.driverPhoneNo) == false) {
		return false;
	}
	if (((document.getElementById("watchmanPartTime").checked == true) || (document.getElementById("watchmanFullTime").checked == true)) && (seniorCitezenForm.watchmanName.value == "")) {
		alert("Please Enter the Name of Your Watchman");
		seniorCitezenForm.watchmanName.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.watchmanName) == false) {
		return false;
	}
	if (((document.getElementById("watchmanPartTime").checked == true) || (document.getElementById("watchmanFullTime").checked == true)) && (seniorCitezenForm.watchmanAddress.value == "")) {
		alert("Please Enter Your Watchman's Present Address");
		seniorCitezenForm.watchmanAddress.focus();
		return false;
	}
	if (((document.getElementById("watchmanPartTime").checked == true) || (document.getElementById("watchmanFullTime").checked == true)) && (seniorCitezenForm.watchmanPermAddress.value == "")) {
		alert("Please Enter Your Watchman's Permanent Address");
		seniorCitezenForm.watchmanPermAddress.focus();
		return false;
	}
	if (((document.getElementById("watchmanPartTime").checked == true) || (document.getElementById("watchmanFullTime").checked == true)) && (seniorCitezenForm.watchmanPhoneNo.value == "")) {
		alert("Please Enter Your Watchman's Phone No.");
		seniorCitezenForm.watchmanPhoneNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.watchmanPhoneNo) == false) {
		return false;
	}
	if (((document.getElementById("tenantPartTime").checked == true) || (document.getElementById("tenantFullTime").checked == true)) && (seniorCitezenForm.tenantName.value == "")) {
		alert("Please Enter the Name of Your Tenant");
		seniorCitezenForm.tenantName.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.tenantName) == false) {
		return false;
	}
	if (((document.getElementById("tenantPartTime").checked == true) || (document.getElementById("tenantFullTime").checked == true)) && (seniorCitezenForm.tenantAddress.value == "")) {
		alert("Please Enter Your Tenant's Present Address");
		seniorCitezenForm.tenantAddress.focus();
		return false;
	}
	if (((document.getElementById("watchmanPartTime").checked == true) || (document.getElementById("watchmanFullTime").checked == true)) && (seniorCitezenForm.tenantPermAddress.value == "")) {
		alert("Please Enter Your Tenants' Permanent Address");
		seniorCitezenForm.tenantPermAddress.focus();
		return false;
	}
	if (((document.getElementById("watchmanPartTime").checked == true) || (document.getElementById("watchmanFullTime").checked == true)) && (seniorCitezenForm.tenantPhoneNo.value == "")) {
		alert("Please Enter Your Tenants' Phone No.");
		seniorCitezenForm.tenantPhoneNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.tenantPhoneNo) == false) {
		return false;
	}
	if (seniorCitezenForm.nameOne.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		seniorCitezenForm.nameOne.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.nameOne) == false) {
		return false;
	}
	if (seniorCitezenForm.nameTwo.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		seniorCitezenForm.nameTwo.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.nameTwo) == false) {
		return false;
	}
	if (seniorCitezenForm.addressOne.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		seniorCitezenForm.addressOne.focus();
		return false;
	}
	if (seniorCitezenForm.addressTwo.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		seniorCitezenForm.addressTwo.focus();
		return false;
	}
	if (seniorCitezenForm.pinCodeOne.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		seniorCitezenForm.pinCodeOne.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.pinCodeOne) == false) {
		return false;
	}
	if (seniorCitezenForm.pinCodeOne.value.length < 6 && seniorCitezenForm.pinCodeOne.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		seniorCitezenForm.pinCodeOne.value = "";
		seniorCitezenForm.pinCodeOne.focus();
		return false;
	}
	if (seniorCitezenForm.pinCodeTwo.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		seniorCitezenForm.pinCodeTwo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.pinCodeTwo) == false) {
		return false;
	}
	if (seniorCitezenForm.pinCodeTwo.value.length < 6 && seniorCitezenForm.pinCodeTwo.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		seniorCitezenForm.pinCodeTwo.value = "";
		seniorCitezenForm.pinCodeTwo.focus();
		return false;
	}
	return true;
}
function onlyreada(seniorCitezenForm, value) {
	if (value == "None") {
		seniorCitezenForm.servantName.readOnly = true;
		seniorCitezenForm.servantAddress.readOnly = true;
		seniorCitezenForm.domesticPermAddress.readOnly = true;
		seniorCitezenForm.domesticPhoneNo.readOnly = true;
		seniorCitezenForm.servantName.value = "";
		seniorCitezenForm.servantAddress.value = "";
		seniorCitezenForm.domesticPermAddress.value = "";
		seniorCitezenForm.domesticPhoneNo.value = "";
	} else {
		seniorCitezenForm.servantName.readOnly = false;
		seniorCitezenForm.servantAddress.readOnly = false;
		seniorCitezenForm.domesticPermAddress.readOnly = false;
		seniorCitezenForm.domesticPhoneNo.readOnly = false;
	}
}
function onlyReadb(seniorCitezenForm, value) {
	if (value == "None") {
		seniorCitezenForm.driverName.readOnly = true;
		seniorCitezenForm.driverAddress.readOnly = true;
		seniorCitezenForm.driverPermAddress.readOnly = true;
		seniorCitezenForm.driverPhoneNo.readOnly = true;
		seniorCitezenForm.driverName.value = "";
		seniorCitezenForm.driverAddress.value = "";
		seniorCitezenForm.driverPermAddress.value = "";
		seniorCitezenForm.driverPhoneNo.value = "";
	} else {
		seniorCitezenForm.driverName.readOnly = false;
		seniorCitezenForm.driverAddress.readOnly = false;
		seniorCitezenForm.driverPermAddress.readOnly = false;
		seniorCitezenForm.driverPhoneNo.readOnly = false;
	}
}
function onlyReadc(seniorCitezenForm, value) {
	if (value == "None") {
		seniorCitezenForm.watchmanName.readOnly = true;
		seniorCitezenForm.watchmanAddress.readOnly = true;
		seniorCitezenForm.watchmanPermAddress.readOnly = true;
		seniorCitezenForm.watchmanPhoneNo.readOnly = true;
		seniorCitezenForm.watchmanName.value = "";
		seniorCitezenForm.watchmanAddress.value = "";
		seniorCitezenForm.watchmanPermAddress.value = "";
		seniorCitezenForm.watchmanPhoneNo.value = "";
	} else {
		seniorCitezenForm.watchmanName.readOnly = false;
		seniorCitezenForm.watchmanAddress.readOnly = false;
		seniorCitezenForm.watchmanPermAddress.readOnly = false;
		seniorCitezenForm.watchmanPhoneNo.readOnly = false;
	}
}
function onlyReadd(seniorCitezenForm, value) {
	if (value == "None") {
		seniorCitezenForm.tenantName.readOnly = true;
		seniorCitezenForm.tenantAddress.readOnly = true;
		seniorCitezenForm.tenantPermAddress.readOnly = true;
		seniorCitezenForm.tenantPhoneNo.readOnly = true;
		seniorCitezenForm.tenantName.value = "";
		seniorCitezenForm.tenantAddress.value = "";
		seniorCitezenForm.tenantPermAddress.value = "";
		seniorCitezenForm.tenantPhoneNo.value = "";
	} else {
		seniorCitezenForm.tenantName.readOnly = false;
		seniorCitezenForm.tenantAddress.readOnly = false;
		seniorCitezenForm.tenantPermAddress.readOnly = false;
		seniorCitezenForm.tenantPhoneNo.readOnly = false;
	}
}
    
 // Ended by Vidya
   
   
   
 function validatePeople(){
 	valid=true;
	if (seniorCitezenForm.name.value == "") {
		alert("Please Enter Your Namefffdfd");
		seniorCitezenForm.name.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.name) == false) {
		return false;
	}
		
	if (seniorCitezenForm.dob.value == "") {
		alert("Please Enter Your Date of Birth");
		seniorCitezenForm.dob.focus();
		return false;
	}
	var radioSelected = false;
	for (i = 0; i < seniorCitezenForm.gender.length; i++) {
		if (seniorCitezenForm.gender[i].checked) {
			radioSelected = true;
		}
	}
	if (!radioSelected) {
		alert("Please Select Gender");
		return (false);
	}
	if (seniorCitezenForm.bloodGroup.selectedIndex == 0) {
		alert("Please Select Blood Group");
		seniorCitezenForm.bloodGroup.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.telephoneNo) == false) {
		return false;
	}
	if (seniorCitezenForm.telephoneNo.value.length < 10 && seniorCitezenForm.telephoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.telephoneNo.value = "";
		seniorCitezenForm.telephoneNo.focus();
		return false;
	}
	if (seniorCitezenForm.mobileNo.value == "") {
		alert("Please Enter Your Mobile No.");
		seniorCitezenForm.mobileNo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.mobileNo) == false) {
		return false;
	}
	if (seniorCitezenForm.mobileNo.value.length < 10 && seniorCitezenForm.mobileNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		seniorCitezenForm.mobileNo.value = "";
		seniorCitezenForm.mobileNo.focus();
		return false;
	}
	
	if (seniorCitezenForm.permAddress.value == "") {
		alert("Please Enter Your Permanent Address");
		seniorCitezenForm.permAddress.focus();
		return false;
	}
	if (seniorCitezenForm.permCountryId.selectedIndex == 0) {
		alert("Please Select Country");
		seniorCitezenForm.permCountryId.focus();
		return false;
	}
	if (seniorCitezenForm.permStateId.selectedIndex == 0) {
		alert("Please Select State");
		seniorCitezenForm.permStateId.focus();
		return false;
	}
	if (seniorCitezenForm.permanentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		seniorCitezenForm.permanentDistrict.focus();
		return false;
	}
	if (seniorCitezenForm.permCityId.selectedIndex == 0) {
		alert("Please Select City");
		seniorCitezenForm.permCityId.focus();
		return false;
	}
	if (seniorCitezenForm.permanentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		seniorCitezenForm.permanentPostOffice.focus();
		return false;
	}
	if (seniorCitezenForm.permPolice.value == "") {
		alert("Please Enter the name of Police Station");
		seniorCitezenForm.permPolice.focus();
		return false;
	}
	if (seniorCitezenForm.presAddress.value == "") {
		alert("Please Enter Your Present Address");
		seniorCitezenForm.presAddress.focus();
		return false;
	}
	if (seniorCitezenForm.presCountryId.selectedIndex == 0) {
		alert("Please Select Country");
		seniorCitezenForm.presCountryId.focus();
		return false;
	}
	if (seniorCitezenForm.presStateId.selectedIndex == 0) {
		alert("Please Select State");
		seniorCitezenForm.presStateId.focus();
		return false;
	}
	if (seniorCitezenForm.presentDistrict.selectedIndex == 0) {
		alert("Please Select District");
		seniorCitezenForm.presentDistrict.focus();
		return false;
	}
	if (seniorCitezenForm.presCityId.selectedIndex == 0) {
		alert("Please Select City");
		seniorCitezenForm.presCityId.focus();
		return false;
	}
	if (seniorCitezenForm.presentPostOffice.selectedIndex == 0) {
		alert("Please Select Post Office");
		seniorCitezenForm.presentPostOffice.focus();
		return false;
	}
	if (seniorCitezenForm.presPolice.value == "") {
		alert("Please Enter the name of Police Station");
		seniorCitezenForm.presPolice.focus();
		return false;
	}
	if (seniorCitezenForm.nameOne.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		seniorCitezenForm.nameOne.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.nameOne) == false) {
		return false;
	}
	if (seniorCitezenForm.nameTwo.value == "") {
		alert("Please Enter the Name of a Responsible Person");
		seniorCitezenForm.nameTwo.focus();
		return false;
	}
	if (alphabet(seniorCitezenForm.nameTwo) == false) {
		return false;
	}
	if (seniorCitezenForm.addressOne.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		seniorCitezenForm.addressOne.focus();
		return false;
	}
	if (seniorCitezenForm.addressTwo.value == "") {
		alert("Please Enter the Address of a Responsible Person");
		seniorCitezenForm.addressTwo.focus();
		return false;
	}
	if (seniorCitezenForm.pinCodeOne.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		seniorCitezenForm.pinCodeOne.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.pinCodeOne) == false) {
		return false;
	}
	if (seniorCitezenForm.pinCodeOne.value.length < 6 && seniorCitezenForm.pinCodeOne.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		seniorCitezenForm.pinCodeOne.value = "";
		seniorCitezenForm.pinCodeOne.focus();
		return false;
	}
	if (seniorCitezenForm.pinCodeTwo.value == "") {
		alert("Please Enter the PIN Code of a Responsible Person");
		seniorCitezenForm.pinCodeTwo.focus();
		return false;
	}
	if (numeric(seniorCitezenForm.pinCodeTwo) == false) {
		return false;
	}
	if (seniorCitezenForm.pinCodeTwo.value.length < 6 && seniorCitezenForm.pinCodeTwo.value.length > 1) {
		alert("Please Enter a Valid Six Digit PIN Code.");
		seniorCitezenForm.pinCodeTwo.value = "";
		seniorCitezenForm.pinCodeTwo.focus();
		return false;
	}
	return valid;

}
 
 
 
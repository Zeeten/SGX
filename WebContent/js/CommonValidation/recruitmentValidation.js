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

function alphabet(obj) {
	valid = true;
	var alphaExp = /^[a-z A-Z , .]+$/;
	if (obj.value.match(alphaExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please enter alphabets only");
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
			alert("Please enter numbers only");
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
		alert("Please enter valid email address");
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
			alert("Please enter numbers only between 00.00 to 99.99");
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
		alert("Please enter alphabets and numbers only");
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
		alert("Please enter alphabets,numbers and regular expression only");
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
	
// Ajax code for General Information on 28-07-10

var xmlHttp;
var dataToAttach;

function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		if (window.XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		}
	}
}

function populatePost(paramName, paramValue, dataToAttached, postId, mode, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&postId=" +postId.value+ "&mode=" +mode+ "&sid=" + Math.random();
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue+ "&postId=" +postId+ "&mode=" +mode+ "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}


function handleStateChange() {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			
			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];
			var previousStateElement = document.getElementById(dataToAttach);
			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		
		}
	}
}
// method for remove options
function removeAllOptions(selectbox) {
	for (var index = selectbox.options.length - 1; index >= 0; index--) {
		selectbox.remove(index);
	}
}
// method for add options.
function addOption_all_list(oldselectbox, newselectbox) {
	removeAllOptions(oldselectbox);
	for (var index = 0; index <= newselectbox.options.length - 1; index++) {
		addOption(oldselectbox, newselectbox.options[index].innerHTML, newselectbox.options[index].value);
	}
}
// one by one option are attached.
function addOption(selectbox, text, value) {
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

// Ended ajax


// Validation Function For General Information Add Form (Added By Vidya)
function validateGI() {
try{
	
	if (generalInformationForm.deptId!=undefined){
		if(generalInformationForm.deptId.selectedIndex == 0) {
			alert("Please select department");
			generalInformationForm.deptId.focus();
			return false;
		}
	}
	
	if (generalInformationForm.post.value == 0) {
		alert("Please select post");
		generalInformationForm.post.focus();
		return false;
	}
	if ((document.getElementById("post").value == 8) && (document.getElementById("other").value == "")) {
		alert("Please enter post");
		document.getElementById("other").focus();
		return false;
	}
	if ((generalInformationForm.post.selectedIndex == 1) && (generalInformationForm.login.value == "aso")) {
		alert("A.S.O. recruitment is not allowed");
		generalInformationForm.post.focus();
		return false;
	}
	if (generalInformationForm.nameOfCandidate.value == "") {
		alert("Please enter your first name");
		generalInformationForm.nameOfCandidate.focus();
		return false;
	}
	if (alphabet(generalInformationForm.nameOfCandidate) == false) {
		return false;
	}
	if (alphabet(generalInformationForm.candidateMiddleName) == false) {
		return false;
	}
	if (alphabet(generalInformationForm.candidateLastName) == false) {
		return false;
	}
	if (generalInformationForm.fathersName.value == "" || trim(generalInformationForm.fathersName.value) == "") {
		alert("Please enter your father's name");
		generalInformationForm.fathersName.focus();
		return false;
	}
	if (alphabet(generalInformationForm.fathersName) == false) {
		return false;
	}
	if (generalInformationForm.mothersName.value == "") {
		alert("Please enter your mother's name");
		generalInformationForm.mothersName.focus();
		return false;
	}
	if (alphabet(generalInformationForm.mothersName) == false) {
		return false;
	}
	if (generalInformationForm.birthDate.value == "") {
		alert("Please enter your date of birth");
		generalInformationForm.birthDate.focus();
		return false;
	}
	if ((document.getElementById("genderMale").checked == false) && (document.getElementById("genderFemale").checked == false)) {
		alert("Please select a value for gender");
		document.getElementById("genderMale").focus();
		return false;
	}
	if (generalInformationForm.permanentPremisesVillage.value == "") {
		alert("Please enter your name of premises / building / village");
		generalInformationForm.permanentPremisesVillage.focus();
		return false;
	}
	if (generalInformationForm.country.selectedIndex == 0) {
		alert("Please select country");
		generalInformationForm.country.focus();
		return false;
	}
	if (generalInformationForm.state1.selectedIndex == 0) {
		alert("Please select state");
		generalInformationForm.state1.focus();
		return false;
	}
	if (generalInformationForm.district1.selectedIndex == 0) {
		alert("Please select district");
		generalInformationForm.district1.focus();
		return false;
	}
	if (generalInformationForm.permCityId.selectedIndex == 0) {
		alert("Please select city");
		generalInformationForm.permCityId.focus();
		return false;
	}
	if (generalInformationForm.permanentAddArea.selectedIndex == 0) {
		alert("Please select area");
		generalInformationForm.permanentAddArea.focus();
		return false;
	}
	if (generalInformationForm.postOffice1.selectedIndex == 0) {
		alert("Please select post office");
		generalInformationForm.postOffice1.focus();
		return false;
	}
	if (numeric(generalInformationForm.permanentSTDCodePhone1) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentContactNo1) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentSTDCodePhone2) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentContactNo2) == false) {
		return false;
	}
	
	if(document.getElementById("sameAsPermanent").checked == false)
	{
	
	if (generalInformationForm.presentPremisesVillage.value == "") {
		
		alert("Please enter your name of premises / building / village");
		generalInformationForm.presentPremisesVillage.focus();
		return false;
	}
	if (generalInformationForm.presCountryId.selectedIndex == 0) {
		alert("Please select country");
		generalInformationForm.presCountryId.focus();
		return false;
	}
	if (generalInformationForm.state2.selectedIndex == 0) {
		alert("Please select state");
		generalInformationForm.state2.focus();
		return false;
	}
	if (generalInformationForm.district2.selectedIndex == 0) {
		alert("Please select district");
		generalInformationForm.district2.focus();
		return false;
	}
	if (generalInformationForm.presCityId.selectedIndex == 0) {
		alert("Please select city");
		generalInformationForm.presCityId.focus();
		return false;
	}
	if (generalInformationForm.presentAddArea.selectedIndex == 0) {
		alert("Please select area");
		generalInformationForm.presentAddArea.focus();
		return false;
	}
	if (generalInformationForm.postOffice2.selectedIndex == 0) {
		alert("Please select post office");
		generalInformationForm.postOffice2.focus();
		return false;
	}
	}
	if (numeric(generalInformationForm.presentSTDCodePhone1) == false) {
		return false;
	}
	if (numeric(generalInformationForm.presentContactNo1) == false) {
		return false;
	}
	if (generalInformationForm.presentContactNo2.value == "") {
		alert("Please enter your mobile no.");
		generalInformationForm.presentContactNo2.focus();
		return false;
	}
	if (numeric(generalInformationForm.presentContactNo2) == false) {
		return false;
	}
	if (generalInformationForm.presentContactNo2.value.length < 10 && generalInformationForm.presentContactNo2.value.length > 0) {
		alert("Please enter a valid ten digit mobile no.");
		generalInformationForm.presentContactNo2.value = "";
		generalInformationForm.presentContactNo2.focus();
		return false;
	}
	if(emailValidator(generalInformationForm.email1)==false){
       generalInformationForm.email1.focus();
	   return false;
	}
	if(emailValidator(generalInformationForm.email2)==false){
       generalInformationForm.email2.focus();
	   return false;
	}
	if ((generalInformationForm.height.value == "")||(generalInformationForm.height.value == 0) ) {
		alert("Please enter height");
		generalInformationForm.height.focus();
		return false;
	}
	if (numeric(generalInformationForm.height) == false) {
		return false;
	}
	if ((generalInformationForm.chest.value == "")||(generalInformationForm.chest.value == 0)) {
		alert("Please enter chest");
		generalInformationForm.chest.focus();
		return false;
	}
	if (numeric(generalInformationForm.chest) == false) {
		return false;
		}
	if ((generalInformationForm.weight.value == "")||(generalInformationForm.weight.value == 0)) {
		alert("Please enter weight");
		generalInformationForm.weight.focus();
		return false;
	}
	if (numeric(generalInformationForm.weight) == false) {
		return false;
	}
	if ((document.getElementById("otherLanguage").selectedIndex == 0) && (document.getElementById("otherLanguageRead").checked == true || document.getElementById("otherLanguageWrite").checked == true || document.getElementById("otherLanguageSpeak").checked == true)) {
		alert("Please select language");
		document.getElementById("otherLanguage").focus();
	   return false;
	}
	if ((document.getElementById("hindiRead").checked == false) && (document.getElementById("hindiWrtie").checked == false) && (document.getElementById("hindiSpeak").checked == false)) {
		alert("Please select hindi language");
		document.getElementById("hindiWrtie").focus();
		return false;
	}
	if ((document.getElementById("otherLanguage").selectedIndex != 0) && (document.getElementById("otherLanguageRead").checked == false && document.getElementById("otherLanguageWrite").checked == false && document.getElementById("otherLanguageSpeak").checked == false)) {
		alert("Please select a relevant option for other language");
		(document.getElementById("otherLanguage")).focus();
		return false;
	}
	if (generalInformationForm.underMatricBoard.value == "") {
		alert("Please enter your under metric board / university");
		generalInformationForm.underMatricBoard.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.underMatricBoard) == false) {
		return false;
	}
	if (generalInformationForm.metricInstitute.value == "") {
		alert("Please enter your under metric institute / college");
		generalInformationForm.metricInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.metricInstitute) == false) {
		return false;
	}
	if (generalInformationForm.underMetricCountryId.selectedIndex == 0) {
		alert("Please select under metric country");
		generalInformationForm.underMetricCountryId.focus();
		return false;
	}
	if (generalInformationForm.metricState.selectedIndex == 0) {
		alert("Please select under metric state");
		generalInformationForm.metricState.focus();
		return false;
	}
	if (generalInformationForm.metricCity.selectedIndex == 0) {
		alert("Please select under metric district");
		generalInformationForm.metricCity.focus();
		return false;
	}
	if (generalInformationForm.underMetricCityId.selectedIndex == 0) {
		alert("Please select under metric city");
		generalInformationForm.underMetricCityId.focus();
		return false;
	}
	if (generalInformationForm.underMetricArea.selectedIndex == 0) {
		alert("Please select under metric area");
		generalInformationForm.underMetricArea.focus();
		return false;
	}
	if (generalInformationForm.underMetricPostOffice.selectedIndex == 0) {
		alert("Please select under metric post office");
		generalInformationForm.underMetricPostOffice.focus();
		return false;
	}
	if (generalInformationForm.underMatricPercentage.value == "") {
		alert("Please enter your under metric percentage");
		generalInformationForm.underMatricPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.underMatricPercentage) == false) {
		return false;
	}
	if (generalInformationForm.underMatricSubject.value == "") {
		alert("Please enter your under metric subject");
		generalInformationForm.underMatricSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.underMatricSubject) == false) {
		return false;
	}
	//added by ajit on 10/04/2010
	
	if ((generalInformationForm.highSchoolBoard.value != "") || (generalInformationForm.highSchoolInstitute.value != "")||(generalInformationForm.highSchoolPercentage.value != 0)||(generalInformationForm.highSchoolSubject.value != "")){

    if (generalInformationForm.highSchoolBoard.value == "") {
		alert("Please enter your high school board / university");
		generalInformationForm.highSchoolBoard.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.highSchoolBoard) == false) {
		return false;
	}
	if (generalInformationForm.highSchoolInstitute.value == "") {
		alert("Please enter your high school Institute / College");
		generalInformationForm.highSchoolInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.highSchoolInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.highSchoolCountryId.selectedIndex == 0) {
		alert("Please select high school country");
		generalInformationForm.highSchoolCountryId.focus();
		return false;
	}
	if (generalInformationForm.highSchoolState.selectedIndex == 0) {
		alert("Please select high school state");
		generalInformationForm.highSchoolState.focus();
		return false;
	}
	if (generalInformationForm.highSchoolCity.selectedIndex == 0) {
		alert("Please select high school district");
		generalInformationForm.highSchoolCity.focus();
		return false;
	}
	if (generalInformationForm.highSchoolCityId.selectedIndex == 0) {
		alert("Please select high school city");
		generalInformationForm.highSchoolCityId.focus();
		return false;
	}
	if (generalInformationForm.highSchoolArea.selectedIndex == 0) {
		alert("Please select high school area");
		generalInformationForm.highSchoolArea.focus();
		return false;
	}
	if (generalInformationForm.highSchoolPostOffice.selectedIndex == 0) {
		alert("Please select high school post office");
		generalInformationForm.highSchoolPostOffice.focus();
		return false;
	}
	if (generalInformationForm.highSchoolPercentage.value == "") {
		alert("Please enter your high school percentage");
		generalInformationForm.highSchoolPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.highSchoolPercentage) == false) {
		return false;
	}
	if (generalInformationForm.highSchoolSubject.value == "") {
		alert("Please enter your high school subject");
		generalInformationForm.highSchoolSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.highSchoolSubject) == false) {
		return false;
	}

	}
	
	
	
	//ended by ajit on 10/04/2010
	
	
	/*
	if (alphabet(generalInformationForm.highSchoolBoard) == false) {
		return false;
	}
	if (alphabet(generalInformationForm.highSchoolInstitute) == false) {
		return false;
	}
	if (numericPercentage(generalInformationForm.highSchoolPercentage) == false) {
		return false;
	}
	if (alphabet(generalInformationForm.highSchoolSubject) == false) {
		return false;
	}
	*/
	//ended by ajit on 10/04/2010
	
	//added by ajit on 10/04/2010
	
	if ((generalInformationForm.higherSecondryBoard.value != "") || (generalInformationForm.higherSecondaryInstitute.value != "")||(generalInformationForm.higherSecondryPercentage.value != 0)||(generalInformationForm.higherSecondrySubject.value != "")){

    if (generalInformationForm.higherSecondryBoard.value == "") {
		alert("Please enter your higher secondry board / university");
		generalInformationForm.higherSecondryBoard.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.higherSecondryBoard) == false) {
		return false;
	}
	if (generalInformationForm.higherSecondaryInstitute.value == "") {
		alert("Please enter your higher secondary institute / college");
		generalInformationForm.higherSecondaryInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.higherSecondaryInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.higherSecondaryCountryId.selectedIndex == 0) {
		alert("Please select higher secondary country");
		generalInformationForm.higherSecondaryCountryId.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryState.selectedIndex == 0) {
		alert("Please select higher secondary state");
		generalInformationForm.higherSecondaryState.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryCity.selectedIndex == 0) {
		alert("Please select higher secondary district");
		generalInformationForm.higherSecondaryCity.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryCityId.selectedIndex == 0) {
		alert("Please select higher secondary city");
		generalInformationForm.higherSecondaryCityId.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryArea.selectedIndex == 0) {
		alert("Please select higher secondary area");
		generalInformationForm.higherSecondaryArea.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryPostOffice.selectedIndex == 0) {
		alert("Please select higher secondary post office");
		generalInformationForm.higherSecondaryPostOffice.focus();
		return false;
	}
	if (generalInformationForm.higherSecondryPercentage.value == "") {
		alert("Please enter your higher secondry percentage");
		generalInformationForm.higherSecondryPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.higherSecondryPercentage) == false) {
		return false;
	}
	if (generalInformationForm.higherSecondrySubject.value == "") {
		alert("Please enter your higher secondry subject");
		generalInformationForm.higherSecondrySubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.higherSecondrySubject) == false) {
		return false;
	}

	}
	
	
	
	//ended by ajit on 10/04/2010
	
	//added by ajit on 10/04/2010
	
	if ((generalInformationForm.graduationUniversity.value != "") || (generalInformationForm.graduationInstitute.value != "")||(generalInformationForm.graduationPercentage.value != 0)||(generalInformationForm.graduationSubject.value != "")){

    if (generalInformationForm.graduationUniversity.value == "") {
		alert("Please enter your graduation board / university");
		generalInformationForm.graduationUniversity.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.graduationUniversity) == false) {
		return false;
	}
	if (generalInformationForm.graduationInstitute.value == "") {
		alert("Please enter your graduation institute / college");
		generalInformationForm.graduationInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.graduationInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.graduationCountryId.selectedIndex == 0) {
		alert("Please select graduation country");
		generalInformationForm.graduationCountryId.focus();
		return false;
	}
	if (generalInformationForm.graduationState.selectedIndex == 0) {
		alert("Please select graduation state");
		generalInformationForm.graduationState.focus();
		return false;
	}
	if (generalInformationForm.graduationCity.selectedIndex == 0) {
		alert("Please select graduation district");
		generalInformationForm.graduationCity.focus();
		return false;
	}
	if (generalInformationForm.graduationCityId.selectedIndex == 0) {
		alert("Please select graduation city");
		generalInformationForm.graduationCityId.focus();
		return false;
	}
	if (generalInformationForm.graduationArea.selectedIndex == 0) {
		alert("Please select graduation area");
		generalInformationForm.graduationArea.focus();
		return false;
	}
	if (generalInformationForm.graduationPostOffice.selectedIndex == 0) {
		alert("Please select graduation post office");
		generalInformationForm.graduationPostOffice.focus();
		return false;
	}
	if (generalInformationForm.graduationPercentage.value == "") {
		alert("Please enter your graduation percentage");
		generalInformationForm.graduationPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.graduationPercentage) == false) {
		return false;
	}
	if (generalInformationForm.graduationDegree.selectedIndex == 0) {
		alert("Please select graduation degree");
		generalInformationForm.graduationDegree.focus();
		return false;
	}
	if (generalInformationForm.graduationSubject.value == "") {
		alert("Please enter your graduation subject");
		generalInformationForm.graduationSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.graduationSubject) == false) {
		return false;
	}

	}
	
	
	
	//ended by ajit on 10/04/2010
	
	//added by ajit on 10/04/2010
	
	if ((generalInformationForm.otherQualificationUniversity.value != "") || (generalInformationForm.otherInstitute.value != "")||(generalInformationForm.otherQualificationPercentage.value != 0)||(generalInformationForm.otherQualificationSubject.value != "")){

    if (generalInformationForm.otherQualificationUniversity.value == "") {
		alert("Please enter your higher education board / university");
		generalInformationForm.otherQualificationUniversity.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.otherQualificationUniversity) == false) {
		return false;
	}
	if (generalInformationForm.otherInstitute.value == "") {
		alert("Please enter your higher education institute / college");
		generalInformationForm.otherInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.otherInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.otherCountryId.selectedIndex == 0) {
		alert("Please select higher education country");
		generalInformationForm.otherCountryId.focus();
		return false;
	}
	if (generalInformationForm.otherState.selectedIndex == 0) {
		alert("Please select higher education state");
		generalInformationForm.otherState.focus();
		return false;
	}
	if (generalInformationForm.otherCity.selectedIndex == 0) {
		alert("Please select higher education district");
		generalInformationForm.otherCity.focus();
		return false;
	}
	if (generalInformationForm.otherCityId.selectedIndex == 0) {
		alert("Please select higher education city");
		generalInformationForm.otherCityId.focus();
		return false;
	}
	if (generalInformationForm.higherEducationArea.selectedIndex == 0) {
		alert("Please select higher education area");
		generalInformationForm.higherEducationArea.focus();
		return false;
	}
	if (generalInformationForm.otherPostoffice.selectedIndex == 0) {
		alert("Please select higher education post office");
		generalInformationForm.otherPostoffice.focus();
		return false;
	}
	if (generalInformationForm.otherQualificationPercentage.value == "") {
		alert("Please enter your higher education percentage");
		generalInformationForm.otherQualificationPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.otherQualificationPercentage) == false) {
		return false;
	}
	if (generalInformationForm.otherQualifyDegree.selectedIndex == 0) {
		alert("Please select higher education degree");
		generalInformationForm.otherQualifyDegree.focus();
		return false;
	}
	if (generalInformationForm.otherQualificationSubject.value == "") {
		alert("Please enter your higher education subject");
		generalInformationForm.otherQualificationSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.otherQualificationSubject) == false) {
		return false;
	}

	}
	
	
	
	//ended by ajit on 10/04/2010
	
	// Added by Vidya on 30-06-10 
	if((generalInformationForm.panCard.value == "") && (generalInformationForm.voterNo.value == "") && (generalInformationForm.rationNo.value == "") && (generalInformationForm.drivingNo.value == "") && (generalInformationForm.passportNo.value == "") && (generalInformationForm.otherDetails.value == "")){
	alert("Please enter atleast one detail");
	generalInformationForm.panCard.focus();
	return false;
	}
	// Ende by Vidya
	
	
	//added by ajit on 07/04/2010
	if (generalInformationForm.panCard.value != 0){
	if (Alphanumeric(generalInformationForm.panCard) == false){
	return false;
	}}
	if (generalInformationForm.voterNo.value != 0){
	if (Alphanumeric(generalInformationForm.voterNo) == false){
	return false;
	}}
	if (generalInformationForm.rationNo.value != 0){
	if (Alphanumeric(generalInformationForm.rationNo) == false){
	return false;
	}}
//	if (generalInformationForm.drivingNo.value != 0){
//	if (Alphanumeric(generalInformationForm.drivingNo) == false){
//	return false;
//	}}
	if (generalInformationForm.voterIssue.value != 0){
	if (alphabet(generalInformationForm.voterIssue) == false) {
		return false;
	}}
	if (generalInformationForm.rationIssue.value != 0){
	if (alphabet(generalInformationForm.rationIssue) == false) {
		return false;
	}}
	if (generalInformationForm.drivingIssue.value != 0){
	if (alphabet(generalInformationForm.drivingIssue) == false) {
		return false;
	}}
	if (generalInformationForm.passportIssuingAuthority.value != 0){
	if (alphabet(generalInformationForm.passportIssuingAuthority) == false) {
		return false;
	}}
	
	// Added by Vidya on 30-06-10 
	if((generalInformationForm.otherDetails.value !=0)||(generalInformationForm.otherDetails.value != "")){
	 if(generalInformationForm.otherDetailsNo.value == ""){
	 alert("Please enter no.");
	 generalInformationForm.otherDetailsNo.focus();
	 return false;
	 }
	 if(generalInformationForm.otherDetailsIssuingAuthority.value == ""){
	 alert("Please enter issuing authority");
	 generalInformationForm.otherDetailsIssuingAuthority.focus();
	 return false;
	 }
	 if(generalInformationForm.otherDetailsValidTill.value == ""){
	 alert("Please enter validation date");
	 generalInformationForm.otherDetailsValidTill.focus();
	 return false;
	 }
	}
	// Ended by Vidya
	
	
	
	
	//ended by ajit on 07/04/2010
	if (generalInformationForm.accountType.selectedIndex == 0) {
		alert("Please select account type");
		generalInformationForm.accountType.focus();
		return false;
	}
	
	if (generalInformationForm.accountType.selectedIndex == 1) {
		
		if (generalInformationForm.savingAccountNo.value == "") {
			alert("Please enter saving account no");
			generalInformationForm.savingAccountNo.focus();
			return false;
		}
		if (generalInformationForm.bankName.value == "") {
			alert("Please enter saving bank name");
			generalInformationForm.bankName.focus();
			return false;
		}
		//added by ajit on 07/04/2010
		if (alphabet(generalInformationForm.bankName) == false) {
		return false;
	    }
		if (generalInformationForm.branchName.value == "") {
			alert("Please enter saving branch name");
			generalInformationForm.branchName.focus();
			return false;
		}
		if (alphabet(generalInformationForm.branchName) == false) {
		return false;
		}
		//if (generalInformationForm.ifscCode.value == "") {
		//	alert("Please enter IFSC code");
		//	generalInformationForm.ifscCode.focus();
		//	return false;
		//}
		//if (generalInformationForm.bankCode.value == "") {
		//	alert("Please enter bank code");
		//	generalInformationForm.bankCode.focus();
		//	return false;
		//}
		//added by ajit on 08/04/2010
		if (generalInformationForm.fullAddressOfBank.value == "") {
			alert("Please enter bank's address");
			generalInformationForm.fullAddressOfBank.focus();
			return false;
		}
		else {
		var cnt=0;
		 	cnt=countWidth(generalInformationForm.fullAddressOfBank.value);
		 	if( (255-cnt)<0 ){
	      		 alert("Address length should not be exceed 255 characters");
	      		 generalInformationForm.fullAddressOfBank.value="";
	      		 generalInformationForm.fullAddressOfBank.focus();
	      		 return false;
	      		 }
	      	
		}
		//ended by ajit on 08/04/2010
		
		if (generalInformationForm.firstNomineeOfEmployeeSavingAccount.value == "") {
		    if (generalInformationForm.firstNomineeRelation.selectedIndex != 0) {
			alert("Please enter first nominee");
			generalInformationForm.firstNomineeOfEmployeeSavingAccount.focus();
			return false;
		}
		}
		if (alphabet(generalInformationForm.firstNomineeOfEmployeeSavingAccount) == false) {
		return false;
		}
		
		if (generalInformationForm.secondNomineeOfEmployeeSavingAccount.value == "") {
			if(generalInformationForm.secondNomineeRelation.selectedIndex != 0){
			alert("Please enter second nominee");
			generalInformationForm.secondNomineeOfEmployeeSavingAccount.focus();
			return false;
		}
		}
		if (alphabet(generalInformationForm.secondNomineeOfEmployeeSavingAccount) == false) {
		return false;
		}
		//ended by ajit on 07/04/2010
		if (generalInformationForm.firstNomineeOfEmployeeSavingAccount.value != ""){ 
		if (generalInformationForm.firstNomineeRelation.selectedIndex == 0) {
			alert("Please select relation");
			generalInformationForm.firstNomineeRelation.focus();
			return false;
		}
		}
		//if(generalInformationForm.firstNomineeOfEmployeeSavingAccount.disabled==true){
		//generalInformationForm.firstNomineeOfEmployeeSavingAccount.disabled=false;
		//}
		
		if (generalInformationForm.secondNomineeOfEmployeeSavingAccount.value != "") {
		if (generalInformationForm.secondNomineeRelation.selectedIndex == 0) {
			alert("Please select relation");
			generalInformationForm.secondNomineeRelation.focus();
			return false;
		}
		}
		//if(generalInformationForm.secondNomineeOfEmployeeSavingAccount.disabled==true){
		//generalInformationForm.secondNomineeOfEmployeeSavingAccount.disabled=false;
		//}
		if ((document.getElementById("firstNomineeRelation").selectedIndex == 8) && (document.getElementById("firstNomineeRelationOthers")).value == "") {
			alert("Please enter the relation");
			document.getElementById("firstNomineeRelationOthers").focus();
			return false;
		}
		if ((document.getElementById("secondNomineeRelation").selectedIndex == 8) && (document.getElementById("secondNomineeRelationOthers")).value == "") {
			alert("Please enter the relation");
			document.getElementById("secondNomineeRelationOthers").focus();
			return false;
		}
		var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
		}else {
		return false;
		}
	} //added by ajit on 13/04/2010
	if (generalInformationForm.accountType.value == '2') 
      {
	   if (document.getElementById("agreeWithComanyAccount").checked == false){
		alert("Please select checkbox");
		generalInformationForm.agreeWithComanyAccount.focus();
		return false;
	}
	}
	// ended by ajit on 13/04/2010
	else {
		document.getElementById("backbutton").value = "1";
		document.getElementById("javascript").value = "true";
		return true;
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

function validateTextareaGI(){
	if (generalInformationForm.underMatricSubject.value.length > 100) {
		alert("Please do not enter more than 100 characters.Please shorten your entry and submit again.");
		generalInformationForm.underMatricSubject.value="";
		generalInformationForm.underMatricSubject.focus();
		return false;
	}
	if (generalInformationForm.highSchoolSubject.value.length > 100) {
		alert("Please do not enter more than 100 characters.Please shorten your entry and submit again.");
		generalInformationForm.highSchoolSubject.value="";
		generalInformationForm.highSchoolSubject.focus();
		return false;
	}
	if (generalInformationForm.higherSecondrySubject.value.length > 100) {
		alert("Please do not enter more than 100 characters.Please shorten your entry and submit again.");
		generalInformationForm.higherSecondrySubject.value="";
		generalInformationForm.higherSecondrySubject.focus();
		return false;
	}
	if (generalInformationForm.graduationSubject.value.length > 50) {
		alert("Please do not enter more than 50 characters.Please shorten your entry and submit again.");
		generalInformationForm.graduationSubject.value="";
		generalInformationForm.graduationSubject.focus();
		return false;
	}
	if (generalInformationForm.otherQualificationSubject.value.length > 50) {
		alert("Please do not enter more than 50 characters.Please shorten your entry and submit again.");
		generalInformationForm.otherQualificationSubject.value="";
		generalInformationForm.otherQualificationSubject.focus();
		return false;
	}else{
	 return true
	}
}


function postGI() {
	if (document.getElementById("post").value == 8) {
		document.getElementById("other").disabled = false;
		document.forms[0].other.style.backgroundColor = "#ffffff";
	} else {
		document.getElementById("other").disabled = true;
		document.getElementById("other").value = "";
		document.forms[0].other.style.backgroundColor = "#eeeeee";
	}
}
function nomineeGI() {
	if (document.getElementById("firstNomineeRelation").selectedIndex == 8) {
		document.getElementById("firstNomineeRelationOthers").disabled = false;
		document.forms[0].firstNomineeRelationOthers.style.backgroundColor = "#ffffff";
	} else {
		document.getElementById("firstNomineeRelationOthers").value = "";
		document.getElementById("firstNomineeRelationOthers").disabled = true;
		document.forms[0].firstNomineeRelationOthers.style.backgroundColor = "#eeeeee";
	}
}
function nomineeSecond() {
	if (document.getElementById("secondNomineeRelation").selectedIndex == 8) {
		document.getElementById("secondNomineeRelationOthers").disabled = false;
		document.forms[0].secondNomineeRelationOthers.style.backgroundColor = "#ffffff";
	} else {
		document.getElementById("secondNomineeRelationOthers").value = "";
		document.getElementById("secondNomineeRelationOthers").disabled = true;
		document.forms[0].secondNomineeRelationOthers.style.backgroundColor = "#eeeeee";
	}
}
function checkAccountType() {
	if (document.getElementById("accountType").selectedIndex == 1) {
		document.getElementById("agreeWithComanyAccount").disabled = true;
		document.getElementById("agreeWithComanyAccount").checked=false;
		document.getElementById("savingAccountNo").disabled = false;
		document.getElementById("bankName").disabled = false;
		document.getElementById("branchName").disabled = false;
		document.getElementById("ifscCode").disabled = false;
		document.getElementById("bankCode").disabled = false;
		//document.getElementById("branchPin").disabled = false;
		document.getElementById("fullAddressOfBank").disabled = false;
		document.getElementById("firstNomineeRelation").disabled = false;
		document.getElementById("secondNomineeRelation").disabled = false;
		document.getElementById("firstNomineeRelationOthers").disabled = false;
		document.getElementById("secondNomineeRelationOthers").disabled = false;
		document.getElementById("secondNomineeOfEmployeeSavingAccount").disabled = false;
		document.getElementById("firstNomineeOfEmployeeSavingAccount").disabled = false;
		document.getElementById("firstNomineeRelationOthers").disabled = true;
		document.getElementById("secondNomineeRelationOthers").disabled = true;
	}
	if (document.getElementById("accountType").selectedIndex == 2) {
		document.getElementById("agreeWithComanyAccount").disabled = false;
		document.getElementById("savingAccountNo").value = "";
		document.getElementById("savingAccountNo").disabled = true;
		document.getElementById("bankName").disabled = true;
		document.getElementById("branchName").disabled = true;
		document.getElementById("ifscCode").disabled = true;
		document.getElementById("bankCode").disabled = true;
		//document.getElementById("branchPin").selectedIndex = 0;
		document.getElementById("fullAddressOfBank").disabled = true;
		document.getElementById("firstNomineeRelation").selectedIndex = 0;
		document.getElementById("secondNomineeRelation").selectedIndex = 0;
		document.getElementById("firstNomineeRelation").disabled = true;
		document.getElementById("secondNomineeRelation").disabled = true;
		document.getElementById("firstNomineeRelationOthers").disabled = true;
		document.getElementById("secondNomineeRelationOthers").disabled = true;
		document.getElementById("secondNomineeOfEmployeeSavingAccount").disabled = true;
		document.getElementById("firstNomineeOfEmployeeSavingAccount").disabled = true;
		document.getElementById("bankName").value = "";
		document.getElementById("branchName").value = "";
		document.getElementById("ifscCode").value = "";
		document.getElementById("bankCode").value = "";
		//document.getElementById("branchPin").disabled = true;
		document.getElementById("fullAddressOfBank").value = "";
		document.getElementById("firstNomineeRelation").value = "";
		document.getElementById("firstNomineeOfEmployeeSavingAccount").value = "";
		document.getElementById("secondNomineeOfEmployeeSavingAccount").value = "";
		document.getElementById("firstNomineeRelationOthers").value = "";
		document.getElementById("secondNomineeRelationOthers").value = "";
	}
}
function doDisable(generalInformationForm, value) {
	if (value == "Own Account") {
		generalInformationForm.agreeWithComanyAccount.disabled = true;
		generalInformationForm.savingAccountNo.disabled = false;
		generalInformationForm.bankName.disabled = false;
		generalInformationForm.fullAddressOfBank.disabled = false;
		generalInformationForm.firstNomineeOfEmployeeSavingAccount.disabled = false;
		generalInformationForm.secondNomineeOfEmployeeSavingAccount.disabled = false;
	} else {
		if (value == "Company Account") {
			generalInformationForm.savingAccountNo.disable = true;
			generalInformationForm.bankName.value = "";
			generalInformationForm.bankName.disabled = true;
			generalInformationForm.fullAddressOfBank.disable = true;
			generalInformationForm.agreeWithComanyAccount.disabled = false;
			generalInformationForm.firstNomineeOfEmployeeSavingAccount.disabled = true;
			generalInformationForm.secondNomineeOfEmployeeSavingAccount.disabled = true;
		}
	}
}
function doEnable(generalInformationForm, value) {
	if (value == "Company Account") {
	}
}
function convertlb() {
	var pounds = document.getElementById("pounds").value;
	document.getElementById("kilos").value = (Math.abs(pounds / 2.2046)).toFixed(0);
}
function convertkg() {
	var kilos = document.getElementById("kilos").value;
	document.getElementById("pounds").value = (Math.abs(kilos * 2.2046)).toFixed(0);
}
function convertcm() {
	var cms = document.getElementById("cms").value;
	if(cms >=252)
	{
	alert("cm should not be greater than 252");
	document.getElementById("cms").value="0";
	return;
	}
	document.getElementById("inches").value = (Math.abs(cms / 2.54)).toFixed(0);
}
function convertinch() {
	var inches = document.getElementById("inches").value;
	document.getElementById("cms").value = (Math.abs(inches * 2.54)).toFixed(0);
}
//started by ajit on 07/04/2010
function convertft() {
	var feet = document.getElementById("feet").value;
   var inch=document.getElementById("inch").value;
	//document.getElementById("inch").value = (Math.abs(feet * 12)).toFixed(0);
	document.getElementById("cm").value="";
	document.getElementById("cm").value = (Math.abs(feet * 30.48 + inch * 2.54)).toFixed(0);
}
function convertin() {
	var feet = document.getElementById("feet").value;
	var inch = document.getElementById("inch").value;
	if(inch > 120)
	{alert("inches should not be greater than 120");
	document.getElementById("inch").value="0";
	return;
	}
//	document.getElementById("feet").value = (Math.abs(inch / 12)).toFixed(0);
	if(inch >= 12)
	{
    document.getElementById("feet").value = parseInt(Math.abs(inch / 12)).toFixed(0);
    document.getElementById("inch").value = (Math.abs(inch % 12)).toFixed(0);
    }
    document.getElementById("cm").value="";
    //alert((document.getElementById("feet").value) * 30.48);
    //alert(document.getElementById("inch").value * 2.54);
	document.getElementById("cm").value = (Math.abs((document.getElementById("feet").value * 30.48) + (document.getElementById("inch").value * 2.54) )).toFixed(0);
	
}	

function convertcenti() {
	var cm = document.getElementById("cm").value;
	if(cm >= 302)
	{
	alert("cm should not be greater than 301");
	document.getElementById("cm").value="0";
	return;
	}
	else{
	document.getElementById("feet").value = parseInt(Math.abs(cm / 30.48)).toFixed(0);
	var r=(Math.abs(cm % 30.48)).toFixed(0);
	document.getElementById("inch").value = (Math.abs(r /2.54)).toFixed(0);
}}
//ended by ajit on 07/04/2010
// Ended by Vidya

// Added by Vidya on 19-07-10 for General Information Update Form
 function validateUpdateGI(){
try{
	if (generalInformationForm.deptId.value == "") {
		alert("Please select department");
		generalInformationForm.deptId.focus();
		return false;
	}
	if (generalInformationForm.post.value == "") {
		alert("Please select post");
		generalInformationForm.post.focus();
		return false;
	}
	var previousId = 0;
	previousId = generalInformationForm.previousDesignationId.value;
		if(generalInformationForm.post.value == previousId){
		}else{
			if (generalInformationForm.newDesignationEffectiveDate.value == "") {
			alert("Please enter effective date");
			generalInformationForm.newDesignationEffectiveDate.focus();
			return false;
			}
			if (generalInformationForm.newDesignationEffectiveDate.value != "") {
			var intFlag = 0;
			var strErrMsg = "Invalid effective date \n\n";
			var dtDate = generalInformationForm.newDesignationEffectiveDate.value; 
			tmp = dtDate.split("/");
			xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			userdate = calcJulian(xDate);
			gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp1 = day + "/" + month + "/" + year;
			tm = tmp1.split("/");
			zDate = tm[1] + "/" + tm[0] + "/" + tm[2];
			currentdate = calcJulian(zDate);
			if (userdate < currentdate) {
				strErrMsg = strErrMsg + "Effective date should not be less than current date \n";
				alert(strErrMsg);
				generalInformationForm.newDesignationEffectiveDate.focus();
				return false;
			}
			var dojDate = generalInformationForm.dateofJoining.value; 
			if(dojDate == ''){
			var doj = "00/00/0000";
			}else{
			var doj = dojDate;
			}
			temp = doj.split("/");
			yDate = temp[1] + "/" + temp[0] + "/" + temp[2];
			joiningDate = calcJulian(yDate);
			if (userdate < joiningDate) {
				strErrMsg = strErrMsg + "Designation can not be changed as effective date should not be less than date of joining";
				alert(strErrMsg);
				generalInformationForm.post.focus();
				generalInformationForm.newDesignationEffectiveDate.value = "";
				return false;
			}
			if (joiningDate == null) {
				strErrMsg = strErrMsg + "Designation can not be changed as the candidate has not appointed yet";
				alert(strErrMsg);
				generalInformationForm.post.focus();
				generalInformationForm.newDesignationEffectiveDate.value = "";
				return false;
			}
		   }
		   
		}
    if (alphabet(generalInformationForm.candidateMiddleName) == false) {
		return false;
	}
	if (alphabet(generalInformationForm.candidateLastName) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentSTDCodePhone1) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentContactNo1) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentSTDCodePhone2) == false) {
		return false;
	}
	if (numeric(generalInformationForm.permanentContactNo2) == false) {
		return false;
	}
	if (generalInformationForm.presentPremisesVillage.value == "") {
		alert("Please enter your name of premises / building / village");
		generalInformationForm.presentPremisesVillage.focus();
		return false;
	}
	if (generalInformationForm.presCountryId.selectedIndex == 0) {
		alert("Please select country");
		generalInformationForm.presCountryId.focus();
		return false;
	}
	if (generalInformationForm.state2.selectedIndex == 0) {
		alert("Please select state");
		generalInformationForm.state2.focus();
		return false;
	}
	if (generalInformationForm.district2.selectedIndex == 0) {
		alert("Please select district");
		generalInformationForm.district2.focus();
		return false;
	}
	if (generalInformationForm.presCityId.selectedIndex == 0) {
		alert("Please select city");
		generalInformationForm.presCityId.focus();
		return false;
	}
	if (generalInformationForm.presentAddArea.selectedIndex == 0) {
		alert("Please select area");
		generalInformationForm.presentAddArea.focus();
		return false;
	}
	if (generalInformationForm.postOffice2.selectedIndex == 0) {
		alert("Please select post office");
		generalInformationForm.postOffice2.focus();
		return false;
	}
	if (numeric(generalInformationForm.presentSTDCodePhone1) == false) {
		return false;
	}
	if (numeric(generalInformationForm.presentContactNo1) == false) {
		return false;
	}
	if (generalInformationForm.presentContactNo2.value == "") {
		alert("Please enter your mobile no.");
		generalInformationForm.presentContactNo2.focus();
		return false;
	}
	if (numeric(generalInformationForm.presentContactNo2) == false) {
		return false;
	}
	if (generalInformationForm.presentContactNo2.value.length < 10 && generalInformationForm.presentContactNo2.value.length > 0) {
		alert("Please enter a valid ten digit mobile no.");
		generalInformationForm.presentContactNo2.value = "";
		generalInformationForm.presentContactNo2.focus();
		return false;
	}
	if(emailValidator(generalInformationForm.email1)==false){
       generalInformationForm.email1.focus();
	   return false;
	}
	if(emailValidator(generalInformationForm.email2)==false){
       generalInformationForm.email2.focus();
	   return false;
	}
	if ((generalInformationForm.height.value == "")||(generalInformationForm.height.value == 0) ) {
		alert("Please enter height");
		generalInformationForm.height.focus();
		return false;
	}
	if (numeric(generalInformationForm.height) == false) {
		return false;
	}
	if ((generalInformationForm.chest.value == "")||(generalInformationForm.chest.value == 0)) {
		alert("Please enter chest");
		generalInformationForm.chest.focus();
		return false;
	}
	if (numeric(generalInformationForm.chest) == false) {
		return false;
		}
	if ((generalInformationForm.weight.value == "")||(generalInformationForm.weight.value == 0)) {
		alert("Please enter weight");
		generalInformationForm.weight.focus();
		return false;
	}
	if (numeric(generalInformationForm.weight) == false) {
		return false;
	}
	if ((document.getElementById("otherLanguage").selectedIndex == 0) && (document.getElementById("otherLanguageRead").checked == true || document.getElementById("otherLanguageWrite").checked == true || document.getElementById("otherLanguageSpeak").checked == true)) {
		alert("Please select language");
		document.getElementById("otherLanguage").focus();
	   return false;
	}
	if ((document.getElementById("hindiRead").checked == false) && (document.getElementById("hindiWrtie").checked == false) && (document.getElementById("hindiSpeak").checked == false)) {
		alert("Please select hindi language");
		document.getElementById("hindiWrtie").focus();
		return false;
	}
	if ((document.getElementById("otherLanguage").selectedIndex != 0) && (document.getElementById("otherLanguageRead").checked == false && document.getElementById("otherLanguageWrite").checked == false && document.getElementById("otherLanguageSpeak").checked == false)) {
		alert("Please select a relevant option for other language");
		(document.getElementById("otherLanguage")).focus();
		return false;
	}
	if ((generalInformationForm.highSchoolBoard.value != "") || (generalInformationForm.highSchoolInstitute.value != "")||(generalInformationForm.highSchoolPercentage.value != 0)||(generalInformationForm.highSchoolSubject.value != "")){

    if (generalInformationForm.highSchoolBoard.value == "") {
		alert("Please enter your high school board / university");
		generalInformationForm.highSchoolBoard.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.highSchoolBoard) == false) {
		return false;
	}
	if (generalInformationForm.highSchoolInstitute.value == "") {
		alert("Please enter your high school Institute / College");
		generalInformationForm.highSchoolInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.highSchoolInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.highSchoolCountryId.selectedIndex == 0) {
		alert("Please select high school country");
		generalInformationForm.highSchoolCountryId.focus();
		return false;
	}
	if (generalInformationForm.highSchoolState.selectedIndex == 0) {
		alert("Please select high school state");
		generalInformationForm.highSchoolState.focus();
		return false;
	}
	if (generalInformationForm.highSchoolCity.selectedIndex == 0) {
		alert("Please select high school district");
		generalInformationForm.highSchoolCity.focus();
		return false;
	}
	if (generalInformationForm.highSchoolCityId.selectedIndex == 0) {
		alert("Please select high school city");
		generalInformationForm.highSchoolCityId.focus();
		return false;
	}
	if (generalInformationForm.highSchoolArea.selectedIndex == 0) {
		alert("Please select high school area");
		generalInformationForm.highSchoolArea.focus();
		return false;
	}
	if (generalInformationForm.highSchoolPostOffice.selectedIndex == 0) {
		alert("Please select high school post office");
		generalInformationForm.highSchoolPostOffice.focus();
		return false;
	}
	if (generalInformationForm.highSchoolPercentage.value == "") {
		alert("Please enter your high school percentage");
		generalInformationForm.highSchoolPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.highSchoolPercentage) == false) {
		return false;
	}
	if (generalInformationForm.highSchoolSubject.value == "") {
		alert("Please enter your high school subject");
		generalInformationForm.highSchoolSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.highSchoolSubject) == false) {
		return false;
	}

	}
	if ((generalInformationForm.higherSecondryBoard.value != "") || (generalInformationForm.higherSecondaryInstitute.value != "")||(generalInformationForm.higherSecondryPercentage.value != 0)||(generalInformationForm.higherSecondrySubject.value != "")){

    if (generalInformationForm.higherSecondryBoard.value == "") {
		alert("Please enter your higher secondry board / university");
		generalInformationForm.higherSecondryBoard.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.higherSecondryBoard) == false) {
		return false;
	}
	if (generalInformationForm.higherSecondaryInstitute.value == "") {
		alert("Please enter your higher secondary institute / college");
		generalInformationForm.higherSecondaryInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.higherSecondaryInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.higherSecondaryCountryId.selectedIndex == 0) {
		alert("Please select higher secondary country");
		generalInformationForm.higherSecondaryCountryId.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryState.selectedIndex == 0) {
		alert("Please select higher secondary state");
		generalInformationForm.higherSecondaryState.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryCity.selectedIndex == 0) {
		alert("Please select higher secondary district");
		generalInformationForm.higherSecondaryCity.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryCityId.selectedIndex == 0) {
		alert("Please select higher secondary city");
		generalInformationForm.higherSecondaryCityId.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryArea.selectedIndex == 0) {
		alert("Please select higher secondary area");
		generalInformationForm.higherSecondaryArea.focus();
		return false;
	}
	if (generalInformationForm.higherSecondaryPostOffice.selectedIndex == 0) {
		alert("Please select higher secondary post office");
		generalInformationForm.higherSecondaryPostOffice.focus();
		return false;
	}
	if (generalInformationForm.higherSecondryPercentage.value == "") {
		alert("Please enter your higher secondry percentage");
		generalInformationForm.higherSecondryPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.higherSecondryPercentage) == false) {
		return false;
	}
	if (generalInformationForm.higherSecondrySubject.value == "") {
		alert("Please enter your higher secondry subject");
		generalInformationForm.higherSecondrySubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.higherSecondrySubject) == false) {
		return false;
	}

	}
	if ((generalInformationForm.graduationUniversity.value != "") || (generalInformationForm.graduationInstitute.value != "")||(generalInformationForm.graduationPercentage.value != 0)||(generalInformationForm.graduationSubject.value != "")){

    if (generalInformationForm.graduationUniversity.value == "") {
		alert("Please enter your graduation board / university");
		generalInformationForm.graduationUniversity.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.graduationUniversity) == false) {
		return false;
	}
	if (generalInformationForm.graduationInstitute.value == "") {
		alert("Please enter your graduation institute / college");
		generalInformationForm.graduationInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.graduationInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.graduationCountryId.selectedIndex == 0) {
		alert("Please select graduation country");
		generalInformationForm.graduationCountryId.focus();
		return false;
	}
	if (generalInformationForm.graduationState.selectedIndex == 0) {
		alert("Please select graduation state");
		generalInformationForm.graduationState.focus();
		return false;
	}
	if (generalInformationForm.graduationCity.selectedIndex == 0) {
		alert("Please select graduation district");
		generalInformationForm.graduationCity.focus();
		return false;
	}
	if (generalInformationForm.graduationCityId.selectedIndex == 0) {
		alert("Please select graduation city");
		generalInformationForm.graduationCityId.focus();
		return false;
	}
	if (generalInformationForm.graduationArea.selectedIndex == 0) {
		alert("Please select graduation area");
		generalInformationForm.graduationArea.focus();
		return false;
	}
	if (generalInformationForm.graduationPostOffice.selectedIndex == 0) {
		alert("Please select graduation post office");
		generalInformationForm.graduationPostOffice.focus();
		return false;
	}
	if (generalInformationForm.graduationPercentage.value == "") {
		alert("Please enter your graduation percentage");
		generalInformationForm.graduationPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.graduationPercentage) == false) {
		return false;
	}
	if (generalInformationForm.graduationDegree.selectedIndex == 0) {
		alert("Please select graduation degree");
		generalInformationForm.graduationDegree.focus();
		return false;
	}
	if (generalInformationForm.graduationSubject.value == "") {
		alert("Please enter your graduation subject");
		generalInformationForm.graduationSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.graduationSubject) == false) {
		return false;
	}

	}
	if ((generalInformationForm.otherQualificationUniversity.value != "") || (generalInformationForm.otherInstitute.value != "")||(generalInformationForm.otherQualificationPercentage.value != 0)||(generalInformationForm.otherQualificationSubject.value != "")){

    if (generalInformationForm.otherQualificationUniversity.value == "") {
		alert("Please enter your higher education board / university");
		generalInformationForm.otherQualificationUniversity.focus();
		return false;
	}
    if (Alphanumericexp(generalInformationForm.otherQualificationUniversity) == false) {
		return false;
	}
	if (generalInformationForm.otherInstitute.value == "") {
		alert("Please enter your higher education institute / college");
		generalInformationForm.otherInstitute.focus();
		return false;
	}
	if (Alphanumericexp(generalInformationForm.otherInstitute) == false) {
		return false;
	}
	
	if (generalInformationForm.otherCountryId.selectedIndex == 0) {
		alert("Please select higher education country");
		generalInformationForm.otherCountryId.focus();
		return false;
	}
	if (generalInformationForm.otherState.selectedIndex == 0) {
		alert("Please select higher education state");
		generalInformationForm.otherState.focus();
		return false;
	}
	if (generalInformationForm.otherCity.selectedIndex == 0) {
		alert("Please select higher education district");
		generalInformationForm.otherCity.focus();
		return false;
	}
	if (generalInformationForm.otherCityId.selectedIndex == 0) {
		alert("Please select higher education city");
		generalInformationForm.otherCityId.focus();
		return false;
	}
	if (generalInformationForm.higherEducationArea.selectedIndex == 0) {
		alert("Please select higher education area");
		generalInformationForm.higherEducationArea.focus();
		return false;
	}
	if (generalInformationForm.otherPostoffice.selectedIndex == 0) {
		alert("Please select higher education post office");
		generalInformationForm.otherPostoffice.focus();
		return false;
	}
	if (generalInformationForm.otherQualificationPercentage.value == "") {
		alert("Please enter your higher education percentage");
		generalInformationForm.otherQualificationPercentage.focus();
		return false;
	}
	if (numericPercentage(generalInformationForm.otherQualificationPercentage) == false) {
		return false;
	}
	if (generalInformationForm.otherQualifyDegree.selectedIndex == 0) {
		alert("Please select higher education degree");
		generalInformationForm.otherQualifyDegree.focus();
		return false;
	}
	if (generalInformationForm.otherQualificationSubject.value == "") {
		alert("Please enter your higher education subject");
		generalInformationForm.otherQualificationSubject.focus();
		return false;
	}
	if (alphabet(generalInformationForm.otherQualificationSubject) == false) {
		return false;
	}

	}
	if (generalInformationForm.panCard.value != 0){
	if (Alphanumeric(generalInformationForm.panCard) == false){
	return false;
	}}
	if (generalInformationForm.voterNo.value != 0){
	if (Alphanumeric(generalInformationForm.voterNo) == false){
	return false;
	}}
	if (generalInformationForm.rationNo.value != 0){
	if (Alphanumeric(generalInformationForm.rationNo) == false){
	return false;
	}}
//	if (generalInformationForm.drivingNo.value != 0){
//	if (Alphanumeric(generalInformationForm.drivingNo) == false){
//	return false;
//	}}
	if (generalInformationForm.voterIssue.value != 0){
	if (alphabet(generalInformationForm.voterIssue) == false) {
		return false;
	}}
	if (generalInformationForm.rationIssue.value != 0){
	if (alphabet(generalInformationForm.rationIssue) == false) {
		return false;
	}}
	if (generalInformationForm.drivingIssue.value != 0){
	if (alphabet(generalInformationForm.drivingIssue) == false) {
		return false;
	}}
	if (generalInformationForm.passportIssuingAuthority.value != 0){
	if (alphabet(generalInformationForm.passportIssuingAuthority) == false) {
		return false;
	}}
	
	if((generalInformationForm.otherDetails.value !=0)||(generalInformationForm.otherDetails.value != "")){
	 if(generalInformationForm.otherDetailsNo.value == ""){
	 alert("Please enter no.");
	 generalInformationForm.otherDetailsNo.focus();
	 return false;
	 }
	 if(generalInformationForm.otherDetailsIssuingAuthority.value == ""){
	 alert("Please enter issuing authority");
	 generalInformationForm.otherDetailsIssuingAuthority.focus();
	 return false;
	 }
	 if(generalInformationForm.otherDetailsValidTill.value == ""){
	 alert("Please enter validation date");
	 generalInformationForm.otherDetailsValidTill.focus();
	 return false;
	 }
	}
    if (generalInformationForm.country.disabled == true) {
		generalInformationForm.country.disabled = false;
	}
 	if (generalInformationForm.state1.disabled == true) {
		generalInformationForm.state1.disabled = false;
	}
	if (generalInformationForm.district1.disabled == true) {
		generalInformationForm.district1.disabled = false;
	}
	if (generalInformationForm.permCityId.disabled == true) {
		generalInformationForm.permCityId.disabled = false;
	}
	if (generalInformationForm.permanentAddArea.disabled == true) {
		generalInformationForm.permanentAddArea.disabled = false;
	}
	if (generalInformationForm.postOffice1.disabled == true) {
		generalInformationForm.postOffice1.disabled = false;
	}
	if (generalInformationForm.bloodGroup.disabled == true) {
		generalInformationForm.bloodGroup.disabled = false;
	}
	if (generalInformationForm.hindiRead.disabled == true) {
		generalInformationForm.hindiRead.disabled = false;
	}
	if (generalInformationForm.hindiWrtie.disabled == true) {
		generalInformationForm.hindiWrtie.disabled = false;
	}
	if (generalInformationForm.hindiSpeak.disabled == true) {
		generalInformationForm.hindiSpeak.disabled = false;
	}
	if (generalInformationForm.underMetricCountryId.disabled == true) {
		generalInformationForm.underMetricCountryId.disabled = false
	}
	if (generalInformationForm.metricState.disabled == true) {
		generalInformationForm.metricState.disabled = false;
	}
	if (generalInformationForm.metricCity.disabled == true) {
		generalInformationForm.metricCity.disabled = false;
	}
	if (generalInformationForm.underMetricCityId.disabled == true) {
		generalInformationForm.underMetricCityId.disabled = false;
	}
	if (generalInformationForm.underMetricArea.disabled == true) {
		generalInformationForm.underMetricArea.disabled = false;
	}
	if (generalInformationForm.underMetricPostOffice.disabled == true) {
		generalInformationForm.underMetricPostOffice.disabled = false;
	}
	if (generalInformationForm.highSchoolCountryId.disabled == true) {
		generalInformationForm.highSchoolCountryId.disabled = false;
	}
	if (generalInformationForm.highSchoolState.disabled == true) {
		generalInformationForm.highSchoolState.disabled = false;
	}
	if (generalInformationForm.highSchoolCity.disabled == true) {
		generalInformationForm.highSchoolCity.disabled = false;
	}
	if (generalInformationForm.highSchoolCityId.disabled == true) {
		generalInformationForm.highSchoolCityId.disabled = false;
	}
	if (generalInformationForm.highSchoolArea.disabled == true) {
		generalInformationForm.highSchoolArea.disabled = false;
	}
	if (generalInformationForm.highSchoolPostOffice.disabled == true) {
		generalInformationForm.highSchoolPostOffice.disabled = false;
	}
	if (generalInformationForm.higherSecondaryCountryId.disabled == true) {
		generalInformationForm.higherSecondaryCountryId.disabled = false;
	}
	if (generalInformationForm.higherSecondaryState.disabled == true) {
		generalInformationForm.higherSecondaryState.disabled = false;
	}
	if (generalInformationForm.higherSecondaryCity.disabled == true) {
		generalInformationForm.higherSecondaryCity.disabled = false;
	}
	if (generalInformationForm.higherSecondaryCityId.disabled == true) {
		generalInformationForm.higherSecondaryCityId.disabled = false;
	}
	if (generalInformationForm.higherSecondaryArea.disabled == true) {
		generalInformationForm.higherSecondaryArea.disabled = false;
	}
	if (generalInformationForm.higherSecondaryPostOffice.disabled == true) {
		generalInformationForm.higherSecondaryPostOffice.disabled = false;
	}
	if (generalInformationForm.graduationCountryId.disabled == true) {
		generalInformationForm.graduationCountryId.disabled = false;
	}
	if (generalInformationForm.graduationState.disabled == true) {
		generalInformationForm.graduationState.disabled = false;
	}
	if (generalInformationForm.graduationCity.disabled == true) {
		generalInformationForm.graduationCity.disabled = false;
	}
	if (generalInformationForm.graduationCityId.disabled == true) {
		generalInformationForm.graduationCityId.disabled = false;
	}
	if (generalInformationForm.graduationArea.disabled == true) {
		generalInformationForm.graduationArea.disabled = false;
	}
	if (generalInformationForm.graduationPostOffice.disabled == true) {
		generalInformationForm.graduationPostOffice.disabled = false;
	}
	if (generalInformationForm.graduationDegree.disabled == true) {
		generalInformationForm.graduationDegree.disabled = false;
	}
	if (generalInformationForm.otherCountryId.disabled == true) {
		generalInformationForm.otherCountryId.disabled = false;
	}
	if (generalInformationForm.otherState.disabled == true) {
		generalInformationForm.otherState.disabled = false;
	}
	if (generalInformationForm.otherCity.disabled == true) {
		generalInformationForm.otherCity.disabled = false;
	}
	if (generalInformationForm.otherCityId.disabled == true) {
		generalInformationForm.otherCityId.disabled = false;
	}
	if (generalInformationForm.higherEducationArea.disabled == true) {
		generalInformationForm.higherEducationArea.disabled = false;
	}
	if (generalInformationForm.otherPostoffice.disabled == true) {
		generalInformationForm.otherPostoffice.disabled = false;
	}
	if (generalInformationForm.otherQualifyDegree.disabled == true) {
		generalInformationForm.otherQualifyDegree.disabled = false;
	}
	if (generalInformationForm.hindiRead.disabled==true){
		generalInformationForm.hindiRead.disabled=false;
	}
	if (generalInformationForm.hindiWrtie.disabled==true){
		generalInformationForm.hindiWrtie.disabled=false;
	}
	if (generalInformationForm.hindiSpeak.disabled==true){
		generalInformationForm.hindiSpeak.disabled=false;
	}
	if (generalInformationForm.englishRead.disabled == true) {
		generalInformationForm.englishRead.disabled = false;
	}
	if (generalInformationForm.englishWrite.disabled == true) {
		generalInformationForm.englishWrite.disabled = false;
	}
	if (generalInformationForm.englishSpeak.disabled == true) {
		generalInformationForm.englishSpeak.disabled = false;
	}
	if (generalInformationForm.otherLanguage.disabled == true) {
		generalInformationForm.otherLanguage.disabled = false;
	}
	if (generalInformationForm.otherLanguageRead.disabled == true) {
		generalInformationForm.otherLanguageRead.disabled = false;
	}
	if (generalInformationForm.otherLanguageWrite.disabled == true) {
		generalInformationForm.otherLanguageWrite.disabled = false;
	}
	if (generalInformationForm.otherLanguageSpeak.disabled == true) {
		generalInformationForm.otherLanguageSpeak.disabled = false;
	}
	if(generalInformationForm.accountType.disabled==true){
		generalInformationForm.accountType.disabled=false;
	}
	if(generalInformationForm.firstNomineeRelation.disabled==true){
		generalInformationForm.firstNomineeRelation.disabled=false;
	}
	if(generalInformationForm.secondNomineeRelation.disabled==true){
		generalInformationForm.secondNomineeRelation.disabled=false;
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
// Ended by Vidya




// Validation Function For Ex-Serviceman Form (Added By Vidya)
function validateExservice() {
try{
	   if(document.getElementById('orgCountryId1').disabled == true){
	   document.getElementById('orgCountryId1').disabled = false;
	   }
	   if(document.getElementById('orgCountryId2').disabled == true){
	   document.getElementById('orgCountryId2').disabled = false;
	   }
	   if(document.getElementById('orgStateId1').disabled == true){
	   document.getElementById('orgStateId1').disabled = false;
	   }
	    if(document.getElementById('orgStateId2').disabled == true){
	   document.getElementById('orgStateId2').disabled = false;
	   }
	   if(document.getElementById('orgDistrictId1').disabled == true){
	   document.getElementById('orgDistrictId1').disabled = false;
	   }
	   if(document.getElementById('orgDistrictId2').disabled == true){
	   document.getElementById('orgDistrictId2').disabled = false;
	   }
	   if(document.getElementById('orgCityId1').disabled == true){
	   document.getElementById('orgCityId1').disabled = false;
	   }
	   if(document.getElementById('orgCityId2').disabled == true){
	   document.getElementById('orgCityId2').disabled = false;
	   }
	   if(document.getElementById('OrganizationArea1').disabled == true){
	   document.getElementById('OrganizationArea1').disabled = false;
	   }
	    if(document.getElementById('OrganizationArea2').disabled == true){
	   document.getElementById('OrganizationArea2').disabled = false;
	   }
	   if(document.getElementById('orgPostOffice1').disabled == true){
	   document.getElementById('orgPostOffice1').disabled = false;
	   }
	    if(document.getElementById('orgPostOffice2').disabled == true){
	   document.getElementById('orgPostOffice2').disabled = false;
	   }
	   
	valid = true;
	if (exservicemanForm.serviceFrom.value == "") {
		alert("Please enter date");
		exservicemanForm.serviceFrom.focus();
		return false;
	}
	if (exservicemanForm.serviceTo.value == "") {
		alert("Please enter date");
		exservicemanForm.serviceTo.focus();
		return false;
	}
	if (exservicemanForm.parentUnit.value == "") {
		alert("Please enter parent unit");
		exservicemanForm.parentUnit.focus();
		return false;
	}
	if (Alphanumeric(exservicemanForm.parentUnit) == false) {
		return false;
	}
	if (exservicemanForm.lastRankHeld.value == "") {
		alert("Please enter last rank");
		exservicemanForm.lastRankHeld.focus();
		return false;
	}
	if (Alphanumeric(exservicemanForm.lastRankHeld) == false) {
		return false;
	}
	if (exservicemanForm.unitServed.value == "") {
		alert("Please enter unit / area served");
		exservicemanForm.unitServed.focus();
		return false;
	}
	if (Alphanumeric(exservicemanForm.unitServed) == false) {
		return false;
	}
	if (exservicemanForm.exServicemanIDCardNo.value == "") {
		alert("Please enter ex-serviceman id card no.");
		exservicemanForm.exServicemanIDCardNo.focus();
		return false;
	}
	if (exservicemanForm.nameofOrganization1.value == "") {
		alert("Please enter name of your organization");
		exservicemanForm.nameofOrganization1.focus();
		return false;
	}
	if (exservicemanForm.duration1.value == "") {
		alert("Please enter duration of your organization");
		exservicemanForm.duration1.focus();
		return false;
	}
	if (exservicemanForm.post1.value == "") {
		alert("Please enter post");
		exservicemanForm.post1.focus();
		return false;
	}
	if (exservicemanForm.location1.value == "") {
		alert("Please enter name of premises / building / village");
		exservicemanForm.location1.focus();
		return false;
	}
	if (exservicemanForm.organizationCountry1.selectedIndex == 0) {
		alert("Please select country");
		exservicemanForm.organizationCountry1.focus();
		return false;
	}
	if (exservicemanForm.organizationState1.selectedIndex == 0) {
		alert("Please select state");
		exservicemanForm.organizationState1.focus();
		return false;
	}
	if (exservicemanForm.organizationDistrict1.selectedIndex == 0) {
		alert("Please select district");
		exservicemanForm.organizationDistrict1.focus();
		return false;
	}
	if (exservicemanForm.organizationCity1.selectedIndex == 0) {
		alert("Please select city");
		exservicemanForm.organizationCity1.focus();
		return false;
	}
	if (exservicemanForm.OrganizationArea1.selectedIndex == 0) {
		alert("Please select area");
		exservicemanForm.OrganizationArea1.focus();
		return false;
	}
	if (exservicemanForm.organizationpostOffice1.selectedIndex == 0) {
		alert("Please select post office");
		exservicemanForm.organizationpostOffice1.focus();
		return false;
	}
	 var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
		}else {
		return false;
		}
	return valid;
	}
catch(e){
 return false;
} 
}
// Ended by Vidya

// Validation Function For ESIC Form (Added By Vidya)	
function validateESIC(esicForm) {
try{
	valid = true;
	if(document.getElementById("insuredPersonsCountryId[0]").disabled==true)
{
document.getElementById("insuredPersonsCountryId[0]").disabled=false;
}
if(document.getElementById("insuredPersonsStateId[0]").disabled == true)
{
document.getElementById("insuredPersonsStateId[0]").disabled = false;
}

if(document.getElementById("insuredPersonsStateId[1]").disabled==true)
{
document.getElementById("insuredPersonsStateId[1]").disabled=false;
}
if(document.getElementById("insuredPersonsCountryId[1]").disabled == true)
{
document.getElementById("insuredPersonsCountryId[1]").disabled = false;
}

if(document.getElementById("insuredPersonsStateId[2]").disabled==true)
{
document.getElementById("insuredPersonsStateId[2]").disabled=false;
}
if(document.getElementById("insuredPersonsCountryId[2]").disabled == true)
{
document.getElementById("insuredPersonsCountryId[2]").disabled = false;
}

if(document.getElementById("insuredPersonsStateId[3]").disabled==true)
{
document.getElementById("insuredPersonsStateId[3]").disabled=false;
}
if(document.getElementById("insuredPersonsCountryId[3]").disabled == true)
{
document.getElementById("insuredPersonsCountryId[3]").disabled = false;
}

if(document.getElementById("insuredPersonsStateId[4]").disabled==true)
{
document.getElementById("insuredPersonsStateId[4]").disabled=false;
}
if(document.getElementById("insuredPersonsCountryId[4]").disabled == true)
{
document.getElementById("insuredPersonsCountryId[4]").disabled = false;
}

if(document.getElementById("insuredPersonsStateId[5]").disabled==true)
{
document.getElementById("insuredPersonsStateId[5]").disabled=false;
}
if(document.getElementById("insuredPersonsCountryId[5]").disabled == true)
{
document.getElementById("insuredPersonsCountryId[5]").disabled = false;
}

if(document.getElementById("insuredPersonsStateId[6]").disabled==true)
{
document.getElementById("insuredPersonsStateId[6]").disabled=false;
}
if(document.getElementById("insuredPersonsCountryId[6]").disabled == true)
{
document.getElementById("insuredPersonsCountryId[6]").disabled = false;
}
	if (emailValidator(esicForm.email1) == false) {
		return false;
	}
	if (emailValidator(esicForm.email2) == false) {
		return false;
	}
	if (esicForm.branchOffice.value == "") {
		alert("Please Enter Branch Office");
		esicForm.branchOffice.focus();
		return false;
	}
	if (alphabet(esicForm.branchOffice) == false) {
		return false;
	}
	if (esicForm.dispensary.value == "") {
		alert("Please Enter Dispensary");
		esicForm.dispensary.focus();
		return false;
	}
	if (alphabet(esicForm.dispensary) == false) {
		return false;
	}
	if (esicForm.employersCodeNo.value == "") {
		alert("Please Enter Employers Code No.");
		esicForm.employersCodeNo.focus();
		return false;
	}
	if (esicForm.employersName.value == "") {
		alert("Please Enter Name of Employer");
		esicForm.employersName.focus();
		return false;
	}
	if (alphabet(esicForm.employersName) == false) {
		return false;
	}
	if (esicForm.employersAddress.value == "") {
		alert("Please Enter Address of Employer");
		esicForm.employersAddress.focus();
		return false;
	}
	if (alphabet(esicForm.previousEmployersName) == false) {
		return false;
	}
	if (numeric(esicForm.previousEmployersPhoneNo) == false) {
		return false;
	}
	if (esicForm.previousEmployersPhoneNo.value.length < 10 && esicForm.previousEmployersPhoneNo.value.length > 1) {
		alert("Please Enter a Valid Ten Digit Phone No.");
		esicForm.previousEmployersPhoneNo.value = "";
		esicForm.previousEmployersPhoneNo.focus();
		return false;
	}
	if (emailValidator(esicForm.previousEmployersEmail) == false) {
		return false;
	}
	if (esicForm.esicNomineeName.value == "") {
		alert("Please Enter Name");
		esicForm.esicNomineeName.focus();
		return false;
	}
	if (alphabet(esicForm.esicNomineeName) == false) {
		return false;
	}
	if (esicForm.esicNomineeRelationship.value == "") {
		alert("Please Enter Relationship with Employee");
		esicForm.esicNomineeRelationship.focus();
		return false;
	}
	if (alphabet(esicForm.esicNomineeRelationship) == false) {
		return false;
	}
	if (esicForm.esicNomineeAddress.value == "") {
		alert("Please Enter Address");
		esicForm.esicNomineeAddress.focus();
		return false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[0]").value == "No") {
		if (document.getElementById("insuredPersonAddress[0]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[0]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[0]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[0]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[0]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[0]").focus();
			return false;
		}
	}
	if (document.getElementById("insuredPersonsLiveEmployee[1]").value == "No") {
		if (document.getElementById("insuredPersonAddress[1]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[1]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[1]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[1]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[1]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[1]").focus();
			return false;
		}
	}
	if (document.getElementById("insuredPersonsLiveEmployee[2]").value == "No") {
		if (document.getElementById("insuredPersonAddress[2]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[2]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[2]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[2]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[2]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[2]").focus();
			return false;
		}
	}
	if (document.getElementById("insuredPersonsLiveEmployee[3]").value == "No") {
		if (document.getElementById("insuredPersonAddress[3]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[3]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[3]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[3]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[3]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[3]").focus();
			return false;
		}
	}
	if (document.getElementById("insuredPersonsLiveEmployee[4]").value == "No") {
		if (document.getElementById("insuredPersonAddress[4]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[4]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[4]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[4]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[4]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[4]").focus();
			return false;
		}
	}
	if (document.getElementById("insuredPersonsLiveEmployee[5]").value == "No") {
		if (document.getElementById("insuredPersonAddress[5]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[5]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[5]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[5]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[5]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[5]").focus();
			return false;
		}
	}
	if (document.getElementById("insuredPersonsLiveEmployee[6]").value == "No") {
		if (document.getElementById("insuredPersonAddress[6]").value == "") {
			alert("Please Enter Insured Person's Address");
			document.getElementById("insuredPersonAddress[6]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsCountryId[6]").selectedIndex == 0) {
			alert("Please Select Country");
			document.getElementById("insuredPersonsCountryId[6]").focus();
			return false;
		}
		if (document.getElementById("insuredPersonsStateId[6]").selectedIndex == 0) {
			alert("Please Select State");
			document.getElementById("insuredPersonsStateId[6]").focus();
			return false;
		}
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
	return valid;
}
catch(e){
 return false;
}	
}
// Ended by Vidya

function insuredPerson(esicForm) { // Function For Insured Person ESIC Form (Added By Vidya)
	if (document.getElementById("insuredPersonsLiveEmployee[0]").value == "Yes") {
		document.getElementById("insuredPersonAddress[0]").disabled = true;
		document.getElementById("insuredPersonsStateId[0]").disabled = true;
		document.getElementById("insuredPersonsCountryId[0]").disabled = true;
		document.getElementById("insuredPersonAddress[0]").value = "";
		document.getElementById("insuredPersonsStateId[0]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[0]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[0]").value == "No") {
		document.getElementById("insuredPersonAddress[0]").disabled = false;
		document.getElementById("insuredPersonsStateId[0]").disabled = false;
		document.getElementById("insuredPersonsCountryId[0]").disabled = false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[1]").value == "Yes") {
		document.getElementById("insuredPersonAddress[1]").disabled = true;
		document.getElementById("insuredPersonsStateId[1]").disabled = true;
		document.getElementById("insuredPersonsCountryId[1]").disabled = true;
		document.getElementById("insuredPersonAddress[1]").value = "";
		document.getElementById("insuredPersonsStateId[1]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[1]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[1]").value == "No") {
		document.getElementById("insuredPersonAddress[1]").disabled = false;
		document.getElementById("insuredPersonsStateId[1]").disabled = false;
		document.getElementById("insuredPersonsCountryId[1]").disabled = false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[2]").value == "Yes") {
		document.getElementById("insuredPersonAddress[2]").disabled = true;
		document.getElementById("insuredPersonsStateId[2]").disabled = true;
		document.getElementById("insuredPersonsCountryId[2]").disabled = true;
		document.getElementById("insuredPersonAddress[2]").value = "";
		document.getElementById("insuredPersonsStateId[2]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[2]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[2]").value == "No") {
		document.getElementById("insuredPersonAddress[2]").disabled = false;
		document.getElementById("insuredPersonsStateId[2]").disabled = false;
		document.getElementById("insuredPersonsCountryId[2]").disabled = false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[3]").value == "Yes") {
		document.getElementById("insuredPersonAddress[3]").disabled = true;
		document.getElementById("insuredPersonsStateId[3]").disabled = true;
		document.getElementById("insuredPersonsCountryId[3]").disabled = true;
		document.getElementById("insuredPersonAddress[3]").value = "";
		document.getElementById("insuredPersonsStateId[3]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[3]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[3]").value == "No") {
		document.getElementById("insuredPersonAddress[3]").disabled = false;
		document.getElementById("insuredPersonsStateId[3]").disabled = false;
		document.getElementById("insuredPersonsCountryId[3]").disabled = false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[4]").value == "Yes") {
		document.getElementById("insuredPersonAddress[4]").disabled = true;
		document.getElementById("insuredPersonsStateId[4]").disabled = true;
		document.getElementById("insuredPersonsCountryId[4]").disabled = true;
		document.getElementById("insuredPersonAddress[4]").value = "";
		document.getElementById("insuredPersonsStateId[4]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[4]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[4]").value == "No") {
		document.getElementById("insuredPersonAddress[4]").disabled = false;
		document.getElementById("insuredPersonsStateId[4]").disabled = false;
		document.getElementById("insuredPersonsCountryId[4]").disabled = false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[5]").value == "Yes") {
		document.getElementById("insuredPersonAddress[5]").disabled = true;
		document.getElementById("insuredPersonsStateId[5]").disabled = true;
		document.getElementById("insuredPersonsCountryId[5]").disabled = true;
		document.getElementById("insuredPersonAddress[5]").value = "";
		document.getElementById("insuredPersonsStateId[5]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[5]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[5]").value == "No") {
		document.getElementById("insuredPersonAddress[5]").disabled = false;
		document.getElementById("insuredPersonsStateId[5]").disabled = false;
		document.getElementById("insuredPersonsCountryId[5]").disabled = false;
	}
	if (document.getElementById("insuredPersonsLiveEmployee[6]").value == "Yes") {
		document.getElementById("insuredPersonAddress[6]").disabled = true;
		document.getElementById("insuredPersonsStateId[6]").disabled = true;
		document.getElementById("insuredPersonsCountryId[6]").disabled = true;
		document.getElementById("insuredPersonAddress[6]").value = "";
		document.getElementById("insuredPersonsStateId[6]").selectedIndex = "0";
		document.getElementById("insuredPersonsCountryId[6]").selectedIndex = "0";
	}
	if (document.getElementById("insuredPersonsLiveEmployee[6]").value == "No") {
		document.getElementById("insuredPersonAddress[6]").disabled = false;
		document.getElementById("insuredPersonsStateId[6]").disabled = false;
		document.getElementById("insuredPersonsCountryId[6]").disabled = false;
	}
}          
// Ended by Vidya              
 
// Validation function  for Police Verification Form (Added By Vidya)
function validatePolice() {
try{
	valid = true;
	if (policeVarificationForm.birthPalace.value == "") {
		alert("Please enter place of birth");
		policeVarificationForm.birthPalace.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.identificationMarks) == false) {
		return false;
	}
	if (policeVarificationForm.durationPresentAddress.value == "") {
		alert("Please enter duration of your present address");
		policeVarificationForm.durationPresentAddress.focus();
		return false;
	}
	if (policeVarificationForm.jurisdPresentPoliceStation.value == "") {
		alert("Please enter jurisdiction of your present police station");
		policeVarificationForm.jurisdPresentPoliceStation.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.jurisdPresentPoliceStation) == false) {
		return false;
	}
	if (policeVarificationForm.durationPermanentAddress.value == "") {
		alert("Please enter duration of your permanent address");
		policeVarificationForm.durationPermanentAddress.focus();
		return false;
	}
	if (policeVarificationForm.jurisdPermanentPoliceStation.value == "") {
		alert("Please enter jurisdiction of your permanent police station");
		policeVarificationForm.jurisdPermanentPoliceStation.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.jurisdPermanentPoliceStation) == false) {
		return false;
	}
	if (policeVarificationForm.fathersAddress.value == "") {
		alert("Please enter address");
		policeVarificationForm.fathersAddress.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.fathersOccupation) == false) {
		return false;
	}
	if ((document.getElementById("EmployeeYes").checked == false) && (document.getElementById("EmployeeNo").checked == false)) {
		alert("Please select a value for your previous employment");
		document.getElementById("EmployeeYes").focus();
		return false;
	}
	if (policeVarificationForm.ifEmployee[0].checked == true) {
		if (policeVarificationForm.whereWorking.value == "") {
			alert("Please fill in the name of your previous organization");
			policeVarificationForm.whereWorking.focus();
			return false;
		}
		if (alphabet(policeVarificationForm.whereWorking) == false) {
			return false;
		}
		if (policeVarificationForm.previousWorkingAddress.value == "") {
			alert("Please fill in the address of your previous organization");
			policeVarificationForm.previousWorkingAddress.focus();
			return false;
		}
		if (policeVarificationForm.previousEmplyCountry.selectedIndex == 0) {
			alert("Please select country of your previous organization");
			policeVarificationForm.previousEmplyCountry.focus();
			return false;
		}
		if (policeVarificationForm.previousEmplyState.selectedIndex == 0) {
			alert("Please select state of your previous organization");
			policeVarificationForm.previousEmplyState.focus();
			return false;
		}
		if (policeVarificationForm.previousEmplyDistrict.selectedIndex == 0) {
			alert("Please select district of your previous organization");
			policeVarificationForm.previousEmplyDistrict.focus();
			return false;
		}
		if (policeVarificationForm.previousEmplyCity.selectedIndex == 0) {
			alert("Please select city of your previous organization");
			policeVarificationForm.previousEmplyCity.focus();
			return false;
		}
		if (policeVarificationForm.previousEmplyArea.selectedIndex == 0) {
			alert("Please select area of your previous organization");
			policeVarificationForm.previousEmplyArea.focus();
			return false;
		}
		if (policeVarificationForm.previousEmplyPostOffice.selectedIndex == 0) {
			alert("Please select post office of your previous organization");
			policeVarificationForm.previousEmplyPostOffice.focus();
			return false;
		}
		if (policeVarificationForm.previousPoliceStation.value == "") {
			alert("Please enter police station of your previous organization");
			policeVarificationForm.previousPoliceStation.focus();
			return false;
		}
		if (policeVarificationForm.sinceWorking.value == "") {
			alert("Please fill in the date of your previous organization");
			policeVarificationForm.sinceWorking.focus();
			return false;
		}
		if (policeVarificationForm.toWorking.value == "") {
			alert("Please fill in the date of your previous organization");
			policeVarificationForm.toWorking.focus();
			return false;
		}
	}
	if ((document.getElementById("politicalRelationYes").checked == false) && (document.getElementById("politicalRelationNo").checked == false)) {
		alert("Please select a value for political relation");
		document.getElementById("politicalRelationYes").focus();
		return false;
	}
	if (policeVarificationForm.politicalRelation[0].checked == true) {
		if (policeVarificationForm.nameOfPoliticalParty.value == "") {
			alert("Please fill in the name of political relation");
			policeVarificationForm.nameOfPoliticalParty.focus();
			return false;
		}
		if (alphabet(policeVarificationForm.nameOfPoliticalParty) == false) {
			return false;
		}
	}
	if (policeVarificationForm.responsibleName1.value == "") {
		alert("Please enter the name of a responsible person");
		policeVarificationForm.responsibleName1.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.responsibleName1) == false) {
		return false;
	}
	if (policeVarificationForm.responsibleAddress1.value == "") {
		alert("Please enter the address of a responsible person");
		policeVarificationForm.responsibleAddress1.focus();
		return false;
	}
	if (policeVarificationForm.firstReferenceCountry.selectedIndex == 0) {
		alert("Please select country of a responsible person");
		policeVarificationForm.firstReferenceCountry.focus();
		return false;
	}
	if (policeVarificationForm.firstReferenceState.selectedIndex == 0) {
		alert("Please select state of a responsible person");
		policeVarificationForm.firstReferenceState.focus();
		return false;
	}
	if (policeVarificationForm.firstReferenceDistrict.selectedIndex == 0) {
		alert("Please select district of a responsible person");
		policeVarificationForm.firstReferenceDistrict.focus();
		return false;
	}
	if (policeVarificationForm.firstReferenceCity.selectedIndex == 0) {
		alert("Please select city of a responsible person");
		policeVarificationForm.firstReferenceCity.focus();
		return false;
	}
	if (policeVarificationForm.firstReferenceArea.selectedIndex == 0) {
		alert("Please select area of a responsible person");
		policeVarificationForm.firstReferenceArea.focus();
		return false;
	}
	if (policeVarificationForm.firstReferencePostOffice.selectedIndex == 0) {
		alert("Please select post office of a responsible person");
		policeVarificationForm.firstReferencePostOffice.focus();
		return false;
	}
	if (policeVarificationForm.responsibleName2.value == "") {
		alert("Please enter the name of a responsible person");
		policeVarificationForm.responsibleName2.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.responsibleName2) == false) {
		return false;
	}
	if (policeVarificationForm.responsibleAddress2.value == "") {
		alert("Please enter the address of a responsible person");
		policeVarificationForm.responsibleAddress2.focus();
		return false;
	}
	if (policeVarificationForm.secondReferenceCountry.selectedIndex == 0) {
		alert("Please select country of a responsible person");
		policeVarificationForm.secondReferenceCountry.focus();
		return false;
	}
	if (policeVarificationForm.secondReferenceState.selectedIndex == 0) {
		alert("Please select state of a responsible person");
		policeVarificationForm.secondReferenceState.focus();
		return false;
	}
	if (policeVarificationForm.secondReferenceDistrict.selectedIndex == 0) {
		alert("Please select district of a responsible person");
		policeVarificationForm.secondReferenceDistrict.focus();
		return false;
	}
	if (policeVarificationForm.secondReferenceCity.selectedIndex == 0) {
		alert("Please select city of a responsible person");
		policeVarificationForm.secondReferenceCity.focus();
		return false;
	}
	if (policeVarificationForm.secondReferenceArea.selectedIndex == 0) {
		alert("Please select area of a responsible person");
		policeVarificationForm.secondReferenceArea.focus();
		return false;
	}
	if (policeVarificationForm.secondReferencePostOffice.selectedIndex == 0) {
		alert("Please select post office of a responsible person");
		policeVarificationForm.secondReferencePostOffice.focus();
		return false;
	}
	if (alphabet(policeVarificationForm.crimePlace) == false) {
		return false;
	}
	 var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
		}else {
		return false;
		}
	return valid;
}
catch(e){
 return false;
}	
} 
// Ended by Vidya
             
// Validation Function For Training Information Form (Added By Vidya)
function validation(submitTraining) {
try{
	// added by Shubhangi for capsi on 13.08.2011
	if (submitTraining.courseName.value == "") {
		alert("Please enter Course Name");
		submitTraining.courseName.focus();
		return false;
	}
	//ended by Shubhangi
	if (submitTraining.durationOfTrainingImparted.value == "--Select--") {
		alert("Please select duration of training imparted");
		submitTraining.durationOfTrainingImparted.focus();
		return false;
	}
	if (submitTraining.fromDate.value == "") {
		alert("Please fill from date of training imparted");
		submitTraining.fromDate.focus();
		return false;
	}
	if (submitTraining.toDate.value == "") {
		alert("Please fill to date of training imparted");
		submitTraining.toDate.focus();
		return false;
	}
	if (submitTraining.nameAndAddressOfInstitutionImpartingTraining.value == "") {
		alert("Please fill name & address of institution imparting training");
		submitTraining.nameAndAddressOfInstitutionImpartingTraining.focus();
		return false;
	}
	if (submitTraining.nameAndAddressOfInstitutionImpartingTraining.value == "") {
		alert("Please fill name & address of institution imparting training");
		submitTraining.nameAndAddressOfInstitutionImpartingTraining.focus();
		return false;
	}
	if (submitTraining.trainingCountryId.selectedIndex == 0) {
		alert("Please select country");
		submitTraining.trainingCountryId.focus();
		return false;
	}
	if (submitTraining.state.selectedIndex == 0) {
		alert("Please select state");
		submitTraining.state.focus();
		return false;
	}
	if (submitTraining.trainingDistrictId.selectedIndex == 0) {
		alert("Please select district");
		submitTraining.trainingDistrictId.focus();
		return false;
	}
	if (submitTraining.city.selectedIndex == 0) {
		alert("Please select city");
		submitTraining.city.focus();
		return false;
	}
	if (submitTraining.trainingArea.selectedIndex == 0) {
		alert("Please select area");
		submitTraining.trainingArea.focus();
		return false;
	}
	if (submitTraining.trainingPostOffice.selectedIndex == 0) {
		alert("Please select post office");
		submitTraining.trainingPostOffice.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
	//Anil added Begin
	if (submitTraining.toDate.value != "") {
		var strErrMsg = "Invalid to date \n\n";
		var dtDate = submitTraining.toDate.value; //  name of text box
		var intFlag = 0;
		var currentDate = new Date(); //getCalendarDate();
		var yy = currentDate.getYear();
		var mm = currentDate.getMonth() + 1;
		var dd = currentDate.getDate();
		var newCurrDate = dd + "/" + mm + "/" + yy;
		if (dtDate > newCurrDate) {
			strErrMsg = strErrMsg + "To date is not greater than Current Date \n";
			intFlag++;
			alert(strErrMsg);
			submitTraining.toDate.focus();
			return false;
		} else {
			return true;
		}
	}
	//Anil added End
	
}
catch(e){
 return false;
}	
	
}
// Ended by Vidya





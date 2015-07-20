function validateForm() {
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	if (document.form.companyname.value == "") {
		alert("Company Name should be left blank");
		document.form.companyname.focus();
		return false;
	} else if (document.form.industryId.value == "") {
		alert("Industry should be left blank");
		document.form.industryId.focus();
		return false;
	} else if (document.form.village.value == "") {
		alert("Name of Premises / Building / Village should be left blank");
		document.form.village.focus();
		return false;
	} else if (document.form.country.value == "") {
		alert("Country should be left blank");
		document.form.country.focus();
		return false;
	} else if (document.form.state.value == "0") {
		alert("State should be left blank");
		document.form.state.focus();
		return false;
	} else if (document.form.district.value == "0") {
		alert("District should be left blank");
		document.form.district.focus();
		return false;
	} else if (document.form.city.value == "0") {
		alert("City should be left blank");
		document.form.city.focus();
		return false;
	} else if (document.form.area.value == "0") {
		alert("Area should be left blank");
		document.form.area.focus();
		return false;
	} else if (document.form.postOffice.value == "0") {
		alert("PostOffice should be left blank");
		document.form.postOffice.focus();
		return false;
	} else if (document.form.stdCodePhoneNoOne.value == "") {
		alert("STD Code should be left blank");
		document.form.stdCodePhoneNoOne.focus();
		return false;
	}

	else if (isNaN(document.form.stdCodePhoneNoOne.value)) {
		alert("STD Code should be Number");
		document.form.stdCodePhoneNoOne.focus();
		return false;
	} else if (document.form.stdCodePhoneNoOne.value.length > 5) {
		alert("STD Code should be Maximum 5 characters");
		document.form.stdCodePhoneNoOne.focus();
		return false;
	} else if (document.form.phoneNoOne.value == "") {
		alert("Phone No should be left blank");
		document.form.phoneNoOne.focus();
		return false;
	}

	else if (isNaN(document.form.phoneNoOne.value)) {
		alert("Phone No should be Number");
		document.form.phoneNoOne.focus();
		return false;
	} else if (document.form.phoneNoOne.value.length > 10) {
		alert("Phone No should be Maximum 10 characters");
		document.form.phoneNoOne.focus();
		return false;
	} else if (isNaN(document.form.stdCodePhoneNoTwo.value)) {
		alert("STD Code should be Number");
		document.form.stdCodePhoneNoTwo.focus();
		return false;
	} else if (document.form.stdCodePhoneNoTwo.value.length > 5) {
		alert("STD Code should be Maximum 5 characters");
		document.form.stdCodePhoneNoTwo.focus();
		return false;
	} else if (isNaN(document.form.phoneNoTwo.value)) {
		alert("Phone No should be Number");
		document.form.phoneNoTwo.focus();
		return false;
	} else if (document.form.phoneNoTwo.value.length > 10) {
		alert("Phone No should be Maximum 10 characters");
		document.form.phoneNoTwo.focus();
		return false;
	} else if (document.form.orgEmailIdOne.value == "") {
		alert("Email Id should be left blank");
		document.form.orgEmailIdOne.focus();
		return false;
	}

	else if (!filter.test(document.form.orgEmailIdOne.value)) {
		alert("Invalid Email Id");
		document.form.orgEmailIdOne.focus();
		return false;
	} else if (document.form.ownerName.value == "") {
		alert("Name of Owner/Head should be left blank");
		document.form.ownerName.focus();
		return false;
	} else if (document.form.ownerAddress.value == "") {
		alert("Name of Premises / Building / Village should be left blank");
		document.form.ownerAddress.focus();
		return false;
	} else if (document.form.ownerCountryId.value == "") {
		alert("Country should be left blank");
		document.form.ownerCountryId.focus();
		return false;
	} else if (document.form.ownerStateId.value == "0") {
		alert("State should be left blank");
		document.form.ownerStateId.focus();
		return false;
	} else if (document.form.ownerDistrictId.value == "0") {
		alert("District should be left blank");
		document.form.ownerDistrictId.focus();
		return false;
	} else if (document.form.ownerCityId.value == "0") {
		alert("City should be left blank");
		document.form.ownerCityId.focus();
		return false;
	} else if (document.form.ownerAreaId.value == "0") {
		alert("Area should be left blank");
		document.form.ownerAreaId.focus();
		return false;
	} else if (document.form.ownerPostOfficeId.value == "0") {
		alert("PostOffice should be left blank");
		document.form.ownerPostOfficeId.focus();
		return false;
	} else if (document.form.ownerPINCode.value == "") {
		alert("PinCode should be left blank");
		document.form.ownerPINCode.focus();
		return false;
	} else if (isNaN(document.form.ownerStdCodePhoneNo.value)) {
		alert("STD Code should be Number");
		document.form.ownerStdCodePhoneNo.focus();
		return false;
	} else if (document.form.ownerStdCodePhoneNo.value.length > 5) {
		alert("STD Code should be Maximum 5 characters");
		document.form.ownerStdCodePhoneNo.focus();
		return false;
	} else if (isNaN(document.form.ownerPhoneNo.value)) {
		alert("Phone No should be Number");
		document.form.ownerPhoneNo.focus();
		return false;
	} else if (document.form.ownerPhoneNo.value.length > 10) {
		alert("Phone No should be Maximum 10 characters");
		document.form.ownerPhoneNo.focus();
		return false;
	} else if (document.form.ownerMobileNo.value == "") {
		alert("Mobile No should be left blank");
		document.form.ownerMobileNo.focus();
		return false;
	} else if (isNaN(document.form.ownerMobileNo.value)) {
		alert("Mobile No should be Number");
		document.form.ownerMobileNo.focus();
		return false;
	} else if (document.form.ownerMobileNo.value.length > 10) {
		alert("Mobile No should be Maximum 10 characters");
		document.form.ownerMobileNo.focus();
		return false;
	} else if (document.form.ownerEmail.value == "") {
		alert("Email Id should be left blank");
		document.form.ownerEmail.focus();
		return false;
	} else if (!filter.test(document.form.ownerEmail.value)) {
		alert("Invalid Email Id");
		document.form.ownerEmail.focus();
		return false;
	} else if (document.form.contactPersonName.value == "") {
		alert("Name should be left blank");
		document.form.contactPersonName.focus();
		return false;
	}

	else if (document.form.contactPersonMobileNo.value == "") {
		alert("Mobile No should be left blank");
		document.form.contactPersonMobileNo.focus();
		return false;
	} else if (isNaN(document.form.contactPersonMobileNo.value)) {
		alert("Mobile No should be Number");
		document.form.contactPersonMobileNo.focus();
		return false;
	} else if (document.form.contactPersonMobileNo.value.length > 10) {
		alert("Mobile No should be Maximum 10 characters");
		document.form.contactPersonMobileNo.focus();
		return false;
	}

	else if (document.form.contactPersonEmail.value == "") {
		alert("Email Id should be left blank");
		document.form.contactPersonEmail.focus();
		return false;
	} else if (!filter.test(document.form.contactPersonEmail.value)) {
		alert("Invalid Email Id");
		document.form.contactPersonEmail.focus();
		return false;
	}

}
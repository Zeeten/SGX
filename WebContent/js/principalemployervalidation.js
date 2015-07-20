function validateForm()
{
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(document.form.name.value=="")
    {
      alert("Registrant/Owner Name should be left blank");
      document.form.name.focus();
      return false;
    }
    else if(document.form.designation.value=="")
    {
      alert("Designation should be left blank");
      document.form.designation.focus();
      return false;
    }
    else if(document.form.organization.value=="")
    {
      alert("Company / Organization should be left blank");
      document.form.organization.focus();
      return false;
    }
    else if(document.form.industry.value=="")
    {
      alert("Industry should be left blank");
      document.form.industry.focus();
      return false;
    }
    else if(document.form.companyType.value=="")
    {
      alert("Company Type should be left blank");
      document.form.companyType.focus();
      return false;
    }
    else if(document.form.building.value=="")
    {
      alert("Name of Premises / Building / Village should be left blank");
      document.form.building.focus();
      return false;
    }
    else if(document.form.country.value=="")
    {
      alert("Country should be left blank");
      document.form.country.focus();
      return false;
    }
    else if(document.form.state.value=="0")
    {
      alert("State should be left blank");
      document.form.state.focus();
      return false;
    }
    else if(document.form.district.value=="0")
    {
      alert("District should be left blank");
      document.form.district.focus();
      return false;
    }
    else if(document.form.city.value=="0")
    {
      alert("City should be left blank");
      document.form.city.focus();
      return false;
    }
    else if(document.form.area.value=="0")
    {
      alert("Area should be left blank");
      document.form.area.focus();
      return false;
    }
    else if(document.form.postOffice.value=="0")
    {
      alert("PostOffice should be left blank");
      document.form.postOffice.focus();
      return false;
    }
    else if(document.form.pinCode.value=="0")
    {
      alert("PostOffice should be left blank");
      document.form.pinCode.focus();
      return false;
    }
    
    
    else if (document.form.stdCodePhoneNo.value == "") {
		alert("STD Code should be left blank");
		document.form.stdCodePhoneNo.focus();
		return false;
	}

	else if (isNaN(document.form.stdCodePhoneNo.value)) {
		alert("STD Code should be Number");
		document.form.stdCodePhoneNo.focus();
		return false;
	} else if (document.form.stdCodePhoneNo.value.length > 5) {
		alert("STD Code should be Maximum 5 characters");
		document.form.stdCodePhoneNo.focus();
		return false;
	} else if (document.form.phoneNo.value == "") {
		alert("Phone No should be left blank");
		document.form.phoneNo.focus();
		return false;
	}

	else if (isNaN(document.form.phoneNo.value)) {
		alert("Phone No should be Number");
		document.form.phoneNo.focus();
		return false;
	} else if (document.form.phoneNo.value.length > 10) {
		alert("Phone No should be Maximum 10 characters");
		document.form.phoneNo.focus();
		return false;
	}
    
    
    
    else if (document.form.mobileNo.value == "") {
		alert("Mobile No should be left blank");
		document.form.mobileNo.focus();
		return false;
	} else if (isNaN(document.form.mobileNo.value)) {
		alert("Mobile No should be Number");
		document.form.mobileNo.focus();
		return false;
	} else if (document.form.mobileNo.value.length > 10) {
		alert("Mobile No should be Maximum 10 characters");
		document.form.mobileNo.focus();
		return false;
	}
    
	else if (document.form.emailId.value == "") {
		alert("Email Id should be left blank");
		document.form.emailId.focus();
		return false;
	}

	else if (!filter.test(document.form.emailId.value)) {
		alert("Invalid Email Id");
		document.form.emailId.focus();
		return false;
	}
    
    else if(document.form.personName.value=="")
    {
      alert("Contact Person Name should be left blank");
      document.form.personName.focus();
      return false;
    }
    
    else if (document.form.personMobileNo.value == "") {
		alert("Contact Person Mobile No should be left blank");
		document.form.personMobileNo.focus();
		return false;
	} else if (isNaN(document.form.personMobileNo.value)) {
		alert("Mobile No should be Number");
		document.form.personMobileNo.focus();
		return false;
	} else if (document.form.personMobileNo.value.length > 10) {
		alert("Mobile No should be Maximum 10 characters");
		document.form.personMobileNo.focus();
		return false;
	}
    
	else if (document.form.personEmailId.value == "") {
		alert("Contact Person Email Id should be left blank");
		document.form.personEmailId.focus();
		return false;
	}

	else if (!filter.test(document.form.personEmailId.value)) {
		alert("Invalid Email Id");
		document.form.personEmailId.focus();
		return false;
	}
   
    
}
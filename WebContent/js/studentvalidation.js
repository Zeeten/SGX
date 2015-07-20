function validateForm()
{
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(document.form.firstName.value=="")
    {
      alert("First Name should be left blank");
      document.form.firstName.focus();
      return false;
    }
    else if(document.form.lastName.value=="")
    {
      alert("Last Name should be left blank");
      document.form.lastName.focus();
      return false;
    }
    
    else if(document.form.dob.value=="")
    {
      alert("D.O.B should be left blank");
      document.form.dob.focus();
      return false;
    }
    
    else if(document.form.gender.value=="")
    {
      alert("Gender should be left blank");
      document.form.gender.focus();
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
   
    else if(document.form.collegeId.value=="")
    {
      alert("Training Center should be left blank");
      document.form.collegeId.focus();
      return false;
    } 
    else if(document.form.departementId.value=="")
    {
      alert("Sector Name should be left blank");
      document.form.departementId.focus();
      return false;
    } 
 
    else if(document.form.trainingId.value=="")
    {
      alert("Training Name should be left blank");
      document.form.trainingId.focus();
      return false;
    } 
    
    else if(document.form.permanentAddress.value=="")
    {
      alert("Permanent Address should be left blank");
      document.form.permanentAddress.focus();
      return false;
    } 
    
    else if(document.form.permanentCountry.value=="")
    {
      alert("Permanent Country should be left blank");
      document.form.permanentCountry.focus();
      return false;
    } 
    else if(document.form.permanentState.value=="0")
    {
      alert("Permanent State should be left blank");
      document.form.permanentState.focus();
      return false;
    }
    else if(document.form.permanentDistrict.value=="0")
    {
      alert("Permanent District should be left blank");
      document.form.permanentDistrict.focus();
      return false;
    }
    else if(document.form.permanentCity.value=="0")
    {
      alert("Permanent City should be left blank");
      document.form.permanentCity.focus();
      return false;
    }
    else if(document.form.permanentPostOffice.value=="0")
    {
      alert("Permanent PostOffice should be left blank");
      document.form.permanentPostOffice.focus();
      return false;
    }
    else if(document.form.permanentPinCode.value=="0")
    {
      alert("Permanent PinCode should be left blank");
      document.form.permanentPinCode.focus();
      return false;
    }
    else if(document.form.presentAddress.value=="")
    {
      alert("Present Address should be left blank");
      document.form.presentAddress.focus();
      return false;
    }
    else if(document.form.presentCountry.value=="")
    {
      alert("Present Country should be left blank");
      document.form.presentCountry.focus();
      return false;
    }
    else if(document.form.presentState.value=="0")
    {
      alert("Present State should be left blank");
      document.form.presentState.focus();
      return false;
    }
    
    else if(document.form.presentDistrict.value=="0")
    {
      alert("Present District should be left blank");
      document.form.presentDistrict.focus();
      return false;
    }
    else if(document.form.presentCity.value=="0")
    {
      alert("Present City should be left blank");
      document.form.presentCity.focus();
      return false;
    }
    else if(document.form.presentPostOffice.value=="0")
    {
      alert("Present PostOffice should be left blank");
      document.form.presentPostOffice.focus();
      return false;
    }
    else if(document.form.presentPinCode.value=="0")
    {
      alert("Present PinCode should be left blank");
      document.form.presentPinCode.focus();
      return false;
    }
    
    else if(document.form.bloodGroup.value=="")
    {
      alert("BloodGroup should be left blank");
      document.form.bloodGroup.focus();
      return false;
    }
    
    else if(document.form.underMetricBoard.value=="")
    {
      alert("Middle University/ Board  should be left blank");
      document.form.underMetricBoard.focus();
      return false;
    }
    else if(document.form.underMetricInstitute.value=="")
    {
      alert("Middle School/ College should be left blank");
      document.form.underMetricInstitute.focus();
      return false;
    }
    else if(document.form.underMetricCountry.value=="")
    {
      alert("Middle School Country should be left blank");
      document.form.underMetricCountry.focus();
      return false;
    }
    else if(document.form.underMetricState.value=="0")
    {
      alert("Middle School State should be left blank");
      document.form.underMetricState.focus();
      return false;
    }
    else if(document.form.underMetricDistrict.value=="0")
    {
      alert("Middle School District should be left blank");
      document.form.underMetricDistrict.focus();
      return false;
    }
    else if(document.form.underMetricCity.value=="0")
    {
      alert("Middle School City should be left blank");
      document.form.underMetricCity.focus();
      return false;
    }
    
    else if(document.form.underMetricPostOffice.value=="0")
    {
      alert("Middle School PostOffice should be left blank");
      document.form.underMetricPostOffice.focus();
      return false;
    }
    else if(document.form.underMetricPinCode.value=="0")
    {
      alert("Middle School PinCode should be left blank");
      document.form.underMetricPinCode.focus();
      return false;
    }
    else if(document.form.underMetricPercentage.value=="0")
    {
      alert("Middle School Percantage should be left blank");
      document.form.underMetricPercentage.focus();
      return false;
    }
    else if(document.form.underMetricSubject.value=="")
    {
      alert("Middle School Subject should be left blank");
      document.form.underMetricSubject.focus();
      return false;
    }
    else if(document.form.responsiblePersonName1.value=="")
    {
      alert("Person Name should be left blank");
      document.form.responsiblePersonName1.focus();
      return false;
    }
    else if(document.form.responsiblePerconAddress1.value=="")
    {
      alert("Person Address should be left blank");
      document.form.responsiblePerconAddress1.focus();
      return false;
    }
    else if(document.form.responsiblePersonPinCode1.value=="0")
    {
      alert("Person PinCode should be left blank");
      document.form.responsiblePersonPinCode1.focus();
      return false;
    }
    else if(document.form.responsiblePersonName2.value=="")
    {
      alert("Person Name should be left blank");
      document.form.responsiblePersonName2.focus();
      return false;
    }
    else if(document.form.responsiblePerconAddress2.value=="")
    {
      alert("Person Address should be left blank");
      document.form.responsiblePerconAddress2.focus();
      return false;
    }
    else if(document.form.responsiblePersonPinCode2.value=="0")
    {
      alert("Person PinCode should be left blank");
      document.form.responsiblePersonPinCode2.focus();
      return false;
    }
}
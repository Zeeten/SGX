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
    else if(document.form.collegeId.value=="")
    {
      alert("Training Center should be left blank");
      document.form.collegeId.focus();
      return false;
    }
    else if(document.form.departementId.value=="")
    {
      alert("Sector should be left blank");
      document.form.departementId.focus();
      return false;
    }
    
    else if(document.form.dob.value=="")
    {
      alert("Date Of Birth should be left blank");
      document.form.dob.focus();
      return false;
    }
    else if(document.form.gender.value=="")
    {
      alert("Gender should be left blank");
      document.form.gender.focus();
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
	 else if(document.form.martialStatus.value=="")
	    {
	      alert("Martial Status should be left blank");
	      document.form.martialStatus.focus();
	      return false;
	    }
	 else if(document.form.doj.value=="")
	    {
	      alert("Date Of Joining should be left blank");
	      document.form.doj.focus();
	      return false;
	    }
    
	 else if(document.form.village.value=="")
	    {
	      alert("Name of Permanent Permises/Building/Village should be left blank");
	      document.form.village.focus();
	      return false;
	    }
	 else if(document.form.country.value=="")
	    {
	      alert("Permanent Country should be left blank");
	      document.form.country.focus();
	      return false;
	    }
	 else if(document.form.state.value=="0")
	    {
	      alert("Permanent State should be left blank");
	      document.form.state.focus();
	      return false;
	    }
	 else if(document.form.district.value=="0")
	    {
	      alert("Permanent District should be left blank");
	      document.form.district.focus();
	      return false;
	    }
	 else if(document.form.city.value=="0")
	    {
	      alert("Permanent City should be left blank");
	      document.form.city.focus();
	      return false;
	    }
	 else if(document.form.area.value=="0")
	    {
	      alert("Permanent Area should be left blank");
	      document.form.city.focus();
	      return false;
	    }
	 else if(document.form.postOffice.value=="0")
	    {
	      alert("Permanent PostOffice should be left blank");
	      document.form.postOffice.focus();
	      return false;
	    }
	 else if(document.form.pinCode.value=="0")
	    {
	      alert("Permanent PinCode should be left blank");
	      document.form.pinCode.focus();
	      return false;
	    }
    
    
	 else if(document.form.presentVillage.value=="")
	    {
	      alert("Name of Present Permises/Building/Village should be left blank");
	      document.form.presentVillage.focus();
	      return false;
	    }
    
	 
	 else if(document.form.countryPresent.value=="")
	    {
	      alert("Present Country should be left blank");
	      document.form.countryPresent.focus();
	      return false;
	    }
    
	 
	 else if(document.form.statePresent.value=="0")
	    {
	      alert("Present State should be left blank");
	      document.form.statePresent.focus();
	      return false;
	    }
	
	 else if(document.form.districtPresent.value=="0")
	    {
	      alert("Present District should be left blank");
	      document.form.districtPresent.focus();
	      return false;
	    }
	
	 else if(document.form.cityPresent.value=="0")
	    {
	      alert("Present City should be left blank");
	      document.form.cityPresent.focus();
	      return false;
	    }
	 
	 else if(document.form.areaPresrent.value=="0")
	    {
	      alert("Present Area should be left blank");
	      document.form.areaPresrent.focus();
	      return false;
	    }
	 
	 else if(document.form.postOfficePresent.value=="0")
	    {
	      alert("Present PostOffice should be left blank");
	      document.form.postOfficePresent.focus();
	      return false;
	    }
	 
	 else if(document.form.persentPinCode.value=="0")
	    {
	      alert("Present PinCode should be left blank");
	      document.form.persentPinCode.focus();
	      return false;
	    }
}
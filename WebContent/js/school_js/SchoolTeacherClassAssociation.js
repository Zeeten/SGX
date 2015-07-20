function setTeacherId(teacherId){
	document.getElementById('teacherId_'+teacherId).value = teacherId;
	alert(document.getElementById('teacherId_'+teacherId).value);
}
/*
Kamlesh Dhakad added on 25-02-2011 for Teacher Updation.
*/
function getAndSetValueForFields(contId,contName,styleId,divId,searchState,no)
{
	var conf = confirm("If You want to change "+searchState+" you can also change further fields. Click OK to continue..");
	if(conf==true){
	var status=0;
	if(searchState=="State")
	status= 1;
	if(searchState=="District")
	status= 2;
	if(searchState=="City")
	status= 3;
	if(searchState=="Area")
	status= 4;
	if(searchState=="Post Office")
	status= 5;
	if(contName=="Permanent")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'districtDivId','cityDivId','areaDivId','postOfficeDivId','pincodeDivId',premcountryId,styleId,'permStateId','permDistrictId','permDistrictId','permCityId','permCityId','permanentAddArea','permAreaId','permPostOfficeId','permPostOfficeId','permPinCodeId','permPinCode','150');
	}
	if(contName=="Present")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'presDistrictDivId','presCityDivId','presAreaDivId','presPostOfficeDivId','presPincodeDivId',premcountryId,styleId,'presStateId','presDistrictId','presDistrictId','presCityId','presCityId','presAreaId','presAreaId','presPostOfficeId','postOfficePres','presPinCodeId','presPinCode','150');
	}
	if(contName=="High School")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'highSchoolDistrictDivId','highSchoolCityDivId','highSchoolAreaDivId','highSchoolPostOfficeDivId','highSchoolPincodeDivId',premcountryId,'state['+no+']',styleId,'district['+no+']','highSchoolDistrictId','city['+no+']','highSchoolCityId','area['+no+']','highSchoolArea','postOffice['+no+']','highSchoolPostOffice','pincode['+no+']','highSchoolPinCode','150');
	}
	if(contName=="Higher Secondary")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'higherSecondaryDistrictDivId','higherSecondaryCityDivId','higherSecondaryAreaDivId','higherSecondaryPostOfficeDivId','higherSecondaryPincodeDivId',premcountryId,'state['+no+']',styleId,'district['+no+']','higherSecondaryDistrictId','city['+no+']','higherSecondaryCityId','area['+no+']','higherSecondaryArea','postOffice['+no+']','higherSecondaryPostOffice','pincode['+no+']','higherSecondaryPinCode','150');
	}
	if(contName=="Graduation")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'graduationDistrictDivId','graduationCityDivId','graduationAreaDivId','graduationPostOfficeDivId','graduationPincodeDivId',premcountryId,'state['+no+']',styleId,'district['+no+']','graduationDistrictId','city['+no+']','graduationCityId','area['+no+']','graduationArea','postOffice['+no+']','graduationPostOffice','pincode['+no+']','graduationPinCode','150');
	}
	if(contName=="Other")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'otherDistrictDivId','otherCityDivId','otherAreaDivId','otherPostOfficeDivId','otherPincodeDivId',premcountryId,'state['+no+']',styleId,'district['+no+']','otherDistrictId','city['+no+']','otherCityId','area['+no+']','otherArea','postOffice['+no+']','otherPostOffice','pincode['+no+']','otherPinCode','150');
	}
	if(contName=="Extra")
	{
		var premcountryId = document.getElementById(contId);
		populateCountryStateDistrictCityAreaPostofficePincode('Loading State',status,divId,'extraDistrictDivId','extraCityDivId','extraAreaDivId','extraPostOfficeDivId','extraPincodeDivId',premcountryId,'state['+no+']',styleId,'district['+no+']','extraDistrictId','city['+no+']','extraCityId','area['+no+']','extraArea','postOffice['+no+']','extraPostOffice','pincode['+no+']','extraPinCode','150');
	}
	}
}
function doValidation()
{
	if(document.getElementById('permStateId').value== '0' || document.getElementById('presStateId').value== '0' || document.getElementById('highSchoolStateId').value== '0' || document.getElementById('higherSecondaryStateId').value== '0' || document.getElementById('graduationStateId').value== '0' || document.getElementById('otherStateId').value== '0')
	{
		alert("Please Select any State.");
		return false;
	}
	else
	{
		if(document.getElementById('permDistrictId').value== '0' || document.getElementById('presDistrictId').value== '0' || document.getElementById('highSchoolDistrictId').value== '0' || document.getElementById('higherSecondaryDistrictId').value== '0' || document.getElementById('graduationDistrictId').value== '0' || document.getElementById('otherDistrictId').value== '0')
		{
			alert("Please Select any District.");
			return false;
		}
		else
		{
			if(document.getElementById('permCityId').value== '0' || document.getElementById('presCityId').value== '0' || document.getElementById('highSchoolCityId').value== '0' || document.getElementById('higherSecondaryCityId').value== '0' || document.getElementById('graduationCityId').value== '0' || document.getElementById('otherCityId').value== '0')
			{
				alert("Please Select any City.");
				return false;
			}
			else
			{
			if((document.getElementById('permAreaId').value== '0') || (document.getElementById('presAreaId').value== '0') || (document.getElementById('highSchoolArea').value== '0') || (document.getElementById('higherSecondaryArea').value== '0') || (document.getElementById('graduationArea').value== '0') || (document.getElementById('otherArea').value== '0'))
			{
				alert("Please Select any Area.");
				return false;
			}
			else
			{
				if((document.getElementById('permPostOfficeId').value== '0') || (document.getElementById('postOfficePres').value== '0') || (document.getElementById('highSchoolPostOffice').value== '0') || (document.getElementById('higherSecondaryPostOffice').value== '0') || (document.getElementById('graduationPostOffice').value== '0') || (document.getElementById('otherPostOffice').value== '0'))
				{
					alert("Please Select any Post Office.");
					return false;
				}			
				else
				return true;
			}
			}
		}
	}
	
}
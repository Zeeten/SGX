
var xmlhttpCountryStateDistrictCityAreaPostofficePincode;
var countryStateDistrictCityAreaPostofficePincodeGlobal;

function loadXMLCountryStateDistrictCityAreaPostofficePincode(){

if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttpCountryStateDistrictCityAreaPostofficePincode=new XMLHttpRequest();
	}else {// code for IE6, IE5
	xmlhttpCountryStateDistrictCityAreaPostofficePincode=new ActiveXObject("Microsoft.XMLHTTP");
  }
}

/*
status=1 means requesting for state via country.
status=2 means requesting for district  via state.
status=3 means requesting for city via district.
status=4 means requesting for area via district.
status=5 means requesting for area via city.
status=6 means requesting for postOffice  via district.
status=7 means requesting for postOffice  via city.
status=8 means requesting for pincode  via postOffice.
*/
						
function populateCountryStateDistrictCityAreaPostofficePincode(loadingvalue,status,stateDivId,districtDivId,cityDivId,areaDivId,postOfficeDivId,pincodeDivId,comboId,propertyNameState,propertyIdState,propertyNameDistrict,propertyIdDistrict,propertyNameCity,propertyIdCity,propertyNameArea,propertyIdArea,propertyNamePostoffice,propertyIdPostoffice,propertyNamePincode,propertyIdPincode,comboWidth){
 try{
  if(status==1){
    document.getElementById(propertyIdState).options.length=1;
    document.getElementById(propertyIdDistrict).options.length=1;
	document.getElementById(propertyIdCity).options.length=1;
	document.getElementById(propertyIdArea).options.length=1;
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';
	
	//populating state via country
	divId=stateDivId;
	objValue=comboId.value;
 }else if(status==2){
	document.getElementById(propertyIdDistrict).options.length=1;
	document.getElementById(propertyIdCity).options.length=1;
	document.getElementById(propertyIdArea).options.length=1;
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';
	
	//populating district via state
	objValue=document.getElementById(propertyIdState).value;
	divId=districtDivId;
	
 }else if(status==3){
	document.getElementById(propertyIdCity).options.length=1;
	document.getElementById(propertyIdArea).options.length=1;
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';
	
	//populating city via district
	divId=cityDivId;
	objValue=document.getElementById(propertyIdDistrict).value;
	
 }else if(status==4){
	document.getElementById(propertyIdArea).options.length=1;
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';

    //populating area via district
	divId=areaDivId;
	objValue=document.getElementById(propertyIdDistrict).value;
	
 }else if(status==5){
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';
	
	//populating post office via city
	divId=postOfficeDivId;
	objValue=document.getElementById(propertyIdCity).value;
	
 }else if(status==6){
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';
	
	//populating post office via district
	divId=postOfficeDivId;
	objValue=document.getElementById(propertyIdDistrict).value;
	
 }else if(status==7){
	document.getElementById(propertyIdPostoffice).options.length=1;
	document.getElementById(propertyIdPincode).value='';

	divId=postOfficeDivId;
	objValue=document.getElementById(propertyIdDistrict).value;
	
 }else if(status==8){
	document.getElementById(propertyIdPincode).value='';
	
	divId=pincodeDivId;
	objValue=document.getElementById(propertyIdPostoffice).value;
	
 }else{
}

countryStateDistrictCityAreaPostofficePincodeGlobal=document.getElementById(divId);
var basePathGlobalFromHeadTag=document.getElementById('basePathGlobalFromHeadTag').value;

queryString =basePathGlobalFromHeadTag+"displayCountryStateDistrictCityAreaPostofficePincodeAction.do?status="+status+"" +
"&comboId="+objValue+"&propertyNameState="+propertyNameState+"&propertyIdState="+propertyIdState+
"&propertyNameDistrict="+propertyNameDistrict+"&propertyIdDistrict="+propertyIdDistrict +
"&propertyNameCity="+propertyNameCity+"&propertyIdCity="+propertyIdCity+
"&propertyNameArea="+propertyNameArea+"&propertyIdArea="+propertyIdArea+
"&propertyNamePostoffice="+propertyNamePostoffice+"&propertyIdPostoffice="+propertyIdPostoffice+
"&propertyNamePincode="+propertyNamePincode+"&propertyIdPincode="+propertyIdPincode+

"&stateDivId="+stateDivId
+"&districtDivId="+districtDivId
+"&cityDivId="+cityDivId
+"&areaDivId="+areaDivId
+"&postOfficeDivId="+postOfficeDivId
+"&pincodeDivId="+pincodeDivId 
+"&comboWidth="+comboWidth;


if(comboId.value!=-1 ||comboId.value!=0){
document.getElementById(divId).innerHTML=loadingvalue+'..';
loadXMLCountryStateDistrictCityAreaPostofficePincode();

xmlhttpCountryStateDistrictCityAreaPostofficePincode.onreadystatechange = handleCountryStateDistrictCityAreaPostofficePincode;
	xmlhttpCountryStateDistrictCityAreaPostofficePincode.open("POST", queryString, true);
	xmlhttpCountryStateDistrictCityAreaPostofficePincode.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpCountryStateDistrictCityAreaPostofficePincode.send(null);
 }
}catch(e){
 }
}


function handleCountryStateDistrictCityAreaPostofficePincode(){
 if (xmlhttpCountryStateDistrictCityAreaPostofficePincode.readyState == 4){
	if (xmlhttpCountryStateDistrictCityAreaPostofficePincode.status == 200){
		countryStateDistrictCityAreaPostofficePincodeGlobal.innerHTML=xmlhttpCountryStateDistrictCityAreaPostofficePincode.responseText;
	}if (xmlhttpCountryStateDistrictCityAreaPostofficePincode.status == 500) {
		countryStateDistrictCityAreaPostofficePincodeGlobal.innerHTML='<font face="Verdana" size="2" color="#800000">Loading fail....</font>';
	}
 }

}



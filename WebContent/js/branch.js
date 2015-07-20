
var xmlhttpBranch;
var obj1Branch;
function loadXMLBranch()
{

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttpBranch=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttpBranch=new ActiveXObject("Microsoft.XMLHTTP");
}




}





function disableEnterKey(e)
{
    
   
     var key;     
     if(window.event)
          key = window.event.keyCode; //IE
     else
          key = e.which; //firefox     

     return (key != 13);
}



function populateBranchRelatedComboAdd(obj,variable,basePath,variableToPass,obj1,parent) {
	//alert(obj.value);
	
	
	
	try
	{
	
	if(obj.value!=-1)
	{
	
	loadXMLBranch();
obj1Branch=obj1;
	//alert(obj.value);
	
	//alert("obj1Branch=="+obj1Branch.id);
	//alert("parent=="+parent);
	
	if(parent=='state')
	{
	
	//alert("Parent Stateclle");
	document.getElementById('districtIdDiv').innerHTML =
	
	'<select   name="districtId"    id="districtId" '
  +'style="font-family: Verdana; color: #000000; font-size: 8pt;width:140"  >'
          
   
   
    + '<option value="-1">--Select--</option>'
      
   
     +'</select>'
	
		//document.getElementById('districtId').selectedIndex =0;
		
	//document.getElementById('cityId').selectedIndex =0;
		document.getElementById('cityIdDiv').innerHTML = 
		
		'<select   name="cityId"    id="cityId" '
  +'style="font-family: Verdana; color: #000000; font-size: 8pt;width:140"  >'
          
   
   
    + '<option value="-1">--Select--</option>'
      
   
     +'</select>'
		
	}
	else if(parent=='district')
	{
	
	document.getElementById('cityIdDiv').innerHTML = 
		
		'<select   name="cityId"    id="cityId" '
  +'style="font-family: Verdana; color: #000000; font-size: 8pt;width:140"  >'
          
   
   
    + '<option value="-1">--Select--</option>'
      
   
     +'</select>'
		
	}
	else
	{
		
		
	}
	
	
	document.getElementById('changeDiv1').innerHTML='<font face="Verdana" size="1" color="#800000">Loading '+variable +'</font>';
	
	
	
	
	//alert("variableId111=="+basePath);
queryString =basePath+"displayBranchAction.do?hiddenOperation="+variableToPass +"&obj=" + obj.value+"&basePath=" + basePath ;
//alert("queryString=="+queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeParentAdd;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
		
	
	
	
	
}

}
catch(e)
{
	
	return false;
}

}








function handleStateChangeParentAdd() {
	
	
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
			document.getElementById('changeDiv1').innerHTML="";
		//alert(xmlhttpBranch.responseText);
		//
		 //alert(obj1Branch.id);
		
		
		document.getElementById(obj1Branch.id).innerHTML = xmlhttpBranch.responseText;
	
		}
	}
}









function populateBranchRelatedComboUpdate(obj,variable,basePath,variableToPass,obj1,parent) {
	//alert(variableToPass);
	
	try
	{
	
	if(obj.value!=-1)
	{
	loadXMLBranch();
obj1Branch=obj1;
	//alert(obj.value);
	
	//alert("obj1Branch=="+obj1Branch.id);
	//alert("parent=="+parent);
	
	if(parent=='state')
	{
	
	//alert("Parent Stateclle");
	document.getElementById('districtIdDiv').innerHTML =
	
	'<select   name="districtId"    id="districtIdUpdate" '
  +'style="font-family: Verdana; color: #000000; font-size: 8pt;width:140"  >'
          
   
   
    + '<option value="-1">--Select--</option>'
      
   
     +'</select>'
	
		//document.getElementById('districtId').selectedIndex =0;
		
	//document.getElementById('cityId').selectedIndex =0;
		document.getElementById('cityIdDiv').innerHTML = 
		
		'<select   name="cityId"    id="cityIdUpdate" '
  +'style="font-family: Verdana; color: #000000; font-size: 8pt;width:140"  >'
          
   
   
    + '<option value="-1">--Select--</option>'
      
   
     +'</select>'
		
	}
	else if(parent=='district')
	{
	
	document.getElementById('cityIdDiv').innerHTML = 
		
		'<select   name="cityId"    id="cityId" '
  +'style="font-family: Verdana; color: #000000; font-size: 8pt;width:140"  >'
          
   
   
    + '<option value="-1">--Select--</option>'
      
   
     +'</select>'
		
	}
	else
	{
		
		
	}
	
	
	document.getElementById('changeDiv1').innerHTML='<font face="Verdana" size="2" color="#800000">Loading '+variable +'</font>';
	
	
	
	
	//alert("variableId111=="+basePath);
queryString =basePath+"displayBranchAction.do?hiddenOperation="+variableToPass +"&obj=" + obj.value+"&basePath=" + basePath ;
//alert("queryString=="+queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeParentUpdate;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
		
	
	
	
	
}
}
catch(e)
{
	
	return false;
}
}





function handleStateChangeParentUpdate() {
	
	
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
			document.getElementById('changeDiv1').innerHTML="";
		//alert(xmlhttpBranch.responseText);
		//
		 //alert(obj1Branch.id);
		
		
		document.getElementById(obj1Branch.id).innerHTML = xmlhttpBranch.responseText;
	
		}
	}
}












function branchRemainingAdd(branchName,basePath)
{
	loadXMLBranch();
	queryString =basePath+"displayBranchAction.do?hiddenOperation=findBranch"+"&branchName=" + branchName.value ;
	//alert(queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeChild;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
		
}


function branchView(basePath)
{
	
	document.getElementById('hiddenOperation2').value='underBranch';
	document.getElementById('form2').submit();
	
	
	/*
	
	if(document.getElementById('branchName').value=='')
	{
		
		loadXMLBranch();
	queryString =basePath+"displayBranchAction.do?hiddenOperation=viewBranch" ;
	//alert(queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeChildView;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
	
	}
	
	else
	{
	//alert("jjjj");
	document.getElementById('hiddenOperation2').value='underBranch';
	document.getElementById('form2').submit();
	
	}	
		*/
}




function handleStateChangeChildView() {
	document.getElementById('changeDiv2').innerHTML='<font face="Verdana" size="2">Loading State.. </font>';
		
	
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
	//alert('hiii');
	//document.getElementById('changeDiv2').innerHTML= xmlhttpBranch.responseText;
	
	
	/*
	document.getElementById('branchIdDiv').innerHTML = 
	
	"<select   name='districtCombo'  id='districtCombo' style='font-family: Verdana; color: #000000; font-size: 8pt;width:140'>"
	+ " <option value='-1'>--district--</option>"
	+"</select>"
	
	
document.getElementById('branchIdsubmit1').innerHTML = 
"<select   name='cityCombo'  id='cityCombo' style='font-family: Verdana; color: #000000; font-size: 8pt;width:140'>"
	+ " <option value='-1'>--city--</option>"
	+"</select>"
		
		
		document.getElementById('branchIdsubmit2').innerHTML = "<input type='button' name='operation' id='opView' value='View' onclick='validateForView(this);' style=' font-family: Verdana; font-size: 8pt' />  ";
		*/
		
		
		}
	}
}

function validateForView()
{
	
	try
	{
	
	
if( document.getElementById('stateCombo').value!=-1 && document.getElementById('districtCombo').value==-1 && document.getElementById('districtCombo').value==-1   )
{
	//alert('asashhhh'+document.getElementById('stateCombo').value);

	document.getElementById('hiddenOperation2').value="viewStateWise"
	
	document.getElementById('stateId').value=document.getElementById('stateCombo').value;


	document.getElementById('form2').submit();

	
	
}


else if( document.getElementById('stateCombo').value!=-1 && document.getElementById('districtCombo').value!=-1 && document.getElementById('cityCombo').value==-1   )
{
	//alert('asashhhh'+document.getElementById('stateCombo').value);

	document.getElementById('hiddenOperation2').value="viewStateDistrictWise"
	
	document.getElementById('stateId').value=document.getElementById('stateCombo').value;
document.getElementById('districtId').value=document.getElementById('districtCombo').value;


	document.getElementById('form2').submit();

	
	
}




else if( document.getElementById('stateCombo').value!=-1 && document.getElementById('districtCombo').value!=-1 && document.getElementById('cityCombo').value!=-1   )
{
	//alert('asashhhh'+document.getElementById('stateCombo').value);

	document.getElementById('hiddenOperation2').value="viewStateDistrictCityWise"
	
	document.getElementById('stateId').value=document.getElementById('stateCombo').value;
document.getElementById('districtId').value=document.getElementById('districtCombo').value;
document.getElementById('cityId').value=document.getElementById('cityCombo').value;


	document.getElementById('form2').submit();

	
	
}





else if( document.getElementById('stateCombo').value==-1 && document.getElementById('districtCombo').value==-1 && document.getElementById('cityCombo').value==-1   )
{
	//alert('asashhhh'+document.getElementById('stateCombo').value);

	document.getElementById('hiddenOperation2').value="viewAll"
	
//	document.getElementById('stateId').value=document.getElementById('stateCombo').value;
//document.getElementById('districtId').value=document.getElementById('districtCombo').value;
//document.getElementById('cityId').value=document.getElementById('cityCombo').value;


	document.getElementById('form2').submit();

	
	
}

}
catch(e)
{
	
	return false;
}


}




function handleStateChangeChild() {
	document.getElementById('changeDiv2').innerHTML='<font face="Verdana" size="2" >Loading Branches.. </font>';
		
	//alert(xmlhttpBranch.status);
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
		
		document.getElementById('changeDiv2').innerHTML='Branch';
		
	
		document.getElementById('branchIdDiv').innerHTML = xmlhttpBranch.responseText;
	document.getElementById('branchIdsubmit1').innerHTML = 
	
	
"<input type='button' name='operation' id='op1' value='Add New Sub Branch'style=' font-size: 9pt; font-weight: bold; font-family: verdana, Helvetica, Sans-Serif; color: #585858; background-color: #D3D3D3;'  onclick='validateSelectBranch(this);'  />  ";

document.getElementById('branchIdsubmit2').innerHTML = 
"<input type='button' name='operation' id='op2' value='Update Branch' class='button'  onclick='validateSelectBranch(this);'  />";
document.getElementById('branchIdsubmit3').innerHTML = 
"<input type='button' name='operation' id='op3' value='View Branch' class='button'  onclick='validateSelectBranch(this);'  />";

	

		}
	}
}

function populateDynamicDistrictBranch(stateId) 
{

//document.getElementById('cityCombo').selectedIndex=0;	
	document.getElementById('branchIdsubmit1').innerHTML =
"<select  name='cityCombo'  id='cityCombo' style='font-family: Verdana; color: #000000; font-size: 8pt;width:230'   > "  
+"<option value='-1'>--city--</option>"
		+"</select>"	
	
	
	
	//alert("hi11"+stateId.value);
	loadXMLBranch();

queryString =document.getElementById('basePath').value+"displayBranchAction.do?hiddenOperation=districtDynamic"+"&stateId=" + stateId.value ;
//alert("queryString=="+queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeDistrictBranch;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
	
	
}




function handleStateChangeDistrictBranch() {
	//document.getElementById('changeDiv2').innerHTML='<font face="Verdana" size="2" color="#800000">Loading branches.. </font>';
		
	//alert(xmlhttpBranch.status);
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
	//alert(xmlhttpBranch.responseText);
		//
		 //alert(obj1Branch.id);
		
		//document.getElementById('changeDiv2').innerHTML='<font face="Verdana" size="2" color="#000080">branch </font>';
		
	//document.getElementById('firstOrSecond2').value="second"; 
	
	
		//alert("pppp");
		//document.getElementById('changeDiv2').style.display='visible';
					
		document.getElementById('branchIdDiv').innerHTML = '<font face="Verdana" size="2" color="#800000">Loading district.. </font>';
	//alert('ppp');
		document.getElementById('branchIdDiv').innerHTML = xmlhttpBranch.responseText;
	
	

		}
	}
}










function populateDynamicCityBranch(cityId) 
{
	
	//alert("hi11"+stateId.value);
	loadXMLBranch();

queryString =document.getElementById('basePath').value+"displayBranchAction.do?hiddenOperation=cityDynamic"+"&cityId=" + cityId.value ;
//alert("queryString=="+queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeCityBranch;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
	
	
}




function handleStateChangeCityBranch() {
	//document.getElementById('changeDiv2').innerHTML='<font face="Verdana" size="2" color="#800000">Loading city.. </font>';
		
	//alert(xmlhttpBranch.status);
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
	//alert(xmlhttpBranch.responseText);
		//
		 //alert(obj1Branch.id);
		
		//document.getElementById('changeDiv2').innerHTML='<font face="Verdana" size="2" color="#000080">branch </font>';
		
	//document.getElementById('firstOrSecond2').value="second"; 
	
	
		//alert("pppp");
		//document.getElementById('changeDiv2').style.display='visible';
					
		document.getElementById('branchIdsubmit1').innerHTML = '<font face="Verdana" size="2" color="#800000">Loading city.. </font>';
	//alert('ppp');
		document.getElementById('branchIdsubmit1').innerHTML = xmlhttpBranch.responseText;
	
	

		}
	}
}








function populatePincode(districtId) 
{
	try
	{
	alert("hi11"+districtId.value);
	loadXMLBranch();

queryString =document.getElementById('basePath').value+"displayBranchAction.do?hiddenOperation=pincode"+"&districtId=" + districtId.value ;
alert("queryString=="+queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangePincode;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
	}
catch(e)
{
	
	return false;
}
	
}




function handleStateChangePincode() {
	//document.getElementById(pincodeIdDiv).innerHTML='<font face="Verdana" size="2" color="#800000">Loading pincode.. </font>';
		
	//alert(xmlhttpBranch.status);
	if (xmlhttpBranch.readyState == 4) {
		if (xmlhttpBranch.status == 200) {
	
	alert('ppp');
					
		//document.getElementById('branchIdsubmit1').innerHTML = '<font face="Verdana" size="2" color="#800000">Loading pincode.. </font>';
		document.getElementById('pincodeIdDiv').innerHTML = xmlhttpBranch.responseText;
	
	

		}
	}
}







function validateSelectBranch(obj)
{
	////alert(obj.id);
	
	try
	{
	
	if(document.getElementById('branchNameCombo').value==-1)
	{
		alert("Select Branch");
		document.getElementById('branchNameCombo').focus();
	
		
		return false;
	}
	
	else
	{
	
	
	//alert(document.getElementById('branchNameCombo').value);
	
	if(obj.id=='op1')
	{
		
		document.getElementById('hiddenOperation2').value="AddNewBranch";
	}
		
else if(obj.id=='op2')
{
	
	document.getElementById('hiddenOperation2').value="UpdateBranch";
	
}

else if(obj.id=='op3')
{
	
	document.getElementById('hiddenOperation2').value="ViewBranchOnly";
	
}


	else
	{
		
	}	
	//	alert(document.getElementById('hiddenOperation2').value);
		document.getElementById('form2').submit();
		//return true;
	}
	
	}
catch(e)
{
	
	return false;
}
	
	
}



function branchAdd()
{
	
	//alert("emailID1=="+emailID1);
	
	try
	{
		
	
	
	if( document.getElementById('countryId').value==-1 || document.getElementById('countryId').value==0 )
	{
		alert("Select Country");
		document.getElementById('countryId').focus();
	
		
		return false;
	}
	if(document.getElementById('stateId').value==-1 || document.getElementById('stateId').value==0  )
	{
		alert("Select State");
		document.getElementById('stateId').focus();
	
		
		return false;
	}

	else if(document.getElementById('districtId').value==-1  || document.getElementById('districtId').value==0 )
	{
		alert("Select District");
		document.getElementById('districtId').focus();
	
		
		return false;
	}



	else if(document.getElementById('cityId').value==-1  || document.getElementById('cityId').value==0 )
	{
		alert("Select City");
		document.getElementById('cityId').focus();
	
		
		return false;
	}

	else if(document.getElementById('areaId').value==-1  || document.getElementById('areaId').value==0 )
	{
		alert("Select Area");
		document.getElementById('areaId').focus();
	
		
		return false;
	}


else if(document.getElementById('postOfficeId').value==-1  || document.getElementById('postOfficeId').value==0 )
	{
		alert("Select Post Office");
		document.getElementById('postOfficeId').focus();
	
		
		return false;
	}

else if(document.getElementById('pincode').value=='' )
	{
		alert("Enter PIN Code");
		document.getElementById('pincode').focus();
	
		
		return false;
	}


	else if(document.getElementById('branchName').value=='')
	{
		alert("Enter Branch Name");
		
		document.getElementById('branchName').focus();
	
		
		return false;
	}
	
	
	else if(document.getElementById('address').value=='')
	{
		alert("Enter Address");
		
		document.getElementById('address').focus();
	
		
		return false;
	}
	
	
	else if( document.getElementById('contactPerson1').value=='' && document.getElementById('contactPerson2').value ==''  )
	{
	alert("Enter Contact Person Name")
		document.getElementById('contactPerson1').focus();
		return false;	
		
	}
	else if( document.getElementById('contactNo1').value=='' && document.getElementById('contactNo2').value ==''  )
	{
	alert("Enter Contact No.")
		document.getElementById('contactNo1').focus();
		return false;	
		
	}
			
	else if( document.getElementById('emailId1').value=='' && document.getElementById('emailId2').value ==''  )
	{
	alert("Enter Email-Id")
		document.getElementById('emailId1').focus();
		return false;	
		
	}
	
	
	
	
	
	
	
	
	

else
{
	document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	return true;
	
}

}

catch(e)
{
	return false;
	
}

}













function branchUpdate()
{
	//alert("districtid--"+document.getElementById('districtIdUpdate').value)
	//alert("cityid--"+document.getElementById('cityIdUpdate').value)
	
	try
	{
	
	if( document.getElementById('subCountryId').value==-1 || document.getElementById('subCountryId').value==0 )
	{
		alert("Select Country");
		document.getElementById('subCountryId').focus();
	
		
		return false;
	}
	if(document.getElementById('stateIdUpdate').value==-1 || document.getElementById('stateIdUpdate').value==0  )
	{
		alert("Select State");
		document.getElementById('stateIdUpdate').focus();
	
		
		return false;
	}

	else if(document.getElementById('districtIdUpdate').value==-1  || document.getElementById('districtIdUpdate').value==0 )
	{
		alert("Select District");
		document.getElementById('districtIdUpdate').focus();
	
		
		return false;
	}



	else if(document.getElementById('cityIdUpdate').value==-1  || document.getElementById('cityIdUpdate').value==0 )
	{
		alert("Select City");
		document.getElementById('cityIdUpdate').focus();
	
		
		return false;
	}

	else if(document.getElementById('areaIdSub').value==-1  || document.getElementById('areaIdSub').value==0 )
	{
		alert("Select Area");
		document.getElementById('areaIdSub').focus();
	
		
		return false;
	}


else if(document.getElementById('postOfficeIdSub').value==-1  || document.getElementById('postOfficeIdSub').value==0 )
	{
		alert("Select Post Office");
		document.getElementById('postOfficeIdSub').focus();
	
		
		return false;
	}

else if(document.getElementById('pincodeSub').value=='' )
	{
		alert("Enter PIN Code");
		document.getElementById('pincodeSub').focus();
	
		
		return false;
	}


	else if(document.getElementById('branchNameUpdate').value=='')
	{
		alert("Enter Sub Branch Name");
		
		document.getElementById('branchNameUpdate').focus();
	
		
		return false;
	}
	
	
	else if(document.getElementById('address').value=='')
	{
		alert("Enter Address");
		
		document.getElementById('address').focus();
	
		
		return false;
	}
	
	
	else if( document.getElementById('contactPerson1').value=='' && document.getElementById('contactPerson2').value ==''  )
	{
	alert("Enter Contact Person Name")
		document.getElementById('contactPerson1').focus();
		return false;	
		
	}
	else if( document.getElementById('contactNo1').value=='' && document.getElementById('contactNo2').value ==''  )
	{
	alert("Enter Contact No.")
		document.getElementById('contactNo1').focus();
		return false;	
		
	}
			
	else if( document.getElementById('emailId1').value=='' && document.getElementById('emailId2').value ==''  )
	{
	alert("Enter Email-Id")
		document.getElementById('emailId1').focus();
		return false;	
		
	}
	

else if( document.getElementById('status').value==0  )
	{	
		
		temp=confirm('Are you sure, you want to disallow ?');
		if(temp!=true)
		{
			return false;
			
		}
		
	}



else
{
	
	temp=confirm('Are you sure ?');
		if(temp!=true)
		{
			return false;
			
		}
	
	
		document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
	
	
	
	return true;
	
}

}

catch(e)
{
	return false;
	
}

}





function branchAddNew()
{
	//alert("districtid--"+document.getElementById('districtIdUpdate').value)
	//alert("cityid--"+document.getElementById('cityIdUpdate').value)
	
	try
	{
		
		
	
	if( document.getElementById('subCountryId').value==-1 || document.getElementById('subCountryId').value==0 )
	{
		alert("Select Country");
		document.getElementById('subCountryId').focus();
	
		
		return false;
	}
	if(document.getElementById('stateIdSub').value==-1 || document.getElementById('stateIdSub').value==0  )
	{
		alert("Select State");
		document.getElementById('stateIdSub').focus();
	
		
		return false;
	}

	else if(document.getElementById('districtIdSub').value==-1  || document.getElementById('districtIdSub').value==0 )
	{
		alert("Select District");
		document.getElementById('districtIdSub').focus();
	
		
		return false;
	}



	else if(document.getElementById('cityIdSub').value==-1  || document.getElementById('cityIdSub').value==0 )
	{
		alert("Select City");
		document.getElementById('cityIdSub').focus();
	
		
		return false;
	}

	else if(document.getElementById('areaIdSub').value==-1  || document.getElementById('areaIdSub').value==0 )
	{
		alert("Select Area");
		document.getElementById('areaIdSub').focus();
	
		
		return false;
	}


else if(document.getElementById('postOfficeIdSub').value==-1  || document.getElementById('postOfficeIdSub').value==0 )
	{
		alert("Select Post Office");
		document.getElementById('postOfficeIdSub').focus();
	
		
		return false;
	}

else if(document.getElementById('pincodeSub').value=='' )
	{
		alert("Enter PIN Code");
		document.getElementById('pincodeSub').focus();
	
		
		return false;
	}


	else if(document.getElementById('branchName').value=='')
	{
		alert("Enter Sub Branch Name");
		
		document.getElementById('branchName').focus();
	
		
		return false;
	}
	
	
	else if(document.getElementById('address').value=='')
	{
		alert("Enter Address");
		
		document.getElementById('address').focus();
	
		
		return false;
	}
	
	
	else if( document.getElementById('contactPerson1').value=='' && document.getElementById('contactPerson2').value ==''  )
	{
	alert("Enter Contact Person Name")
		document.getElementById('contactPerson1').focus();
		return false;	
		
	}
	else if( document.getElementById('contactNo1').value=='' && document.getElementById('contactNo2').value ==''  )
	{
	alert("Enter Contact No.")
		document.getElementById('contactNo1').focus();
		return false;	
		
	}
			
	else if( document.getElementById('emailId1').value=='' && document.getElementById('emailId2').value ==''  )
	{
	alert("Enter Email-Id")
		document.getElementById('emailId1').focus();
		return false;	
		
	}
	





else
{
		document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
	
	return true;
	
}

}

catch(e)
{
	return false;
	
}
}





function onLoadForBranch()
{
	try{
	hideloadingpage();
	}catch(e){
	}
	
}



window.setTimeout(onLoadForBranch,1000);

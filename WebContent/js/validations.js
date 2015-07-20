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
function backButtonOverride() {
	setTimeout("backButtonOverrideBody()", 1);
}
function backButtonOverrideBody() {
	try {
		document.getElementById("operation").disable = true;
		history.forward();
	}
	catch (e) {
	}
	setTimeout("backButtonOverrideBody()", 1);
}
function disableOperation() {
	document.getElementById("operation").value = "Checking Your Details";
	document.getElementById("operation").disabled = true;
	return true;
}
function enableOperation() {
	document.getElementById("operation").value = "Place Work Order";
	document.getElementById("operation").disabled = false;
	return true;
}
function checkForAtleastOneNumberplaceWorkOrder(currentObject) {
	var numb = currentObject.id.replace(/\D/g, "");
//alert(numb);
	if (document.getElementById("shiftStartTimeHour" + numb).selectedIndex == 0) {
		alert("Please enter shift start time ");
		currentObject.value = "";
		document.getElementById("shiftStartTimeHour" + numb).focus();
		return false;
	}
	if (document.getElementById("shiftEndTimeHour" + numb).selectedIndex == 0) {
		alert("Please enter shift end time ");
		currentObject.value = "";
		document.getElementById("shiftEndTimeHour" + numb).focus();
		return false;
	}
	if (currentObject.value == "" && document.getElementById("checkNumber").value == 0) {
		document.getElementById("checkNumber").value = 0;
	} else {
		document.getElementById("checkNumber").value = 1;
	}

//alert(document.getElementById('checkNumber').value);
}
function placeWorkOrder() {
	var checkEmpty = "false";
	if (document.getElementById("counter").value == 0) {
		alert("No location found");
		return false;
	}
	if (document.getElementById("securityAgencyID").selectedIndex == 0) {
		alert("Please select Security Agency");
		document.getElementById("securityAgencyID").focus();
		return false;
	}
	if (document.getElementById("workOrderNo").value == "") {
		alert("Please enter Work Order No");
		document.getElementById("workOrderNo").focus();
		return false;
	}
	if (document.getElementById("startDateId").value == "") {
		alert("Please enter Work Order start date");
		document.getElementById("startDateId").focus();
		return false;
	}
	if (document.getElementById("endDateId").value == "") {
		alert("Please enter Work Order end date");
		document.getElementById("endDateId").focus();
		return false;
	}
	if (compareThreeDates(document.getElementById("startDateId").value, document.getElementById("endDateId").value, document.getElementById("currentDateId").value) == false) {
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}

//added by rakesh for new work order
function placeWorkOrderNew()
{    
		 
		 if(document.getElementById('workOrderNo')!= undefined && document.getElementById('workOrderNo').value.length==0)
		 {
		  alert("Work Order No. can not be empty, Please enter the work Order No.");
		  document.getElementById('workOrderNo').focus();
		  return false;
		 }
		 else if(document.getElementById('startDate')!= undefined && document.getElementById('startDate').value.length==0)
		 {
		  alert("Please enter the Start Date");
		  document.getElementById('startDate').focus();
		  return false;
		 }
		 else if(document.getElementById('endDate')!= undefined && document.getElementById('endDate').value.length==0)
		 {
		  alert("Please enter the End Date");
		  document.getElementById('endDate').focus();
		  return false;
		 }
		 else if (compareTwoDates(document.getElementById("startDate").value, document.getElementById("endDate").value) == false) 
		 {
		   return false;
	     }
		 else if(document.getElementById('billFrom')!= undefined && document.getElementById('billFrom').value=="0")
		 {
		  alert("Please Select the Bill From ");
		  document.getElementById('billFrom').focus();
		  return false;
		 }
		 else if(document.getElementById('billTo')!= undefined && document.getElementById('billTo').value=="0")
		 {
		  alert("Please enter the Bill To ");
		  document.getElementById('billTo').focus();
		  return false;
		 }
		
		 /* else if(document.getElementById('startDate').value != "") 
		 {
		
			var intFlag = 0;
			var strErrMsg = "Invalid work order start date \n\n";
			var dtDate = document.getElementById('startDate').value; 
			var tmp = dtDate.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var userdate = calcJulian(xDate);
			var gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;		
			var tmp = tmp.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var currentdate = calcJulian(xDate);
				
			if (userdate < currentdate) {
				
			strErrMsg = strErrMsg + "Work order start date is not greater than current date \n";
	   		//intFlag++;
			alert(strErrMsg);
			document.getElementById('startDate').focus();
			return false;
			}
			
		
	     } */
	     
	   if(document.getElementById('operation')!=null && document.getElementById('operation').value=="Place Work Order")
	   {
		   var tmp= confirm("Are you sure to place Work Order?");
		   if(tmp==false)
		   {
		    return false;
		   } 
	   }
	   else if(document.getElementById('operation')!=null && document.getElementById('operation').value=="Submit")
	   {
		   var tmp= confirm("Are you sure?");
		   if(tmp==false)
		   {
		    return false;
		   } 
	   }
	   
	   if(document.getElementById('operation')!=null && document.getElementById('operation').value=="Update")
	   {
		   var tmp= confirm("Are you sure?");
		   if(tmp==false)
		   {
		    return false;
		   } 
	   }
	 return true;
}

/*function compareExtensionDate(startDate, endDate, xDate) {
	var startDate = startDate.split("/");
	var endDate = endDate.split("/");
	var currentDate = currentDate.split("/");
	startDateYear = startDate[2];
	endDateYear = endDate[2];
	currentDateYear = currentDate[2];
	startDateMonth = startDate[1] - 1;//sets months to default values i.e Jan = 0; Feb = 1; etc.
	endDateMonth = endDate[1] - 1;
	currentDateMonth = currentDate[1] - 1;
	startDateDay = startDate[0];
	endDateDay = endDate[0];
	currentDateDay = currentDate[0];
	startDate = new Date(startDateYear, startDateMonth, startDateDay);
	endDate = new Date(endDateYear, endDateMonth, endDateDay);
	currentDate = new Date(currentDateYear, currentDateMonth, currentDateDay);
	dif = currentDate - startDate;
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("Start date cannot be less than current date");
		return false;
	}
	dif = currentDate - endDate;
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("End date cannot be less than current date");
		return false;
	}
	dif = startDate - endDate;//difference in milliseconds
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("End date cannot be less than start date");
		return false;
	}
}*/
function workOrderSelectionValidation()
{
	 if(document.getElementById('serviceProviderId') != undefined && document.getElementById('serviceProviderId').value=="0")
	 {
	   alert("Please select the service provider's Name");
	   document.getElementById('serviceProviderId').focus();
	   return false;
	 }
	 else if(document.getElementById('acceptanceCodeId') != undefined && document.getElementById('acceptanceCodeId').value=="0")
	 {
	   alert("Please select the Acceptance Code");
	   document.getElementById('acceptanceCodeId').focus();
	   return false;
	 }
	 return true;
}

function workOrderLocationDeployment()
{
	 if(document.getElementById('deploymentStartDate')!= undefined && document.getElementById('deploymentStartDate').value.length==0)
	 {
	   alert("Please select the Start Date");
	   document.getElementById('deploymentStartDate').focus();
	   return false;
	 }
	 
	 else if(document.getElementById('deploymentStartDate')!= undefined && document.getElementById('deploymentStartDate').value.length!=0)
	 {
	            var intFlag = 0;
				var strErrMsg = "Invalid work order start date \n\n";
				var startDate = document.getElementById('startDate').value; 
				var startDateTmp = startDate.split("-");
				var startDateFmt = startDateTmp[1] + "/" + startDateTmp[0] + "/" + startDateTmp[2];
			    startDate = calcJulian(startDateFmt);
				var endDate = document.getElementById('endDate').value; 
				var endDateTmp = endDate.split("-");
				var endDateFmt = endDateTmp[1] + "/" + endDateTmp[0] + "/" + endDateTmp[2];
			    endDate = calcJulian(endDateFmt);	
				var deploymentStartDate = document.getElementById('deploymentStartDate').value; 
			  	var deploymentStartDateTmp = deploymentStartDate.split("/");
				var deploymentStartDateFmt = deploymentStartDateTmp[1] + "/" + deploymentStartDateTmp[0] + "/" + deploymentStartDateTmp[2];
			    deploymentStartDate = calcJulian(deploymentStartDateFmt);
			    if(startDate > deploymentStartDate)
			    {
			      alert("Start Date can not be less then work order start date");
			      document.getElementById('deploymentStartDate').focus();
			      return false;
			    }
			    else if(endDate < deploymentStartDate)
			    {
			      alert("Start Date can not be greater then work order end date");
			      document.getElementById('deploymentStartDate').focus();
			      return false;
			    }
				
	 }
	 if(document.getElementById('applyToAllLocation')!=null && document.getElementById('applyToAllLocation').checked==true)
	 {
	   var tmp= confirm("Are you sure to apply this deployment to all locations Under this workOrder?");
	   if(tmp==true)
	   {
	    return false;
	   }
	   else
	   {
	    return true;
	   }  
	 }
}

//////////////////end Rakesh

function placeNewWorkOrder() {

//alert(document.getElementById('shiftFirstStartTimeHour').selectedIndex);
	if (document.getElementById("workOrderNo").value == "") {
		alert("Please enter work order no");
		document.getElementById("workOrderNo").focus();
		return false;
	}
	if (document.getElementById("workOrderStartDate").value == "") {
		alert("Please enter start date");
		document.getElementById("workOrderStartDate").focus();
		return false;
	}
	if (document.getElementById("workOrderStartDate").value != "") {
		var intFlag = 0;
		var strErrMsg = "Invalid work order start date \n\n";
		var dtDate = document.getElementById("workOrderStartDate").value; 
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
		strErrMsg = strErrMsg + "Work order start date is not greater than current date \n";
   		//intFlag++;
		alert(strErrMsg);
		document.getElementById("workOrderStartDate").focus();
		return false;
		}
	} 
	if (document.getElementById("workOrderEndDate").value == "") {
		alert("Please enter end date");
		document.getElementById("workOrderEndDate").focus();
		return false;
	}
	if (compareTwoDates(document.getElementById("workOrderStartDate").value, document.getElementById("workOrderEndDate").value) == false) {
		return false;
	}
	// Added by Vidya on 27th Jan 2010
	if (document.getElementById("billFrom").selectedIndex == 0) {
		alert("Please select bill from");
		document.getElementById("billFrom").focus();
		return false;
	}
	if (document.getElementById("billTo").selectedIndex == 0) {
		alert("Please select bill to");
		document.getElementById("billTo").focus();
		return false;
	}
	// Ended by Vidya
	if (document.getElementById("shiftFirstStartTimeHour").selectedIndex == 0 && document.getElementById("GeneralShiftStartTimeHour").selectedIndex == 0) {
		alert("Please select first shift or general shift start time");
		return false;
	}
	if (document.getElementById("shiftFirstStartTimeHour").selectedIndex != 0 && document.getElementById("shiftFirstEndTimeHour").selectedIndex == 0) {
		alert("Please select first shift end time");
		document.getElementById("shiftFirstEndTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftSecondStartTimeHour").selectedIndex != 0 && document.getElementById("shiftSecondEndTimeHour").selectedIndex == 0) {
		alert("Please select second shift End time");
		document.getElementById("shiftSecondEndTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftThirdStartTimeHour").selectedIndex != 0 && document.getElementById("shiftThirdEndTimeHour").selectedIndex == 0) {
		alert("Please select third shift End time");
		document.getElementById("shiftThirdEndTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftFirstStartTimeHour").selectedIndex == 0 && document.getElementById("shiftSecondStartTimeHour").selectedIndex != 0) {
		alert("Please select first shift start time");
		document.getElementById("shiftFirstStartTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftSecondStartTimeHour").selectedIndex == 0 && document.getElementById("shiftThirdStartTimeHour").selectedIndex != 0) {
		alert("Please select second shift start time");
		document.getElementById("shiftSecondStartTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftFirstStartTimeHour").selectedIndex == 0 && document.getElementById("shiftFirstEndTimeHour").selectedIndex != 0) {
		alert("Please select first shift start time");
		document.getElementById("shiftFirstStartTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftSecondStartTimeHour").selectedIndex == 0 && document.getElementById("shiftSecondEndTimeHour").selectedIndex != 0) {
		alert("Please select second shift start time");
		document.getElementById("shiftSecondStartTimeHour").focus();
		return false;
	}
	if (document.getElementById("shiftThirdStartTimeHour").selectedIndex == 0 && document.getElementById("shiftThirdEndTimeHour").selectedIndex != 0) {
		alert("Please select third shift start time");
		document.getElementById("shiftThirdStartTimeHour").focus();
		return false;
	}
	if (document.getElementById("GeneralShiftStartTimeHour").selectedIndex == 0 && document.getElementById("GeneralShiftEndTimeHour").selectedIndex != 0) {
		alert("Please select general shift start time");
		document.getElementById("GeneralShiftStartTimeHour").focus();
		return false;
	}
	if (document.getElementById("GeneralShiftStartTimeHour").selectedIndex != 0 && document.getElementById("GeneralShiftEndTimeHour").selectedIndex == 0) {
		alert("Please select general shift end time");
		document.getElementById("GeneralShiftEndTimeHour").focus();
		return false;
	}
	else {
		var temp = confirm("Are you sure ?");
		if (temp == true) {
			var operationvariable = operation();
			if (operationvariable == false) {
				return false;
			} else {
				return true;
			}
		}
		 else {
			return false;
		}
	}
}
function placeNewWorkOrderUpdate() {
	if (document.getElementById("workOrderNo").value == "") {
		alert("Please enter work order no");
		document.getElementById("workOrderNo").focus();
		return false;
	}
	// Added by Vidya on 28th Jan 2010
	if (document.getElementById("billFrom").value == "0") {
		alert("Please select bill from");
		document.getElementById("billFrom").focus();
		return false;
	}
	if (document.getElementById("billTo").value == "0") {
		alert("Please select bill to");
		document.getElementById("billTo").focus();
		return false;
	}
	// Ended by Vidya
	if (compareTwoDates(document.getElementById("workOrderStartDate").value, document.getElementById("workOrderEndDate").value) == false) {
		return false;
	} else {
		var temp = confirm("Are you sure?");
		if (temp == true) {
			var operationvariable = operation();
			if (operationvariable == false) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
}
function checkshift(obj, obj1, shift) {
//alert("hii=="+obj1.selectedIndex);
	if (obj1.selectedIndex == 0) {
		alert("Please Select " + shift);
		obj.selectedIndex = 0;
		obj1.focus();
		return false;
	}
}
function checkAMORPM(obj, obj1) {
	if (obj.value < 12) {
		obj1.innerHTML = "AM";
	} else {
		obj1.innerHTML = "PM";
	}
}
function compareThreeDates(startDate, endDate, currentDate) {
	var startDate = startDate.split("/");
	var endDate = endDate.split("/");
	var currentDate = currentDate.split("/");
	startDateYear = startDate[2];
	endDateYear = endDate[2];
	currentDateYear = currentDate[2];
	startDateMonth = startDate[1] - 1;//sets months to default values i.e Jan = 0; Feb = 1; etc.
	endDateMonth = endDate[1] - 1;
	currentDateMonth = currentDate[1] - 1;
	startDateDay = startDate[0];
	endDateDay = endDate[0];
	currentDateDay = currentDate[0];
	startDate = new Date(startDateYear, startDateMonth, startDateDay);
	endDate = new Date(endDateYear, endDateMonth, endDateDay);
	currentDate = new Date(currentDateYear, currentDateMonth, currentDateDay);
	dif = currentDate - startDate;
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("Start date cannot be less than current date");
		return false;
	}
	dif = currentDate - endDate;
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("End date cannot be less than current date");
		return false;
	}
	dif = startDate - endDate;//difference in milliseconds
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("End date cannot be less than start date");
		return false;
	}
}
function compareTwoDates(startDate, endDate) {
	var startDate = startDate.split("/");
	var endDate = endDate.split("/");
	startDateYear = startDate[2];
	endDateYear = endDate[2];
	startDateMonth = startDate[1] - 1;//sets months to default values i.e Jan = 0; Feb = 1; etc.
	endDateMonth = endDate[1] - 1;
	startDateDay = startDate[0];
	endDateDay = endDate[0];
	startDate = new Date(startDateYear, startDateMonth, startDateDay);
	endDate = new Date(endDateYear, endDateMonth, endDateDay);
	dif = startDate - endDate;//difference in milliseconds
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert("End date cannot be less than start date");
		return false;
	}
}
function Vda() {
	var checkEntry = false;
	if (document.getElementById("hiddenCounter").value == 0) {
		alert("No state found for adding/updating VDA");
		return false;
	}
	for (var i = 0; i < document.getElementById("hiddenCounter").value; i++) {
		if (document.getElementById("vda" + i).value != "") {
			checkEntry = true;
			break;
		}
	}
	for (var i = 0; i < document.getElementById("hiddenCounter").value; i++) {
		if (isNaN(document.getElementById("vda" + i).value) && document.getElementById("vda" + i).value != "") {
			alert("Please enter number");
			document.getElementById("vda" + i).value = "";
			document.getElementById("vda" + i).focus();
			return false;
		}
		if (document.getElementById("vda" + i).value == "" && (document.getElementById("startDate" + i).value != "" || document.getElementById("endDate" + i).value != "")) {
			alert("Please enter VDA Amount");
			document.getElementById("vda" + i).focus();
			return false;
		}
		if (document.getElementById("vda" + i).value != "" && document.getElementById("startDate" + i).value == "") {
			alert("Enter start date");
			document.getElementById("startDate" + i).focus();
			return false;
		}
		if (document.getElementById("vda" + i).value != "" && document.getElementById("endDate" + i).value == "") {
			alert("Enter end date");
			document.getElementById("endDate" + i).focus();
			return false;
		}
		if (convertIntoDate(document.getElementById("endDate" + i).value) < convertIntoDate(document.getElementById("startDate" + i).value)) {
			alert("End date must be greater than start date");
			document.getElementById("endDate" + i).value = "";
			return false;
		}
	}
	if (checkEntry == false) {
		alert("Please enter VDA amount");
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function convertIntoDate(date) {
	var date = date.split("/");
	dateYear = date[2];
	dateMonth = date[1] - 1;//sets months to default values i.e Jan = 0; Feb = 1; etc.
	dateDay = date[0];
	date = new Date(dateYear, dateMonth, dateDay);
	return Math.ceil(date / 1000 / 60 / 60 / 24);
}
function checkNumberValidation(number) {
	if (isNaN(removeAllSpaces(number))) {
		alert("Please enter number");
		number.value = "";
	}
}
function checkPositiveIntegerValidation(number) {
	if (isNaN(removeAllSpaces(number))) {
		alert("Please enter number");
		number.value = "";
		return false;
	}
	if ((number.value).indexOf(".") > -1 || (number.value).indexOf("-") == 0) {
		alert("Please enter positive integer");
		number.value = "";
		return false;
	}
}
function removeAllSpaces(string) {
	var stringValue = string.value;
	var tstring = "";
	stringValue = "" + stringValue;
	splitstring = stringValue.split(" ");
	for (i = 0; i < splitstring.length; i++) {
		tstring += splitstring[i];
	}
	string.value = tstring;
	return tstring;
}
function selectStateForCityAndZone() {
	if (document.getElementById("state").selectedIndex == 0 && document.getElementById("hiddenOperation").value != "UpdateLocation") {
		alert("Please select state");
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function addRowForCityAndZoneAdd(divid) {
	var xx = parseInt(document.getElementById("hiddenCounter").value);

//alert("hiii");

//var selected0=false;
//var selected1=true;
//var selected2=false;
//var selected3=false;
//var selected4=false;
//var selected5=false;
	var ni = divid;
	var newdiv = document.createElement("div");
	var divIdName = "my" + xx + "Div";
	newdiv.setAttribute("id", divIdName);
	var selected = document.getElementById("combo").value;
//alert(selected);

//alert(document.getElementsByName('zoneId').length);
	var tag = document.getElementsByTagName("select");
	switch (selected) {
	  case "0":
		selected = "<option value=\"0\" selected>0</option>" + "<option value=\"1\" >1</option>" + "<option value=\"2\" >2</option>" + "<option value=\"3\" >3</option>" + "<option value=\"4\" >4</option>" + "<option value=\"5\" >5</option>";
		break;
	  case "1":
		selected = "<option value=\"1\" selected>1</option>" + "<option value=\"2\" >2</option>" + "<option value=\"3\" >3</option>" + "<option value=\"4\" >4</option>" + "<option value=\"5\" >5</option>";

//document.getElementById('ZoneTypeStatus').value="Zone Entered";
		break;
	  case "2":
		selected = "<option value=\"1\" >1</option>" + "<option value=\"2\" selected>2</option>" + "<option value=\"3\" >3</option>" + "<option value=\"4\" >4</option>" + "<option value=\"5\" >5</option>";
//document.getElementById('ZoneTypeStatus').value="Zone Entered";
		break;
	  case "3":
		selected = "<option value=\"1\" >1</option>" + "<option value=\"2\" >2</option>" + "<option value=\"3\" selected >3</option>" + "<option value=\"4\" >4</option>" + "<option value=\"5\" >5</option>";
//document.getElementById('ZoneTypeStatus').value="Zone Entered";
		break;
	  case "4":
		selected = "<option value=\"1\" >1</option>" + "<option value=\"2\" >2</option>" + "<option value=\"3\" >3</option>" + "<option value=\"4\" selected>4</option>" + "<option value=\"5\" >5</option>";
//document.getElementById('ZoneTypeStatus').value="Zone Entered";
		break;
	  case "5":
		selected = "<option value=\"1\" >1</option>" + "<option value=\"2\" >2</option>" + "<option value=\"3\" >3</option>" + "<option value=\"4\" >4</option>" + "<option value=\"5\" selected>5</option>";
//document.getElementById('ZoneTypeStatus').value="Zone Entered";
		break;
	  case "6":
		selected = "<option value=\"0\" selected>0</option>";
		break;
	}
	newdiv.innerHTML = "<font face=\"Verdana\" size=\"2\" color=\"#000080\">Enter City</font>&nbsp;" + "<input type=\"text\" name=\"cityName\" size=\"20\"  id=\"category\" style=\"color: #000080; font-size: 8pt; font-family: Verdana; text-align: center\" onblur=\"removeTrailingSpace (this)\">" + "&nbsp;<font face=\"Verdana\" size=\"2\" color=\"#000080\">Zone</font>" + "&nbsp;&nbsp;<select size=\"1\" name=\"zoneId\" " + "style=\"color: #672323; font-size: 8pt; font-family: Verdana\" onblur=\"forComboForCityAndZoneAdd(this)\">" + selected + "</select>" + "<a    href=\"javascript:void(commonEmptyFunction())\" onclick='removeRowForCityAndZoneAdd(" + divIdName + ")'   >&nbsp;&nbsp;Remove City </a>";
	ni.appendChild(newdiv);
	xx++;
	document.getElementById("hiddenCounter").value = xx;
}
function removeRowForCityAndZoneAdd(divNum) {
	var d = document.getElementById("myDiv1");
	var olddiv = document.getElementById(divNum);
	d.removeChild(divNum);
}
function commonEmptyFunction() {
}
function forComboForCityAndZoneUpdate(combo) {


//document.getElementById('combo').value=combo.value;

//var element=document.getElementsByName('zoneId');
	var element = document.getElementsByTagName("select");

//alert("sdsdd=="+element.length);
	for (var j = 0; j < element.length; j++) {

//alert("o="+element[j].value);
		if (element[j].value == 0) {
			document.getElementById("ZoneTypeStatus").value = 0;
//alert("Zone is set to zero");
			break;
		} else {
//alert("ssssssss=="+document.getElementById('ZoneTypeStatus').value);
			document.getElementById("ZoneTypeStatus").value = -100;///-100 is any value given
		}
	}
}
function forComboForCityAndZoneAdd(combo) {
	var zoneSize = document.getElementById("zoneSize").value;
	var zoneCheckId = document.getElementById("zoneCheckId").value;

//alert("asas=="+zoneSize);
	if (zoneCheckId == 0 && zoneSize != 0) {
		document.getElementById("combo").value = 6;
	} else {
		document.getElementById("combo").value = combo.value;
	}
//var element=document.getElementsByName('zoneId');
	var element = document.getElementsByTagName("select");


//alert("sdsdd=="+element.length);
	for (var j = 0; j < element.length; j++) {

//alert("o="+element[j].value);
		if (element[j].value == 0) {
			document.getElementById("ZoneTypeStatus").value = 0;
//alert("Zone is set to zero");
			break;
		} else {
//alert("ssssssss=="+document.getElementById('ZoneTypeStatus').value);
			document.getElementById("ZoneTypeStatus").value = -100;///-100 is any value given
		}
	}
}
function CityAndZoneAddAndUpdate() {
	var textTag = document.getElementsByTagName("input");
	for (var i = 0; i < textTag.length; i++) {
		if (textTag[i].type == "text" && textTag[i].value == "") {
			alert("Please enter city name");
			textTag[i].focus();
			return false;
		}
	}







//var element=document.getElementsByName('zoneId');
	var element = document.getElementsByTagName("select");
	for (var j = 0; j < element.length; j++) {
//alert('asas');
		if (document.getElementById("ZoneTypeStatus").value == 0 && element[j].value != 0) {
			alert("Zone selection is wrong,There is atleast One City Which Is In Zero Zone. Therefore Please Select Zero Zone");
			element[j].focus();
			return false;
		}
	}
	var operationvariable = operation();
	if (operationvariable == false) {
		return false;
	} else {
		return true;
	}
}
function removeTrailingSpace(strObject) {
	str = strObject.value;
  //alert(str);
	while (str.charAt(0) == " ") {
		str = str.substring(1);
	}
	while (str.charAt(str.length - 1) == " ") {
		str = str.substring(0, str.length - 1);
	}
	strObject.value = str;
}
function CommonSingleColumnAdd(divid, name, size) {
	var xx = parseInt(document.getElementById("hiddenCounter").value);
//alert("xx="+xx);
	var ni = divid;
//var name='category';
	var newdiv = document.createElement("div");
	var divIdName = "my" + xx + "Div";
	newdiv.setAttribute("id", divIdName);
	newdiv.innerHTML = "<font face=\"Verdana\" size=\"2\" class=\"label\">Enter</font> <input type=\"text\" name=" + name + " size=" + size + "  id=\"category\"  onblur=\"removeTrailingSpace(this)\">&nbsp;&nbsp; <a href=\"javascript:void(commonEmptyFunction())\" onclick='CommonRemoveSingleColumnAdd(" + divIdName + ")' ><font face=\"Verdana\" size=\"1\">Remove</a></font>";
	ni.appendChild(newdiv);
	xx++;
	document.getElementById("hiddenCounter").value = xx;
}
function CommonRemoveSingleColumnAdd(divNum) {
	var d = document.getElementById("myDiv1");
	var olddiv = document.getElementById(divNum);
	d.removeChild(divNum);
}
function addCommonRow(divid1) {
	var xx = parseInt(document.getElementById("hiddenCounter").value);
	var checkCategoryDiv = 0;
	if (parseInt(document.getElementById("hiddenCounterCategoryDiv").value) == 0) {
		checkCategoryDiv = document.getElementById("myDiv1").innerHTML;
	} else {
		checkCategoryDiv = document.getElementById("hiddenCounterCategoryDiv").value;
	}
	var ni = divid1;
	var newdiv1 = document.createElement("div");
	var divIdName1 = "myx" + xx + "Div";
	newdiv1.setAttribute("id", divIdName1);
	newdiv1.innerHTML = "&nbsp;&nbsp;" + checkCategoryDiv + "<a href=\"javascript:void(commonEmptyFunction())\" onclick='CommonRemoveSingleColumnAdd(" + divIdName1 + ")'>&nbsp;Remove</a>";
	newdiv1.setAttribute("align", "center");
	ni.appendChild(newdiv1);
	xx++;
	document.getElementById("hiddenCounter").value = xx;
	document.getElementById("hiddenCounterCategoryDiv").value = checkCategoryDiv;
}
function EmployeeDesignationAddAndUpdate() {


/////alert(document.getElementById('industryId').selectedIndex);
	if (document.getElementById("industryId").selectedIndex == 0 || document.getElementById("industryId").selectedIndex == -1) {
		alert("Please Select Industry");
		document.getElementById("industryId").focus();
		return false;
	}
	var textTag = document.getElementsByTagName("input");
	var selectTag = document.getElementsByTagName("select");
	for (var i = 0; i < selectTag.length; i++) {
		if (selectTag[i].value == 0 && selectTag[i].id == "category") {
			alert("Please select category");
			selectTag[i].focus();
			return false;
		}
		if (selectTag[i].value == 0 && selectTag[i].id == "designation") {
			alert("Please select designation");
			selectTag[i].focus();
			return false;
		}
	}
	var operationvariable = operation();
	if (operationvariable == false) {
		return false;
	} else {
		return true;
	}
}
function CommonAddAndUpdateTextBox(value) {
	var textTag = document.getElementsByTagName("input");
	for (var i = 0; i < textTag.length; i++) {
		if (textTag[i].type == "text" && textTag[i].value == "") {
			alert("Please Enter " + value);
			textTag[i].focus();
			return false;
		}
	}
	var operationvariable = operation();
	if (operationvariable == false) {
		return false;
	} else {
		return true;
	}
}
function ZoneAndCategoryAdd() {
	if (document.getElementById("zoneId").selectedIndex == 0) {
		alert("Please select zone");
		document.getElementById("zoneId").focus();
		return false;
	}
	if (document.getElementById("categoryId").selectedIndex == 0) {
		alert("Please select category");
		document.getElementById("categoryId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function ZoneAndCategoryUpdate() {
	if (document.getElementById("zoneId").selectedIndex == 0) {
		alert("Please select zone id");
		document.getElementById("zoneId").focus();
		return false;
	}
	if (document.getElementById("designationId").selectedIndex == 0) {
		alert("Please select designation");
		document.getElementById("designationId").focus();
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function AddbasicAdmin() {
	if (document.getElementById("designationId").selectedIndex == 0) {
		alert("Please select designation");
		document.getElementById("designationId").focus();
		return false;
	}
	if (document.getElementById("basic").value == "") {
		alert("Please enter basic");
		document.getElementById("basic").focus();
		return false;
	}



//if(document.getElementById('vda').value==0)
//{

//alert("Please Enter VDA");
//document.getElementById('vda').focus();

//return false;
//}
	if (parseInt(document.getElementById("basic").value) == 0) {
		alert("Basic value is wrong");
		document.getElementById("basic").focus();
		return false;
	}


//if(parseInt(document.getElementById('vda').value)==0)
//{

//alert("Vda Value Is Wrong");
//document.getElementById('vda').focus();

//return false;
//}
	if (document.getElementById("basicStartDate").value == "") {
		alert("Please enter basic start date ");
		document.getElementById("basicStartDate").focus();
		return false;
	}
	if (document.getElementById("basicEndDate").value == "") {
		alert("Please enter basic end date ");
		document.getElementById("basicEndDate").focus();
		return false;
	}
	if (compareTwoDates(document.getElementById("basicStartDate").value, document.getElementById("basicEndDate").value) == false) {
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function UpdatebasicAdmin() {
	/*
if(document.getElementById('basic').value=='')
{

alert("Please Enter Basic");
document.getElementById('basic').focus();

return false;
}



if(document.getElementById('vda').value==0)
{

alert("Please Enter VDA");
document.getElementById('vda').focus();

return false;
}



if(parseInt(document.getElementById('basic').value)==0)
{

alert("Basic value is Wrong");
document.getElementById('basic').focus();

return false;
}


if(parseInt(document.getElementById('vda').value)==0)
{

alert("Vda Value Is Wrong");
document.getElementById('vda').focus();

return false;
}



if(document.getElementById('basicStartDate').value=='')
{

alert("Please Enter Basic Start Date ");
document.getElementById('basicStartDate').focus();

return false;
}
*/
	for (i = 1; i < document.getElementById("hiddenOperation").value; i++) {
		if (compareTwoDates(document.getElementById("basicStartDate" + i).value, document.getElementById("basicEndDate" + i).value) == false) {
			document.getElementById("basicStartDate" + i).focus();
			return false;
//break;
		}
	}
	var operationvariable = operation();
	if (operationvariable == false) {
		return false;
	} else {
		return true;
	}
}
function ZoneAndCategoryGeneralNameAddUpdate() {
	if (document.getElementById("zoneId").selectedIndex == 0) {
		alert("Please select zone id");
		document.getElementById("zoneId").focus();
		return false;
	}
	if (document.getElementById("generalName").selectedIndex == 0) {
		alert("Please select employee category");
		document.getElementById("generalName").focus();
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function BasicAddUpdateSG() {
///alert(document.getElementById('serviceChargesRate').value);
	if (document.getElementById("esiRate").value == "") {
		alert("Please enter ESI");
		document.getElementById("esiRate").focus();
		return false;
	}
	if (document.getElementById("epfRate").value == "") {
		alert("Please enter ESI rate");
		document.getElementById("epfRate").focus();
		return false;
	}
	if (document.getElementById("bonusRate").value == "") {
		alert("Please enter bonus rate");
		document.getElementById("bonusRate").focus();
		return false;
	}
	if (document.getElementById("gratuityRate").value == "") {
		alert("Please enter gratuity rate");
		document.getElementById("gratuityRate").focus();
		return false;
	}
	if (document.getElementById("uniformRate").value == "") {
		alert("Please enter uniform rate");
		document.getElementById("uniformRate").focus();
		return false;
	}
	if (document.getElementById("hraRate").value == "") {
		alert("Please enter HRA rate");
		document.getElementById("hraRate").focus();
		return false;
	}
	if (document.getElementById("edliRate").value == "") {
		alert("Please enter EDLI rate");
		document.getElementById("edliRate").focus();
		return false;
	}
	if (document.getElementById("admChargesRate").value == "") {
		alert("Please enter admin charges rate");
		document.getElementById("admChargesRate").focus();
		return false;
	}
	if (document.getElementById("nationalHolidayRate").value == "") {
		alert("Please enter national holiday rate");
		document.getElementById("nationalHolidayRate").focus();
		return false;
	}
	if (document.getElementById("serviceChargesRate").value == "") {
		alert("Please enter service charges rate");
		document.getElementById("serviceChargesRate").focus();
		return false;
	}
	if (document.getElementById("serviceTaxRate").value == "") {
		alert("Please enter service tax rate");
		document.getElementById("serviceTaxRate").focus();
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function addRowLocationAdd(divid) {
	var xx = parseInt(document.getElementById("hiddenCounter").value);
	var ni = divid;
	var newdiv = document.createElement("div");
	var divIdName = "my" + xx + "Div";
	newdiv.setAttribute("id", divIdName);
	newdiv.innerHTML = "<font face=\"Verdana\" size=\"2\" color=\"#672323\">Enter</font> <input type=\"text\" name=\"location\" size=\"30\"  id=\"location\" style=\"color: #000080; font-size: 8pt; font-family: Verdana; text-align: left\" onblur=\"removeTrailingSpace(this)\">&nbsp;&nbsp; <a href=\"javascript:void(commonEmptyFunction())\" onclick='CommonRemoveSingleColumnAdd(" + divIdName + ")' ><font face=\"Verdana\" size=\"1\" color=\"#672323\">Remove</a></font>";
	ni.appendChild(newdiv);
	xx++;
	document.getElementById("hiddenCounter").value = xx;
}
function PrincipalEmployerLocationAddAndUpdate() {
	var textTag = document.getElementsByTagName("input");
	var selectTag = document.getElementsByTagName("select");
	for (var i = 0; i < textTag.length; i++) {
		if (textTag[i].type == "text" && textTag[i].value == "") {
			alert("Please enter location");
			textTag[i].focus();
			return false;
		}
	}
	for (var i = 0; i < selectTag.length; i++) {
		if (selectTag[i].selectedIndex == 0 && document.getElementById("hiddenOperation").value == "Add") {
			alert("Please select city");
			selectTag[i].focus();
			return false;
		}
	}
	var operationvariable = operation();
	if (operationvariable == false) {
		return false;
	} else {
		return true;
	}
}
function SelectAgreement() {
	if (document.getElementById("agreementSampleId").selectedIndex == 0) {
		alert("Please select sample");
		document.getElementById("agreementSampleId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function updateTextAreaHeightAgreement(obj) {
	if (obj == null) {
		return false;
	}
	var objText = obj.value;
	var fontFamilyAdj = obj.style.fontFamily == "Courier" ? 1.1 : 0.9;
	var linefeedsArray = objText.match(/[\n\r]/g);
	var linefeeds = (linefeedsArray == null ? 0 : linefeedsArray.length);
	var spacesArray = objText.match(/[ \t]/g);
	var spaces = (spacesArray == null ? 1 : spacesArray.length + 1);
	var avgWordSize = Math.round(obj.value.length / spaces + 0.5);
  // A large word is greater than 35% of the adj cols
	var adjColumns = Math.round(obj.cols / fontFamilyAdj);
	var largeWordSize = Math.round(adjColumns * 0.35);
	var regExpStr = "\\w{" + largeWordSize + ",}";
	var largeWordArray = objText.match(new RegExp(regExpStr, "g"));
	var largeWordCount = (largeWordArray == null ? 0 : largeWordArray.length);
	var extraRows = Math.round(obj.value.length / adjColumns) + 1;
	extraRows += Math.round(largeWordCount * 0.5);

  // Density tries to measure large white space vs ideal fill
	var density = Math.round(objText.length / (adjColumns * (linefeeds + extraRows)) * 100) / 100;
	if (density < 0.7 && density > 0.2 && objText.length > adjColumns && linefeeds > 0) {
		extraRows += Math.round(fontFamilyAdj / density + 0.5);
		extraRows -= Math.round(linefeeds * (linefeeds < 20 ? 0.2 : 0.1));
	}
	var newRows = linefeeds + extraRows;
	var debugStr = "TEXTAREA id=" + obj.id + " newRows= " + newRows + " linefeeds=" + linefeeds + " extraRows=" + extraRows + " density=" + density + " fontFamilyAdj=" + fontFamilyAdj + " spaces=" + spaces + " avgWordSize=" + avgWordSize + " cols=" + obj.cols + " adjColumns=" + adjColumns + " largeWordsize=" + largeWordSize + " largeWordCount=" + largeWordCount;
 ///document.getElementById( "debugText" ).innerText = debugStr;
	if (newRows != obj.rows) {
		obj.rows = newRows;
	}
}
function checkTextAreaLimit(obj, limit) {
   //removeTrailingSpace(obj);
   // alert("HIIIIIIIIIIIIIi");
	if (obj.value.length > limit) {
		alert("Not more than " + limit + " characters Are Allowed");
		obj.focus();
		return false;
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function checkForTwoCombo(obj1, obj2, message1, message2) {
	if (obj1.selectedIndex == 0) {
		alert("Please select " + message1);
		obj1.focus();
		return false;
	}
	if (obj2.selectedIndex == 0) {
		alert("Please select " + message2);
		obj2.focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function checkForOneCombo(obj1, message1) {
	if (obj1.selectedIndex == 0) {
		alert("Please select " + message1);
		obj1.focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function ForwardedToPEAndAccept(form, basePath, accept) {
	if (document.getElementById("checkForTextArea").value == 0) {
		var temp = confirm("Are you sure?");
	} else {
		var temp = confirm("Are you sure, all contents will be ignored ?");
	}
	if (temp == true) {
		document.getElementById("accept").value = accept;
		form.action = basePath.value + "submitAgreementFwdByPE.do";
		document.getElementById("javascript").value = "true";
		document.getElementById("operationYes").value = "Please Wait";
		document.getElementById("backbutton").value = "1";
		document.getElementById("operationYes").disabled = true;
		form.submit();
		return true;
	} else {
		return false;
	}
}
function ForwardedToPEAndNotAccept(form, basePath, accept) {
	document.getElementById("accept").value = accept;
	var s1 = "Please Paste Here Original Contents";
	var s2 = "Please Write Here New Contents";
	if (document.getElementById("checkForTextArea").value == 0) {
		var forTextArea = document.getElementById("forTextArea");
  // forTextArea.innerHTML='&nbsp;&nbsp;<textarea rows="7" name="textAreaPEContent" cols="50" id="textAreaPEContent"    onfocus="removeData(this,'Please Paste Here Original Contents','Please Write Here New Contents');"  onKeydown="return removeOnKeyPress(event)" onselectstart="javascript:return false" onblur="removeTrailingSpace(this);"  >Please Paste Here Original Contents</textarea>'
//+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'
//+'<textarea rows="7" name="textAreaSEContent" id="textAreaSEContent" cols="50"  onfocus="removeData(this,'Please Paste Here Original Contents','Please Write Here New Contents');"  onblur="removeTrailingSpace(this);">Please Write Here New Contents</textarea>';
		forTextArea.innerHTML = "&nbsp;&nbsp;<textarea rows=\"7\" name=\"textAreaPEContent\" cols=\"50\" id=\"textAreaPEContent\"    onfocus=\"removeData(this,'Please Paste Here Original Contents','Please Write Here New Contents');\"  onblur=\"removeTrailingSpace(this),updateTextAreaHeightAgreement(this);\"  >Please Paste Here Original Contents</textarea>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + "<textarea rows=\"7\" name=\"textAreaSEContent\" id=\"textAreaSEContent\" cols=\"50\"  onfocus=\"removeData(this,'Please Paste Here Original Contents','Please Write Here New Contents');\"  onblur=\"removeTrailingSpace(this),updateTextAreaHeightAgreement(this);\" >Please Write Here New Contents</textarea>";
		document.getElementById("checkForTextArea").value = 1;
    //onclick='CommonRemoveSingleColumnAdd('+divIdName+')'
	} else {
		var temp = confirm("Are you sure?");
		if (temp == true) {
			document.getElementById("operationYes").value = "Please Wait";
			document.getElementById("operationYes").disabled = true;
			document.getElementById("javascript").value = "true";
			document.getElementById("operationNo").value = "Please Wait";
			document.getElementById("operationNo").disabled = true;
			document.getElementById("backbutton").value = "1";
			form.action = basePath.value + "submitAgreementFwdByPE.do";
			form.submit();
		} else {
			return false;
		}
	}
}
   
   
   
     
   //
   
  
   
   
   
    //
function removeData(obj, s1, s2) {
   ///alert(s1);
	if (obj.value == s1 || obj.value == s2) {
		obj.value = "";
	}
}
function removeOnKeyPress(e) {
      //alert('jj');
      //obj.focus();
	var unicode = e.charCode ? e.charCode : e.keyCode;
	if (unicode > 0) {
		return false;
	}
}
function AcceptAgreement(form, basePath, accept, stringValue) {
	var temp = confirm(stringValue);
	if (temp == true) {
		document.getElementById("accept").value = accept;
		form.action = basePath.value + "submitAgreementFwdBySE.do";
		document.getElementById("javascript").value = "true";
		document.getElementById("operationNo").value = "Please Wait";
		document.getElementById("operationYes").value = "Please Wait";
		document.getElementById("backbutton").value = "1";
		document.getElementById("operationYes").disabled = true;
		document.getElementById("operationNo").disabled = true;
		form.submit();
		return true;
	} else {
	}
}
function AcceptAgreementReopen(form, basePath, accept, stringValue) {
	var temp = confirm(stringValue);
	if (temp == true) {
		document.getElementById("accept").value = accept;
		form.action = basePath.value + "submitAgreementSampleFwdToSEReopen.do";
		form.submit();
	} else {
	}
}
function checkForSingleClick(check) {
	temp = confirm(check);
	if (temp == true) {
		operation();
	} else {
		return false;
	}
}
function checkDelegatePE(num) {
	for (var i = 0; i < num; i++) {
		if (document.getElementById("firstName" + i).value !== "" && document.getElementById("lastName" + i).value == "") {
			alert("Please enter last name");
			document.getElementById("lastName" + i).focus();
			return false;
		}
		if (document.getElementById("firstName" + i).value !== "" && document.getElementById("emailId" + i).value == "") {
			alert("Please enter email id");
			document.getElementById("emailId" + i).focus();
			return false;
		}
	}
	var operationvariable = operation();
	if (operationvariable == false) {
		return false;
	} else {
		return true;
	}
}
function checkCommonOneValue(obj, stringValue) {
	var numb = obj.id.replace(/\D/g, "");
//alert(numb);
//alert(obj.value);
//alert(document.getElementById(stringValue));
//alert(document.getElementById(stringValue).value);
	if (obj.value != "" && document.getElementById(stringValue + numb).value == "") {
		alert("Please enter " + stringValue);
		obj.value = "";
		document.getElementById(stringValue + numb).focus();
		return false;
	} else {
		return true;
	}
}

 function validate()
	 {
	 valid=true;
	  if(delegatesForSEForm.postName.selectedIndex== 0 )
	  {
	  alert("Please select the desired post");
	  delegatesForSEForm.postName.focus();
	  return false;
	  }
	  if(delegatesForSEForm.name.selectedIndex== 0 )
	  {
	  alert("Please select name");
	  delegatesForSEForm.name.focus();
	  return false;
	  }
	 if(delegatesForSEForm.allowedDate.value=="")
	 {
	 alert("Please enter delegation date");
	 delegatesForSEForm.allowedDate.focus();
	 return false;
	 }
	
	 return commonAreYouSure();
	 }
	 
function commonAreYouSure() {
	var temp = confirm("Are you sure ?");
	if (temp == true) {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
	
}
function acceptance(collect) {
	if (document.getElementById("uniformRateArray").value == "") {
		alert("Please enter uniform rate");
		document.getElementById("uniformRateArray").focus();
		return false;
	}
	if (document.getElementById("weeklyOffRateArray").value == "") {
		alert("Please enter Weekly Off Rate");
		document.getElementById("weeklyOffRateArray").focus();
		return false;
	}
	if (document.getElementById("serviceChargesRateArray").value == "") {
		alert("Please enter service charges rate");
		document.getElementById("serviceChargesRateArray").focus();
		return false;
	}
	if (document.getElementById("serviceTaxRateArray").value == "") {
		alert("Please enter service tax rate");
		document.getElementById("serviceTaxRateArray").focus();
		return false;
	}
	if (collect == "Add") {
		var check;
		for (i = 1; i < document.getElementById("hiddenOperationSerialNo").value; i++) {
			if (document.getElementById("allow" + i).selectedIndex != 0) {
				check = 1;
				break;
			}
		}
		if (check != 1) {
			alert("Please accept for atleast one designation");
			return false;
		}
	}
	var temp = confirm("Are you sure you have accepted these rates?");
	if (temp == true) {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		}else {
			return true;
		}
	}else {
		return false;
	}
}
function SelectLocationForWorkOrderAddAndUpdate() {
	if (document.getElementById("locationId").selectedIndex == 0) {
		alert("Please select location");
		document.getElementById("locationId").focus();
		return false;
	}
	if (document.getElementById("industryId").selectedIndex == 0) {
		alert("Please select industry");
		document.getElementById("industryId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function SelectLocationForAgreementAddAndUpdate() {
	if (document.getElementById("locationId").selectedIndex == 0) {
		alert("Please select location");
		document.getElementById("locationId").focus();
		return false;
	}
	if (document.getElementById("industryId").selectedIndex == 0) {
		alert("Please select industry");
		document.getElementById("industryId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function DesignationCategoryIndustry() {
	if (document.getElementById("stateId").selectedIndex == 0) {
		alert("Please select state");
		document.getElementById("stateId").focus();
		return false;
	}
	if (document.getElementById("categoryId").selectedIndex == 0) {
		alert("Please select category");
		document.getElementById("categoryId").focus();
		return false;
	}
	if (document.getElementById("industryId").selectedIndex == 0) {
		alert("Please select industry");
		document.getElementById("industryId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function minimumWagesParameters() {
	if (document.getElementById("esiRate").value == 0 || document.getElementById("esiRate").value == "") {
		alert("Please enter Esi rate");
		document.getElementById("esiRate").focus();
		return false;
	}
	if (document.getElementById("epfRate").value == 0 || document.getElementById("epfRate").value == "") {
		alert("Please enter Epf rate");
		document.getElementById("epfRate").focus();
		return false;
	}
	if (document.getElementById("bonusRate").value == 0 || document.getElementById("bonusRate").value == "") {
		alert("Please enter bonus rate");
		document.getElementById("bonusRate").focus();
		return false;
	}
	if (document.getElementById("gratuityRate").value == 0 || document.getElementById("gratuityRate").value == "") {
		alert("Please enter gratuity rate");
		document.getElementById("gratuityRate").focus();
		return false;
	}
	if (document.getElementById("edliRate").value == 0 || document.getElementById("edliRate").value == "") {
		alert("Please enter Edli rate");
		document.getElementById("edliRate").focus();
		return false;
	}
	//if (document.getElementById("epsRate").value == 0 || document.getElementById("epsRate").value == "") {
		//alert("Please enter Eps rate");
		//document.getElementById("epsRate").focus();
		//return false;
	//}
	if (document.getElementById("admRate").value == 0 || document.getElementById("admRate").value == "") {
		alert("Please enter admin charges rate");
		document.getElementById("admRate").focus();
		return false;
	} else {
		var temp = confirm("Are You Sure?");
		if (temp == true) {
			return true;
		}else {
			return false;
		}
	}
}
function commonSingleComboBox(obj, check) {
	if (obj.selectedIndex == 0) {
		alert("Please select ");
		obj.focus();
		return false;
	}
	if (check == "Y") {
		temp = confirm("Are you sure ?");
		if (temp == true) {
			var operationvariable = operation();
			if (operationvariable == false) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	} else {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function operation() {




////alert(document.getElementById('backbutton').value);
	if (document.getElementById("backbutton").value != 0) {
		alert("Please request for new page");
		return false;
	} else {
		document.getElementById("backbutton").value = "1";
////document.getElementById('backbutton').focus();
		document.getElementById("javascript").value = "true";
		document.getElementById("operation").value = "Please Wait";
		document.getElementById("operation").disabled = true;
		return true;
	}
}
function SelectLocationIndustryAddUpdate() {
	if (document.getElementById("stateIdArray").selectedIndex == 0 || document.getElementById("stateIdArray").value == '') {
		alert("Please Select State");
		document.getElementById("stateIdArray").focus();
		return false;
	}
	if (document.getElementById("industryId").selectedIndex == 0) {
		alert("Please Select Industry");
		document.getElementById("industryId").focus();
		return false;
	}if (document.getElementById("agencyId").selectedIndex == 0) {
		alert("Please Select Agency");
		document.getElementById("agencyId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}
function operationSecond() {
	document.getElementById("javascript").value = "true";
	document.getElementById("operation").value = "Please Wait";
	return true;
}
function commonBackButtonDisable() {
	history.forward();
}
function selectAgreementForwardToSE() {
	if (document.getElementById("agreementAdminId").selectedIndex == 0) {
		alert("Please select agreement sample");
		document.getElementById("agreementAdminId").focus();
		return false;
	} else {
		var operationvariable = operationSecond();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	}
}

// added by Gajanan to for show two digit after decimal point 
function fixedTwoDigitAfterDecimal(object){
 	if (isNaN(removeAllSpaces(object))) {
		alert("Please enter number");
		object.value = "";
	}
 	var val= new Number(object.value);
 	object.value = val.toFixed(2);
 }

///Anil added on 23/03/2010:Begin

function validateSchedule() {
				
	if(document.getElementById('extension1').value=='NO'){
				
		if(document.getElementById('fromHour1').value == '') {
			alert('Please enter from hour value');
			document.getElementById('fromHour1').focus();
			return false;
		} else if(document.getElementById('fromMin1').value == '') {
			alert('Please enter from Min value');
			document.getElementById('fromMin1').focus();
			return false;
		}
		
		if(document.getElementById('toHour1').value == '') {
			alert('Please enter from hour value');
			document.getElementById('toHour1').focus();
			return false;
		} else if(document.getElementById('toMin1').value == '') {
			alert('Please enter from Min value');
			document.getElementById('toMin1').focus();
			return false;
		} else if(document.getElementById('fromHour1').value > document.getElementById('toHour1').value ) {
		         	alert('From time value must be greater than To time value');
					document.getElementById('fromHour1').focus();
					return false;
		 }
		else if(document.getElementById('toSec1').value == '') {
			document.getElementById('toSec1').value = 00;
		}
		else if(document.getElementById('fromSec1').value == '') {
			document.getElementById('fromSec1').value = 00;
		}
		
		document.getElementById('extensionTimeFrom1').value = document.getElementById('fromHour1').value+ ':' + document.getElementById('fromMin1').value+ ':'+ document.getElementById('fromSec1').value;
		document.getElementById('extensionTimeTo1').value = document.getElementById('toHour1').value+ ':' + document.getElementById('toMin1').value+ ':' + document.getElementById('toSec1').value;
		
		
										  
	}
	else if(document.getElementById('extension1').value=='YES'){
	
	if(document.getElementById('fromHour2').value == '') {
			alert('Please enter from hour value');
			document.getElementById('fromHour2').focus();
			return false;
		} else if(document.getElementById('fromMin2').value == '') {
			alert('Please enter from Min value');
			document.getElementById('fromMin2').focus();
			return false;
		}
		
		if(document.getElementById('toHour2').value == '') {
			alert('Please enter from hour value');
			document.getElementById('toHour2').focus();
			return false;
		} else if(document.getElementById('toMin2').value == '') {
			alert('Please enter from Min value');
			document.getElementById('toMin2').focus();
			return false;
		} else if(document.getElementById('fromHour2').value > document.getElementById('toHour2').value ) {
         	alert('From time value must be greater than To time value');
			document.getElementById('fromHour2').focus();
			return false;
		 }
		else if(document.getElementById('toSec2').value == '') {
			document.getElementById('toSec2').value = 00;
		}
		else if(document.getElementById('fromSec2').value == '') {
			document.getElementById('fromSec2').value = 00;
		}
		document.getElementById('extensionTimeFrom2').value = document.getElementById('fromHour2').value+ ':' + document.getElementById('fromMin2').value+ ':'+ document.getElementById('fromSec2').value;
		document.getElementById('extensionTimeTo2').value = document.getElementById('toHour2').value+ ':' + document.getElementById('toMin2').value+ ':' + document.getElementById('toSec2').value;
											  
	
	}
		
	var temp = confirm("Are you sure ?");
	if (temp == true) {
		var operationvariable = operation();
		if (operationvariable == false) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
	
	
}
//Anil added on 23/03/2010:End

//added by rakesh 17/05/2010
function manualAttendanceAutho()
{    

		
		 if(document.getElementById('attendanceAllowDate')!= undefined  && document.getElementById('attendanceAllowDate').value.length==0)
		 {
		  alert("Please enter date");
		  document.getElementById('attendanceAllowDate').focus();
		  return false;
		 }
		 else if(document.getElementById('attendanceAllowDate').value != "") 
		 {
		
			var intFlag = 0;
			var strErrMsg = "Invalid Attendance allow Date \n\n";
			var dtDate = document.getElementById('attendanceAllowDate').value; 
			var tmp = dtDate.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var userdate = calcJulian(xDate);
			var gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;		
			var tmp = tmp.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var currentdate = calcJulian(xDate);
				
			if (userdate > currentdate) {
				
			strErrMsg = strErrMsg + "Date should not be greater than current date \n";
	   		//intFlag++;
			alert(strErrMsg);
			document.getElementById('attendanceAllowDate').focus();
			return false;
			}	
		   
	       
	       
	   }
	   
	   return true;
	}  
	
function changeShift()
{   
		
		 if(document.getElementById('fromDate')!= undefined  && document.getElementById('fromDate').value.length==0)
		 {
		  alert("Please enter date");
		  document.getElementById('fromDate').focus();
		  return false;
		 }
		 else if(document.getElementById('fromDate').value != "") 
		 {
		
			var intFlag = 0;
			var strErrMsg = "Invalid Date \n\n";
			var dtDate = document.getElementById('fromDate').value; 
			var tmp = dtDate.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var userdate = calcJulian(xDate);
			var gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;		
			var tmp = tmp.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var currentdate = calcJulian(xDate);
				
			if (userdate < currentdate) {
				
			strErrMsg = strErrMsg + " Date should not be less than current date \n";
	   		//intFlag++;
			alert(strErrMsg);
			document.getElementById('fromDate').focus();
			return false;
			}	
		  
	   } 
	   return true;
	}  
function otShiftAllocation()
{   
		 if(document.getElementById('fromDate')!= undefined  && document.getElementById('fromDate').value.length==0)
		 {
		  alert("Please enter date");
		  document.getElementById('fromDate').focus();
		  return false;
		 }
		 else if(document.getElementById('fromDate').value != "") 
		 {
		   
			var intFlag = 0;
			var strErrMsg = "Invalid Date \n\n";
			var dtDate = document.getElementById('fromDate').value; 
			var tmp = dtDate.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var userdate = calcJulian(xDate);
			var gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;		
			var tmp = tmp.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var currentdate = calcJulian(xDate);
				
			if (userdate < currentdate) {
				
			strErrMsg = strErrMsg + " Date should not be less than current date \n";
	   		//intFlag++;
			alert(strErrMsg);
			document.getElementById('fromDate').focus();
			return false;
			}	
		  
	   } 
	   return true;
	} 
	  
function validateApplicationForLeaveForEmployeesForm()  
{ 
	  if(document.getElementById('fromDate').value != "") 
		 {
		
			var intFlag = 0;
			var strErrMsg = "Invalid from date \n\n";
			var dtDate = document.getElementById('fromDate').value; 
			var tmp = dtDate.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var userdate = calcJulian(xDate);
			var gregDate = new Date();
			year = gregDate.getFullYear();
			month = gregDate.getMonth() + 1;
			day = gregDate.getDate();
			tmp = day + "/" + month + "/" + year;		
			var tmp = tmp.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var currentdate = calcJulian(xDate);
				
			if (userdate < currentdate) {
				
			strErrMsg = strErrMsg + "From date should not be less then current date \n";
	   		//intFlag++;
			alert(strErrMsg);
			document.getElementById('fromDate').focus();
			return false;
			} 
		}
}
function shiftReportValidation()  
{ 
      
       
	  if(shiftReportForm.toDate.value != "") 
		 {
		
			var intFlag = 0;
			
			var dtDate = shiftReportForm.fromDate.value; 
			var tmp = dtDate.split("/");
			var xDate = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var userdate = calcJulian(xDate);
			var toDate = shiftReportForm.toDate.value;
			
			var tmp = toDate.split("/");
			var xDate1 = tmp[1] + "/" + tmp[0] + "/" + tmp[2];
			var currentdate = calcJulian(xDate1);
				
			if (userdate > currentdate) {
				
			//strErrMsg = strErrMsg + "From date should not be less then todate \n";
	   		//intFlag++;
			alert("From date should not be less then todate");
			shiftReportForm.toDate.focus();
			return false;
			} 
		}
	if(shiftReportForm.designationId.selectedIndex == 0) {
		alert('Please Select Designation');
		shiftReportForm.designationId.focus();
		return false;
	}	
}

//Added by Atul for Addtional Requirement

function doSubmitValidations(){
	var temp = confirm('Are you sure?');
	if (temp == true) {
		return true;
	}else {
		return false;
	}
}


function add(date, userDays) {
    var daysInMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var start = new Date(date);    
  if (start != '') {
    var y= start.getFullYear();
    //alert('start.getYear()====' + y);
        // check for leap year (see if year divided by four leaves a remainder). If it is a leap year, add one day to February
        var remainder = y % 4;
        if (remainder == 0) {
            daysInMonth[1]=29;
        }
        var m = start.getMonth();
        var x = start.getDate()+userDays;
// check for roll over into next month, and then check that for roll into next year.        
        if (x > daysInMonth[m]){
            x = x - daysInMonth[m];
            m++;
            if (m > 11){
                m=0;
                y++;
            }
        }
        // increment month to real month, not "Array" month
        m++;        
        if (x<10)
        x="0"+x
        if (m<10)
        m="0"+m
        var xDate = m+"/"+x+"/"+y;
        
        return xDate;
  }
 }
  
function compareDateAndDay() {
	//alert('=============hi********');
	var addreqDate=document.getElementById('startDateWOAddlReq').value;
	var aTemp = addreqDate.split("/");
	var newAddreqDate = aTemp[1] + "/" + aTemp[0] + "/" + aTemp[2];

	
	var no=document.getElementById('noOfDays').value;
	var startDate=document.getElementById('startDate').value
		
	var sTemp = startDate.split("/");
	var newStartDate = sTemp[1] + "/" + sTemp[0] + "/" + sTemp[2];
	
	
	var endDate=document.getElementById('endDate').value
	var eTemp = endDate.split("/");
	var newEndDate = eTemp[1] + "/" + eTemp[0] + "/" + eTemp[2];
	
	addreqDate1=calcJulian(newAddreqDate);
	startDate1=calcJulian(newStartDate);
	endDate1=calcJulian(newEndDate);
	//alert('endDate ====' + endDate1 + 'startDate====' + startDate1 + 'addreqDate===='+ addreqDate1);
	if ((addreqDate1 <= endDate1) && (addreqDate1 >=startDate1) ){
		var d=0;
		
		var userday = parseInt(no);
		//alert("days=====" + userday);
		var userday1 = userday - 1;
		//alert("days - 1=====" + userday1);
		//alert("Before Method Date======"+newAddreqDate);
		var xDate = add(newAddreqDate,userday1);
		//alert("Before Method add(): Date======"+xDate);
		var newXDate=calcJulian(xDate);
		//alert("Hello");
		//alert("newXDate======"+newXDate);
		
		if (newXDate > endDate1){
			alert("No. of days must not cross work order dates");
			return false; 
		}	
		else {
			return true;
		}
	}
	else{
		alert("Date should be within work order period only");
		
		return false;
	}

}
function doValidate(){
     //alert('=============in doValidate()********');
	if(wOAdditionalRequirementMasterForm.noOfDays.value == '' ) {
		alert("Please enter no. of days ");
		return false;
	
     }

	else if(wOAdditionalRequirementMasterForm.startDateWOAddlReq.value == '' ) {
		alert("Please enter additional requirement start date");
		return false;
	}
	else{
	//alert('=============in doValidate() Now calling compareDateAndDay()********');
	var tm = compareDateAndDay();
	//alert('tm ========='+ tm);
	if(tm==false){
	return false;
	}
	else{
	var tm = doSubmitValidations();
	if(tm==false)
	return false;
	}
	}
}

function checkDecimal(object){
 	if (isNaN(removeAllSpaces(object))) {
		alert("Please enter numeric value only");
		object.value = "";
	}
}

function check(obj){
var count=0;
var count1=0;
var count3=0;
//setvalue(obj);

	if (wOAdditionalRequirementMasterForm.chk.length==undefined){
		if (wOAdditionalRequirementMasterForm.chk.checked ==true){			
			count=count+1;
		}
	}
		
	else {
		for(var i=0; i<wOAdditionalRequirementMasterForm.chk.length; i++){
			//alert(studentsSectionAndClassForm.checkBox[i].checked);
			if ((wOAdditionalRequirementMasterForm.chk[i].checked ==true)){
				count=count+1;
			}
		}
	}
			
	if(count==0){
		alert("Please select atleast one designation");
		return false;
	}
	else if(wOAdditionalRequirementMasterForm.strength.length==undefined)
	{
		
	}
	else {
		for(var i=0; i<wOAdditionalRequirementMasterForm.strength.length; i++){
			//alert(studentsSectionAndClassForm.checkBox[i].checked);
			if ((wOAdditionalRequirementMasterForm.chk[i].checked ==true)){
				//alert("Please enter strength" + wOAdditionalRequirementMasterForm.strength[i].value);
				if ((wOAdditionalRequirementMasterForm.strength[i].value=='')){
					alert("Please enter strength");
					return false;
				}
				if((wOAdditionalRequirementMasterForm.post[i].value=='')){
					alert("Please enter post");
					return false;
				}
				else{
					return true;			
    			}	
    
			}
		}
	
	}	
}
//Atul Added for Additional Requirement: 29/11/10
function additionalRequirementCreateValidation()
{
	 if(document.getElementById('serviceProviderId') != undefined && document.getElementById('serviceProviderId').value=="0")
	 {
	   alert("Please select a Service Provider");
	   document.getElementById('serviceProviderId').focus();
	   return false;
	 }
	 else if(document.getElementById('spBranchId') != undefined && document.getElementById('spBranchId').value=="")
	 {
	   alert("Please select a Branch");
	   document.getElementById('spBranchId').focus();
	   return false;
	 }
	 else if(document.getElementById('woNo') != undefined && document.getElementById('woNo').value=="" || document.getElementById('woNo').value==0)
	 {
	   alert("Please select a Work Order");
	   document.getElementById('woNo').focus();
	   return false;
	 }
	 return true;
}
//Atul Ended: 29/11/10
//Atul Added: 27/12/10
function extendWorkOrder(){
		 if (compareTwoDates(document.getElementById("startDate").value, document.getElementById("endDate").value) == false) 
		 {
		   return false;
	     }
		 else if(document.getElementById('billFromDate')!= undefined && document.getElementById('billFromDate').value=="0")
		 {
		  alert("Please Select the Bill From ");
		  document.getElementById('billFromDate').focus();
		  return false;
		 }
		 else if(document.getElementById('billToDate')!= undefined && document.getElementById('billToDate').value=="0")
		 {
		  alert("Please enter the Bill To ");
		  document.getElementById('billToDate').focus();
		  return false;
		 }
		 else if(document.getElementById('extendFlag')!= undefined && document.getElementById('extendFlag').value=="true")
		 {
		 	
		 	
		 	var stDate=document.getElementById('startDate').value;
		 	//alert('startDate =='+stDate);
		 	var endDate=document.getElementById('endDate').value;
		 	//alert('endDate =='+endDate);
		 	var exDtTmp=document.getElementById('endDateTemp').value;
		 	//alert('endDate =='+exDtTmp);
		 	//return false;
		 	var sTmp = stDate.split("/");
		 	var sDate = sTmp[1] + "/" + sTmp[0] + "/" + sTmp[2];
		 	var startDate = calcJulian(sDate);
		 
		 	var eTmp = endDate.split("/");
		 	var eDate = eTmp[1] + "/" + eTmp[0] + "/" + eTmp[2];
		 	var extensionDate = calcJulian(eDate);
		 
		 	var exTmp = exDtTmp.split("/");
		 	var exDate = exTmp[1] + "/" + exTmp[0] + "/" + exTmp[2];
		 	var endDate = calcJulian(exDate);
		 	//alert('startDate =='+startDate + 'extedDate =='+extensionDate + 'endDate =='+endDate);
		  		if(extensionDate<=endDate){
		  			alert('Extension Date should be greater than Work Order End Date');
					document.getElementById('endDate').focus();
					return false;
				}
	}
	 else if(document.getElementById('operation')!=null && document.getElementById('operation').value=="Extend")
	   {
		   var tmp= confirm("Are you sure?");
		   if(tmp==false)
		   {
		    return false;
		   } 
	   }
	 return true;  
}
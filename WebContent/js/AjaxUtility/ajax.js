
var xmlHttp;
var dataToAttach;
/*
	Function for creating object for ajax request.
	Object created depanding upon browser.
*/
function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		if (window.XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		}
	}
}
/**
	This common request for handling ajax request.
	paramName : Name of input parameter.
	paramValue : Value for input parameter
	dataToAttached : id for control to attached response.
	flag : Its a controller for how to passed input parameter to
	ajax as in the form of object or value(eg : value used for pin code)
*/
function populateRequest(paramName, paramValue, dataToAttached, flag) {
  // alert("For paramName ==="+paramName+" paramValue==="+paramValue.value+" dataToAttached=="+dataToAttached);
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function populateRequestForPinCode(paramName, paramValue, dataToAttached, flag) {
	//alert("First Method called...");
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random();
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = handlePinCode;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function populateLocationForShift(paramName, fromDate, location, shift, dataToAttached) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&fromdate=" + fromDate + "&location=" + location + "&shift=" + shift;
	xmlHttp.onreadystatechange = handleLocationForShift;
	xmlHttp.open("GET", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

// Added by Vidya
function populateRequestForDeptBySubLocation(empId, paramName, paramValue, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = function(){
		handleStateChangeForDeptBySubLocation(empId);
	}
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForDeptBySubLocation(empId) {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];
			var previousStateElement = document.getElementById("deptIds_"+empId);
			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}

function populateRequestForSubDeptByDeptIdAndSubLocationId(empId, paramName, paramValue, paramName1, paramValue1, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1 + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = function(){
		handleStateChangeForSubDeptByDeptIdAndSubLocationId(empId);
	}
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForSubDeptByDeptIdAndSubLocationId(empId) {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];
			var previousStateElement = document.getElementById("subDeptIds_"+empId);
			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}

// Ended by Vidya

function handleLocationForShift() {
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
function populateRequestForPinCode(paramName, paramValue, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random();
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = handlePinCode;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function populateLocationForShift(paramName, fromDate, location, shift, dataToAttached) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&fromdate=" + fromDate + "&location=" + location + "&shift=" + shift;
	xmlHttp.onreadystatechange = handleLocationForShift;
	xmlHttp.open("GET", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

// Added by Vidya
function populateRequestForDeptBySubLocation(empId, paramName, paramValue, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = function(){
		handleStateChangeForDeptBySubLocation(empId);
	}
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForDeptBySubLocation(empId) {

	if (xmlHttp.readyState == 4) {

		if (xmlHttp.status == 200) {
			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];

			var previousStateElement = document.getElementById("deptIds_"+empId);

			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}

function populateRequestForSubDeptByDeptIdAndSubLocationId(empId, paramName, paramValue, paramName1, paramValue1, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1 + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = function(){
		handleStateChangeForSubDeptByDeptIdAndSubLocationId(empId);
	}
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForSubDeptByDeptIdAndSubLocationId(empId) {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];
			var previousStateElement = document.getElementById("subDeptIds_"+empId);
			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}

// Ended by Vidya


//Added By Rajat for OT Allocation

function populateRequestForDeptBySubLocationForOT(empId, paramName, paramValue, dataToAttached, flag) {

	dataToAttach = dataToAttached;
	createXMLHttpRequest();
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	/* else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}*/
	xmlHttp.onreadystatechange = function(){
		handleStateChangeForDeptBySubLocationForOT(empId , flag);//Change...
	}
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForDeptBySubLocationForOT(empId, flag) {

	if (xmlHttp.readyState == 4) {

		if (xmlHttp.status == 200) {


			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];


			//var previousStateElement = document.getElementById("deptIds_"+empId);

			if(flag=='1'){
			var previousStateElement = document.getElementById("deptIds_"+flag+""+empId);
			}
			else if (flag =='2'){
			var previousStateElement = document.getElementById("deptIds_"+ flag+""+empId);
			}
			else if (flag == '3'){
			var previousStateElement = document.getElementById("deptIds_"+flag+""+empId);
			}
			else if (flag == '4'){
			var previousStateElement = document.getElementById("deptIds_"+flag+""+empId);
			}


			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}

function populateRequestForSubDeptByDeptIdAndSubLocationIdForOT(empId, paramName, paramValue, paramName1, paramValue1, dataToAttached, flag) {


	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	//if (flag == 1) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	//}
	//else {
	//	queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1 + "&sid=" + Math.random();
	//}
	xmlHttp.onreadystatechange = function(){
		handleStateChangeForSubDeptByDeptIdAndSubLocationIdForOT(empId, flag);
	}
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForSubDeptByDeptIdAndSubLocationIdForOT(empId, flag) {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {



			document.getElementById("ajaxResponse").innerHTML = xmlHttp.responseText;
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];
			if(flag == '1'){


			var previousStateElement = document.getElementById("subDeptIds_"+flag+""+empId);
			}
			else if(flag == '2'){

			var previousStateElement = document.getElementById("subDeptIds_"+flag+""+empId);
			}
			else if(flag == '3'){

			var previousStateElement = document.getElementById("subDeptIds_"+flag+""+empId);
			}
			else if(flag == '4'){

			var previousStateElement = document.getElementById("subDeptIds_"+flag+""+empId);
			}
			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}

//Ended By Rajat

function handleLocationForShift() {
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
//add by rakesh:17/03/2010
function itemChangeRequest(paramName, paramValue, dataToAttached, actionUrl) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	queryString = urlContext + actionUrl + "&" + paramName + "=" + paramValue.value;
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
//end by Rakesh:17/03/2010
//Atul Added 17/11/10
function populateRequestforInAndOutReport(paramName, paramValue, paramName1, paramValue1, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1 + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	}
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
//Atul Ended 17/11/10
/*
	This method handle reponse after ajax request fired.
	where dataToAttach is global variable which indicate for
	where to attached response.
*/
function handleStateChange() {
 		//alert("Inside handleStateChange() method.."+"=="+document.getElementById(dataToAttach));
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
function handlePinCode() {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById(dataToAttach).value = xmlHttp.responseText;
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
function populatePinCodeForSE() {
	populateRequestForPinCode("postOffice", document.getElementById("postOffice"), "pinCode", "");
}
function populateRequestForHotel(groupName, hiddenOperation) {
	if (document.getElementById("partOfHotelGroup").selectedIndex == 0) {

		document.getElementById("groupNameId").value = "";
		document.getElementById("partOfHotelGroup").focus();
		document.getElementById("groupNameCombo").innerHTML = "";
		return false;
	}
	if (document.getElementById("groupNameId").value == "") {
		document.getElementById("groupNameCombo").innerHTML = "";
	} else {

		if (document.getElementById("partOfHotelGroup").selectedIndex == 1) {
			createXMLHttpRequest();


			queryString = urlContext + "/displayHotelAdd.do?groupName=" + groupName + "&hiddenOperation=" + hiddenOperation;
			xmlHttp.onreadystatechange = handleHotelGroup;
			xmlHttp.open("GET", queryString, true);
			xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			xmlHttp.send(null);
		}
		if (document.getElementById("partOfHotelGroup").selectedIndex == 2) {
			alert("Please select of part of Hotel Group as Yes");
			document.getElementById("groupNameId").value = "";
			document.getElementById("partOfHotelGroup").focus();
			document.getElementById("groupNameId").readonly = "true";
			document.getElementById("groupNameCombo").innerHTML = "";
			return false;
		}
	}
}
function handleHotelGroup() {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {


			document.getElementById("groupNameCombo").innerHTML = xmlHttp.responseText;
		}
	}
}
function populateFloorForHotel(buildingId, dataToAttached) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	queryString = urlContext + "/displayHotelGuestAjax.do?operation=floorList&buildingId=" + buildingId;
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("GET", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
/**
 * Added by Hemant Sahu on 17-Dec-2010 : Begin
 *
 * This ajax function is used for provisional verification of a person.
 * Information of checklist will be stored in database through this ajax function.
 */
function getEmployeePhoto(formNo, empName, photoLocation) {
	var temp = formNo;
	new ToolTip("tooltip-" + temp, "<img style=\"margin: 5px 0px 0px -20px;\" width=\"145\" height=\"145\" align=\"right\" title=\"ToolTip!\" alt=\"Loading....\" src=\"" + photoLocation + "\" />", {mode:"cursor", display:"inline", width:180, style:"default", sticky:0});
}
/**
 * Added by Hemant Sahu on 17-Dec-2010 : End
 */

//Atul Added: 07/02/11
function getOTUpdateRecord(empId, locationId, designationId, shiftDate){
	createXMLHttpRequest();
	queryString = urlContext + "/submitOTUpdate.do?operation=GetRecordsForToolTipDisplay&empId=" +empId+ "&locationId="+locationId+ "&designationId="+designationId+"&shiftDate="+shiftDate;
	xmlHttp.onreadystatechange = function () {
		getNewToolTip(empId);
	}
	xmlHttp.open("GET", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function getNewToolTip(empId) {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {

			new ToolTip('tooltip-'+empId, xmlHttp.responseText, { mode: 'cursor', display: 'inline', width:500, style: 'default', sticky: 0 });
		}
	}
}
//Atul Ended: 07/02/11

// Added by Nilesh Patidar on 27-06-2011
function populateRequestForDesignation(paramName, paramValue,paramValue1, dataToAttached, flag) {
   //alert("For paramName ==="+paramName+" paramValue==="+paramValue.value+" dataToAttached=="+dataToAttached+" paramValue1 "+paramValue1.value);
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramVal1=" + paramValue1.value+"&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

 //Atul Added: 14/01/11
function getEmployeeWeeklyOff(empId, year, month, weekId) {
	createXMLHttpRequest();
	queryString = urlContext + "/displayShiftWeeklyOffAllocation.do?operation=GetWeeklyOff&empID=" + empId + "&year=" + year + "&month=" + month + "&onBasis=" + weekId;
	xmlHttp.onreadystatechange = function () {
		getToolTip(empId);
	}
	xmlHttp.open("GET", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function getToolTip(empId) {
 	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			new ToolTip('tooltip-'+empId, xmlHttp.responseText, { mode: 'cursor', display: 'inline', width: 200, style: 'default', sticky: 0 });
		}
	}
}
 //Atul Ended: 14/01/11
// Kamlesh Added on 01-02-2011
function populateRequestForClassSection(paramName, paramValue, dataToAttached, flag,schoolId)
{
	
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached+ "&schoolId=" +schoolId.value;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&sid=" + Math.random();
	}
	xmlHttp.onreadystatechange = handleStateChangeForClassSection;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeForClassSection()
{
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
//Kamlesh Ended on 01-02-2011


// Added by Vidya
function populateRequestforShift(paramName, paramValue, paramName1, paramValue1, paramName2, paramValue2, dataToAttached, flag) {
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1.value + "&sid=" + Math.random() + "&paramName2=" + paramName2 + "&paramVal2=" + paramValue2.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1 + "&sid=" + Math.random() + "&paramName2=" + paramName2 + "&paramVal2=" + paramValue2 + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	}
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
// Ended by Vidya

//Atul Added: 04/03/11
function openPopUp(locationId, designationId, shiftId, shiftDate){
	//alert('locationId=='+locationId.value+' designationId'+designationId.value+' shiftDate=='+ shiftDate.value+ 'shiftId=='+shiftId.value);
	createXMLHttpRequest();

	queryString = urlContext + "/submitExtraDutyAllocationForAbsent.do?operation=OpenExtraDutyPopUp&locationId="+locationId+"&designationId="+designationId+"&shiftId="+shiftId+"&shiftDate="+shiftDate;	

	xmlHttp.onreadystatechange = handleState;
	xmlHttp.open("POST", queryString, true); 		
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function openPopUpForUpdate(locationId, designationId, shiftId, shiftDate){
	createXMLHttpRequest();
	queryString = urlContext + "/submitExtraDutyAllocationForAbsentUpdate.do?operation=OpenExtraDutyPopUp&locationId="+locationId+"&designationId="+designationId+"&shiftId="+shiftId+"&shiftDate="+shiftDate;
	xmlHttp.onreadystatechange = handleState;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleState(){
	
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			
			document.getElementById("popUp").innerHTML = xmlHttp.responseText;
			
		}
	}
}

//Atul Ended: 04/03/11


//Added by Ram
function populateDesignation(paramName, paramValue, dataToAttached) {
//alert("For paramName ==="+paramName+" paramValue==="+paramValue.value+" dataToAttached=="+dataToAttached);
	
	//alert(dataToAttached);
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	
		queryString = urlContext + "/displayGeneralInformation.do?operation=getDesignationForDepartment&departmentId=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	
	xmlHttp.onreadystatechange = handleStateChangeDesignation;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeDesignation() {
		//alert("Inside handleStateChange() method..");
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


function populateDesignationForAppointmentSheet(paramName, paramValue, dataToAttached) {
//alert("For paramName ==="+paramName+" paramValue==="+paramValue.value+" dataToAttached=="+dataToAttached);
	
	//alert(dataToAttached);
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	
		queryString = urlContext + "/appointmentAction.do?operation=getDesigList&deptId=" + paramValue.value + "&sid=" + Math.random() + "&dataToAttached=" + dataToAttached;
	//alert(queryString);
	xmlHttp.onreadystatechange = handleStateChangeDesignation;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function handleStateChangeDesignation() {
		//alert("Inside handleStateChange() method..");
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("ajaxResponse").innerHTML =  eval(xmlHttp.responseText);
			//alert(document.getElementById("ajaxResponse").innerHTML);
			document.getElementById("ajaxResponse").innerHTML =  eval(xmlHttp.responseText);
			var newStateElement = document.getElementById("ajaxResponse").childNodes[0];
			var previousStateElement = document.getElementById(dataToAttach);
			removeAllOptions(previousStateElement);
			addOption_all_list(previousStateElement, newStateElement);
		}
	}
}
//Ended by Ram




/**
 * This ajax method returns daily Attendance Report
 *
 * @author Hemant Sahu
 *
 * @param {} locationId
 * @param {} branchId
 * @param {} shiftId
 * @param {} designationId
 * @param {} attStatus
 * @param {} date
 */


function dailyAttendanceReportAjax(locationId,branchId,shiftId, designationId, attStatus, date, reportType){
		
		createXMLHttpRequest();
	
	if(attStatus.value=='A' && reportType.value == 'Remainder'){
		queryString = urlContext + "/submitExtraDutyAllocationForAbsentNew.do?operation=Go&shiftId="+shiftId.value+"&designationId="+designationId.value+"&attStatus="+attStatus.value+"&shiftDate="+date.value+"&locationId="+locationId.value+"&branchId="+branchId.value+"&reportType="+reportType.value;
	}
	else{
		queryString = urlContext + "/attendanceReport.do?operation=Go&shiftId="+shiftId.value+"&designationId="+designationId.value+"&attStatus="+attStatus.value+"&date="+date.value+"&locationId="+locationId.value+"&branchId="+branchId.value+"&reportType="+reportType.value;
	}
	//alert('locationId=='+locationId+' locationId'+locationId+' shiftDate=='+ shiftDate+ 'shiftId=='+shiftId+' rowCountNo=='+rowCountNo);
	
	xmlHttp.onreadystatechange = handleChangedState;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleChangedState(){
	
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("dailyAttendanceReportAjax").innerHTML = xmlHttp.responseText;
		}
	}
}

/**
 * End
 *
 */
 
/**
Added by Kamlesh Dhakad to view in and out time info tooltip on 15-07-2011
*/
	function getInAndOutTime(empId,shiftId,shiftDate,peId,designationId,id)
	{
		createXMLHttpRequest();
		queryString = urlContext + "/displayInAndOutTimeInAttSheetAction.do?employeeId="+empId+"&shiftId="+shiftId+"&shiftDate="+shiftDate+"&principalEmployerLocationId="+peId+"&designationId="+designationId;
		xmlHttp.onreadystatechange = function () {
		getInOutToolTip(id);
		}
		xmlHttp.open("GET", queryString, true);
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		xmlHttp.send(null);
	}
	function getInOutToolTip(empId)
	{
		if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			new ToolTip('tooltip-'+empId, xmlHttp.responseText, { mode: 'cursor', display: 'inline', width: 200, style: 'default', sticky: 4 });
		}
	  }
	}
	
//Ended by Kamlesh Dhakad

//Atul Added: 12/04/11: Locations According to WO and Extension(if any)
function populateLocationsAccordingWorkOrderAndExtension(paramName, paramValue, paramName1, paramValue1, dataToAttached, flag){
	//alert('method called'+ paramName + "=="+ paramValue +" / "+  paramName1 + "=="+ paramValue1 +" / "+dataToAttach);
	dataToAttach = dataToAttached;
	createXMLHttpRequest();
	if (flag == null) {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue.value + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1.value + "&dataToAttached=" + dataToAttached;
	} else {
		queryString = urlContext + "/displayPopulate.do?paramName=" + paramName + "&paramVal=" + paramValue + "&paramName1=" + paramName1 + "&paramVal1=" + paramValue1 + "&dataToAttached=" + dataToAttached;
	}
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
// Added by Ram
function changeBranch(paramName,paramvalue) {
	createXMLHttpRequest();
	queryString = urlContext + "/submitService.do?"+ paramName + "="+paramvalue;
	
	xmlHttp.onreadystatechange = branchstateChange;
	
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}

function  branchstateChange(){

if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
		
		}
}
}

// Ended by Ram
//Atul Added
function extraDutyAllocationForAbsentAjax(locationId, shiftId, designationId, attStatus, shiftDate){
	createXMLHttpRequest();
	queryString = urlContext + "/submitExtraDutyAllocationForAbsentNew.do?operation=Go&shiftId="+shiftId.value+"&designationId="+designationId.value+"&attStatus="+attStatus.value+"&shiftDate="+shiftDate.value+"&locationId="+locationId.value;
	xmlHttp.onreadystatechange = handleChangedStateForED;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleChangedStateForED(){
	
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("extraDutyAllocationForAbsentAjaxResponse").innerHTML = xmlHttp.responseText;
		}
	}
}

function openPopUpED(locationId, designationId, shiftId, shiftDate){
	//alert('locationId=='+locationId+' locationId'+locationId+' shiftDate=='+ shiftDate+ 'shiftId=='+shiftId);
	createXMLHttpRequest();
	queryString = urlContext + "/submitExtraDutyAllocationForAbsent.do?operation=OpenExtraDutyPopUp&locationId="+locationId.value+"&designationId="+designationId.value+"&shiftId="+shiftId.value+"&shiftDate="+shiftDate.value;
	xmlHttp.onreadystatechange = handleStateED;
	xmlHttp.open("POST", queryString, true); 		
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleStateED(){
	
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("popUpED").innerHTML = xmlHttp.responseText;
		}
	}
}
function openPopUpUpdateED(locationId, designationId, shiftId, shiftDate){
	createXMLHttpRequest();
	queryString = urlContext + "/submitExtraDutyAllocationForAbsentUpdate.do?operation=OpenExtraDutyPopUp&locationId="+locationId.value+"&designationId="+designationId.value+"&shiftId="+shiftId.value+"&shiftDate="+shiftDate.value;
	xmlHttp.onreadystatechange = handleStateUpdateED;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleStateUpdateED(){
	
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("popUpUpdateED").innerHTML = xmlHttp.responseText;
		}
	}
}

//Atul Ended


function openPopUpReliever(locationId, designationId, shiftId, shiftDate){
	createXMLHttpRequest();
	queryString = urlContext + "/displayRelieverShiftAllocationAction.do?operation=OpenRelieverPopUp&locationId="+locationId.value+"&designationId="+designationId.value+"&shiftId="+shiftId.value+"&shiftDate="+shiftDate.value;
	xmlHttp.onreadystatechange = handleStateReliever;
	xmlHttp.open("POST", queryString, true); 		
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleStateReliever(){
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("popUpReliever").innerHTML = xmlHttp.responseText;
		}
	}
}

function openPopUpUpdateReliever(locationId, designationId, shiftId, shiftDate){
	createXMLHttpRequest();
	queryString = urlContext + "/displayRelieverShiftAllocationUpdateAction.do?operation=OpenUpdateRelieverPopUp&locationId="+locationId.value+"&designationId="+designationId.value+"&shiftId="+shiftId.value+"&shiftDate="+shiftDate.value;
	xmlHttp.onreadystatechange = handleStateUpdateReliever;
	xmlHttp.open("POST", queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlHttp.send(null);
}
function handleStateUpdateReliever(){
	
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			document.getElementById("popUpUpdateReliever").innerHTML = xmlHttp.responseText;
		}
	}
}


//Atul Ended=======

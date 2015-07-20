stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,4,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[0,"Home Page","","",-1,-1,0,"displayDeploymentList.do?operation=Home","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
stm_aix("p0i1","p0i0",[0,"Occupation","","",-1,-1,0,"","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
stm_bp("p1",[1,4,0,0,0,0,0,0,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0,"Society Search","","",-1,-1,0,"displaySocietyRegistration.do?operation=PoliceSearch","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
stm_aix("p1i0","p0i0",[0,"RWA Search ","","",-1,-1,0,"displayRWARegistration.do?operation=PoliceSearch","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
stm_aix("p1i0","p0i0",[0,"Commercial Complex Search ","","",-1,-1,0,"displayCommercialComplexSearchList.do?operation=PoliceSearch","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
stm_ep();
//stm_aix("p0i2","p0i1",[0,"Deployment","","",-1,-1,0,"","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
//stm_bp("p1",[1,4,0,0,0,0,0,0,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
//stm_aix("p1i0","p0i0",[0,"Deployment Search","","",-1,-1,0,"displayDeploymentList.do","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
//stm_aix("p1i0","p0i0",[0,"Search By Pin ","","",-1,-1,0,"displayPoliceSearchByPin.do","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
//stm_aix("p1i0","p0i0",[0,"Individual Deploy","","",-1,-1,0,"displayIndiviualDeployment.do","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
//stm_ep();
stm_aix("p0i2","p0i1",[0,"LogOut","","",-1,-1,0,"displayComplexVerification.do","_self","","","","",0,0,0,"","",0,0,0,1,0,"#FFFFFF",0,"#b28800",0,"","",3,3,1,0,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],120,0);
stm_ep();
stm_em();


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

// Kamlesh Dhakad added on 24-03-2011 to get blank shop of commercial complex.
function populateRequestForUnOccupiedShop(paramName, paramValue, dataToAttached, flag) {
	
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
// Ended by Kamlesh













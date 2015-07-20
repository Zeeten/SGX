var xmlhttpBill;
var LoadingVariableBill='<font face="Verdana" size="1" color="#800000">'+'Loading.....'+'</font>';


var LoadingVariableBillFail='<font face="Verdana" size="1" color="#800000">'+'Loading Fail'+'</font>';

function loadXMLBill()
{

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttpBill=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttpBill=new ActiveXObject("Microsoft.XMLHTTP");
}
}



function stopRKey(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
}

document.onkeypress = stopRKey; 


function getBillApprovalDepartment(obj)
{


document.getElementById('departmentName').value='';

//document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML=LoadingVariableBill;
branchDepartmentId=obj.value;

loadXMLBill();

if(branchDepartmentId==-1)
{
document.getElementById('BillGetDepartmentListLoadingDivIdRow').style.display='none';

document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML='';
document.getElementById('populateBillApprovalDepartmentListDivId').innerHTML='';
	
}


if(branchDepartmentId!=-1)
{
var idCombo = document.getElementById('branchDepartmentId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text;
document.getElementById('departmentName').value=idComboText;
document.getElementById('BillGetDepartmentListLoadingDivIdRow').style.display='';
document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML=LoadingVariableBill;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalDepartmentList"+"&branchDepartmentId="+branchDepartmentId+"&departmentName="+idComboText;

xmlhttpBill.onreadystatechange = handleGetBillApprovalDepartment;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}
}
function handleGetBillApprovalDepartment()
{

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
     //	alert(xmlhttpBill.getResponseHeader("masterId"));
	document.getElementById('masterId').value=xmlhttpBill.getResponseHeader("masterId");
	//document.getElementById('BillGetDepartmentListLoadingDivIdRow').innerHTML='';
	document.getElementById('BillGetDepartmentListLoadingDivIdRow').style.display='none';
    document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML='';
	document.getElementById('populateBillApprovalDepartmentListDivId').innerHTML=xmlhttpBill.responseText;
	
	}
}

}








function getBillApprovalDepartmentProcess(obj)
{



document.getElementById('BillGetDepartmentApprovalWorkOrderRow').style.display='none';
document.getElementById('BillGetDepartmentApprovalLocationRow').style.display='none';
document.getElementById('BillApprovalMonthRow').style.display='none';
document.getElementById('BillApprovalYearRow').style.display='none';
document.getElementById('BillApprovalDateMonthFromRow').style.display='none';
document.getElementById('BillApprovalDateMonthToRow').style.display='none';
document.getElementById('BillApprovalShiftRow').style.display='none';
document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';



//document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML=LoadingVariableBill;
branchDepartmentId=obj.value;
loadXMLBill();
if(branchDepartmentId==-1)
{
//document.getElementById('BillGetDepartmentApprovalListLoadingDivId').style.display='none';

//document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML='';
//document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
	
}




if(branchDepartmentId!=-1)
{

//var idCombo = document.getElementById('branchDepartmentId');
   // var idComboText = idCombo.options[idCombo.selectedIndex].text;
//document.getElementById('departmentName').value=idComboText;
document.getElementById('BillGetDepartmentApprovalLoadingDivIdRow').style.display='';
document.getElementById('BillGetDepartmentApprovalListLoadingDivId').innerHTML=LoadingVariableBill;


queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=workOrderBillApproval"+"&branchDepartmentId="+branchDepartmentId;

xmlhttpBill.onreadystatechange = handleGetBillApprovalDepartmentProcess;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}
}
function handleGetBillApprovalDepartmentProcess()
{

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {

///alert(xmlhttpBill.responseText);

	document.getElementById('BillGetDepartmentApprovalLoadingDivIdRow').style.display='none';

document.getElementById('BillGetDepartmentApprovalWorkOrderRow').style.display='';
	
	document.getElementById('BillGetDepartmentApprovalWorkOrder2').innerHTML=xmlhttpBill.responseText;
	
	}
}

}

















function getBillApprovalDepartmentProcessLocation(obj)
{
document.getElementById('BillGetDepartmentApprovalLocationRow').style.display='none';
document.getElementById('BillApprovalMonthRow').style.display='none';
document.getElementById('BillApprovalYearRow').style.display='none';
document.getElementById('BillApprovalDateMonthFromRow').style.display='none';
document.getElementById('BillApprovalDateMonthToRow').style.display='none';
document.getElementById('BillApprovalShiftRow').style.display='none';
document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';

//document.getElementById('BillGetDepartmentListLoadingDivId').innerHTML=LoadingVariableBill;
workOrderId=obj.value;
loadXMLBill();
if(workOrderId==-1)
{
//document.getElementById('BillGetDepartmentApprovalListLoadingDivId').style.display='none';

}




if(workOrderId!=-1)
{

document.getElementById('BillGetDepartmentApprovalLocationRow').style.display='';


document.getElementById('BillGetDepartmentApprovalLocation2').innerHTML=LoadingVariableBill;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalDepartmentListApprovalLocation"+"&workOrderId="+workOrderId;

xmlhttpBill.onreadystatechange = handleGetBillApprovalDepartmentProcessLocation;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}
}
function handleGetBillApprovalDepartmentProcessLocation()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
//alert(xmlhttpBill.responseText);

	
	document.getElementById('BillGetDepartmentApprovalLocation2').innerHTML=xmlhttpBill.responseText;
	
	}
}

}



function getBillApprovalDepartmentProcessDetails(obj)
{
document.getElementById('BillApprovalMonthRow').style.display='none';
document.getElementById('BillApprovalYearRow').style.display='none';
document.getElementById('BillApprovalDateMonthFromRow').style.display='none';
document.getElementById('BillApprovalDateMonthToRow').style.display='none';
document.getElementById('BillApprovalShiftRow').style.display='none';
document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';


locationId=obj.value;
loadXMLBill();
if(locationId==-1)
{
//document.getElementById('BillGetDepartmentApprovalListLoadingDivId').style.display='none';

}




if(locationId!=-1)
{

//document.getElementById('populateBillApprovalProcessDepartmentListDivId').style.display='';
document.getElementById('BillApprovalMonthRow').style.display='';
document.getElementById('BillApprovalYearRow').style.display='';
///document.getElementById('BillApprovalSubmitRow').style.display='';

workOrderId=document.getElementById('workOrderId').value;
branchDepartmentId=document.getElementById('branchDepartmentId').value;
///alert(branchDepartmentId);

document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML=LoadingVariableBill;
originalMonth=document.getElementById('originalMonth').value;
originalYear=document.getElementById('originalYear').value;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalDepartmentListDetails"+"&workOrderId="+workOrderId+"&locationId="+locationId+"&year="+originalYear+"&month="+originalMonth+"&mode=approval"+"&branchDepartmentId="+branchDepartmentId;
xmlhttpBill.onreadystatechange = handleBillApprovalDepartmentProcessDetails;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

	
	

}
}
function handleBillApprovalDepartmentProcessDetails()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	

	document.getElementById('spBranchHeadName').value=xmlhttpBill.getResponseHeader("SPBranchHead");
	document.getElementById('serviceTaxNo').value=xmlhttpBill.getResponseHeader("serviceTaxNo");
	document.getElementById('serviceProviderName').value=xmlhttpBill.getResponseHeader("serviceProviderName");
	document.getElementById('spBranchId').value=xmlhttpBill.getResponseHeader("spBranchId");
	document.getElementById('spBranch').value=xmlhttpBill.getResponseHeader("SPBranchName");
	
	document.getElementById('peBranch').value=xmlhttpBill.getResponseHeader("peBranch");
	
	
	
	document.getElementById('address').value=xmlhttpBill.getResponseHeader("address");
	
	document.getElementById('cityName').value=xmlhttpBill.getResponseHeader("cityName");
	document.getElementById('districtName').value=xmlhttpBill.getResponseHeader("districtName");
	document.getElementById('stateName').value=xmlhttpBill.getResponseHeader("stateName");
	document.getElementById('pin').value=xmlhttpBill.getResponseHeader("pin");
	
	
	//alert('hhhhh');
	
	
	
	
   //alert(xmlhttpBill.responseText);
	
	
	
	
	document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML=xmlhttpBill.responseText;
	
	
	
	
	
	//document.getElementById('BillApprovalStartStatusDiv').style.display='';
	
	
	
	//document.getElementById('BillApprovalDateMonthFromRow').style.display='';
	//document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=LoadingVariableBill;
	 //document.getElementById('BillApprovalDateMonthToRow').style.display='';
	//document.getElementById('BillApprovalDateMonthToDiv').innerHTML=LoadingVariableBill;
	
	
	
//	 getDatesForMonthFrom();
getShiftsFromWOForBillApproval();


	}
	
	
	
	
	
	
}
}



function getDatesForMonthFrom()
{


document.getElementById('BillApprovalShiftRow').style.display='none';

document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';




month=document.getElementById('month').value;
year=document.getElementById('year').value;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalDatesForMonthFrom"+"&month="+month+"&year="+year;
xmlhttpBill.onreadystatechange = handleGetDatesForMonthFrom;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
//alert('sssssssssssssswewewxxx='+document.getElementById('month').value);

	//document.getElementById('BillApprovalShiftRow').style.display='';
	//document.getElementById('BillApprovalShiftDiv').innerHTML=LoadingVariableBill;
}




function handleGetDatesForMonthFrom()
{
//alert('handleGetDatesForMonth='+xmlhttpBill.readyState);

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {


//alert(xmlhttpBill.responseText);
	document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=xmlhttpBill.responseText;
///document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=""+xmlhttpBill.getResponseHeader("FromDate");
	
	
	
	//document.getElementById('BillApprovalShiftRow').style.display='';
	//document.getElementById('BillApprovalShiftDiv').innerHTML=LoadingVariableBill;
//getShiftsForBillApproval();

getDatesForMonthTo();
}
}
}










function getDatesForMonthTo()
{
document.getElementById('BillApprovalShiftRow').style.display='none';
document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';



month=document.getElementById('month').value;
year=document.getElementById('year').value;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalDatesForMonthTo"+"&month="+month+"&year="+year;
xmlhttpBill.onreadystatechange = handleGetDatesForMonthTo;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
//alert('sssssssssssssswewewxxx='+document.getElementById('month').value);

	//document.getElementById('BillApprovalShiftRow').style.display='';
	//document.getElementById('BillApprovalShiftDiv').innerHTML=LoadingVariableBill;
}




function handleGetDatesForMonthTo()
{
//alert('handleGetDatesForMonth='+xmlhttpBill.readyState);

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {


//alert(xmlhttpBill.responseText);
	document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.responseText;
///document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=""+xmlhttpBill.getResponseHeader("FromDate");
	
	
	
	
	
//getShiftsForBillApproval();
}
}
}


function getShiftsForBillApproval()
{

document.getElementById('BillApprovalShiftRow').style.display='';
	document.getElementById('BillApprovalShiftDiv').innerHTML=LoadingVariableBill;
document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';



locationId=document.getElementById('locationId').value;
workOrderId=document.getElementById('workOrderId').value;
billFromDate=document.getElementById('billFromDate').value;
billToDate=document.getElementById('billToDate').value;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalShift"
+"&locationId="+locationId+"&workOrderId="+workOrderId+"&billFromDate="+billFromDate+"&billToDate="+billToDate;
xmlhttpBill.onreadystatechange = handleGetShiftsForBillApproval;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}




function handleGetShiftsForBillApproval()
{
//alert('handleGetDatesForMonth='+xmlhttpBill.readyState);

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {


//alert(xmlhttpBill.responseText);
	document.getElementById('BillApprovalShiftDiv').innerHTML=xmlhttpBill.responseText;
document.getElementById('BillApprovalShiftRow').style.display='';
document.getElementById('BillApprovalSubmitRow').style.display='';



}
}
}
















function startOrGetApprovalProcess()
{


locationId=document.getElementById('locationId').value;
workOrderId=document.getElementById('workOrderId').value;

billFromDate=document.getElementById('billFromDate').value;
billToDate=document.getElementById('billToDate').value;
shiftId=document.getElementById('shiftId').value;
///serviceTaxNo=document.getElementById('serviceTaxNo').value;

//alert(billFromDate);
branchDepartmentId=document.getElementById('branchDepartmentId').value;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=startOrGetApprovalProcess"
+"&locationId="+locationId+"&workOrderId="+workOrderId
+"&branchDepartmentId="+branchDepartmentId
+"&shiftId="+shiftId
+"&billFromDate="+billFromDate
+"&billToDate="+billToDate;





xmlhttpBill.onreadystatechange = handleStartOrGetApprovalProcess;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}





function handleStartOrGetApprovalProcess()
{
//alert('handleGetDatesForMonth='+xmlhttpBill.readyState);

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {

document.getElementById('populateStartOrGetApprovalProcess').innerHTML=xmlhttpBill.responseText;

if(xmlhttpBill.getResponseHeader("error"))
{
//alert("Ifssssssssssssss  called");

//document.getElementById('BillApprovalStartStatusDiv').style.display='none';

}

else
{

try
{
//document.getElementById('BillApprovalStartStatusDiv').style.display='';

//alert("Else called");
if(document.getElementById('priority').value==1)
	{
	//document.getElementById('remarksBillApprovalId').value='';
	
	
	document.getElementById('textAreaBillApprovalRow3').style.display='';
	document.getElementById('buttonBillApprovalRow').style.display='';
	document.getElementById('buttonBillApprovalIdDiv1').style.display='';
	document.getElementById('buttonBillApprovalId1').value='Forward To '+document.getElementById('nextDepartmentName').value +' Department';
	}
	if(document.getElementById('priority').value==2)
	{
	
	}
}
catch(e)
{
//alert(e);


}
}

//uncomment
getOnLineBillDetails();

}
}
}



function getOnLineBillDetails()
{

locationId=document.getElementById('locationId').value;
workOrderId=document.getElementById('workOrderId').value;

billFromDate=document.getElementById('billFromDate').value;
//alert(billFromDate);

billToDate=document.getElementById('billToDate').value;
shiftId=document.getElementById('shiftId').value;
month=document.getElementById('month').value;
year=document.getElementById('year').value;
serviceTaxNo=document.getElementById('serviceTaxNo').value;
spBranch=document.getElementById('spBranch').value;
spBranchId=document.getElementById('spBranchId').value;

address=document.getElementById('address').value;
cityName=document.getElementById('cityName').value;
districtName=document.getElementById('districtName').value;
stateName=document.getElementById('stateName').value;
pin=document.getElementById('pin').value;
peBranch=document.getElementById('peBranch').value;
spBranch=document.getElementById('spBranch').value;
peBranchHeadName=document.getElementById('peBranchHeadName').value;
spBranchHeadName=document.getElementById('spBranchHeadName').value;

//peBranch=document.getElementById('peBranch').value;
//spBranch=document.getElementById('spBranch').value;
//peBranchHeadName=document.getElementById('peBranchHeadName').vaserviceTaxNo


branchDepartmentId=document.getElementById('branchDepartmentId').value;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getOnLineBillDetailsForBillApproval"
+"&locationId="+locationId+"&workOrderId="+workOrderId
+"&branchDepartmentId="+branchDepartmentId
+"&shiftId="+shiftId
+"&month="+month
+"&year="+year
+"&serviceTaxNo="+serviceTaxNo
+"&spBranch="+spBranch
+"&spBranchHeadName="+spBranchHeadName
+"&peBranch="+peBranch
+"&address="+address
+"&cityName="+cityName
+"&districtName="+districtName
+"&stateName="+stateName
+"&pin="+pin
+"&spBranchId="+spBranchId



+"&billFromDate="+billFromDate
+"&billToDate="+billToDate

+"&firstDate="+billFromDate
+"&lastDate="+billToDate;




xmlhttpBill.onreadystatechange = handleGetOnLineBillDetails;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);
}



function handleGetOnLineBillDetails()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
//alert(xmlhttpBill.responseText);
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML=xmlhttpBill.responseText;
///////////////document.getElementById('BillApprovalStartStatusDiv').style.display='';
	
	
	

}
}
}




function changeMonthBillApproval()

{

document.getElementById('BillApprovalShiftRow').style.display='none';
document.getElementById('BillApprovalShiftDiv').innerHTML='';

document.getElementById('BillApprovalDateMonthFromRow').style.display='none';
document.getElementById('BillApprovalDateMonthToRow').style.display='none';

document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('BillApprovalDateMonthFromDiv').innerHTML='';
document.getElementById('BillApprovalDateMonthToDiv').innerHTML='';


document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';

getShiftsFromWOForBillApproval();


//getDatesForMonthFrom();
//getDatesForMonthTo();
}



function changeYearBillApproval()

{

document.getElementById('BillApprovalShiftRow').style.display='none';
document.getElementById('BillApprovalShiftDiv').innerHTML='';

document.getElementById('BillApprovalDateMonthFromRow').style.display='none';
document.getElementById('BillApprovalDateMonthToRow').style.display='none';

document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('BillApprovalDateMonthFromDiv').innerHTML='';
document.getElementById('BillApprovalDateMonthToDiv').innerHTML='';


document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';

getShiftsFromWOForBillApproval();

//alert('sssssssssssssssssxxxxxsss');

//getDatesForMonthFrom();

//getShiftsFromWOForBillApproval();
}








function getShiftsFromWOForBillApproval()
{


document.getElementById('BillApprovalShiftRow').style.display='';
document.getElementById('BillApprovalShiftDiv').innerHTML=LoadingVariableBill;



locationId=document.getElementById('locationId').value;
workOrderId=document.getElementById('workOrderId').value;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getShiftsFromWOForBillApproval"
+"&locationId="+locationId+"&workOrderId="+workOrderId;
xmlhttpBill.onreadystatechange = handleGetShiftsFromWOForBillApproval;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}




function handleGetShiftsFromWOForBillApproval()
{
//alert('handleGetDatesForMonth='+xmlhttpBill.readyState);

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
//alert(xmlhttpBill.responseText);
	document.getElementById('BillApprovalShiftDiv').innerHTML=xmlhttpBill.responseText;
}
}
}





function getBillDatesFromShiftForBillApproval()
{


document.getElementById('BillApprovalDateMonthFromRow').style.display='none';
document.getElementById('BillApprovalDateMonthToRow').style.display='none';
document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';


//document.getElementById('BillApprovalDateMonthToRow').style.display='';
//document.getElementById('BillApprovalDateMonthToRow').innerHTML=LoadingVariableBill;


if(document.getElementById('shiftId').selectedIndex!=0)
{
document.getElementById('BillApprovalDateMonthFromRow').style.display='';
//document.getElementById('BillApprovalDateMonthToRow').style.display='';



document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=LoadingVariableBill;
//document.getElementById('BillApprovalDateMonthToDiv').innerHTML=LoadingVariableBill;


locationId=document.getElementById('locationId').value;
workOrderId=document.getElementById('workOrderId').value;
shiftId=document.getElementById('shiftId').value;
month=document.getElementById('month').value;
year=document.getElementById('year').value;
branchDepartmentId=document.getElementById('branchDepartmentId').value;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillDatesFromShiftForBillApprovalNew"
+"&locationId="+locationId+"&workOrderId="+workOrderId+"&shiftId="+shiftId+"&month="+month+"&year="+year+"&branchDepartmentId="+branchDepartmentId;
xmlhttpBill.onreadystatechange = handleGetBillDatesFromShiftForBillApproval;
xmlhttpBill.open("POST", queryString, true);

xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}
}





function handleGetBillDatesFromShiftForBillApproval()
{

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
//alert(xmlhttpBill.responseText);
document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=xmlhttpBill.responseText;

//getLastDateForBillApproval();

/*
document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=xmlhttpBill.responseText+xmlhttpBill.getResponseHeader("startDate");

if(xmlhttpBill.getResponseHeader("error")=='y' )
{
document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.getResponseHeader("errorString");

}
elses
{
document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.getResponseHeader("lastDate");;
document.getElementById('BillApprovalSubmitRow').style.display='';
}

*/

}
}
}





function getLastDateForBillApproval()
{




document.getElementById('BillApprovalDateMonthToRow').style.display='none';

document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';


//document.getElementById('BillApprovalDateMonthToRow').style.display='';
//document.getElementById('BillApprovalDateMonthToRow').innerHTML=LoadingVariableBill;


if(document.getElementById('billFromDate').selectedIndex!=0)
{
document.getElementById('BillApprovalDateMonthToRow').style.display='';

document.getElementById('BillApprovalDateMonthToDiv').innerHTML=LoadingVariableBill;


locationId=document.getElementById('locationId').value;
workOrderId=document.getElementById('workOrderId').value;
shiftId=document.getElementById('shiftId').value;
month=document.getElementById('month').value;
year=document.getElementById('year').value;
billFromDate=document.getElementById('billFromDate').value;

branchDepartmentId=document.getElementById('branchDepartmentId').value;


queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillDatesTo"
+"&locationId="+locationId+"&workOrderId="+workOrderId+"&shiftId="+shiftId
+"&month="+month+"&year="+year+"&branchDepartmentId="+branchDepartmentId+"&billFromDate="+billFromDate;
xmlhttpBill.onreadystatechange = handleGetLastDateForBillApproval;
xmlhttpBill.open("POST", queryString, true);

xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}
}














function handleGetLastDateForBillApproval()
{

if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
///alert(xmlhttpBill.responseText);


if(xmlhttpBill.getResponseHeader("error")=='y' )
{
document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.getResponseHeader("errorString");

}
else
{
document.getElementById('BillApprovalSubmitRow').style.display='';
document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.responseText;

}

/*
document.getElementById('BillApprovalDateMonthFromDiv').innerHTML=xmlhttpBill.responseText+xmlhttpBill.getResponseHeader("startDate");

if(xmlhttpBill.getResponseHeader("error")=='y' )
{
document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.getResponseHeader("errorString");

}
else
{
document.getElementById('BillApprovalDateMonthToDiv').innerHTML=xmlhttpBill.getResponseHeader("lastDate");;
document.getElementById('BillApprovalSubmitRow').style.display='';
}

*/

}
}
}













function changeResponseForBillApproval()
{
//document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';
///document.getElementById('remarksBillApprovalId').value='';

}

function changeBillToForBillApproval()
{
document.getElementById('BillApprovalShiftRow').style.display='none';

document.getElementById('BillApprovalSubmitRow').style.display='none';
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML='';
document.getElementById('populateStartOrGetApprovalProcess').innerHTML='';
//document.getElementById('BillApprovalStartStatusDiv').style.display='none';
document.getElementById('billToDate').selectedIndex=0;

}








function getRemarksForBillProcess()
{
//alert('locationId='+document.getElementById('locationId').value);
//alert('workOrderId='+document.getElementById('workOrderId').value);
branchDepartmentId=document.getElementById('branchDepartmentId').value;

//alert(branchDepartmentId);
return true;
}




function backForwardBillApprovalProcess(variable,obj)
{

temp1='Are You Sure You Want To ';

if(variable=='b')
{
document.getElementById('nextPriority').value=document.getElementById('previousDepartmentPriority').value;
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('previousBranchDepartmentIdFromDB').value;
document.getElementById('statusId').value=2;

temp=confirm(temp1+obj.value+'?');

}

else
{
document.getElementById('statusId').value=1;

document.getElementById('nextPriority').value=document.getElementById('nextDepartmentPriority').value
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('nextBranchDepartmentIdFromDB').value

temp=confirm(temp1+obj.value+'?');
}

if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFro';
document.getElementById('BillApprovalFormId').submit();

return true;
}
else
{
return false;
}

}








function freezeBill()
{
document.getElementById('statusId').value=3;

temp=confirm("Are You Sure You Want Finally Approve Bill?");

if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFro';
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('currentBranchDepartmentId').value;
document.getElementById('nextPriority').value=document.getElementById('currentDepartmentPriority').value



document.getElementById('BillApprovalFormId').submit();


return true;
}
else
{
return false;
}

}





function frezeeForSingleDepartment()
{

document.getElementById('statusId').value=3;

temp=confirm("Are You Sure You Want Finally Approve Bill?");

if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFro';
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('currentBranchDepartmentId').value;
document.getElementById('nextPriority').value=document.getElementById('currentDepartmentPriority').value



document.getElementById('BillApprovalFormId').submit();


return true;
}
else
{
return false;
}


}








function ForwardBillApprovalProcess()
{
temp=confirm("Are You Sure You Want Forward To "+document.getElementById('nextDepartmentName').value+" Department.");




if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFro';

document.getElementById('BillApprovalFormId').submit();


return true;
}
else
{
return false;
}

}
















function BillApprovalToAndFro()
{

temp=confirm('Are you sure?')
if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFro';

document.getElementById('BillApprovalFormId').submit();
return true;
}

else
{

return false;
}
/*
document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML=LoadingVariableBill;
originalMonth=document.getElementById('originalMonth').value;
originalYear=document.getElementById('originalYear').value;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBillApprovalDepartmentListDetails"+"&workOrderId="+workOrderId+"&locationId="+locationId+"&year="+originalYear+"&month="+originalMonth+"&mode=approval"+"&branchDepartmentId="+branchDepartmentId;
xmlhttpBill.onreadystatechange = handleBillApprovalToAndFro;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
*/
}



function handleBillApprovalToAndFro()
{

/*
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
  	document.getElementById('populateBillApprovalProcessDepartmentListDivId').innerHTML=xmlhttpBill.responseText;
	}
}
*/
}








function getBillApproval()
{

/*
if(document.getElementById('billFromDate').selectedIndex==0)
{
alert('Select From Date');
document.getElementById('billFromDate').focus();
return false;
}




if(document.getElementById('billToDate').selectedIndex==0)
{
alert('Select To Date');
document.getElementById('billToDate').focus();
return false;
}




if(compareTwoDatesGlobal(document.getElementById('billFromDate').value,document.getElementById('billToDate').value)==false)
{
alert("To Date Cannot Be Less Than From Date");
document.getElementById('billToDate').focus();
return false;

}
*/


 if(document.getElementById('shiftId').selectedIndex==0)
{
alert('Select Shift');
document.getElementById('shiftId').focus();
return false;
}



else
{
document.getElementById('hiddenOperation').value='getBillApprovalDepartmentListDetails';
///document.getElementById('BillApprovalFormId').submit();


startOrGetApprovalProcess();




}

}




function getBranchForBill(obj)
{
loadXMLBill();
peOrSpId=obj.value;
if(peOrSpId!=-1)
{
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getBranchForBill"+"&peOrSpId="+peOrSpId+"&Date="+new Date();
xmlhttpBill.onreadystatechange = handleBranchForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}



}

function handleBranchForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	//alert('sss'+xmlhttpBill.responseText);
	document.getElementById('spOrPeBranchDiv1').innerHTML='Branch';
	
	document.getElementById('spOrPeBranchDiv2').innerHTML=xmlhttpBill.responseText;
	
	
	}
}

}


function savePriorityBillAprrovalProcess(obj)
{

document.getElementById('currentPriority').value=obj.value;

}

function checkPriorityBillAprrovalProcess(obj)
{


/*
var billApproval=new Array(); 

var elms=document.getElementsByTagName('select');
///document.getElementById('maxPriority').value=obj.value;

for(var i=0;i<elms.length;i++)
{
if(elms[i].name=='Priority')
{

billApproval[i]=elms[i].value;

}


}//for 



billApproval.sort(sortNumberBillApproval)

document.getElementById('maxPriority').value=billApproval[billApproval.length-2];

*/
}


function sortNumberBillApproval(a,b)
{
return a - b;
}



function checkPriorityStatusAtSubmit()
{

//document.getElementById('waitSubmitBillApprovalDivId').innerHTML=LoadingVariableBill;
///document.getElementById('waitSubmitBillApproval').style.display='none';

var variableStatus='y';
var billApproval=new Array(); 
var elms=document.getElementsByTagName('select');
///document.getElementById('maxPriority').value=obj.value;

for(var i=0;i<elms.length;i++)
{
if(elms[i].name=='Priority')
{
billApproval[i]=elms[i].value;

}

}

billApproval.sort(sortNumberBillApproval);
document.getElementById('maxPriority').value=billApproval[billApproval.length-2];


//billApproval[billApproval.length]

//alert(billApproval);
//alert("length==="+billApproval.length);
 checkCounter=1;
 
 
 
for(var i=1;i<=document.getElementById('maxPriority').value;i++)
{
 
 if(checkCounter==0)
 {
 variableStatus='n';
 break;
 }
 
 variableStatus='n';
 
for(var j=0;j<elms.length;j++)
{
if(elms[j].name=='Priority')
{

if(i==elms[j].value   )
{




variableStatus='y';


break;

//continue;
}
else
{

variableStatus='n';

if(j==(elms.length-1))
{

checkCounter=0;

}

/*
if(i==6)
{
alert('sixxxx==='+variableStatus);
}
*/
}
}
}
 
}
 
 /*
 
 for(var i=0;i<elms.length;i++)
{
if(elms[i].name=='Priority')
{
billApproval[i]=elms[i].value;

}
 }
 
 
 
 
 for(var i=0; i<billApproval.length;i++ )
        {  
         
          
          for(j=i+1; j<billApproval.length; j++)
          {
            if(billApproval[j]==billApproval[i])
            {
            
            alert('jjjjj');
            
            
            }
           
          }
   }
 
 */	
 
 /*
 var elms=document.getElementsByTagName('select');
 for(var i=0;i<elms.length;i++)
{
if(elms[i].name=='Priority')
{
billApproval[i]=elms[i].value;

}
 }
 var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = billApproval.sort(); // You can define the comparing function here. JS default uses a crappy string compare.
var results = [];
for (var i = 0; i < billApproval.length - 1; i += 1) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
                results.push(sorted_arr[i]);
        variableStatus='n';
        
        }
}

alert(results);

*/
 
 
 
 
 
 
 
 ////alert(variableStatus);
return variableStatus;
}




function cc(billApproval,i)
{
var variableStatus='n';
//alert(billApproval[billApproval.length]);
//alert(i);

for(var j=0;j<billApproval.length;j++)
{
if(i==billApproval[j])
{
variableStatus='y';
}
else
{
variableStatus='n';
}
}
return variableStatus;
}



function SubmitBillApprovalDepartmentList()
{

var xx=checkPriorityStatusAtSubmit();



if(xx=='y')
{

temp=confirm('Are You Sure?');
if(temp==true)
{

document.getElementById('hiddenOperation').value='SubmitBillApprovalDepartmentList'

document.getElementById('BillGetDepartmentListFormId').submit();
return true;
}
else
{
return false;
}

}
else
{
alert('Discountinuity in approval sequence, please check and correct the same. ');
}

}



/*
function checkPriorityBillAprrovalProcess(obj)
{
//advancePriority=advancePriorityBillFunction();
if(obj.value==0 )
{


}
else
{

var FoundNotFound='N';
previousPriority=obj.value-1;


var elms=document.getElementsByTagName('select');

for(var i=0;i<elms.length;i++)
{
if(elms[i].name=='Priority')
{
if (previousPriority==(elms[i].value))
{
////alert('sss');
FoundNotFound='Y';
break;
}
}

}//for loop



if(FoundNotFound=='N')
{
alert('Please Set Ascending Priority' );
obj.value=document.getElementById('currentPriority').value
}


}

*/



function advancePriorityBillFunction()
{
var elms=document.getElementsByTagName('select');
for(var i=0;i<elms.length;i++)
{
if(elms[i].name=='Priority')
{
if(elms[i].value==2)
{
//alert('sssssssssssssss');
return 1;
}
else
{

//alert('KKKKKKKKKKKKKKKKKKKkk');
}

}

}///for

return 0;
}





function changeValues(str)
{

if(str=="B")
{

document.getElementById('peBranchOrLocationDiv1').innerHTML='';
document.getElementById('peBranchOrLocationDiv2').innerHTML='';
document.getElementById('locationDiv1').innerHTML='';
document.getElementById('locationDiv2').innerHTML='';
document.getElementById('workOrderDiv1').innerHTML='';
document.getElementById('workOrderDiv2').innerHTML='';
document.getElementById('monthDiv1').style.display='none';
document.getElementById('monthDiv2').style.display='none';
document.getElementById('yearDiv1').style.display='none';
document.getElementById('yearDiv2').style.display='none';
document.getElementById('submitdiv1').style.display='none';
document.getElementById('submitdiv2').style.display='none';
document.getElementById('divBill'+document.getElementById('originalMonth').value+document.getElementById('originalYear').value).innerHTML='';
document.getElementById('divBillSubmit').innerHTML='';
document.getElementById('serviceProviderRow').style.display='none';
document.getElementById('departmentRow').style.display='none';
document.getElementById('billPeriodRow').style.display='none';

document.getElementById('monthRow').style.display='none';
document.getElementById('yearRow').style.display='none';
document.getElementById('submitRow').style.display='none';
document.getElementById('workOrderRow').style.display='none';
document.getElementById('locationRow').style.display='none';
document.getElementById('peBranchOrLocationRow').style.display='none';

document.getElementById('divGetAcceptanceRatesForBill').style.display='none';
document.getElementById('divIndividualDesignationsForBill').style.display='none';
document.getElementById('divIndividualDutiesForBill').style.display='none';





}

else if(str=="L")
{

document.getElementById('workOrderDiv1').innerHTML='';
document.getElementById('workOrderDiv2').innerHTML='';
document.getElementById('serviceProviderRow').style.display='none';
document.getElementById('departmentRow').style.display='none';
document.getElementById('billPeriodRow').style.display='none';

document.getElementById('monthDiv1').style.display='none';
document.getElementById('monthDiv2').style.display='none';
document.getElementById('yearDiv1').style.display='none';
document.getElementById('yearDiv2').style.display='none';
document.getElementById('submitdiv1').style.display='none';
document.getElementById('submitdiv2').style.display='none';
document.getElementById('divBill'+document.getElementById('originalMonth').value+document.getElementById('originalYear').value).innerHTML='';
document.getElementById('divBillSubmit').innerHTML='';
document.getElementById('monthRow').style.display='none';
document.getElementById('yearRow').style.display='none';
document.getElementById('submitRow').style.display='none';
document.getElementById('workOrderRow').style.display='none';

document.getElementById('divGetAcceptanceRatesForBill').style.display='none';
document.getElementById('divIndividualDesignationsForBill').style.display='none';
document.getElementById('divIndividualDutiesForBill').style.display='none';

}



else if(str=="PB")
{


document.getElementById('locationDiv1').innerHTML='';
document.getElementById('locationDiv2').innerHTML='';
document.getElementById('workOrderDiv1').innerHTML='';
document.getElementById('workOrderDiv2').innerHTML='';
document.getElementById('serviceProviderRow').style.display='none';
document.getElementById('departmentRow').style.display='none';
document.getElementById('billPeriodRow').style.display='none';

document.getElementById('monthDiv1').style.display='none';
document.getElementById('monthDiv2').style.display='none';
document.getElementById('yearDiv1').style.display='none';
document.getElementById('yearDiv2').style.display='none';
document.getElementById('submitdiv1').style.display='none';
document.getElementById('submitdiv2').style.display='none';
document.getElementById('divBill'+document.getElementById('originalMonth').value+document.getElementById('originalYear').value).innerHTML='';
document.getElementById('divBillSubmit').innerHTML='';
document.getElementById('monthRow').style.display='none';
document.getElementById('yearRow').style.display='none';
document.getElementById('submitRow').style.display='none';
document.getElementById('workOrderRow').style.display='none';
document.getElementById('locationRow').style.display='none';


}




else if(str=="W")
{

document.getElementById('month').selectedIndex=document.getElementById('originalMonth').value;
document.getElementById('year').selectedIndex=0;
document.getElementById('serviceProviderRow').style.display='none';
document.getElementById('departmentRow').style.display='none';
document.getElementById('billPeriodRow').style.display='none';

document.getElementById('monthDiv1').style.display='none';
document.getElementById('monthDiv2').style.display='none';
document.getElementById('yearDiv1').style.display='none';
document.getElementById('yearDiv2').style.display='none';
document.getElementById('submitdiv1').style.display='none';
document.getElementById('submitdiv2').style.display='none';
document.getElementById('divBill'+document.getElementById('originalMonth').value+document.getElementById('originalYear').value).innerHTML='';
document.getElementById('divBillSubmit').innerHTML='';
document.getElementById('monthRow').style.display='none';
document.getElementById('yearRow').style.display='none';
document.getElementById('submitRow').style.display='none';


document.getElementById('divGetAcceptanceRatesForBill').style.display='none';
document.getElementById('divIndividualDesignationsForBill').style.display='none';
document.getElementById('divIndividualDutiesForBill').style.display='none';



}



else if(str=="M" || str=="Y" )
{


document.getElementById('divBill'+document.getElementById('originalMonth').value+document.getElementById('originalYear').value).innerHTML='';
document.getElementById('divBillSubmit').innerHTML='';

document.getElementById('divGetAcceptanceRatesForBill').style.display='none';
document.getElementById('divIndividualDesignationsForBill').style.display='none';
document.getElementById('divIndividualDutiesForBill').style.display='none';



}
}











function getPeBranchOrLocationForBill(obj)
{
loadXMLBill();

changeValues('B');
branchId=obj.value;
if(branchId!=-1)

{
document.getElementById('peBranchOrLocationRow').style.display='';

document.getElementById('peBranchOrLocationDiv1').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getPeBranchOrLocationForBill"+"&branchId="+branchId+"&Date="+new Date();
xmlhttpBill.onreadystatechange = handleBranchForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}

}

function handleBranchForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	document.getElementById('peBranchOrLocationDiv1').innerHTML=xmlhttpBill.getResponseHeader("select");
	
	document.getElementById('peBranchOrLocationDiv2').innerHTML=xmlhttpBill.responseText;
	if(xmlhttpBill.getResponseHeader("peOrSp")=="peOrSp")
	{
	document.getElementById('address').value=xmlhttpBill.getResponseHeader("address");
	document.getElementById('cityName').value=xmlhttpBill.getResponseHeader("cityName");
	document.getElementById('districtName').value=xmlhttpBill.getResponseHeader("districtName");
	document.getElementById('stateName').value=xmlhttpBill.getResponseHeader("stateName");
	document.getElementById('pin').value=xmlhttpBill.getResponseHeader("pin");
	document.getElementById('peBranch').value=xmlhttpBill.getResponseHeader("peBranch");
	
	}
	
	}
}

}










function getLocationFromBranchForBill(obj)
{
loadXMLBill();
changeValues('PB');
branchId=obj.value;

if(branchId!=-1)
{
document.getElementById('locationRow').style.display='';

document.getElementById('locationDiv1').innerHTML=LoadingVariableBill;
//alert('sss');

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getLocationFromBranchForBill"+"&branchId="+branchId+"&Date="+new Date();

xmlhttpBill.onreadystatechange = handleLocationFromBranchForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}

}

function handleLocationFromBranchForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	////alert('sss'+xmlhttpBill.responseText);
	document.getElementById('locationDiv1').innerHTML='Location';
	
	document.getElementById('locationDiv2').innerHTML=xmlhttpBill.responseText;
	document.getElementById('address').value=xmlhttpBill.getResponseHeader("address");
	document.getElementById('cityName').value=xmlhttpBill.getResponseHeader("cityName");
	document.getElementById('districtName').value=xmlhttpBill.getResponseHeader("districtName");
	document.getElementById('stateName').value=xmlhttpBill.getResponseHeader("stateName");
	document.getElementById('pin').value=xmlhttpBill.getResponseHeader("pin");
	document.getElementById('peBranch').value=xmlhttpBill.getResponseHeader("peBranch");
	
	
	}
}

}













function getWorkOrderFromLocationForBill(obj)
{
loadXMLBill();
changeValues('L');
locationId=obj.value;
if(locationId!=-1)
{
document.getElementById('workOrderRow').style.display='';

document.getElementById('workOrderDiv1').innerHTML=LoadingVariableBill;
//alert('sss');

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getWorkOrderFromLocationForBill"+"&locationId="+locationId+"&Date="+new Date();

xmlhttpBill.onreadystatechange = handleWorkOrderFromLocationForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}

}

function handleWorkOrderFromLocationForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	//alert('sss'+xmlhttpBill.getResponseHeader("branchHeadName"));
	document.getElementById('workOrderDiv1').innerHTML='Work Order';
	
	document.getElementById('workOrderDiv2').innerHTML=xmlhttpBill.responseText;
	
	
	}
}

}




function submitFunction()
{


fetchBill(document.getElementById('month').value,document.getElementById('year').value);

}




function getMonthYearForBill(obj)
{
loadXMLBill();
//alert('ddddddddddddddddd');

if(document.getElementById('hiddenOperation').value!='submitBill')
{
changeValues('W');
}

workOrderId=obj.value;
if(workOrderId!=-1)
{
document.getElementById('monthRow').style.display='';
document.getElementById('yearRow').style.display='';
document.getElementById('submitRow').style.display='';
document.getElementById('serviceProviderRow').style.display='';
document.getElementById('departmentRow').style.display='';
document.getElementById('billPeriodRow').style.display='';

//document.getElementById('monthDiv1').innerHTML=LoadingVariableBill;
//document.getElementById('yearDiv1').innerHTML=LoadingVariableBill;

address=document.getElementById('address').value;
cityName=document.getElementById('cityName').value;
districtName=document.getElementById('districtName').value;
stateName=document.getElementById('stateName').value;
pin=document.getElementById('pin').value;
peBranch=document.getElementById('peBranch').value;
spBranch=document.getElementById('spBranch').value;
peBranchHeadName=document.getElementById('peBranchHeadName').value;

	spBranchHeadName=document.getElementById('spBranchHeadName').value;
	//alert(spBranchHeadName);
document.getElementById('monthDiv1').style.display='block';
	document.getElementById('monthDiv2').style.display='block';
	document.getElementById('yearDiv1').style.display='block';
	document.getElementById('yearDiv2').style.display='block';
document.getElementById('submitdiv2').style.display='block';
document.getElementById('submitdiv2').innerHTML=LoadingVariableBill;
//basePathGlobalFromHeadTag=document.getElementById('basePathGlobalFromHeadTag').value;

month=document.getElementById('hiddenMonth').value;
//alert(month);
    year=document.getElementById('hiddenYear').value;
	monthYear=month+year;
	locationId=document.getElementById('locationId').value;
	workOrderId=document.getElementById('workOrderId').value;
	
if(document.getElementById('hiddenOperation').value=='submitBill')
{
	
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=submitBill"+"&month="+month+"&year="+year+"&basePathGlobalFromHeadTag="+basePathGlobalFromHeadTag;
///alert(document.getElementById('basePathGlobalFromHeadTag').value);


}
else
{
//alert('Else Calleeddd');
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=currentMonth";
}

queryString=queryString+"&workOrderId="+workOrderId+
"&spBranch="+spBranch+"&peBranch="+peBranch+
"&address="+address+"&cityName="+cityName+
"&districtName="+districtName+"&stateName="+stateName+
"&pin="+pin+"&peBranchHeadName="+peBranchHeadName+"&spBranchHeadName="+spBranchHeadName+"&Date="+new Date()+
"&month="+month+
"&year="+year+
"&workOrderId="+workOrderId+
"&locationId="+locationId;


xmlhttpBill.onreadystatechange = handleMonthYearForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}

}

function handleMonthYearForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
//alert('ssssssssssssssssss');

	document.getElementById('spBranchHeadName').value=xmlhttpBill.getResponseHeader("SPBranchHead");
	document.getElementById('serviceTaxNo').value=xmlhttpBill.getResponseHeader("serviceTaxNo");
	document.getElementById('serviceProviderName').value=xmlhttpBill.getResponseHeader("serviceProviderName");
	document.getElementById('spBranchId').value=xmlhttpBill.getResponseHeader("spBranchId");
	
	
	document.getElementById('serviceProviderDiv2').innerHTML=xmlhttpBill.getResponseHeader("serviceProviderName");
    document.getElementById('departmentDiv2').innerHTML=xmlhttpBill.getResponseHeader("departmentName");
  //  alert(xmlhttpBill.getResponseHeader("billPeriod"));
    document.getElementById('billPeriodFromDateDiv2').innerHTML=xmlhttpBill.getResponseHeader("billPeriod");
    
///document.getElementById('billPeriodFromDateDiv2').innerHTML=xmlhttpBill.getResponseHeader("workOrderStartAndEndDateString");

	//////////////alert(xmlhttpBill.getResponseHeader("SPBranchHead"));
	
	document.getElementById('spBranch').value=xmlhttpBill.getResponseHeader("SPBranchName");
	
	document.getElementById('submitdiv2').innerHTML='';
	
	document.getElementById('submitdiv1').style.display='block';

document.getElementById('hiddenMonth').value=xmlhttpBill.getResponseHeader("monthFromServer");
document.getElementById('hiddenYear').value=xmlhttpBill.getResponseHeader("yearFromServer");
month=document.getElementById('hiddenMonth').value;
    year=document.getElementById('hiddenYear').value;
//alert("month==="+month);
////alert("year==="+year);

if(document.getElementById('hiddenOperation').value!='submitBill')
{
document.getElementById('divBill'+month+year).innerHTML=xmlhttpBill.responseText;

}	
else
{

originalMonth=document.getElementById('originalMonth').value;
originalYear=document.getElementById('originalYear').value;

document.getElementById('divBill'+originalMonth+originalYear).innerHTML='';

document.getElementById('divBillSubmit').innerHTML=xmlhttpBill.responseText;
document.getElementById('hiddenOperation').value='fetchBill'

}
	}
}

}


function getAcceptanceRatesForBill(rates,serialNo,designationName)
{
//rates=document.getElementById('rates'+serialNo).value;

//basePathGlobalFromHeadTag=document.getElementById('basePathGlobalFromHeadTag').value;
loadXMLBill();
document.getElementById('divGetAcceptanceRatesForBill').innerHTML=LoadingVariableBill;


	document.getElementById('divGetAcceptanceRatesForBill').style.display='';


queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getAcceptanceRatesForBill"+
"&rates="+rates+"&Date="+new Date()+"&designationName="+designationName;









xmlhttpBill.onreadystatechange = handleGetAcceptanceRatesForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}




function handleGetAcceptanceRatesForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
	document.getElementById('divGetAcceptanceRatesForBill').innerHTML=xmlhttpBill.responseText;
	//alert('sssss');
	}
}

}












function getAcceptanceRatesForBillNew(designationName,rates)
{



///document.getElementById('divName').value=divName;

loadXMLBill();
//document.getElementById('divGetAcceptanceRatesForBill').innerHTML=LoadingVariableBill;


	//document.getElementById('divGetAcceptanceRatesForBill').style.display='';


queryString=document.getElementById('basePathForBill').value+"displayBillAction.do?hiddenOperation=getAcceptanceRatesForBillNew"+
"&rates="+rates+"&Date="+new Date()+"&designationName="+designationName;

xmlhttpBill.onreadystatechange = handleGetAcceptanceRatesForBillNew;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}




function handleGetAcceptanceRatesForBillNew()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
//document.getElementById(document.getElementById('divName').value).innerHTML=xmlhttpBill.responseText;

document.getElementById('ratesDiv').innerHTML=xmlhttpBill.responseText;
///document.getElementById('divName').focus();


	}
}

}















function getNameAndIndividualDutiesForBillNew(designationName,nameAndIndividualDuties)
{



///document.getElementById('divName').value=divName;

loadXMLBill();
//document.getElementById('divGetAcceptanceRatesForBill').innerHTML=LoadingVariableBill;


	//document.getElementById('divGetAcceptanceRatesForBill').style.display='';


queryString=document.getElementById('basePathForBill').value+"displayBillAction.do?hiddenOperation=getNameAndIndividualDutiesForBillNew"+
"&nameAndIndividualDuties="+nameAndIndividualDuties+"&Date="+new Date()+"&designationName="+designationName;

xmlhttpBill.onreadystatechange = handleGetNameAndIndividualDutiesForBillNew;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}




function handleGetNameAndIndividualDutiesForBillNew()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
//document.getElementById(document.getElementById('divName').value).innerHTML=xmlhttpBill.responseText;

document.getElementById('noOfDutiesDiv').innerHTML=xmlhttpBill.responseText;



	}
}

}





















function getDesignationsForBill(employeeName,serialNo,designationName)
{

loadXMLBill();
document.getElementById('divIndividualDesignationsForBill').style.display='';


	document.getElementById('divIndividualDesignationsForBill').innerHTML=LoadingVariableBill;


queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getDesignationsForBill"+
"&Date="+new Date()+"&employeeName="+employeeName+"&designationName="+designationName;









xmlhttpBill.onreadystatechange = handleDesignationsForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}





function handleDesignationsForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
	document.getElementById('divIndividualDesignationsForBill').innerHTML=xmlhttpBill.responseText;
	//alert('sssss');
	}
}

}










function getNameAndIndividualDutiesForBill(nameAndIndividualDuties,serialNo,designationName)
{

loadXMLBill();
document.getElementById('divIndividualDutiesForBill').style.display='';


	document.getElementById('divIndividualDutiesForBill').innerHTML=LoadingVariableBill;


queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=getNameAndIndividualDutiesForBill"+
"&Date="+new Date()+"&nameAndIndividualDuties="+nameAndIndividualDuties+"&designationName="+designationName;
xmlhttpBill.onreadystatechange = handleGetNameAndIndividualDutiesForBill;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	

}





function handleGetNameAndIndividualDutiesForBill()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
	document.getElementById('divIndividualDutiesForBill').innerHTML=xmlhttpBill.responseText;
	//alert('sssss');
	}
}

}












function closeAcceptanceRatesForBillTables()
{

$('#acceptanceRatesTableId').fadeOut(3000);
	UnTip();
//document.getElementById('acceptanceRatesForBillTrId').style.display='none';
}




function closeDesignationsForBillTables()
{

$('#designationsBillTableId').fadeOut(3000);
	UnTip();
//document.getElementById('acceptanceRatesForBillTrId').style.display='none';
}





function closeIndividualDutiesForBillTables()
{

$('#individualDutiesBillTableId').fadeOut(3000);
	UnTip();
//document.getElementById('acceptanceRatesForBillTrId').style.display='none';
}




function changeMonth()
{
changeValues('M');


}

function changeYear()
{
changeValues('Y');


}




function fetchBill(month,year)
{
	loadXMLBill();
	
	
	month=month;
	year=year;
  
   
    document.getElementById('hiddenMonth').value=month;
    document.getElementById('hiddenYear').value=year;
    
peBranchHeadName=document.getElementById('peBranchHeadName').value;
spBranchHeadName=document.getElementById('spBranchHeadName').value;
	peBranch=document.getElementById('peBranch').value;

	spBranch=document.getElementById('spBranch').value;
	
address=document.getElementById('address').value;
cityName=document.getElementById('cityName').value;
districtName=document.getElementById('districtName').value;
stateName=document.getElementById('stateName').value;
pin=document.getElementById('pin').value;
	workOrderId=document.getElementById('workOrderId').value;
	locationId=document.getElementById('locationId').value;
	serviceTaxNo=document.getElementById('serviceTaxNo').value;
    queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=fetchBill"+"&serviceTaxNo="+serviceTaxNo+"&workOrderId="+workOrderId+"&locationId="+locationId+"&month="+month+"&year="+year+"&peBranch="+peBranch+"&spBranch="+spBranch+"&peBranchHeadName="+peBranchHeadName+"&address="+address+"&cityName="+cityName+"&districtName="+districtName+"&stateName="+stateName+"&pin="+pin+"&spBranchHeadName="+spBranchHeadName+"&Date="+new Date();
	
	document.getElementById('tableBillDiv'+month+year).innerHTML=LoadingVariableBill;

	xmlhttpBill.onreadystatechange = handleFetchBill;
	xmlhttpBill.open("POST", queryString, true);
	xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBill.send(null);
}

function handleFetchBill() {
	
	if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
	if(document.getElementById('hiddenOperation').value=='submitBill')
	{
	
	
	}
	else
	{
	
	
	
	month=document.getElementById('hiddenMonth').value;
    year=document.getElementById('hiddenYear').value;
	monthYear=month+year;
	
	
document.getElementById('hiddenMonth').value=xmlhttpBill.getResponseHeader("monthFromServer");
document.getElementById('hiddenYear').value=xmlhttpBill.getResponseHeader("yearFromServer");
month=document.getElementById('hiddenMonth').value;
    year=document.getElementById('hiddenYear').value;
	
document.getElementById('tableBillDiv'+month+year).innerHTML='';
	
	document.getElementById('divBill'+month+year).innerHTML=xmlhttpBill.responseText;
	
	}
	}

}
}



function llForBill()
{

	if(document.getElementById('BillGetBranchFormId'))
	{
	
	if(document.getElementById('branchId'))
	{
	document.getElementById('branchId').selectedIndex=0;
	}
	
	if(document.getElementById('spBranchId'))
	{
	document.getElementById('spBranchId').value=0;
	}
	
	
	
	}
 	
 	if(document.getElementById('BillGetDepartmentListFormId')  || document.getElementById('BillApprovalFormId')   )
 	{
 	
 	if(document.getElementById('branchDepartmentId'))
	{
	document.getElementById('branchDepartmentId').selectedIndex=0;
	document.getElementById('departmentName').value='';
	}
 		
 	}
 	
 	
 	if(document.getElementById('billCycleFormId') && document.getElementById('spBranchId') )
 	{
 	document.getElementById('spBranchId').selectedIndex=0;
 	}
 	
 	
 	
 	 }
 	      	 




window.setTimeout(llForBill,500);



  function getBill()
	   {
	   document.getElementById('hiddenOperation').value='submitBill';
	
	document.getElementById('hiddenMonth').value=document.getElementById('month').value;
document.getElementById('hiddenYear').value=document.getElementById('year').value;
	
	 getMonthYearForBill(document.getElementById('workOrderId'));
	   }
   
	   
	   function hideBill(xx)
	        {
	
	
	xx1=xx;
	$('#BillDivTable'+xx).fadeOut(1000);     
 //document.getElementById('plusMinusBillDiv'+xx).innerHTML="<a href='javascript:void(0)' onclick='showBill(xx1);'>+</a>";
 	      	        }


	   function hideBillFromServer(xx)
	        {
//	alert("hideBillFromServer=="+xx);
	
	xx2=xx;
	$('#BillDiv'+xx).fadeOut(1000);     
 //document.getElementById('plusMinusBillDiv'+xx).innerHTML=
 //"<a href='javascript:void(0)' onclick='hideBillFromServer(xx2);'>-</a>"
 //+"<a href='javascript:void(0)' onclick='showBillFromServer(xx2);'>+</a>";
 	      	        }




	       function showBill(xx)
	        {
	    xx1=xx;
    //alert("Show=="+xx);
	
        $('#BillDivTable'+xx).fadeIn(1000);  
       // document.getElementById('plusMinusBillDiv'+xx).innerHTML='<a href="javascript:void(0)" onclick="hideBill(xx1);">-</a>';
   	        }
	     

	       function showBillFromServer(xx)
	        {
	    xx2=xx;
    //alert("ShowFromServer=="+xx);
	
        $('#BillDivTable'+xx).fadeIn(1000);  
       //document.getElementById('plusMinusBillDiv'+xx).innerHTML=
 //"<a href='javascript:void(0)' onclick='hideBillFromServer(xx2);'>-</a>"
 //+"<a href='javascript:void(0)' onclick='showBillFromServer(xx2);'>+</a>";
 	      	        }


                  function closeBill(monthYear)
 	      	        {
 	      	        document.getElementById('tableBillDiv'+monthYear).innerHTML='';
 	      	       	
 	      	       	$('#BillDiv'+monthYear).fadeOut(1000);   
 	      	        }

 	      	        
 	      	       // function closeBillFromServer(monthYear,month,year,monthString,previousMonth,previousYear)
 	      	        function closeBillFromServer(monthYear,month,year,previousMonth,previousYear)
 	      	       
 	      	        {
 	      	       monthx=month;
 	      	     
 	      	       monthYearx=monthYear;
 	      	       yearx=year;
 	      	      /// monthStringx=monthString;
 	      	      
 	      	       	//document.getElementById('tableBillDiv'+month+year).innerHTML='';
 	      	       	
 	      	       	$('#BillDivTable'+monthYear).fadeOut(1000);     
 	      	    	$('#divBill'+monthYear).fadeOut(1000);    
 	      	   /*   
 	      	      temp=confirm('This Will Hide Bill For Month '+monthString+' and  '+year+'. You Need To Select Month And Year From Combo Box To View This Bill, If Required.' );
 	      	       if(temp==true)
 	      	       {
 	      	       	document.getElementById('tableBillDiv'+month+year).innerHTML='';
 	      	       	
 	      	       	$('#BillDiv'+monthYear).fadeOut(1000);     
 	      	       } 
 	      	       else
 	      	       {
 	      	       
 	      	       }
 	      	        */
 	      	        }
 	      	        
 	      	        
       








function checkBillCycle()
{


if(document.getElementById('spBranchId').selectedIndex==0)
{
alert('Select Branch');
document.getElementById('spBranchId').focus();
return false;
}

else if(document.getElementById('workOrderId').selectedIndex==0)
{
alert('Select Work Order');
document.getElementById('workOrderId').focus();
return false;
}


else if(document.getElementById('locationId').selectedIndex==0)
{
alert('Select Location ');
document.getElementById('locationId').focus();
return false;
}


else if(document.getElementById('effectiveDateString').value=='')
{
alert('Select Date');

document.getElementById('effectiveDateString').focus();
return false;
}


else if(document.getElementById('firstOrSecondTime').value=='S'    )
{

if(compareTwoDatesGlobal(document.getElementById('currentDate').value,document.getElementById('effectiveDateString').value)==false)
{
alert("Date Cannot Be Less Than Current Date");
document.getElementById('effectiveDateString').focus();
return false;

}

else
{


temp=confirm('Are you sure?');
if(temp==true)
{
document.getElementById('hiddenOperation').value='billCycle';

return true;
}
else

{
return false;
}

}

}

else
{
temp=confirm('Are you sure?');
if(temp==true)
{
document.getElementById('hiddenOperation').value='billCycle';

return true;
}
else
{
return false;
}
}

}


function confirmBillApproval(hiddenOperation)
{




}



function compareTwoDatesGlobal(startDate, endDate) {
	
	
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
		
		return false;
	}
else
{
return true;
}

}





function fetchWorkOrderBillCycle(obj)
{
spBranchId=document.getElementById('spBranchId').value;

document.getElementById('WorkOrderBillCycleRow').style.display='none';
document.getElementById('locationBillCycleRow').style.display='none';
document.getElementById('WOrMBillCycleRow').style.display='none';
document.getElementById('ApplicabilityBillCycleRow').style.display='none';
document.getElementById('EffectiveBillCycleRow').style.display='none';
document.getElementById('SubmitBillCycleRow').style.display='none';




if(document.getElementById('spBranchId').selectedIndex!=0)
{
loadXMLBill();
document.getElementById('WorkOrderBillCycleRow').style.display='';
document.getElementById('WorkOrderBillCyclePopulateDiv').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=fetchWorkOrderBillCycle"+"&spBranchId="+spBranchId+"&Date="+new Date();
xmlhttpBill.onreadystatechange = handleFetchWorkOrderBillCycle;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	


}

}








function handleFetchWorkOrderBillCycle()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
	document.getElementById('WorkOrderBillCyclePopulateDiv').innerHTML=xmlhttpBill.responseText;
	}
}

}















function fetchLocationBillCycle(obj)
{
workOrderId=document.getElementById('workOrderId').value;
spBranchId=document.getElementById('spBranchId').value;

document.getElementById('locationBillCycleRow').style.display='none';
document.getElementById('WOrMBillCycleRow').style.display='none';
document.getElementById('ApplicabilityBillCycleRow').style.display='none';
document.getElementById('EffectiveBillCycleRow').style.display='none';
document.getElementById('SubmitBillCycleRow').style.display='none';

if(document.getElementById('workOrderId').selectedIndex!=0)
{
loadXMLBill();
document.getElementById('locationBillCycleRow').style.display='';
document.getElementById('locationBillCyclePopulateDiv').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=fetchLocationBillCycle"+"&workOrderId="+workOrderId+"&Date="+new Date()+"&spBranchId="+spBranchId;
xmlhttpBill.onreadystatechange = handleFetchLocationBillCycle;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	




}


}




function handleFetchLocationBillCycle()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	document.getElementById('locationBillCyclePopulateDiv').innerHTML=xmlhttpBill.responseText;
   
  

	}
}

}


function fetchEffectiveDateBillCycle(obj)
{


workOrderId=document.getElementById('workOrderId').value;
locationId=document.getElementById('locationId').value;
document.getElementById('WOrMBillCycleRow').style.display='none';
document.getElementById('ApplicabilityBillCycleRow').style.display='none';
document.getElementById('EffectiveBillCycleRow').style.display='none';
document.getElementById('SubmitBillCycleRow').style.display='none';

if(document.getElementById('locationId').selectedIndex!=0)
{

loadXMLBill();
 document.getElementById('WOrMBillCycleRow').style.display='';
    document.getElementById('ApplicabilityBillCycleRow').style.display='';
    document.getElementById('EffectiveBillCycleRow').style.display='';
document.getElementById('EffectiveBillCyclePopulateDiv').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=fetchEffectiveDateBillCycle"+"&workOrderId="+workOrderId+"&Date="+new Date()+"&locationId="+locationId;
xmlhttpBill.onreadystatechange = handleFetchEffectiveDateBillCycle;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}


}




function handleFetchEffectiveDateBillCycle()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('EffectiveBillCyclePopulateDiv').innerHTML=xmlhttpBill.responseText;
   document.getElementById('WOrMBillCyclePopulateDiv').innerHTML=xmlhttpBill.getResponseHeader('wm');
   document.getElementById('ApplicabilityBillCyclePopulateDiv').innerHTML=xmlhttpBill.getResponseHeader('cd');
   document.getElementById('SubmitBillCycleRow').style.display='';
   document.getElementById('masterId').value=xmlhttpBill.getResponseHeader('masterId');
	}
}

}




/*
function kk(serviceTaxNo,spBranchHeadName,firstDate,lastDate,cityName,districtName,stateName,pin,amountBillFormatView,
noOfDutiesBillFormatView,counter,designationBillFormatView,roleBillFormatView,designationBillFormatView,branchName,peBranch,
spBranch,totalDesignations,total,grandTotal,totalNoOfDuties,workOrderId,serviceTaxRate,serviceTaxAmount,billPeriod,spBranchId)
*/

function viewOnLetterHead(parametersLetterHead,dd)

{


document.getElementById('letterHeadSampleText').value=dd;
parametersLetterHead=parametersLetterHead+"&letterHeadSampleText="+document.getElementById('letterHeadSampleText').value;

window.open (parametersLetterHead, 'welcome','width=750, height=1050, left=100, top=25,toolbar=yes,scrollbars=yes,location=no,directories=yes,menubar=yes');
}




function changeLetterHeadSampleText(parametersLetterHead,obj)
{
//alert('sss213123ss='+obj.value);
if(obj.value!=-1)
{
viewOnLetterHead(parametersLetterHead,obj.value);

}


}




function getBillRealTime(parameters,ps)
{
parameters=parameters+"&month="+document.getElementById('month').value+"&year="+document.getElementById('year').value;
////alert(parameters);
var newWin =window.open (document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=currentMonthNew"+parameters, ps,'width=750, height=1050, left=100, top=25,toolbar=yes,scrollbars=yes,location=no,directories=yes,menubar=yes');
newWin.focus();
}








function PaymentApprovalDivFun1(parameters)
{
document.getElementById('PaymentApprovalDiv1').innerHTML=LoadingVariableBill;
document.getElementById('PaymentApprovalDiv2').innerHTML='';
parameters=parameters+"&month="+document.getElementById('month').value+"&year="+document.getElementById('year').value;

document.getElementById('hiddenParameter').value=parameters;



loadXMLBill();
 queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=currentMonthNew"+parameters;
xmlhttpBill.onreadystatechange = handlePaymentApprovalDivFun1;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}





function handlePaymentApprovalDivFun1()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('PaymentApprovalDiv1').innerHTML=xmlhttpBill.responseText;
 document.getElementById('finalGrandTotalString').value=xmlhttpBill.getResponseHeader("finalGrandTotalString");
	
 //alert(xmlhttpBill.getResponseHeader("finalGrandTotalString"));
 
  PaymentApprovalDivFun2();
	}
}

}











function PaymentApprovalDivFun2()
{
document.getElementById('PaymentApprovalDiv2').innerHTML=LoadingVariableBill;

//parameters=parameters+"&month="+document.getElementById('month').value+"&year="+document.getElementById('year').value;

parameters=document.getElementById('hiddenParameter').value;



loadXMLBill();
 queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=startOrGetApprovalProcessNew"+parameters;
xmlhttpBill.onreadystatechange = handlePaymentApprovalDivFun2;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}





function handlePaymentApprovalDivFun2()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('PaymentApprovalDiv2').innerHTML=xmlhttpBill.responseText;
  
	}
}

}











   function strValidate(string)
   {
       var testName =/^([a-z]|[A-Z]| )*$/;
       if(!testName.test(string))
       {
           return false; 
       }
   
   else
   {
    alert("Enter only string values");
   }
   }




function ForwardBillApprovalProcessNew()
{


if(decimalNoForBillApproval()==false)
{
}
else
{
//strValidate(document.getElementById('deductions').value);


//alert("asasasa==="+isNaN(document.getElementById('deductions').value));

//alert(typeof document.getElementById('deductions').value);

temp=confirm("Are You Sure You Want Forward To "+document.getElementById('nextDepartmentName').value+" Department.");




if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFroNew';


document.getElementById('BillApprovalFormIdNew').submit();


return true;
}
else
{
return false;
}

}

}



function backForwardBillApprovalProcessNew(variable,obj)
{


if(decimalNoForBillApproval()==false)
{
}
else
{


temp1='Are You Sure You Want To ';
//alert(document.getElementById('previousDepartmentPriority').value);
if(variable=='b')
{

document.getElementById('nextPriority').value=document.getElementById('previousDepartmentPriority').value;
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('previousBranchDepartmentIdFromDB').value;
document.getElementById('statusId').value=2;

temp=confirm(temp1+obj.value+'?');

}

else
{
document.getElementById('statusId').value=1;

document.getElementById('nextPriority').value=document.getElementById('nextDepartmentPriority').value
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('nextBranchDepartmentIdFromDB').value

temp=confirm(temp1+obj.value+'?');
}

if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFroNew';
document.getElementById('BillApprovalFormIdNew').submit();

return true;
}
else
{
return false;
}

}
}



function include(arr, obj) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] == obj) 
    {
  alert('right');
    return true;
  }
  else
  {
  alert('Wrong');
  }
  }


}


function validateDecimalNoForBillApproval()
{
myString = "0,1,2,3,4,5,6,7,8,9,.";
myArray = myString.split(", ");

for(i=0;i<myArray.length;i++)
{
alert(myArray[i]);
include(myArray, "2");

}

}



function decimalNoForBillApproval(){
	var isDecimal_re     = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;

	
  


 if(document.getElementById('deductions').value.length==0)
   {

   return true;
   }



	if(document.getElementById('deductions').value.match(isDecimal_re)){
		//return true;
	}else{
		alert("Enter Decimal No.");
		document.getElementById('deductions').focus();
		return false;
	}
 if(parseFloat(document.getElementById('deductions').value)>parseFloat(document.getElementById('finalGrandTotalString').value))
   {
   alert("Deduction Is Greater Than Grand Total.");
   return false;
   }





else
{
return true;
}

}




function freezeBillNew()
{


if(decimalNoForBillApproval()==false)
{
}
else
{

document.getElementById('statusId').value=3;

temp=confirm("Are You Sure You Want Finally Approve Bill?");

if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFroNew';
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('currentBranchDepartmentId').value;
document.getElementById('nextPriority').value=document.getElementById('currentDepartmentPriority').value



document.getElementById('BillApprovalFormIdNew').submit();


return true;
}
else
{
return false;
}

}
}



function frezeeForSingleDepartmentNew()
{


if(decimalNoForBillApproval()==false)
{
}
else
{


document.getElementById('statusId').value=3;

temp=confirm("Are You Sure You Want Finally Approve Bill?");

if(temp==true)
{
document.getElementById('hiddenOperation').value='BillApprovalToAndFroNew';
document.getElementById('nextBranchDepartmentIdString').value=document.getElementById('currentBranchDepartmentId').value;
document.getElementById('nextPriority').value=document.getElementById('currentDepartmentPriority').value



document.getElementById('BillApprovalFormIdNew').submit();


return true;
}
else
{
return false;
}


}

}




function changePaymentApprovalDiv()
{
//alert(variable);
document.getElementById('PaymentApprovalDiv1').innerHTML='';
document.getElementById('PaymentApprovalDiv2').innerHTML='';



month=document.getElementById('month').value;
year=document.getElementById('year').value;
variable=document.getElementById('variable').value;
//alert(variable);
if(variable=='O')
{

}

else
{
variable="AB";
loadXMLBill();
 document.getElementById('OnLineBillOrApprovalDiv').innerHTML=LoadingVariableBill;
 queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=approvalNew"
 +"&month="+month+"&year="+year+"&variable="+variable;
xmlhttpBill.onreadystatechange = handleChangePaymentApprovalDiv;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
}

}




function handleChangePaymentApprovalDiv()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('OnLineBillOrApprovalDiv').innerHTML=xmlhttpBill.responseText;
  
	}
}

}



function loadingBillMenu1()
{
 
loadXMLBill();
 document.getElementById('onlineBillMenuDivId1').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=BillOnlineMenu&menu=O";

xmlhttpBill.onreadystatechange = handleLoadingBillMenu1;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
 
  
}




function handleLoadingBillMenu1()
{


if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('onlineBillMenuDivId1').innerHTML=xmlhttpBill.responseText;
  
	}

	if (xmlhttpBill.status == 500) {
	
   document.getElementById('onlineBillMenuDivId1').innerHTML=LoadingVariableBillFail;
  
	}

}

}





function loadingBillMenu2()
{
 
loadXMLBill();
 document.getElementById('onlineBillMenuDivId2').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value
+"displayBillAction.do?hiddenOperation=BillOnlineMenu&menu=BP";

xmlhttpBill.onreadystatechange = handleLoadingBillMenu2;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
 
  
}



function handleLoadingBillMenu2()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('onlineBillMenuDivId2').innerHTML=xmlhttpBill.responseText;
  
	}
}

}









function loadingBillMenu3()
{
 
loadXMLBill();
 document.getElementById('onlineBillMenuDivId2').innerHTML=LoadingVariableBill;
queryString=document.getElementById('basePathGlobalFromHeadTag').value
+"displayBillAction.do?hiddenOperation=BillOnlineMenu&menu=BPN";

xmlhttpBill.onreadystatechange = handleLoadingBillMenu3;
xmlhttpBill.open("POST", queryString, true);
xmlhttpBill.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBill.send(null);	
 
  
}



function handleLoadingBillMenu3()
{
if (xmlhttpBill.readyState == 4) {
	if (xmlhttpBill.status == 200) {
	
   document.getElementById('onlineBillMenuDivId2').innerHTML=xmlhttpBill.responseText;
  
	}
}

}











function PrintBill()
{ 


branchId=document.getElementById('branchId').value;
sampleId=document.getElementById('sampleId').value;
 functionalityId=document.getElementById('functionalityId').value;
 
  var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
      disp_setting+="scrollbars=yes,width=730, height=1050, left=100, top=25"; 
  basePath=document.getElementById('basePath').value;
  var docprint=window.open(document.getElementById('basePath').value+"displayBillAction.do?hiddenOperation=print&branchId="+branchId+"&sampleId="+sampleId+"&functionalityId="+functionalityId,"",disp_setting); 
 

}






function getPopUpModulesForBill(variable)
{ 


  var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
      disp_setting+="scrollbars=yes,width=730, height=1050, left=100, top=25"; 
if(variable=='P')
{
parameters=document.getElementById('parameters').value+"&variable=P";
  var docprint=window.open(document.getElementById('basePathGlobalFromHeadTag').value+"displayBillAction.do?hiddenOperation=currentMonthNew&parameters="+parameters,"",disp_setting); 
docprint.focus();
}

////For Rates,Attendance,Salary,EPF etc. Call ur respective actions. Don't use BillAction.
 

}


var xmlhttpAgreement;
var LoadingVariableAgreement='<font face="Verdana" size="1" color="#800000">'+'Loading..'+'</font>';
function loadXMLAgreemnt()
{

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttpAgreement=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttpAgreement=new ActiveXObject("Microsoft.XMLHTTP");
}
}
function LTrimAgreement(str)
{
	
	var whitespace = new String(" \t\n\r");

	
	var s = new String(str);
	
	if (whitespace.indexOf(s.charAt(0)) != -1) {
		var j=0, i = s.length;
		
		while (j < i && whitespace.indexOf(s.charAt(j)) != -1) { j++; }
			
		s = s.substring(j, i);
		}
	
	return s;
}


function CancelWOAgreement(obj)
{

if(obj.checked==true)
{

temp=confirm('Are You Sure, You Want To Terminate Agreement? Please Note, Terminating Agreement Will Shut Down All Activities Pertaining To This Agreement');
if(temp==true)
{
document.getElementById('statusId').value='3';
	
}
else
{

obj.checked=false;

}


}


}

function sendAgreement(statusId)
{


var compareDate=compareTwoDatesGlobal(document.getElementById('workOrderStartDate').value,document.getElementById('workOrderEndDate').value,"Work Order's ");


if(compareDate==false)
{
return false;
}


if(document.getElementById('agreementDetails').value.length==0 || document.getElementById('agreementDetails').value=='')
{
alert('Enter Agreement Details');
document.getElementById('agreementDetails').focus();
return false;

}


else
{

temp=confirm('Are You Sure You Want To Proceed?');
if(temp==true)
{
if(document.getElementById('statusId').value!=3)
{
document.getElementById('statusId').value=statusId;

}


document.getElementById('hiddenOperation').value='saveOrUpdateAgreement';

document.getElementById('agreementFormId').submit();
return true;

}
else
{

return false;
}




}

}






function sendAgreementAdmin()
{

if(document.getElementById('agreementDetails').value.length==0 || document.getElementById('agreementDetails').value=='')
{
alert('Enter Agreement Details');
document.getElementById('agreementDetails').focus();
return false;

}
else
{
temp=confirm('Are You Sure You Want To Proceed?');

if(temp==true)
{
document.getElementById('hiddenOperation').value='saveOrUpdateAgreementAdmin';
document.getElementById('agreementFormId').submit();
return true;
}
else
{
return false;
}

}
}



function FwdAgreementToSP()
{
document.getElementById('hiddenOperation').value = 'FwdToSP';
document.getElementById('agreementFormId').submit();
return true;
}



function SendBackToPE()
{
document.getElementById('statusId').value=6;
document.getElementById('agreementFormId').submit();
return true;
}



function changeDisplayMessage()
{
	document.getElementById('agreementId').value=0;
document.getElementById('agreementSampleId').value=-1;
document.getElementById('AgreementSampleAdminDisplayMessageDiv').innerHTML='';

	document.getElementById('AgreementSampleAdminDiv').innerHTML='';
	document.getElementById('AgreementSampleAdminDiv').style.display='none';
	document.getElementById('AgreementSampleAdminTable2').style.display='none';
document.getElementById('sampleHidden').value='';
	if(document.getElementById('agreementDetails'))
	{
	document.getElementById('agreementDetails').value='';
	
	}

}


function getSampleForAgreementAdmin()
{
document.getElementById('AgreementSampleAdminDisplayMessageDiv').innerHTML='';

	document.getElementById('AgreementSampleAdminDiv').innerHTML='';
	document.getElementById('AgreementSampleAdminDiv').style.display='none';
	document.getElementById('AgreementSampleAdminTable2').style.display='none';
	document.getElementById('agreementId').value=0;
	document.getElementById('sampleHidden').value='';
	if(document.getElementById('agreementDetails'))
	{
	document.getElementById('agreementDetails').value='';
	
	}
	
	
	if(document.getElementById('agreementSampleId').value==-1 || document.getElementById('industryId').value==-1  )
	{
	}
	else
	{
	document.getElementById('AgreementSampleAdminDiv').style.display='block';
	document.getElementById('AgreementSampleAdminDiv').innerHTML=LoadingVariableAgreement;
	
	loadXMLAgreemnt();
	
	agreementSampleId=document.getElementById('agreementSampleId').value;
	industryId=document.getElementById('industryId').value;
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayAgreementAction.do?hiddenOperation=getSampleInfo"+"&agreementSampleId="+agreementSampleId+"&industryId="+industryId+"&Date="+new Date();
	xmlhttpAgreement.onreadystatechange = handleAgreementSampleAdmin;
	xmlhttpAgreement.open("POST", queryString, true);
	xmlhttpAgreement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpAgreement.send(null);
}
}



function handleAgreementSampleAdmin() {
	try
	{
	if (xmlhttpAgreement.readyState == 4) {
	if (xmlhttpAgreement.status == 200) {
		var idCombo = document.getElementById('agreementSampleId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text;

 	document.getElementById('sampleHidden').value=idComboText;
	
	document.getElementById('AgreementSampleAdminTable2').style.display='block';
	document.getElementById('agreementDetails').value= xmlhttpAgreement.responseText;
	document.getElementById('agreementId').value=xmlhttpAgreement.getResponseHeader("agreementId");;
	
	document.getElementById('AgreementSampleAdminDiv').innerHTML='';
	document.getElementById('AgreementSampleAdminDiv').style.display='none';
	if(document.getElementById('agreementDetails'))
	{
	changeTextAreaHeightForAgreement(document.getElementById('agreementDetails'));
	
	}
	
	}
	}
}
catch(e)
{
}
}




function getBranchForAgreement()
{	
	document.getElementById('industryId').value=-1;
	
	document.getElementById('branchId').options.length=1;
	document.getElementById('workOrderId').options.length=1;
	document.getElementById('acceptanceId').options.length=1;
	
	document.getElementById('agreementDivId').style.display='none';
	document.getElementById('AgreementStatus').style.display='none';
	document.getElementById('workOrderStartDate').value='';
	document.getElementById('workOrderEndDate').value='';
	document.getElementById('TableAgreementStatus').style.visibility = 'hidden';
	
	document.getElementById('agreementSampleTRId').style.visibility='hidden';
document.getElementById('statusId').value=0;
document.getElementById('agreementId').value=0;
document.getElementById('branchName').value='';
document.getElementById('mobileNoBranch').value='';
document.getElementById('emailBranch').value='';

document.getElementById('displayDateSP').value='';
document.getElementById('displayDatePE').value='';
	
	if(document.getElementById('peOrSpId').value==-1)
	{
	
	
	}
	else
	{
	document.getElementById('branchAgreementDiv').innerHTML=LoadingVariableAgreement;
	
	loadXMLAgreemnt();
	
	peOrSpId=document.getElementById('peOrSpId').value;
	
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayAgreementAction.do?hiddenOperation=getBranchInfo"+"&peOrSpId="+peOrSpId+"&Date="+new Date();
	xmlhttpAgreement.onreadystatechange = handleBranchForAgreement;
	xmlhttpAgreement.open("POST", queryString, true);
	xmlhttpAgreement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpAgreement.send(null);
}
}


function handleBranchForAgreement() {
	try
	{
	if (xmlhttpAgreement.readyState == 4) {
	if (xmlhttpAgreement.status == 200) {
	
	document.getElementById('branchAgreementDiv').innerHTML= xmlhttpAgreement.responseText;
	}
	}
}
catch(e)
{
}
}






function getAcceptanceCode()
{

document.getElementById('industryId').value=-1;
	
	document.getElementById('acceptanceId').options.length=1;
	document.getElementById('workOrderId').options.length=1;
	document.getElementById('agreementDivId').style.display='none';
	document.getElementById('AgreementStatus').style.display='none';
	document.getElementById('workOrderStartDate').value='';
	document.getElementById('workOrderEndDate').value='';
	document.getElementById('TableAgreementStatus').style.visibility = 'hidden';
	
	document.getElementById('agreementSampleTRId').style.visibility='hidden';
document.getElementById('mobileNoBranch').value='';
	document.getElementById('emailBranch').value='';
	document.getElementById('statusId').value=0;
document.getElementById('agreementId').value=0;
document.getElementById('displayDateSP').value='';
document.getElementById('displayDatePE').value='';
	if(document.getElementById('branchId').value==-1)
	{
	document.getElementById('branchName').value='';
	}
	else
	{
	var idCombo = document.getElementById('branchId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text

 	
	document.getElementById('branchName').value=idComboText;
	document.getElementById('AcceptanceAgreementDiv').innerHTML=LoadingVariableAgreement;
	loadXMLAgreemnt();
	
	peOrSpId=document.getElementById('peOrSpId').value;
	branchId=document.getElementById('branchId').value;
	
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayAgreementAction.do?hiddenOperation=getAcceptanceCode"+"&peOrSpId="+peOrSpId+"&branchId="+branchId+"&Date="+new Date();
	xmlhttpAgreement.onreadystatechange = handleWorkOrderForAcceptanceCode;
	xmlhttpAgreement.open("POST", queryString, true);
	xmlhttpAgreement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpAgreement.send(null);
}
}
function handleWorkOrderForAcceptanceCode() {
	try
	{
	if (xmlhttpAgreement.readyState == 4) {
	if (xmlhttpAgreement.status == 200) {
	document.getElementById('mobileNoBranch').value=xmlhttpAgreement.getResponseHeader("mobileNoBranch");
	document.getElementById('emailBranch').value=xmlhttpAgreement.getResponseHeader("emailBranch");
	
	document.getElementById('AcceptanceAgreementDiv').innerHTML= xmlhttpAgreement.responseText;
	}
	}
}
catch(e)
{
}
}






function getWorkOrderNoForAgreement()
{

	document.getElementById('industryId').value=-1;
	
	document.getElementById('workOrderId').options.length=1;
	document.getElementById('agreementDivId').style.display='none';
	document.getElementById('AgreementStatus').style.display='none';
	document.getElementById('workOrderStartDate').value='';
	document.getElementById('workOrderEndDate').value='';
	document.getElementById('TableAgreementStatus').style.visibility = 'hidden';
	
	document.getElementById('agreementSampleTRId').style.visibility='hidden';
document.getElementById('statusId').value=0;
document.getElementById('agreementId').value=0;
document.getElementById('displayDateSP').value='';
document.getElementById('displayDatePE').value='';
	
	if(document.getElementById('branchId').value==-1)
	{
	document.getElementById('branchName').value='';
	}
	else
	{
	var idCombo = document.getElementById('branchId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text

 	
	document.getElementById('branchName').value=idComboText;
	document.getElementById('WorkOrderAgreementDiv').innerHTML=LoadingVariableAgreement;
	loadXMLAgreemnt();
	
	peOrSpId=document.getElementById('peOrSpId').value;
	branchId=document.getElementById('branchId').value;
	acceptanceId=document.getElementById('acceptanceId').value;
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayAgreementAction.do?hiddenOperation=getWorkOrderInfo"+"&peOrSpId="+peOrSpId+"&branchId="+branchId+"&acceptanceId="+acceptanceId+"&Date="+new Date();
	xmlhttpAgreement.onreadystatechange = handleWorkOrderForAgreement;
	xmlhttpAgreement.open("POST", queryString, true);
	xmlhttpAgreement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpAgreement.send(null);
}
}
function handleWorkOrderForAgreement() {
	try
	{
	if (xmlhttpAgreement.readyState == 4) {
	if (xmlhttpAgreement.status == 200) {
	
	document.getElementById('WorkOrderAgreementDiv').innerHTML= xmlhttpAgreement.responseText;
	}
	}
}
catch(e)
{
}
}


function getAgreementStatus()
{
	document.getElementById('agreementDivId').style.display='none';
	document.getElementById('AgreementStatus').style.display='none';
	document.getElementById('workOrderStartDate').value='';
	document.getElementById('workOrderEndDate').value='';
	document.getElementById('displayDateSP').value='';
	document.getElementById('displayDatePE').value='';
	document.getElementById('statusId').value=0;
document.getElementById('agreementId').value=0;
	document.getElementById('TableAgreementStatus').style.visibility = 'hidden';
	
	document.getElementById('agreementSampleTRId').style.visibility='hidden';
    document.getElementById('cancelAgreement').checked=false;
 		document.getElementById('CancelWOAgreementTR').style.display = 'none';
	document.getElementById('industryId').value=-1;
	
		
		
		cancelDiv1();
	
	
	


	if(document.getElementById('workOrderId').value==-1)
	{
	}
	
	else
	{
	
	loadXMLAgreemnt();
	document.getElementById('AgreementTableLoading').style.visibility='hidden';
	document.getElementById('AgreementLoadingStatus').innerHTML=LoadingVariableAgreement;
	
	peOrSpId=document.getElementById('peOrSpId').value;
	branchId=document.getElementById('branchId').value;
	workOrderId=document.getElementById('workOrderId').value;
	branchName=document.getElementById('branchName').value
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayAgreementAction.do?hiddenOperation=getAgreementStatus"+"&peOrSpId="+peOrSpId+"&workOrderId="+workOrderId+"&branchName="+branchName+"&Date="+new Date();
	xmlhttpAgreement.onreadystatechange = handleAgreementStatus;
	xmlhttpAgreement.open("POST", queryString, true);
	xmlhttpAgreement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpAgreement.send(null);
}
}


function cancelDiv1()
{

if(document.getElementById('agreementDetails'))
{
document.getElementById('agreementDetails').value ='';
}
if(document.getElementById('peCommentNew'))
{
  document.getElementById('peCommentNew').value = '';
}

if(document.getElementById('spCommentNew'))
{
  document.getElementById('spCommentNew').value = '';
}



if(document.getElementById('peCommentOld'))
{
  document.getElementById('peCommentOld').value = '';
}


if(document.getElementById('spCommentOld'))
{
  document.getElementById('spCommentOld').value = '';
}

	
if(document.getElementById('oldComments'))
{
  document.getElementById('oldComments').value = '';
}
	

document.getElementById('agreementDivId').style.display='none';
	document.getElementById('CommentRowFirst').style.display='none';
	document.getElementById('PENewCommentRowId').style.display='none';
	


document.getElementById('SPNewCommentRowId').style.display='none';
	document.getElementById('CommentRowSecondPE').style.display='none';
	

document.getElementById('PEOldCommentsRowId').style.display='none';
	document.getElementById('CommentRowSecondSP').style.display='none';
	document.getElementById('SPOldCommentsRowId').style.display='none';
	document.getElementById('YourCommentRowPrevious').style.display='none';
	document.getElementById('YourCommentRowPreviousData').style.display='none';
	document.getElementById('ForwardToSPButtonRow').style.display='none';
	
	document.getElementById('AcceptRejectPEButtonRow').style.display='none';
	
	
	
}

function handleAgreementStatus() {
	try
	{

	cancelDiv1();
	
	
	
	
	
	
	
	document.getElementById('peCommentNew').value = '';
	document.getElementById('spCommentNew').value = '';
	
	document.getElementById('hiddenOperation').value = '';
	if (xmlhttpAgreement.readyState == 4) {
	if (xmlhttpAgreement.status == 200) {
	
	
	document.getElementById('industryId').value=xmlhttpAgreement.getResponseHeader("industryId");
	
	document.getElementById('AgreementTableLoading').style.visibility='visible';
	document.getElementById('AgreementLoadingStatus').innerHTML='';
	
	document.getElementById('agreementSampleIdDiv').innerHTML='';
	
	document.getElementById('TableAgreementStatus').style.visibility = 'visible';
	
	
	document.getElementById('workOrderStartDate').value=xmlhttpAgreement.getResponseHeader("workOrderStartDate");
	document.getElementById('workOrderEndDate').value=xmlhttpAgreement.getResponseHeader("workOrderEndDate");
	document.getElementById('displayDateSP').value=xmlhttpAgreement.getResponseHeader("displayDateSP");
	document.getElementById('displayDatePE').value=xmlhttpAgreement.getResponseHeader("displayDatePE");
	
	document.getElementById('agreementId').value=xmlhttpAgreement.getResponseHeader("agreementId");
	document.getElementById('AgreementStatus').style.display = 'block';
	
	document.getElementById('AgreementStatus').innerHTML=xmlhttpAgreement.getResponseHeader("agreementStatus");
	
	
	
	if(xmlhttpAgreement.getResponseHeader("statusId")=='-1')
	{
	
	document.getElementById('AgreementStatus').style.display = 'block';
	document.getElementById('AgreementStatus').innerHTML=xmlhttpAgreement.responseText;
	
	}
	
	
	else if(xmlhttpAgreement.getResponseHeader("statusId")=='0')
	{
	
	document.getElementById('AgreementStatus').style.display = 'none';
	document.getElementById('agreementDetails').readOnly=false ;
	
	document.getElementById('agreementSampleTRId').style.visibility = 'visible';
	
	document.getElementById('agreementSampleIdDiv').innerHTML= xmlhttpAgreement.responseText;
	document.getElementById('PENewCommentRowId').style.display = 'block';
	document.getElementById('ForwardToSPButtonRow').style.display = 'block';
	document.getElementById('operationFwd').value= xmlhttpAgreement.getResponseHeader("operationStatus");
	document.getElementById('statusId').value=5;
	if(xmlhttpAgreement.getResponseHeader("contextBranchType")=="PE")
	{
	
	}
	
	
	}
	
	
	
	else if(xmlhttpAgreement.getResponseHeader("statusId")=='3')
	{
	
	
	
	
	document.getElementById('CancelWOAgreementTR').style.display = 'none';
	document.getElementById('AgreementStatus').style.color = '#800000';
	document.getElementById('agreementDivId').style.display = 'block';
	document.getElementById('agreementDetails').value= xmlhttpAgreement.responseText;
	document.getElementById('agreementDetails').readOnly=true ;
	
	if(xmlhttpAgreement.getResponseHeader("contextBranchType")=="PE")
	{
	document.getElementById('oldComments').value=xmlhttpAgreement.getResponseHeader("peCommentsOld");
	document.getElementById('CommentRowSecondSP').style.display = 'block';
	document.getElementById('SPOldCommentsRowId').style.display = 'block';
	document.getElementById('spCommentOld').value=xmlhttpAgreement.getResponseHeader("spCommentsOld");
	
	}
	else
	{
	document.getElementById('oldComments').value=xmlhttpAgreement.getResponseHeader("spCommentsOld");
	document.getElementById('CommentRowSecondPE').style.display = 'block';
	document.getElementById('PEOldCommentsRowId').style.display = 'block';
	document.getElementById('peCommentOld').value=xmlhttpAgreement.getResponseHeader("peCommentsOld");
	
	
	}
	
	
	document.getElementById('YourCommentRowPrevious').style.display = 'block';
	document.getElementById('YourCommentRowPreviousData').style.display = 'block';
	
	
	document.getElementById('CommentRowFirst').style.display = 'none';

	document.getElementById('PENewCommentRowId').style.display = 'none';
	document.getElementById('SPNewCommentRowId').style.display = 'none';
	

	
	
	
	document.getElementById('statusId').value=3;
	}
	
	
	
	else 
	{

	document.getElementById('agreementDivId').style.display = 'block';
	document.getElementById('agreementDetails').value= xmlhttpAgreement.responseText;
	document.getElementById('YourCommentRowPrevious').style.display = 'block';
	document.getElementById('YourCommentRowPreviousData').style.display = 'block';
	
	if(xmlhttpAgreement.getResponseHeader("statusId")=='5')
	{
	document.getElementById('agreementDetails').readOnly=true ;
	
	if(xmlhttpAgreement.getResponseHeader("contextBranchType")=="PE")
	{
	document.getElementById('CommentRowFirst').style.display = 'none';
document.getElementById('CancelWOAgreementTR').style.display = 'block';
	document.getElementById('PENewCommentRowId').style.display = 'none';
	document.getElementById('SPNewCommentRowId').style.display = 'none';
	document.getElementById('oldComments').value=xmlhttpAgreement.getResponseHeader("peCommentsOld");
	document.getElementById('SPOldCommentsRowId').style.display = 'block';
	document.getElementById('spCommentOld').value=xmlhttpAgreement.getResponseHeader("spCommentsOld");
	document.getElementById('CommentRowSecondSP').style.display = 'block';
	document.getElementById('CancelWOAgreementTR').style.display = 'none';
	
	
	}
	
	else
	{
		document.getElementById('CommentRowFirst').style.display='block';
	
		document.getElementById('operationSendBack').value= xmlhttpAgreement.getResponseHeader("operationSendBack");
	document.getElementById('operationAccept').value= xmlhttpAgreement.getResponseHeader("operationAccept");
	document.getElementById('CancelWOAgreementTR').style.display = 'none';
	
	
	document.getElementById('SPNewCommentRowId').style.display = 'block';
		
document.getElementById('CommentRowSecondPE').style.display = 'block';
	document.getElementById('PEOldCommentsRowId').style.display = 'block';
	document.getElementById('AcceptRejectPEButtonRow').style.display = 'block';
	document.getElementById('peCommentOld').value=xmlhttpAgreement.getResponseHeader("peCommentsOld");
	document.getElementById('oldComments').value=xmlhttpAgreement.getResponseHeader("spCommentsOld");
	
	}	
	}
	
	
	
	else if(  xmlhttpAgreement.getResponseHeader("statusId")=='6' || xmlhttpAgreement.getResponseHeader("statusId")=='4' )
	{
	
	document.getElementById('agreementDetails').readOnly=false ;
	
	
	
	
	if( xmlhttpAgreement.getResponseHeader("statusId")=='4' )
	{
document.getElementById('operationFwd').value='Amendment Done And Forward To '+document.getElementById('branchName').value;
	}
	else
	{
	
	}
	
	
	if(xmlhttpAgreement.getResponseHeader("contextBranchType")=="SP")
	{
		
		document.getElementById('agreementDetails').readOnly=true ;
	document.getElementById('CommentRowFirst').style.display = 'none';
	document.getElementById('CancelWOAgreementTR').style.display = 'none';
	
	document.getElementById('PEOldCommentsRowId').style.display = 'block';
	document.getElementById('CommentRowSecondPE').style.display = 'block';
	
	document.getElementById('peCommentOld').value=xmlhttpAgreement.getResponseHeader("peCommentsOld");
	document.getElementById('oldComments').value=xmlhttpAgreement.getResponseHeader("spCommentsOld");
	
	}
	else
	{
	document.getElementById('CommentRowFirst').style.display='block';
	

	document.getElementById('CancelWOAgreementTR').style.display = 'block';
	
	document.getElementById('PENewCommentRowId').style.display = 'block';
	
	document.getElementById('CommentRowSecondSP').style.display = 'block';
	document.getElementById('SPOldCommentsRowId').style.display = 'block';
	document.getElementById('ForwardToSPButtonRow').style.display = 'block';
	
		
	document.getElementById('oldComments').value=xmlhttpAgreement.getResponseHeader("peCommentsOld");
	document.getElementById('spCommentOld').value=xmlhttpAgreement.getResponseHeader("spCommentsOld");
	}
	
	
	
	}
	
	
	
	
	}
	
	
	if(document.getElementById('agreementDetails'))
	{
 
changeTextAreaHeightForAgreement(document.getElementById('agreementDetails'));


	}
	
	
	
	}
	
	
	}
}
catch(e)
{
}
}









function getAgreementSample()
{
	
	
	
	
	document.getElementById('agreementDivId').style.display = 'none';
	document.getElementById('PENewCommentRowId').style.display = 'none';
	document.getElementById('SPNewCommentRowId').style.display = 'none';
	document.getElementById('CommentRowSecondPE').style.display = 'none';
	document.getElementById('PEOldCommentsRowId').style.display = 'none';
	document.getElementById('CommentRowSecondSP').style.display = 'none';
	document.getElementById('SPOldCommentsRowId').style.display = 'none';
	document.getElementById('YourCommentRowPrevious').style.display = 'none';
	document.getElementById('YourCommentRowPreviousData').style.display = 'none';
	
	




	
	
	
	
	if(document.getElementById('agreementSampleId').value==-1)
	{
	
	document.getElementById('agreementDivId').style.display = 'none';
	}
	else
	{
	//industryId=document.getElementById('industryIdForPe').value;
	industryId=document.getElementById('industryId').value;
	
	loadXMLAgreemnt();
	agreementSampleId=document.getElementById('agreementSampleId').value;
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayAgreementAction.do?hiddenOperation=getAgreementSample"+"&agreementSampleId="+agreementSampleId+"&industryId="+industryId+"&Date="+new Date();
	xmlhttpAgreement.onreadystatechange = handleAgreementSample;
	xmlhttpAgreement.open("POST", queryString, true);
	xmlhttpAgreement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpAgreement.send(null);
}
}

function handleAgreementSample()
	{
try
{
	document.getElementById('agreementDivId').style.display = 'block';
	
	document.getElementById('CommentRowFirst').style.display = 'block';
	document.getElementById('PENewCommentRowId').style.display = 'block';
	
	
	document.getElementById('agreementDetails').value= xmlhttpAgreement.responseText;
	if(document.getElementById('agreementDetails'))
	{
	changeTextAreaHeightForAgreement(document.getElementById('agreementDetails'));
	
	
	}
	
	
	
	
	}	
catch(e)
{
}
}


function changeTextAreaHeightForAgreement(obj)
{


            obj.style.height = (obj.scrollHeight) + 'px';

}




function trim(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");

document.getElementById('agreementDetails').value=s;
	return s;
}


function onLoadForAgreement()
{
	if(document.getElementById('peOrSpId'))
	{
	
	document.getElementById('peOrSpId').value=-1;
	}
	
	if(document.getElementById('branchName'))
	{
	document.getElementById('branchName').value='';
	}
	
	if(document.getElementById('agreementId'))
	{
	document.getElementById('agreementId').value='0';
	}
	
	
	if(document.getElementById('emailBranch'))
	{
	
	document.getElementById('emailBranch').value='';
	}
	
	
	if(document.getElementById('mobileNoBranch'))
	{
	
	document.getElementById('mobileNoBranch').value='';
	}
	if(document.getElementById('workOrderStartDate'))
	{
	document.getElementById('workOrderStartDate').value='';
	}
	if(document.getElementById('workOrderEndDate'))
	{
	
	document.getElementById('workOrderEndDate').value='';
	}
	
	
	
	
	if(document.getElementById('displayDateSP'))
	{
	
	document.getElementById('displayDateSP').value='';
	}
	
	
	if(document.getElementById('displayDatePE'))
	{
	
	document.getElementById('displayDatePE').value='';
	}
	
	
	
	if(document.getElementById('agreementSampleId'))
	{
	
	document.getElementById('agreementSampleId').value=-1;
	}
	
	
	if(document.getElementById('industryId'))
	{
	
	document.getElementById('industryId').value=-1;
	}
	
	if(document.getElementById('sampleHidden'))
	{
	
	document.getElementById('sampleHidden').value='';
	}
	
	
	
	
	if(document.getElementById('AgreementTextArea'))
	{
	
	changeTextAreaHeightForAgreement(document.getElementById('AgreementTextArea'));
	
	}
	
	if(document.getElementById('AgreementPEContentsTextArea'))
	{
	
	changeTextAreaHeightForAgreement(document.getElementById('AgreementPEContentsTextArea'));
	
	}
	if(document.getElementById('AgreementSPContentsTextArea'))
	{
	
	changeTextAreaHeightForAgreement(document.getElementById('AgreementSPContentsTextArea'));
	
	}
	
	}


function resizeIt() {
            var textarea = document.getElementById('myText01');
            textarea.style.height = (textarea.scrollHeight) + 'px';
        };




window.onload=onLoadForAgreement();
window.setTimeout(onLoadForAgreement,100);
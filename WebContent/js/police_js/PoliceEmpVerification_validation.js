
var noPhy=0;
var noPro=0;

function validate() {
	/**
	 * Modified by Hemant Sahu
 	 *
     */


	/*
	 * if ((document.getElementById('DisplayTable').value
	 * !=undefined)||(document.getElementById('DisplayTable').value
	 * !='undefined')){
	 *
	 * if((document.getElementById('DisplayTable').style.display =='none')&&
	 * (document.getElementById('isProvisionally').disabled == true)) {
	 * alert("Please Verify Physically."); return false; } if
	 * (document.getElementById('remark').value == '') {
	 *
	 * alert("Please Enter Remark"); document.getElementById('remark').focus();
	 * return false; } else if
	 * ((document.getElementById('verifyByName').value=='') ||
	 * (document.getElementById('verifyByBadgeNo').value=='')){
	 *
	 * alert("Please Enter Police Officer's Name/Badge No.");
	 * document.getElementById('verifyByName').focus(); return false; }
	 * if(document.getElementById('finalStatus').selectedIndex==0) {
	 * alert("Please select Physically Status for Verification"); return false; }
	 *
	 *  }
	 */

	/*if (document.getElementById('isProvisionally').checked == true) {
		document.getElementById('isProvisionally').value = 'Y';
	}

	document.getElementById('operation').value = 'Submit';

	if (document.getElementById('verificationStatus').selectedIndex == 0) {
		alert("Please Select verification status");
		document.getElementById('verificationStatus').focus();
		return false;
	}
		 * else if ((document.getElementById('remark').value == '') &&
		 * (document.getElementById()('finalStatus').selectedIndex==1) ) {
		 * alert("Please Enter Remark");
		 * document.getElementById('remark').focus(); return false; } else if
		 * ((document.getElementById('verifyByName').value=='') ||
		 * (document.getElementById('verifyByBadgeNo').value=='')){
		 *
		 * alert("Please Enter Police Officer's Name/Badge No.");
		 * document.getElementById('verifyByName').focus(); return false; }
		 * if(document.getElementById('finalStatus').selectedIndex==0) {
		 * alert("Please select Physically Status for Verification"); return
		 * false; }


	if (document.getElementById('registrationDate').value != '') {

		var oInput = document.getElementById("registrationDate");
		if (isValidDate(oInput.value)) {
		} else {
			alert("Invalid DateFormat!\n Please Enter Date in dd/MM/yyyy Format");
			return false;
		}
		var strErrMsg = "Invalid Verified Date \n\n";
		var dtDate = document.getElementById('registrationDate').value; // name
																		// of
																		// text
																		// box
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
			strErrMsg = strErrMsg
					+ " Verified Date is not greater than Current date \n";
			alert(strErrMsg);
			document.getElementById('registrationDate').focus();
			return false;
		}
	}
	if (policeEmpVerificationForm.isAnyCase.value == 'false') {
		policeEmpVerificationForm.isThereAnyCase.value = 'N';
	} else if (policeEmpVerificationForm.isAnyCase.value == 'true') {
		policeEmpVerificationForm.isThereAnyCase.value = 'Y'
	}

	if (document.getElementById('verificationStatus').selectedIndex == 0
			&& policeEmpVerificationForm.isProvisionally.checked == false) {
		alert("Please select checkbox if option selected is Provisionally .");
		return false;

	}
	if (policeEmpVerificationForm.isProvisionally.checked == true
			&& document.getElementById('verificationStatus').selectedIndex == 0) {
		alert("Please select Provisionally option if checkbox is Selected .");
		return false;

	}


	 * Commented by Hemant Sahu on 11-Nov-2010 : Begin This block was commented
	 * because there was no id named 'peSidefinalConfirmStatus' in this jsp



	 * if(document.getElementById('peSidefinalConfirmStatus').value == 'N'){
	 *
	 * alert("Principal Employer has not confirm the request of this person .");
	 *  }


	 Commented by Hemant Sahu on 11-Nov-2010 : End
*/
	/*if (document.getElementById('checkVerificationStatus').checked == true) {

		if (document.getElementById('checkAtLeastPhy').value < 4) {
			alert("Please Select Atleast 4 Check Points.");
			return false;
		}

	}*/

if (document.getElementById('checkAtLeastEight').value < 7) {
		document.getElementById('hiddenOperationPro').disabled = true;
		alert("Answer to 7 questions should be YES");
		return false;

}


else{

	var temp = confirm('Please check all the details for correction if any.');



	if (temp == true) {
		showAfterSubmitPhysicalTable();
		setVerificationStatus();
		return true;
	} else {
		return false;
	}
}
}
window.onload = function() {

	/*
	 * if(document.getElementById('perma_status').value=='false') {
	 *
	 * document.getElementById('checkVerificationStatus').disabled=true; }
	 */
	if ((document.getElementById('isProvisionally1').value == 'Y')) {

		document.getElementById('isProvisionally').checked = true;
		document.getElementById('isProvisionally').disabled = true;

		document.getElementById('verificationStatus').selectedIndex = 1;
		document.getElementById('verificationStatus').disabled = true;

		// document.getElementById('action').value = 'Provisional Verification
		// Done';
		// document.getElementById('action').disabled = true;

	}

}

function checkIt(a, h, p, sgx) {
	url = "submitPoliceCheck.do?operation=see&pea=" + a + "&peb=" + h + "&pec="
			+ p + "&sgx=" + sgx;
	sendMailWindow = dhtmlmodal.open('Mail Manager', 'iframe', url,
			'Mail Manager',
			'width=500px,height=400px,center=1,resize=0,scrolling=1')

	return false;
}
function sendMailSp(spa, spb, spc) {
	url = "submitPoliceCheck.do?operation=see&spa=" + spa + "&spb=" + spb
			+ "&spc=" + spc;
	sendMailWindow = dhtmlmodal.open('Mail Manager', 'iframe', url,
			'Mail Manager',
			'width=500px,height=400px,center=1,resize=0,scrolling=1')

	return false;
}
function sendSMSPe(peDelId, peHeadID, policeMobNo, sgx) {

	url = "submitPoliceCheck.do?operation=ViewSMS&peDelId=" + peDelId
			+ "&peHeadId=" + peHeadID + "&policeMobNo=" + policeMobNo + "&sgx="
			+ sgx;
	sendSMSWindow = dhtmlmodal.open('SMS Manager', 'iframe', url,
			'SMS Manager',
			'width=500px,height=400px,center=1,resize=0,scrolling=1')

	return false;
}
function sendSMSSP(spDelId, spHeadId, policeMobNo) {
	url = "submitPoliceCheck.do?operation=ViewSMS&spDelId=" + spDelId
			+ "&spHeadId=" + spHeadId + "&policeMobNo=" + policeMobNo;
	sendSMSWindow = dhtmlmodal.open('SMS Manager', 'iframe', url,
			'SMS Manager',
			'width=500px,height=400px,center=1,resize=0,scrolling=1')

	return false;
}

function checkProvisional() {

	if (document.getElementById('verificationStatus').selectedIndex != 0) {
		policeEmpVerificationForm.isProvisionally.checked = true;
		return true;
	} else {
		policeEmpVerificationForm.isProvisionally.checked = false;
		alert("Please select Provisionally option. before click on checkbox");
		return false;
	}

}

function isValidDate(sText) {
	var reDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
	return reDate.test(sText);
}

function ShowVerfiedTable() {

	if ((document.getElementById('DisplayTable').style.display == 'none')
			|| (document.getElementById('DisplayTablePhysical').style.display == 'none')) {
		document.getElementById('DisplayTable').style.display = 'block';
		document.getElementById('DisplayTablePhysical').style.display = 'block';
		// document.getElementById('DisplayTable').style.visibility = "visible";
		// Added by Hemant Sahu for radio button
		document.getElementById('DisplayTableProvisional').style.display = 'none';
		document.getElementById('displayProvisionalResult').style.display = 'none';

	} else if ((document.getElementById('DisplayTable').style.display == 'block')
			|| (document.getElementById('DisplayTablePhysical').style.display == 'block')) {

		document.getElementById('DisplayTable').style.display = 'none';
		document.getElementById('displayPhysicalResult').style.display = 'none';
		document.getElementById('DisplayTablePhysical').style.display = 'none';
	}

	if (document.getElementById('policePvrId').value == 0) {

		document.getElementById('pvrUploadMsg').style.display = 'block';
		document.getElementById('physicalVerButton').disabled = true;
	}

	return true;
}

function ShowProvisionalTable() {

	// added by anil
	if (document.getElementById('DisplayTableProvisional').style.display == 'none') {
		document.getElementById('DisplayTableProvisional').style.display = 'block';
		// document.getElementById('DisplayTable').style.visibility = "visible";
		// Added by Hemant Sahu for radio button
		document.getElementById('DisplayTable').style.display = 'none';
		document.getElementById('displayPhysicalResult').style.display = 'none';
		document.getElementById('DisplayTablePhysical').style.display = 'none';

	} else if (document.getElementById('DisplayTableProvisional').style.display == 'block') {

		document.getElementById('DisplayTableProvisional').style.display = 'none';
		document.getElementById('displayProvisionalResult').style.display = 'none';
	}
	return true;
}

/*
 * Added by Hemant Sahu on 12-Nov-2010 ; Begin These function is added to check
 * whether atleast eight points are checked in checklist or not.
 */

function setValueYES(obj) {

	if(document.getElementById('hiddenCheckListSrNoValue_' + obj).value == "N"){
	noPro--;
	}

	if (document.getElementById('hiddenCheckListSrNoValue_' + obj).value == "S"
			|| document.getElementById('hiddenCheckListSrNoValue_' + obj).value == "N") {
		document.getElementById('hiddenCheckListSrNoValue_' + obj).value = "Y";

		var temp = document.getElementById('checkAtLeastEight').value;
		temp++;
		document.getElementById('checkAtLeastEight').value = temp;
	}





}

function setValueNO(obj) {


	if (document.getElementById('hiddenCheckListSrNoValue_' + obj).value == "Y") {
		document.getElementById('hiddenCheckListSrNoValue_' + obj).value = "N";
		var temp = document.getElementById('checkAtLeastEight').value;
		temp--;
		document.getElementById('checkAtLeastEight').value = temp;
		noPro++;
	}

	if (document.getElementById('hiddenCheckListSrNoValue_' + obj).value == "S") {
		document.getElementById('hiddenCheckListSrNoValue_' + obj).value = "N";
		noPro++;
	}


}

/*
 * Added by Hemant Sahu on 11-Nov-2010: Begin This block is added when
 * requirement come that in provisional verification check list their should be
 * atleast 8 to be checked.
 *
 */

function provisionalResult() {
	if (document.getElementById('displayProvisionalResult').style.display == 'none') {

			var temp = eval(document.getElementById('checkAtLeastEight').value)+ noPro;

			if(temp == 12){

			document.getElementById('displayProvisionalResult').style.display = 'block';
			document.getElementById('resultProYes').value = document
					.getElementById('checkAtLeastEight').value;
			document.getElementById('resultProNo').value = 12
					- document.getElementById('checkAtLeastEight').value;
			document.getElementById('hiddenOperationPro').disabled = false;
		}
		else{
			alert("Answer all questions, either YES or NO");
			document.getElementById('hiddenOperationPro').disabled = true;

		}


		if (document.getElementById('checkAtLeastEight').value < 7) {
		document.getElementById('hiddenOperationPro').disabled = true;
		//alert("Select At least 7 points.");
}

	} else {
		document.getElementById('displayProvisionalResult').style.display = 'none';
		setTimeout("provisionalResult();", 300);
	}
}

function physicalResult() {

	if (document.getElementById('checkAtLeastPhy').value > 1) {
			var temp = eval(document.getElementById('checkAtLeastPhy').value) + noPhy;

		if( temp == 4){


		if (document.getElementById('displayPhysicalResult').style.display == 'none') {
			document.getElementById('displayPhysicalResult').style.display = 'block';
			document.getElementById('resultPhyYes').value = document
					.getElementById('checkAtLeastPhy').value;
			document.getElementById('resultPhyNo').value = 4
					- document.getElementById('checkAtLeastPhy').value;
			document.getElementById('physicalVerButton').disabled = false

			if (((document.getElementById('7').checked == true || document
					.getElementById('9').checked == true) && (document
					.getElementById('8').checked == true || document
					.getElementById('12').checked == true))
					|| ((document.getElementById('phy_7').checked == false || document
							.getElementById('phy_9').checked == false) && (document
							.getElementById('phy_8').checked == false || document
							.getElementById('phy_12').checked == false))

			) {
			//	alert('Select Either 1 and 3 (or) 2 and 4 Points ');

				//document.getElementById('phyErrorMsg').style.display = 'block';
				document.getElementById('hiddenOperationPhy').disabled = true;

			}

			else {
			//	document.getElementById('phyErrorMsg').style.display = 'none';
				document.getElementById('hiddenOperationPhy').disabled = false;
			}

		} else {
			document.getElementById('displayPhysicalResult').style.display = 'none';
			setTimeout("physicalResult();", 300);
		}
		}
else{

alert("Answer all questions, either YES or NO");
		document.getElementById('hiddenOperationPhy').disabled = true;

}



	}



	else {
		alert("Select At least 2 points, either 1 and 3 or 2 and 4. ");
		document.getElementById('hiddenOperationPhy').disabled = true;

	}

}

/*
 * Added by Hemant Sahu on 11-Nov-2010: End
 */

/*
 * Added by Hemant Sahu on 12-Nov-2010 ; Begin
 */

/* Added By Sunil :Begin
 * Modified by Hemant Sahu
 * */
function setValueYESPhy(obj) {

	if(document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value == "N"){
		noPhy--;

	}

	if (document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value == "S"
			|| document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value == "N") {
		document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value = "Y";
		var temp = document.getElementById('checkAtLeastPhy').value;
		temp++;
		document.getElementById('checkAtLeastPhy').value = temp;
			}

	checkPhysicalCondition();


}

function setValueNOPhy(obj) {

	if (document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value == "Y") {
		document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value = "N";
		var temp = document.getElementById('checkAtLeastPhy').value;
		temp--;
		document.getElementById('checkAtLeastPhy').value = temp;
		noPhy++;
	}

	if (document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value == "S") {
		document.getElementById('hiddenPhyCheckListSrNoValue' + obj).value = "N";
		noPhy++;
	}

	checkPhysicalCondition();

}
/* Added By Sunil :End */

/*
 * Added by Hemant Sahu on 07-Dec-2010 : Begin
 */

function resetAllChecked() {

	var provisionalStatus = document.getElementById('provisionalStatus').value;
	if (provisionalStatus == 'R') {
		document.getElementById('verifyProvisionally').checked = true;
		document.getElementById('verifyProvisionally').disabled = true;
		document.getElementById('checkVerificationStatus').checked = true;
		document.getElementById('hiddenOperationPro').disabled = true;
		document.getElementById('subForResProvisional').disabled = true;
		ShowProvisionalTable();

		showAfterSubmitPhysicalTable();

	}

	else {
		document.getElementById('verifyProvisionally').checked = false;
		document.getElementById('checkVerificationStatus').checked = false;
	}
	if (document.getElementById('policePvrId').value == 0) {

		document.getElementById('pvrUploadMsg').style.display = 'block';
		document.getElementById('physicalVerButton').disabled = true;
	}

}

/*
 * Added by Hemant Sahu on 07-Dec-2010 : End
 */

/**
 * Added by Hemant Sahu on 16-Dec-2010 : Begin
 *
 * This fuction is to display physical verification table after submit
 * provisional verification checklist.
 *
 */

function showAfterSubmitPhysicalTable() {

	if ((document.getElementById('DisplayTable').style.display == 'none')
			|| (document.getElementById('DisplayTablePhysical').style.display == 'none')) {
		document.getElementById('DisplayTable').style.display = 'block';
		document.getElementById('DisplayTablePhysical').style.display = 'block';

		// document.getElementById('DisplayTable').style.visibility = "visible";

	} else if ((document.getElementById('DisplayTable').style.display == 'block')
			|| (document.getElementById('DisplayTablePhysical').style.display == 'block')) {

		document.getElementById('DisplayTable').style.display = 'none';
		document.getElementById('displayPhysicalResult').style.display = 'none';
		document.getElementById('DisplayTablePhysical').style.display = 'none';
	}
	if (policeEmpVerificationForm.provisionalSuccessMsg.value == 'true') {

		document.getElementById('provisionalSuccessMsgDiv').style.display = 'block';
	}

}

function setVerificationStatus() {
	document.getElementById('verificationStatus').value = 'R';

}

function setFinalStatus() {
	document.getElementById('finalStatus').value = 'H';
}


/**
 * Added by Hemant Sahu on 01-Feb-2011
 *
 * This Method is to check whether 1 and 3 (or) 2 and 4 questions are checked or not.
 */

function checkPhysicalCondition(){

		if (((document.getElementById('7').checked == true || document
					.getElementById('9').checked == true) && (document
					.getElementById('8').checked == true || document
					.getElementById('12').checked == true))
					|| ((document.getElementById('phy_7').checked == false || document
							.getElementById('phy_9').checked == false) && (document
							.getElementById('phy_8').checked == false || document
							.getElementById('phy_12').checked == false))

			) {
			//	alert('Select Either 1 and 3 (or) 2 and 4 Points ');

				//document.getElementById('phyErrorMsg').style.display = 'block';
				document.getElementById('hiddenOperationPhy').disabled = true;

			}



}
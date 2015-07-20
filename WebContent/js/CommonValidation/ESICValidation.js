//For ESIC challan
function validateESICChallan() {
	if (document.getElementById("chequeFirst").value == "") {
		alert("Please enter cheque no.");
		document.getElementById("chequeFirst").focus();
		return false;
	}
	if (esicChallanForm.employerCodeNo.value == "") {
		alert("Please enter code no.");
		esicChallanForm.employerCodeNo.focus();
		return false;
	}
	if (esicChallanForm.depositedBy.value == "") {
		alert("Please enter value for deposited by");
		esicChallanForm.depositedBy.focus();
		return false;
	}
	if ((document.getElementById("cheque").checked == false) && (document.getElementById("cash").checked == false) && (document.getElementById("draft").checked == false)) {
		alert("Please select a value for mode of payment");
		document.getElementById("cheque").focus();
		return false;
	}
	if ((document.getElementById("cheque").checked == true) && (document.getElementById("chequeSecond").value == "")) {
		alert("Please enter cheque No.");
		document.getElementById("chequeSecond").focus();
		return false;
	}
	if ((document.getElementById("draft").checked == true) && (document.getElementById("chequeSecond").value == "")) {
		alert("Please enter draft no.");
		document.getElementById("chequeSecond").focus();
		return false;
	}
	if ((document.getElementById("cheque").checked == true) && (document.getElementById("chequeFirst").value != document.getElementById("chequeSecond").value)) {
		alert("Please enter correct cheque numbers");
		document.getElementById("chequeSecond").value = "";
		return false;
	}
	if ((document.getElementById("draft").checked == true) && (document.getElementById("chequeFirst").value != document.getElementById("chequeSecond").value)) {
		alert("Please enter correct draft numbers");
		document.getElementById("chequeSecond").value = "";
		return false;
	}
	if (esicChallanForm.bankName.value == "") {
		alert("Please enter the name of bank");
		esicChallanForm.bankName.focus();
		return false;
	}
	var temp=confirm('Please check all details for correction if any, before submit.');
	if(temp==true) {
	return true;
	}else {
	return false;
	}
}

function DisableCheque() {
	if (document.getElementById("cash").checked == true) {
		document.getElementById("chequeSecond").value = "";
		document.getElementById("chequeSecond").readOnly = true;
	}
	if (document.getElementById("cheque").checked == true) {
		document.getElementById("chequeSecond").readOnly = false;
	}
	if (document.getElementById("draft").checked == true) {
		document.getElementById("chequeSecond").readOnly = false;
	}
	return true;
}	
// Ended ESIC challan


// For ESIC Regulation Form 5
function validationSelectLocationForESICRegulationForm5() {
	if (document.getElementById("startMonth").selectedIndex == 0) {
		alert("Please select start month");
		document.getElementById("startMonth").focus();
		return false;
	}
	if (document.getElementById("startYear").selectedIndex == 0) {
		alert("Please select start year");
		document.getElementById("startYear").focus();
		return false;
	}
	return true;
}

function changeComboFrom() {
	var startMonth = document.getElementById("startMonth");
	var startMonthValue = startMonth.options[startMonth.selectedIndex].value;
	var endMonth = document.getElementById("endMonth");
	var endMonthValue = endMonth.options[endMonth.selectedIndex].value;
	var fromYear = document.getElementById("startYear");
	var fromYearValue = fromYear.options[fromYear.selectedIndex].value;
	if (parseInt(startMonthValue) == 4) {
		document.getElementById("endMonth").selectedIndex = 1;
		var nextYear = fromYearValue;
		document.getElementById("endYear").innerHTML = "<option value='" + nextYear + "'>" + nextYear + "</option>";
	}
	if (parseInt(startMonthValue) == 10) {
		document.getElementById("endMonth").selectedIndex = 2;
		var nextYear = ++fromYearValue;
		document.getElementById("endYear").innerHTML = "<option value='" + nextYear + "'>" + nextYear + "</option>";
	}
}
function changeComboTo() {
	document.getElementById("endMonth").selectedIndex = 0;
}
// Ended by ESIC Regulation Form 5


// For ESIC Accident Report
function ESICAccidentReportFromEmployerInsert() {
	var natureOfInjuryCombo = document.getElementById("natureOfInjuryCombo");
	var natureOfInjuryComboVal = natureOfInjuryCombo.options[natureOfInjuryCombo.selectedIndex].text;
	var locationOfInjuryCombo = document.getElementById("locationOfInjuryCombo");
	var locationOfInjuryComboVal = locationOfInjuryCombo.options[locationOfInjuryCombo.selectedIndex].text;
	if (document.getElementById("branchOffice").value == "") {
		alert("Please enter branch office");
		document.getElementById("branchOffice").focus();
		return false;
	}
	if (document.getElementById("department").value == "") {
		alert("Please enter department");
		document.getElementById("department").focus();
		return false;
	}
	if (document.getElementById("shiftName").selectedIndex == 0) {
		alert("Please select shiftName");
		document.getElementById("shiftName").focus();
		return false;
	}
	if (document.getElementById("shiftHours").selectedIndex == 0) {
		alert("Please select shift hours");
		document.getElementById("shiftHours").focus();
		return false;
	}
	if (document.getElementById("shiftMin").selectedIndex == 0) {
		alert("Please select shift mins");
		document.getElementById("shiftMin").focus();
		return false;
	}
	if (document.getElementById("hoursWorkStarted").selectedIndex == 0) {
		alert("Please select time at which  work Started ");
		document.getElementById("hoursWorkStarted").focus();
		return false;
	}
	if (document.getElementById("minWorkStarted").selectedIndex == 0) {
		alert("Please select time at which  work Started ");
		document.getElementById("minWorkStarted").focus();
		return false;
	}
	if (document.getElementById("accidentDate").value == "") {
		alert("Please enter accident date");
		document.getElementById("accidentDate").focus();
		return false;
	}
	if (document.getElementById("hoursOfAccident").selectedIndex == 0) {
		alert("Please select time of accident ");
		document.getElementById("hoursOfAccident").focus();
		return false;
	}
	if (document.getElementById("minOfAccident").selectedIndex == 0) {
		alert("Please select time of accident ");
		document.getElementById("minOfAccident").focus();
		return false;
	}
	if (document.getElementById("placeOfAccident").value == "") {
		alert("Please enter placeOfAccident");
		document.getElementById("placeOfAccident").focus();
		return false;
	}
	if (document.getElementById("natureOfInjuryCombo").selectedIndex == 0) {
		alert("Please select nature of injury");
		document.getElementById("natureOfInjuryCombo").focus();
		return false;
	}
	if (document.getElementById("locationOfInjuryCombo").selectedIndex == 0) {
		alert("Please select location of injury");
		document.getElementById("locationOfInjuryCombo").focus();
	}
	if (natureOfInjuryComboVal == "Others" && document.getElementById("natureOfInjuryText").value == "") {
		alert("Please enter nature and extent of injury ");
		document.getElementById("natureOfInjuryText").focus();
		return false;
	}
	if (locationOfInjuryComboVal == "Others" && document.getElementById("locationOfInjuryText").value == "") {
		alert("Please enter location of injury ");
		document.getElementById("locationOfInjuryText").focus();
		return false;
	}
	if (document.getElementById("addressOfPremises").value == "") {
		alert("Please enter address of premises");
		document.getElementById("addressOfPremises").focus();
		return false;
	}
	if (document.getElementById("dispensaryAlloted").value == "") {
		alert("Please enter dispensary alloted");
		document.getElementById("dispensaryAlloted").focus();
		return false;
	}
	if (document.getElementById("doctorDispensary").value == "") {
		alert("Please enter Dr. or Dispensary alloted");
		document.getElementById("doctorDispensary").focus();
		return false;
	}
	if (document.getElementById("witnessOneName").value == "") {
		alert("Please enter witness name");
		document.getElementById("witnessOneName").focus();
		return false;
	}
	if (document.getElementById("witnessOneAddress").value == "") {
		alert("Please enter witness address");
		document.getElementById("witnessOneAddress").focus();
		return false;
	}
	if (document.getElementById("witnessTwoName").value == "") {
		alert("Please enter witness name");
		document.getElementById("witnessTwoName").focus();
		return false;
	}
	if (document.getElementById("witnessTwoAddress").value == "") {
		alert("Please enter witness address");
		document.getElementById("witnessTwoAddress").focus();
		return false;
	}
	if (document.getElementById("whetherWagesInFullOrPartPayable").selectedIndex == 0) {
		alert("Please select wages in full or part are payable to him for the day of accident ");
		document.getElementById("whetherWagesInFullOrPartPayable").focus();
		return false;
	}
	if (document.getElementById("whetherInjuredPersonWasAnEmployee").selectedIndex == 0) {
		alert("Please select the injured person was an employee under section 2(9) of the Act on the day of accident ");
		document.getElementById("whetherInjuredPersonWasAnEmployee").focus();
		return false;
	}
	if (document.getElementById("whetherContributionWasPayable").selectedIndex == 0) {
		alert("Please select contribution was  payable by him for the day on which accident occured ");
		document.getElementById("whetherContributionWasPayable").focus();
		return false;
	}
	if (document.getElementById("causeOfAccident").value == "") {
		alert("Please enter brief description of how the accident occurred");
		document.getElementById("causeOfAccident").focus();
		return false;
	}
	if (document.getElementById("provisionOfAnyLaw").selectedIndex == 0) {
		alert("Please select the provision of any law applicable to him   ");
		document.getElementById("provisionOfAnyLaw").focus();
		return false;
	}
	if (document.getElementById("anyOrdersGivenBy").selectedIndex == 0) {
		alert("Please select any orders given by or on behalf of his employer   ");
		document.getElementById("anyOrdersGivenBy").focus();
		return false;
	}
	if (document.getElementById("actingWithoutInstruction").selectedIndex == 0) {
		alert(" select acting without instruction from his employer   ");
		document.getElementById("actingWithoutInstruction").focus();
		return false;
	}
	if (document.getElementById("actDone").selectedIndex == 0) {
		alert(" select acting without instruction from his employer   ");
		document.getElementById("actDone").focus();
		return false;
	}
	if (document.getElementById("travellingAsPassenger").selectedIndex == 0) {
		alert(" select as a passenger to or from his place of work ");
		document.getElementById("travellingAsPassenger").focus();
		return false;
	}
	if (document.getElementById("permissionOfEmployer").selectedIndex == 0) {
		alert(" select with the express or implied permission of his employer   ");
		document.getElementById("permissionOfEmployer").focus();
		return false;
	}
	if (document.getElementById("transport").selectedIndex == 0) {
		alert(" select transport  ");
		document.getElementById("transport").focus();
		return false;
	}
	if (document.getElementById("vehicleOperated").selectedIndex == 0) {
		alert("select vehicle Operated  ");
		document.getElementById("vehicleOperated").focus();
		return false;
	} else {
		return true;
	}
}
// Ended by ESIC Accident Report


// For Update ESIC Accident Report
function ESICAccidentReportFromEmployerUpdate() {
	var natureOfInjuryCombo = document.getElementById("natureOfInjuryCombo");
	var natureOfInjuryComboVal = natureOfInjuryCombo.options[natureOfInjuryCombo.selectedIndex].text;
	var locationOfInjuryCombo = document.getElementById("locationOfInjuryCombo");
	var locationOfInjuryComboVal = locationOfInjuryCombo.options[locationOfInjuryCombo.selectedIndex].text;
	if (document.getElementById("branchOffice").value == "") {
		alert("Please enter branch office");
		document.getElementById("branchOffice").focus();
		return false;
	}
	if (document.getElementById("department").value == "") {
		alert("Please enter department");
		document.getElementById("department").focus();
		return false;
	}
	if (document.getElementById("shiftName").selectedIndex == 0) {
		alert("Please select shiftName");
		document.getElementById("shiftName").focus();
		return false;
	}
	if (document.getElementById("shiftHours").selectedIndex == 0) {
		alert("Please select shift hours");
		document.getElementById("shiftHours").focus();
		return false;
	}
	if (document.getElementById("shiftMin").selectedIndex == 0) {
		alert("Please select shift mins");
		document.getElementById("shiftMin").focus();
		return false;
	}
	if (document.getElementById("hoursWorkStarted").selectedIndex == 0) {
		alert("Please select time at which  work Started ");
		document.getElementById("hoursWorkStarted").focus();
		return false;
	}
	if (document.getElementById("minWorkStarted").selectedIndex == 0) {
		alert("Please select time at which  work Started ");
		document.getElementById("minWorkStarted").focus();
		return false;
	}
	if (document.getElementById("accidentDate").value == "") {
		alert("Please enter accident date");
		document.getElementById("accidentDate").focus();
		return false;
	}
	if (document.getElementById("hoursOfAccident").selectedIndex == 0) {
		alert("Please select time of accident ");
		document.getElementById("hoursOfAccident").focus();
		return false;
	}
	if (document.getElementById("minOfAccident").selectedIndex == 0) {
		alert("Please select time of accident ");
		document.getElementById("minOfAccident").focus();
		return false;
	}
	if (document.getElementById("placeOfAccident").value == "") {
		alert("Please enter placeOfAccident");
		document.getElementById("placeOfAccident").focus();
		return false;
	}
	if (natureOfInjuryComboVal == "Others" && document.getElementById("natureOfInjuryText").value == "") {
		alert("Please enter nature and extent of injury ");
		document.getElementById("natureOfInjuryText").focus();
		return false;
	}
	if (locationOfInjuryComboVal == "Others" && document.getElementById("locationOfInjuryText").value == "") {
		alert("Please enter location of injury ");
		document.getElementById("locationOfInjuryText").focus();
		return false;
	}
	if (document.getElementById("addressOfPremises").value == "") {
		alert("Please enter address of premises");
		document.getElementById("addressOfPremises").focus();
		return false;
	}
	if (document.getElementById("dispensaryAlloted").value == "") {
		alert("Please enter dispensary alloted");
		document.getElementById("dispensaryAlloted").focus();
		return false;
	}
	if (document.getElementById("doctorDispensary").value == "") {
		alert("Please enter Dr. or Dispensary alloted");
		document.getElementById("doctorDispensary").focus();
		return false;
	}
	if (document.getElementById("witnessOneName").value == "") {
		alert("Please enter witness name");
		document.getElementById("witnessOneName").focus();
		return false;
	}
	if (document.getElementById("witnessOneAddress").value == "") {
		alert("Please enter witness address");
		document.getElementById("witnessOneAddress").focus();
		return false;
	}
	if (document.getElementById("witnessTwoName").value == "") {
		alert("Please enter witness name");
		document.getElementById("witnessTwoName").focus();
		return false;
	}
	if (document.getElementById("witnessTwoAddress").value == "") {
		alert("Please enter witness address");
		document.getElementById("witnessTwoAddress").focus();
		return false;
	}
	if (document.getElementById("whetherWagesInFullOrPartPayable").selectedIndex == 0) {
		alert("Please select wages in full or part are payable to him for the day of accident ");
		document.getElementById("whetherWagesInFullOrPartPayable").focus();
		return false;
	}
	if (document.getElementById("whetherInjuredPersonWasAnEmployee").selectedIndex == 0) {
		alert("Please select the injured person was an employee under section 2(9) of the Act on the day of accident ");
		document.getElementById("whetherInjuredPersonWasAnEmployee").focus();
		return false;
	}
	if (document.getElementById("whetherContributionWasPayable").selectedIndex == 0) {
		alert("Please select contribution was  payable by him for the day on which accident occured ");
		document.getElementById("whetherContributionWasPayable").focus();
		return false;
	}
	if (document.getElementById("causeOfAccident").value == "") {
		alert("Please enter brief description of how the accident occurred");
		document.getElementById("causeOfAccident").focus();
		return false;
	}
	if (document.getElementById("provisionOfAnyLaw").selectedIndex == 0) {
		alert("Please select the provision of any law applicable to him   ");
		document.getElementById("provisionOfAnyLaw").focus();
		return false;
	}
	if (document.getElementById("anyOrdersGivenBy").selectedIndex == 0) {
		alert("Please select any orders given by or on behalf of his employer   ");
		document.getElementById("anyOrdersGivenBy").focus();
		return false;
	}
	if (document.getElementById("actingWithoutInstruction").selectedIndex == 0) {
		alert(" select acting without instruction from his employer   ");
		document.getElementById("actingWithoutInstruction").focus();
		return false;
	}
	if (document.getElementById("actDone").selectedIndex == 0) {
		alert(" select acting without instruction from his employer   ");
		document.getElementById("actDone").focus();
		return false;
	}
	if (document.getElementById("travellingAsPassenger").selectedIndex == 0) {
		alert(" select as a passenger to or from his place of work ");
		document.getElementById("travellingAsPassenger").focus();
		return false;
	}
	if (document.getElementById("permissionOfEmployer").selectedIndex == 0) {
		alert(" select with the express or implied permission of his employer   ");
		document.getElementById("permissionOfEmployer").focus();
		return false;
	}
	if (document.getElementById("transport").selectedIndex == 0) {
		alert(" select transport  ");
		document.getElementById("transport").focus();
		return false;
	}
	if (document.getElementById("vehicleOperated").selectedIndex == 0) {
		alert("select vehicle Operated  ");
		document.getElementById("vehicleOperated").focus();
		return false;
	} else {
		return true;
	}
}
// Ended by Update ESIC Accident Report


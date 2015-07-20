	window.onload = function(){
  			
  			
  			//var locationId = document.getElementById('locationId');
  			//var spId = document.getElementById('spId');
  			//var spBranchId = document.getElementById('spBranchId');
  			//populateRequestforShift('locId', locationId, 'spId', spId, 'spBranchId', spBranchId, 'workOrderId', null); 
		  	//populateRequest('peLocId', locationId, 'designationId', null);
		  	//window.setTimeout("holdOnLoadDesignation()",500);
		  	//window.setTimeout("holdOnLoadWorkOrder()",400);
		  	var workOrderId = document.getElementById('workOrderId');
		  	var extensionId = document.getElementById('extensionId');
		  	//var spBranchId = document.getElementById('spBranchId');
		  	//document.getElementById('workOrderId').value = workOrderId.value;
		  	populateLocationsAccordingWorkOrderAndExtension('workOrderId', workOrderId, 'extensionId', extensionId, 'woLocDetailsAndLocationId', null);
		  	//populateRequestforShift('locId', locationId, 'spBranchId', spBranchId, 'workOrderId', workOrderId, 'designationId', null)
		  	window.setTimeout("holdOnLoadLocation()", 500);
		  }
		  //function holdOnLoadWorkOrder(){
		  function holdOnLoadLocation(){
		  	var woLocDetailsId = document.getElementById('woLocDetailsId');
		  	var locationId = document.getElementById('locationId');
		  	//alert(document.getElementById('woLocDetailsAndLocationId'));
		  	document.getElementById('woLocDetailsAndLocationId').value = woLocDetailsId.value +','+ locationId.value;
		  	populateRequest('woLocDetailsId', woLocDetailsId, 'designationId', null);
		  	window.setTimeout("holdOnLoadDesignation()", 500);
		  }
		  
		  function holdOnLoadDesignation(){
		  	var locationId = document.getElementById('locationId');
		  	var woLocDetailsId = document.getElementById('woLocDetailsId');
		  	//alert('woLocDetailsId=='+woLocDetailsId.value);
		    var designationId = document.getElementById('tempDesignationId');
		    document.getElementById('designationId').value = designationId.value;
		   	populateRequestforInAndOutReport('peLocIdd', woLocDetailsId, 'designationId', designationId, 'shiftId', null);
		   // populateRequestforInAndOutReport('peLocIdd', locationId, 'designationId', designationId, 'shiftId', null);
		    window.setTimeout("holdOnLoadShiftId()", 400);
		  }
		  function holdOnLoadShiftId(){
		  	var shiftId = document.getElementById('tempShiftId').value;
		  	document.getElementById('shiftId').value = shiftId;
		  }
	
		
	function onDisplayCheck(){
		  if(document.getElementById('workOrderId').selectedIndex ==0){
		  alert("Please select Work Order Id");
		  document.getElementById('workOrderId').focus();
		  return false;
		  }
		  if(document.getElementById('locationId').selectedIndex ==0){
		  alert("Please select location");
		  document.getElementById('locationId').focus();
		  return false;
		  }
		  if(document.getElementById('workOrderId').selectedIndex ==0){
		  alert("Please select work order");
		  document.getElementById('workOrderId').focus();
		  return false;
		  }
		  if(document.getElementById('designationId').selectedIndex ==0){
		  alert("Please select designation");
		  document.getElementById('designationId').focus();
		  return false;
		  }
		  if(document.getElementById('shiftId').selectedIndex ==0){
		  alert("Please select shift");
		  document.getElementById('shiftId').focus();
		  return false;
		  }
		  //alert("=="+document.getElementById('shiftDate'));
		  if(document.getElementById('shiftDate')==null || document.getElementById('shiftDate').value == ''){
		  alert("Please select shift date");
		  document.getElementById('shiftDate').focus();
		  return false;
		  }
		  
	}
	
		function getWorkOrderAndExtensionIds(workOrderExtensionId){
  			var workOrderExtensionId = document.getElementById('workOrderExtensionId').value;
  			var workOrderExtensionIdTemp = workOrderExtensionId.split(",");
  			var workOrderId = workOrderExtensionIdTemp[0];
  			var extensionId = workOrderExtensionIdTemp[1];
  			document.getElementById('workOrderId').value = workOrderId;
  			document.getElementById('extensionId').value = extensionId;
  			//alert("wo-"+workOrderId+"ex-"+extensionId);
  		}
  		function getWOLocDetailsAndLocationIds(woLocDetailsAndLocationId){
  			var woLocDetailsAndLocationId = document.getElementById('woLocDetailsAndLocationId').value;
  			var woLocDetailsAndLocationIdTemp = woLocDetailsAndLocationId.split(",");
  			var woLocDetailsId = woLocDetailsAndLocationIdTemp[0];
  			var locationId = woLocDetailsAndLocationIdTemp[1];
  			document.getElementById('woLocDetailsId').value = woLocDetailsId;
  			document.getElementById('locationId').value = locationId;
  			//alert("wo-"+workOrderId+"ex-"+extensionId);
  		}
	function setRadioEmpId(selectedRadioEmpId){
		document.getElementById('selectedRadioEmpId').value = selectedRadioEmpId;
		//alert('set=='+document.getElementById('selectedRadioEmpId').value);
	}
	 function putValuesToMasterForm(selectShiftIdReplacing, employeeIdReplacing, employeeNameReplacing, popEmpId){
		  	//alert('selectshiftId=='+ selectShiftIdReplacing+'empId=='+ employeeIdReplacing +'empName=='+ employeeNameReplacing+"rowCountNo="+rowCountNo);
		  	var empId = document.getElementById('selectedRadioEmpId').value;
		  	//alert(empId);
		  	if((document.getElementById('radioButton'+empId)!=null)&&(document.getElementById('radioButton'+empId).disabled==false)){	
		  		document.getElementById('replacingSelectShiftEmpIds'+empId).value = selectShiftIdReplacing;
		  		document.getElementById('employeeIds'+empId).value=employeeIdReplacing;
		  		document.getElementById('actualEmployeeIds'+empId).value=popEmpId; 
		  		document.getElementById('employeeNames'+empId).value=employeeNameReplacing;
		  		
		  			var employeeId = document.getElementById('employeeIds'+empId);
		  			
		  			var employeeName = document.getElementById('employeeNames'+empId);
		  			
		  			if(employeeId != null && employeeId!= undefined && employeeId.value != ''){
		  				if(employeeName != null && employeeName!= undefined && employeeName.value != ''){
		  					//alert(document.getElementById(rowCountNo).value);
		  					document.getElementById(empId).checked=true;
		  					document.getElementById('radioButton'+empId).disabled=true;
		  					document.getElementById('row'+popEmpId).style.display = 'none';
		  					document.getElementById('radioButton'+empId).value = popEmpId;
		  					//removeRows();
		  				}
		  			}
		  	}
	 }
	
		  
		  function colorset(empId){
			document.getElementById('row'+empId).style.backgroundColor ="#ededed";
		  }
		  function mout(empId) {
 			document.getElementById('row'+empId).style.backgroundColor = "#FFFFFF";
		  }
		 
		  function clearRecord(empId){
		  	if(document.getElementById('radioButton'+empId).disabled==true ){
		  		document.getElementById('employeeIds'+empId).value='';
		  		document.getElementById('employeeNames'+empId).value='';
		  		document.getElementById('radioButton'+empId).disabled=false;
		  		var value = document.getElementById('radioButton'+empId).value;
		  		showRow(value);
		  		document.getElementById('radioButton'+empId).checked = true;
		  		setRadioEmpId(empId);
		  		//alert(document.getElementById('radioButton'+empId).checked);
		  				  		
		  	}
		  	else{
		  		document.getElementById(empId).checked=false;
		  	}
		  }
		  function showRow(empId){
		  	document.getElementById('row'+empId).style.display = '';
		  }
		function removeRow(empId){
			//alert('removing== row'+count);
			document.getElementById('row'+empId).style.display = 'none';
		}
		function removeRows(){
		  	var radioButtons = document.getElementById("table").getElementsByTagName("input");
		 	for(i=0;i<radioButtons.length;i++){
		 		if(radioButtons[i].type=='radio'){
		 		var value = radioButtons[i].value;
		 		//alert(radioButtons[i].disabled);	
		 			if(value!='on' && radioButtons[i].disabled){
		 				//window.setTimeout("removeRow('"+value+"')",100);
						removeRow(value);
		 			}
		 		}	 						
		 	}
		}
		
		function onPopUpBodyLoad(){
			//alert('now calling');
			removeRows();
		}
		function onSubmit(){
			 	var replacingSelectShiftEmpIds = "";
				var replacedAbsentSelectShiftEmpIds = "";
				var empIds = "";
				var empNames = "";		 	
			 	for (i=0; i < document.getElementsByTagName("input").length; i++) {
					if (document.getElementsByTagName('input')[i].type == 'checkbox'){
						//alert('ch---'+document.getElementsByTagName('input')[i].checked);
						if(document.getElementsByTagName('input')[i].checked){
							var count = document.getElementsByTagName('input')[i].value;
							replacingSelectShiftEmpIds += document.getElementById('replacingSelectShiftEmpIds'+count).value + ",";
							replacedAbsentSelectShiftEmpIds += document.getElementById('replacedAbsentSelectShiftEmpIds'+count).value + ",";
							empIds += document.getElementById('actualEmployeeIds'+count).value + ","; //Modified: 02/06/11
							empNames += document.getElementById('employeeNames'+count).value + ",";
						}
					}
				}
				document.getElementById('selectedReplacingSelectShiftEmpIds').value = replacingSelectShiftEmpIds;
				document.getElementById('selectedReplacedAbsentSelectShiftEmpIds').value = replacedAbsentSelectShiftEmpIds;
				document.getElementById('employeeId').value = empIds;
				document.getElementById('employeeName').value = empNames;
				//alert(document.getElementById('selectedReplacingSelectShiftEmpIds').value);
				//alert(document.getElementById('selectedReplacingSelectShiftEmpIds').value);
								
				if(replacingSelectShiftEmpIds == "" || empIds.split(",")[0] == ""){
					alert('Please asign atleast one Exra Duty');
					return false; 
				} 
				 if(document.getElementById('designationId').selectedIndex == 0){
		  			alert("Please select designation");
		  			document.getElementById('designationId').focus();
		  			return false;
		 	 	 }
				 if(document.getElementById('shiftId').selectedIndex == 0){
		 			 holdOnLoadShiftId();
		 			 if(document.getElementById('shiftId').selectedIndex == 0){
		 			 	holdOnLoadDesignation();
		 			 	if(document.getElementById('shiftId').selectedIndex == 0){
		 			 		alert("Please select shift");
		  					document.getElementById('shiftId').focus();
				     		return false;
				     	}
		  		 	 }
		  		 }
		  		
				var temp=confirm('Are you sure?');
					if(temp==true) {
						return true;
					}else {
						return false;
					}
		}

		function hidePopUp(){
			document.getElementById("maximize").style.display = '';
			document.getElementById("childPopUp").style.display = 'none';
			document.getElementById("minimize").style.display = 'none';
			//alert(document.getElementById("maximize").style.display);
			//document.getElementById("submit").style.display = '';
		}
		
		function showPopUp(){
			document.getElementById("childPopUp").style.display = '';
			document.getElementById("minimize").style.display = '';
			document.getElementById("maximize").style.display = 'none';
			//document.getElementById("submit").style.display = '';
		}
		
		
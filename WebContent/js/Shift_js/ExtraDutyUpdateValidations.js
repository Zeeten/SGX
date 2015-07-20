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
	 function putValuesToMasterForm(selectShiftIdReplacing, employeeIdReplacing, employeeNameReplacing, popUpEmpId){
		  	//alert('selectshiftId=='+ selectShiftIdReplacing+'empId=='+ employeeIdReplacing +'empName=='+ employeeNameReplacing+"rowCountNo"+rowCountNo);
		  	var empId = document.getElementById('selectedRadioEmpId').value;
		  	if(document.getElementById('radioButton'+empId).disabled==false){	
		  		//document.getElementById('replacingSelectShiftEmpIds'+rowCountNo).value = selectShiftIdReplacing;
		  		var previosEmpId = '';
		  		if(document.getElementById('employeeIds'+empId)!=null){
		  			var previosEmpId = document.getElementById('employeeIds'+empId).value;	
		  		}
		  		   
		  		document.getElementById('employeeIds'+empId).value=employeeIdReplacing;
		  		document.getElementById('actualEmployeeIds'+empId).value=popUpEmpId;
		  		document.getElementById('employeeNames'+empId).value=employeeNameReplacing;
		  		
		  			var employeeId = document.getElementById('employeeIds'+empId);
		  			var employeeName = document.getElementById('employeeNames'+empId);
		  			if(employeeId != null && employeeId!= undefined && employeeId.value != ''){
		  				if(employeeName != null && employeeName!= undefined && employeeName.value != ''){
		  					document.getElementById(empId).checked=true;
		  					document.getElementById('radioButton'+empId).disabled=true;
		  					document.getElementById('row'+popUpEmpId).style.display = 'none';
		  					document.getElementById('radioButton'+empId).value = popUpEmpId;
		  					showRow(previosEmpId);
		  				}
		  			}
		  	}
		  }
		  
		  function colorset(count){
			document.getElementById('row'+count).style.backgroundColor ="#ededed";
		  }
		  function mout(count) {
 			document.getElementById('row'+count).style.backgroundColor = "#FFFFFF";
		  }
		 
		  function clearRecord(count){
		  	if(document.getElementById('radioButton'+count).disabled==true ){
		  		document.getElementById('employeeIds'+count).value='';
		  		document.getElementById('employeeNames'+count).value='';
		  		document.getElementById('radioButton'+count).disabled=false;
		  		document.getElementById('radioButton'+count).checked=true;
		  		var value = document.getElementById('radioButton'+count).value;
		  		showRow(value);
		  		document.getElementById('radioButton'+empId).checked = true;
		  		setRadioEmpId(empId);
		  				  		
		  	}
		  	else{
		  		document.getElementById(count).checked=false;
		  	}
		  }
		  function showRow(count){
		  	document.getElementById('row'+count).style.display = '';
		  }
		function removeRow(count){
			//alert('removing== row'+count);
			document.getElementById('row'+count).style.display = 'none';
		}
		function removeRows(){
		  	var input = document.getElementById("table").getElementsByTagName("input");
		 	var radioButtons = input;
		 	
		 	for(i=0;i<radioButtons.length;i++){
		 		
		 		if(radioButtons[i].type=='radio'){
		 		var value = radioButtons[i].value;
		 		//alert(radioButtons[i].disabled);	
		 			if(value!='on' && radioButtons[i].disabled ){
		 				window.setTimeout("removeRow('"+value+"')",100);
	
		 			}
		 		}	 						
		 	}
		}
		function removeRowsByTextBoxIds(){
			var input = document.getElementById("table").getElementsByTagName("input");
		 	var radioButtons = input;
		 	var textBoxes = input;
		 			 	
		 	for(k=0; k<textBoxes.length; k++){
		 		if(textBoxes[k].type == 'text' && textBoxes[k].name == 'employeeIds' && textBoxes[k].value!=''){
		 			//alert('textBoxes=='+textBoxes[k].value);
		 			window.setTimeout("removeRow('"+textBoxes[k].value+"')",100);
		 		}
		 	}
		}
		function onPopUpBodyLoad(){
			//alert('now calling');
			removeRowsByTextBoxIds();
		}
		function onSubmit(){
			 
				var empIds = "";
				var empNames = "";
				var flag = true;		 	
			 	for (i=0; i < document.getElementsByTagName("input").length; i++) {
					if (document.getElementsByTagName('input')[i].type == 'checkbox'){
						//alert('ch---'+document.getElementsByTagName('input')[i].checked);
						if(document.getElementsByTagName('input')[i].checked){
							var count = document.getElementsByTagName('input')[i].value;
							empIds += document.getElementById('actualEmployeeIds'+count).value + ",";
							
							flag = false;
						}
					}
				}
				if( flag || empIds.split(",")[0] == ""){
					alert('Please select atleast one Exra Duty to update');
					return false; 
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
		
		
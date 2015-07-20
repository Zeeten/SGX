function setRadioEmpId(selectedRadioEmpId){
		document.getElementById('selectedRadioEmpId').value = selectedRadioEmpId;
		//alert('set=='+document.getElementById('selectedRadioEmpId').value);
	}
	 function putValuesToMasterForm(selectShiftIdReplacing, employeeIdReplacing, employeeNameReplacing, popEmpId){
		  	//alert('selectshiftId=='+ selectShiftIdReplacing+'empId=='+ employeeIdReplacing +'empName=='+ employeeNameReplacing);
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
				 /*if(document.getElementById('designationId').selectedIndex == 0){
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
		  		 }*/
		  		
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
		
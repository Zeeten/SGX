	
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
		  		if(document.getElementById('actualEmployeeIds'+empId)!=null){
		  			var previosEmpId = document.getElementById('actualEmployeeIds'+empId).value;	
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
		//changed for contract id
		function removeRowsByTextBoxIds(){
			var input = document.getElementById("table").getElementsByTagName("input");
		 	var radioButtons = input;
		 	var textBoxes = input;
		 			 	
		 	for(k=0; k<textBoxes.length; k++){
		 		if(textBoxes[k].type == 'text' && textBoxes[k].name == 'actualEmployeeIds' && textBoxes[k].value!=''){
		 			//alert('textBoxes=='+textBoxes[k].value);
		 			window.setTimeout("removeRow('"+textBoxes[k].value+"')",100);
		 		}
		 	}
		}
		function onPopUpBodyLoad(){
			removeRowsByTextBoxIds();
		}
		function onSubmit(){
			 
				var empIds = "";
				var empNames = "";
				var flag = true;		 	
			 	for (i=0; i < document.getElementsByTagName("input").length; i++) {
					if (document.getElementsByTagName('input')[i].type == 'checkbox'){
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
		
		
//Created on: 25/01/11 by Atul

function checkOnClick1(EmployeeId){
			var post1='postIdsOne_'+EmployeeId;
			if(document.getElementById(post1).value=='0'){
			 	document.getElementById(EmployeeId).checked=false;
			}else{
			 document.getElementById(post1).value='0';
			 
			}
		}
		
		function checkOnClick2(EmployeeId){
			var post2='postIdsTwo_'+EmployeeId;
			if(document.getElementById(post2).value=='0'){
			 	document.getElementById(EmployeeId).checked=false;
			}else{
			 document.getElementById(post2).value='0';
			 
			}
		}		

		function checkOnClick3(EmployeeId){
			var post3='postIdsThree_'+EmployeeId;
			if(document.getElementById(post3).value=='0'){
			 	document.getElementById(EmployeeId).checked=false;
			}else{
			 document.getElementById(post3).value='0';
			 
			}
		}	

		function checkOnClick4(EmployeeId){
			var post4='postIdsFour_'+EmployeeId;
			if(document.getElementById(post4).value=='0'){
			 	document.getElementById(EmployeeId).checked=false;
			}else{
			 document.getElementById(post4).value='0';
			 
			}
		}	
  		function autoSelectRecordOne(EmployeeId){
			if(document.getElementById('postIdsOne_'+EmployeeId+'').value != 0 ){
				document.getElementById(EmployeeId + 'postIdsOne_').checked = true;
			}
			else{
				document.getElementById(EmployeeId + 'postIdsOne_').checked = false;
			}
        }
        
        function autoSelectRecordTwo(EmployeeId){
			if(document.getElementById('postIdsTwo_'+EmployeeId+'').value != 0 ){
				document.getElementById(EmployeeId + 'postIdsTwo_').checked = true;
			}
			else{
				document.getElementById(EmployeeId + 'postIdsTwo_').checked = false;
			}
        }
       
        function autoSelectRecordThree(EmployeeId){
			if(document.getElementById('postIdsThree_'+EmployeeId+'').value != 0 ){
				document.getElementById(EmployeeId + 'postIdsThree_').checked = true;
			}
			else{
				document.getElementById(EmployeeId + 'postIdsThree_').checked = false;
			}
        }
       
        function autoSelectRecordFour(EmployeeId){
			if(document.getElementById('postIdsFour_'+EmployeeId+'').value != 0 ){
				document.getElementById(EmployeeId + 'postIdsFour_').checked = true;
			}
			else{
				document.getElementById(EmployeeId + 'postIdsFour_').checked = false;
			}
        }
        
        function doValidation(){
			if(shiftAllocationRecordForm.location.selectedIndex==0){
				alert("Please select location");
				shiftAllocationRecordForm.location.focus();
				return false;
			}
			if(shiftAllocationRecordForm.designation.selectedIndex==0){
				alert("Please select designation");
				shiftAllocationRecordForm.designation.focus();
				return false;
			}
			if(shiftAllocationRecordForm.stDate.value == ""){
				alert("Please enter shift date");
				shiftAllocationRecordForm.stDate.focus();
				return false;
			}
			if(shiftAllocationRecordForm.stDate.value!=""){
		          var intFlag = 0;
			     var dtDate = shiftAllocationRecordForm.stDate.value; 
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
					if (userdate < currentdate) {
						alert("OT allocation date should not be less than current date \n");
						shiftAllocationRecordForm.stDate.focus();
						return false;
				 		}
			      }
			
			else{
			return true;
			}
		}
  
		var addData = "";
			function onSubmitForm(){
				var empIds = "";
			 	var empName = "";
			 	var postIdsOne = "";
			 	var postIdsTwo = "";
			 	var postIdsThree = "";
			 	var postIdsFour = "";
			 	var shiftForFRow = "";
			 	var shiftForSRow = "";
			 	var shiftForTRow = "";
			 	var shiftForLRow ="";
			 	for (i=0; i < document.getElementsByTagName('input').length; i++) {
			 	
					if (document.getElementsByTagName('input')[i].type == 'checkbox'){
					
						if(document.getElementsByTagName('input')[i].checked){
						
							var id = document.getElementsByTagName('input')[i].value;
							empIds += document.getElementById('hiddenEmpIds_'+id+'').value + ",";
							empName += document.getElementById('hiddenEmpNames_'+id+'').value + ",";
							postIdsOne += document.getElementById('postIdsOne_'+id+'').value + ",";
							postIdsTwo += document.getElementById('postIdsTwo_'+id+'').value + ",";
							postIdsThree += document.getElementById('postIdsThree_'+id+'').value + ",";
							
							if(document.getElementById('postIdsFour_'+id+'') != null){
							postIdsFour += document.getElementById('postIdsFour_'+id+'').value + ",";
							}else {
							postIdsFour += "0" + ",";
							}
							
							if(document.getElementById('shiftForFirstRow_'+id+'') != null){
							shiftForFRow += document.getElementById('shiftForFirstRow_'+id+'').value + ",";
							}
							if(document.getElementById('shiftForSecoundRow_'+id+'') != null){
							shiftForSRow += document.getElementById('shiftForSecoundRow_'+id+'').value + ",";
							}
							if(document.getElementById('shiftForThirdRow_'+id+'') != null){
							shiftForTRow += document.getElementById('shiftForThirdRow_'+id+'').value + ",";
							}
							if(document.getElementById('shiftForFourthRow_'+id+'') != null){
							shiftForLRow += document.getElementById('shiftForFourthRow_'+id+'').value + ",";
							}else{
							shiftForLRow +="999" + ",";
							}						
						}
						
					}
				}
				document.getElementById('selectedEmpIds').value = empIds;
				
				document.getElementById('selectedEmpNames').value = empName;
				
				document.getElementById('selectedPostIdsOne').value = postIdsOne;
				
				document.getElementById('selectedPostIdsTwo').value = postIdsTwo;
								
				document.getElementById('selectedPostIdsThree').value = postIdsThree;
				
				document.getElementById('selectedPostIdsFour').value = postIdsFour;
				
				if(shiftForFRow != 0){
				document.getElementById('selectedshiftForFirstRow').value = shiftForFRow;
				}
				if(shiftForSRow != 0){
				document.getElementById('selectedshiftForSecoundRow').value = shiftForSRow;
				}
				if(shiftForTRow != 0){
				document.getElementById('selectedshiftForThirdRow').value = shiftForTRow;
				}
				if(shiftForLRow != 0){
				document.getElementById('selectedshiftForFourthRow').value = shiftForLRow;
				}
				
				
				if(postIdsOne == "" ||postIdsTwo == "" || postIdsThree == "" || postIdsFour == ""){
				 alert("Please select atleast one")
					return false;
				}
				
				var temp=confirm('Please check all details for correction if any, before submit.');
					if(temp==true) {
					return true;
					}else {
					return false;
					}
				return false;
		}
//Created on: 25/01/11 by Atul
			
			
		  window.onload = function(){
		  	var workOrderId = document.getElementById('workOrderId');
		  	var extensionId = document.getElementById('extensionId');
		  	populateLocationsAccordingWorkOrderAndExtension('workOrderId', workOrderId, 'extensionId', extensionId, 'woLocDetailsAndLocationId', null);
		  	window.setTimeout("holdOnLoadLocation()", 500);
		  }
		
		  function holdOnLoadLocation(){
		  	var woLocDetailsId = document.getElementById('woLocDetailsId');
		  	var locationId = document.getElementById('locationId');
		  	document.getElementById('woLocDetailsAndLocationId').value = woLocDetailsId.value +','+ locationId.value;
		  	populateRequest('woLocDetailsId', woLocDetailsId, 'designationId', null);
		  	window.setTimeout("holdOnLoadDesignation()", 500);
		  }
		  
		  function holdOnLoadDesignation(){
		    var designationId = document.getElementById('tempDesignationId');
		    //alert('tempDesignationId='+tempDesignationId.value);
		    document.getElementById('designationId').value = designationId.value;
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
			function onSubmitForm(){
			 	var postIds = "";
			 	var shiftIds = "";
			 	
			 	for (i=0; i < document.getElementsByTagName('input').length; i++) {
					if (document.getElementsByTagName('input')[i].type == 'checkbox'){
						if(document.getElementsByTagName('input')[i].checked){
							var id = document.getElementsByTagName('input')[i].value;
							if((document.getElementById('shiftIds_'+id+'').selectedIndex==0)&&
							   (document.getElementById('postIds_'+id+'').selectedIndex==0)){
								alert("Please select Sub Location, Shift");
								document.getElementById('shiftIds_'+id+'').focus();
								return false;
							}
							else {
							postIds += document.getElementById('postIds_'+id+'').value + ",";
							shiftIds += document.getElementById('shiftIds_'+id+'').value + ",";
							}
						}
					}
				}
				if(shiftIds == "" || postIds == ""){
					alert('Please assign atleast one shift');
					return false;
				}
				
			      var temp=confirm('Please check all details for correction if any, before submit.');
					if(temp==true) {
					return true;
					}else {
					return false;
					}
				}
				
		function onDisplay(){
		
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
		  if(document.getElementById('designationId').selectedIndex ==0){
		  alert("Please select designation");
		  document.getElementById('designationId').focus();
		  return false;
		  }
		  if(document.getElementById('yearId').selectedIndex ==0){
		  alert("Please select year");
		  document.getElementById('yearId').focus();
		  return false;
		  }
		  if(document.getElementById('monthId').selectedIndex ==0){
		  alert("Please select month");
		  document.getElementById('monthId').focus();
		  return false;
		  }
		  if(document.getElementById('weekId').selectedIndex ==0){
		  	alert("Please select week");
		  	document.getElementById('weekId').focus();
		  	return false;
		  }
		  if(document.getElementById('monthId').selectedIndex !=0){
			  var currentDate = new Date();
			  var currentMonth = currentDate.getMonth() + 1;
			  var currentYear = currentDate.getFullYear();
			  var month = document.getElementById('monthId').value;
			  var year = document.getElementById('yearId').value;
			   if(currentMonth > month && currentYear == year){
			 	     alert("Selected month should not been less than current month");
			 	     document.getElementById('monthId').focus();
		 		     return false;
		 	  	}
		 	 }
		  else{
		  return true;
		  }
		}	
		function checkOnClick(id){
			var post='postIds_'+id;
			var shift='shiftIds_'+id;
			var dept='deptIds_'+id;
			var subDept='subDeptIds_'+id;
			if(document.getElementById(post).value=='0' && document.getElementById(shift).value=='0' && document.getElementById(dept).selectedIndex=='0'){
			 	document.getElementById(id).checked=false;
				alert("Please select Sub Location, Shift, Department");
			}else{
			
			 document.getElementById(post).value='0';
			 document.getElementById(shift).value='0';
			 document.getElementById(dept).selectedIndex='0';
			 document.getElementById(subDept).selectedIndex='0';
			 document.getElementById(id).checked=false;
			}
		}	
		
		function autoSelectRecord(id){
			if(document.getElementById('postIds_'+id+'').value != 0 
				&& document.getElementById('shiftIds_'+id+'').value != 0
				&& document.getElementById('deptIds_'+id+'').value != 0){
				document.getElementById(id).checked = true;
			}else{
				document.getElementById(id).checked = false;
			}
        }
        
         function dept(id){
        	var p = document.getElementById('postIds_'+id+'');
			var d = document.getElementById('deptIds_'+id+'');
        	populateRequestForDeptBySubLocation(id,'postIds', p, d, null);
        	//window.setTimeout('aa()',1000);
        		
        }
        
         function subDept(id){
        	var p = document.getElementById('postIds_'+id+'');
			var d = document.getElementById('deptIds_'+id+'');
			var sd = document.getElementById('subDeptIds_'+id+'');
        	populateRequestForSubDeptByDeptIdAndSubLocationId(id,'postIds1', p,'deptIds',d, sd, null);	
        }
             
        function onDisplayCheck(){
        if(document.getElementById('locationId').selectedIndex ==0){
		  alert("Please select location");
		  document.getElementById('locationId').focus();
		  return false;
		  }
		  if(document.getElementById('designationId').selectedIndex ==0){
		  alert("Please select designation");
		  document.getElementById('designationId').focus();
		  return false;
		  }
		  if(document.getElementById('shiftDate').value ==''){
		  alert("Please select Shift Date");
		  document.getElementById('shiftDate').focus();
		  return false;
		  }
		  if(document.getElementById('shiftDate').value ==''){
		  alert("Please select Shift Date");
		  document.getElementById('shiftDate').focus();
		  return false;
		  }
		 if (isNaN(document.getElementById("empId")) && document.getElementById("empId").value != "") {
			alert("Please enter number");
			document.getElementById("empId").value = "";
			document.getElementById("empId").focus();
			return false;
		 }
		
        }
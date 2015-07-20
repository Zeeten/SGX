 var xmlhttpBranchDelegate;
function loadXMLBranchDelegate()
{

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttpBranchDelegate=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttpBranchDelegate=new ActiveXObject("Microsoft.XMLHTTP");
}
}
 

function selectBranchDelegate()
{
if(document.getElementById('branchId').value==-1)
{
	
	alert("Select Branch");
	
	document.getElementById('branchId').focus();
	return false;


}

else
{
	
	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	
	return true;
}	
	
}






function showstuff(boxid){
  
 
   document.getElementById(boxid).style.visibility="visible";
}

function hideshowstuffAddUpdateDelegateByHOD(currentObj){
//alert(currentObj.value);

	if(document.getElementById('roleId').value=="9")
	{
 document.getElementById('employeeIdAddUpdateDelegateByHODDiv1').innerHTML="Enter Employee's id";
document.getElementById('employeeIdAddUpdateDelegateByHODDiv2').innerHTML=
'<input type="" name="employeeId" id="employeeId" size="10"  />';
		
		
	}

else
{
	document.getElementById('employeeIdAddUpdateDelegateByHODDiv1').innerHTML="";
document.getElementById('employeeIdAddUpdateDelegateByHODDiv2').innerHTML=
'<input type="hidden" name="employeeId" id="employeeId" size="10"  />'
	
	
}



	
  
  }



function AddUpdateDelegateByHOD()
{
	
	
	try
	{
	
	//alert(document.getElementById('roleId').value);
	
	if(document.getElementById('roleId').value==-1)
	{
		document.getElementById('employeeId').value="";
		
	}
	
	
	 if(document.getElementById('departmentType').value=='NOSPOPS')
	{
		
		if(document.getElementById('employeeId').value=='')
	{
		alert("Enter Employee's Id");
	document.getElementById('employeeId').focus();
	return false;
	}
	}
	else if(document.getElementById('departmentType').value=='SPOPS')
	{
		
		
	if(document.getElementById('roleId').value==-1  )
	{
		alert('Select Designation');
		document.getElementById('roleId').focus();
		return false;
	}	
		
	
	if(document.getElementById('roleId').value==9  )
	{
		
		//alert('asdasd'+document.getElementById('employeeId').value);
		 if(document.getElementById('employeeId').value=='')
		{
			alert("Enter Employee's Id");
	document.getElementById('employeeId').focus();
	return false;
			
		}
		
		
	}
	
	
		else 
		{
			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			///alert('elese');
			document.getElementById('employeeId').value=0;
			
		}
		
		
	
	
	
	
	}
	
	
	else
	{
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		return true;
	}
}
catch(e)
{
	document.getElementById('roleId').value=-1;
	
	alert("Select Designation");
return false;
}

}











function AddUpdateGroundDelegateByOfficeDelegate()
{
	
	try
	{
		
	
	
		if(document.getElementById('roleId').value==-1)
	{
		alert('Select Designation');
		document.getElementById('roleId').focus();
	return false;
	}
			else 
		{
			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			return true;
			
		}
		
}
catch(e)
{
	
	return false;
}

}








function checkBranchHead()
{
	try
	{
	
	
	if(document.getElementById('employeeId').value=='')
	{
		
		alert("Enter Employee's Id");
		document.getElementById('employeeId').focus();
	
	return false;
	}
	if(document.getElementById('employeeName').value=='')
	{
		
		alert("Enter Employee's Name");
		document.getElementById('employeeName').focus();
	
	return false;
	}
	
	if(document.getElementById('password').value=='')
	{
		
		alert("Enter Password");
		document.getElementById('password').focus();
	
	return false;
	}
	
	
	if(  document.getElementById('employeePhone1').value=='' && document.getElementById('employeePhone2').value==''  )
	{
		
		alert("Enter Phone No.");
		document.getElementById('employeePhone1').focus();
	
	return false;
	}
	if(  document.getElementById('employeeEmail1').value=='' && document.getElementById('employeeEmail2').value==''  )
	{
		
		alert("Enter Email");
		document.getElementById('employeeEmail1').focus();
	
	return false;
	}
	
	
	
	
	else
	{
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		return true;
	}
	
	}
catch(e)
{
	
	return false;
}
	
}









function UpdateBranchHead()
{
	
	
	try
	{
	if(document.getElementById('employeeId').value=='')
	{
		
		alert("Enter Employee's Id");
		document.getElementById('employeeId').focus();
	
	return false;
	}
	if(document.getElementById('employeeName').value=='')
	{
		
		alert("Enter Employee's Name");
		document.getElementById('employeeName').focus();
	
	return false;
	}
	
	if(document.getElementById('password').value=='')
	{
		
		alert("Enter Password");
		document.getElementById('password').focus();
	
	return false;
	}
	if(document.getElementById('status').value==0)
	{	
		
		temp=confirm('Are u sure, you want to disallow ?');
		if(temp!=true)
		{
			return false;
			
		}
		else
		{
			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			return true;
		}
		
	}
	
	
	else
	{
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		return true;
	}
	
	}
catch(e)
{
	
	return false;
}
	
}




function changeLoginId(obj)

{
	
	document.getElementById('loginId').value=document.getElementById('wsxId').value+document.getElementById('branchCode').value
	+document.getElementById('departmentId').value+document.getElementById('roleId').value +obj.value;
	
document.getElementById('loginIdDiv').innerHTML=document.getElementById('wsxId').value+document.getElementById('branchCode').value
	+document.getElementById('departmentId').value+document.getElementById('roleId').value +obj.value;
	
	
}



function changeLoginIdHODUpdate(obj)

{
	
	document.getElementById('loginId').value=document.getElementById('wsxId').value+document.getElementById('branchCode').value
	+document.getElementById('departmentId').value+document.getElementById('roleId').value +obj.value;
	
document.getElementById('loginIdDiv').innerHTML=document.getElementById('wsxId').value+document.getElementById('branchCode').value
	+document.getElementById('departmentId').value+document.getElementById('roleId').value +obj.value;
	
}



function checkForSPDelegate()
{
	
	
	
//alert('sdsd');
	
	try
	{
	document.getElementById('roleId').value=document.getElementById('roleIdCombo').value;
	
	//alert(document.getElementById('roleId').value)
	if(document.getElementById('roleId').value==9 )
	{
	

	
		document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
				'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="OPS" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="DelegateOrHOD" />'	
	+'<input type="text" name="employeeId"  id="employeeId" class="branchButton4"  />';

	document.getElementById('EmployeeIdStatusDiv').innerHTML ="Enter employee's Id"; 
		//alert('kkrrrrookk'+EmployeeIdStatusTextBoxDiv.innerHTML);
	
	}
	
	else if(document.getElementById('roleId').value==8 )
	{
	
	//alert('kkkk');
	
		document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
				'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="OPS" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="DelegateOrHOD" />'	
	+'<input type="text" name="employeeId"  id="employeeId" class="branchButton4"  />';
	
	document.getElementById('EmployeeIdStatusDiv').innerHTML ="&nbsp;Enter employee's Id"; 
	
	
	}
	
	else
	{
	

	document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
				'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="OPS" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="DelegateOrHOD" />'	;
	document.getElementById('EmployeeIdStatusDiv').innerHTML ="";	
		
	}

}

catch(e)
{
//alert(e);	
}
	
} 


function checkHODOrDelegate()
{
	
		
		
		
		
	
	document.getElementById('roleId').value=0;
	try
	{
	if(document.getElementById('roleIdCombo').value==-1 )
	{
		
	document.getElementById('forOPSDiv1').innerHTML =
	"";
	document.getElementById('forOPSDiv2').innerHTML =
	'<input type="hidden" name="employeeId"  id="employeeId" value="0" class="branchButton4"  />';
	document.getElementById('check').value="0";
	
	}
	
	
	
	
	
	if(document.getElementById('roleIdCombo').value==8 )
	{
		///alert('sd');
document.getElementById('roleId').value=8

	document.getElementById('forOPSDiv1').innerHTML =
	"Enter employee's  Id";
	document.getElementById('forOPSDiv2').innerHTML =
	'<input type="text" name="employeeId"  id="employeeId" class="branchButton4"  />';
		document.getElementById('check').value="DelegateOnlyUpdate";
	
	}
	
	if(document.getElementById('roleIdCombo').value==9 )
	{
		///alert('sd');
document.getElementById('roleId').value=9

	document.getElementById('forOPSDiv1').innerHTML =
	"Enter employee's  Id";
	document.getElementById('forOPSDiv2').innerHTML =
	'<input type="text" name="employeeId"  id="employeeId" class="branchButton4"  />';
		document.getElementById('check').value="DelegateOnlyUpdate";
	
	}
	
if(document.getElementById('roleIdCombo').value==44 )
	{
	document.getElementById('roleId').value=44
	document.getElementById('forOPSDiv1').innerHTML =
	"";
	document.getElementById('forOPSDiv2').innerHTML =
	'<input type="hidden" name="employeeId"  id="employeeId" value="0" class="branchButton4"  />'
	document.getElementById('check').value="HODOnlyUpdate";
	
	}
}

catch(e)
{
	//alert(e);
}
}








function fetchEmployeeStatusForHOD(currentObj)
{

//alert(currentObj.value);
//document.getElementById('opsorotherdepartment').value='DelegateOrHOD';
	
	document.getElementById('check').value='DelegateOrHOD';
		
document.getElementById('roleId').value=currentObj.value;
//document.getElementById('EmployeeIdStatusDiv').innerHTML=''
//document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML=''
document.getElementById('DesignationStatusDiv').innerHTML=''
document.getElementById('DesignationTextBoxDiv').innerHTML=''
//document.getElementById('forOPSDiv1').innerHTML=''
//document.getElementById('forOPSDiv2').innerHTML=''
//alert("asdsdsd11111");

if( (currentObj.value)==-1   )
{
//document.getElementById('EmployeeIdStatusDiv').innerHTML=''
//document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML=''
document.getElementById('DesignationStatusDiv').innerHTML=''
document.getElementById('DesignationTextBoxDiv').innerHTML=''
//document.getElementById('forOPSDiv1').innerHTML=''
//document.getElementById('forOPSDiv2').innerHTML=''
document.getElementById('roleId').value="0";
}

//alert("sdsdsbbbbbbbb");
 if( (currentObj.value)==9 || (currentObj.value)==8  )
{

//alert("sdsdsds");
document.getElementById('DesignationStatusDiv').innerHTML =
"&nbsp;<font font-family: Verdana, Helvetica, Sans-Serif; >Enter employee's Id</font>"; 
	
			document.getElementById('DesignationTextBoxDiv').innerHTML = 
	'<input type="text" name="employeeId" align="center" id="employeeId"  />';
	
	
	
}


else
{
	

document.getElementById('DesignationStatusDiv').innerHTML ="";
	
			document.getElementById('DesignationTextBoxDiv').innerHTML = "";
	
		
	
}


	
}






function  selectBranchDelegateDepartmentHOD()
{
	try
	{
		//alert('sds');
		if(document.getElementById('designationId').value==-1)
		{
			alert("Select Designation");
			document.getElementById('designationId').focus();
			return false;
			
			
		}
		
		else if( (document.getElementById('designationId').value==9 || document.getElementById('designationId').value==44 || document.getElementById('designationId').value==8 )   && document.getElementById('employeeId').value=='')
		{
			
			
			alert("Enter Employee's Id");
			
	document.getElementById('employeeId').focus();
		return false;
			
			
			
			
		}
		 
		
		else
		{
			
		//	alert('ddd');
			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			
			return true;
		}
		
		
	}
	catch(e)
	{
		//alert(e);
		document.getElementById('designationId').value=-1;
		return false;
		
	}
}







function fetchEmployeeStatus(branchDepartmentId,branchId)
{
document.getElementById('EmployeeIdStatusDiv').innerHTML='<font face="Verdana" size="1">'+
'Please wait, fetching status..'

//alert("pppppppppppppp"+branchDepartmentId.value);

if(branchDepartmentId.value==-1  ||branchDepartmentId.value==0 )
{
document.getElementById('EmployeeIdStatusDiv').innerHTML=''
document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML=''
document.getElementById('DesignationStatusDiv').innerHTML=''
document.getElementById('DesignationTextBoxDiv').innerHTML=''
document.getElementById('forOPSDiv1').innerHTML=''
document.getElementById('forOPSDiv2').innerHTML=''
document.getElementById('BranchHeadTextDiv').innerHTML=''
document.getElementById('BranchHeadDiv').innerHTML=''

document.getElementById('roleId').value="0";
	
		
if(branchDepartmentId.value==0)
{
		
		
document.getElementById('roleId').value="43";
	}

}





 if(branchDepartmentId.value!=-1 || branchDepartmentId.value==0 )
{
	//alert("sdsds");
//document.getElementById('EmployeeIdStatusDiv').innerHTML='<font face="Verdana" size="1">'+
//'Please wait, fetching status..'
	
	loadXMLBranchDelegate();
 	//alert(document.getElementById('form1').basePath.value);
 	
 	basepath=document.getElementById('basePath').value;
	//alert(basepath);
	
	queryString=document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=findBranchDepartmentDetails"+"&branchId="+branchId.value+"&branchDepartmentId="+branchDepartmentId.value;
//alert("queryString=="+queryString);
	
	
	xmlhttpBranchDelegate.onreadystatechange = handleBranchDepartmentDetails;
	xmlhttpBranchDelegate.open("POST", queryString, true);
	xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranchDelegate.send(null);
		
		
}
	
	
}




function handleBranchDepartmentDetails() {
	
	
	try
	{
		
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
			document.getElementById('EmployeeIdStatusDiv').innerHTML="";
		//alert(xmlhttpBranch.responseText);
		//
		 //alert(obj1Branch.id);
		
	document.getElementById('roleId').value=0;

		
		document.getElementById('EmployeeIdStatusDiv').innerHTML = xmlhttpBranchDelegate.responseText;
	
	////alert(document.getElementById('opsorotherdepartment').value);
	//alert("dsdsds=="+document.getElementById('branchDepartmentId').value);
	
	if(document.getElementById('branchDepartmentId').value==0)
	{
			document.getElementById('EmployeeIdStatusDiv').innerHTML="";
			document.getElementById('roleId').value=43;
			
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML="";
			document.getElementById('forOPSDiv1').innerHTML =
			document.getElementById('forOPSDiv2').innerHTML =
			document.getElementById('DesignationStatusDiv').innerHTML=""
			document.getElementById('DesignationTextBoxDiv').innerHTML ="";
			document.getElementById('BranchHeadDiv').innerHTML =	'&nbsp;<font font-family: Verdana, Helvetica, Sans-Serif; >Branch'+'</font>'; 
	
			document.getElementById('BranchHeadTextDiv').innerHTML =xmlhttpBranchDelegate.responseText; 
	document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
	'<input type="hidden" name="check"  id="check" class="branchButton4" value="UpdateBranchHead" />'
	+	'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="UpdateBranchHead" />';
	
		
		
		
	}
	
	else
	{
	//alert('kkk');
	document.getElementById('BranchHeadTextDiv').innerHTML=''
document.getElementById('BranchHeadDiv').innerHTML=''
	//alert('opsorotherdepartment.value=='+document.getElementById('opsorotherdepartment').value);
	
	if(document.getElementById('opsorotherdepartment').value=='Facility')
	{
			
			//alert('OPS CALLED');
			document.getElementById('EmployeeIdStatusDiv').innerHTML="";
			
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML="";
			document.getElementById('forOPSDiv1').innerHTML =
			document.getElementById('forOPSDiv2').innerHTML =
			document.getElementById('DesignationStatusDiv').innerHTML=""
			document.getElementById('DesignationTextBoxDiv').innerHTML ="";
			document.getElementById('DesignationStatusDiv').innerHTML =
			'<font face="Verdana" >&nbsp; designation'+'</font>'; 
	
			document.getElementById('DesignationTextBoxDiv').innerHTML =xmlhttpBranchDelegate.responseText; 
	
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
	'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="Facility" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="DelegateOrHOD" />'	;
	
	
		}
	
	if(document.getElementById('opsorotherdepartment').value=='HouseKeeping')
	{
			
			//alert('OPS CALLED');
			document.getElementById('EmployeeIdStatusDiv').innerHTML="";
			
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML="";
			document.getElementById('forOPSDiv1').innerHTML =
			document.getElementById('forOPSDiv2').innerHTML =
			document.getElementById('DesignationStatusDiv').innerHTML=""
			document.getElementById('DesignationTextBoxDiv').innerHTML ="";
			document.getElementById('DesignationStatusDiv').innerHTML =
			'<font face="Verdana" >&nbsp; designation'+'</font>'; 
	
			document.getElementById('DesignationTextBoxDiv').innerHTML =xmlhttpBranchDelegate.responseText; 
	
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
	'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="HouseKeeping" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="DelegateOrHOD" />'	;
	
	
		}
	
	
	
	if(document.getElementById('opsorotherdepartment').value=='OPS')
	{
			
			//alert('OPS CALLED');
			document.getElementById('EmployeeIdStatusDiv').innerHTML="";
			
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML="";
			document.getElementById('forOPSDiv1').innerHTML =
			document.getElementById('forOPSDiv2').innerHTML =
			document.getElementById('DesignationStatusDiv').innerHTML=""
			document.getElementById('DesignationTextBoxDiv').innerHTML ="";
			document.getElementById('DesignationStatusDiv').innerHTML =
			'<font face="Verdana" >&nbsp;Designation'+'</font>'; 
	
			document.getElementById('DesignationTextBoxDiv').innerHTML =xmlhttpBranchDelegate.responseText; 
	
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
	'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="OPS" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="DelegateOrHOD" />'	;
	
	
		}
	
	
	if(document.getElementById('opsorotherdepartment').value=='NOOPS')
	{
			//alert('NOOPS');
			
			document.getElementById('DesignationStatusDiv').innerHTML ="";
			document.getElementById('DesignationTextBoxDiv').innerHTML="";
	document.getElementById('EmployeeIdStatusDiv').innerHTML = xmlhttpBranchDelegate.responseText;
	
	document.getElementById('EmployeeIdStatusDiv').innerHTML =
'<input type="hidden" name="opsorotherdepartment" id="opsorotherdepartment" value="NOOPS">'
+"&nbsp;Designation"; 
	
if(document.getElementById('branchType').value=="PE" )
{
	
document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML =
'<select name="roleIdCombo"  id="roleIdCombo" class="branchCombo1"  onchange="checkHODOrDelegate()"   >' 
		 +'<option value="-1">--Select--</option>'
    +'<option value="44">Department Head</option>'
   
    
    +'<option value="8">Office Delegate</option></select> '
  +'<input type="hidden" name="check"  id="check" class="branchButton4"  />';
   
	
}

if(document.getElementById('branchType').value=="SP" )
{
	
document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML =
'<select name="roleIdCombo"  id="roleIdCombo" class="branchCombo1"  onchange="checkHODOrDelegate()"   >' 
		 +'<option value="-1">--Select--</option>'
    +'<option value="44">Department Head</option>'
   
    
    +'<option value="9">Office Delegate</option></select> '
  +'<input type="hidden" name="check"  id="check" class="branchButton4"  />';
   
	
}

	
	
	document.getElementById('forOPSDiv1').innerHTML = "";	
	document.getElementById('forOPSDiv2').innerHTML = "";	
	}
	
if(document.getElementById('opsorotherdepartment').value=='HOD')
	{
		
		document.getElementById('forOPSDiv1').innerHTML = "";
			document.getElementById('forOPSDiv2').innerHTML = "";
			document.getElementById('DesignationStatusDiv').innerHTML ="";
			document.getElementById('DesignationTextBoxDiv').innerHTML="";
		document.getElementById('roleId').value=44;
		
		document.getElementById('EmployeeIdStatusDiv').innerHTML ="&nbsp;<font font-family: Verdana, Helvetica, Sans-Serif; >Enter department's head employee Id</font>"; 
	
			document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
	'<input type="text" name="employeeId"  id="employeeId" class="branchButton4"  />'
	+'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="HOD" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="HOD" />';
	
		
	}
	

	}
		
	
	
		}
	}
}
catch(e)
{
	//alert(e);
}

}



function selectBranchDelegateDepartment()
{
	
	//alert('sdsd');
	try
	{
	//alert('sssdd'+document.getElementById('opsorotherdepartment').value);
	
	if(document.getElementById('branchDepartmentId').value==0)
	{
		document.getElementById('check').value="UpdateBranchHead";
	
	if(document.getElementById('branchIdCombo').value==-1)
	{
		alert('Select Branch');
		document.getElementById('branchIdCombo').focus();
		return false;
	}
	
	
	}
	
	
	
	if(document.getElementById('branchDepartmentId').value==-1)
	{
		alert("Select Department / Branch Head");
	document.getElementById('branchDepartmentId').focus();
	
	return false;
	}
	
	
	if(document.getElementById('opsorotherdepartment').value=='NOOPS')
	{
	
//alert("sdsdsd"+document.getElementById('roleId').value);
if( document.getElementById('roleId').value==-1 || document.getElementById('roleId').value==0   )
	{
		alert("Select Designation");
	document.getElementById('roleId').focus();
	
	return false;
	}

if(  (document.getElementById('roleId').value==9 || document.getElementById('roleId').value==8)   && document.getElementById('employeeId').value==''    )
	{
		alert("Enter Employee Id");
	document.getElementById('employeeId').focus();
	
	return false;
	}



		
	}

	
	
	
	
	if(document.getElementById('opsorotherdepartment').value=='OPS' 
	
	|| document.getElementById('opsorotherdepartment').value=='Facility' 
	|| document.getElementById('opsorotherdepartment').value=='HouseKeeping'     )
	{
		
		
		//alert('PP'+document.getElementById('roleIdCombo').value);
		
		if(document.getElementById('roleIdCombo').value=='-1'   )
	{
		alert("Select Designation");
	document.getElementById('roleId').focus();
	
	return false;
	}
	
	if(document.getElementById('roleId').value=='9' || document.getElementById('roleId').value=='8' )
	{
	
	if(document.getElementById('employeeId').value==''   )
	{
		alert("Enter Employee Id");
	document.getElementById('employeeId').focus();
	
	return false;
	}
		
		
	}
	else
	{
		
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	
		return true;
	}
	
	
	
	}
	
	
	
	
	
	
	
	
	if(document.getElementById('opsorotherdepartment').value=='HOD')
	{
		
		if(document.getElementById('employeeId').value==''   )
	{
		alert("Enter Employee Id");
	document.getElementById('employeeId').focus();
	
	return false;
	}
	else
	{
		
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	
		return true;
	}
	
	}
	
	
	
	
	
else
{
	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	
	
	
	//basepath=document.getElementById('basePath').value;
	//alert(basepath);
	//document.getElementById('destroyDivId').innerHTML=
	////'Loading...Please wait.<img src="(+basepath+)"+images/loading.gif" alt="Loading" width="50" height="50" border=0>';
	
		return true;
	
	
}

} catch(e)
{
	
	
//alert("error="+e);
	
document.getElementById('branchDepartmentId').selectedIndex=0;
	
	return false;
	
/*	
	if(document.getElementById('branchDepartmentId').value==0)
	{
	
		document.getElementById('EmployeeIdStatusTextBoxDiv').innerHTML = 
	'<input type="hidden" name="opsorotherdepartment"  id="opsorotherdepartment" class="branchButton4" value="UpdateBranchHead" />'
	+'<input type="hidden" name="check"  id="check" class="branchButton4" value="UpdateBranchHead" />'	;
		
		return true;
	}
	else
	{
	
	document.getElementById('branchDepartmentId').selectedIndex=0;
	
	return false;
}
*/
}


}





function ShowDepartmentDetailsGroundDelegateAdd()
{
	
	
	try
	{
	if(document.getElementById('delegateId').value==-1)
	{
		alert('Select Name');
document.getElementById('delegateId').focus();
return false;
	}
	
	
	if(document.getElementById('employeeId').value=='')
	{
		alert('Enter Employee Id');
		document.getElementById('employeeId').focus();
		return false;
	}
	
	if(document.getElementById('password').value=='')
	{
		alert('Enter Password');
document.getElementById('password').focus();
return false;
	}
	
	if(  document.getElementById('employeePhone1').value=='' && document.getElementById('employeePhone2').value==''  )
	{
		
		alert("Enter Phone No.");
		document.getElementById('employeePhone1').focus();
	
	return false;
	}
	if(  document.getElementById('employeeEmail1').value=='' && document.getElementById('employeeEmail2').value==''  )
	{
		
		alert("Enter Email");
		document.getElementById('employeeEmail1').focus();
	
	return false;
	}
	
	if(document.getElementById('principalEmployerLocationId').selectedIndex==-1)
	{
		
		alert('Select Location');
	document.getElementById('principalEmployerLocationId').focus();
	return false;
	}
	
	
	if(document.getElementById('status').value==0)
	{
		
		temp=confirm('Are you sure, you want to disallow');
		
		if(temp==false)
		{
			return false;
			
		}
		else
		{
			//document.getElementById('refreshButtonBranch').value='Y';
//document.getElementById('formforHideDiv').style.display = 'none';
//document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			//return true;
			temp= confirm('Are you sure?')
 if(temp==true)
 {
 document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
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
		//document.getElementById('refreshButtonBranch').value='Y';
//document.getElementById('formforHideDiv').style.display = 'none';
//document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		//return true;
		temp= confirm('Are you sure?')
 if(temp==true)
 {
 document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 return true;
 }
 else
 {
 return false;
 }
	}
	}
catch(e)
{
	
	return false;
}
}





function changeGroundDelegateId(currentObj)
{
	
	
	try
	{
	
document.getElementById('delegatePrimaryIdAjax').value =0;
document.getElementById('passwordAjax').value =null;
document.getElementById('statusAjax').value ="";
document.getElementById('email2Ajax').value ="";
document.getElementById('email1Ajax').value ="";
document.getElementById('phone2Ajax').value ="";
document.getElementById('userRoleIdAjax').value ="";
document.getElementById('delegatePrimaryIdAjax').value="" ;
	document.getElementById('phone1Ajax').value ="";
	}
	catch(e)
	{
		
	}
	
	
	
if(currentObj.value==-1)
{
	document.getElementById('principalEmployerLocationId').selectedIndex=0;
	document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = '';
	
	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '';
	
	
	document.getElementById('employeeId').value='';
document.getElementById('loginId').value=document.getElementById('wsxId').value+document.getElementById('branchCode').value
document.getElementById('loginIdDiv').innerHTML=document.getElementById('loginId').value;
document.getElementById('employeeName').value='';

		
document.getElementById('employeePhone1').value ="";
	
document.getElementById('employeePhone2').value ="";
document.getElementById('employeeEmail1').value ="";
document.getElementById('employeeEmail2').value ="";
document.getElementById('userRoleId').value ="";
document.getElementById('delegatePrimaryId').value ='' ;
document.getElementById('DelegateInfoDiv').innerHTML ="";
	
	document.getElementById('password').value ="";
	
	
	
}	
else 
{
	document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = '';
	
	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '';
	
 
	
	
document.getElementById('loginId').value=
document.getElementById('wsxId').value+
document.getElementById('branchCode').value+
document.getElementById('departmentId').value+
document.getElementById('roleId').value+
currentObj.value;
document.getElementById('loginIdDiv').innerHTML=document.getElementById('loginId').value;
document.getElementById('employeeId').value=currentObj.value;

var idCombo = document.getElementById('delegateId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text
document.getElementById('employeeName').value=idComboText;
 	


loadXMLBranchDelegate();

basepath=document.getElementById('basePath').value;
//	alert(basepath);
	branchId=document.getElementById('branchId').value;
	roleId=document.getElementById('roleId').value;
	delegateId=document.getElementById('delegateId').value;

loginId=document.getElementById('loginId').value;
	
	queryString=document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=fetchGroundDelegates"+"&branchId="+branchId+"&roleId="+roleId+"&delegateId="+delegateId+"&loginId="+loginId;
//alert("queryString=="+queryString);
	
	
	xmlhttpBranchDelegate.onreadystatechange = handleGroundDetails;
	xmlhttpBranchDelegate.open("POST", queryString, true);
	xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranchDelegate.send(null);
}

}








function handleGroundDetails() {
	
	
	try
	{

		
document.getElementById('employeePhone1').value ="";
	
document.getElementById('employeePhone2').value ="";
document.getElementById('employeeEmail1').value ="";
document.getElementById('employeeEmail2').value ="";
	document.getElementById('password').value ="";
	document.getElementById('userRoleId').value ="";
	document.getElementById('delegatePrimaryId').value ='' ;
	document.getElementById('DelegateInfoDiv').innerHTML = '<font face="Verdana" size="1">Please wait, fetching details.</font>';
	
	
	
	
		
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
		
		
		if(xmlhttpBranchDelegate.responseText=='')
		{
			//alert("sdsdsd");
			document.getElementById('delegatePrimaryId').value =0;
		}
		
		
		else if(xmlhttpBranchDelegate.responseText!='')
		{
		document.getElementById('collectGroundDelegatesDiv').innerHTML = xmlhttpBranchDelegate.responseText;
	
	document.getElementById('DelegateInfoDiv').innerHTML = '<font face="Verdana" size="1" color="#800000">Employee already exist as a delegate</font>';
	
	
	

		
document.getElementById('employeePhone1').value =document.getElementById('phone1Ajax').value ;
	
document.getElementById('employeePhone2').value =document.getElementById('phone2Ajax').value ;
document.getElementById('employeeEmail1').value =document.getElementById('email1Ajax').value ;
document.getElementById('employeeEmail2').value =document.getElementById('email2Ajax').value ;
document.getElementById('password').value =document.getElementById('passwordAjax').value ;
document.getElementById('password').readOnly="true";
document.getElementById('userRoleId').value =document.getElementById('userRoleIdAjax').value ;
//alert('sdsdsds'+document.getElementById('delegatePrimaryIdAjax').value);

document.getElementById('delegatePrimaryId').value =document.getElementById('delegatePrimaryIdAjax').value ;
//alert('sdsdsds');
//
if(document.getElementById('statusAjax').value==0)
{
document.getElementById('AllowDisallowGroundDelegateDiv').innerHTML=
'<select name="status" id="status">' +
'<option value="0" selected="selected">Disallow</option>'
+'<option value="1" >Allow</option></select>';

}




if(document.getElementById('statusAjax').value==1)
{
document.getElementById('AllowDisallowGroundDelegateDiv').innerHTML=
'<select name="status" id="status">' +
'<option value="1" selected="selected">Allow</option>'
+'<option value="0" >Disallow</option></select>';

}
}

if(xmlhttpBranchDelegate.responseText=='')
		{
document.getElementById('DelegateInfoDiv').innerHTML = '<font face="Verdana" size="1" color="#800000">New employee as a delegate</font>';
	
document.getElementById('AllowDisallowGroundDelegateDiv').innerHTML=
'<select name="status" id="status">' +
'<option value="1" selected="selected">Allow</option>'
+'<option value="0" >Disallow</option></select>';


		}
		}
	}



if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 500) {
		
	document.getElementById('DelegateInfoDiv').innerHTML = '<font face="Verdana" size="1" color="#800000">Unable to fetch details.</font>';
		}

}

}
catch(e)
{
	
	return false;
}

}







function fetchGroundDelegatesFunctionlitiesCommon()
{
	//alert('sdsd');
	document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = '';
	
	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '';
	
	if(document.getElementById('principalEmployerLocationId').selectedIndex==0)
	{
		
		document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = '';
	
	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '';
	
	}
	
	else if(document.getElementById('delegateId').value==-1)
	{
		document.getElementById('principalEmployerLocationId').selectedIndex=0;
		alert('Select Name');
		document.getElementById('delegateId').focus();


	}
	
	
	else
	{
	
loadXMLBranchDelegate();

basepath=document.getElementById('basePath').value;
//alert(basepath);
	branchDepartmentId=document.getElementById('branchDepartmentId').value;
	delegatePrimaryId=document.getElementById('delegatePrimaryId').value;
	locationId=document.getElementById('principalEmployerLocationId').value;
//alert(branchDepartmentId);
//alert(delegatePrimaryId);
//alert(locationId);

	
	queryString=document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=fetchGroundDelegatesFunctionlities"+"&locationId="+locationId+"&delegatePrimaryId="+delegatePrimaryId+"&branchDepartmentId="+branchDepartmentId;
//alert("queryString=="+queryString);
	
	
	xmlhttpBranchDelegate.onreadystatechange = handleFetchGroundDelegatesFunctionlities;
	xmlhttpBranchDelegate.open("POST", queryString, true);
	xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranchDelegate.send(null);
	
	}

}


function handleFetchGroundDelegatesFunctionlities()
{
	document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = 
	'<font face="Verdana" size="1">Please wait fetching details.</font>';
	//document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '<font face="Verdana" size="1">Please wait fetching details.</font>';
	
	
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
		//alert(xmlhttpBranchDelegate.responseText);
		document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML=
		xmlhttpBranchDelegate.responseText;
	//	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML=xmlhttpBranchDelegate.responseText;
	
}

}
	
}

















function fetchOfficeDelegatesFunctionlitiesCommon()
{
//	alert('roleIdddddddd='+document.getElementById('roleId').value);
	document.getElementById('SubDepartmentHyperLinkRow').style.display='none';
	
	document.getElementById('subDepartmentFunctionalityDiv').innerHTML='';
	document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = '';
	
	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '';
	
	if(document.getElementById('principalEmployerLocationId').selectedIndex==0)
	{
		
		document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = '';
	
	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '';
	
document.getElementById('fetchGroundDelegatesFunctionlitiesIdRow').style.display='none';
	document.getElementById('subDepartmentFunctionalityRow').style.display='none';
	//document.getElementById('SubDepartmentHyperLinkRow').style.display='none';
	
	
	}
	
	
	
	
	else
	{
	
loadXMLBranchDelegate();

basepath=document.getElementById('basePath').value;
//alert(basepath);
	branchDepartmentId=document.getElementById('branchDepartmentId').value;
	delegatePrimaryId=document.getElementById('delegatePrimaryId').value;
	locationId=document.getElementById('principalEmployerLocationId').value;

document.getElementById('fetchGroundDelegatesFunctionlitiesIdRow').style.display='';
document.getElementById('subDepartmentFunctionalityRow').style.display='';

//alert(branchDepartmentId);
//alert(delegatePrimaryId);
//alert(locationId);
roleId=document.getElementById('roleId').value;
	/*
	if(roleId==8)
	{
	document.getElementById('SubDepartmentHyperLinkRow').style.display='';
	
	}
	*/
	queryString=document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=fetchOfficeDelegatesFunctionlities"+"&locationId="+locationId+"&delegatePrimaryId="+delegatePrimaryId+"&branchDepartmentId="+branchDepartmentId+"&roleId="+roleId;
//alert("queryString=="+queryString);
	
	
	xmlhttpBranchDelegate.onreadystatechange = handleFetchOfficeDelegatesFunctionlities;
	xmlhttpBranchDelegate.open("POST", queryString, true);
	xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranchDelegate.send(null);
	
	}

}


function handleFetchOfficeDelegatesFunctionlities()
{
	document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML = 
	'<font face="Verdana" size="1">Please wait fetching details.</font>';
	//document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML = '<font face="Verdana" size="1">Please wait fetching details.</font>';
	
	
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
		//alert(xmlhttpBranchDelegate.responseText);
		document.getElementById('fetchGroundDelegatesFunctionlitiesId1').innerHTML=
		xmlhttpBranchDelegate.responseText;
	
	///alert(xmlhttpBranchDelegate.getResponseHeader("SubDepartementYesOrNo"));
	if(xmlhttpBranchDelegate.getResponseHeader("SubDepartementYesOrNo")=='Yes')
	{
	document.getElementById('SubDepartmentHyperLinkRow').style.display='';
	
	}
		
	//	document.getElementById('fetchGroundDelegatesFunctionlitiesId2').innerHTML=xmlhttpBranchDelegate.responseText;
	
}

}
	
}





function getSubDepartmentForDelegates()
{
	document.getElementById('subDepartmentFunctionalityDiv').innerHTML='';
	loadXMLBranchDelegate();

basepath=document.getElementById('basePath').value;
	branchDepartmentId=document.getElementById('branchDepartmentId').value;
	delegatePrimaryId=document.getElementById('delegatePrimaryId').value;
	locationId=document.getElementById('principalEmployerLocationId').value;
	queryString=document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=subDepartmentDelegate"+"&locationId="+locationId+"&delegatePrimaryId="+delegatePrimaryId+"&branchDepartmentId="+branchDepartmentId;
	xmlhttpBranchDelegate.onreadystatechange = handleSubDepartmentForDelegates;
	xmlhttpBranchDelegate.open("POST", queryString, true);
	xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranchDelegate.send(null);
}


function handleSubDepartmentForDelegates()
{
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
	
	//alert(''+xmlhttpBranchDelegate.responseText);
	document.getElementById('subDepartmentFunctionalityDiv').innerHTML=
		xmlhttpBranchDelegate.responseText;
}
	
}

}



function varyCheckboxBranchDelegateSubDepartment(currentObj)
{
//alert('sss');
c = document.getElementsByTagName('input');
  for (var i = 0; i < c.length; i++)
  {
  
   
    if ( c[i].type == 'checkbox' && (c[i].name == ('branchDelegateSubDepartmentCheckUpdate')||c[i].name ==('branchDelegateSubDepartmentCheck') ) && c[i].id!=currentObj.id )
    {
//alert(c[i].name);
////don't change the order of these two lines, otherwise  there may be different answers for different browser
c[i].checked = false;
c[i].focus();

    }
  }
}


function validatebranchDelegateSubDepartmentStatus(currentObj,variable,aoru,xx)
{

///alert(xx);


if(currentObj.checked==true && aoru=='add')
 	{
 
 if(xx=='C')
{
varyCheckboxBranchDelegateSubDepartment(currentObj); 		
document.getElementById('branchDelegateSubDepartmentStatusAdd'+variable).value=1;

}

else if( document.getElementById('branchDelegateSubDepartmentCheckComplete') && document.getElementById('branchDelegateSubDepartmentCheckComplete').checked==true  )
{
	currentObj.checked=false;
alert('Complete Department Assigned.');
document.getElementById('branchDelegateSubDepartmentCheckComplete').focus();
}
else
{
		document.getElementById('branchDelegateSubDepartmentStatusAdd'+variable).value=1;

}


 	}
 	
 	
 	
 	
 	
 	else if(currentObj.checked==false && aoru=='add')
 	
 	{
 		document.getElementById('branchDelegateSubDepartmentStatusAdd'+variable).value=0;
 		
 		
 	}
	
	
	
	
	
	else if(currentObj.checked==true && aoru=='update')
 	{
 		 if(xx=='C')
{
varyCheckboxBranchDelegateSubDepartment(currentObj); 		
document.getElementById('branchDelegateSubDepartmentStatusUpdate'+variable).value=1;

}
 	
 	else if( document.getElementById('branchDelegateSubDepartmentCheckComplete') && document.getElementById('branchDelegateSubDepartmentCheckComplete').checked==true  )
{
	currentObj.checked=false;
alert('Complete Department Assigned.');
document.getElementById('branchDelegateSubDepartmentCheckComplete').focus();
}
 	else
 	{
 		document.getElementById('branchDelegateSubDepartmentStatusUpdate'+variable).value=1;
 	}	
 	
 	
 	
 	}
 	
 	
 	
 	
 	
 	else if(currentObj.checked==false && aoru=='update')
 	
 	{
 		document.getElementById('branchDelegateSubDepartmentStatusUpdate'+variable).value=0;
 		
 		
 	}
}

function changeLocationStatusForOfficeDelegates()
{
	
///	alert('hihi');
}




function changeLoginIdHODAndDelegateUpdate(obj)
{
	

	document.getElementById('loginId').value=document.getElementById('wsxId').value+document.getElementById('branchCode').value
	+document.getElementById('departmentId').value+document.getElementById('roleId').value +obj.value;
	
document.getElementById('loginIdDiv').innerHTML=document.getElementById('wsxId').value+document.getElementById('branchCode').value
	+document.getElementById('departmentId').value+document.getElementById('roleId').value +obj.value;
	
}




function UpdateHODCheckDelegate()
{
	try
	{
if(document.getElementById('employeeId').value=='')
	{
		alert('Enter Employee Id');
	document.getElementById('employeeId').focus();
	return false;
	}
	if(document.getElementById('employeeName').value=='')
	{
		alert('Enter Employee Name');
	document.getElementById('employeeName').focus();
	return false;
	}
	
	if(document.getElementById('status').value==0)
	{	
		
		temp=confirm('Are u sure, you want to disallow ?');
		if(temp!=true)
		{
			return false;
			
		}
		else
		{
			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			return true;
			
			
		}
		
	}
	
	else
	{
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		return true;
		
	}
}
catch(e)
{
	
	return false;
}

}




function UpdateDelegateCheckDelegate()
{
	try
	{
if(document.getElementById('employeeId').value=='')
	{
		alert('Enter Employee Id');
	document.getElementById('employeeId').focus();
	return false;
	}
		
	
	if(document.getElementById('employeeName').value=='')
	{
		alert('Enter Employee Name');
	document.getElementById('employeeName').focus();
	return false;
	}
	
	if(document.getElementById('status').value==0)
	{	
		
		temp=confirm('Are u sure, you want to disallow ?');
		if(temp!=true)
		{
			return false;
			
		}
		else
		{
			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
			return true;
		}
		
	}
	
	else
	{
		
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		return true;
		
	}
	}
catch(e)
{
	
	return false;
}
}




function addDepartmentHeadDetails()
{

if(document.getElementById('departmentId').value==-1)
	{
		alert("Select Department");
	document.getElementById('departmentId').focus();
	
	
	}

else
{
//alert("sss");
document.getElementById('ShowBranchDepartmentTableId2').innerHTML =


'<tr><td width="50%" nowrap class="branchText2">Branch Code</td>'
+'<td width="50%" colspan="3" nowrap class="branchText4">1</td></tr>'
  


	
	
}
}





function ShowDepartmentDetailsCheck()
{

try
{
if(document.getElementById('employeeId').value=='')
{
	
	alert("Enter Employee's Id");
	document.getElementById('employeeId').focus();
	return false;
}	
if(document.getElementById('employeeName').value=='')
{
	
	alert('Enter Name');
	document.getElementById('employeeName').focus();
	return false;
}	

if(document.getElementById('password').value=='')
{
	
	alert('Enter Password');
	document.getElementById('password').focus();
	return false;
}	




	if(  document.getElementById('employeePhone1').value=='' && document.getElementById('employeePhone2').value==''  )
	{
		
		alert("Enter Phone No");
		document.getElementById('employeePhone1').focus();
	
	return false;
	}
	if(  document.getElementById('employeeEmail1').value=='' && document.getElementById('employeeEmail2').value==''  )
	{
		
		alert("Enter Email");
		document.getElementById('employeeEmail1').focus();
	
	return false;
	}
	
	
	if(document.getElementById('status').value=='0')
 	{
 		temp=confirm('Are you sure, you want to disallow ? ');
 		if(temp==false)
 		{
 			
 	return false;
 			
 		}
 		else
 		{
 			document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
 		return true;	
 		}
 
 	
 	}
	
	
	
else
{
	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	return true;
	
}

}
catch(e)
{
	
	return false;
}

}
	
	
	

function ShowDepartmentDetailsCheckDelegateAdd()
{
try
{

if(document.getElementById('employeeName').value=='')
{
	
	alert('Enter Name');
	document.getElementById('employeeName').focus();
	return false;
}	

if(document.getElementById('password').value=='')
{
	
	alert('Enter Password');
	document.getElementById('password').focus();
	return false;
}	

else
{
	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	return true;
	
}
}
catch(e)
{
	
	return false;
}
}


	function changeFunctionalityCheckBoxBranchDelegate(currentObj,variable)
	{
	if(currentObj.checked==true)
 	{
 		document.getElementById('functionalityIdText'+variable).value=1;
 		
 	}
 	else
 	{
 		document.getElementById('functionalityIdText'+variable).value=0;
 		
 		
 	}
		
	}
	
	
	
	function changeFunctionalityCheckBoxBranchDelegateNew(currentObj,variable)
	{
	
try
{
	if(currentObj.checked==true)
 	{
 		document.getElementById('functionalityIdTextNew'+variable).value=1;
 		
 	}
 	else
 	{
 		document.getElementById('functionalityIdTextNew'+variable).value=0;
 		
 		
 	}


}
catch(e)
{
//alert(e);
}

		
	}
	
	
	
	
	
	
 function changeFunctionalityCheckBoxDelegate(currentObj,variable)
 {
 	
 	//alert('currentObj name==='+currentObj.name);
 	//alert('variable name==='+variable);
 	
 	try
 	{
 	if(currentObj.checked==true)
 	{
 		
 		if(currentObj.name=='addFunctionality')
 		{
 			//alert('ddd'+document.getElementById('addFunctionalityIdText'+variable).value);
 		document.getElementById('addFunctionalityIdText'+variable).value=1;
 		document.getElementById('updateFunctionality'+variable).checked=true;
 			document.getElementById('updateFunctionalityIdText'+variable).value=1;
 			
 			document.getElementById('viewFunctionality'+variable).checked=true;
 		
 		document.getElementById('viewFunctionalityIdText'+variable).value=1;
 		
 		
 		}
 		
 		
 		
 		
 		
 		
 		 if(currentObj.name=='updateFunctionality'  )
 		{
 			document.getElementById('updateFunctionalityIdText'+variable).value=1;
 		
 			
 			
 			document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('viewFunctionalityIdText'+variable).value=1;
 		
 		
 		}
 		
 		
 		 if(currentObj.name=='viewFunctionality'  )
 		{
 			//currentObj.value=1;
 			//alert('ddd');
 		document.getElementById('viewFunctionalityIdText'+variable).value=1;
 		
 			}
 		
 		
 		
 		 
 		
 	}
 	
 	
 	
 	if(currentObj.checked==false)
 	{
 		//alert("FALSE CALLED"+currentObj.name);
 		
 		 if(currentObj.name=='viewFunctionality'  )
 		{
 			//currentObj.value=0;
 			//alert('ddd');
 			document.getElementById('viewFunctionalityIdText'+variable).value=0;
 		
 			}
 		
 		
 		
 		
 		if(currentObj.name=='addFunctionality')
 		{
 			
 			//alert('ddd');
 		
 		//document.getElementById('updateFunctionality'+variable).checked=false;
 			
 		//currentObj.value=0;
 		document.getElementById('addFunctionalityIdText'+variable).value=0;
 		
 		if(document.getElementById('viewFunctionality'+variable).checked==true)
 		{
 			document.getElementById('viewFunctionalityIdText'+variable).value=1;
 			
 		}
 		
 		
 		if(document.getElementById('updateFunctionality'+variable).checked==true)
 		{
 			document.getElementById('updateFunctionalityIdText'+variable).value=1;
 			
 		}
 		
 		
 		}
 		
 		
 		
 		
 		
 		
 		
 		 if(currentObj.name=='updateFunctionality')
 		{
 			//currentObj.value=0;
 		document.getElementById('updateFunctionalityIdText'+variable).value=0;
 		
 			
 			if(document.getElementById('viewFunctionality'+variable).checked==true)
 			{
 					document.getElementById('viewFunctionalityIdText'+variable).value=1;
 			
 			}
 		
 		
 		}
 		
 		if(currentObj.name=='updateFunctionality'  && document.getElementById('addFunctionality'+variable).checked==true )
 		{
 			
 		document.getElementById('updateFunctionality'+variable).checked=true;
 		
 		document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('updateFunctionalityIdText'+variable).value=1;
 		
 		document.getElementById('viewFunctionalityIdText'+variable).value=1;
 			
 		}
 		if(currentObj.name=='viewFunctionality'  && document.getElementById('addFunctionality'+variable).checked==true )
 		{
 			
 		document.getElementById('updateFunctionality'+variable).checked=true;
 		
 		document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('updateFunctionalityIdText'+variable).value=1;
 		
 		document.getElementById('viewFunctionalityIdText'+variable).value=1;
 			
 		}
 		
 		
 		if(currentObj.name=='viewFunctionality'  && document.getElementById('updateFunctionality'+variable).checked==true )
 		{
 			
 		
 		document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('viewFunctionalityIdText'+variable).value=1;
 			
 		}
 		
 	}
 	
 	}
 	catch(e)
 	{
 		
 		
 	}
 	
 	
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
	
	
 function changeFunctionalityCheckBoxDelegateUpdate(currentObj,variable)
 {
 	
 	//alert('currentObj name==='+currentObj.name);
 	//alert('variable name==='+variable);
 	
 	try
 	{
 	if(currentObj.checked==true)
 	{
 		
 		if(currentObj.name=='addFunctionalityUpdate')
 		{
 			//alert('ddd'+document.getElementById('addFunctionalityIdText'+variable).value);
 		document.getElementById('addFunctionalityIdTextUpdate'+variable).value=1;
 		document.getElementById('updateFunctionalityUpdate'+variable).checked=true;
 			document.getElementById('updateFunctionalityIdTextUpdate'+variable).value=1;
 			
 			document.getElementById('viewFunctionalityUpdate'+variable).checked=true;
 		
 		document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 		
 		
 		}
 		
 		
 		
 		
 		
 		
 		 if(currentObj.name=='updateFunctionalityUpdate'  )
 		{
 			document.getElementById('updateFunctionalityIdTextUpdate'+variable).value=1;
 		
 			
 			
 			document.getElementById('viewFunctionalityUpdate'+variable).checked=true;
 		document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 		
 		
 		}
 		
 		
 		 if(currentObj.name=='viewFunctionalityUpdate'  )
 		{
 			//currentObj.value=1;
 			//alert('ddd');
 		document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 		
 			}
 		
 		
 		
 		 
 		
 	}
 	
 	
 	
 	if(currentObj.checked==false)
 	{
 		//alert("FALSE CALLED"+currentObj.name);
 		
 		 if(currentObj.name=='viewFunctionalityUpdate'  )
 		{
 			//currentObj.value=0;
 			//alert('ddd');
 			document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=0;
 		
 			}
 		
 		
 		
 		
 		if(currentObj.name=='addFunctionalityUpdate')
 		{
 			
 			//alert('ddd');
 		
 		//document.getElementById('updateFunctionality'+variable).checked=false;
 			
 		//currentObj.value=0;
 		document.getElementById('addFunctionalityIdTextUpdate'+variable).value=0;
 		
 		if(document.getElementById('viewFunctionalityUpdate'+variable).checked==true)
 		{
 			document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 			
 		}
 		
 		
 		if(document.getElementById('updateFunctionalityUpdate'+variable).checked==true)
 		{
 			document.getElementById('updateFunctionalityIdTextUpdate'+variable).value=1;
 			
 		}
 		
 		
 		}
 		
 		
 		
 		
 		
 		
 		
 		 if(currentObj.name=='updateFunctionalityUpdate')
 		{
 			//currentObj.value=0;
 		document.getElementById('updateFunctionalityIdTextUpdate'+variable).value=0;
 		
 			
 			if(document.getElementById('viewFunctionalityUpdate'+variable).checked==true)
 			{
 					document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 			
 			}
 		
 		
 		}
 		
 		if(currentObj.name=='updateFunctionalityUpdate'  && document.getElementById('addFunctionalityUpdate'+variable).checked==true )
 		{
 			
 		document.getElementById('updateFunctionalityUpdate'+variable).checked=true;
 		
 		document.getElementById('viewFunctionalityUpdate'+variable).checked=true;
 		document.getElementById('updateFunctionalityIdTextUpdate'+variable).value=1;
 		
 		document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 			
 		}
 		if(currentObj.name=='viewFunctionalityUpdate'  && document.getElementById('addFunctionalityUpdate'+variable).checked==true )
 		{
 			
 		document.getElementById('updateFunctionalityUpdate'+variable).checked=true;
 		
 		document.getElementById('viewFunctionalityUpdate'+variable).checked=true;
 		document.getElementById('updateFunctionalityIdTextUpdate'+variable).value=1;
 		
 		document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 			
 		}
 		
 		
 		if(currentObj.name=='viewFunctionalityUpdate'  && document.getElementById('updateFunctionalityUpdate'+variable).checked==true )
 		{
 			
 		
 		document.getElementById('viewFunctionalityUpdate'+variable).checked=true;
 		document.getElementById('viewFunctionalityIdTextUpdate'+variable).value=1;
 			
 		}
 		
 	}
 	
 	}
 	catch(e)
 	{
 		
 		
 	}
 	
 	
 }
 
 
 
 
	function validateSubDeptCheckBox(obj,xx,aoru)
	{
	
	if(obj.checked==true && aoru=='add' )
	{
	document.getElementById('shiftValueZeroOrOneAdd'+xx).value=1;
	}
	else if(obj.checked!=true && aoru=='add' )

{
	document.getElementById('shiftValueZeroOrOneAdd'+xx).value=0;


}	
	
	
	
	else if(obj.checked==true && aoru=='update' )
	{
	
	document.getElementById('shiftValueZeroOrOneUpdate'+xx).value=1;
	}
	else if(obj.checked!=true && aoru=='update' )

{
	document.getElementById('shiftValueZeroOrOneUpdate'+xx).value=0;


}	
	
	
	}
	
 
 
 
 function ShowHODUpdate()
 {
 	try
 	{
 	
 	if(document.getElementById('employeeId').value=='')
 	{
 		alert("Enter Employee's Id");
 	document.getElementById('employeeId').focus();
 	return false;
 	
 	}
 
 
 
 	if(document.getElementById('employeeName').value=='')
 	{
 		alert("Enter Employee's Name");
 	document.getElementById('employeeName').focus();
 	return false;
 	
 	}
 
 	if(document.getElementById('password').value=='')
 	{
 		alert("Enter Employee's Password");
 	document.getElementById('password').focus();
 	return false;
 	
 	}
 
 if(document.getElementById('status').value=='0')
 	{
 		temp=confirm('Are you sure, you want to disallow ? ');
 		if(temp==false)
 		{
 			
 	return false;
 			
 		}
 		
 else
 {
 	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
 	
 	return true;
 }
 	
 	}
 else
 {
 	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
 	return true;
 }
 
 
 }
catch(e)
{
	
	return false;
}
 }
 
 
 
 function ShowDepartmentDetailsOfficeDelegateCommon()
 {
 	
 	try
 	{
 	if(document.getElementById('employeeId').value=='')
 	{
 		alert("Enter Employee's Id");
 	document.getElementById('employeeId').focus();
 	return false;
 	
 	}
 
 if(document.getElementById('checkLoginIdStatus').value=='Y')
 	{
 		alert("Employee's Id Already Exist");
 	document.getElementById('employeeId').focus();
 	return false;
 	
 	}
 
 	if(document.getElementById('employeeName').value=='')
 	{
 		alert("Enter Employee's Name");
 	document.getElementById('employeeName').focus();
 	return false;
 	
 	}
 
 	if(document.getElementById('password').value=='')
 	{
 		alert("Enter Employee's Password");
 	document.getElementById('password').focus();
 	return false;
 	
 	}
 

	if(  document.getElementById('employeePhone1').value=='' && document.getElementById('employeePhone2').value==''  )
	{
		
		alert("Enter Phone No.");
		document.getElementById('employeePhone1').focus();
	
	return false;
	}
	if(  document.getElementById('employeeEmail1').value=='' && document.getElementById('employeeEmail2').value==''  )
	{
		
		alert("Enter Email");
		document.getElementById('employeeEmail1').focus();
	
	return false;
	}
	
	
		
	
	
	if(document.getElementById('status').value=='0')
 	{
 		temp=confirm('Are you sure, you want to disallow ? ');
 		if(temp==false)
 		{
 			
 	return false;
 			
 		}
 		else
 		{
 			//document.getElementById('refreshButtonBranch').value='Y';
//document.getElementById('formforHideDiv').style.display = 'none';
//document.getElementById('pleaseWaitDiv').style.display = 'block';
 
 			//return true;
 			
 		temp= confirm('Are you sure?')
 if(temp==true)
 {
 document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
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
 	
 	
 //return true;
temp= confirm('Are you sure?')
 if(temp==true)
 {
 document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 return true;
 }
 else
 {
 return false;
 }
 	
 }
 
 }
catch(e)
{
	
	return false;
}
 	
 }
 
 
 
 
 
function ShowLocationAndDesignation()
{
	
	try
 	{
 	if( document.getElementById('locationId').value=='-1' || document.getElementById('locationId').value=='0' )
 	{
 		alert("Select Location");
 	document.getElementById('locationId').focus();
 	return false;
 	
 	}

 	if( document.getElementById('roleId').value=='-1' || document.getElementById('roleId').value=='0' )
 	{
 		alert("Select Designation");
 	document.getElementById('roleId').focus();
 	return false;
 	
 	}

if( document.getElementById('newRoleId').value!=9 &&   document.getElementById('delegateId').value=='-1'  )
 	{
 		alert("Select Name");
 	document.getElementById('delegateId').focus();
 	return false;
 	
 	}


if( document.getElementById('newRoleId').value==9   )
 	{
 		
 	document.getElementById('hiddenOperation').value='ShowDepartmentDetails';
 		document.getElementById('check').value='DelegateOrHOD';
 	
 	
 	}


else
{
	document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
	return true;
}


	}
catch(e)
{
	document.getElementById('roleId').value='-1'
	
	//alert(e);
	return false;
}
} 
 
 
 
 
 function getDesignationsForDelegateLocation()
 {
 	//alert(document.getElementById('locationId').value);
 	//alert(document.getElementById('roleId').value);
 	
 	 if(document.getElementById('locationId').value==-1)
 	{
 		
 		//salert('sdsds');
 		document.getElementById('roleId').value=-1;
 		document.getElementById('designationIdFunctionalityDiv1').innerHTML = '';
	
 		document.getElementById('designationIdDiv1').innerHTML="";
	document.getElementById('designationIdDiv2').innerHTML="";
		
 		
 		
 	}
 }
 
 
 function getDesignationsForDelegate()
 {
 	//alert(document.getElementById('locationId').value);
 	//alert(document.getElementById('roleId').value);
 	document.getElementById('designationIdFunctionalityDiv1').innerHTML = '';
	
 	
 	
 	if( document.getElementById('locationId').value==-1)
 	{
 		alert('Select Location First');
 		document.getElementById('locationId').focus();
 		document.getElementById('roleId').value=-1;
 	}
 	
 	else if(document.getElementById('roleId').value==-1)
 	{
 		
 		//alert('as111s');
 		document.getElementById('designationIdDiv1').innerHTML="";
	document.getElementById('designationIdDiv2').innerHTML="";
		
 		//document.getElementById('designationIdFunctionalityDiv1').innerHTML = '';
	
 		
 	}
 	
 	else if(document.getElementById('newRoleId').value==9  )
 	{
 		
 		
 	}
 	
 	
 	
 	else if( document.getElementById('locationId').value!=-1)
 	{
 	
 	document.getElementById('designationIdDiv1').innerHTML=
 	"<font face='Verdana'  size='1' >Loading name..</font>";
//alert("sdsd");
locationId=document.getElementById('locationId').value;
 	roleId=document.getElementById('roleId').value
 	//alert("roleId=="+roleId);
 	loadXMLBranchDelegate();
 	basepath=document.getElementById('basePath').value;
	queryString=
	document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=SelectLocationGetDesignation"+"&locationId="+locationId+"&roleId="+roleId;
	
	
	xmlhttpBranchDelegate.onreadystatechange = handleDesignationsForDelegate;
	xmlhttpBranchDelegate.open("POST", queryString, true);
	xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranchDelegate.send(null);
 	}
 	
 	else
 {
 	
 	
 }
 	
 }
 
 
 
 
 
 

function handleDesignationsForDelegate() {
	
	
	try
	{
	document.getElementById('designationIdDiv1').innerHTML="";
	document.getElementById('designationIdDiv2').innerHTML="";
			
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
			
		document.getElementById('designationIdDiv1').innerHTML=
		"Select name ";
	
		document.getElementById('designationIdDiv2').innerHTML=xmlhttpBranchDelegate.responseText;
	
	
	
		}
	
		if (xmlhttpBranchDelegate.status == 500) {
	document.getElementById('designationIdDiv1').innerHTML=
 	"<font face='Verdana'  size='1' >Loading fail..</font>";

		}
	
	}
}
catch(e)
{
	//alert(e);
}

}
 
 
 
 
 function fetchFunctionalities()
 {
 	
 	//alert('asassasasa');
 	
	if( document.getElementById('delegateId').value==-1 )
	{
		
		document.getElementById('designationIdFunctionalityDiv1').innerHTML = '';
	
	}
	else
	{
	document.getElementById('designationIdFunctionalityDiv1').innerHTML = '';
	
loadXMLBranchDelegate();
basepath=document.getElementById('basePath').value;
locationId=document.getElementById('locationId').value;
roleId=document.getElementById('roleId').value;
 delegatePrimaryId=document.getElementById('delegateId').value

 queryString=
 document.getElementById('basePath').value+"displayBranchDelegateAction.do?hiddenOperation=fetchGroundDelegatesFunctionlitiesFromGroundDelegates"+"&locationId="+locationId+"&delegatePrimaryId="+delegatePrimaryId+"&roleId="+roleId;
	
	
xmlhttpBranchDelegate.onreadystatechange = handlefetchFunctionalities;
xmlhttpBranchDelegate.open("POST", queryString, true);
xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDelegate.send(null);
}	
 }
	
	
	function handlefetchFunctionalities()
	{
	
	document.getElementById('designationIdFunctionalityDiv1').innerHTML = 
	'<font face="Verdana" size="1">Please wait fetching details.</font>';
	
	
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
		document.getElementById('designationIdFunctionalityDiv1').innerHTML=
		xmlhttpBranchDelegate.responseText;

}
else
{
document.getElementById('designationIdFunctionalityDiv1').innerHTML=
		'<font face="Verdana" size="1">Loading fail..</font>';
	
}
	




}
		
	}
	
	
	
	
	function checkLoginIdStatusFunction()
	{	
	
		loadXMLBranchDelegate();
document.getElementById('checkLoginIdStatus').value ='I';

document.getElementById('checkLoginIdStatusDiv').innerHTML=
"<font face='Verdana'  size='1' >Verifying loginId..</font>";

basepath=document.getElementById('basePath').value;
loginId=document.getElementById('loginId').value;
userRoleId=document.getElementById('userRoleId').value;
queryString=
document.getElementById('basePath').value
+"displayBranchDelegateAction.do?hiddenOperation=checkLoginIdStatus"+"&loginId="+loginId+"&userRoleId="+userRoleId;
	
	
xmlhttpBranchDelegate.onreadystatechange = handlecheckLoginIdStatus;
xmlhttpBranchDelegate.open("POST", queryString, true);
xmlhttpBranchDelegate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDelegate.send(null);
	}
	
	
	
	
	function handlecheckLoginIdStatus()
	{
	
	
	
	if (xmlhttpBranchDelegate.readyState == 4) {
		if (xmlhttpBranchDelegate.status == 200) {
		document.getElementById('checkLoginIdStatus').value=
		xmlhttpBranchDelegate.responseText;

if(document.getElementById('checkLoginIdStatus').value=='N' )
{
	document.getElementById('checkLoginIdStatusDiv').innerHTML="";
}
else
{
	document.getElementById('checkLoginIdStatusDiv').innerHTML=
	'<font face="Verdana" size="1" color="#800000">Employee id already exists..</font>';
}



}
else
{
document.getElementById('checkLoginIdStatusDiv').innerHTML=
		'<font face="Verdana" size="1" color="#800000">Loading fail..</font>';
	
}
	




}
		
	}
	
	
	function branchOrLocationNameFunction()
	{
	//alert('asas');		
var idCombo = document.getElementById('branchOrLocationId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text
document.getElementById('branchOrLocationName').value=idComboText;
 	
		
	}
	
	function ShowBranchOrLocationListView()
	{

	if(document.getElementById('branchOrLocationId').value==-1)
	{
		if(document.getElementById('mode').value=='b')
		{
		
		alert('Select Branch ');
			document.getElementById('branchOrLocationId').focus();
		
		}
		else
		{
			alert('Select Location ');
			document.getElementById('branchOrLocationId').focus();
			
		}
		return false;
		
	}
		
	else
	{
		document.getElementById('refreshButtonBranch').value='Y';
document.getElementById('formforHideDiv').style.display = 'none';
document.getElementById('pleaseWaitDiv').style.display = 'block';
 
		
		return true;
		
	}
	}
	
	
	
	
	
	

function onLoadForBranchDelegates()
{
	
	
	RefreshBranchDelegatesForHODModule();
	RefreshBranchDelegatesForAddUpdateDelegates();
	try{
	hideloadingpage();
    getPictureForCaptcha();
	}catch(e){
	}
   
}



	
	function RefreshBranchDelegatesForHODModule()
	{
	
	try
	{
	
	if(document.getElementById('designationId').value!=-1)
	{
	document.getElementById('designationId').value=-1;
	document.getElementById('roleId').value=0;
	document.getElementById('branchDepartmentId').value=document.getElementById('branchDepartmentIdForReplace').value;
	
	
	}
	
	if(document.getElementById('refreshButtonBranch').value=='Y')
	{
	
document.getElementById('designationId').value=-1;
	/////alert("sdsdsds===="+document.getElementById('designationId').value);
	
	
	document.getElementById('refreshButtonBranch').value='N'
	
	}
	}
	
	catch(e)
	{
		////alert(e);
		
	}
	}
	



	
	function RefreshBranchDelegatesForAddUpdateDelegates()
	{
	///alert("Delegate");
	try
	{
	if(document.getElementById('refreshButtonBranch').value=='Y')
	{
	
document.getElementById('branchDepartmentId').value=-1;
	
	
	document.getElementById('refreshButtonBranch').value='N'
	
	}
	}
	
	catch(e)
	{
		
		
	}
	}
	
	

var counterCaptchaGlobal = 0;
var pictures = new Array(3);

window.setTimeout(onLoadForBranchDelegates,1000);
 
	
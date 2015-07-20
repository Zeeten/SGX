 var xmlhttpBranch;
 
function loadXMLBranchDepartmentFunctionality()
{

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttpBranchDepartmentFunctionality=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttpBranchDepartmentFunctionality=new ActiveXObject("Microsoft.XMLHTTP");
}




}
 
 
 
 
 function getBranchName()
 {
 	
 	var branchDepartmentIdCombo = document.getElementById("branchDepartmentId");
    var natureOfInjuryComboVal = branchDepartmentIdCombo.options[branchDepartmentIdCombo.selectedIndex].text
document.getElementById('departmentName').value=natureOfInjuryComboVal;
 	
 	
 }
 
 
 
 
 function functionalityCheckBoxFunctionCommon(currentObj,variable)
 {
 	
 	
 	
 	if(currentObj.checked==true)
 	{
 		document.getElementById('functionalityCheckBoxText'+variable).value=1;
 		
 	}
 	else
 	{
 		document.getElementById('functionalityCheckBoxText'+variable).value=0;
 		
 		
 	}
 	
 }
 
 
 
 
 function functionalityCheckBoxFunction(currentObj,variable)
 {
 	
 	
 	if(currentObj.checked==true)
 	{
 		document.getElementById('functionalityCheckBoxText'+variable).value=1;
 		
 	}
 	else
 	{
 		document.getElementById('functionalityCheckBoxText'+variable).value=0;
 		
 		
 	}
 	
 }
 
 
 
 
 function departmentCheckBoxFunction(currentObj,variable)
 {
 	
 	
 	if(currentObj.checked==true)
 	{
 		document.getElementById('departmentCheckBoxText'+variable).value=1;
 		
 	}
 	else
 	{
 		document.getElementById('departmentCheckBoxText'+variable).value=0;
 		
 		
 	}
 	
 }
 
 
 function departmentCheckBoxFunctionView(currentObj,variable)
 {
 	
 	if(document.getElementById('departmentCheckBoxText'+variable).value==1)
 	{
 	
 	
 		currentObj.checked=true;
 		
 	}
 	if(document.getElementById('departmentCheckBoxText'+variable).value==0)
 	{
 		currentObj.checked=false;
 		
 	}
 	
 	
 }
 
 
 function changeFunctionalityCheckBox(currentObj,variable)
 {
 	//alert('sdsada232323232');
 	//alert("name=="+currentObj.name);
 	//alert("id=="+currentObj.id);
 //	alert("value=="+currentObj.value);
 	
 	//alert("checked=="+currentObj.checked);
 	
 	
 	
 	if(currentObj.checked==true)
 	{
 		
 		if(currentObj.name=='addFunctionality')
 		{
 			//currentObj.value=1;
 			//alert('ddd');
 		document.getElementById('addFunctionalityArray'+variable).value=1;
 		document.getElementById('updateFunctionality'+variable).checked=true;
 			
 			
 			document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('updateFunctionalityArray'+variable).value=1;
 		document.getElementById('viewFunctionalityArray'+variable).value=1;
 		}
 		
 		
 		
 		
 		
 		
 		 if(currentObj.name=='updateFunctionality'  )
 		{
 			document.getElementById('updateFunctionalityArray'+variable).value=1;
 		
 			
 			//currentObj.value=1;
 			//alert('ddd');
 		
 		//document.getElementById('addFunctionality'+variable).checked=true;
 			document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('viewFunctionalityArray'+variable).value=1;
 		
 		
 		}
 		
 		
 		 if(currentObj.name=='viewFunctionality'  )
 		{
 			//currentObj.value=1;
 			//alert('ddd');
 		document.getElementById('viewFunctionalityArray'+variable).value=1;
 		
 			}
 		
 		
 		
 		 
 		
 	}
 	
 	
 	
 	if(currentObj.checked==false)
 	{
 		//alert("FALSE CALLED"+currentObj.name);
 		
 		 if(currentObj.name=='viewFunctionality'  )
 		{
 			//currentObj.value=0;
 			//alert('ddd');
 			document.getElementById('viewFunctionalityArray'+variable).value=0;
 		
 			}
 		
 		
 		
 		
 		if(currentObj.name=='addFunctionality')
 		{
 			
 			//alert('ddd');
 		
 		//document.getElementById('updateFunctionality'+variable).checked=false;
 			
 		//currentObj.value=0;
 		document.getElementById('addFunctionalityArray'+variable).value=0;
 		
 		if(document.getElementById('viewFunctionality'+variable).checked==true)
 		{
 			document.getElementById('viewFunctionality'+variable).checked=true;
 			//document.getElementById('viewFunctionalityArray'+variable).value=0;
 			
 		}
 		
 		
 		if(document.getElementById('updateFunctionality'+variable).checked==true)
 		{
 			document.getElementById('updateFunctionality'+variable).checked=true;
 			document.getElementById('updateFunctionalityArray'+variable).value=1;
 			
 		}
 		
 		
 		}
 		
 		
 		
 		
 		
 		
 		
 		 if(currentObj.name=='updateFunctionality')
 		{
 			//currentObj.value=0;
 		document.getElementById('updateFunctionalityArray'+variable).value=0;
 		
 			
 			if(document.getElementById('viewFunctionality'+variable).checked==true)
 			{
 				document.getElementById('viewFunctionality'+variable).checked=true;
 				document.getElementById('viewFunctionalityArray'+variable).value=1;
 			
 			}
 		
 		
 		}
 		
 		if(currentObj.name=='updateFunctionality'  && document.getElementById('addFunctionality'+variable).checked==true )
 		{
 			
 		document.getElementById('updateFunctionality'+variable).checked=true;
 		
 		document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('updateFunctionalityArray'+variable).value=1;
 		
 		document.getElementById('viewFunctionalityArray'+variable).value=1;
 			
 		}
 		if(currentObj.name=='viewFunctionality'  && document.getElementById('addFunctionality'+variable).checked==true )
 		{
 			
 		document.getElementById('updateFunctionality'+variable).checked=true;
 		
 		document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('updateFunctionalityArray'+variable).value=1;
 		
 		document.getElementById('viewFunctionalityArray'+variable).value=1;
 			
 		}
 		
 		
 		if(currentObj.name=='viewFunctionality'  && document.getElementById('updateFunctionality'+variable).checked==true )
 		{
 			
 		
 		document.getElementById('viewFunctionality'+variable).checked=true;
 		document.getElementById('viewFunctionalityArray'+variable).value=1;
 			
 		}
 		
 	}
 	
 	
 	
 	
 }
 
 
 
 function selectMode()
 {
 	
 	try
 	{
 	if(document.getElementById('branchId').value=='-1')
 	{
 		
 		alert('Select Branch Name');
 		document.getElementById('branchId').focus();
 		return false;
 	}
 	
 	
 	
 	
 	if(document.getElementById('modeId').value=='-1')
 	{
 		
 		alert('Select Mode');
 		document.getElementById('modeId').focus();
 	
 		return false;
 	}
 
 else
 {
 	
 	
 	
 	
 	return true;
 }
 
 
 }
catch(e)
{
	
	return false;
}
 }
 
 
 
 
 
 
 
 
 function selectModeBranchHead()
 {
 	
 	try
 	{
 	if(document.getElementById('branchId').value=='-1')
 	{
 		
 		alert('Select Branch Name');
 		document.getElementById('branchId').focus();
 		return false;
 	}
 	
 	
 	
 	
 	if(document.getElementById('modeId').value=='-1')
 	{
 		
 		alert('Select Mode');
 		document.getElementById('modeId').focus();
 	
 		return false;
 	}
 
 else
 {
 	
 	
 	
 	
 	return true;
 }
 
 }
catch(e)
{
	
	return false;
}
 
 }
 
 
 
 
 
 
 function selectModeForBranchDeptFunctonality()
 {
 	
 	
 	if(document.getElementById('branchId').value=='-1')
 	{
 		
 		alert('Select Branch Name');
 		document.getElementById('branchId').focus();
 		return false;
 	}
 	
 	
 	
 	
 	if(document.getElementById('modeId').value=='-1')
 	{
 		
 		alert('Select Mode');
 		document.getElementById('modeId').focus();
 	
 		return false;
 	}
 
 else
 {
 	
 	
 	
 	
 	return true;
 }
 
 }
 
 
 function addNewFunctionalities()
 {
 	document.getElementById('hiddenOperation').value='addNewFunctionalities';
		//document.getElementById('form2').submit();
 	
 	return true;	
 }
 
 
 function addNewFunctionalitiesParent()
 {
 	document.getElementById('hiddenOperation').value='addNewFunctionalitiesParent';
	///	alert("hhhhhjjaa");
		
		return true;	
		//document.getElementById('form8').submit();
 	
 }
 
 
 
 
 function updateNewFunctionalities()
 {
 	document.getElementById('hiddenOperation').value='updateNewFunctionalities';
		//document.getElementById('form7').submit();
 	return true;	
		
 }
 
 
 
 
 function addNewFunctionalitiesBranchHead()
 {
 	document.getElementById('hiddenOperation').value='addNewFunctionalitiesBranchHead';
		//document.getElementById('form5').submit();
 	return true;	
	
 }
 
 function updateNewFunctionalitiesBranchHead()
 {
 	document.getElementById('hiddenOperation').value='updateNewFunctionalitiesBranchHead';
		return true;
 	
 }
 
 function updateNewFunctionalitiesParent()
 {
 	
 	document.getElementById('hiddenOperation').value='updateNewFunctionalitiesParent';
		return true;
 }
 
 
function addBranchDepttFun(currentObj)
{
	
	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	
	
	else if(document.getElementById('departmentId').value==-1)
	{
		alert('Select Department Name');
		document.getElementById('departmentId').focus();
	return false;
	}
	
	
	
	else
	{
		document.getElementById('hiddenOperation').value='AddFunctionality';
		document.getElementById('form1').submit();
	}
	
	
} 
 
 
 
 function updateBranchDepttFun(currentObj)
{
	
	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	
	
	else if(document.getElementById('departmentId').value==-1)
	{
		alert('Select Department Name');
		document.getElementById('departmentId').focus();
	return false;
	}
	
	
	
	else
	{
		document.getElementById('hiddenOperation').value='UpdateFunctionality';
		document.getElementById('form1').submit();
	}
	
	
} 
 
 
 
function addBranchDepttBranchHeadFun(currentObj)
{
	
	//alert("dd");
	try
	{
	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	
	else if(document.getElementById('branchId').value==document.getElementById('branchDelegateBranchId').value)
	{
		alert("Add Functionality can't be given to your Branch, for that purpose, contact higher Branch Authority. \n"+'You can add Functionalites for your sub Branches only. \n' + 'You can Update and View Functionalities for your branch and sub branches.');
		document.getElementById('branchId').focus();
	return false;
	}
	
	
	
	else if(document.getElementById('departmentId').value==-1)
	{
		alert('Select Department Name');
		document.getElementById('departmentId').focus();
	return false;
	}
	
	
	
	else
	{
		document.getElementById('hiddenOperation').value='AddBranchHeadFunctionality';
		document.getElementById('form4').submit();
	}
	}
catch(e)
{
	
	return false;
}
	
} 
 
 

 
function updateBranchDepttBranchHeadFun(currentObj)
{
	
	//alert("dd");
	try
	{
	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	
	
	else if(document.getElementById('departmentId').value==-1)
	{
		alert('Select Department Name');
		document.getElementById('departmentId').focus();
	return false;
	}
	
	
	
	else
	{
		document.getElementById('hiddenOperation').value='UpdateBranchHeadFunctionality';
		document.getElementById('form4').submit();
	}
	}
catch(e)
{
	
	return false;
}
	
} 
 
 
 
 
 
 function viewBranchDepttBranchHeadFun(currentObj)
{
	
	//alert("dd");
	try
	{
	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	
	
	else if(document.getElementById('departmentId').value==-1)
	{
		alert('Select Department Name');
		document.getElementById('departmentId').focus();
	return false;
	}
	
	
	
	else
	{
		document.getElementById('hiddenOperation').value='ViewBranchHeadFunctionality';
		document.getElementById('form4').submit();
	}
	
	}
catch(e)
{
	
	return false;
}
} 
 	
 	
 	
 	

 
 
 
 
function viewBranchDepttFun(currentObj)
{
	
	try
	{
	
	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	
	
	else if(document.getElementById('departmentId').value==-1)
	{
		alert('Select Department Name');
		document.getElementById('departmentId').focus();
	return false;
	}
	
	else
	{
			document.getElementById('hiddenOperation').value='ViewFunctionality';
		document.getElementById('form1').submit();
	
		
	}

}
catch(e)
{
	
	return false;
}
} 
 
 
 
 
 
 
 
 
 
 
 
 function returnDepartmentsForAdd(branchId) {
 	//alert(currentObj.value);
 	try
 	{
 	if(currentObj.value==-1)
	{
 	document.getElementById('getDeptt').innerHTML=
 	'<select name="departmentId" id="departmentId" class="branchCombo1">' +
 	'<option value="-1">--Select--</option>' +
 	'</select>'

	}
 	
 	if(currentObj.value!=-1)
	{
 	//alert(document.getElementById('form1').basePath.value);
 	
 	loadXMLBranchDepartmentFunctionality();
 	//alert(document.getElementById('form1').basePath.value);
 	
 	basepath=document.getElementById('form1').basePath.value;
	//alert(document.getElementById('pp'));
	
	
	
	//document.getElementById('pp').style.display = 'inline'; 
	document.getElementById('getDeptt').innerHTML=
	'<font face="Verdana" size="2" color="#800000">Loading departments..</font>';
	
	queryString =basePath+"displayBranchAction.do?hiddenOperation=getDepartment"+"&branchId="+branchId.value;
//alert("queryString=="+queryString);
	
	xmlhttpBranch.onreadystatechange = handleStateChangeParentAdd;
	xmlhttpBranch.open("POST", queryString, true);
	xmlhttpBranch.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttpBranch.send(null);
		
		
	
	
	}
 }
catch(e)
{
	
	return false;
}
 
 }
 
 
 
function DepartmentsAdd()
{
	try
	{
	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		/////////////document.getElementById('hiddenOperation').value="";
		return true;
		
	}
	else
	{
	
	return false;
	}
}
catch(e)
{
	
	return false;
}
}


function DepartmentsUpdate()
{
	
	try
	{
	
	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	}
}
catch(e)
{
	
	return false;
}

}


function DepartmentsAddHOD()
{
	
	try
	{
	
	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	}
	}
catch(e)
{
	
	return false;
}
}
 
 

function DepartmentsUpdateHOD()
{
	
	try
	{
	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	}
	}
catch(e)
{
	
	return false;
}
}
 
 function SelectBranchForDepartmentFunctionalityAdd()
 {
 	
 	try
 	{
 	
 	if(document.getElementById('branchDepartmentId').value==-1)
	{
		alert('Select Department');
		document.getElementById('branchDepartmentId').focus();
	return false;
	}
	else
	{
		
		return true;
	}
 	
 	}
catch(e)
{
	
	return false;
}
 	
 }
 
 
 function SelectBranchForDepartmentFunctionalityAddBranchHead()
 {
 	
 	try
 	{
 	
 	if(document.getElementById('branchDepartmentId').value==-1)
	{
		alert('Select Department');
		document.getElementById('branchDepartmentId').focus();
	return false;
	}
	else
	{
		
		return true;
	}
 	}
catch(e)
{
	
	return false;
}
 }
 function SelectBranchForDepartmentFunctionalityUpdate()
 {
 	
 	try
 	{
 	
 	if(document.getElementById('branchDepartmentId').value==-1)
	{
		alert('Select Department');
		document.getElementById('branchDepartmentId').focus();
	return false;
	}
	else
	{
		
		return true;
	}
 	}
catch(e)
{
	
	return false;
}
 }
 
 function SelectBranchForDepartmentFunctionalityUpdateBranchHead()
 {
 	
 	try
 	{
 	
 	if(document.getElementById('branchDepartmentId').value==-1)
	{
		alert('Select Department');
		document.getElementById('branchDepartmentId').focus();
	return false;
	}
	else
	{
		
		return true;
	}
 	}
catch(e)
{
	
	return false;
}
 }
 
 function SelectBranchForDepartmentFunctionalityView()
 {
 	
 	try
 	{
 	
 	if(document.getElementById('branchDepartmentId').value==-1)
	{
		alert('Select Department');
		document.getElementById('branchDepartmentId').focus();
	return false;
	}
	else
	{
		
		return true;
	}
 	}
catch(e)
{
	
	return false;
}
 }
 
 function selectBranchForDepartmentFunctionalityBranchHead()
 {
 	
 	try
 	{
 		
 	
 	
 	if(document.getElementById('branchId').value==-1)
	{
		alert('Select Branch Name');
		document.getElementById('branchId').focus();
	return false;
	}
	if(document.getElementById('modeId').value==-1)
	{
		alert('Select Mode');
		document.getElementById('modeId').focus();
	return false;
	}
	
	
	else
	{
		
	return true;
	}
 }
catch(e)
{
	
	return false;
}
 }
 function showDepartmentFunctionalityAdd()
 {
 	
 	try
 	{
 	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	}
 }
catch(e)
{
	
	return false;
}
 }
 
 function showDepartmentFunctionalityAddBranchHead()
 {
 	
 	try
 	{
 	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	}
 }
catch(e)
{
	
	return false;
}
 }
 
  function showDepartmentFunctionalityUpdate()
 {
 	try
 	{
 		
 	
 	
 	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	
	}
 
 }
catch(e)
{
	
	return false;
}
 }
 
 
 
  function showDepartmentFunctionalityUpdateBranchHead()
 {
 	
 	try
 	{
 	var temp=confirm('Are you sure ?');
	if(temp==true)
	{
		
		return true;
		
	}
	else
	{
	
	return false;
	}
 
 }
catch(e)
{
	
	return false;
}
 }
 
 
 

function generateNewRowForSubDeptt(tableID,variable,branchDepartmentId)
{
var counterRowForSubDeptt=document.getElementById('counter').value;
 
 if(counterRowForSubDeptt==100)
 {
 alert('Not More Then Hundered Rows Allowed At A Time')
 
 }
 else
 {
     var table = document.getElementById(tableID);
	 
	            var rowCount = table.rows.length-1;
	            var row = table.insertRow(rowCount);
	 

	  row.id="trSubDeptt"+counterRowForSubDeptt;
row.setAttribute('noWrap','true');
row.setAttribute('class','label');



		            var cell = row.insertCell(0);
		            var element = document.createTextNode("Enter Sub Department");
		           

        
      
	 
	
	cell.className = 'branchDepartmentFunctionality8ptCenterBlue';
        cell.appendChild(element);
	 
	   


		            var cell = row.insertCell(1);
		            var element = document.createElement("input");
		           

element.id = "name"+counterRowForSubDeptt;
element.name="name";
element.type = "text";
	  
	  
	  element.style.color="#000000";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	    
	  
	    element.size="20";
        
      
	 
	
	cell.className = 'branchDepartmentFunctionality8ptCenterBlue';
        cell.appendChild(element);
	 
	   




   var cell = row.insertCell(2);
   
  var element = document.createElement("img");
element.id = "remove"+counterRowForSubDeptt;
element.name="remove";
element.type = "src";
element.src = "images/removeimage.gif";
element.width='15';
element.height='15';	 

	 
  
 cell.className = 'branchDepartmentFunctionality8ptCenterBlue';
   
    var domHiddenTextSubDeptt='domHiddenTextSubDeptt'+counterRowForSubDeptt;
	//var counterRowForSubDepttxx=document.getElementById('perTableHidden'+variable).value;            
	
	 ///var domHiddenTextSubDepttxx='domHiddenTextSubDepttxx'+counterRowForSubDepttxx;
	
    element.onclick=function () {
deleteNewRowForSubDeptt(tableID,document.getElementById(domHiddenTextSubDeptt).value);
//deleteNewRowForSubDeptt(tableID,parseInt(counterRowForSubDepttxx)+1);

};
 
 element.onmouseover=function()
 {
  Tip('Click To Delete Row');
 };
 element.onmouseout=function()
 {
  UnTip();
 }
   
  
	  cell.appendChild(element);
	 
	 
	 
	 
	 
	 
	
      var element1 = document.createElement("input");
		            
	
element1.id = "domHiddenTextSubDeptt"+counterRowForSubDeptt;
element1.name="domHiddenTextSubDeptt";
element1.type = "hidden";
	element1.value=counterRowForSubDeptt;  
    element1.size="5";
	
	 
	
      var element2 = document.createElement("input");
		            
	
element2.id = "id"+counterRowForSubDeptt;
element2.name="branchDepartmentId";
element2.type = "hidden";
	element2.value=branchDepartmentId;  
    element2.size="5";
	
	
      var element3 = document.createElement("input");
		
element3.id = "status"+counterRowForSubDeptt;
element3.name="status";
element3.type = "hidden";
	element3.value=1;  
    element3.size="5";
	       var element4 = document.createElement("input");
		
element4.id = "id"+counterRowForSubDeptt;
element4.name="id";
element4.type = "hidden";
	element4.value=0;  
    element4.size="5";
	                 
	
	cell.appendChild(element1);
	
	cell.appendChild(element2);
	cell.appendChild(element3);
	cell.appendChild(element4);
	
	 
	  /*
	   var element1 = document.createElement("input");
		
element1.id = "domHiddenTextSubDepttxx"+counterRowForSubDepttxx;
element1.name="domHiddenTextSubDepttxx";
element1.type = "text";
	element1.value=parseInt(counterRowForSubDepttxx)+1;  
    element1.size="5";
	
	cell.appendChild(element1);
	 
	 counterRowForSubDepttxx++;     
	 document.getElementById('perTableHidden'+variable).value=counterRowForSubDepttxx;
	  */
	  
	  
	   counterRowForSubDeptt++;     
	  document.getElementById('counter').value=counterRowForSubDeptt;
 
 }
 
 
} 


function deleteNewRowForSubDeptt(tableID,serial)


//function deleteNewRowForSubDeptt(tableID,counterRowForSubDeptt)
{

UnTip();
	///alert( document.getElementById('trSubDeptt'+serial).getElementsByTagName('td')[1]);
	
	//alert(serial);
	
	          //  var table = document.getElementById(tableID);
	            /// var rowCount = table.rows.length;
	 // alert(document.getElementById('trSubDeptt0').innerHTML);
	 
	 // document.getElementById('trSubDeptt'+serial).innerText="";
	  
	  
	 
	 // document.getElementById('trSubDeptt'+serial).firstChild.innerHTML="";
	////document.getElementById('trSubDeptt'+serial).getElementsByTagName('td')[0].innerHTML='ttt';
	//document.getElementById('trSubDeptt'+serial).getElementsByTagName('td')[1].innerHTML='555';
	//document.getElementById('trSubDeptt'+serial).getElementsByTagName('td')[2].innerHTML='tttt';
	
	// document.getElementById(tableID).deleteRow(counterRowForSubDeptt);
	   // alert(document.getElementById('name'+serial).value);
	    if(document.getElementById('name'+serial).value=='')
	    {
	     //alert('asa');
	    
	     document.getElementById('trSubDeptt'+serial).style.display='none';
	       document.getElementById('name'+serial).value='';
	   
	    }
	   else
	   { 
	    var temp=confirm('Are You Sure You Want To Remove ?')
	    if(temp==true)
	    {
	    
	    document.getElementById('trSubDeptt'+serial).style.display='none';
	       document.getElementById('name'+serial).value='';
	   
	    }
	        
	    }       
	        }
	        
	        
	        
	        
	        function showHideSubDeptt(plusMinus)
	        {
	        UnTip();
	        if(plusMinus=='-')
	        {
	        
	        	$('#showHideSubDepttDivId').fadeOut(1000);     
	       
	      document.getElementById('plusMinusSubDepttDivId').innerHTML='<a href="javascript:void(0)" onmouseover="Tip(\'Show\');" onmouseout="UnTip();" onclick="showHideSubDeptt(\'+\');" >+</a>';
	      
	       //Tip('Click Me To Remove Line');
	         }
	        else
	        {
	        	$('#showHideSubDepttDivId').fadeIn(1000);     
	        document.getElementById('plusMinusSubDepttDivId').innerHTML='<a href="javascript:void(0)" onmouseover="Tip(\'Hide\');" onmouseout="UnTip();" onclick="showHideSubDeptt(\'-\');" >-</a>';
	      
	        }
	        
	        
	        }
	        
	        
	        
	        
	        
	        function updateSubDepttDivIdFun(sr,objDiv)
	        {
	      var xx=sr;
	     /// var yy=document.getElementById('changeName'+xx);
	     // alert(yy);
	      //document.getElementById('srSubDeptt').value=sr;
	      
	      
	      if(document.getElementById('nameDynamicTextSubDeptt'+xx))
	      {
	      
	      }
	      
	   //    objDiv.innerHTML='<input type="text" value="ss"  onblur="onBlurchangeNameSubDeptt(\'+xx+\');">'+
	     //  ' <input type="button" value="Update"/><input type="button" value="Cancel"/><input type="button" value="Not Working"/> ';
	   //    document.getElementById('changeName'+xx).value='I'
	   else
	   {
	   /// document.getElementById('changeName'+xx).value='I';
	 // originalValue=   objDiv.innerHTML;
   objDiv.innerHTML='';	
   
 var element = document.createElement("input");
element.type = "text";
element.name = "name";
element.id = "nameDynamicTextSubDeptt"+xx;
element.value = document.getElementById('nameDynamic'+xx).value;;

	//element.className = 'branchheader8ptLeftRedWithoutBorder';
	  objDiv.appendChild(element);


var element = document.createElement("input");
element.type = "hidden";
element.name = "branchDepartmentId";
element.id = "branchDepartmentIdDynamicTextSubDeptt"+xx;
element.value = document.getElementById('branchDepartmentIdDynamic'+xx).value;;

	  objDiv.appendChild(element);


var element = document.createElement("input");
element.type = "hidden";
element.name = "status";
element.id = "statusDynamicTextSubDeptt"+xx;
element.value = document.getElementById('statusDynamic'+xx).value;;
	  objDiv.appendChild(element);



 var element = document.createElement("input");
element.type = "hidden";
element.name = "id";
element.id = "idDynamicTextSubDeptt"+xx;
///alert(document.getElementById('id'+xx).value);
element.value=document.getElementById('idDynamic'+xx).value;

	element.className = 'branchheader8ptLeftRedWithoutBorder';
	  objDiv.appendChild(element);



 var element = document.createElement("input");
element.type = "button";
element.name = "Update";
element.value = "Update";
	element.className = 'branchheader8ptLeftRedWithoutBorder';

element.onclick=function () {
updateSubDepartment(xx,objDiv);
};
	  objDiv.appendChild(element);

 var element = document.createElement("input");
element.type = "button";
element.name = "Cancel";
element.value = "Cancel";
	element.className = 'branchheader8ptLeftRedWithoutBorder';


element.onclick=function () {
cancelSubDeptt(xx,objDiv);
};

	  objDiv.appendChild(element);


 var element = document.createElement("input");
element.type = "button";
element.name = "WorkingNotWorking";
if(document.getElementById("statusDynamic"+xx).value==1)
{
element.value = "Not Working";

}
else
{
element.value = "Working";
}
	element.className = 'branchheader8ptLeftRedWithoutBorder';
	
	
element.onclick=function () {
WorkingNotWorkingSubDepartment(xx,objDiv);
};
	  objDiv.appendChild(element);




//element.onfocus=function () {
//onBlurchangeNameSubDeptt(xx);

///};
 
   
   	
document.getElementById("nameDynamicTextSubDeptt"+xx).focus();	 
	 }
	   
	   
	   
	      }
	      
	      
	      
	      //alert(xx);
	       

	       function onBlurchangeNameSubDeptt(xx)
	       {
	       //alert('xx=='+xx);
	     /// yy.value='O'
	     // document.getElementById('changeName'+xx).value='O';
	       }
	       
	       function cancelSubDeptt(xx,objDiv)
	       {
	       objDiv.innerHTML=document.getElementById("nameDynamic"+xx).value;	 
	       
	       }
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       

function updateSubDepartment(xx,objDiv)
{
loadXMLBranchDepartmentFunctionality();

//status is not working in IE, hence statusx is used.
statusx=document.getElementById('statusDynamicTextSubDeptt'+xx).value;
id=document.getElementById("idDynamicTextSubDeptt"+xx).value;
name=document.getElementById("nameDynamicTextSubDeptt"+xx).value;

branchDepartmentId=document.getElementById("branchDepartmentIdDynamicTextSubDeptt"+xx).value;


objDiv.innerHTML='<font face="Verdana" size="1" color="#800000">Updating ....</font>';

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"submitBranchDepartmentFunctionalityAction.do?hiddenOperation=subDepartmentAjax&id="+id+"&name="+name+"&branchDepartmentId="+branchDepartmentId+"&status="+statusx+"&xx="+xx;


xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleUpdateSubDepartment;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	
}

function handleUpdateSubDepartment()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {


	if(xmlhttpBranchDepartmentFunctionality.responseText!='')
	{
document.getElementById("updateSubDepttDivId"+xmlhttpBranchDepartmentFunctionality.getResponseHeader("xx")).innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
document.getElementById("nameDynamic"+xmlhttpBranchDepartmentFunctionality.getResponseHeader("xx")).value=xmlhttpBranchDepartmentFunctionality.responseText;
	
	}
else
{
document.getElementById("updateSubDepttDivId"+xmlhttpBranchDepartmentFunctionality.getResponseHeader("xx")).innerHTML=document.getElementById("nameDynamic"+xmlhttpBranchDepartmentFunctionality.getResponseHeader("xx")).value;

}	
	
	}
}

}








   

function WorkingNotWorkingSubDepartment(xx,objDiv)
{
var temp=confirm('Are You Sure?')
if(temp==true)
{

loadXMLBranchDepartmentFunctionality();

id=document.getElementById("idDynamicTextSubDeptt"+xx).value;
name=document.getElementById("nameDynamicTextSubDeptt"+xx).value;
branchDepartmentId=document.getElementById("branchDepartmentIdDynamicTextSubDeptt"+xx).value;
statusx=document.getElementById("statusDynamicTextSubDeptt"+xx).value;
if(statusx==0)
{
statusx=1;
}
else
{
statusx=0;
}

document.getElementById("updateSubDepttDivId"+xx).innerHTML=document.getElementById("nameDynamicTextSubDeptt"+xx).value;

document.getElementById('WorkingNotWorkingSubDepttDivId'+xx).innerHTML='<font face="Verdana" size="1" color="#800000">Updating ....</font>';

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"submitBranchDepartmentFunctionalityAction.do?hiddenOperation=subDepartmentAjaxWorkingNotWorking&id="+id+"&name="+name+"&branchDepartmentId="+branchDepartmentId+"&status="+statusx+"&xx="+xx;


xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleWorkingNotWorkingSubDepartment;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	
}
}
function handleWorkingNotWorkingSubDepartment()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
	
document.getElementById("WorkingNotWorkingSubDepttDivId"+xmlhttpBranchDepartmentFunctionality.getResponseHeader("xx")).innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
document.getElementById("statusDynamic"+xmlhttpBranchDepartmentFunctionality.getResponseHeader("xx")).value=xmlhttpBranchDepartmentFunctionality.getResponseHeader("status");
	
	
	}
}

}



















function SubBranchSubDepartment()
{
loadXMLBranchDepartmentFunctionality();

document.getElementById('populateSubDepartmentSubBranch').innerHTML='<font face="Verdana" size="2" >Loading ....</font>';
	
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=subDepartmentSubBranch";


xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubBranchSubDepartment;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	

}
function handleSubBranchSubDepartment()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
	document.getElementById('populateSubDepartmentSubBranch').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	
	}
}

}


function BranchSubDepartmentCheck()
{

temp=confirm('Are you sure you want to proceed?');
if(temp==true)
{
return true;
}
else
{
return true;
}
}



function getSubLocationForDepartment()
{

loadXMLBranchDepartmentFunctionality();
branchDepartmentId=document.getElementById('branchDepartmentId').value;
document.getElementById('populateDepartmentForSubLocation').innerHTML='';

if(branchDepartmentId==-1)
{

document.getElementById('loadingSubLocationForDepartmentDiv').innerHTML='';

document.getElementById('loadingSubmitsubDepttIdSubLocation').innerHTML='';

//document.getElementById('subDepttIdSubLocationTr').style.display='none';

//document.getElementById('subDepttIdSubLocationSubmitTr').style.display='none';


}
else
{


//document.getElementById('subDepttIdSubLocationTr').style.display='';

//document.getElementById('subDepttIdSubLocationSubmitTr').style.display='';

document.getElementById('loadingSubLocationForDepartmentDiv').innerHTML='<font face="Verdana" size="1" color="#800000">Loading ....</font>';

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=departmentSubLocationList&branchDepartmentId="+branchDepartmentId;


xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubDepartmentForSubLocation;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	

}
}

function handleSubDepartmentForSubLocation()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
	
document.getElementById('loadingSubLocationForDepartmentDiv').innerHTML='';

	document.getElementById('populateDepartmentForSubLocation').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	
	}
}

}











function getSubDepartmentForDepartment()
{

loadXMLBranchDepartmentFunctionality();
branchDepartmentId=document.getElementById('branchDepartmentId').value;

document.getElementById('LoadingSubDepartmentForDepartmentDivId').innerHTML='';
document.getElementById('populateSubDepartmentForDepartment').innerHTML='';
document.getElementById('subDepartmentDepartmentTrId').style.display='none';
document.getElementById('subDepartmentDepartmentTrIdSubmit').style.display='none';

document.getElementById('populateSubLocationForSubDepartment').style.display='none';

if(branchDepartmentId!=-1)
{

document.getElementById('subDepartmentDepartmentTrId').style.display='';
document.getElementById('LoadingSubDepartmentForDepartmentDivId').innerHTML='<font face="Verdana" size="1" color="#800000">Loading ....</font>';
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=SubDepartmentForDepartment&branchDepartmentId="+branchDepartmentId;
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubDepartmentForDepartment;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	

}
}

function handleSubDepartmentForDepartment()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
	document.getElementById('subDepartmentDepartmentTrIdSubmit').style.display='';
	
document.getElementById('LoadingSubDepartmentForDepartmentDivId').innerHTML='';
	document.getElementById('populateSubDepartmentForDepartment').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	}
}

}




function getSubLocationForSubDepartment()
{


loadXMLBranchDepartmentFunctionality();
branchSubDepartmentId=document.getElementById('branchSubDepartmentId').value;


branchDepartmentId=document.getElementById('branchDepartmentId').value;
document.getElementById('populateSubLocationForSubDepartment').style.display='';
	document.getElementById('LoadingSubDepartmentForDepartmentDivId').innerHTML='';

if(document.getElementById('branchSubDepartmentId').selectedIndex==0)
{
alert('Select Sub Department');
document.getElementById('branchSubDepartmentId').focus();
return false;
}


if(branchSubDepartmentId!=-1)
{

document.getElementById('LoadingSubDepartmentForDepartmentDivId').innerHTML='<font face="Verdana" size="1" color="#800000">Loading ....</font>';
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=SubLocationListForSubDepartment&branchSubDepartmentId="+branchSubDepartmentId+"&branchDepartmentId="+branchDepartmentId;
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubLocationForSubDepartment;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	

}
}

function handleSubLocationForSubDepartment()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
	
document.getElementById('LoadingSubDepartmentForDepartmentDivId').innerHTML='';
	document.getElementById('populateSubLocationForSubDepartment').style.display='';
	
	document.getElementById('populateSubLocationForSubDepartment').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	}
}

}




function removeSubLocationFromSubDepartment()

{
document.getElementById('populateSubLocationForSubDepartment').style.display='none';
	

}




















function changeBranchDepartmentFunctionality()
{
	if(document.getElementById('subDepartmentAndSubLocationFormId'))
	{
	
	document.getElementById('branchDepartmentId').selectedIndex=0;
	}
	
	
	
	}
 	      	        
 	      	       
window.setTimeout(changeBranchDepartmentFunctionality,1000);










function getSubDepartmentForSubLocationSubmit()
{
loadXMLBranchDepartmentFunctionality();

branchSubDepartmentId=document.getElementById('branchSubDepartmentId').value;
if(branchSubDepartmentId==-1)
{
document.getElementById('SubDepartmentAndSubLocationData').innerHTML='';
document.getElementById('loadingSubmitsubDepttIdSubLocation').innerHTML='';
alert('Select Sub Department');
document.getElementById('branchSubDepartmentId').focus();

}
else
{
var branchDepartmentIdCombo = document.getElementById("branchSubDepartmentId");
    var natureOfInjuryComboVal = branchDepartmentIdCombo.options[branchDepartmentIdCombo.selectedIndex].text
document.getElementById('branchSubDepartmentName').value=natureOfInjuryComboVal;
branchSubDepartmentName=document.getElementById('branchSubDepartmentName').value;
document.getElementById('loadingSubmitsubDepttIdSubLocation').innerHTML='<font face="Verdana" size="1" color="#800000">Loading ....</font>';
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=subDepartmentSubLocationSubmit&branchSubDepartmentId="+branchSubDepartmentId+"&branchSubDepartmentName="+branchSubDepartmentName;
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubDepartmentForSubLocationSubmit;
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	
}
}

function handleSubDepartmentForSubLocationSubmit()
{

if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
	document.getElementById('loadingSubmitsubDepttIdSubLocation').innerHTML='';
	
	document.getElementById('SubDepartmentAndSubLocationData').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	}
}

}










function associateSublocationSubDepartmentCheckBoxFun(obj,serialNo)
{

if(obj.checked)
{
document.getElementById('associateSubDepartmentSublocationTextAdd'+serialNo).value=1;
}
else
{
document.getElementById('associateSubDepartmentSublocationTextAdd'+serialNo).value=0;

}

}


function associateSubDepartmentSublocationCheckBoxFun(obj,serialNo)
{

if(obj.checked)
{
document.getElementById('associateSubDepartmentSublocationText'+serialNo).value=1;
}
else
{
document.getElementById('associateSubDepartmentSublocationText'+serialNo).value=0;

}

}


function changeSubDepttSubLocationCheckTextValue(obj,serialNo)
{
if(obj.checked)
{
document.getElementById('subDepttSubLocationCheckText'+serialNo).value=1;
}
else
{
document.getElementById('subDepttSubLocationCheckText'+serialNo).value=0;

}

}



function subDepartmentSubLocationSubmitFinal()
{

var temp=confirm('Are you sure, you want to proceed?');
if(temp==true)
{

document.getElementById('hiddenOperation').value='subDepartmentSubLocationSubmitFinal';
document.getElementById('subDepartmentAndSubLocationFormId').submit();
return true;
}
else
{
return false;
}

}


function removeSubDepttSubLocationInsert()
{

document.getElementById('SubDepartmentAndSubLocationData').innerHTML='';


}






 
 
 function changeAssociateYesNoSubDepttSubLocation(currentObj,variable)
 {
 	
 	
 	if(document.getElementById('statusAssociateYesNo'+variable).value==0)
 	{
 		//currentObj.checked=false;
 
 		var temp=confirm('Are you sure, you want to associate ?');
 		{
 		if(temp==true)
 		{
 		document.getElementById('associateSubDepartmentSublocationText'+variable).value=1;
 		document.getElementById('statusAssociateYesNo'+variable).value=1;
 		
 		changeAssociateYesNoSubDepttSubLocationAjax(currentObj,variable);
 		//currentObj.checked=true;
 		
 		}
 		else
 		{
 		currentObj.checked=false;
 		
 		}
 		
 		
 		}
 		
 		
 	}
 	else
 	{
 		var temp=confirm('Are you sure, you want to remove association ?');
 		{
 		if(temp==true)
 		{
 	
 		document.getElementById('associateSubDepartmentSublocationText'+variable).value=0;
 		document.getElementById('statusAssociateYesNo'+variable).value=0;
 		
 		changeAssociateYesNoSubDepttSubLocationAjax(currentObj,variable);
 		}
       else
       {
        currentObj.checked=true;
 		
        }
 		}
 
 		
 		
 		
 	}
 	
 }
 
 
 
 
 
 
 
 
 function changeAssociateYesNoDepttSubLocation(currentObj,variable)
 {
 	
 	
 	if(document.getElementById('statusAssociateYesNo'+variable).value==0)
 	{
 		//currentObj.checked=false;
 
 		var temp=confirm('Are you sure, you want to associate ?');
 		{
 		if(temp==true)
 		{
 		document.getElementById('statusAssociateYesNo'+variable).value=1;
 		
 		changeAssociateYesNoDepttSubLocationAjax(currentObj,variable);
 		//currentObj.checked=true;
 		
 		}
 		else
 		{
 		currentObj.checked=false;
 		
 		}
 		
 		
 		}
 		
 		
 	}
 	else
 	{
 		var temp=confirm('Are you sure, you want to remove association ?');
 		{
 		if(temp==true)
 		{
 		document.getElementById('statusAssociateYesNo'+variable).value=0;
 		
 		changeAssociateYesNoDepttSubLocationAjax(currentObj,variable);
 		}
       else
       {
        currentObj.checked=true;
 		
        }
 		}
 
 		
 		
 		
 	}
 	
 }
 
 
 
 
 
 
 
 
 
 
 
 function changeAssociateYesNoDepttSubLocationAjax(currentObj,variable)
 {
 
 
 loadXMLBranchDepartmentFunctionality();
 checkedOrUnChecked=currentObj.checked;
 //alert("vvvvvv=="+variable);
 id=document.getElementById('id'+variable).value;
statusValue=document.getElementById('statusAssociateYesNo'+variable).value;

//alert("Status==="+document.getElementById('statusAssociateYesNo'+variable).value);
//alert("Statusaaaaaaaaaaaa==="+statusxx);

branchDepartmentId=document.getElementById('branchDepartmentId'+variable).value;

principalEmployerPostId=document.getElementById('principalEmployerPostId'+variable).value;
//associateSubDepartmentSublocationText=document.getElementById('associateSubDepartmentSublocationText'+variable).value;
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=departmentSubLocationUpdate&id="+id+"&currentObj="+currentObj+"&variable="+variable+"&status="+statusValue+"&branchDepartmentId="+branchDepartmentId+"&principalEmployerPostId="+principalEmployerPostId+"&checkedOrUnChecked="+checkedOrUnChecked;

document.getElementById('associateYesNoDivId'+variable).innerHTML=	'<font face="Verdana" size="1" color="#800000">Updating..</font>';

 
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleChangeAssociateYesNoDepttSubLocationAjax;

xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	
 }
 
 
 function handleChangeAssociateYesNoDepttSubLocationAjax()
 {

 
if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {

	document.getElementById('associateYesNoDivId'+xmlhttpBranchDepartmentFunctionality.getResponseHeader("variable")).innerHTML='<font face="Verdana" size="1" color="#800000">Updated</font>';
	document.getElementById('associateYesNoDivId'+xmlhttpBranchDepartmentFunctionality.getResponseHeader("variable")).innerHTML='';
	
	///alert(xmlhttpBranchDepartmentFunctionality.getResponseHeader("currentObj"));
	
	/*
	if(xmlhttpBranchDepartmentFunctionality.getResponseHeader("checkedOrUnChecked")=='true')
	{
	document.getElementById(xmlhttpBranchDepartmentFunctionality.getResponseHeader("currentObj")).checked=false;
	}
	else
	{
	document.getElementById(xmlhttpBranchDepartmentFunctionality.getResponseHeader("currentObj")).checked=true;
	
	}
	*/
	}
 
 }
 }
 
 
 
 
 
 
 
 
 
 
 
 function SubBranchSubDepartmentSubLocation()
 {
 loadXMLBranchDepartmentFunctionality();
 
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=subDepartmentSubLocationSubBranch";
document.getElementById('SubBranchSubDepartmentSubLocationDiv').innerHTML='<font face="Verdana" size="1" color="#800000">Loading...</font>';

xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubBranchSubDepartmentSubLocation;

xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);
 
 }
 
 
 function handleSubBranchSubDepartmentSubLocation()
 {
if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
document.getElementById('SubBranchSubDepartmentSubLocationDiv').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	}
 
 }
 }
 
 
 
 
 function SubBranchDepartmentSubLocation()
 {
 loadXMLBranchDepartmentFunctionality();
 
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=departmentSubLocationSubBranch";
document.getElementById('SubBranchDepartmentSubLocationDiv').innerHTML='<font face="Verdana" size="1" color="#800000">Loading...</font>';

xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubBranchDepartmentSubLocation;

xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);
 
 }
 
 
 function handleSubBranchDepartmentSubLocation()
 {
if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
document.getElementById('SubBranchDepartmentSubLocationDiv').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	}
 }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 function SubBranchSubDepartmentSubLocationNew()
 {
 loadXMLBranchDepartmentFunctionality();
 
queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=SubDepartmentAndSubLocationSubBranch";
document.getElementById('SubBranchDepartmentSubLocationNewDiv').innerHTML='<font face="Verdana" size="1" color="#800000">Loading...</font>';

xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleSubBranchSubDepartmentSubLocationNew;

xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);
 
 }
 
 
 function handleSubBranchSubDepartmentSubLocationNew()
 {
if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {
document.getElementById('SubBranchDepartmentSubLocationNewDiv').innerHTML=xmlhttpBranchDepartmentFunctionality.responseText;
	}
 }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 function verifySubDepartmentAndSubLocationFormId()
 {
 temp=confirm('Are you sure?');
 if(temp==true)
 {
 document.getElementById('departmentAndSubLocationFormId').submit();
 }
 else
 {
 return false;
 }
 
 }
 
 
 
 
 
 
 function verifySubLocationAndSubDepartmentFormId()
 {
 temp=confirm('Are you sure?');
 if(temp==true)
 {
 document.getElementById('subDepartmentAndSubLocationFormId').submit();
 }
 else
 {
 return false;
 }
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function changeAssociateYesNoSubDepttSubLocationAjax(currentObj,variable)
 {
 
 
 loadXMLBranchDepartmentFunctionality();
 checkedOrUnChecked=currentObj.checked;
 //alert("vvvvvv=="+variable);
 id=document.getElementById('id'+variable).value;
statusValue=document.getElementById('statusAssociateYesNo'+variable).value;

//alert("Status==="+document.getElementById('statusAssociateYesNo'+variable).value);
//alert("Statusaaaaaaaaaaaa==="+statusxx);

branchSubDepartmentId=document.getElementById('branchSubDepartmentId'+variable).value;
branchDepartmentSubLocationId=document.getElementById('branchDepartmentSubLocationId'+variable).value;
associateSubDepartmentSublocationText=document.getElementById('associateSubDepartmentSublocationText'+variable).value;
subLocation=document.getElementById('subLocation'+variable).value;

queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayBranchDepartmentFunctionalityAction.do?hiddenOperation=subDepartmentSubLocationUpdateNew&id="+id+"&currentObj="+currentObj+"&variable="+variable+"&status="+statusValue+"&branchDepartmentSubLocationIdUpdate="+branchDepartmentSubLocationId+"&branchSubDepartmentIdUpdate="+branchSubDepartmentId+"&subLocationUpdate="+subLocation+"&checkedOrUnChecked="+checkedOrUnChecked+"&associateSubDepartmentSublocationTextUpdate="+associateSubDepartmentSublocationText+"&currentObj="+currentObj+"&idUpdate="+id;

document.getElementById('associateYesNoDivId'+variable).innerHTML=	'<font face="Verdana" size="1" color="#800000">Updating..</font>';

 
xmlhttpBranchDepartmentFunctionality.open("POST", queryString, true);
xmlhttpBranchDepartmentFunctionality.onreadystatechange = handleChangeAssociateYesNoSubDepttSubLocationAjax;

xmlhttpBranchDepartmentFunctionality.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xmlhttpBranchDepartmentFunctionality.send(null);	
 }
 
 
 function handleChangeAssociateYesNoSubDepttSubLocationAjax()
 {

 
if (xmlhttpBranchDepartmentFunctionality.readyState == 4) {
	if (xmlhttpBranchDepartmentFunctionality.status == 200) {

	document.getElementById('associateYesNoDivId'+xmlhttpBranchDepartmentFunctionality.getResponseHeader("variable")).innerHTML='<font face="Verdana" size="1" color="#800000">Updated</font>';
	document.getElementById('associateYesNoDivId'+xmlhttpBranchDepartmentFunctionality.getResponseHeader("variable")).innerHTML='';
	
///	alert(xmlhttpBranchDepartmentFunctionality.getResponseHeader("currentObj"));
	
	/*
	if(xmlhttpBranchDepartmentFunctionality.getResponseHeader("checkedOrUnChecked")=='true')
	{
	document.getElementById(xmlhttpBranchDepartmentFunctionality.getResponseHeader("currentObj")).checked=false;
	}
	else
	{
	document.getElementById(xmlhttpBranchDepartmentFunctionality.getResponseHeader("currentObj")).checked=true;
	
	}
	*/
	}
 
 }
 }
 
 
 
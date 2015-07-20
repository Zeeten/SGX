function checkOnSubmit(){
	var deptId = document.getElementById("departmentName");
	if(deptId === null || deptId === undefined || deptId.value === ''){
		alert("PLEASE ENTER THE NAME");
		return false;
	}
	else {
		return true;
	}
}
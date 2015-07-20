function alphabet(obj) {
	valid = true;
	var alphaExp = /^[a-z A-Z , .]+$/;
	if (obj.value.match(alphaExp)) {
		return true;
	} else {
		if (obj.value.length > 0) {
			alert("Please enter alphabets only");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return valid;
}

// Added by Vidya on 25th Feb for EPF withdrawal Form 19.
function validateWithdrawalForm(){
	   if((document.getElementById("byPostalMoneyOrderAtMyCost").checked == false) 
	    && (document.getElementById("byAccountPayeeChequeSent").checked == false)){
		alert("Please select mode of remittance.");
		document.getElementById("byPostalMoneyOrderAtMyCost").focus();
		return false;
	   }var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
		}else {
	    return false;
	   }
	}   

    function disableBankInfo(){ 
        if(document.getElementById("byPostalMoneyOrderAtMyCost").checked == true){
           document.getElementById('sbAccountNo').value = "";
           document.getElementById('sbAccountNo').readOnly = true;
           document.getElementById('nameOfTheBank').value = "";
           document.getElementById('nameOfTheBank').readOnly = true;
           document.getElementById('branchName').value = "";
           document.getElementById('branchName').readOnly = true;
           document.getElementById('fullAddressOfBranch').value = "";
           document.getElementById('fullAddressOfBranch').readOnly = true;
        }
        if(document.getElementById("byAccountPayeeChequeSent").checked == true
         ||document.getElementById("directForcreditToMySbAccount").checked == true  
         ||document.getElementById("scheduleBankPO").checked == true){
           document.getElementById('sbAccountNo').readOnly = false;
           document.getElementById('nameOfTheBank').readOnly = false;
           document.getElementById('branchName').readOnly = false;
           document.getElementById('fullAddressOfBranch').readOnly = false;
        }
    }	
    
    function employerClaim(){
        if(document.getElementById('employersSignature').value ==""){
         alert("Please enter signature.");
	     document.getElementById('employersSignature').focus();
	     return false;
        }
        if(document.getElementById('employerDesignation').value ==""){
         alert("Please enter designation and seal.");
	     document.getElementById('employerDesignation').focus();
	     return false;
        }
        if(document.getElementById('employerDate').value ==""){
         alert("Please enter date.");
	     document.getElementById('employerDate').focus();
	     return false;
        }var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
		}else{
         return false;
        }
    }
//Ended by Vidya


// Added by Vidya For EPS Pension Scheme 10-C on 11th March 2010
 function validateEPS(){
      if((document.getElementById("acceptCertificateYes").checked == false) 
	    && (document.getElementById("acceptCertificateNo").checked == false)){
		alert("Please select scheme certificate.");
		document.getElementById("acceptCertificateYes").focus();
		return false;
	   }
      if(document.getElementById('familyMemberName1').value == ""){
         alert("Please enter name of family member");
         document.getElementById('familyMemberName1').focus();
         return false;
      }
      if (alphabet(document.getElementById('familyMemberName1')) == false) {
		return false;
	  }
      if(document.getElementById('familyMemberBirthDate1').value == ""){
         alert("Please enter date of birth of family member");
         document.getElementById('familyMemberBirthDate1').focus();
         return false;
      }
      if(document.getElementById('familyMemberRelation1').value == ""){
         alert("Please enter relation of family member");
         document.getElementById('familyMemberRelation1').focus();
         return false;
      }
      //if(document.getElementById('familyMemberGuardianName1').value == ""){
      //   alert("Please enter name of guardian of family member");
      //   document.getElementById('familyMemberGuardianName1').focus();
      //   return false;
      //}
      if(document.getElementById('nomineeName1').value == ""){
         alert("Please enter name of nominee");
         document.getElementById('nomineeName1').focus();
         return false;
      }
      if (alphabet(document.getElementById('nomineeName1')) == false) {
		return false;
	  }
      if(document.getElementById('nomineeBirthDate1').value == ""){
         alert("Please enter date of birth of nominee");
         document.getElementById('nomineeBirthDate1').focus();
         return false;
      }
      if(document.getElementById('nomineeRelation1').value == ""){
         alert("Please enter relation of nominee");
         document.getElementById('nomineeRelation1').focus();
         return false;
      }
     // if(document.getElementById('nomineeGuardianName1').value == ""){
     //    alert("Please enter name of guardian of nominee");
     //    document.getElementById('nomineeGuardianName1').focus();
     //    return false;
     // }
      if ((document.getElementById("ByPostalMoney").checked == false) 
	    &&(document.getElementById("AccountPayeeCheque").checked == false)){
	     alert("Please select mode of remittance.");
		 document.getElementById("ByPostalMoney").focus();
		 return false;
      }
      //   if(document.getElementById('memberSignature').value == ""){
      //   alert("Please enter signature of member / claimant(s).");
	  //   document.getElementById("memberSignature").focus();
	  //   return false;
      //   }
      // if(document.getElementById('fullPostalAddress').value == ""){
     //    alert("Please enter full postal address");
     //    document.getElementById('fullPostalAddress').focus();
     //    return false;
     // }
     // if(document.getElementById('pinCode').value == ""){
     //    alert("Please enter pin code");
     //    document.getElementById('pinCode').focus();
     //    return false;
     // }
     // if (numeric(document.getElementById('pinCode')) == false) {
	 //	 return false;
	 //  }
	 // if (document.getElementById('pinCode').value.length < 6 && document.getElementById('pinCode').value.length > 1) {
	 //	 alert("Please enter a valid six digit PIN code.");
	 //	 document.getElementById('pinCode').value = "";
	 //	 document.getElementById('pinCode').focus();
	 //	 return false;
	 // }
      if(document.getElementById('submissionDate').value == ""){
         alert("Please enter date.");
		 document.getElementById("submissionDate").focus();
		 return false;
      }var temp=confirm('Please check all details for correction if any, before submit.');
		if(temp==true) {
		return true;
	  }else{
         return false;
      }
 }
    function disableBankInfo(){ 
        if(document.getElementById("ByPostalMoney").checked == true){
           document.getElementById('sbAccountNo').value = "";
           document.getElementById('sbAccountNo').readOnly = true;
           document.getElementById('bankName').value = "";
           document.getElementById('bankName').readOnly = true;
           document.getElementById('branchName').value = "";
           document.getElementById('branchName').readOnly = true;
           document.getElementById('branchFullAddress').value = "";
           document.getElementById('branchFullAddress').readOnly = true;
        }
        if(document.getElementById("AccountPayeeCheque").checked == true){
           document.getElementById('sbAccountNo').readOnly = false;
           document.getElementById('bankName').readOnly = false;
           document.getElementById('branchName').readOnly = false;
           document.getElementById('branchFullAddress').readOnly = false;
        }
    }	
// Ended by Vidya  
 //By Atul for Eligibility Register   
   function checkOnSubmit(){
	 
	    if(document.getElementById("locationId").selectedIndex==0){
	    	alert('Please select a location');
	     	document.getElementById('locationId').focus();	
	    	return false;
	    }
	    else if(document.getElementById("year").selectedIndex==0){
	    	alert('Please select a year');
	     	document.getElementById('year').focus();	
	    	return false;
	    }
	    return true;
   } 
    
   
		function onChange(){
			var spBranchIDD = document.getElementById('spBranchIDD');
			var peBranchIDD = document.getElementById('peBranchIDD');
			populateRequestforInAndOutReport('spBranchIDD',spBranchIDD , 'peBranchIDD', peBranchIDD, 'locationId', null);
			}
			
			function onSubmitCheck(){
			if(document.getElementById("peBranchIDD").selectedIndex==0){
				alert("Please select a branch");
				document.getElementById("peBranchIDD").focus();
				return false;
			}
			else if(document.getElementById("spBranchIDD").selectedIndex==0){
				alert("Please Service Provider's branch");
				document.getElementById("spBranchIDD").focus();
				return false;
			}
			else if(document.getElementById("locationId").selectedIndex==0){
				alert("Please select a location");
				document.getElementById("locationId").focus();
				return false;
			}
			else if(document.getElementById("year").selectedIndex==0){
				alert("Please select a year");
				document.getElementById("year").focus();
				return false;
			}
			return true;
			
		}	

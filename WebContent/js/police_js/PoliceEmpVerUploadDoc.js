function confirmation() {



	this.requiredString('witness1NameId');



	requiredString('witness2NameId');
	requiredString('witness1AddressId');
	requiredString('witness2AddressId');
	requiredNumericMinimum('witness1ContactNoId',10);
	requiredNumericMinimum('witness2ContactNoId',10);
	requiredNumericMinimum('witness1LandlineContactId',10);
	requiredNumericMinimum('witness2LandlineContactId',10);
	requiredString('verifyingOfficerId');
	requiredString('badgeNoId');
	requiredString('upload_pvr_doc');

	var status = confirm("Are you sure you are uploading the correct PVR ?");

	if (status == true) {
		return true;

	} else {
		return false;
	}

}

/**
 * Live Validation
 */

function requiredString(styleId){
	var temp = styleId;

var required = new LiveValidation(temp, {
		validMessage : '',
		wait : 500
	});
	required.add(Validate.Presence, {
		failureMessage : "Required"
	});
	}


function requiredNumeric(styleId){

	var temp = styleId;

var required = new LiveValidation(temp, {
		validMessage : '',
		wait : 500
	});
	required.add(Validate.Presence, {
		failureMessage : "Required"
	});

	required.add( Validate.Numericality );




}


function requiredNumericMinimum(styleId,minLength){

	var temp = styleId;

var required = new LiveValidation(temp, {
		validMessage : '',
		wait : 500
	});
	required.add(Validate.Presence, {
		failureMessage : "Required"
	});

	required.add( Validate.Numericality );

	required.add(Validate.Length, { minimum: minLength } );


}

function viewUploadDocConfirmation() {



	requiredString('upload_pvr_doc');

	var status = confirm("Are you sure you are uploading the correct PVR ?");

	if (status == true) {
		return true;

	} else {
		return false;
	}

}

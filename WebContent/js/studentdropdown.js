
	$(document).ready(function() {
		$('#permanentCountry').change(function(event) {
			var $country = $("select#permanentCountry").val();
			$.get('StateCtl', {
				countryname : $country
			}, function(responseJson) {
				var $select = $('#permanentState');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#permanentState').change(function(event) {
			var $state = $("select#permanentState").val();
			$.get('DistrictCtl', {
				statename : $state
			}, function(responseJson) {
				var $select = $('#permanentDistrict');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#permanentDistrict').change(function(event) {
			var $district = $("select#permanentDistrict").val();
			$.get('CityCtl', {
				districtname : $district
			}, function(responseJson) {
				var $select = $('#permanentCity');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#permanentCity').change(function(event) {
			var $postOffice = $("select#permanentDistrict").val();
			$.get('PostOfficeCtl', {
				districtname : $postOffice
			}, function(responseJson) {
				var $select = $('#permanentPostOffice');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#permanentPostOffice').change(function(event) {
			var $postOffice = $("select#permanentPostOffice").val();
			$.get('PinCodeCtl', {
				postOfficename : $postOffice
			}, function(responseJson) {
				var $input = $('#permanentPinCode');

				$.each(responseJson, function(key, value) {
					//    $('<option>').val(key).text(value).appendTo($select);  
					$input.val(value);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#presentCountry').change(function(event) {
			var $country = $("select#presentCountry").val();
			$.get('StateCtl', {
				countryname : $country
			}, function(responseJson) {
				var $select = $('#presentState');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#presentState').change(function(event) {
			var $state = $("select#presentState").val();
			$.get('DistrictCtl', {
				statename : $state
			}, function(responseJson) {
				var $select = $('#presentDistrict');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#presentDistrict').change(function(event) {
			var $district = $("select#presentDistrict").val();
			$.get('CityCtl', {
				districtname : $district
			}, function(responseJson) {
				var $select = $('#presentCity');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#presentCity').change(function(event) {
			var $postOffice = $("select#presentDistrict").val();
			$.get('PostOfficeCtl', {
				districtname : $postOffice
			}, function(responseJson) {
				var $select = $('#presentPostOffice');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#presentPostOffice').change(function(event) {
			var $postOffice = $("select#presentPostOffice").val();
			$.get('PinCodeCtl', {
				postOfficename : $postOffice
			}, function(responseJson) {
				var $input = $('#presentPinCode');

				$.each(responseJson, function(key, value) {
					//    $('<option>').val(key).text(value).appendTo($select);  
					$input.val(value);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#underMetricCountry').change(function(event) {
			var $country = $("select#underMetricCountry").val();
			$.get('StateCtl', {
				countryname : $country
			}, function(responseJson) {
				var $select = $('#underMetricState');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#underMetricState').change(function(event) {
			var $state = $("select#underMetricState").val();
			$.get('DistrictCtl', {
				statename : $state
			}, function(responseJson) {
				var $select = $('#underMetricDistrict');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#underMetricDistrict').change(function(event) {
			var $district = $("select#underMetricDistrict").val();
			$.get('CityCtl', {
				districtname : $district
			}, function(responseJson) {
				var $select = $('#underMetricCity');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#underMetricCity').change(function(event) {
			var $postOffice = $("select#underMetricDistrict").val();
			$.get('PostOfficeCtl', {
				districtname : $postOffice
			}, function(responseJson) {
				var $select = $('#underMetricPostOffice');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#underMetricPostOffice').change(function(event) {
			var $postOffice = $("select#underMetricPostOffice").val();
			$.get('PinCodeCtl', {
				postOfficename : $postOffice
			}, function(responseJson) {
				var $input = $('#underMetricPinCode');

				$.each(responseJson, function(key, value) {
					//    $('<option>').val(key).text(value).appendTo($select);  
					$input.val(value);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#highSchoolCountry').change(function(event) {
			var $country = $("select#highSchoolCountry").val();
			$.get('StateCtl', {
				countryname : $country
			}, function(responseJson) {
				var $select = $('#highSchoolState');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#highSchoolState').change(function(event) {
			var $state = $("select#highSchoolState").val();
			$.get('DistrictCtl', {
				statename : $state
			}, function(responseJson) {
				var $select = $('#highSchoolDistrict');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#highSchoolDistrict').change(function(event) {
			var $district = $("select#highSchoolDistrict").val();
			$.get('CityCtl', {
				districtname : $district
			}, function(responseJson) {
				var $select = $('#highSchoolCity');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#highSchoolCity').change(function(event) {
			var $postOffice = $("select#highSchoolDistrict").val();
			$.get('PostOfficeCtl', {
				districtname : $postOffice
			}, function(responseJson) {
				var $select = $('#highScoolPostOffice');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#highScoolPostOffice').change(function(event) {
			var $postOffice = $("select#highScoolPostOffice").val();
			$.get('PinCodeCtl', {
				postOfficename : $postOffice
			}, function(responseJson) {
				var $input = $('#highSchoolPinCode');

				$.each(responseJson, function(key, value) {
					//    $('<option>').val(key).text(value).appendTo($select);  
					$input.val(value);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#higherSeconndaryCountry').change(function(event) {
			var $country = $("select#higherSeconndaryCountry").val();
			$.get('StateCtl', {
				countryname : $country
			}, function(responseJson) {
				var $select = $('#higherSecondaryState');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#higherSecondaryState').change(function(event) {
			var $state = $("select#higherSecondaryState").val();
			$.get('DistrictCtl', {
				statename : $state
			}, function(responseJson) {
				var $select = $('#higherSecondaryDistrict');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#higherSecondaryDistrict').change(function(event) {
			var $district = $("select#higherSecondaryDistrict").val();
			$.get('CityCtl', {
				districtname : $district
			}, function(responseJson) {
				var $select = $('#higherSecondaryCity');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#higherSecondaryCity').change(function(event) {
			var $postOffice = $("select#higherSecondaryDistrict").val();
			$.get('PostOfficeCtl', {
				districtname : $postOffice
			}, function(responseJson) {
				var $select = $('#higherSecondaryPostOffice');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#higherSecondaryPostOffice').change(function(event) {
			var $postOffice = $("select#higherSecondaryPostOffice").val();
			$.get('PinCodeCtl', {
				postOfficename : $postOffice
			}, function(responseJson) {
				var $input = $('#higherSecondaryPinCode');

				$.each(responseJson, function(key, value) {
					//    $('<option>').val(key).text(value).appendTo($select);  
					$input.val(value);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#graduationCountry').change(function(event) {
			var $country = $("select#graduationCountry").val();
			$.get('StateCtl', {
				countryname : $country
			}, function(responseJson) {
				var $select = $('#graduationState');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#graduationState').change(function(event) {
			var $state = $("select#graduationState").val();
			$.get('DistrictCtl', {
				statename : $state
			}, function(responseJson) {
				var $select = $('#graduationDistrict');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#graduationDistrict').change(function(event) {
			var $district = $("select#graduationDistrict").val();
			$.get('CityCtl', {
				districtname : $district
			}, function(responseJson) {
				var $select = $('#graduationCity');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#graduationCity').change(function(event) {
			var $postOffice = $("select#graduationDistrict").val();
			$.get('PostOfficeCtl', {
				districtname : $postOffice
			}, function(responseJson) {
				var $select = $('#graduationPostOffice');
				$select.find('option').remove();
				$.each(responseJson, function(key, value) {
					$('<option>').val(key).text(value).appendTo($select);
				});
			});
		});
	});

	$(document).ready(function() {
		$('#graduationPostOffice').change(function(event) {
			var $postOffice = $("select#graduationPostOffice").val();
			$.get('PinCodeCtl', {
				postOfficename : $postOffice
			}, function(responseJson) {
				var $input = $('#graduationPinCode');

				$.each(responseJson, function(key, value) {
					//    $('<option>').val(key).text(value).appendTo($select);  
					$input.val(value);
				});
			});
		});
	});


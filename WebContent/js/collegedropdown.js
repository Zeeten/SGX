 $(document).ready(function() {
        $('#country').change(function(event) {  
        var $country=$("select#country").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#state');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#state').change(function(event) {  
        var $state=$("select#state").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#district');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#district').change(function(event) {  
        var $district=$("select#district").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#city');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#city').change(function(event) {  
        var $district=$("select#district").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#area');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#area').change(function(event) {  
        var $district=$("select#district").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#postOffice');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#postOffice').change(function(event) {  
        var $postOffice=$("select#postOffice").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#pinCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#esicStateId').change(function(event) {  
        var $state=$("select#esicStateId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#esicDistrictId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#epfStateId').change(function(event) {  
        var $state=$("select#epfStateId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#epfDistrictId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#profStateId').change(function(event) {  
        var $state=$("select#profStateId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#profDistrictId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#serStateId').change(function(event) {  
        var $state=$("select#serStateId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#serDistrictId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#countryOneId').change(function(event) {  
        var $country=$("select#countryOneId").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateOneId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#countryTwoId').change(function(event) {  
        var $country=$("select#countryTwoId").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateTwoId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#countryThreeId').change(function(event) {  
        var $country=$("select#countryThreeId").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateThreeId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#country4Id').change(function(event) {  
        var $country=$("select#country4Id").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#state4Id');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#stateOneId').change(function(event) {  
        var $state=$("select#stateOneId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#district1Id');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#stateTwoId').change(function(event) {  
        var $state=$("select#stateTwoId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#district2Id');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#stateThreeId').change(function(event) {  
        var $state=$("select#stateThreeId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#district3Id');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#state4Id').change(function(event) {  
        var $state=$("select#state4Id").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#district4Id');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#ownerCountryId').change(function(event) {  
        var $country=$("select#ownerCountryId").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#ownerStateId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#ownerStateId').change(function(event) {  
        var $state=$("select#ownerStateId").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#ownerDistrictId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#ownerDistrictId').change(function(event) {  
        var $district=$("select#ownerDistrictId").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#ownerCityId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#ownerCityId').change(function(event) {  
        var $district=$("select#ownerDistrictId").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#ownerAreaId');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#ownerAreaId').change(function(event) {  
        var $district=$("select#ownerDistrictId").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#ownerPostOfficeId');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#ownerPostOfficeId').change(function(event) {  
        var $postOffice=$("select#ownerPostOfficeId").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#ownerPINCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          

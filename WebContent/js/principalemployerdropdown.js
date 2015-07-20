
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

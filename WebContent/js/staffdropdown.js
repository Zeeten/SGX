
    $(function () {
    $('#same').on('change', function () {
       
        var checked = $(this).prop('checked');
        $('#presentRoad').prop('disabled', checked);
        $('#presentHouseNo').prop('disabled', checked);
        $('#presentVillage').prop('disabled', checked);
        $('#countryPresent').prop('disabled', checked);
        $('#statePresent').prop('disabled', checked);
        $('#districtPresent').prop('disabled', checked);
        $('#cityPresent').prop('disabled', checked);
        $('#areaPresrent').prop('disabled', checked);
        $('#postOfficePresent').prop('disabled', checked);
        $('#persentPinCode').prop('disabled', checked);
        if($(this).prop('checked')){
            $(this).val('TRUE');
       }else{
            $(this).val('FALSE');
       }
   
    });
});
   
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
        $('#countryPresent').change(function(event) {  
        var $country=$("select#country").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#statePresent');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#statePresent').change(function(event) {  
        var $state=$("select#statePresent").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#districtPresent');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#districtPresent').change(function(event) {  
        var $district=$("select#districtPresent").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#cityPresent');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#cityPresent').change(function(event) {  
        var $district=$("select#districtPresent").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#areaPresrent');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#areaPresrent').change(function(event) {  
        var $district=$("select#districtPresent").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#postOfficePresent');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#postOfficePresent').change(function(event) {  
        var $postOffice=$("select#postOfficePresent").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#persentPinCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#countryHigh').change(function(event) {  
        var $country=$("select#countryHigh").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateHigh');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#stateHigh').change(function(event) {  
        var $state=$("select#stateHigh").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#districtHigh');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#districtHigh').change(function(event) {  
        var $district=$("select#districtHigh").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#cityHigh');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#cityHigh').change(function(event) {  
        var $district=$("select#districtHigh").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#areaHigh');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#areaHigh').change(function(event) {  
        var $district=$("select#districtHigh").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#postOfficeHigh');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#postOfficeHigh').change(function(event) {  
        var $postOffice=$("select#postOfficeHigh").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#highPinCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#countryHigher').change(function(event) {  
        var $country=$("select#countryHigher").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateHigher');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#stateHigher').change(function(event) {  
        var $state=$("select#stateHigher").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#districtHigher');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#districtHigher').change(function(event) {  
        var $district=$("select#districtHigher").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#cityHigher');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#cityHigher').change(function(event) {  
        var $district=$("select#districtHigher").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#areaHigher');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#areaHigher').change(function(event) {  
        var $district=$("select#districtHigher").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#postOfficeHigher');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#postOfficeHigher').change(function(event) {  
        var $postOffice=$("select#postOfficeHigher").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#higherPinCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#countryGraduate').change(function(event) {  
        var $country=$("select#countryGraduate").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#stateGraduate').change(function(event) {  
        var $state=$("select#stateGraduate").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#districtGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#districtGraduate').change(function(event) {  
        var $district=$("select#districtGraduate").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#cityGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          

    $(document).ready(function() {
        $('#cityGraduate').change(function(event) {  
        var $district=$("select#districtGraduate").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#areaGraduate');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#areaGraduate').change(function(event) {  
        var $district=$("select#districtGraduate").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#postOfficeGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#postOfficeGraduate').change(function(event) {  
        var $postOffice=$("select#postOfficeGraduate").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#graduatePinCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#countryHigherGraduate').change(function(event) {  
        var $country=$("select#countryHigherGraduate").val();
           $.get('StateCtl',{countryname:$country},function(responseJson) {   
           var $select = $('#stateHigherGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#stateHigherGraduate').change(function(event) {  
        var $state=$("select#stateHigherGraduate").val();
           $.get('DistrictCtl',{statename:$state},function(responseJson) {   
           var $select = $('#districtHigherGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#districtHigherGraduate').change(function(event) {  
        var $district=$("select#districtHigherGraduate").val();
           $.get('CityCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#cityHigherGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#cityHigherGraduate').change(function(event) {  
        var $district=$("select#districtHigherGraduate").val();
           $.get('AreaCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#areaHigherGraduate');                           
               $select.find('option').remove();  
              
               $.each(responseJson, function(key, value) {    
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#areaHigherGraduate').change(function(event) {  
        var $district=$("select#districtHigherGraduate").val();
           $.get('PostOfficeCtl',{districtname:$district},function(responseJson) {   
           var $select = $('#postOfficeHigherGraduate');                           
               $select.find('option').remove();                          
               $.each(responseJson, function(key, value) {               
                   $('<option>').val(key).text(value).appendTo($select);      
                    });
            });
        });
    });          
    $(document).ready(function() {
        $('#postOfficeHigherGraduate').change(function(event) {  
        var $postOffice=$("select#postOfficeHigherGraduate").val();
           $.get('PinCodeCtl',{postOfficename:$postOffice},function(responseJson) {   
           var $input = $('#higherGraduatePinCode');                           
                                     
               $.each(responseJson, function(key, value) {               
               //    $('<option>').val(key).text(value).appendTo($select);  
        $input.val(value);
                    });
            });
        });
    });          

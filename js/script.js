$(function(){
    $('#phase1').css("display","block");
    $('#phase2').css("display","none");
    $('#phase3').css("display","none");
    $('#submit').css("display","none");
    
    $('.ename').hide();
    $('.eemail').hide();
    $('.enum').hide();
    $('.epass').hide();
    $('.minpass').hide();
    $('.matchpass').hide();
    $('.ecode').hide();
    $('.egender').hide();
    
        $(".next").click(function(){

            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var num = $("#contact_number").val();
            var email = $("#email").val();

            if(fname == '' || lname == ''){
                $('.ename').show();
                if(!fname){
                    $('#fname').addClass("redBorder");
                     $('#fname').focus();
                    return false;
                }
                if(!lname){
                    $('#fname').removeClass("redBorder");
                    $('#lname').addClass("redBorder");
                    $('lname').focus();
                }
               
                return false;
            }else{
                $('.ename').hide();
                $('#fname').removeClass("redBorder");
                $('#lname').removeClass("redBorder");
            }

            /*number Validation*/

            if($('select[name=code]').val() == 0){
                $('.ecode').show();
                $('select#select').focus();
                return false;
            }else{
                $('.ecode').hide();
            }

            if(!validateNumber(num)){
                $('.enum').show();
                $('#contact_number').addClass("redBorder");
                 $('#contact_number').focus();
                return false;
            }else{
                $('.enum').hide();
                $('#contact_number').removeClass("redBorder");
            }
            function validateNumber(num){
                var numRegex = /^[789]\d{9}$/; 
                if(numRegex.test(num)){
                    return true;
                }else{
                    return false;
                }
            }

            /*email validation*/
            if(!validateEmail(email)){
                $('.eemail').show();
                $('#email').addClass("redBorder");
                $('#email').focus();
                return false;
            }else{
                $('.eemail').hide();
                $('#email').removeClass("redBorder");
            }
            function validateEmail(email){
                var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
                if(emailRegex.test(email)){
                    return true;
                }else{
                    return false;
                }
            }
            /*Gender*/
            if($('select[name=gender]').val() == 0){
                $('.egender').show();
                $('select#selectgender').focus();
                return false;
            }else{
                $('.egender').hide();
            }

            $('#phase1').css("display","none");
            $('#phase2').css("display","block");
            $('#step2').addClass("active");
        }); 

        $("#phase2 .next").click(function(){
            
            var pass1 = $("#pass").val();
            var pass2 = $("#cpass").val();
            if(pass1 == ''){
                $('.epass').show();
                $('#pass').addClass("redBorder");
                $('#pass').focus();
                return false;
            }else if (pass1.length<5){
                $('.epass').hide();
                $('#pass').addClass("redBorder");
                $('.minpass').show();
                $('#pass').focus();
                return false;
                
            }else if(pass2 == ''){
                    $('.minpass').hide();
                    $('.epass').show();
                    $('#cpass').addClass("redBorder");
                    $('#cpass').focus();
                    return false;
            }else if(!(pass1 == pass2)){
                console.log("hello");
                    $('#pass').removeClass("redBorder");
                    $('.epass').hide();
                    $('.minpass').hide();
                    $('.matchpass').show();
                    $('#cpass').focus();
                    return false;
            }else{
                $('.epass').hide();
                $('.minpass').hide();
                $('matchpass').hide();
                $('#cpass').removeClass("redBorder");
            }
            
            $('#phase1').css("display","none");
            $('#phase2').css("display","none");
            $('#phase3').css("display","block");
            $('#step3').addClass("active");
            
        });
        
        /*previous*/
    $('#phase2 .previous').click(function(){
            $('#phase2').css("display","none");
            $('#phase1').css("display","block");
            $('#step2').removeClass("active");
        
    });
    
    $('#phase3 .submit').click(function(){
        $('#phase1').css("display","none");
        $('#phase2').css("display","none");
        $('#phase3').css("display","none");
        $('#submit').css("display","block");
        
    });
    
    

    
});

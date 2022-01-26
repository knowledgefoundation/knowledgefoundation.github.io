function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://rlf7zqx5m8.execute-api.ap-south-1.amazonaws.com/PROD";

            var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#name-input").val())) {
                         alert ("Name can not less than 2 char");
                return;
            }

            if ($("#email-input").val()=="") {
              alert ("Please enter your email id");
              return;
            }
            var mobilere = /[0-9]{10}/;
            if (!mobilere.test($("#phone-input").val())) {
                alert ("Please enter valid mobile number");
                return;
            }
          
            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.test($("#email-input").val())) {
                alert ("Please enter valid email address");
                return;
            }

            if ($("#company-input").val()=="") {
              alert ("Please enter your Institution or Company Name");
              return;
          }

       var name = $("#name-input").val();
       var phone = $("#phone-input").val();
       var email = $("#email-input").val();
       var company = $("#company-input").val();
       var message_input = $("#message-input").val();
       var data = {
          name : name,
          phone : phone,
          email : email,
          company : company,
          message_input : message_input
        };

       $.ajax({
         type: "POST",
         url : "https://rlf7zqx5m8.execute-api.ap-south-1.amazonaws.com/PROD",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         
         success: function () {
            // clear form and show a success message
           window.location.href = "../contactSuccess"
         },
         error: function () {
           // show an error message

           alert("UnSuccessfull");
         }});
     }

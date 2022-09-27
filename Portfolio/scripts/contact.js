$("#formValidation").validate({
    rules:{
        name:{
            minlength:2
        },
        email:{
            email:true
        }
    },
    message:{
       name:{
        required:"Enter Your name!",
        minlength:"Please enter atlest 2 characters."
       },
       email:"Enter Your Email!",
       message:"Enter Your Message"
    },

    submitHandler:function(form){
        form.submit();
    }
});
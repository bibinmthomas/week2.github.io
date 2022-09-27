$("#formValidate").validate({
    rules:{
        email:{
            email:true
        }
    },
    message:{
       email:"Enter Your Email!"
    },

    submitHandler:function(form){
        form.submit();
    }
});
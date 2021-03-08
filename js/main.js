function validate(){
    let userName = document.getElementById('name').value;
    let emailAddr = document.getElementById('mail').value;
    let mobileNum = document.getElementById('phone').value;
    let passWord = document.getElementById('pwd').value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regpass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let regnum = /^([+]\d{2}[])?\d{10}$/;
    let nameValue = document.getElementById("name-value");
    let mailValue = document.getElementById("mail-value");
    let mobileValue = document.getElementById("mobile-value");
    let passwordValue = document.getElementById("password-value");

    // NAME
    if (userName == "") {
        nameValue.style.display = "block";
        setTimeout(function () {
          nameValue.style.display = "none";
        }, 6000);
      }
    
    // EMAIL
    else if(!reg.test(emailAddr)){
        mailValue.style.display = "block";
        setTimeout(function () {
            mailValue.style.display = "none";
        }, 6000);
    }
    
    // NUMBER  mobileNum.length != 10
    else if((!regnum.test(mobileNum)) || (Number.isInteger(mobileNum)))
    {
        mobileValue.style.display = "block";
        setTimeout(function () {
            mobileValue.style.display ="none";
        }, 6000);
    }
    
    // PASSWORD
    else if(!regpass.test(passWord)){
        passwordValue.style.display = "block";
        setTimeout(function (){
        passwordValue.style.display = "none"; 
        }, 6000);
    }
    // else if((passWord.length <= 6) || (passWord.length >= 18)) {
    //     alert('Minimum 6 characters');
    // }
    
    // else if(passWord.length >= 18){
    //     alert('Maximum 18 characters');
    // } 
    else {
        alert('Successfully logged in')
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("pwd").value = "";
    }
    }

    
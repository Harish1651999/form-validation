function validate(){
    let userName = document.getElementById('name').value;
    let emailAddr = document.getElementById('mail').value;
    let mobileNum = document.getElementById('phone').value;
    let passWord = document.getElementById('pwd').value;
    let nameValue = document.getElementById("name-value");
    
    if (userName == "") {
        nameValue.style.display = "block";
        setTimeout(function () {
          nameValue.style.display = "none";
        }, 6000);
      }
    
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(emailAddr)){
        alert('Invalid email');
    }
    
    if((mobileNum.length != 10) || (Number.isInteger(mobileNum)))
    {
        alert('Enter correct mobile number');
    }
    
    if(passWord.length <= 6){
        alert('Minimum 6 characters');
    }
    
    if(passWord.length >= 18){
        alert('Maximum 18 characters');
    }
    
    // setTimeout(timer(){

    // },3000);
    // document.getElementById('name-value').innerText  = "Please enter your name";
    }

    
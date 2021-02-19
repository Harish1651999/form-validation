function validate(){
    let userName = document.getElementById('name').value;
    let emailAddr = document.getElementById('mail').value;
    let mobileNum = document.getElementById('phone').value;
    let passWord = document.getElementById('pwd').value;
    
    if(userName == ""){
        alert('Please enter your name')
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
    // document.getElementById('name-value').textContent = userName;
    }
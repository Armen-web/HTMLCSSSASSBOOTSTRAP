
   
    let contact = []
function myFunction(){
    let cname = document.getElementById('name');
    let email = document.getElementById('email')
    let subject = document.getElementById('subject')
    let message = document.getElementById('message')
    contact.push(cname.value,email.value,subject.value,message.value)
}

function validate(){
    let cname = document.getElementById('name');
    if(cname.value =="" || cname.value === typeof( number)){
        cname.classList.toggle('my-style')
        console.log("error")
    }else{
        cname.classList.toggle('my-other-class')
        console.log("true")
    }
    
    let email = document.getElementById('email')
    let regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value=="" || email.value.match(regexp)){
        console.log("email: error")
        email.classList.toggle('my-style')
    }else{
        email.classList.toggle('my-other-class')
    }
    let subject = document.getElementById('subject')
    if(subject.value =="" || subject.value === typeof( number)){
        subject.classList.toggle('my-style')
        console.log("error")
    }else{
        subject.classList.toggle('my-other-class')
        console.log("true")
    }
    let message = document.getElementById('message')
}
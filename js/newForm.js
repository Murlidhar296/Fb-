const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullname').value;
    // const email = document.getElementById('email').value;
    const mobile = document.getElementById('phone').value;
    validateForm();
});

function validateForm(){
    const fullName = document.getElementById('fullname').value;
    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(fullName);
    // const email = document.getElementById('email').value;
    const mobile = document.getElementById('phone').value;

    if(!fullName){
        console.warn(fullName);
        document.getElementById('msg1').textContent = "Please enter your fullname";
        document.getElementById('msg1').style.color = "red";
    }

    // if(!(email)){
    //     document.getElementById('msg3').textContent = "Please enter your email";
    //     document.getElementById('msg3').style.color = "red";
    // }

    if(!mobile){
        document.getElementById('msg2').textContent = "Please enter your mobile number";
        document.getElementById('msg2').style.color = "red";
    }
}

document.getElementById('fullname').addEventListener('input',() => {
    if(!(!fullname)){
        document.getElementById('msg1').textContent = "";
    }
});

// document.getElementById('email').addEventListener('input',() => {
//     if(!(!email)){
//         document.getElementById('msg3').textContent = "";
//     }
// });

document.getElementById('phone').addEventListener('input',() => {
    if(!(!phone)){
        document.getElementById('msg2').textContent = "";
    }
});


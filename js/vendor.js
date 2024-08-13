
let temp;
const submitAction = document.getElementById('submit');
const random_number = document.getElementById('random-number');
    let num = Math.floor(Math.random() * 100000);
    random_number.textContent = num;
    random_number.style.backgroundColor = "lightcyan";
    random_number.style.width = "3.5rem";
    random_number.style.color = "black";
    random_number.style.paddingLeft = ".3rem";
    random_number.style.fontWeight = "600";


submitAction.addEventListener('click',(e) => {
    e.preventDefault();
    validateData();
});


function validateData(){
    const login = document.getElementById('login_id').value;
    const pass = document.getElementById('password-field').value;
    const code = document.getElementById('code').value;


    if(!login){
        document.getElementById('msgs1').textContent = "Please fill Login ID";
        document.getElementById('msgs1').style.color = "red";
    }else{
        document.getElementById('msgs1').textContent = "";
    }

    if(!pass){
        document.getElementById('msgs2').textContent = "Please fill Password";
        document.getElementById('msgs2').style.color = "red";
    }else{
        document.getElementById('msgs2').textContent = "";
    }

    if(!code){
        document.getElementById('msgs3').textContent = "Please fill Security Code";
        document.getElementById('msgs3').style.color = "red";
    }
    else if(code === random_number.textContent){

        document.getElementById('msgs3').textContent = "";
        document.getElementById('msgs3').style.color = "white"; 
    }
    else{
        document.getElementById('msgs3').textContent = "";
        document.getElementById('msgs3').textContent = "Security code not matched";
        document.getElementById('msgs3').style.color = "red";
    }
};

    
